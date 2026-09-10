---
version: "1.0"
name: Mi sistema de diseño
description: Sistema compuesto en DESIGN.md Studio.
mode: dark
sources:
  colors: dataset/clickhouse.json
  typography: dataset/airbnb.json
  layout: dataset/airbnb.json
  shape: dataset/ferrari.json
  elevation: dataset/linear.app.json
  buttons: dataset/apple.json
  inputs: dataset/apple.json
colors:
  primary: "#faff69"
  primary-active: "#e6eb52"
  primary-disabled: "#3a3a1f"
  ink: "#ffffff"
  body: "#cccccc"
  body-strong: "#e6e6e6"
  muted: "#888888"
  muted-soft: "#5a5a5a"
  hairline: "#2a2a2a"
  hairline-strong: "#3a3a3a"
  canvas: "#0a0a0a"
  surface-soft: "#121212"
  surface-card: "#1a1a1a"
  surface-elevated: "#242424"
  surface-yellow-band: "#faff69"
  on-primary: "#0a0a0a"
  on-dark: "#ffffff"
  on-yellow: "#0a0a0a"
  accent-emerald: "#22c55e"
  accent-rose: "#ef4444"
  accent-blue: "#3b82f6"
  success: "#22c55e"
  warning: "#f59e0b"
  error: "#ef4444"
  surface: "#1a1a1a"
colorRoleSources:
  primary: primary
  background: canvas
  card: surface-card
  border: hairline
  foreground: ink
typography:
  display-xl:
    fontFamily: Inter, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-lg:
    fontFamily: Inter, sans-serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: -0.44px
  display-md:
    fontFamily: Inter, sans-serif
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0
  display-sm:
    fontFamily: Inter, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.18px
  title-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  title-sm:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  rating-display:
    fontFamily: Inter, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: Inter, sans-serif
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0
  micro-label:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0
  uppercase-tag:
    fontFamily: Inter, sans-serif
    fontSize: 8px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.32px
    textTransform: uppercase
  button-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
components:
  button:
    borderRadius: 9999px
    padding: 11px 22px
    fontWeight: 300
    letterSpacing: 0px
  input:
    source: search-input
    guidance:
      - section: Components > Inputs & Forms
        content: |-
          **`search-input`** — The accessories search input. Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body}` (17px), 1px solid `rgba(0, 0, 0, 0.08)` border, rounded `{rounded.pill}` (full pill — search is also pill-shaped, matching the CTA grammar), padding 12px × 20px, height 44px. Leading icon: search glyph at 14px, muted tint.

          Error and validation states were not surfaced in the analyzed pages.
    label: stacked
    border: outline
    css:
      --input-padding: 12px 20px
      --input-radius: 9999px
      --input-height: 44px
      --input-bg: "#0a0a0a"
      --input-color: "#ffffff"
      --input-border: "#2a2a2a"
      --input-focus-width: 2px
      --input-focus-bg: "#0a0a0a"
      --input-focus-color: "#faff69"
      --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #faff69, transparent 80%)"
    fallback: Cuando no hay una regla de foco explícita se usa un halo de 3px al 20%; los colores de roles se componen con la paleta seleccionada.
    borderRadius: 9999px
    padding: 12px 20px
  content:
    product:
      source: Respaldo del editor
      style:
        background: "#0a0a0a"
        color: "#ffffff"
        borderRadius: 8px
        padding: 20px
        border: none
    finance:
      source: Respaldo del editor
      style:
        background: "#0a0a0a"
        color: "#ffffff"
        borderRadius: 8px
        padding: 20px
        border: none
    list:
      source: Respaldo del editor
      style:
        background: "#0a0a0a"
        color: "#ffffff"
        borderRadius: 8px
        padding: 20px
        border: none
  card:
    borderRadius: 8px
    padding: 32px
    boxShadow: none
resolvedCss:
  --background: "#0a0a0a"
  --card: "#1a1a1a"
  --popover: "#1a1a1a"
  --foreground: "#ffffff"
  --primary: "#faff69"
  --primary-foreground: "#0a0a0a"
  --border: "#2a2a2a"
  --muted-foreground: "#888888"
  --muted: "color-mix(in srgb, #1a1a1a, #ffffff 7%)"
  --secondary: "#242424"
  --secondary-foreground: "#ffffff"
  --accent: "color-mix(in srgb, #1a1a1a, #ffffff 12%)"
  --accent-foreground: "#ffffff"
  --success: "#22c55e"
  --warning: "#f59e0b"
  --destructive: "#ef4444"
  --info: "#3b82f6"
  --radius: 6px
  --card-radius: 8px
  --button-radius: 9999px
  --input-radius: 9999px
  --preview-font: Inter, sans-serif
  --heading-font: Inter, sans-serif
  --mono-font: "'JetBrains Mono', monospace"
  --body-size: 16px
  --body-weight: 400
  --body-leading: 1.5
  --heading-size: 24px
  --heading-weight: 500
  --heading-tracking: -0.44px
  --heading-leading: 1.18
  --button-weight: 300
  --button-tracking: 0px
  --button-padding: 11px 22px
  --input-padding: 12px 20px
  --gallery-gap: 24px
  --sample-padding: 32px
  --preview-columns: 2
  --sample-shadow: none
  --input-height: 44px
  --input-bg: "#0a0a0a"
  --input-color: "#ffffff"
  --input-border: "#2a2a2a"
  --input-focus-width: 2px
  --input-focus-bg: "#0a0a0a"
  --input-focus-color: "#faff69"
  --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #faff69, transparent 80%)"
---

# Mi sistema de diseño

## Composición

- **Paleta de colores:** ClickHouse
- **Tipografía:** Airbnb
- **Distribución y espaciado:** Airbnb
- **Formas y tarjetas:** Ferrari
- **Sombras y profundidad:** Linear
- **Botones:** Apple
- **Campos y controles:** Apple

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
  --background: #0a0a0a;
  --card: #1a1a1a;
  --popover: #1a1a1a;
  --foreground: #ffffff;
  --primary: #faff69;
  --primary-foreground: #0a0a0a;
  --border: #2a2a2a;
  --muted-foreground: #888888;
  --muted: color-mix(in srgb, #1a1a1a, #ffffff 7%);
  --secondary: #242424;
  --secondary-foreground: #ffffff;
  --accent: color-mix(in srgb, #1a1a1a, #ffffff 12%);
  --accent-foreground: #ffffff;
  --success: #22c55e;
  --warning: #f59e0b;
  --destructive: #ef4444;
  --info: #3b82f6;
  --radius: 6px;
  --card-radius: 8px;
  --button-radius: 9999px;
  --input-radius: 9999px;
  --preview-font: Inter, sans-serif;
  --heading-font: Inter, sans-serif;
  --mono-font: 'JetBrains Mono', monospace;
  --body-size: 16px;
  --body-weight: 400;
  --body-leading: 1.5;
  --heading-size: 24px;
  --heading-weight: 500;
  --heading-tracking: -0.44px;
  --heading-leading: 1.18;
  --button-weight: 300;
  --button-tracking: 0px;
  --button-padding: 11px 22px;
  --input-padding: 12px 20px;
  --gallery-gap: 24px;
  --sample-padding: 32px;
  --preview-columns: 2;
  --sample-shadow: none;
  --input-height: 44px;
  --input-bg: #0a0a0a;
  --input-color: #ffffff;
  --input-border: #2a2a2a;
  --input-focus-width: 2px;
  --input-focus-bg: #0a0a0a;
  --input-focus-color: #faff69;
  --input-focus-shadow: 0 0 0 3px color-mix(in srgb, #faff69, transparent 80%);
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

Fuente: `dataset/clickhouse.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "primary": "#faff69",
    "primary-active": "#e6eb52",
    "primary-disabled": "#3a3a1f",
    "ink": "#ffffff",
    "body": "#cccccc",
    "body-strong": "#e6e6e6",
    "muted": "#888888",
    "muted-soft": "#5a5a5a",
    "hairline": "#2a2a2a",
    "hairline-strong": "#3a3a3a",
    "canvas": "#0a0a0a",
    "surface-soft": "#121212",
    "surface-card": "#1a1a1a",
    "surface-elevated": "#242424",
    "surface-yellow-band": "#faff69",
    "on-primary": "#0a0a0a",
    "on-dark": "#ffffff",
    "on-yellow": "#0a0a0a",
    "accent-emerald": "#22c55e",
    "accent-rose": "#ef4444",
    "accent-blue": "#3b82f6",
    "success": "#22c55e",
    "warning": "#f59e0b",
    "error": "#ef4444"
  },
  "guidance": [
    {
      "section": "Colors > Brand & Accent",
      "content": "- **Primary (Electric Yellow)** (`{colors.primary}` — #faff69): The signature brand color. All primary CTA backgrounds, large stat-callout numbers, full-bleed yellow CTA cards. The yellow is the brand.\n- **Primary Active** (`{colors.primary-active}` — #e6eb52): Press / hover-darker variant.\n- **Primary Disabled** (`{colors.primary-disabled}` — #3a3a1f): Desaturated dark-yellow on dark canvas."
    },
    {
      "section": "Colors > Surface",
      "content": "- **Canvas** (`{colors.canvas}` — #0a0a0a): The default page floor. Near-pure black.\n- **Surface Soft** (`{colors.surface-soft}` — #121212): Section dividers, very-soft band tints.\n- **Surface Card** (`{colors.surface-card}` — #1a1a1a): Feature cards, code windows, product mockups, pricing tier cards.\n- **Surface Elevated** (`{colors.surface-elevated}` — #242424): Nested cards inside larger dark cards.\n- **Surface Yellow Band** (`{colors.surface-yellow-band}` — #faff69): The yellow CTA card / band fill — same hex as primary.\n- **Hairline** (`{colors.hairline}` — #2a2a2a): 1px borders on cards.\n- **Hairline Strong** (`{colors.hairline-strong}` — #3a3a3a): Heavier divider on input underlines and emphasis."
    },
    {
      "section": "Colors > Text",
      "content": "- **Ink / On Dark** (`{colors.on-dark}` — #ffffff): All headline and primary text.\n- **Body** (`{colors.body}` — #cccccc): Default running-text color.\n- **Body Strong** (`{colors.body-strong}` — #e6e6e6): Emphasized paragraphs.\n- **Muted** (`{colors.muted}` — #888888): Footer links, captions, breadcrumbs.\n- **Muted Soft** (`{colors.muted-soft}` — #5a5a5a): Tertiary text — fine print.\n- **On Primary / On Yellow** (`{colors.on-primary}` / `{colors.on-yellow}` — #0a0a0a): Black text on yellow CTAs and yellow CTA bands. The high-contrast yellow + black combo is the brand action signal."
    },
    {
      "section": "Colors > Semantic / Accent",
      "content": "- **Accent Emerald** (`{colors.accent-emerald}` — #22c55e): Success states, \"active\" status indicators in product UI.\n- **Accent Rose** (`{colors.accent-rose}` — #ef4444): Error states, \"down\" indicators.\n- **Accent Blue** (`{colors.accent-blue}` — #3b82f6): Info states, code-syntax highlighting."
    }
  ]
}
```

## Tipografía

Fuente: `dataset/airbnb.json`. Referencia original subordinada a las reglas de composición anteriores.

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
      "fontSize": "28px",
      "fontWeight": 700,
      "lineHeight": 1.43,
      "letterSpacing": 0
    },
    "display-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "22px",
      "fontWeight": 500,
      "lineHeight": 1.18,
      "letterSpacing": "-0.44px"
    },
    "display-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "21px",
      "fontWeight": 700,
      "lineHeight": 1.43,
      "letterSpacing": 0
    },
    "display-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.2,
      "letterSpacing": "-0.18px"
    },
    "title-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": 0
    },
    "title-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": 0
    },
    "rating-display": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "64px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-1px"
    },
    "body-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    },
    "body-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.43,
      "letterSpacing": 0
    },
    "caption": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.29,
      "letterSpacing": 0
    },
    "caption-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": 1.23,
      "letterSpacing": 0
    },
    "badge": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "11px",
      "fontWeight": 600,
      "lineHeight": 1.18,
      "letterSpacing": 0
    },
    "micro-label": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.33,
      "letterSpacing": 0
    },
    "uppercase-tag": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "8px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.32px",
      "textTransform": "uppercase"
    },
    "button-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": 0
    },
    "button-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.29,
      "letterSpacing": 0
    },
    "link": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.43,
      "letterSpacing": 0
    },
    "nav-link": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.25,
      "letterSpacing": 0
    }
  },
  "substitutionAdjustment": "Reduce display line-height about 2% to mimic the tighter cap height.",
  "guidance": [
    {
      "section": "Typography > Font Family",
      "content": "The system runs **Inter** for everything — display, body, navigation, captions, microcopy. Fallbacks walk `Inter, -apple-system, system-ui, Roboto, \"Arimo\", sans-serif`. **Inter** is the historic in-house typeface still kept as the first non-variable fallback; system stacks back it up.\n\nThere is no separate display family. The variable font carries the entire scale."
    },
    {
      "section": "Typography > Hierarchy",
      "content": "| Token | Size | Weight | Line Height | Letter Spacing | Use |\n|---|---|---|---|---|---|\n| `{typography.rating-display}` | 64px | 700 | 1.1 | -1px | Listing detail rating display (\"4.81\") |\n| `{typography.display-xl}` | 28px | 700 | 1.43 | 0 | Homepage h1 (\"Inspiration for future getaways\") |\n| `{typography.display-lg}` | 22px | 500 | 1.18 | -0.44px | Listing detail h1 (\"Close to Fethiye Aliyah Bali Beach…\") |\n| `{typography.display-md}` | 21px | 700 | 1.43 | 0 | Section heads inside listing detail (\"What this place offers\") |\n| `{typography.display-sm}` | 20px | 600 | 1.20 | -0.18px | Sub-section titles (\"Things to know\") |\n| `{typography.title-md}` | 16px | 600 | 1.25 | 0 | City link block titles (\"Wilmington\", \"Athens\") |\n| `{typography.title-sm}` | 16px | 500 | 1.25 | 0 | Footer column heads (\"Support\", \"Hosting\", \"Airbnb\") |\n| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text inside listing copy |\n| `{typography.body-sm}` | 14px | 400 | 1.43 | 0 | Card meta lines, dates, prices, distance text |\n| `{typography.caption}` | 14px | 500 | 1.29 | 0 | Search field segment labels (\"Where\", \"When\", \"Who\") |\n| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line (\"© 2026 Airbnb, Inc.\") |\n| `{typography.badge}` | 11px | 600 | 1.18 | 0 | \"Guest favorite\" floating badge text |\n| `{typography.micro-label}` | 12px | 700 | 1.33 | 0 | Card amenity micro-labels (\"Inline 6\") |\n| `{typography.uppercase-tag}` | 8px | 700 | 1.25 | 0.32px (uppercase) | \"NEW\" badge on product nav tabs |\n| `{typography.button-md}` | 16px | 500 | 1.25 | 0 | Primary CTA button labels |\n| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | Pill button labels (category strip) |\n| `{typography.link}` | 14px | 400 | 1.43 | 0 | Inline body links |\n| `{typography.nav-link}` | 16px | 600 | 1.25 | 0 | Top product-nav labels (Homes, Experiences, Services) |"
    },
    {
      "section": "Typography > Principles",
      "content": "Display weights stay modest. The homepage h1 at 28px / 700 is deliberately small — it tucks under the search bar so photography and the city-link grid carry visual hierarchy. The listing-detail h1 at 22px / 500 is even quieter; the listing photo banner does the work above it.\n\nThe single typographically loud moment in the entire system is the **rating display** (`{typography.rating-display}` — 64px / 700) on listing pages. That is the only place the system trusts type alone to carry hierarchy — rating numbers are a peak trust signal, so they get the loudest treatment."
    }
  ]
}
```

## Distribución y espaciado

Fuente: `dataset/airbnb.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "spacing": {
    "xxs": "2px",
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "base": "16px",
    "lg": "24px",
    "xl": "32px",
    "xxl": "48px",
    "section": "64px"
  },
  "spacingValues": [
    "4px",
    "2px",
    "8px",
    "12px",
    "16px",
    "24px",
    "32px",
    "48px",
    "64px",
    "96px"
  ],
  "gridAndContainers": [
    {
      "section": "Layout > Spacing System",
      "content": "- **Base unit:** 4px (with 2px micro-step).\n- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px.\n- **Section padding (vertical):** `{spacing.section}` (64px) for major page bands; tighter than typical SaaS marketing (80–96px) because marketplace pages need higher card density per scroll.\n- **Card internal padding:** `{spacing.lg}` (24px) for `{component.host-card}` and `{component.reservation-card}`; `{spacing.base}` (16px) for property-card meta block; `{spacing.sm}` (8px) for caption / date-row gutters.\n- **Gutters:** `{spacing.base}` (16px) between cards in the homepage city grid; `{spacing.lg}` (24px) inside footer column gutters; `{spacing.xs}` (4px) on dense category-strip dividers."
    },
    {
      "section": "Layout > Grid & Container",
      "content": "- **Max content width:** ~1280px centered on the homepage and editorial pages. Listing detail pages cap closer to 1080px to keep the photo banner and reservation rail readable.\n- **City link grid (homepage footer):** 6-column grid at desktop with each cell housing a city name in `{typography.title-md}` and a category sub-label in `{typography.body-sm}` muted.\n- **Listing detail:** 2-column with photo / amenity body on the left (~64% width) and a sticky reservation card (`{component.reservation-card}`) on the right (~32%).\n- **Footer:** 3-column link list (Support / Hosting / Airbnb) at desktop, collapsing to 1-column on mobile."
    },
    {
      "section": "Layout > Whitespace Philosophy",
      "content": "The system gives editorial bands 64px of vertical breathing room but compresses card grids — property and city-link cards sit just 16px apart. The contrast is intentional: the page reads as \"open hero, dense marketplace below,\" reinforcing the marketplace nature without overwhelming the visitor at the fold."
    }
  ],
  "responsive": {
    "breakpoints": [],
    "guidance": [
      {
        "section": "Responsive Behavior",
        "content": "| Name | Width | Key Changes |\n|---|---|---|\n| Mobile | < 744px | Top nav collapses to logo + hamburger; product tabs hide behind a sheet; search bar collapses to a single tappable pill; property cards stack 1-up; city grid 1-column; listing detail collapses reservation card to a sticky bottom bar. |\n| Tablet | 744–1128px | Top nav keeps product tabs but search bar narrows; property cards 2-up; city grid 2–3 column; reservation card stays sticky right-rail at narrower width. |\n| Desktop | 1128–1440px | Full top nav with three product tabs centered; search bar at full pill width with all 3 segments visible; property cards 4-up; city grid 6-column; listing detail 2-column with reservation rail. |\n| Wide | > 1440px | Content width caps at 1440px on listing/search pages and ~1280px on editorial; gutters absorb the rest. |"
      },
      {
        "section": "Responsive Behavior > Touch Targets",
        "content": "- Primary CTAs at minimum 48×48px (above WCAG AAA).\n- Search orb is 48×48px Inter — the most-tapped element on the page.\n- Heart save button is 32×32px Inter — borderline for AAA but compensated by a generous 12px padding inside the photo card.\n- Date-picker day cells are 40×40px Inter."
      },
      {
        "section": "Responsive Behavior > Collapsing Strategy",
        "content": "- Top product tabs collapse into a hamburger sheet below 744px.\n- Search bar's 3 segments collapse into a single-tap entry that opens a full-screen search overlay on mobile.\n- Property and city-link grids drop column counts cleanly at each breakpoint — never reflow rows; always reduce columns.\n- Reservation card on listing detail switches from sticky right-rail to a sticky bottom bar on mobile, carrying just the \"Reserve\" CTA + nightly price summary."
      }
    ]
  }
}
```

## Formas y tarjetas

Fuente: `dataset/ferrari.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "shape": {
    "radii": {
      "none": "0px",
      "xs": "2px",
      "sm": "4px",
      "md": "6px",
      "lg": "8px",
      "xl": "12px",
      "full": "9999px"
    },
    "radiusValues": [
      "0px",
      "2px",
      "4px",
      "6px",
      "8px",
      "12px",
      "9999px"
    ],
    "guidance": [
      {
        "section": "Colors > Hairlines",
        "content": "- **Hairline** (`{colors.hairline}` — #303030): 1px divider on dark — same hex as `{colors.canvas-elevated}`.\n- **Hairline On Light** (`{colors.hairline-on-light}` — #d2d2d2): 1px divider on light bands.\n- **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb): Lighter divider."
      },
      {
        "section": "Shapes > Border Radius Scale",
        "content": "| Token | Value | Use |\n|---|---|---|\n| `{rounded.none}` | 0px | Every CTA, card, band — dominant radius |\n| `{rounded.xs}` | 2px | Tight badges (rare) |\n| `{rounded.sm}` | 4px | Form inputs |\n| `{rounded.md}` | 6px | Compact cards (rare) |\n| `{rounded.lg}` | 8px | Mobile-only collapse cards |\n| `{rounded.xl}` | 12px | Modal/dialog corners (rare) |\n| `{rounded.full}` | 9999px | Avatar plates, badge pills |\n\nThe radius vocabulary is **sharp by default**. Sharp 0px corners are the brand button shape — never rounded pills. Pill geometry is reserved for badge labels only."
      }
    ]
  },
  "cards": {
    "tokens": {
      "top-nav-on-dark": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.nav-link}",
        "height": "64px"
      },
      "top-nav-on-light": {
        "backgroundColor": "{colors.canvas-light}",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.nav-link}",
        "height": "64px"
      },
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "14px 32px",
        "height": "48px"
      },
      "button-primary-active": {
        "backgroundColor": "{colors.primary-active}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.none}"
      },
      "button-outline-on-dark": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "13px 31px",
        "height": "48px"
      },
      "button-outline-on-light": {
        "backgroundColor": "transparent",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.button}",
        "rounded": "{rounded.none}",
        "padding": "13px 31px",
        "height": "48px"
      },
      "button-tertiary-text": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink}",
        "typography": "{typography.button}"
      },
      "hero-band-cinema": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.display-mega}",
        "padding": 0
      },
      "hero-band-light": {
        "backgroundColor": "{colors.canvas-light}",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.display-xl}",
        "padding": "96px"
      },
      "feature-card-photo": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.title-md}",
        "rounded": "{rounded.none}",
        "padding": 0
      },
      "feature-card-light": {
        "backgroundColor": "{colors.canvas-light}",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.title-md}",
        "rounded": "{rounded.none}",
        "padding": "32px"
      },
      "livery-band": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.ink}",
        "typography": "{typography.display-lg}",
        "padding": "96px"
      },
      "preowned-listing-card": {
        "backgroundColor": "{colors.canvas-light}",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.none}",
        "padding": "24px"
      },
      "spec-cell": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink}",
        "typography": "{typography.number-display}",
        "padding": "24px 0"
      },
      "race-position-cell": {
        "backgroundColor": "transparent",
        "textColor": "{colors.primary}",
        "typography": "{typography.number-display}"
      },
      "race-calendar-row": {
        "backgroundColor": "transparent",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-md}",
        "padding": "16px 0"
      },
      "driver-card": {
        "backgroundColor": "{colors.canvas-elevated}",
        "textColor": "{colors.ink}",
        "typography": "{typography.title-md}",
        "rounded": "{rounded.none}",
        "padding": "24px"
      },
      "text-input-on-dark": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.sm}",
        "padding": "14px 16px",
        "height": "48px"
      },
      "text-input-on-light": {
        "backgroundColor": "{colors.canvas-light}",
        "textColor": "{colors.body-on-light}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.sm}",
        "padding": "14px 16px",
        "height": "48px"
      },
      "badge-pill": {
        "backgroundColor": "{colors.canvas-elevated}",
        "textColor": "{colors.ink}",
        "typography": "{typography.caption-uppercase}",
        "rounded": "{rounded.full}",
        "padding": "4px 12px"
      },
      "cta-band-dark": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.ink}",
        "typography": "{typography.display-lg}",
        "padding": "96px"
      },
      "newsletter-input-band": {
        "backgroundColor": "{colors.canvas-elevated}",
        "textColor": "{colors.ink}",
        "typography": "{typography.body-md}",
        "rounded": "{rounded.sm}",
        "padding": "32px"
      },
      "footer-dark": {
        "backgroundColor": "{colors.canvas}",
        "textColor": "{colors.body}",
        "typography": "{typography.body-sm}",
        "padding": "64px 48px"
      },
      "footer-link": {
        "backgroundColor": "transparent",
        "textColor": "{colors.body}",
        "typography": "{typography.body-sm}"
      }
    },
    "guidance": [
      {
        "section": "Components > Top Navigation",
        "content": "**`top-nav-on-dark`** — Default top nav on dark hero pages. Background `{colors.canvas}`, text `{colors.ink}`, height 64px. Layout: Cavallino mark left, primary horizontal menu (Models / F1 / Lifestyle / Owners / Preowned), language picker + utilities right. Menu items render uppercase with 0.65px tracking.\n\n**`top-nav-on-light`** — White-canvas variant for editorial light bands."
      },
      {
        "section": "Components > Buttons",
        "content": "**`button-primary`** — The signature Rosso Corsa CTA. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}` (14px / 700 / 1.4px tracking, uppercase), padding 14px × 32px, height 48px, **rounded `{rounded.none}` (0px — sharp corners)**.\n\n**`button-primary-active`** — Press state. Background `{colors.primary-active}`.\n\n**`button-outline-on-dark`** — Transparent with 1px white border. Background transparent, text `{colors.ink}`, 1px white border, same sharp 0px corners.\n\n**`button-outline-on-light`** — Transparent with 1px ink border on light bands.\n\n**`button-tertiary-text`** — Inline text link, uppercase tracking."
      },
      {
        "section": "Components > Hero Bands",
        "content": "**`hero-band-cinema`** — Full-bleed cinematic photograph. Background `{colors.canvas}` underneath, but the photo fills the viewport. Display headline floats over the bottom of the photo or sits in a tight band beneath, in `{typography.display-mega}` (80px / 500 / -1.6px). One primary CTA + one outline CTA. Zero padding — the photo fills edge-to-edge.\n\n**`hero-band-light`** — White-canvas variant for editorial bands. Background `{colors.canvas-light}`, text `{colors.body-on-light}`, padding 96px."
      },
      {
        "section": "Components > Cards",
        "content": "**`feature-card-photo`** — Image-first card. Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.none}`. Image fills the top edge-to-edge; title + body sit beneath in tight typography.\n\n**`feature-card-light`** — White-canvas variant. Background `{colors.canvas-light}`, text `{colors.body-on-light}`, rounded `{rounded.none}`, padding 32px.\n\n**`driver-card`** — F1 driver portrait card. Background `{colors.canvas-elevated}`, text `{colors.ink}`, rounded `{rounded.none}`, padding 24px. Layout: driver portrait + name + race number + team badge."
      },
      {
        "section": "Components > Editorial Surfaces",
        "content": "**`livery-band`** — A full-width Rosso Corsa accent band. Background `{colors.primary}`, text `{colors.ink}`, type `{typography.display-lg}`, 96px padding. Used as a standout livery callout between dark editorial bands.\n\n**`preowned-listing-card`** — Used in the preowned Ferrari listing grid. Background `{colors.canvas-light}`, text `{colors.body-on-light}`, rounded `{rounded.none}`, padding 24px. Layout: car photo top + model name + year/mileage + price."
      },
      {
        "section": "Components > Spec & Race Surfaces",
        "content": "**`spec-cell`** — Technical spec callout. Transparent background, value in `{typography.number-display}` (80px / 700 / -1.6px white), label below in `{typography.caption-uppercase}`.\n\n**`race-position-cell`** — F1 driver finishing position. Same number-display geometry but text in `{colors.primary}` Rosso Corsa for the brand's racing identity.\n\n**`race-calendar-row`** — Hairline-divided row in the F1 race calendar. Layout: date column left, race name + circuit middle, results column right."
      },
      {
        "section": "Components > Forms & Tags",
        "content": "**`text-input-on-dark`** — Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.sm}` (4px), padding 14px × 16px, height 48px, 1px `{colors.hairline}` border.\n\n**`text-input-on-light`** — White-canvas variant.\n\n**`badge-pill`** — Small uppercase pill. Background `{colors.canvas-elevated}`, text `{colors.ink}`, type `{typography.caption-uppercase}` (11px / 600 / 1.1px tracking, uppercase), rounded `{rounded.full}` (9999px), padding 4px × 12px. The only place pill geometry is used."
      },
      {
        "section": "Components > Newsletter / CTA / Footer",
        "content": "**`newsletter-input-band`** — Newsletter signup band. Background `{colors.canvas-elevated}`, padding 32px, rounded `{rounded.sm}`. Holds an inline email input + primary CTA.\n\n**`cta-band-dark`** — Pre-footer band. Background `{colors.canvas}`, centered display headline in `{typography.display-lg}`, single Rosso Corsa CTA. 96px padding.\n\n**`footer-dark`** — Closing dark footer. Background `{colors.canvas}`, text `{colors.body}`. 5-column link list. 64×48px padding.\n\n**`footer-link`** — Background transparent, text `{colors.body}`, type `{typography.body-sm}`."
      }
    ]
  }
}
```

## Sombras y profundidad

Fuente: `dataset/linear.app.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {},
  "guidance": [
    {
      "section": "Elevation & Depth",
      "content": "| Level | Treatment | Use |\n|---|---|---|\n| 0 (flat) | No shadow, no border | Default for body type, hero text, footer |\n| 1 (charcoal lift) | `{colors.surface-1}` background on canvas, 1px `{colors.hairline}` | Default cards, product panels |\n| 2 (surface-2 lift) | `{colors.surface-2}` background, 1px `{colors.hairline-strong}` | Featured pricing card, hovered cards |\n| 3 (surface-3 lift) | `{colors.surface-3}` background | Sub-nav, dropdown menus |\n| 4 (focus ring) | 2px `{colors.primary-focus}` outline at 50% opacity | Focused input, focused button |\n\nLinear's depth is carried by surface ladder + hairline borders. The brand resists drop shadows on dark almost entirely."
    },
    {
      "section": "Elevation & Depth > Decorative Depth",
      "content": "- **Product UI screenshots** dominate as decorative depth.\n- **No atmospheric gradients, no spotlight cards.**\n- **Subtle white edge highlight** on the top edge of lifted panels — gives the dark surface a faint \"pixel rendered\" feel."
    }
  ]
}
```

## Botones

Fuente: `dataset/apple.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "button-primary": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.body}",
      "rounded": "{rounded.pill}",
      "padding": "11px 22px"
    },
    "button-primary-focus": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.pill}"
    },
    "button-primary-active": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "rounded": "{rounded.pill}"
    },
    "button-secondary-pill": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.primary}",
      "typography": "{typography.body}",
      "rounded": "{rounded.pill}",
      "padding": "11px 22px"
    },
    "button-dark-utility": {
      "backgroundColor": "{colors.ink}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.button-utility}",
      "rounded": "{rounded.sm}",
      "padding": "8px 15px"
    },
    "button-pearl-capsule": {
      "backgroundColor": "{colors.surface-pearl}",
      "textColor": "{colors.ink-muted-80}",
      "typography": "{typography.caption}",
      "rounded": "{rounded.md}",
      "padding": "8px 14px"
    },
    "button-store-hero": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-large}",
      "rounded": "{rounded.pill}",
      "padding": "14px 28px"
    },
    "button-icon-circular": {
      "backgroundColor": "{colors.surface-chip-translucent}",
      "textColor": "{colors.ink}",
      "rounded": "{rounded.full}",
      "size": "44px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "content": "**`button-primary`** — The signature Apple action. Background `{colors.primary}` (Action Blue #0066cc), text `{colors.on-primary}` in `{typography.body}` (Inter 17px / 400), rounded `{rounded.pill}` (full pill — capsule-shaped), padding 11px × 22px. The full-pill radius IS the brand action signal.\n- Active state: `{component.button-primary-active}` — `transform: scale(0.95)` (the system-wide micro-interaction).\n- Focus state: `{component.button-primary-focus}` — 2px solid `{colors.primary-focus}` outline.\n\n**`button-secondary-pill`** — Used as the second CTA when two blue pills appear together (\"Learn more\" / \"Buy\"). Background transparent, text `{colors.primary}`, 1px solid `{colors.primary}` border, rounded `{rounded.pill}`, padding 11px × 22px. Reads as a \"ghost pill.\"\n\n**`button-dark-utility`** — Global nav actions (Sign In, Bag, language selector). Background `{colors.ink}` (#1d1d1f), text `{colors.on-dark}` in `{typography.button-utility}` (14px / 400 / -0.224px tracking), rounded `{rounded.sm}` (8px), padding 8px × 15px. Active state shrinks via `transform: scale(0.95)`.\n\n**`button-pearl-capsule`** — Product-card secondary button. Background `{colors.surface-pearl}` (#fafafc), text `{colors.ink-muted-80}` in `{typography.caption}` (14px), 3px solid `{colors.divider-soft}` border (functions as a soft ring rather than a visible line), rounded `{rounded.md}` (11px), padding 8px × 14px.\n\n**`button-store-hero`** — A larger primary CTA used on store hero surfaces. Same Action Blue + Paper White as `{component.button-primary}`, but with `{typography.button-large}` (18px / 300 — note the rare weight 300) and slightly more padding (14px × 28px). Used sparingly on the store landing.\n\n**`button-icon-Inter`** — Floats over photography. 44 × 44px, background `{colors.surface-chip-translucent}` at ~64% alpha, icon in `{colors.ink}`, rounded `{rounded.full}`. Used for carousel controls, close buttons, and in-image controls (product image thumbnails on the iPhone buy page).\n\n**`text-link`** — Inline body links in `{colors.primary}` (Action Blue). Underlined or non-underlined per context.\n\n**`text-link-on-dark`** — Inline body links on dark tiles in `{colors.primary-on-dark}` (Sky Link Blue #2997ff) — Action Blue would disappear against `{colors.surface-tile-1}`."
    }
  ]
}
```

## Campos y controles

Fuente: `dataset/apple.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "search-input": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body}",
      "rounded": "{rounded.pill}",
      "padding": "12px 20px",
      "height": "44px"
    }
  },
  "guidance": [
    {
      "section": "Components > Inputs & Forms",
      "content": "**`search-input`** — The accessories search input. Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body}` (17px), 1px solid `rgba(0, 0, 0, 0.08)` border, rounded `{rounded.pill}` (full pill — search is also pill-shaped, matching the CTA grammar), padding 12px × 20px, height 44px. Leading icon: search glyph at 14px, muted tint.\n\nError and validation states were not surfaced in the analyzed pages."
    }
  ]
}
```

