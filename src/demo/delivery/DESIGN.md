---
version: "1.0"
name: Mi sistema de diseño
description: Sistema compuesto en DESIGN.md Studio.
mode: light
sources:
  colors: dataset/airbnb.json
  typography: dataset/bmw.json
  layout: dataset/coinbase.json
  shape: dataset/ibm.json
  elevation: dataset/mongodb.json
  buttons: dataset/airbnb.json
  inputs: dataset/airbnb.json
colors:
  primary: "#ff385c"
  primary-active: "#e00b41"
  primary-disabled: "#ffd1da"
  primary-error-text: "#c13515"
  primary-error-text-hover: "#b32505"
  luxe: "#460479"
  plus: "#92174d"
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  muted-soft: "#929292"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  border-strong: "#c1c1c1"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  surface-strong: "#f2f2f2"
  on-primary: "#171717"
  on-dark: "#ffffff"
  legal-link: "#428bff"
  star-rating: "#222222"
  scrim: "#000000"
  surface: "#ffffff"
colorRoleSources:
  primary: primary
  background: canvas
  card: surface-card
  border: hairline
  foreground: ink
typography:
  display-xl:
    fontFamily: Inter, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0
  display-lg:
    fontFamily: Inter, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  display-md:
    fontFamily: Inter, sans-serif
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  display-sm:
    fontFamily: Inter, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  title-lg:
    fontFamily: Inter, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.5px
  label-uppercase:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 1.5px
    textTransform: uppercase
  button:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.5px
  nav-link:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.3px
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  base: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
components:
  button:
    borderRadius: 8px
    padding: 14px 24px
    fontWeight: 500
    letterSpacing: 0px
  input:
    source: text-input
    guidance:
      - section: Components > Forms
        content: "**`text-input`** — White surface, 1px hairline outline, `{rounded.sm}` 8px radius, 56px height, 14×12px padding. Stacked label above (in `{typography.caption}` muted), placeholder text in `{typography.body-md}` muted. On focus, the border thickens to 2px ink and the border color flips to `{colors.ink}` — no glow, no ring."
    label: stacked
    border: outline
    css:
      --input-padding: 14px 12px
      --input-radius: 8px
      --input-height: 56px
      --input-bg: "#ffffff"
      --input-color: "#222222"
      --input-border: "#dddddd"
      --input-focus-width: 2px
      --input-focus-bg: "#ffffff"
      --input-focus-color: "#222222"
      --input-focus-shadow: none
    fallback: Cuando no hay una regla de foco explícita se usa un halo de 3px al 20%; los colores de roles se componen con la paleta seleccionada.
    borderRadius: 8px
    padding: 14px 12px
  content:
    product:
      source: product-card
      style:
        background: "#ffffff"
        color: "#222222"
        borderRadius: 0px
        padding: 32px
        border: none
    finance:
      source: feature-card
      style:
        background: "#ffffff"
        color: "#222222"
        borderRadius: 0px
        padding: 24px
        border: none
    list:
      source: resource-tile
      style:
        background: "#ffffff"
        color: "#222222"
        borderRadius: 0px
        padding: 16px
        border: none
  card:
    borderRadius: 8px
    padding: 32px
    boxShadow: rgba(0, 30, 43, 0.04) 0px 1px 2px 0px
resolvedCss:
  --background: "#ffffff"
  --card: "#ffffff"
  --popover: "#ffffff"
  --foreground: "#222222"
  --primary: "#ff385c"
  --primary-foreground: "#171717"
  --border: "#dddddd"
  --muted-foreground: "#6a6a6a"
  --muted: "color-mix(in srgb, #ffffff, #222222 7%)"
  --secondary: "color-mix(in srgb, #ffffff, #222222 7%)"
  --secondary-foreground: "#222222"
  --accent: "color-mix(in srgb, #ffffff, #222222 12%)"
  --accent-foreground: "#222222"
  --success: "#16a34a"
  --warning: "#d97706"
  --destructive: "#dc2626"
  --info: "#2563eb"
  --radius: 6px
  --card-radius: 8px
  --button-radius: 8px
  --input-radius: 8px
  --preview-font: Inter, sans-serif
  --heading-font: Inter, sans-serif
  --mono-font: "'JetBrains Mono', monospace"
  --body-size: 16px
  --body-weight: 300
  --body-leading: 1.55
  --heading-size: 44px
  --heading-weight: 700
  --heading-tracking: 0px
  --heading-leading: 1.1
  --button-weight: 500
  --button-tracking: 0px
  --button-padding: 14px 24px
  --input-padding: 14px 12px
  --gallery-gap: 24px
  --sample-padding: 32px
  --preview-columns: 2
  --sample-shadow: rgba(0, 30, 43, 0.04) 0px 1px 2px 0px
  --input-height: 56px
  --input-bg: "#ffffff"
  --input-color: "#222222"
  --input-border: "#dddddd"
  --input-focus-width: 2px
  --input-focus-bg: "#ffffff"
  --input-focus-color: "#222222"
  --input-focus-shadow: none
---

# Mi sistema de diseño

## Composición

- **Paleta de colores:** Airbnb
- **Tipografía:** BMW
- **Distribución y espaciado:** Coinbase
- **Formas y tarjetas:** IBM
- **Sombras y profundidad:** MongoDB
- **Botones:** Airbnb
- **Campos y controles:** Airbnb

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
  --foreground: #222222;
  --primary: #ff385c;
  --primary-foreground: #171717;
  --border: #dddddd;
  --muted-foreground: #6a6a6a;
  --muted: color-mix(in srgb, #ffffff, #222222 7%);
  --secondary: color-mix(in srgb, #ffffff, #222222 7%);
  --secondary-foreground: #222222;
  --accent: color-mix(in srgb, #ffffff, #222222 12%);
  --accent-foreground: #222222;
  --success: #16a34a;
  --warning: #d97706;
  --destructive: #dc2626;
  --info: #2563eb;
  --radius: 6px;
  --card-radius: 8px;
  --button-radius: 8px;
  --input-radius: 8px;
  --preview-font: Inter, sans-serif;
  --heading-font: Inter, sans-serif;
  --mono-font: 'JetBrains Mono', monospace;
  --body-size: 16px;
  --body-weight: 300;
  --body-leading: 1.55;
  --heading-size: 44px;
  --heading-weight: 700;
  --heading-tracking: 0px;
  --heading-leading: 1.1;
  --button-weight: 500;
  --button-tracking: 0px;
  --button-padding: 14px 24px;
  --input-padding: 14px 12px;
  --gallery-gap: 24px;
  --sample-padding: 32px;
  --preview-columns: 2;
  --sample-shadow: rgba(0, 30, 43, 0.04) 0px 1px 2px 0px;
  --input-height: 56px;
  --input-bg: #ffffff;
  --input-color: #222222;
  --input-border: #dddddd;
  --input-focus-width: 2px;
  --input-focus-bg: #ffffff;
  --input-focus-color: #222222;
  --input-focus-shadow: none;
}
```

## Fuentes locales

Copiar las carpetas de las familias siguientes desde `public/fonts` junto con sus licencias. Cargar sus hojas CSS locales; no añadir peticiones a Google Fonts en tiempo de ejecución. Los archivos de fuentes no están embebidos en este Markdown.

```json
[
  {
    "family": "Inter",
    "stylesheet": "/fonts/inter/font.css",
    "files": [
      "/fonts/inter/cfc1ad02e91c1f73.ttf",
      "/fonts/inter/e8f4f237d14eb97e.ttf",
      "/fonts/inter/acdf0c64fdcf14b5.ttf",
      "/fonts/inter/abd281d0dad14338.ttf",
      "/fonts/inter/f3a0eb876d546f71.ttf",
      "/fonts/inter/ac0bffb8676d0c1a.ttf",
      "/fonts/inter/da92c6a83bd0472b.ttf",
      "/fonts/inter/85e0e8e4a47ba722.ttf",
      "/fonts/inter/981d8432eb23e81b.ttf",
      "/fonts/inter/da69e5d9e9576d30.ttf",
      "/fonts/inter/2d5523b07e76b595.ttf",
      "/fonts/inter/ee9558be9f8a4d75.ttf",
      "/fonts/inter/a699af1dea30b799.ttf",
      "/fonts/inter/e45972c7e9f24dc3.ttf",
      "/fonts/inter/87e867b52640b3b3.ttf",
      "/fonts/inter/6f49e1b28bce7339.ttf",
      "/fonts/inter/2f6c206f7c744148.ttf",
      "/fonts/inter/861da2b4255e09a6.ttf"
    ],
    "licenseSource": "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt"
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

Fuente: `dataset/airbnb.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "primary": "#ff385c",
    "primary-active": "#e00b41",
    "primary-disabled": "#ffd1da",
    "primary-error-text": "#c13515",
    "primary-error-text-hover": "#b32505",
    "luxe": "#460479",
    "plus": "#92174d",
    "ink": "#222222",
    "body": "#3f3f3f",
    "muted": "#6a6a6a",
    "muted-soft": "#929292",
    "hairline": "#dddddd",
    "hairline-soft": "#ebebeb",
    "border-strong": "#c1c1c1",
    "canvas": "#ffffff",
    "surface-soft": "#f7f7f7",
    "surface-card": "#ffffff",
    "surface-strong": "#f2f2f2",
    "on-primary": "#ffffff",
    "on-dark": "#ffffff",
    "legal-link": "#428bff",
    "star-rating": "#222222",
    "scrim": "#000000"
  },
  "guidance": [
    {
      "section": "Colors > Brand & Accent",
      "content": "- **Rausch** (`{colors.primary}` — #ff385c): The single brand color. Used for primary CTA backgrounds (Reserve, Continue), the search orb, the heart save state on property cards, and inline brand links. The most recognizable color in consumer travel.\n- **Rausch Active** (`{colors.primary-active}` — #e00b41): The press / pointer-down variant — slightly more saturated. Used on `{component.button-primary-active}`.\n- **Rausch Disabled** (`{colors.primary-disabled}` — #ffd1da): A pale tint used on disabled CTAs.\n- **Luxe Purple** (`{colors.luxe}` — #460479): Sub-brand accent for Airbnb Luxe. Only appears inside Luxe-branded surfaces — never in mainline marketing.\n- **Plus Magenta** (`{colors.plus}` — #92174d): Sub-brand accent for Airbnb Plus. Same scoping as Luxe — sub-product only."
    },
    {
      "section": "Colors > Surface",
      "content": "- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor for every public page. Airbnb does not have a dark mode on the public web.\n- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7): The lightest fill — used on disabled fields, sub-nav hover backgrounds, and the inline search filter band.\n- **Surface Strong** (`{colors.surface-strong}` — #f2f2f2): Slightly heavier fill — Inter icon-button surface (e.g., the breadcrumb back-arrow and listing toolbar buttons)."
    },
    {
      "section": "Colors > Hairlines & Borders",
      "content": "- **Hairline** (`{colors.hairline}` — #dddddd): The default 1px border tone — search bar dividers, table separators, footer column splitters, card 1px borders.\n- **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb): A lighter divider used on long-scrolling editorial body separators.\n- **Border Strong** (`{colors.border-strong}` — #c1c1c1): A heavier stroke used on disabled outline buttons and form input outlines after focus."
    },
    {
      "section": "Colors > Text",
      "content": "- **Ink** (`{colors.ink}` — #222222): The dominant text color on light surfaces. Display headlines, body paragraphs, primary nav links, and most inline link text. Never pure black.\n- **Body** (`{colors.body}` — #3f3f3f): A secondary running-text color used inside long-form review and amenity copy where ink would feel too heavy.\n- **Muted** (`{colors.muted}` — #6a6a6a): Sub-titles inside city link blocks (\"Cottage rentals\", \"Villa rentals\"), inactive product-tab labels, footer category sub-labels, \"View all\" links.\n- **Muted Soft** (`{colors.muted-soft}` — #929292): Disabled link text. Used very sparingly.\n- **Star Rating** (`{colors.star-rating}` — #222222): The same ink token — Airbnb's star icon and \"4.81\" rating numbers all render in ink rather than a yellow/gold color, which is a deliberate brand choice (yellow stars feel cheap in travel context).\n- **On Primary** (`{colors.on-primary}` — #ffffff): White text on Rausch CTAs."
    },
    {
      "section": "Colors > Semantic",
      "content": "- **Error** (`{colors.primary-error-text}` — #c13515): Inline error text for form validation. Distinct from Rausch — slightly darker, more saturated red.\n- **Error Hover** (`{colors.primary-error-text-hover}` — #b32505): Darkens on link hover.\n- **Legal Link Blue** (`{colors.legal-link}` — #428bff): Inline links inside legal copy (Privacy, Terms). Only used inside the legal sub-band."
    },
    {
      "section": "Colors > Scrim",
      "content": "- **Scrim** (`{colors.scrim}` — #000000 at 50% opacity): The global modal backdrop tone — date picker, login dialog, language picker. Stored as the base hex; opacity is applied at render time."
    },
    {
      "section": "Components > Search Surface",
      "content": "**`search-bar-pill`** — The signature global search bar. White fill, 9999px radius, 64px height, 1px hairline 1px-shadow border. Internally divided by vertical hairline rules into `{component.search-field-segment}` cells (Where / When / Who). Each segment holds an uppercase caption label above a placeholder line in `{typography.caption}`.\n\n**`search-orb`** — The Inter Rausch orb terminating the right edge of the search bar. 48×48px, fully rounded, white magnifying-glass icon centered. The hottest single color moment on the homepage."
    }
  ]
}
```

## Tipografía

Fuente: `dataset/bmw.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "publicFontsOnly": true,
  "families": [
    {
      "family": "Inter",
      "provider": "Google Fonts",
      "license": "Open-source font",
      "url": "https://fonts.google.com/specimen/Inter"
    }
  ],
  "styles": {
    "display-xl": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "64px",
      "fontWeight": 700,
      "lineHeight": 1.05,
      "letterSpacing": 0
    },
    "display-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": 0
    },
    "display-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "32px",
      "fontWeight": 700,
      "lineHeight": 1.15,
      "letterSpacing": 0
    },
    "display-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": 0
    },
    "title-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.3,
      "letterSpacing": 0
    },
    "title-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "title-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 700,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "body-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 300,
      "lineHeight": 1.55,
      "letterSpacing": 0
    },
    "body-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 300,
      "lineHeight": 1.55,
      "letterSpacing": 0
    },
    "caption": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": "0.5px"
    },
    "label-uppercase": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "13px",
      "fontWeight": 700,
      "lineHeight": 1.3,
      "letterSpacing": "1.5px",
      "textTransform": "uppercase"
    },
    "button": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.5px"
    },
    "nav-link": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": "0.3px"
    }
  },
  "substitutionAdjustment": "Use Inter 700/300; use Saira Condensed only where a compressed headline is needed.",
  "guidance": [
    {
      "section": "Typography > Font Family",
      "content": "The system runs **Inter** in two cuts: regular (display + UI labels) and **Inter** (body + secondary copy). Fallback stack: `system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif`.\n\nThe display/body split is functional:\n- Inter (700) → display headlines, button labels, nav links\n- Inter (300) → paragraphs, descriptive copy\n- Inter (400) → caption, neutral nav-link contexts\n\nThis three-way split mirrors BMW M's — corporate and the M sub-brand share the same typographic DNA; only the weight/size ratios differ."
    },
    {
      "section": "Typography > Hierarchy",
      "content": "| Token | Size | Weight | Line Height | Letter Spacing | Use |\n|---|---|---|---|---|---|\n| `{typography.display-xl}` | 64px | 700 | 1.05 | 0 | Hero h1 (\"iX3\", model name) |\n| `{typography.display-lg}` | 48px | 700 | 1.1 | 0 | Section heads |\n| `{typography.display-md}` | 32px | 700 | 1.15 | 0 | Sub-section heads |\n| `{typography.display-sm}` | 24px | 700 | 1.25 | 0 | CTA-band headlines |\n| `{typography.title-lg}` | 20px | 700 | 1.3 | 0 | Card group titles |\n| `{typography.title-md}` | 18px | 700 | 1.4 | 0 | Model card title, intro paragraphs |\n| `{typography.title-sm}` | 16px | 700 | 1.4 | 0 | Inventory card title, list label |\n| `{typography.body-md}` | 16px | 300 (Light) | 1.55 | 0 | Default body — Inter |\n| `{typography.body-sm}` | 14px | 300 (Light) | 1.55 | 0 | Footer body, fine-print |\n| `{typography.caption}` | 12px | 400 | 1.4 | 0.5px | Photo captions, meta |\n| `{typography.label-uppercase}` | 13px | 700 | 1.3 | 1.5px | \"LEARN MORE\" inline links, category tabs |\n| `{typography.button}` | 14px | 700 | 1.0 | 0.5px | Standard CTA button label |\n| `{typography.nav-link}` | 14px | 400 | 1.4 | 0.3px | Top-nav menu items |"
    },
    {
      "section": "Typography > Principles",
      "content": "- The **700/300 contrast** is the editorial signature. Weight 500 is absent from the system.\n- **No negative letter-spacing** — Inter works on a wide body, so tracking stays at default. Apple/Cal.com-style tightening reads off-brand here.\n- **UPPERCASE inline links** — \"LEARN MORE\"-style CTAs run uppercase with 1.5px tracking. The \"machined precision\" voice.\n- **Weight 400 lives in a narrow lane** — only caption and nav-link, both neutral utility roles."
    }
  ]
}
```

## Distribución y espaciado

Fuente: `dataset/coinbase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "spacing": {
    "xxs": "4px",
    "xs": "8px",
    "sm": "12px",
    "base": "16px",
    "md": "20px",
    "lg": "24px",
    "xl": "32px",
    "xxl": "48px",
    "section": "96px"
  },
  "spacingValues": [
    "4px",
    "8px",
    "12px",
    "16px",
    "20px",
    "24px",
    "32px",
    "48px",
    "96px"
  ],
  "gridAndContainers": [
    {
      "section": "Layout > Spacing System",
      "content": "- **Base unit:** 4px.\n- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.base}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.\n- **Section padding:** `{spacing.section}` (96px) for every major editorial band.\n- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and product-UI mockups."
    },
    {
      "section": "Layout > Grid & Container",
      "content": "- **Max content width:** ~1200px centered. Hero photography full-bleed.\n- **Editorial body:** Single 12-column grid.\n- **Feature card grids:** 2-up at desktop for hero splits, 3-up for benefit grids.\n- **Footer:** 6-column link list at desktop."
    },
    {
      "section": "Layout > Whitespace Philosophy",
      "content": "Generous editorial pacing — closer to Bloomberg or the Financial Times than to a trading dashboard. 96px between bands; cards inside bands sit 24px apart. Density lives behind login walls, not on marketing."
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
        "content": "| Name | Width | Key Changes |\n|---|---|---|\n| Mobile | < 640px | Hero h1 80→40px; feature card grid 1-up; asset row stacks; nav collapses to hamburger; layered product-UI cards collapse to single card. |\n| Tablet | 640–1024px | Hero h1 64px; feature card grid 2-up; asset rows stay horizontal but compress columns. |\n| Desktop | 1024–1280px | Full hero h1 80px; feature card grid 3-up; full asset row layout. |\n| Wide | > 1280px | Content caps at 1200px; hero photography full-bleed. |"
      },
      {
        "section": "Responsive Behavior > Touch Targets",
        "content": "- Primary CTA pill at 44px height — at WCAG AAA.\n- Larger hero pill (`{component.button-pill-cta}`) at 56px — well above AAA.\n- Asset icon circles at 32px — borderline; padded 8px row creates effective 48px tap zone.\n- Search pill at 44px height — at AAA."
      },
      {
        "section": "Responsive Behavior > Collapsing Strategy",
        "content": "- Top nav switches to hamburger sheet below 768px. Sign Up CTA stays visible.\n- Hero h1 steps down: 80 → 64 → 52 → 44 → 36px on smallest screens.\n- Layered product-UI mockup cards collapse from 2-3 stacked into a single card on mobile.\n- Pricing tier rows: 3-up → 2-up → 1-up.\n- Asset rows on mobile stack vertically: ticker line on top, price + change line beneath."
      }
    ]
  }
}
```

## Formas y tarjetas

Fuente: `dataset/ibm.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "shape": {
    "radii": {
      "none": "0px",
      "xs": "2px",
      "sm": "4px",
      "md": "6px",
      "lg": "8px",
      "pill": "9999px",
      "full": "9999px"
    },
    "radiusValues": [
      "0px",
      "2px",
      "4px",
      "6px",
      "8px",
      "9999px"
    ],
    "guidance": [
      {
        "section": "Shapes > Border Radius Scale",
        "content": "| Token | Value | Use |\n|---|---|---|\n| `{rounded.none}` | 0px | Default — every button, card, input, container |\n| `{rounded.xs}` | 2px | Small badges (rare exception) |\n| `{rounded.sm}` | 4px | Avatar circles squared, dropdown menus |\n| `{rounded.md}` | 6px | (Used rarely; documented for completeness) |\n| `{rounded.lg}` | 8px | (Used rarely; documented for completeness) |\n| `{rounded.pill}` | 9999px | Status pills, badges in product UI (rare on marketing) |\n\nThe brand commits to flat 0px corners. The other tokens exist for product / mobile surfaces but rarely surface on marketing."
      },
      {
        "section": "Shapes > Photography & Illustration Geometry",
        "content": "- IBM uses photography (people, hardware, sports cars) and abstract illustration (geometric mesh, dotted patterns) interchangeably.\n- Image frames are flat — no rounded corners.\n- Customer logo tiles sit on `{rounded.none}` 0px tiles with thin 1px borders."
      }
    ]
  },
  "cards": {
    "tokens": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "12px 16px"
      },
      "button-primary-pressed": {
        "backgroundColor": "{colors.blue-80}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}"
      },
      "button-secondary": {
        "backgroundColor": "{colors.ink}",
        "textColor": "{colors.inverse-ink}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "12px 16px"
      },
      "button-tertiary": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "12px 16px"
      },
      "button-ghost": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "12px 16px"
      },
      "button-danger": {
        "backgroundColor": "{colors.semantic-error}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "12px 16px"
      },
      "feature-card": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "24px"
      },
      "feature-card-elevated": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "24px"
      },
      "product-card": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "32px"
      },
      "hero-card": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.display-md}",
        "rounded": "{rounded.none}",
        "padding": "48px"
      },
      "cta-banner": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.headline}",
        "rounded": "{rounded.none}",
        "padding": "48px"
      },
      "text-input": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "11px 16px"
      },
      "text-input-focused": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "11px 16px"
      },
      "text-input-error": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "11px 16px"
      },
      "newsletter-input": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body}",
        "rounded": "{rounded.none}",
        "padding": "11px 16px"
      },
      "product-tab": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink-muted}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.none}",
        "padding": "16px 20px"
      },
      "product-tab-selected": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-emphasis}",
        "rounded": "{rounded.none}",
        "padding": "16px 20px"
      },
      "resource-tile": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.none}",
        "padding": "16px"
      },
      "customer-logo-tile": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink-muted}",
        "typography": "{typography.caption}",
        "rounded": "{rounded.none}",
        "padding": "24px"
      },
      "top-nav": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.none}",
        "height": "48px"
      },
      "utility-bar": {
        "backgroundColor": "{colors.surface-1}",
        "textColor": "{colors.ink-muted}",
        "typography": "{typography.caption}",
        "rounded": "{rounded.none}",
        "height": "32px"
      },
      "footer": {
        "backgroundColor": "{colors.inverse-canvas}",
        "textColor": "{colors.inverse-ink-muted}",
        "typography": "{typography.body-sm}",
        "rounded": "{rounded.none}",
        "padding": "64px 32px"
      }
    },
    "guidance": [
      {
        "section": "Components > Buttons",
        "content": "**`button-primary`** — Blue solid CTA. The default primary across all pages.\n- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 12px 16px, rounded `{rounded.none}`.\n- Pressed state lives in `button-primary-pressed` (background shifts to `{colors.blue-80}`).\n\n**`button-secondary`** — Charcoal solid button — Carbon's \"secondary\" treatment.\n- Background `{colors.ink}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 12px 16px, rounded `{rounded.none}`.\n\n**`button-tertiary`** — White button with blue 1px border + blue text. Used for tertiary CTAs.\n- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px. (Border in implementation: 1px `{colors.primary}`.)\n\n**`button-ghost`** — Plain text + chevron, no background until hover.\n- Background `{colors.canvas}`, text `{colors.primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px.\n\n**`button-danger`** — Carbon's destructive variant.\n- Background `{colors.semantic-error}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.none}`, padding 12px 16px."
      },
      {
        "section": "Components > Cards & Containers",
        "content": "**`feature-card`** — Default feature highlight tile on the home and product pages.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 24px. Stroked with 1px `{colors.hairline}`.\n\n**`feature-card-elevated`** — Same shape on `{colors.surface-1}` ground — used for \"Recommended\" cards in the latest-content carousel.\n- Background `{colors.surface-1}`, otherwise identical structure.\n\n**`product-card`** — Larger product showcase tile.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 32px.\n\n**`hero-card`** — Hero composition card with light-weight title, body, and CTA.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display-md}`, rounded `{rounded.none}`, padding 48px.\n\n**`cta-banner`** — Full-width blue CTA panel near the bottom of the page.\n- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.headline}`, rounded `{rounded.none}`, padding 48px.\n\n**`resource-tile`** — Smaller article / case-study tile.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.none}`, padding 16px.\n\n**`customer-logo-tile`** — Single tile in the customer marquee on the home page (Ferrari, Pfizer, etc.).\n- Background `{colors.canvas}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.none}`, padding 24px. 1px hairline border."
      },
      {
        "section": "Components > Inputs & Forms",
        "content": "**`text-input`** + **`text-input-focused`** + **`text-input-error`** — Carbon's input chrome.\n- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 11px 16px.\n- Focus state replaces the bottom 1px hairline with a 2px `{colors.primary}` underline (Carbon's signature focus treatment).\n- Error state adds 2px `{colors.semantic-error}` bottom underline.\n\n**`newsletter-input`** — The \"Stay connected\" newsletter capture on the home page.\n- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 11px 16px. Adjacent submit is `button-primary`."
      },
      {
        "section": "Components > Tabs",
        "content": "**`product-tab`** + **`product-tab-selected`** — The horizontal tab strip on product pages and the home \"Recommended\" carousel.\n- Default: `{colors.canvas}` background, `{colors.ink-muted}` text, rounded `{rounded.none}`, padding 16px 20px. Bottom 1px hairline.\n- Selected: `{colors.canvas}` background, `{colors.ink}` text, `{typography.body-emphasis}` weight, bottom 2px `{colors.primary}` underline. Same padding / rounding."
      },
      {
        "section": "Components > Navigation",
        "content": "**`top-nav`** — Sticky white bar with the IBM logomark left, nav categories center, and search / sign-in icons right.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 48px. 1px bottom hairline.\n\n**`utility-bar`** — Slim gray ribbon above the top nav with location switch, contact, search shortcuts.\n- Background `{colors.surface-1}`, text `{colors.ink-muted}`, type `{typography.caption}`, height 32px."
      },
      {
        "section": "Components > Footer",
        "content": "**`footer`** — Charcoal footer (`{colors.inverse-canvas}`) with the IBM wordmark left and 5–6 columns of caption-sized links. The only inverted surface above the page break.\n- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink-muted}`, type `{typography.body-sm}`, padding 64px 32px."
      }
    ]
  }
}
```

## Sombras y profundidad

Fuente: `dataset/mongodb.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {},
  "guidance": [
    {
      "section": "Elevation & Depth",
      "content": "| Level | Treatment | Use |\n|---|---|---|\n| 0 (flat) | No shadow; `{colors.hairline}` border | Default cards, table rows |\n| 1 (subtle) | `rgba(0, 30, 43, 0.04) 0px 1px 2px 0px` | Hover-elevated tiles |\n| 2 (card) | `rgba(0, 30, 43, 0.08) 0px 4px 12px 0px` | Feature cards |\n| 3 (mockup) | `rgba(0, 30, 43, 0.12) 0px 12px 24px -4px` | Code mockup over hero |\n| 4 (modal) | `rgba(0, 30, 43, 0.16) 0px 16px 48px -8px` | Modals, dropdowns |"
    },
    {
      "section": "Elevation & Depth > Decorative Depth",
      "content": "- Dark teal hero bands carry atmospheric gradient depth\n- Code mockup cards on hero use canvas-dark surface with terminal aesthetic\n- Pale-mint pricing-feature tier uses brand-tinted shadow"
    }
  ]
}
```

## Botones

Fuente: `dataset/airbnb.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "button-primary": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "14px 24px",
      "height": "48px"
    },
    "button-primary-active": {
      "backgroundColor": "{colors.primary-active}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.sm}"
    },
    "button-primary-disabled": {
      "backgroundColor": "{colors.primary-disabled}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.sm}"
    },
    "button-secondary": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "13px 23px",
      "height": "48px"
    },
    "button-tertiary-text": {
      "backgroundColor": "transparent",
      "textColor": "{colors.ink}",
      "typography": "{typography.button-md}"
    },
    "button-pill-rausch": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-sm}",
      "rounded": "{rounded.full}",
      "padding": "10px 20px"
    },
    "icon-button-circle": {
      "backgroundColor": "{colors.surface-strong}",
      "textColor": "{colors.ink}",
      "rounded": "{rounded.full}",
      "height": "32px"
    },
    "icon-button-outline": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "rounded": "{rounded.full}",
      "height": "40px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "content": "**`button-primary`** — Rausch fill, white text, 8px radius, 14×24px padding, 48px height, weight 500. The most common CTA across the system: \"Reserve\", \"Continue\", \"Search\", account-flow primaries.\n\n**`button-primary-active`** — The press state. Background flips to `{colors.primary-active}`. No transform, no shadow change.\n\n**`button-primary-disabled`** — Pale Rausch tint at #ffd1da with white text. Cursor not-allowed.\n\n**`button-secondary`** — White fill with ink text and a 1px ink outline. 8px radius. Used for \"Save\", \"Cancel\", and inverse CTAs over Rausch surfaces.\n\n**`button-tertiary-text`** — Plain ink text, no surface, no border. Underlined on hover. Used for \"Show more\" type links and modal close labels.\n\n**`button-pill-rausch`** — A pill-shaped Rausch CTA used on featured cells (e.g., \"Become a host\" sub-CTA) — 9999px radius, 10×20px padding, 14px label."
    }
  ]
}
```

## Campos y controles

Fuente: `dataset/airbnb.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "search-orb": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.full}",
      "height": "48px"
    },
    "search-bar-pill": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-sm}",
      "rounded": "{rounded.full}",
      "padding": "14px 24px",
      "height": "64px"
    },
    "search-field-segment": {
      "backgroundColor": "transparent",
      "textColor": "{colors.ink}",
      "typography": "{typography.caption}",
      "padding": "8px 24px"
    },
    "text-input": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.sm}",
      "padding": "14px 12px",
      "height": "56px"
    }
  },
  "guidance": [
    {
      "section": "Components > Search Surface",
      "content": "**`search-bar-pill`** — The signature global search bar. White fill, 9999px radius, 64px height, 1px hairline 1px-shadow border. Internally divided by vertical hairline rules into `{component.search-field-segment}` cells (Where / When / Who). Each segment holds an uppercase caption label above a placeholder line in `{typography.caption}`.\n\n**`search-orb`** — The Inter Rausch orb terminating the right edge of the search bar. 48×48px, fully rounded, white magnifying-glass icon centered. The hottest single color moment on the homepage."
    },
    {
      "section": "Components > Forms",
      "content": "**`text-input`** — White surface, 1px hairline outline, `{rounded.sm}` 8px radius, 56px height, 14×12px padding. Stacked label above (in `{typography.caption}` muted), placeholder text in `{typography.body-md}` muted. On focus, the border thickens to 2px ink and the border color flips to `{colors.ink}` — no glow, no ring."
    }
  ]
}
```

