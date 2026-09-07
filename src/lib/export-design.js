import { stringify } from "yaml";
import { sections } from "./design-engine.js";
const fenced = (value) =>
  `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
function sourceSection(key, source) {
  if (key === "shape") return { shape: source.shape, cards: source.components };
  if (key === "layout") return source.layout;
  if (key === "buttons" || key === "inputs") {
    const expression =
      key === "buttons" ? /button|cta/i : /input|form|field|search|control/i;
    return {
      tokens: Object.fromEntries(
        Object.entries(source.components.tokens).filter(([k]) =>
          expression.test(k),
        ),
      ),
      guidance: source.components.guidance.filter((g) =>
        expression.test(g.section),
      ),
    };
  }
  return source[key];
}
export function generateMarkdown(design, sources, fontManifest = []) {
  const selectedFonts = new Set(
    design.selected.typography.families.map((f) => f.family),
  );
  // The interface's mono fallback is local, too.
  selectedFonts.add("JetBrains Mono");
  const assets = fontManifest
    .filter((f) => selectedFonts.has(f.family))
    .map(({ family, css, files, licenseSource }) => ({
      family,
      stylesheet: css,
      files,
      licenseSource,
    }));
  const frontmatter = {
    version: "1.0",
    name: "Mi sistema de diseño",
    description: "Sistema compuesto en DESIGN.md Studio.",
    mode: design.palette.mode,
    sources: Object.fromEntries(
      sections.map(({ key }) => [
        key,
        `dataset/${design.selected[key].id}.json`,
      ]),
    ),
    colors: {
      ...design.selected.colors.colors,
      primary: design.palette.primary,
      canvas: design.palette.background,
      surface: design.palette.card,
      ink: design.palette.foreground,
      "on-primary": design.palette.onPrimary,
      hairline: design.palette.border,
    },
    // Normalized preview roles point back to the unmodified token name.
    // Consumers can use the roles without losing the brand's native vocabulary.
    colorRoleSources: design.palette.sources,
    typography: design.selected.typography.typography,
    rounded: design.selected.shape.radii,
    spacing: design.selected.layout.spacing,
    components: {
      button: {
        borderRadius: design.meta.buttonRadius,
        padding: design.css["--button-padding"],
        fontWeight: design.css["--button-weight"],
        letterSpacing: design.css["--button-tracking"],
      },
      input: {
        ...design.inputs,
        borderRadius: design.meta.inputRadius,
        padding: design.css["--input-padding"],
      },
      content: design.content,
      card: {
        borderRadius: design.meta.cardRadius,
        padding: design.css["--sample-padding"],
        boxShadow: design.css["--sample-shadow"],
      },
    },
    resolvedCss: design.css,
  };
  let md = `---\n${stringify(frontmatter, { lineWidth: 0 })}---\n\n# Mi sistema de diseño\n\n## Composición\n\n${sections.map((s) => `- **${s.label}:** ${design.selected[s.key].name}`).join("\n")}\n\n## Reglas de implementación\n\nLa fuente de verdad es \`resolvedCss\` y los componentes resueltos del front matter. Las referencias originales de cada sección documentan la marca, pero NO deben sobreescribir decisiones de otra sección.\n\n- Colores y tipografía se heredan globalmente; botones y campos aportan geometría, padding y estados.\n- Bordes y formas controla tarjetas y contenedores; los radios de botones y campos pertenecen a sus propios selectores.\n- Distribución y espaciado controla columnas, separaciones y relleno desde una misma marca.\n- Sombras controla la elevación de tarjetas y contenedores.\n- Los componentes, menús, diálogos y formularios respetan el modo nativo de la paleta elegida. El sidebar oscuro pertenece al editor, no al diseño exportado.\n- Usar componentes shadcn/ui accesibles. Respetar navegación por teclado, foco visible y prefers-reduced-motion.\n\n### Adaptaciones explícitas de la vista previa\n\n${design.adaptations.map((x) => `- ${x}`).join("\n")}\n\n## CSS de la vista previa\n\n\`\`\`css\n:root {\n${Object.entries(
    design.css,
  )
    .map(([k, v]) => `  ${k}: ${v};`)
    .join(
      "\n",
    )}\n}\n\`\`\`\n\n## Fuentes locales\n\nCopiar las carpetas de las familias siguientes desde \`public/fonts\` junto con sus licencias. Cargar sus hojas CSS locales; no añadir peticiones a Google Fonts en tiempo de ejecución. Los archivos de fuentes no están embebidos en este Markdown.\n${fenced(assets)}\n`;
  for (const section of sections) {
    const brand = design.selected[section.key];
    if (!sources[brand.id])
      throw new Error(`Falta el archivo de ${brand.name}`);
    md += `## ${section.label}\n\nFuente: \`dataset/${brand.id}.json\`. Referencia original subordinada a las reglas de composición anteriores.\n${fenced(sourceSection(section.key, sources[brand.id]))}\n`;
  }
  return md;
}
export async function loadExportSources(design) {
  const ids = [...new Set(Object.values(design.selected).map((b) => b.id))];
  const entries = await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(`/data/brands/${encodeURIComponent(id)}.json`);
      if (!res.ok)
        throw new Error(`No se pudo cargar ${id}. Intenta nuevamente.`);
      return [id, await res.json()];
    }),
  );
  const fonts = await fetch("/fonts/manifest.json");
  if (!fonts.ok)
    throw new Error("No se pudo cargar el catálogo de fuentes locales.");
  return {
    sources: Object.fromEntries(entries),
    fontManifest: await fonts.json(),
  };
}
export function downloadMarkdown(markdown) {
  const url = URL.createObjectURL(
    new Blob([markdown], { type: "text/markdown;charset=utf-8" }),
  );
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "DESIGN.md";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
