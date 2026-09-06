---
version: "1.0"
name: Mi sistema de diseño
description: Sistema compuesto en DESIGN.md Studio.
mode: light
sources:
  colors: dataset/supabase.json
  typography: dataset/supabase.json
  layout: dataset/supabase.json
  spacing: dataset/supabase.json
  shape: dataset/supabase.json
  elevation: dataset/supabase.json
  buttons: dataset/supabase.json
  inputs: dataset/supabase.json
colors:
  primary: "#3ecf8e"
  primary-deep: "#24b47e"
  primary-soft: "#4ade80"
  ink: "#171717"
  ink-secondary: "#212121"
  ink-mute: "#707070"
  ink-mute-2: "#9a9a9a"
  ink-faint: "#b2b2b2"
  on-primary: "#171717"
  on-dark: "#ffffff"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  canvas-night: "#1c1c1c"
  canvas-night-soft: "#202020"
  hairline: "#dfdfdf"
  hairline-strong: "#c7c7c7"
  hairline-cool: "#ededed"
  hairline-cool-2: "#efefef"
  hairline-cool-3: "#d4d4d4"
  accent-purple: "#6b01c2"
  accent-violet: "#644fc1"
  accent-purple-soft: "#eddbf9"
  accent-yellow: "#ffdb13"
  accent-tomato: "#ff2201"
  accent-pink: "#c7007e"
  accent-indigo: "#054cff"
  accent-crimson: "#e2005a"
  surface: "#fafafa"
typography:
  display-xxl:
    fontFamily: Inter, sans-serif
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.92px
  display-xl:
    fontFamily: Inter, sans-serif
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: Inter, sans-serif
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.72px
  display-md:
    fontFamily: Inter, sans-serif
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.42px
  heading-lg:
    fontFamily: Inter, sans-serif
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: Inter, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  micro:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  code:
    fontFamily: JetBrains Mono, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px
components:
  button:
    borderRadius: 6px
    padding: 8px 16px
    fontWeight: 500
    letterSpacing: 0px
  input:
    borderRadius: 6px
    padding: 8px 12px
  card:
    borderRadius: 12px
    padding: 24px
    boxShadow: 0 1px 3px rgba(0,0,0,0.06)
resolvedCss:
  --background: "#ffffff"
  --card: "#fafafa"
  --popover: "#fafafa"
  --foreground: "#171717"
  --primary: "#3ecf8e"
  --primary-foreground: "#171717"
  --border: "#dfdfdf"
  --muted-foreground: "#707070"
  --muted: "color-mix(in srgb, #fafafa, #171717 7%)"
  --secondary: "#fafafa"
  --secondary-foreground: "#171717"
  --accent: "color-mix(in srgb, #fafafa, #171717 12%)"
  --accent-foreground: "#171717"
  --success: "#4ade80"
  --warning: "#ffdb13"
  --destructive: "#ff2201"
  --info: "#3ecf8e"
  --radius: 8px
  --card-radius: 12px
  --button-radius: 6px
  --input-radius: 6px
  --preview-font: Inter, sans-serif
  --heading-font: Inter, sans-serif
  --mono-font: JetBrains Mono, monospace
  --body-size: 16px
  --body-weight: 400
  --body-leading: 1.5
  --heading-size: 36px
  --heading-weight: 500
  --heading-tracking: -0.72px
  --heading-leading: 1.15
  --button-weight: 500
  --button-tracking: 0px
  --button-padding: 8px 16px
  --input-padding: 8px 12px
  --gallery-gap: 16px
  --sample-padding: 24px
  --preview-columns: 2
  --sample-shadow: 0 1px 3px rgba(0,0,0,0.06)
---

# Mi sistema de diseño

## Composición

- **Paleta de colores:** Supabase
- **Tipografía:** Supabase
- **Distribución de contenido:** Supabase
- **Espaciado:** Supabase
- **Bordes y formas:** Supabase
- **Sombras y profundidad:** Supabase
- **Botones:** Supabase
- **Campos y controles:** Supabase

## Reglas de implementación

La fuente de verdad es `resolvedCss` y los componentes resueltos del front matter. Las referencias originales de cada sección documentan la marca, pero NO deben sobreescribir decisiones de otra sección.

- Colores y tipografía se heredan globalmente; botones y campos aportan geometría, padding y estados.
- Bordes y formas controla tarjetas y contenedores; los radios de botones y campos pertenecen a sus propios selectores.
- Distribución controla columnas; Espaciado controla separaciones y relleno.
- Sombras controla la elevación de tarjetas y contenedores.
- Los componentes, menús, diálogos y formularios respetan el modo nativo de la paleta elegida. El sidebar oscuro pertenece al editor, no al diseño exportado.
- Usar componentes shadcn/ui accesibles. Respetar navegación por teclado, foco visible y prefers-reduced-motion.

### Adaptaciones explícitas de la vista previa

- La vista previa conserva el modo nativo de la paleta: fondo, superficie, texto, bordes y colores semánticos proceden de la marca seleccionada. El sidebar del editor permanece oscuro y no forma parte del sistema exportado. Solo el texto de los botones primarios se ajusta si necesita contraste mínimo 4.5:1.
- Galería responsive: máximo 3 columnas, 2 bajo 740 px de contenedor y 1 bajo 620 px. La aplicación mantiene una grilla exterior 4/8 en escritorio.
- Escala de muestra: títulos 24–44 px, texto 14–18 px, separación 8–32 px, relleno de tarjetas 12–32 px. Los tokens originales se conservan como referencia.

## CSS de la vista previa

```css
:root {
  --background: #ffffff;
  --card: #fafafa;
  --popover: #fafafa;
  --foreground: #171717;
  --primary: #3ecf8e;
  --primary-foreground: #171717;
  --border: #dfdfdf;
  --muted-foreground: #707070;
  --muted: color-mix(in srgb, #fafafa, #171717 7%);
  --secondary: #fafafa;
  --secondary-foreground: #171717;
  --accent: color-mix(in srgb, #fafafa, #171717 12%);
  --accent-foreground: #171717;
  --success: #4ade80;
  --warning: #ffdb13;
  --destructive: #ff2201;
  --info: #3ecf8e;
  --radius: 8px;
  --card-radius: 12px;
  --button-radius: 6px;
  --input-radius: 6px;
  --preview-font: Inter, sans-serif;
  --heading-font: Inter, sans-serif;
  --mono-font: JetBrains Mono, monospace;
  --body-size: 16px;
  --body-weight: 400;
  --body-leading: 1.5;
  --heading-size: 36px;
  --heading-weight: 500;
  --heading-tracking: -0.72px;
  --heading-leading: 1.15;
  --button-weight: 500;
  --button-tracking: 0px;
  --button-padding: 8px 16px;
  --input-padding: 8px 12px;
  --gallery-gap: 16px;
  --sample-padding: 24px;
  --preview-columns: 2;
  --sample-shadow: 0 1px 3px rgba(0,0,0,0.06);
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

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "primary": "#3ecf8e",
    "primary-deep": "#24b47e",
    "primary-soft": "#4ade80",
    "ink": "#171717",
    "ink-secondary": "#212121",
    "ink-mute": "#707070",
    "ink-mute-2": "#9a9a9a",
    "ink-faint": "#b2b2b2",
    "on-primary": "#171717",
    "on-dark": "#ffffff",
    "canvas": "#ffffff",
    "canvas-soft": "#fafafa",
    "canvas-night": "#1c1c1c",
    "canvas-night-soft": "#202020",
    "hairline": "#dfdfdf",
    "hairline-strong": "#c7c7c7",
    "hairline-cool": "#ededed",
    "hairline-cool-2": "#efefef",
    "hairline-cool-3": "#d4d4d4",
    "accent-purple": "#6b01c2",
    "accent-violet": "#644fc1",
    "accent-purple-soft": "#eddbf9",
    "accent-yellow": "#ffdb13",
    "accent-tomato": "#ff2201",
    "accent-pink": "#c7007e",
    "accent-indigo": "#054cff",
    "accent-crimson": "#e2005a"
  },
  "guidance": [
    {
      "section": "Colors",
      "content": "> **Source pages:** home (`/`), `/database`, `/partners/integrations`, `/partners/integrations/powersync`, `/solutions/ai-builders`, `/pricing`."
    },
    {
      "section": "Colors > Brand & Accent",
      "content": "- **Emerald** (`{colors.primary}` — `#3ecf8e`): The signature CTA color. Filled-button background, brand wordmark accent, dot indicator.\n- **Emerald Deep** (`{colors.primary-deep}` — `#24b47e`): Pressed-state lift of the primary.\n- **Emerald Soft** (`{colors.primary-soft}` — `#4ade80`): Lighter emerald used in chart accents and product UI.\n- **Accent Purple** (`{colors.accent-purple}` — `#6b01c2`): Rare accent used in integration logos and chart points; never a button.\n- **Accent Violet** (`{colors.accent-violet}` — `#644fc1`): Secondary accent in the same role as accent purple.\n- **Accent Yellow** (`{colors.accent-yellow}` — `#ffdb13`): Chart accent / status indicator only.\n- **Accent Pink / Crimson / Indigo / Tomato**: Reserved for integration logos and rare chart highlights, never as system colors."
    },
    {
      "section": "Colors > Surface",
      "content": "- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background.\n- **Canvas Soft** (`{colors.canvas-soft}` — `#fafafa`): Barely-tinted off-white for alternating section bands.\n- **Canvas Night** (`{colors.canvas-night}` — `#1c1c1c`): Deep near-black used in code blocks, dashboard mockups, featured pricing tier.\n- **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#202020`): Slightly lifted dark for nested chrome.\n- **Hairline** (`{colors.hairline}` — `#dfdfdf`): 1px borders on cards and tables.\n- **Hairline Strong** (`{colors.hairline-strong}` — `#c7c7c7`): Slightly darker border for emphasis.\n- **Hairline Cool** (`{colors.hairline-cool}` — `#ededed`) / **Hairline Cool 2** (`#efefef`) / **Hairline Cool 3** (`#d4d4d4`): The brand's grey ladder for fine chrome work."
    },
    {
      "section": "Colors > Text",
      "content": "- **Ink** (`{colors.ink}` — `#171717`): Default body text. Near-black, never pure.\n- **Ink Secondary** (`{colors.ink-secondary}` — `#212121`): Slightly cooler near-black for body emphasis.\n- **Ink Mute** (`{colors.ink-mute}` — `#707070`): Secondary text and helper copy.\n- **Ink Mute 2** (`{colors.ink-mute-2}` — `#9a9a9a`): Tertiary text.\n- **Ink Faint** (`{colors.ink-faint}` — `#b2b2b2`): Disabled / placeholder text.\n- **On Primary** (`{colors.on-primary}` — `#171717`): Text on the emerald primary fill — near-black, not white. The button reads as a \"lit\" surface with dark type, not a colored chip.\n- **On Dark** (`{colors.on-dark}` — `#ffffff`): Text on canvas-night surfaces."
    }
  ]
}
```

## Tipografía

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "publicFontsOnly": true,
  "families": [
    {
      "family": "Inter",
      "provider": "Google Fonts",
      "license": "Open-source font",
      "url": "https://fonts.google.com/specimen/Inter"
    },
    {
      "family": "JetBrains Mono",
      "provider": "Google Fonts",
      "license": "Open-source font",
      "url": "https://fonts.google.com/specimen/JetBrains+Mono"
    }
  ],
  "styles": {
    "display-xxl": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "64px",
      "fontWeight": 500,
      "lineHeight": 1.1,
      "letterSpacing": "-1.92px"
    },
    "display-xl": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "48px",
      "fontWeight": 500,
      "lineHeight": 1.1,
      "letterSpacing": "-1.44px"
    },
    "display-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "36px",
      "fontWeight": 500,
      "lineHeight": 1.15,
      "letterSpacing": "-0.72px"
    },
    "display-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "28px",
      "fontWeight": 500,
      "lineHeight": 1.2,
      "letterSpacing": "-0.42px"
    },
    "heading-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "22px",
      "fontWeight": 500,
      "lineHeight": 1.2,
      "letterSpacing": 0
    },
    "heading-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "18px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "body-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": 1.55,
      "letterSpacing": 0
    },
    "body-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    },
    "button-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1,
      "letterSpacing": 0
    },
    "caption": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": 1.45,
      "letterSpacing": 0
    },
    "micro": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.45,
      "letterSpacing": 0
    },
    "code": {
      "fontFamily": "JetBrains Mono, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    }
  },
  "substitutionAdjustment": "Use Inter 500 with -1.92px tracking for display.",
  "guidance": [
    {
      "section": "Typography > Font Family",
      "content": "The display and UI tier is **Inter** — a source-specific geometric humanist sans by Lineto. Fallback chain: `'Arimo', Arimo, Arimo`.\n\nFor maximum brand fidelity when Inter isn't source-specific, use **Inter** (open-source via Google Fonts) at weight 500 for display with `letter-spacing: -1.92px` at 64px. Inter is the closest open-source analogue to Inter's geometric humanist character.\n\nCode blocks use **system mono** (`ui-monospace`, with JetBrains Mono / JetBrains Mono / JetBrains Mono fallbacks)."
    },
    {
      "section": "Typography > Hierarchy",
      "content": "| Token | Size | Weight | Line Height | Letter Spacing | Use |\n|---|---|---|---|---|---|\n| `{typography.display-xxl}` | 64px | 500 | 1.1 | -1.92px | Hero headline |\n| `{typography.display-xl}` | 48px | 500 | 1.1 | -1.44px | Section opener |\n| `{typography.display-lg}` | 36px | 500 | 1.15 | -0.72px | Sub-section / pricing tier |\n| `{typography.display-md}` | 28px | 500 | 1.2 | -0.42px | Card title |\n| `{typography.heading-lg}` | 22px | 500 | 1.2 | 0 | Compact heading |\n| `{typography.heading-md}` | 18px | 500 | 1.4 | 0 | Section sub-heading |\n| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Marketing body lead |\n| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default UI body |\n| `{typography.button-md}` | 14px | 500 | 1.0 | 0 | Button label |\n| `{typography.caption}` | 13px | 400 | 1.45 | 0 | Helper, footnote |\n| `{typography.micro}` | 12px | 400 | 1.45 | 0 | Pill label, fine print |\n| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code block content |"
    },
    {
      "section": "Typography > Principles",
      "content": "- **Weight 500 across display.** Mid-weight reads as engineered, not decorative.\n- **Negative tracking on display.** -1.92px at 64px scaling proportionally down — tightens the rounded humanist letterforms into editorial density.\n- **Mono for code.** System mono families (JetBrains Mono / JetBrains Mono) — no source-specific mono webfont."
    }
  ]
}
```

## Distribución de contenido

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "gridAndContainers": [
    {
      "section": "Layout > Grid & Container",
      "content": "- Marketing pages center in a ~1280px container with no edge-bleed; the brand keeps content inside the box.\n- Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints.\n- Product UI mockups stack 2-up or render as overlapping panes inside the same container."
    },
    {
      "section": "Layout > Whitespace Philosophy",
      "content": "The brand uses generous 64–96px section padding without atmospheric gradients filling the space — the white canvas is the design. The composited product UI mockups break up sections without requiring decoration."
    },
    {
      "section": "Components > Cards & Containers",
      "content": "**`card-feature-light`** — feature card on white.\n- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border.\n\n**`card-pricing`** — standard pricing tier.\n- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom.\n\n**`card-pricing-featured`** — inverted dark featured tier.\n- Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure.\n\n**`card-feature-dark`** — feature card with deep dark fill.\n- Background `{colors.canvas-night}`, text `{colors.on-dark}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used for code-heavy feature explanations.\n\n**`code-block`** — code snippet container.\n- Background `{colors.canvas-night}`, text `{colors.on-dark}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.sm}` 6px."
    }
  ],
  "responsive": {
    "breakpoints": [
      "1440px",
      "1024px",
      "768px",
      "1023px"
    ],
    "guidance": [
      {
        "section": "Responsive Behavior > Breakpoints",
        "content": "| Name | Width | Key Changes |\n|---|---|---|\n| Wide | ≥ 1440px | Full container width; product mockups at full scale |\n| Desktop | 1024–1440px | Default content max-width; pricing 4-up |\n| Tablet | 768–1023px | Pricing 2-up; mockups simplify to single panel |\n| Mobile | < 768px | Pricing 1-up; hamburger nav; display drops 64 → 36px |"
      },
      {
        "section": "Responsive Behavior > Touch Targets",
        "content": "- Buttons hit ≥ 36×36px on mobile; vertical padding scales up to maintain WCAG AA minimum.\n- Form fields stay at 36px minimum height."
      },
      {
        "section": "Responsive Behavior > Collapsing Strategy",
        "content": "- Display tiers stair-step 64 → 48 → 36 → 28 → 22px.\n- Product UI mockups simplify to a single primary panel on mobile.\n- Pricing tiers stair-step 4-up → 2-up → 1-up; dark featured tier always distinguished."
      },
      {
        "section": "Responsive Behavior > Image Behavior",
        "content": "Product UI mockups use `srcset` with desktop / mobile crops; mobile crops focus on the most actionable inner panel."
      }
    ]
  }
}
```

## Espaciado

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "xxs": "2px",
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px",
    "xxl": "32px",
    "huge": "64px"
  },
  "values": [
    "8px",
    "2px",
    "4px",
    "12px",
    "16px",
    "24px",
    "32px",
    "64px",
    "96px"
  ],
  "guidance": [
    {
      "section": "Layout > Spacing System",
      "content": "- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).\n- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.\n- **Section padding**: 64–96px on marketing surfaces.\n- **Card internal padding**: 32px on feature/pricing cards."
    }
  ]
}
```

## Bordes y formas

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "radii": {
    "xs": "4px",
    "sm": "6px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "full": "9999px"
  },
  "radiusValues": [
    "4px",
    "6px",
    "8px",
    "12px",
    "16px",
    "9999px"
  ],
  "guidance": [
    {
      "section": "Shapes > Border Radius Scale",
      "content": "| Token | Value | Use |\n|---|---|---|\n| `{rounded.xs}` | 4px | Form inputs, hairline tags |\n| `{rounded.sm}` | 6px | Buttons (the brand's signature button radius), code blocks |\n| `{rounded.md}` | 8px | Compact cards, alerts |\n| `{rounded.lg}` | 12px | Pricing cards, feature cards, product mockups |\n| `{rounded.xl}` | 16px | Modal dialogs, large container chrome |\n| `{rounded.full}` | 9999px | Pill tags, avatars |"
    },
    {
      "section": "Shapes > Photography Geometry",
      "content": "The brand uses minimal photography. Customer logo strips display wordmarks at uniform height (~24–32px) in greyscale; case-study cards (rare) use 4:3 photos inset in `{rounded.lg}` containers."
    }
  ]
}
```

## Sombras y profundidad

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {},
  "guidance": [
    {
      "section": "Elevation & Depth",
      "content": "| Level | Treatment | Use |\n|---|---|---|\n| 0 | Flat, 1px hairline | Default cards |\n| 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` | Subtle card lift |\n| 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` | Floating composited UI mockups |\n| 3 | `box-shadow: 0 16px 48px rgba(0,0,0,0.12)` | Modal overlays, deep elevation |"
    },
    {
      "section": "Elevation & Depth > Decorative Depth",
      "content": "The brand's depth is **product UI mockups** rather than gradients. Stacked dashboard / SQL editor / log panes composite together with subtle Level 2 shadows to suggest spatial hierarchy."
    }
  ]
}
```

## Botones

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "button-primary-green": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 16px"
    },
    "button-primary-green-pressed": {
      "backgroundColor": "{colors.primary-deep}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 16px"
    },
    "button-secondary-outline": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 16px"
    },
    "button-on-dark": {
      "backgroundColor": "{colors.canvas-night}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 16px"
    },
    "button-link": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.xs}",
      "padding": "0px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "content": "**`button-primary-green`** — the signature CTA.\n- Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px.\n- Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`.\n\n**`button-secondary-outline`** — outline alternative on white.\n- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape.\n\n**`button-on-dark`** — used on dark surfaces / code-block CTAs.\n- Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape.\n\n**`button-link`** — text-only inline button.\n- Transparent background, text `{colors.ink}` rendered in `{typography.button-md}`, no padding, with a subtle underline on hover."
    }
  ]
}
```

## Campos y controles

Fuente: `dataset/supabase.json`. Referencia original subordinada a las reglas de composición anteriores.

```json
{
  "tokens": {
    "text-input": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 12px"
    }
  },
  "guidance": [
    {
      "section": "Components > Inputs & Forms",
      "content": "**`text-input`** — standard form input.\n- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border."
    }
  ]
}
```

