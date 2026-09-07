// Resolve the full component catalog, retaining textual rules alongside tokens.
export function resolveToken(value, brand, palette) {
  return String(value ?? "").replace(
    /\{(colors|spacing|rounded)\.([^}]+)\}/g,
    (_, group, key) => {
      if (group !== "colors")
        return (
          (group === "rounded" ? brand.radii : brand.spacing)[key] ?? "0px"
        );
      const role = /on-primary/.test(key)
        ? "onPrimary"
        : /ink|text|on-dark|on-light/.test(key)
          ? "foreground"
          : /primary|accent|focus/.test(key)
            ? "primary"
            : /hairline|border/.test(key)
              ? "border"
              : /surface|soft/.test(key)
                ? "card"
                : /canvas|background/.test(key)
                  ? "background"
                  : null;
      return role ? palette[role] : (brand.colors[key] ?? palette.foreground);
    },
  );
}
export function inputRules(brand, palette) {
  const entries = Object.entries(brand.components);
  const [source, spec] = entries.find(
    ([k]) =>
      /text-input|input-text|^input$|search-input|search-pill|form-input/.test(
        k,
      ) && !/focus|error|disabled/.test(k),
  ) ?? ["Guía de formularios", {}];
  const guidance = brand.notes.components.filter((g) =>
    /input|form|field/i.test(g.section),
  );
  const text = guidance.map((g) => g.content).join("\n");
  const resolve = (v) => resolveToken(v, brand, palette);
  const underline =
    /bottom.{0,35}(border|hairline)|underline|border.bottom/i.test(text);
  const noRing = /no glow|no ring|no separate ring|without.{0,12}ring/i.test(
    text,
  );
  const inset = text.match(/rgba?\([^)]*\)[^\n`]*?inset/i)?.[0];
  const focusInk = /focus[^\n]*(ink|white)/i.test(text);
  const focus =
    entries.find(([k]) => /input.*focus|search-pill-focus/.test(k))?.[1] ?? {};
  const literal = (pattern) => text.match(pattern)?.[1];
  const focusBackground = literal(/Focus background[^\n]*?(#[\da-f]{6})/i);
  const focusWidth = literal(/(?:border thickens to|focus[^\n]*?)([12])px/i) ?? "2";
  const ringWidth = literal(/(\d+)px[^\n]{0,35}(?:outer halo|outer ring|focus ring|outline)/i) ?? "3";
  const padding =
    spec.padding ??
    text.match(/padding[:\s`*]+((?:\d+(?:\.\d+)?px\s*){1,4})/i)?.[1]?.trim() ??
    "12px";
  const radius =
    spec.rounded ??
    text.match(/(?:radius|rounded)[:\s`*]+(\d+(?:\.\d+)?px)/i)?.[1] ??
    (/floating label/i.test(text) ? "8px" : "6px");
  return {
    source,
    guidance,
    label: /floating.label/i.test(text) ? "floating" : "stacked",
    border: underline
      ? "underline"
      : /borderless|no border/i.test(text)
        ? "none"
        : "outline",
    css: {
      "--input-padding": resolve(padding),
      "--input-radius": resolve(radius),
      "--input-height": spec.height ?? "44px",
      "--input-bg": resolve(spec.backgroundColor ?? "{colors.canvas}"),
      "--input-color": resolve(spec.textColor ?? "{colors.ink}"),
      "--input-border": resolve(spec.borderColor ?? "{colors.hairline}"),
      "--input-focus-width": `${focusWidth}px`,
      "--input-focus-bg":
        focusBackground ??
        resolve(
          focus.backgroundColor ?? spec.backgroundColor ?? "{colors.canvas}",
        ),
      "--input-focus-color": /focus[^\n]*blue/i.test(text)
        ? palette.info
        : focusInk
          ? palette.foreground
          : palette.primary,
      "--input-focus-shadow":
        inset ??
        (noRing || underline
          ? "none"
          : `0 0 0 ${ringWidth}px color-mix(in srgb, ${palette.primary}, transparent 80%)`),
    },
    fallback:
      "Cuando no hay una regla de foco explícita se usa un halo de 3px al 20%; los colores de roles se componen con la paleta seleccionada.",
  };
}
export function contentRules(brand, palette) {
  const get = (regex) => {
    const entries = Object.entries(brand.components);
    const [source, spec] = regex.map(pattern => entries.find(([k]) => pattern.test(k))).find(Boolean) ?? ["Respaldo del editor", {}];
    return {
      source,
      style: {
        background: resolveToken(
          spec.backgroundColor ?? "{colors.canvas}",
          brand,
          palette,
        ),
        color: resolveToken(spec.textColor ?? "{colors.ink}", brand, palette),
        borderRadius: resolveToken(
          spec.rounded ?? "{rounded.lg}",
          brand,
          palette,
        ),
        padding: resolveToken(spec.padding ?? "20px", brand, palette),
        border: spec.borderColor
          ? `1px solid ${resolveToken(spec.borderColor, brand, palette)}`
          : "none",
      },
    };
  };
  return {
    product: get(
      [/^product-card$/, /^property-card$/, /store-utility-card/, /card-content|feature-card$/],
    ),
    finance: get(
      [/currency-converter-card/, /dashboard-mockup/, /reservation-card|pricing-card/, /card-content|feature-card$/],
    ),
    list: get([/story-row|amenity-row|faq-row|resource-tile/]),
  };
}
