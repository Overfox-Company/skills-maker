---
version: "1.0"
name: Mi sistema de diseño
description: Sistema compuesto en DESIGN.md Studio.
mode: light
sources:
  colors: dataset/apple.json
  typography: dataset/renault.json
  layout: dataset/ferrari.json
  shape: dataset/meta.json
  elevation: dataset/apple.json
  buttons: dataset/binance.json
  inputs: dataset/binance.json
colors:
  primary: "#0066cc"
  primary-focus: "#0071e3"
  primary-on-dark: "#2997ff"
  ink: "#1d1d1f"
  body: "#1d1d1f"
  body-on-dark: "#ffffff"
  body-muted: "#cccccc"
  ink-muted-80: "#333333"
  ink-muted-48: "#7a7a7a"
  divider-soft: "#f0f0f0"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-parchment: "#f5f5f7"
  surface-pearl: "#fafafc"
  surface-tile-1: "#272729"
  surface-tile-2: "#2a2a2c"
  surface-tile-3: "#252527"
  surface-black: "#000000"
  surface-chip-translucent: "#d2d2d7"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  surface: "#ffffff"
colorRoleSources:
  primary: primary
  background: canvas
  card: canvas
  border: hairline
  foreground: ink
typography:
  display-xl:
    fontFamily: Inter Tight, sans-serif
    fontSize: 56px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  display-lg:
    fontFamily: Inter Tight, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  display-md:
    fontFamily: Inter Tight, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-lg:
    fontFamily: Inter Tight, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-md:
    fontFamily: Inter Tight, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  heading-sm:
    fontFamily: Inter Tight, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  subtitle:
    fontFamily: Inter Tight, sans-serif
    fontSize: 19.2px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: Inter Tight, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Inter Tight, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: Inter Tight, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: 0
  button-lg:
    fontFamily: Inter Tight, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0
  button-md:
    fontFamily: Inter Tight, sans-serif
    fontSize: 14.4px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.144px
  button-sm:
    fontFamily: Inter Tight, sans-serif
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.13px
  caption:
    fontFamily: Inter Tight, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  overline:
    fontFamily: Inter Tight, sans-serif
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 16px
  xxl: 24px
  xxxl: 32px
  feature: 40px
  full: 100px
  circle: 9999px
spacing:
  xxxs: 4px
  xxs: 8px
  xs: 16px
  sm: 24px
  md: 32px
  lg: 48px
  xl: 64px
  xxl: 96px
  super: 128px
components:
  button:
    borderRadius: 6px
    padding: 12px 24px
    fontWeight: 600
    letterSpacing: 0px
  input:
    source: search-input-on-dark
    guidance:
      - section: Components > Inputs & Forms
        content: |-
          **`search-input-on-dark`** — The "Search currencies" input on the homepage hero. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}` (8px), padding 10px × 16px, height 40px. Carries a yellow `{component.button-primary-pill}` on the right side ("Sign Up").

          **`text-input-on-light`** — Standard input on transactional pages. Background `{colors.canvas-light}`, 1px `{colors.hairline-on-light}` border, rounded `{rounded.md}` (6px), padding 10px × 16px, height 40px. Focus state inherits the focus-ring shadow.

          **`cookie-consent-card`** — The cookie banner card visible on the homepage. Background `{colors.canvas-light}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px). Body text in `{typography.body-sm}` (13px / 400) with three stacked button options (Accept Cookies & Continue / Reject Additional Cookies / Manage Cookies).
    label: stacked
    border: outline
    css:
      --input-padding: 10px 16px
      --input-radius: 8px
      --input-height: 40px
      --input-bg: "#ffffff"
      --input-color: "#1d1d1f"
      --input-border: "#e0e0e0"
      --input-focus-width: 2px
      --input-focus-bg: "#ffffff"
      --input-focus-color: "#0066cc"
      --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #0066cc, transparent 80%)"
    fallback: Cuando no hay una regla de foco explícita se usa un halo de 3px al 20%; los colores de roles se componen con la paleta seleccionada.
    borderRadius: 8px
    padding: 10px 16px
  content:
    product:
      source: Respaldo del editor
      style:
        background: "#ffffff"
        color: "#1d1d1f"
        borderRadius: 8px
        padding: 20px
        border: none
    finance:
      source: Respaldo del editor
      style:
        background: "#ffffff"
        color: "#1d1d1f"
        borderRadius: 8px
        padding: 20px
        border: none
    list:
      source: Respaldo del editor
      style:
        background: "#ffffff"
        color: "#1d1d1f"
        borderRadius: 8px
        padding: 20px
        border: none
  card:
    borderRadius: 8px
    padding: 32px
    boxShadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0
resolvedCss:
  --background: "#ffffff"
  --card: "#ffffff"
  --popover: "#ffffff"
  --foreground: "#1d1d1f"
  --primary: "#0066cc"
  --primary-foreground: "#ffffff"
  --border: "#e0e0e0"
  --muted-foreground: "#666666"
  --muted: "color-mix(in srgb, #ffffff, #1d1d1f 7%)"
  --secondary: "color-mix(in srgb, #ffffff, #1d1d1f 7%)"
  --secondary-foreground: "#1d1d1f"
  --accent: "color-mix(in srgb, #ffffff, #1d1d1f 12%)"
  --accent-foreground: "#1d1d1f"
  --success: "#16a34a"
  --warning: "#d97706"
  --destructive: "#dc2626"
  --info: "#2563eb"
  --radius: 6px
  --card-radius: 8px
  --button-radius: 6px
  --input-radius: 8px
  --preview-font: Inter Tight, sans-serif
  --heading-font: Inter Tight, sans-serif
  --mono-font: "'JetBrains Mono', monospace"
  --body-size: 16px
  --body-weight: 400
  --body-leading: 1.4
  --heading-size: 40px
  --heading-weight: 700
  --heading-tracking: 0px
  --heading-leading: 1
  --button-weight: 600
  --button-tracking: 0px
  --button-padding: 12px 24px
  --input-padding: 10px 16px
  --gallery-gap: 32px
  --sample-padding: 32px
  --preview-columns: 2
  --sample-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0
  --input-height: 40px
  --input-bg: "#ffffff"
  --input-color: "#1d1d1f"
  --input-border: "#e0e0e0"
  --input-focus-width: 2px
  --input-focus-bg: "#ffffff"
  --input-focus-color: "#0066cc"
  --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #0066cc, transparent 80%)"
---

# Mi sistema de diseño

## Composición

- **Paleta de colores:** Apple
- **Tipografía:** Renault
- **Distribución y espaciado:** Ferrari
- **Formas y tarjetas:** Meta
- **Sombras y profundidad:** Apple
- **Botones:** Binance
- **Campos y controles:** Binance

## Reglas de implementación

La fuente de verdad es `resolvedCss` y los componentes resueltos del front matter. Las referencias originales de cada sección documentan la marca, pero NO deben sobreescribir decisiones de otra sección.

- Colores y tipografía se heredan globalmente; botones y campos aportan geometría, padding y estados.
- Bordes y formas controla tarjetas y contenedores; los radios de botones y campos pertenecen a sus propios selectores.
- Distribución y espaciado controla columnas, separaciones y relleno desde una misma marca.
- Sombras controla la elevación de tarjetas y contenedores.
- Los componentes, menús, diálogos y formularios respetan el modo nativo de la paleta elegida. El sidebar oscuro pertenece al editor, no al diseño exportado.
- Usar componentes shadcn/ui accesibles. Respetar navegación por teclado, foco visible y prefers-reduced-motion.

### Adaptaciones explícitas de la vista previa

- Los estados y las etiquetas de campos se interpretan desde tokens y guías. Cuando no hay una regla de foco explícita se usa un halo de 3px al 20%; los colores de roles se componen con la paleta seleccionada.
- Tarjetas de contenido y listas usan el padding y los radios de sus tokens específicos de Formas y tarjetas; si faltan se usan 20px y el radio lg. Los colores semánticos ausentes usan verde, ámbar, rojo y azul de respaldo.
- La vista previa conserva el modo nativo de la paleta: fondo, superficie, texto, bordes y colores semánticos proceden de la marca seleccionada. El sidebar del editor permanece oscuro y no forma parte del sistema exportado. Solo el texto de los botones primarios se ajusta si necesita contraste mínimo 4.5:1.
- Galería responsive: máximo 3 columnas, 2 bajo 740 px de contenedor y 1 bajo 620 px. La aplicación mantiene una grilla exterior 4/8 en escritorio.
- Escala de muestra: títulos 24–44 px, texto 14–18 px, separación 8–32 px, relleno de tarjetas 12–32 px. Los tokens originales se conservan como referencia.

## CSS de la vista previa

```css
:root {
  --background: #ffffff;
  --card: #ffffff;
  --popover: #ffffff;
  --foreground: #1d1d1f;
  --primary: #0066cc;
  --primary-foreground: #ffffff;
  --border: #e0e0e0;
  --muted-foreground: #666666;
  --muted: color-mix(in srgb, #ffffff, #1d1d1f 7%);
  --secondary: color-mix(in srgb, #ffffff, #1d1d1f 7%);
  --secondary-foreground: #1d1d1f;
  --accent: color-mix(in srgb, #ffffff, #1d1d1f 12%);
  --accent-foreground: #1d1d1f;
  --success: #16a34a;
  --warning: #d97706;
  --destructive: #dc2626;
  --info: #2563eb;
  --radius: 6px;
  --card-radius: 8px;
  --button-radius: 6px;
  --input-radius: 8px;
  --preview-font: Inter Tight, sans-serif;
  --heading-font: Inter Tight, sans-serif;
  --mono-font: 'JetBrains Mono', monospace;
  --body-size: 16px;
  --body-weight: 400;
  --body-leading: 1.4;
  --heading-size: 40px;
  --heading-weight: 700;
  --heading-tracking: 0px;
  --heading-leading: 1;
  --button-weight: 600;
  --button-tracking: 0px;
  --button-padding: 12px 24px;
  --input-padding: 10px 16px;
  --gallery-gap: 32px;
  --sample-padding: 32px;
  --preview-columns: 2;
  --sample-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0;
  --input-height: 40px;
  --input-bg: #ffffff;
  --input-color: #1d1d1f;
  --input-border: #e0e0e0;
  --input-focus-width: 2px;
  --input-focus-bg: #ffffff;
  --input-focus-color: #0066cc;
  --input-focus-shadow: 0 0 0 3px color-mix(in srgb, #0066cc, transparent 80%);
}
```

## Fuentes locales

Copiar las carpetas de las familias siguientes desde `public/fonts` junto con sus licencias. Cargar sus hojas CSS locales; no añadir peticiones a Google Fonts en tiempo de ejecución. Los archivos de fuentes no están embebidos en este Markdown.

```json
[
  {
    "family": "Inter Tight",
    "stylesheet": "/fonts/inter-tight/font.css",
    "files": [
      "/fonts/inter-tight/44550fabd6a55194.ttf",
      "/fonts/inter-tight/68b367f68e9af225.ttf",
      "/fonts/inter-tight/c37fef85e189e8ff.ttf",
      "/fonts/inter-tight/441ef0e61bc1e442.ttf",
      "/fonts/inter-tight/d87533cac88184d1.ttf",
      "/fonts/inter-tight/75bea28ecbef9ac6.ttf",
      "/fonts/inter-tight/00a3eeb3cbb442b6.ttf",
      "/fonts/inter-tight/605e76182ce01332.ttf",
      "/fonts/inter-tight/9b257ff911178602.ttf",
      "/fonts/inter-tight/e9c6e3bdc62099b6.ttf",
      "/fonts/inter-tight/340763be4ea4311c.ttf",
      "/fonts/inter-tight/1ec94267de47c192.ttf",
      "/fonts/inter-tight/42aaaf7a68ce5eb5.ttf",
      "/fonts/inter-tight/ba08b16a00221416.ttf",
      "/fonts/inter-tight/722ff42d0080d150.ttf",
      "/fonts/inter-tight/3ff89d14ef3d3641.ttf",
      "/fonts/inter-tight/b2dd8b5211efd1e8.ttf",
      "/fonts/inter-tight/ff98febdd9d848ba.ttf"
    ],
    "licenseSource": "https://raw.githubusercontent.com/google/fonts/main/ofl/intertight/OFL.txt"
  },
  {
    "family": "JetBrains Mono",
    "stylesheet": "/fonts/jetbrains-mono/font.css",
    "files": [
      "/fonts/jetbrains-mono/407f551cd6eab89d.ttf",
      "/fonts/jetbrains-mono/8cdb8fdaad0072f4.ttf",
      "/fonts/jetbrains-mono/10a2db2b4f2467d0.ttf",
      "/fonts/jetbrains-mono/8a16071270fd8d41.ttf",
      "/fonts/jetbrains-mono/8e656f506864a215.ttf",
      "/fonts/jetbrains-mono/b85424b49e5b4a6e.ttf",
      "/fonts/jetbrains-mono/7029837dc9f88ccc.ttf",
      "/fonts/jetbrains-mono/166a964210cc6404.ttf",
      "/fonts/jetbrains-mono/7109d828b1b0c129.ttf",
      "/fonts/jetbrains-mono/7528dadceedc59c2.ttf",
      "/fonts/jetbrains-mono/b95b576b0912b261.ttf",
      "/fonts/jetbrains-mono/6d83b1a12212ea9e.ttf",
      "/fonts/jetbrains-mono/655ecee898b68ff3.ttf",
      "/fonts/jetbrains-mono/5f6675d606a21f26.ttf",
      "/fonts/jetbrains-mono/c1c656933a1f4b14.ttf",
      "/fonts/jetbrains-mono/32bf30e94c6c5d0b.ttf"
    ],
    "licenseSource": "https://raw.githubusercontent.com/google/fonts/main/ofl/jetbrainsmono/OFL.txt"
  }
]
```

## Paleta de colores

Fuente: `dataset/apple.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "primary": "#0066cc",
    "primary-focus": "#0071e3",
    "primary-on-dark": "#2997ff",
    "ink": "#1d1d1f",
    "body": "#1d1d1f",
    "body-on-dark": "#ffffff",
    "body-muted": "#cccccc",
    "ink-muted-80": "#333333",
    "ink-muted-48": "#7a7a7a",
    "divider-soft": "#f0f0f0",
    "hairline": "#e0e0e0",
    "canvas": "#ffffff",
    "canvas-parchment": "#f5f5f7",
    "surface-pearl": "#fafafc",
    "surface-tile-1": "#272729",
    "surface-tile-2": "#2a2a2c",
    "surface-tile-3": "#252527",
    "surface-black": "#000000",
    "surface-chip-translucent": "#d2d2d7",
    "on-primary": "#ffffff",
    "on-dark": "#ffffff"
  },
  "guidance": [
    {
      "section": "Colors",
      "content": "> **Source pages analyzed:** homepage, environment, store, iPhone 17 Pro buy page, accessories index. The color system is identical across all five surfaces; only the surface-mode mix differs."
    },
    {
      "section": "Colors > Brand & Accent",
      "content": "- **Action Blue** (`{colors.primary}` — #0066cc): The single brand-level interactive color. All text links, all blue pill CTAs (\"Learn more\", \"Buy\"), and the focus ring root. This is Apple's quiet but universal \"click me\" signal. Press state shifts to a slightly darker variant via the active scale transform rather than a hex change.\n- **Focus Blue** (`{colors.primary-focus}` — #0071e3): A marginally brighter sibling of Action Blue, reserved for the keyboard focus ring on buttons (`outline: 2px solid`).\n- **Sky Link Blue** (`{colors.primary-on-dark}` — #2997ff): A brighter blue used on dark surfaces for in-copy links and inline callouts, where Action Blue would disappear against the tile background."
    },
    {
      "section": "Colors > Surface",
      "content": "- **Pure White** (`{colors.canvas}` — #ffffff): The dominant canvas. Content, utility cards, store tiles, configurator grids.\n- **Parchment** (`{colors.canvas-parchment}` — #f5f5f7): The signature Apple off-white. Used for alternating light tiles, footer region, and the default page canvas in store utility sections. Just different enough from white to create rhythm.\n- **Pearl Button** (`{colors.surface-pearl}` — #fafafc): A near-white used as the fill for secondary \"ghost\" buttons — lighter than the parchment canvas so the button still reads as a button against `{colors.canvas-parchment}`.\n- **Near-Black Tile 1** (`{colors.surface-tile-1}` — #272729): The primary dark-tile surface on the homepage product grid.\n- **Near-Black Tile 2** (`{colors.surface-tile-2}` — #2a2a2c): A micro-step lighter — used where a dark tile sits directly above or below Tile 1 to create the faintest separation.\n- **Near-Black Tile 3** (`{colors.surface-tile-3}` — #252527): A micro-step darker — used at the bottom of the stack and in embedded video/player frames.\n- **Pure Black** (`{colors.surface-black}` — #000000): Reserved for true void — video player backgrounds, edge-to-edge photographic overlays, the global nav bar background.\n- **Translucent Chip Gray** (`{colors.surface-chip-translucent}` — #d2d2d7): The base hex of the translucent gray chip used over photography for Inter control buttons. In production, applied at ~64% alpha as `rgba(210, 210, 215, 0.64)`."
    },
    {
      "section": "Colors > Text",
      "content": "- **Near-Black Ink** (`{colors.ink}` — #1d1d1f): The voice of every headline, every body paragraph, and the dark utility button's fill. Chosen instead of pure black to keep the page feeling photographic rather than printed.\n- **Body** (`{colors.body}` — #1d1d1f): Same hex as ink — Apple uses one near-black tone for all text on light surfaces.\n- **Body On Dark** (`{colors.body-on-dark}` — #ffffff): All text on dark tiles and on the global nav bar.\n- **Body Muted** (`{colors.body-muted}` — #cccccc): Secondary copy on dark tiles where pure white would be too loud.\n- **Ink Muted 80** (`{colors.ink-muted-80}` — #333333): Body text on the white Pearl Button surface — slightly softer than pure black.\n- **Ink Muted 48** (`{colors.ink-muted-48}` — #7a7a7a): Disabled button text and legal fine-print."
    },
    {
      "section": "Colors > Hairlines & Borders",
      "content": "- **Divider Soft** (`{colors.divider-soft}` — #f0f0f0): The \"border\" tone on secondary buttons — functions as a ring shadow rather than a hard line. In production, often applied as `rgba(0, 0, 0, 0.04)`.\n- **Hairline** (`{colors.hairline}` — #e0e0e0): The 1px hairline border on store utility cards and configurator chips."
    },
    {
      "section": "Colors > Brand Gradient",
      "content": "**No decorative gradients.** Atmospheric depth on product photography (the iPhone 17 Pro camera plate, the Apple Watch bands, AirPods reflections) is inherent to the imagery, not a CSS gradient overlay. The environment page's hero uses photographic atmosphere (mountain vista at dawn) but no gradient tokens are defined. Apple is the rare luxury-brand site with zero gradient-based design tokens."
    }
  ]
}
```

## Tipografía

Fuente: `dataset/renault.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "publicFontsOnly": true,
  "families": [
    {
      "family": "Inter Tight",
      "provider": "Google Fonts",
      "license": "Open-source font",
      "url": "https://fonts.google.com/specimen/Inter+Tight"
    }
  ],
  "styles": {
    "display-xl": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "56px",
      "fontWeight": 700,
      "lineHeight": 0.95,
      "letterSpacing": 0
    },
    "display-lg": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "40px",
      "fontWeight": 700,
      "lineHeight": 0.95,
      "letterSpacing": 0
    },
    "display-md": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "32px",
      "fontWeight": 700,
      "lineHeight": 0.95,
      "letterSpacing": 0
    },
    "heading-lg": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 0.95,
      "letterSpacing": 0
    },
    "heading-md": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 0.95,
      "letterSpacing": 0
    },
    "heading-sm": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": 0
    },
    "subtitle": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "19.2px",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": 0
    },
    "body-lg": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    },
    "body-md": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "body-sm": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.57,
      "letterSpacing": 0
    },
    "button-lg": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "16px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": 0
    },
    "button-md": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "14.4px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.144px"
    },
    "button-sm": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "13px",
      "fontWeight": 600,
      "lineHeight": 1.2,
      "letterSpacing": "0.13px"
    },
    "caption": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "overline": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "10px",
      "fontWeight": 700,
      "lineHeight": 1.45,
      "letterSpacing": 0
    }
  },
  "substitutionAdjustment": "Clamp Inter Tight display line-height to 0.95.",
  "guidance": [
    {
      "section": "Typography > Font Family",
      "content": "The entire system is set in **Inter Tight**, Renault's source-specific display\nfamily, used across navigation, headlines, body, captions, and button\nlabels. The family carries a slightly geometric, semi-condensed personality\nwith tall x-heights and squared apexes that pair naturally with the diamond\nlogomark.\n\nWhen Inter Tight cannot be source-specific, suitable open-source substitutes include\n**Inter Tight**, **Manrope**, or **HK Grotesk Semi Condensed** — all share\nthe geometric-with-warmth feel and adapt cleanly to weights 400 / 600 / 700.\nTighten `lineHeight` on display sizes to ~0.95 to match the original; do not\nrelax it."
    },
    {
      "section": "Typography > Hierarchy",
      "content": "| Token | Size | Weight | Line Height | Letter Spacing | Use |\n|---|---|---|---|---|---|\n| `{typography.display-xl}` | 56px | 700 | 0.95 | 0 | Hero headlines, campaign titles (\"E-TECH ELEKTRİKLİ\", \"REVOLUTION\"). |\n| `{typography.display-lg}` | 40px | 700 | 0.95 | 0 | Secondary section titles. |\n| `{typography.display-md}` | 32px | 700 | 0.95 | 0 | Page-level H1 on sub-pages and configurator panels. |\n| `{typography.heading-lg}` | 24px | 700 | 0.95 | 0 | Section headers, card titles. |\n| `{typography.heading-md}` | 20px | 700 | 0.95 | 0 | Sub-section headers, prominent labels. |\n| `{typography.heading-sm}` | 18px | 700 | 1.0 | 0 | Tile titles, list group headers. |\n| `{typography.subtitle}` | 19.2px | 600 | 1.3 | 0 | Lead paragraphs, hero subtitles. |\n| `{typography.body-lg}` | 18px | 400 | 1.5 | 0 | Long-form body. |\n| `{typography.body-md}` | 16px | 400 | 1.4 | 0 | Default body and form fields. |\n| `{typography.body-sm}` | 14px | 400 | 1.57 | 0 | Captions, metadata. |\n| `{typography.button-lg}` | 16px | 700 | 1.0 | 0 | Large CTAs in hero bands. |\n| `{typography.button-md}` | 14.4px | 700 | 1.0 | 0.144px | Default button label across the system. |\n| `{typography.button-sm}` | 13px | 600 | 1.2 | 0.13px | Sub-nav pills, small in-card actions. |\n| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Footer disclosure, regulatory text. |\n| `{typography.overline}` | 10px | 700 | 1.45 | 0 | Short uppercase labels above titles. |"
    },
    {
      "section": "Typography > Principles",
      "content": "- Display sizes always weight 700, always at `lineHeight: 0.95`. The tightness is what makes the brand feel confident rather than corporate.\n- Body copy stays at weight 400 — never 500. The contrast between body and display is part of the system.\n- Button labels carry a tiny positive letter-spacing (`0.144px` on `{typography.button-md}`) — almost imperceptible, but it adds the small bit of mechanical precision the brand wants on CTAs.\n- No italics, no script, no decorative ligatures."
    }
  ]
}
```

## Distribución y espaciado

Fuente: `dataset/ferrari.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "spacing": {
    "xxxs": "4px",
    "xxs": "8px",
    "xs": "16px",
    "sm": "24px",
    "md": "32px",
    "lg": "48px",
    "xl": "64px",
    "xxl": "96px",
    "super": "128px"
  },
  "spacingValues": [
    "4px",
    "8px",
    "16px",
    "24px",
    "32px",
    "48px",
    "64px",
    "96px",
    "128px"
  ],
  "gridAndContainers": [
    {
      "section": "Layout > Spacing System",
      "content": "- **Base unit:** 4px.\n- **Tokens:** `{spacing.xxxs}` 4px · `{spacing.xxs}` 8px · `{spacing.xs}` 16px · `{spacing.sm}` 24px · `{spacing.md}` 32px · `{spacing.lg}` 48px · `{spacing.xl}` 64px · `{spacing.xxl}` 96px · `{spacing.super}` 128px.\n- **Section padding:** `{spacing.xxl}` (96px) for major bands; `{spacing.super}` (128px) reserved for hero band depth."
    },
    {
      "section": "Layout > Grid & Container",
      "content": "- Max content width: ~1280px on editorial bands. Hero photography goes full-bleed.\n- Editorial body: 12-column grid.\n- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids, 4-up for preowned listing tiles.\n- Footer: 5-column at desktop."
    },
    {
      "section": "Layout > Whitespace Philosophy",
      "content": "Generous editorial pacing. Cinematic hero photography occupies generous viewport real-estate; body sections sit in tighter editorial layouts beneath. The canvas-light editorial bands (preowned, pricing) carry tighter density than the dark cinema bands."
    }
  ],
  "responsive": {
    "breakpoints": [
      "640px",
      "1024px",
      "1280px"
    ],
    "guidance": [
      {
        "section": "Responsive Behavior > Breakpoints",
        "content": "| Name | Width | Key Changes |\n|---|---|---|\n| Mobile | < 640px | Hero photograph crops vertically; hero h1 80→32px; feature card grid 1-up; nav hamburger; preowned listing 1-up. |\n| Tablet | 640–1024px | Hero h1 56px; feature card grid 2-up; preowned listing 2-up. |\n| Desktop | 1024–1280px | Full hero h1 80px; feature card grid 3-up; preowned listing 4-up. |\n| Wide | > 1280px | Editorial body content caps at 1280px; hero photography continues full-bleed. |"
      },
      {
        "section": "Responsive Behavior > Touch Targets",
        "content": "- Primary CTA at 48px height — at WCAG AAA (44 × 44).\n- Nav items render uppercase with 0.65px tracking, padded for an effective 48px tap area."
      },
      {
        "section": "Responsive Behavior > Collapsing Strategy",
        "content": "- Top nav switches to hamburger below 768px.\n- Hero photograph reframes per breakpoint via art direction — desktop carries wide cinematic; mobile crops tighter or shifts to vertical.\n- Feature card grid: 4-up → 3-up → 2-up → 1-up.\n- F1 driver cards: 2-up at desktop, 1-up at mobile."
      }
    ]
  }
}
```

## Formas y tarjetas

Fuente: `dataset/meta.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "shape": {
    "radii": {
      "xs": "2px",
      "sm": "4px",
      "md": "6px",
      "lg": "8px",
      "xl": "16px",
      "xxl": "24px",
      "xxxl": "32px",
      "feature": "40px",
      "full": "100px",
      "circle": "9999px"
    },
    "radiusValues": [
      "2px",
      "4px",
      "6px",
      "8px",
      "16px",
      "24px",
      "32px",
      "40px",
      "100px"
    ],
    "guidance": [
      {
        "section": "Shapes > Border Radius Scale",
        "content": "| Token | Value | Use |\n|---|---|---|\n| `{rounded.xs}` | 2px | Inline checkbox marks, fine UI corners |\n| `{rounded.sm}` | 4px | Tags, micro-controls |\n| `{rounded.md}` | 6px | Square thumbnail rounding |\n| `{rounded.lg}` | 8px | Form inputs, radio-option containers |\n| `{rounded.xl}` | 16px | Standard feature cards, FAQ accordion items |\n| `{rounded.xxl}` | 24px | Warranty / accessory tiles, ghost-style action cards |\n| `{rounded.xxxl}` | 32px | Photographic feature cards, big promo strips |\n| `{rounded.feature}` | 40px | Accessory hero panels, \"Built for prescriptions\" cards |\n| `{rounded.full}` | 100px | Pill buttons, tab chips, badges |\n| `{rounded.circle}` | 50% | Color swatches, Inter icon buttons |"
      },
      {
        "section": "Shapes > Photography Geometry",
        "content": "- Product hero photography sits in `{rounded.xxxl}` (32px) frames more often than rectangles.\n- Color/material swatches are perfect circles (`{rounded.circle}`, 32px diameter, 2px white border ring when selected).\n- Square product thumbnails (`aspect-ratio: 1/1`) use `{rounded.xl}` rounding.\n- Six-up \"color & SKU\" picker rows use 1:1 aspect tiles with `{rounded.lg}` (8px) corners — tighter than the hero photography frames to differentiate selection-grid context from showcase context."
      }
    ]
  },
  "cards": {
    "tokens": {
      "button-primary": {
        "backgroundColor": "{colors.ink-button}",
        "textColor": "{colors.on-ink-button}",
        "typography": "{typography.button-md}",
        "rounded": "{rounded.full}",
        "padding": "14px 30px"
      },
      "button-primary-pressed": {
        "backgroundColor": "{colors.charcoal}",
        "textColor": "{colors.on-ink-button}"
      },
      "button-primary-disabled": {
        "backgroundColor": "{colors.disabled-text}",
        "textColor": "{colors.canvas}"
      },
      "button-buy-cta": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.button-md}",
        "rounded": "{rounded.full}",
        "padding": "14px 30px"
      },
      "button-buy-cta-pressed": {
        "backgroundColor": "{colors.primary-deep}",
        "textColor": "{colors.on-primary}"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink-deep}",
        "typography": "{typography.button-md}",
        "rounded": "{rounded.full}",
        "padding": "12px 28px",
        "border": "2px solid {colors.ink-deep}"
      },
      "button-ghost": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink-deep}",
        "typography": "{typography.button-md}",
        "rounded": "{rounded.full}",
        "padding": "10px 22px",
        "border": "2px solid rgba(10, 19, 23, 0.12)"
      },
      "button-pill-tab": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-sm-bold}",
        "rounded": "{rounded.full}",
        "padding": "8px 16px",
        "border": "1px solid {colors.hairline}"
      },
      "button-pill-tab-active": {
        "backgroundColor": "{colors.ink-deep}",
        "textColor": "{colors.canvas}"
      },
      "button-icon-circular": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "rounded": "{rounded.circle}",
        "size": "40px"
      },
      "card-product-feature": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xxxl}",
        "padding": "{spacing.xxl}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "card-feature-photo": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xxxl}",
        "padding": "0",
        "border": "none"
      },
      "card-promo-strip": {
        "backgroundColor": "{colors.ink-deep}",
        "textColor": "{colors.canvas}",
        "rounded": "{rounded.xxxl}",
        "padding": "{spacing.section}"
      },
      "card-icon-feature": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xl}"
      },
      "card-checkout-summary": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xl}",
        "border": "1px solid {colors.hairline-soft}",
        "shadow": "rgba(20, 22, 26, 0.3) 0px 1px 4px 0px"
      },
      "product-thumbnail": {
        "backgroundColor": "{colors.surface-soft}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.base}",
        "aspect-ratio": "1 / 1"
      },
      "text-input": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.lg}",
        "padding": "{spacing.md}",
        "border": "1px solid {colors.hairline}",
        "height": "44px"
      },
      "text-input-focused": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "border": "2px solid {colors.fb-blue}"
      },
      "text-input-error": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "border": "1px solid {colors.critical-strong}"
      },
      "search-pill": {
        "backgroundColor": "{colors.surface-soft}",
        "textColor": "{colors.steel}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.full}",
        "padding": "{spacing.md} {spacing.lg}",
        "height": "40px"
      },
      "radio-option": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.lg}",
        "padding": "{spacing.lg}",
        "border": "1px solid rgba(10, 19, 23, 0.12)"
      },
      "radio-option-selected": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.lg}",
        "border": "2px solid #0143b5"
      },
      "color-swatch-circle": {
        "rounded": "{rounded.circle}",
        "size": "32px",
        "border": "2px solid {colors.canvas}"
      },
      "badge-promo-yellow": {
        "backgroundColor": "{colors.warning}",
        "textColor": "{colors.ink-deep}",
        "typography": "{typography.caption-bold}",
        "rounded": "{rounded.full}",
        "padding": "4px 10px"
      },
      "badge-attention": {
        "backgroundColor": "{colors.attention}",
        "textColor": "{colors.canvas}",
        "typography": "{typography.caption-bold}",
        "rounded": "{rounded.full}",
        "padding": "4px 10px"
      },
      "badge-success": {
        "backgroundColor": "{colors.success}",
        "textColor": "{colors.canvas}",
        "typography": "{typography.caption-bold}",
        "rounded": "{rounded.full}",
        "padding": "4px 10px"
      },
      "badge-critical": {
        "backgroundColor": "{colors.critical}",
        "textColor": "{colors.canvas}",
        "typography": "{typography.caption-bold}",
        "rounded": "{rounded.full}",
        "padding": "4px 10px"
      },
      "promo-banner": {
        "backgroundColor": "{colors.ink-deep}",
        "textColor": "{colors.canvas}",
        "typography": "{typography.body-sm-bold}",
        "padding": "{spacing.md} {spacing.xl}"
      },
      "faq-accordion-item": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xl}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "why-buy-tile": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xxl} {spacing.xl}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "warranty-card": {
        "backgroundColor": "{colors.surface-soft}",
        "rounded": "{rounded.xxl}",
        "padding": "{spacing.xxl}"
      },
      "footer-region": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.steel}",
        "typography": "{typography.body-sm}",
        "padding": "{spacing.section} {spacing.xxl}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "hero-band-marketing": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.canvas}",
        "typography": "{typography.hero-display}",
        "rounded": "{rounded.xxxl}",
        "padding": "{spacing.section-lg}"
      },
      "product-gallery-pdp": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xxxl}",
        "padding": "{spacing.base}"
      },
      "color-sku-picker-row": {
        "backgroundColor": "{colors.surface-soft}",
        "rounded": "{rounded.lg}",
        "padding": "{spacing.base}"
      },
      "feature-icon-row": {
        "backgroundColor": "{colors.canvas}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xl}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "tech-specs-table": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.lg}",
        "padding": "{spacing.lg}",
        "border": "1px solid {colors.hairline-soft}"
      },
      "testimonial-customer-card": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.xl}",
        "padding": "{spacing.xxl}",
        "border": "1px solid {colors.hairline-soft}"
      }
    },
    "guidance": [
      {
        "section": "Components",
        "content": "> Per the no-hover policy, hover states are NOT documented for any component below. Default and pressed/active states only."
      },
      {
        "section": "Components > Buttons",
        "content": "**`button-primary`** — Black pill primary CTA for marketing surfaces (\"Shop\", \"Pre-order\").\n- Background `{colors.ink-button}`, text `{colors.on-ink-button}`, typography `{typography.button-md}`, padding `14px 30px`, rounded `{rounded.full}`.\n- Pressed state `button-primary-pressed` flips background to `{colors.charcoal}`.\n- Disabled state `button-primary-disabled` uses `{colors.disabled-text}` background.\n\n**`button-buy-cta`** — Cobalt pill primary CTA for commerce flows (\"Add to cart\", \"Configure\", \"Continue\").\n- Background `{colors.primary}`, text `{colors.on-primary}`, typography `{typography.button-md}`, padding `14px 30px`, rounded `{rounded.full}`.\n- Pressed state `button-buy-cta-pressed` deepens background to `{colors.primary-deep}`.\n- This variant ONLY appears inside the buy-now configurator and PDP purchase rail. Marketing surfaces use `button-primary` instead.\n\n**`button-secondary`** — Outlined ghost CTA, often paired with primary in dual-CTA hero patterns.\n- Background transparent, text `{colors.ink-deep}`, border `2px solid {colors.ink-deep}`, typography `{typography.button-md}`, padding `12px 28px`, rounded `{rounded.full}`.\n\n**`button-ghost`** — Quieter outlined variant used for tertiary CTAs.\n- Background transparent, text `{colors.ink-deep}`, border `2px solid rgba(10, 19, 23, 0.12)`, typography `{typography.button-md}`, padding `10px 22px`, rounded `{rounded.full}`.\n\n**`button-pill-tab`** + **`button-pill-tab-active`** — Top-of-page category navigation pills (\"Glasses / Quest / Apps\").\n- Inactive: background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, padding `8px 16px`, rounded `{rounded.full}`.\n- Active: background `{colors.ink-deep}`, text `{colors.canvas}`. No border in active state — the dark fill replaces it.\n\n**`button-icon-Inter`** — 40×40px Inter utility buttons (carousel arrows, share, favorite).\n- Background `{colors.canvas}`, icon color `{colors.ink}`, rounded `{rounded.circle}`."
      },
      {
        "section": "Components > Cards & Containers",
        "content": "**`card-product-feature`** — White feature card with product photography and copy (homepage \"Designed for sport\", \"Advanced. Inside and out.\").\n- Background `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`.\n\n**`card-feature-photo`** — Edge-to-edge photographic showcase tile with NO chrome (homepage \"Built for prescriptions\" full-bleed glasses card).\n- Background `{colors.canvas}` (visible only at the corners), rounded `{rounded.xxxl}`, no padding, no border. The image fills the card; copy is overlaid bottom-left in white.\n\n**`card-promo-strip`** — Dark full-width promo card with embedded copy + CTAs (homepage \"Meta Quest brings the magic of virtual reality\" wide strip).\n- Background `{colors.ink-deep}`, text `{colors.canvas}`, rounded `{rounded.xxxl}`, padding `{spacing.section}`.\n\n**`card-icon-feature`** — Three-up feature tile with line icon, headline, and short copy (\"Free 2-day delivery\", \"Free 30-day returns\", \"Worry-free warranty\", \"Buy now, pay later\").\n- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`.\n\n**`card-checkout-summary`** — PDP right-rail sticky summary with title, price, color picker, \"Add to cart\" button.\n- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xl}`, border `1px solid {colors.hairline-soft}`, shadow `rgba(20, 22, 26, 0.3) 0px 1px 4px 0px`.\n\n**`product-thumbnail`** — Square product image cell used in color/SKU pickers and \"People also bought\" rows.\n- Background `{colors.surface-soft}`, rounded `{rounded.xl}`, padding `{spacing.base}`, aspect-ratio `1 / 1`.\n\n**`warranty-card`** — Promo callout for warranty + finance offers (\"1y Warranty\", \"Meta Horizon+\").\n- Background `{colors.surface-soft}`, rounded `{rounded.xxl}`, padding `{spacing.xxl}`. Uses pastel-tinted variants for additional perks.\n\n**`why-buy-tile`** — 4-up reassurance tile row in the lower marketing zone.\n- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xxl} {spacing.xl}`, border `1px solid {colors.hairline-soft}`. Heading in `{typography.subtitle-lg}`, body in `{typography.body-sm}`."
      },
      {
        "section": "Components > Inputs & Forms",
        "content": "**`text-input`** — Standard form field (footer email subscribe, support form).\n- Background `{colors.canvas}`, text `{colors.ink}`, border `1px solid {colors.hairline}`, rounded `{rounded.lg}`, padding `{spacing.md}`, height 44px.\n\n**`text-input-focused`** — Activated state.\n- Border switches to `2px solid {colors.fb-blue}`.\n\n**`text-input-error`** — Validation error state.\n- Border switches to `1px solid {colors.critical-strong}`; error label below in `{colors.critical-strong}` `{typography.body-sm}`.\n\n**`search-pill`** — Top-nav search field.\n- Background `{colors.surface-soft}`, text `{colors.steel}`, typography `{typography.body-sm}`, rounded `{rounded.full}`, height 40px.\n\n**`radio-option`** + **`radio-option-selected`** — Configurator option cards (storage, color variant, shipping option).\n- Inactive: background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`, border `1px solid rgba(10, 19, 23, 0.12)`.\n- Selected: border switches to `2px solid #0143b5` (deep cobalt) — the cobalt theme persists into form-control selection signaling.\n\n**`color-swatch-circle`** — Round color/material picker (Ray-Ban frame finishes, glass colors).\n- 32px diameter, `{rounded.circle}`, `2px solid {colors.canvas}` ring on selection over the swatch's own fill color."
      },
      {
        "section": "Components > Badges & Status",
        "content": "**`badge-promo-yellow`** — Limited-time offer chip (\"Limited time\", \"Sale\").\n- Background `{colors.warning}`, text `{colors.ink-deep}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.\n\n**`badge-attention`** — Mid-priority status indicator (\"Almost gone\", \"Selling fast\").\n- Background `{colors.attention}`, text `{colors.canvas}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.\n\n**`badge-success`** — Affirmative status (\"In stock\", \"Verified\", \"Free shipping\").\n- Background `{colors.success}`, text `{colors.canvas}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.\n\n**`badge-critical`** — Urgent/destructive label (\"Out of stock\", \"Discontinued\", error chips).\n- Background `{colors.critical}`, text `{colors.canvas}`, typography `{typography.caption-bold}`, rounded `{rounded.full}`, padding `4px 10px`.\n\n**`promo-banner`** — Sticky full-width promotional strip ABOVE the top nav (\"Get 25% off the #1 selling AI glasses\").\n- Background `{colors.ink-deep}` (or `{colors.warning}` for yellow promo variants), text `{colors.canvas}` (or `{colors.ink-deep}` on yellow), typography `{typography.body-sm-bold}`, padding `{spacing.md} {spacing.xl}`. Carries one-line offer copy plus an inline CTA link."
      },
      {
        "section": "Components > Navigation",
        "content": "**Top Navigation (Desktop)** — Sticky white bar with category pill tabs, search, account, cart.\n- Background `{colors.canvas}`, height ~64px with bottom `1px solid {colors.hairline-soft}`.\n- Left: Meta wordmark logo (61×14px). Center: pill-tab category nav. Right: search-pill + Inter icon buttons (account, cart).\n\n**Top Navigation (Mobile)** — Compressed to logo + hamburger + cart icon. Pill-tab nav slides into a full-screen drawer below 768px.\n\n**Promo Banner** — Full-width strip ABOVE the nav for time-bound offers.\n- Background `{colors.ink-deep}` or `{colors.warning}` (yellow), text `{colors.canvas}` or `{colors.ink-deep}`, typography `{typography.body-sm-bold}`, padding `{spacing.md} {spacing.xl}`. Carries one-line offer copy + inline link.\n\n**Breadcrumb (PDP)** — Inline path above the product hero (\"Glasses › Ray-Ban Meta › Skyler (Gen 2)\").\n- Typography `{typography.body-sm}`, separator dot in `{colors.stone}`, active leaf in `{colors.ink}`, parent links in `{colors.steel}`."
      },
      {
        "section": "Components > Signature Components",
        "content": "**`hero-band-marketing`** — Full-bleed photographic hero with overlaid copy + dual-CTA pair.\n- Edge-to-edge product photography on a dark or photographic background. Overlay copy in `{typography.hero-display}` white. Below the title: 1-line subtitle in `{typography.subtitle-md}` then `button-primary` + `button-secondary` pair.\n\n**`product-gallery-pdp`** — Product detail page main hero: 4-up vertical thumbnail strip on the left, large product image center, sticky purchase rail right.\n- Thumbnails: 80×80px, `{rounded.lg}`, `{colors.surface-soft}` background, 1px `{colors.hairline-soft}` border (active border switches to `{colors.ink-deep}`).\n- Main image area: ~720×720px on desktop, `{rounded.xxxl}` rounding, photographic surface.\n- Sticky rail uses `card-checkout-summary`.\n\n**`color-sku-picker-row`** — Six-up grid of square product variants with name + price below each.\n- Tile background `{colors.surface-soft}`, rounded `{rounded.lg}`, image padded `{spacing.base}`. Active tile border switches to `2px solid {colors.ink-deep}`. Below the tile: variant name in `{typography.body-sm-bold}` and price in `{typography.body-sm}`.\n\n**`feature-icon-row`** — Four reassurance benefits (\"Free 2-day delivery\", \"Free 30-day returns\", \"Worry-free warranty\", \"Buy now, pay later\").\n- 4-column grid, each cell uses `card-icon-feature` chrome with a 32px line icon at top, headline `{typography.subtitle-lg}`, body `{typography.body-sm}`.\n\n**`faq-accordion`** — Vertical stack of expandable Q&A items.\n- Each item uses `faq-accordion-item` chrome. Question in `{typography.subtitle-lg}` left, chevron icon (`{colors.steel}`, 20px) right. Expanded answer drops in `{typography.body-md}` text below with `{spacing.base}` top padding.\n\n**`tech-specs-table`** — Two-column key/value table for product specifications.\n- Row layout: spec label (`{typography.body-sm-bold}` `{colors.ink}`) left, spec value (`{typography.body-sm}` `{colors.charcoal}`) right. Row separator `1px solid {colors.hairline-soft}`. Section headers in `{typography.heading-sm}` above each spec group.\n\n**`testimonial-customer-card`** — Small editorial card with author + quote + photo.\n- Background `{colors.canvas}`, rounded `{rounded.xl}`, padding `{spacing.xxl}`, border `1px solid {colors.hairline-soft}`. Avatar circle 40px, byline in `{typography.body-sm-bold}`, quote in `{typography.body-md}`.\n\n**`footer-region`** — Dense multi-column site footer.\n- Background `{colors.canvas}`, top border `1px solid {colors.hairline-soft}`, padding `{spacing.section} {spacing.xxl}`. Six column groups with section headings in `{typography.body-sm-bold}` `{colors.ink}` and link lists in `{typography.body-sm}` `{colors.steel}`. Bottom row contains language picker, region selector, legal links in `{typography.caption}` `{colors.stone}`."
      }
    ]
  }
}
```

## Sombras y profundidad

Fuente: `dataset/apple.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {},
  "guidance": [
    {
      "section": "Elevation & Depth",
      "content": "| Level | Treatment | Use |\n|---|---|---|\n| Flat | No shadow, no border | Full-bleed tiles, global nav, footer, body sections |\n| Soft hairline | 1px `rgba(0, 0, 0, 0.08)` border | Utility cards, sub-nav frosted-glass separator |\n| Backdrop blur | `backdrop-filter: blur(N)` on Parchment 80% | Sub-nav and the iPhone buy floating sticky bar |\n| Product shadow | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | Product renders resting on a surface (the only true \"shadow\" in the system) |\n\n**Shadow philosophy.** Apple uses **exactly one** drop-shadow, and it is applied to photographic product imagery — never to cards, never to buttons, never to text. Elevation in the UI comes from (a) surface-color change (light tile ↔ dark tile) and (b) backdrop-blur on sticky bars. The single shadow is about giving the product weight, not about UI hierarchy."
    },
    {
      "section": "Elevation & Depth > Decorative Depth",
      "content": "- **Atmospheric imagery** on the environment page (photographic vista) supplies mood; no CSS gradient involved.\n- **Edge-to-edge tile alternation** creates rhythm without borders or shadows — the color change itself is the divider.\n- **Backdrop-filter blur** on `{component.sub-nav-frosted}` and `{component.floating-sticky-bar}` creates a \"floating over content\" effect that's functional, not decorative."
    }
  ]
}
```

## Botones

Fuente: `dataset/binance.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "button-primary": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button}",
      "rounded": "{rounded.md}",
      "padding": "12px 24px",
      "height": "40px"
    },
    "button-primary-active": {
      "backgroundColor": "{colors.primary-active}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.md}"
    },
    "button-primary-disabled": {
      "backgroundColor": "{colors.primary-disabled}",
      "textColor": "{colors.muted}",
      "rounded": "{rounded.md}"
    },
    "button-primary-pill": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button}",
      "rounded": "{rounded.pill}",
      "padding": "14px 32px"
    },
    "button-secondary-on-dark": {
      "backgroundColor": "{colors.surface-card-dark}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.button}",
      "rounded": "{rounded.md}",
      "padding": "12px 24px"
    },
    "button-secondary-on-light": {
      "backgroundColor": "{colors.canvas-light}",
      "textColor": "{colors.ink}",
      "typography": "{typography.button}",
      "rounded": "{rounded.md}",
      "padding": "12px 24px"
    },
    "button-tertiary-text": {
      "backgroundColor": "transparent",
      "textColor": "{colors.body}",
      "typography": "{typography.button}"
    },
    "button-trading-up": {
      "backgroundColor": "{colors.trading-up}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.button}",
      "rounded": "{rounded.sm}",
      "padding": "8px 20px"
    },
    "button-trading-down": {
      "backgroundColor": "{colors.trading-down}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.button}",
      "rounded": "{rounded.sm}",
      "padding": "8px 20px"
    },
    "button-subscribe": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button}",
      "rounded": "{rounded.sm}",
      "padding": "6px 16px",
      "height": "28px"
    },
    "cta-band-dark": {
      "backgroundColor": "{colors.surface-card-dark}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.display-sm}",
      "rounded": "{rounded.xl}",
      "padding": "48px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "content": "**`button-primary`** — The signature primary CTA. Background `{colors.primary}`, text `{colors.on-primary}` (black on yellow — the system's iconic combination), type `{typography.button}`, padding 12px × 24px, height 40px, rounded `{rounded.md}` (6px). Press state: `button-primary-active` darkens to `{colors.primary-active}` (#f0b90b). Disabled state: `button-primary-disabled` desaturates to `{colors.primary-disabled}`.\n\n**`button-primary-pill`** — A larger pill variant of the primary CTA used for top-of-page sign-up moments and product-launch heroes (Futures Arena \"Join Now\"). Same yellow + black combination, padding 14px × 32px, rounded `{rounded.pill}` (9999px). Use sparingly — the pill is a \"this is THE action\" signal.\n\n**`button-secondary-on-dark`** — Used over `{colors.canvas-dark}` for less-emphasized actions. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, rounded `{rounded.md}`.\n\n**`button-secondary-on-light`** — Light-canvas equivalent. Background `{colors.canvas-light}` with `{colors.hairline-on-light}` 1px border, text `{colors.ink}`.\n\n**`button-tertiary-text`** — Inline text button with no background. Used for \"Log In\" in the top nav and inline \"Read More\" links.\n\n**`button-trading-up`** — A solid green button used on price-up signals (Buy / Long actions). Background `{colors.trading-up}`, text `{colors.on-dark}`, rounded `{rounded.sm}` (4px), padding 8px × 20px. Smaller and tighter than `{component.button-primary}` because it appears in dense trading interfaces.\n\n**`button-trading-down`** — Symmetric red variant for Sell / Short actions. Same shape, background `{colors.trading-down}`.\n\n**`button-subscribe`** — Compact yellow CTA used in the Smart Money traders table to subscribe to a top trader. Smaller height (28px) and tighter padding than the primary CTA — fits inside dense table rows. Same yellow + black combination.\n\n**`text-link`** — Inline body links in `{colors.primary}` (yellow on dark, also yellow on light). No underline by default. Type inherits `{typography.body-md}`."
    }
  ]
}
```

## Campos y controles

Fuente: `dataset/binance.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "search-input-on-dark": {
      "backgroundColor": "{colors.surface-card-dark}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.lg}",
      "padding": "10px 16px",
      "height": "40px"
    },
    "text-input-on-light": {
      "backgroundColor": "{colors.canvas-light}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.md}",
      "padding": "10px 16px",
      "height": "40px"
    }
  },
  "guidance": [
    {
      "section": "Components > Inputs & Forms",
      "content": "**`search-input-on-dark`** — The \"Search currencies\" input on the homepage hero. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}` (8px), padding 10px × 16px, height 40px. Carries a yellow `{component.button-primary-pill}` on the right side (\"Sign Up\").\n\n**`text-input-on-light`** — Standard input on transactional pages. Background `{colors.canvas-light}`, 1px `{colors.hairline-on-light}` border, rounded `{rounded.md}` (6px), padding 10px × 16px, height 40px. Focus state inherits the focus-ring shadow.\n\n**`cookie-consent-card`** — The cookie banner card visible on the homepage. Background `{colors.canvas-light}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px). Body text in `{typography.body-sm}` (13px / 400) with three stacked button options (Accept Cookies & Continue / Reject Additional Cookies / Manage Cookies)."
    }
  ]
}
```

