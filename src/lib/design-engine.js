// Pure composition engine, shared by the preview, Markdown export and regression checks.
export const sections = [
  {
    key: "colors",
    label: "Paleta de colores",
    description: "Acentos, superficies y contraste",
    icon: "palette",
  },
  {
    key: "typography",
    label: "Tipografía",
    description: "Familias, pesos y jerarquía",
    icon: "type",
  },
  {
    key: "layout",
    label: "Distribución de contenido",
    description: "Columnas y composición",
    icon: "layout",
  },
  {
    key: "spacing",
    label: "Espaciado",
    description: "Ritmo y densidad del contenido",
    icon: "spacing",
  },
  {
    key: "shape",
    label: "Bordes y formas",
    description: "Radios de tarjetas y contenedores",
    icon: "shape",
  },
  {
    key: "elevation",
    label: "Sombras y profundidad",
    description: "Elevación de las superficies",
    icon: "layers",
  },
  {
    key: "buttons",
    label: "Botones",
    description: "Geometría y estados de las acciones",
    icon: "button",
  },
  {
    key: "inputs",
    label: "Campos y controles",
    description: "Formularios e interacción",
    icon: "inputs",
  },
];
export const defaultSelection = Object.fromEntries(
  sections.map((s) => [s.key, "supabase"]),
);
export const pick = (object, keys, fallback) =>
  keys
    .map((k) => object?.[k])
    .find((v) => v !== undefined && v !== null && v !== "") ?? fallback;
const numeric = (value, fallback) =>
  Number.isFinite(parseFloat(value)) ? parseFloat(value) : fallback;
const px = (value, fallback) => `${numeric(value, fallback)}px`;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
export function luminance(color) {
  let rgb;
  if (/^#[\da-f]{3,8}$/i.test(color ?? "")) {
    let hex = color.slice(1);
    if (hex.length === 3)
      hex = hex
        .split("")
        .map((x) => x + x)
        .join("");
    rgb = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  } else if (/^rgba?\(/.test(color ?? ""))
    rgb = color
      .match(/[\d.]+/g)
      .slice(0, 3)
      .map(Number)
      .map((n) => n / 255);
  else return 0.5;
  const [r, g, b] = rgb.map((v) =>
    v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function readableOn(bg) {
  return luminance(bg) > 0.208
    ? "#171717"
    : luminance(bg) > 0.179
      ? "#000000"
      : "#ffffff";
}
function contrasting(fg, bg, fallback) {
  return (Math.max(luminance(fg), luminance(bg)) + 0.05) /
    (Math.min(luminance(fg), luminance(bg)) + 0.05) >=
    4.5
    ? fg
    : fallback;
}
export function nativePalette(brand) {
  const c = brand.colors;
  const primary = pick(
    c,
    ["primary", "accent", "brand", "spotify-green", "kraken-purple", "white"],
    Object.values(c)[0] ?? "#3ecf8e",
  );
  const background = pick(
    c,
    ["canvas", "background", "bg", "near-black"],
    "#ffffff",
  );
  const dark = luminance(background) < 0.18;
  const card = pick(
    c,
    [
      "surface",
      "surface-1",
      "surface-card",
      "canvas-soft",
      "background-secondary",
      dark ? "dark-surface" : "surface-light",
    ],
    background,
  );
  const foreground = pick(
    c,
    ["ink", "text", "foreground", dark ? "on-dark" : "on-light"],
    readableOn(card),
  );
  const muted = pick(
    c,
    [
      "ink-mute",
      "ink-muted",
      "secondary-text",
      "text-secondary",
      "muted",
      "mute",
    ],
    dark ? "#aeb4b0" : "#666666",
  );
  const secondary = pick(
    c,
    ["surface-2", "surface-elevated", "canvas-soft", "background-secondary"],
    `color-mix(in srgb, ${card}, ${foreground} 7%)`,
  );
  const secondaryForeground = pick(
    c,
    ["on-secondary", "secondary-foreground"],
    foreground,
  );
  const accent = pick(
    c,
    ["surface-hover", "surface-3", "hover-background"],
    `color-mix(in srgb, ${card}, ${foreground} 12%)`,
  );
  return {
    primary,
    background,
    card,
    foreground,
    muted,
    secondary,
    secondaryForeground,
    accent,
    onPrimary: contrasting(
      pick(c, ["on-primary"], readableOn(primary)),
      primary,
      readableOn(primary),
    ),
    border: pick(
      c,
      ["hairline", "border", "border-gray", "divider"],
      dark ? "#363a38" : "#dfdfdf",
    ),
    success: pick(
      c,
      ["success", "positive", "success-green", "green", "primary-soft"],
      primary,
    ),
    warning: pick(
      c,
      ["warning", "warning-orange", "accent-yellow", "yellow"],
      primary,
    ),
    error: pick(
      c,
      ["error", "danger", "negative-red", "accent-tomato", "red"],
      primary,
    ),
    info: pick(
      c,
      ["info", "announcement-blue", "accent-blue", "blue"],
      primary,
    ),
    mode: dark ? "dark" : "light",
    adapted: false,
  };
}
function typeStyle(brand, keys, fallback) {
  const candidates = brand.typography;
  return pick(
    candidates,
    keys,
    Object.entries(candidates).find(([k]) =>
      keys.some((x) => k.includes(x)),
    )?.[1] ?? fallback,
  );
}
function componentSpec(brand, kind) {
  const regex =
    kind === "buttons"
      ? /button.*primary|primary.*button|button-solid|button-filled/
      : /text-input|input-text|^input$|search-input|form-input/;
  const entry = Object.entries(brand.components).find(
    ([key]) => regex.test(key) && !/pressed|active|disabled|focus/.test(key),
  );
  if (entry) return { ...entry[1], source: entry[0], inferred: false };
  const guidance = brand.notes.components.filter((g) =>
    kind === "buttons"
      ? /button/i.test(g.section)
      : /input|form/i.test(g.section),
  );
  const text = guidance.map((g) => g.content).join("\n");
  const padding = text
    .match(/padding[:\s`*]+((?:\d+(?:\.\d+)?px\s*){1,4})/i)?.[1]
    ?.trim();
  const radius =
    text.match(/(?:radius|rounded)[:\s`*]+(\d+(?:\.\d+)?(?:px|%))/i)?.[1] ??
    text.match(/rounded[^\n]*\{rounded\.([^}]+)\}/i)?.[1];
  return {
    padding,
    rounded: radius && (brand.radii[radius] ?? radius),
    source: guidance[0]?.section ?? "Respaldo del editor",
    inferred: true,
  };
}
function ownRadius(brand, spec, fallback) {
  const raw = spec.rounded ?? spec.borderRadius;
  const key = String(raw).match(/\{rounded\.([^}]+)\}/)?.[1];
  return key ? (brand.radii[key] ?? fallback) : (raw ?? fallback);
}
function safePadding(raw, fallback) {
  const parts = String(raw ?? fallback).match(/\d+(?:\.\d+)?px/g);
  if (!parts?.length) return fallback;
  // Fit the component gallery without losing each brand's padding proportions.
  return parts
    .slice(0, 4)
    .map((v, i) => `${clamp(parseFloat(v), i % 2 ? 8 : 4, i % 2 ? 32 : 16)}px`)
    .join(" ");
}
function radiusFor(brand, keys, fallback) {
  return pick(
    brand.radii,
    keys,
    brand.radiusValues?.filter((v) => numeric(v, 9999) < 100)[
      Math.min(3, (brand.radiusValues?.length ?? 1) - 1)
    ] ?? fallback,
  );
}
export function composeDesign(catalog, selection) {
  const byId = new Map(catalog.map((b) => [b.id, b]));
  const selected = Object.fromEntries(
    sections.map(({ key }) => [
      key,
      byId.get(selection[key]) ?? byId.get("supabase") ?? catalog[0],
    ]),
  );
  const palette = nativePalette(selected.colors);
  const t = selected.typography;
  const baseFamily = `'${t.families[0]?.family ?? "Inter"}', sans-serif`;
  const body = typeStyle(t, ["body", "body-md", "body-ui", "body-regular"], {
    fontFamily: baseFamily,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
  });
  const heading = typeStyle(
    t,
    [
      "display-lg",
      "section-heading",
      "heading-lg",
      "headline",
      "section-title",
      "display",
    ],
    { ...body, fontSize: "36px", fontWeight: 500 },
  );
  const mono = typeStyle(t, ["code", "mono"], {
    fontFamily: `'${t.families.find((f) => /Mono|Inconsolata/.test(f.family))?.family ?? "JetBrains Mono"}', monospace`,
  });
  const b = componentSpec(selected.buttons, "buttons"),
    i = componentSpec(selected.inputs, "inputs");
  const buttonType = typeStyle(
    selected.buttons,
    ["button", "button-md", "button-standard"],
    { fontWeight: 500, letterSpacing: 0 },
  );
  const smallRadius = radiusFor(selected.shape, ["md", "sm", "none"], "8px");
  const cardRadius = radiusFor(
    selected.shape,
    ["lg", "card", "md", "sm", "none"],
    "12px",
  );
  const buttonRadius = ownRadius(
    selected.buttons,
    b,
    radiusFor(selected.buttons, ["sm", "md", "none"], "6px"),
  );
  const inputRadius = ownRadius(
    selected.inputs,
    i,
    radiusFor(selected.inputs, ["sm", "md", "none"], "6px"),
  );
  const spacing = selected.spacing.spacing;
  const gap = clamp(
    numeric(
      pick(spacing, ["lg", "md"], selected.spacing.spacingValues?.[3]),
      16,
    ),
    8,
    32,
  );
  const padding = clamp(
    numeric(
      pick(spacing, ["xl", "lg"], selected.spacing.spacingValues?.[4]),
      24,
    ),
    12,
    32,
  );
  const css = {
    "--background": palette.background,
    "--card": palette.card,
    "--popover": palette.card,
    "--foreground": palette.foreground,
    "--primary": palette.primary,
    "--primary-foreground": palette.onPrimary,
    "--border": palette.border,
    "--muted-foreground": palette.muted,
    "--muted": `color-mix(in srgb, ${palette.card}, ${palette.foreground} 7%)`,
    "--secondary": palette.secondary,
    "--secondary-foreground": palette.secondaryForeground,
    "--accent": palette.accent,
    "--accent-foreground": palette.foreground,
    "--success": palette.success,
    "--warning": palette.warning,
    "--destructive": palette.error,
    "--info": palette.info,
    "--radius": smallRadius,
    "--card-radius": cardRadius,
    "--button-radius": buttonRadius,
    "--input-radius": inputRadius,
    "--preview-font": body.fontFamily ?? baseFamily,
    "--heading-font": heading.fontFamily ?? baseFamily,
    "--mono-font": mono.fontFamily,
    "--body-size": `${clamp(numeric(body.fontSize, 16), 14, 18)}px`,
    "--body-weight": numeric(body.fontWeight, 400),
    "--body-leading": numeric(body.lineHeight, 1.5),
    "--heading-size": `${clamp(numeric(heading.fontSize, 36), 24, 44)}px`,
    "--heading-weight": numeric(heading.fontWeight, 500),
    "--heading-tracking": px(heading.letterSpacing, 0),
    "--heading-leading": clamp(numeric(heading.lineHeight, 1.15), 1, 1.6),
    "--button-weight": numeric(buttonType.fontWeight, 500),
    "--button-tracking": px(buttonType.letterSpacing, 0),
    "--button-padding": safePadding(b.padding, "8px 16px"),
    "--input-padding": safePadding(i.padding, "8px 12px"),
    "--gallery-gap": `${gap}px`,
    "--sample-padding": `${padding}px`,
    "--preview-columns": selected.layout.columns,
    "--sample-shadow": selected.elevation.shadows[0] ?? "none",
  };
  return {
    selected,
    palette,
    css,
    components: { buttons: b, inputs: i },
    meta: {
      gap,
      padding,
      columns: selected.layout.columns,
      cardRadius,
      buttonRadius,
      inputRadius,
      bodyFont: body.fontFamily ?? baseFamily,
      headingFont: heading.fontFamily ?? baseFamily,
    },
    adaptations: [
      "La vista previa conserva el modo nativo de la paleta: fondo, superficie, texto, bordes y colores semánticos proceden de la marca seleccionada. El sidebar del editor permanece oscuro y no forma parte del sistema exportado. Solo el texto de los botones primarios se ajusta si necesita contraste mínimo 4.5:1.",
      "Galería responsive: máximo 3 columnas, 2 bajo 740 px de contenedor y 1 bajo 620 px. La aplicación mantiene una grilla exterior 4/8 en escritorio.",
      "Escala de muestra: títulos 24–44 px, texto 14–18 px, separación 8–32 px, relleno de tarjetas 12–32 px. Los tokens originales se conservan como referencia.",
      ...(b.inferred
        ? [
            `Botones (${selected.buttons.name}): ${b.source}. Se interpretó la guía textual; los valores no documentados usan un respaldo explícito.`,
          ]
        : []),
      ...(i.inferred
        ? [
            `Campos (${selected.inputs.name}): ${i.source}. Se interpretó la guía textual; los valores no documentados usan un respaldo explícito.`,
          ]
        : []),
    ],
  };
}
export function validSelection(catalog, value) {
  const ids = new Set(catalog.map((b) => b.id));
  return Object.fromEntries(
    sections.map(({ key }) => [
      key,
      ids.has(value?.[key]) ? value[key] : defaultSelection[key],
    ]),
  );
}
