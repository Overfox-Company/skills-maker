---
version: "1.0"
name: Composed design system
description: A design system composed in DESIGN.md Studio.
mode: light
sources:
  colors: dataset/supabase.json
  typography: dataset/supabase.json
  layout: dataset/supabase.json
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
colorRoleSources:
  primary: primary
  background: canvas
  card: canvas-soft
  border: hairline
  foreground: ink
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
  --info: "#2563eb"
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
  --input-height: 44px
  --input-bg: "#ffffff"
  --input-color: "#171717"
  --input-border: "#dfdfdf"
  --input-focus-width: 2px
  --input-focus-bg: "#ffffff"
  --input-focus-color: "#3ecf8e"
  --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #3ecf8e, transparent 80%)"
---

# DESIGN.md

This is an implementation skill, not a screenshot specification. It combines product behavior with a visual system: product rules decide what users need to accomplish, while visual rules decide how the experience should look and feel.

## 1. Design Philosophy

Compose one coherent system from the selected references. Preserve the visual vocabulary of each selected brand without treating any source document as a literal template. Prefer clear hierarchy, accessible interaction, useful density, and deliberate restraint over decorative effects.

### Composition sources

- **Color palette:** Supabase
- **Typography:** Supabase
- **Layout and spacing:** Supabase
- **Shape and cards:** Supabase
- **Shadows and depth:** Supabase
- **Buttons:** Supabase
- **Fields and controls:** Supabase

The resolved front matter is the source of truth for implementation. Source excerpts document brand intent, but they do not override decisions assigned to another section.

## 2. Product Objective

No product profile is selected. Define a single user goal for each screen before choosing components or layout.


## 3. Information Architecture

Place the primary user task first, show decision-critical information next, and defer supporting detail until it is requested.


## 4. Layout & Spacing

Use a shared spacing rhythm, stable container behavior, and progressive disclosure. Preserve the selected layout system at every viewport; do not flatten it into generic one-column marketing sections.


```json
{
  "spacing": {
    "xxs": "2px",
    "xs": "4px",
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "24px",
    "xxl": "32px",
    "huge": "64px"
  },
  "gridAndContainers": [
    {
      "section": "Layout > Spacing System",
      "guidance": "- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work). - **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px. - **Section padding**: 64–96px on marketing surfaces. - **Card internal padding**: 32px on feature/pricing cards."
    },
    {
      "section": "Layout > Grid & Container",
      "guidance": "- Marketing pages center in a ~1280px container with no edge-bleed; the brand keeps content inside the box. - Pricing collapses 4-up → 2-up → 1-up at 1024 / 768 breakpoints. - Product UI mockups stack 2-up or render as overlapping panes inside the same container."
    },
    {
      "section": "Layout > Whitespace Philosophy",
      "guidance": "The brand uses generous 64–96px section padding without atmospheric gradients filling the space — the white canvas is the design. The composited product UI mockups break up sections without requiring decoration."
    },
    {
      "section": "Components > Cards & Containers",
      "guidance": "**`card-feature-light`** — feature card on white. - Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border. **`card-pricing`** — standard pricing tier. - Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom. **`card-pricing-featured`** — inverted dark featured tier. - Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure. **`card-feature-dark`** — feature card with deep dark fill. - Background `{colors.canvas-night}`, text `{colors.on-dark}`, pad"
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


## 5. Typography

Typography establishes hierarchy before color or decoration. Use the selected families and styles as named roles, retain readable line lengths, and avoid introducing remote font requests when local assets are available.


```json
{
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
  "guidance": [
    {
      "section": "Typography > Font Family",
      "guidance": "The display and UI tier is **Inter** — a source-specific geometric humanist sans by Lineto. Fallback chain: `'Arimo', Arimo, Arimo`. For maximum brand fidelity when Inter isn't source-specific, use **Inter** (open-source via Google Fonts) at weight 500 for display with `letter-spacing: -1.92px` at 64px. Inter is the closest open-source analogue to Inter's geometric humanist character. Code blocks use **system mono** (`ui-monospace`, with JetBrains Mono / JetBrains Mono / JetBrains Mono fallbacks)."
    },
    {
      "section": "Typography > Hierarchy",
      "guidance": "| Token | Size | Weight | Line Height | Letter Spacing | Use | |---|---|---|---|---|---| | `{typography.display-xxl}` | 64px | 500 | 1.1 | -1.92px | Hero headline | | `{typography.display-xl}` | 48px | 500 | 1.1 | -1.44px | Section opener | | `{typography.display-lg}` | 36px | 500 | 1.15 | -0.72px | Sub-section / pricing tier | | `{typography.display-md}` | 28px | 500 | 1.2 | -0.42px | Card title | | `{typography.heading-lg}` | 22px | 500 | 1.2 | 0 | Compact heading | | `{typography.heading-md}` | 18px | 500 | 1.4 | 0 | Section sub-heading | | `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Marketing body lead | | `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default UI body | | `{typography.button-md}` | 14px | 500 | 1.0 | 0 | Button label | | `{typography.caption}` | 13px | 400 | 1.45"
    },
    {
      "section": "Typography > Principles",
      "guidance": "- **Weight 500 across display.** Mid-weight reads as engineered, not decorative. - **Negative tracking on display.** -1.92px at 64px scaling proportionally down — tightens the rounded humanist letterforms into editorial density. - **Mono for code.** System mono families (JetBrains Mono / JetBrains Mono) — no source-specific mono webfont."
    }
  ]
}
```


## 6. Colors

Use color semantically: primary for the most important action, surfaces to group related information, and borders or contrast to establish separation. Check text contrast in every state, especially on primary actions and dark surfaces.


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
    "accent-tomato": "#ff2201"
  },
  "guidance": [
    {
      "section": "Colors",
      "guidance": "> **Source pages:** home (`/`), `/database`, `/partners/integrations`, `/partners/integrations/powersync`, `/solutions/ai-builders`, `/pricing`."
    },
    {
      "section": "Colors > Brand & Accent",
      "guidance": "- **Emerald** (`{colors.primary}` — `#3ecf8e`): The signature CTA color. Filled-button background, brand wordmark accent, dot indicator. - **Emerald Deep** (`{colors.primary-deep}` — `#24b47e`): Pressed-state lift of the primary. - **Emerald Soft** (`{colors.primary-soft}` — `#4ade80`): Lighter emerald used in chart accents and product UI. - **Accent Purple** (`{colors.accent-purple}` — `#6b01c2`): Rare accent used in integration logos and chart points; never a button. - **Accent Violet** (`{colors.accent-violet}` — `#644fc1`): Secondary accent in the same role as accent purple. - **Accent Yellow** (`{colors.accent-yellow}` — `#ffdb13`): Chart accent / status indicator only. - **Accent Pink "
    },
    {
      "section": "Colors > Surface",
      "guidance": "- **Canvas** (`{colors.canvas}` — `#ffffff`): Default page background. - **Canvas Soft** (`{colors.canvas-soft}` — `#fafafa`): Barely-tinted off-white for alternating section bands. - **Canvas Night** (`{colors.canvas-night}` — `#1c1c1c`): Deep near-black used in code blocks, dashboard mockups, featured pricing tier. - **Canvas Night Soft** (`{colors.canvas-night-soft}` — `#202020`): Slightly lifted dark for nested chrome. - **Hairline** (`{colors.hairline}` — `#dfdfdf`): 1px borders on cards and tables. - **Hairline Strong** (`{colors.hairline-strong}` — `#c7c7c7`): Slightly darker border for emphasis. - **Hairline Cool** (`{colors.hairline-cool}` — `#ededed`) / **Hairline Cool 2** (`#efefe"
    },
    {
      "section": "Colors > Text",
      "guidance": "- **Ink** (`{colors.ink}` — `#171717`): Default body text. Near-black, never pure. - **Ink Secondary** (`{colors.ink-secondary}` — `#212121`): Slightly cooler near-black for body emphasis. - **Ink Mute** (`{colors.ink-mute}` — `#707070`): Secondary text and helper copy. - **Ink Mute 2** (`{colors.ink-mute-2}` — `#9a9a9a`): Tertiary text. - **Ink Faint** (`{colors.ink-faint}` — `#b2b2b2`): Disabled / placeholder text. - **On Primary** (`{colors.on-primary}` — `#171717`): Text on the emerald primary fill — near-black, not white. The button reads as a \"lit\" surface with dark type, not a colored chip. - **On Dark** (`{colors.on-dark}` — `#ffffff`): Text on canvas-night surfaces."
    }
  ]
}
```


## 7. Components

Build reusable, accessible primitives first. Buttons and fields own their geometry and states; cards and containers own their surface treatment, spacing, and elevation. Do not copy unrelated visual choices between these categories.

### Shape and cards


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
  "cards": {
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
    },
    "text-input": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.sm}",
      "padding": "8px 12px"
    },
    "card-feature-light": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.lg}",
      "padding": "32px"
    },
    "card-pricing": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.lg}",
      "padding": "32px"
    },
    "card-pricing-featured": {
      "backgroundColor": "{colors.canvas-night}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.lg}",
      "padding": "32px"
    },
    "card-feature-dark": {
      "backgroundColor": "{colors.canvas-night}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.lg}",
      "padding": "32px"
    },
    "code-block": {
      "backgroundColor": "{colors.canvas-night}",
      "textColor": "{colors.on-dark}",
      "typography": "{typography.code}",
      "rounded": "{rounded.sm}",
      "padding": "16px"
    },
    "pill-tag-green": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.micro}",
      "rounded": "{rounded.full}",
      "padding": "2px 8px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "guidance": "**`button-primary-green`** — the signature CTA. - Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px. - Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`. **`button-secondary-outline`** — outline alternative on white. - Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape. **`button-on-dark`** — used on dark surfaces / code-block CTAs. - Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape. **`button-link`** — text-only inline button. - Transparent backgro"
    },
    {
      "section": "Components > Cards & Containers",
      "guidance": "**`card-feature-light`** — feature card on white. - Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border. **`card-pricing`** — standard pricing tier. - Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom. **`card-pricing-featured`** — inverted dark featured tier. - Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure. **`card-feature-dark`** — feature card with deep dark fill. - Background `{c"
    },
    {
      "section": "Components > Inputs & Forms",
      "guidance": "**`text-input`** — standard form input. - Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border."
    },
    {
      "section": "Components > Navigation",
      "guidance": "**`nav-bar-light`** — top nav across the site. - Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo on the left, primary nav center, \"Sign In\" link + filled `button-primary-green` on the right."
    }
  ]
}
```


### Elevation


```json
{
  "tokens": {},
  "guidance": [
    {
      "section": "Elevation & Depth",
      "guidance": "| Level | Treatment | Use | |---|---|---| | 0 | Flat, 1px hairline | Default cards | | 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` | Subtle card lift | | 2 | `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` | Floating composited UI mockups | | 3 | `box-shadow: 0 16px 48px rgba(0,0,0,0.12)` | Modal overlays, deep elevation |"
    },
    {
      "section": "Elevation & Depth > Decorative Depth",
      "guidance": "The brand's depth is **product UI mockups** rather than gradients. Stacked dashboard / SQL editor / log panes composite together with subtle Level 2 shadows to suggest spatial hierarchy."
    }
  ]
}
```


### Buttons


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
      "guidance": "**`button-primary-green`** — the signature CTA. - Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px. - Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`. **`button-secondary-outline`** — outline alternative on white. - Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape. **`button-on-dark`** — used on dark surfaces / code-block CTAs. - Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape. **`button-link`** — text-only inline button. - Transparent backgro"
    }
  ]
}
```


### Fields and controls


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
      "guidance": "**`text-input`** — standard form input. - Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border."
    }
  ]
}
```


## 8. Navigation

Keep the current location, primary destinations, search, and back paths predictable across views.


## 9. Interaction Patterns

Use direct manipulation where possible, give immediate feedback, and make destructive actions deliberate and reversible.


## 10. Responsive / Mobile

Design the smallest useful composition first, then enhance it as space increases. Keep primary actions reachable, preserve context while reflowing content, and do not hide required information behind hover-only interactions. Respect touch targets, keyboard navigation, visible focus, and reduced-motion preferences.

Use the responsive guidance in the layout reference above as the product-specific breakpoint contract.

## 11. Product-specific UX

Add product-specific rules only when they clarify a user decision, a safety concern, or a repeated workflow.


## 12. Do / Don't

Do: prioritize the user's next decision, preserve context, and explain consequential state changes.

Don't: add visual novelty, confirmation steps, or dense controls that do not advance the task.



## 13. Agent Implementation Rules

- Implement the values in `resolvedCss` and the resolved component definitions before introducing new tokens.
- Keep color and typography global; apply button, field, card, and layout geometry only to their respective primitives.
- Use accessible shadcn/ui-compatible patterns, semantic HTML, keyboard support, visible focus, and `prefers-reduced-motion`.
- Treat the exported palette mode as part of the product UI. The editor sidebar is not part of the exported design.
- Keep components composable. Add a variant only when it represents a repeatable semantic or behavioral difference.
- Validate contrast, loading, empty, error, disabled, and long-content states before considering a screen complete.
- When information conflicts, prioritize the product objective and information architecture over visual novelty.


### Delivery checklist

- Start each screen by identifying the primary user decision. Make the supporting data, state, and primary action visible without requiring a search for them.
- Build semantic structure before styling: headings for groups, labels for controls, lists for repeated content, tables for comparison, and buttons only for actions.
- Keep user context stable. Preserve filters, drafts, selections, tabs, pagination, scroll position, and focus when a user returns from a detail view whenever it is safe to do so.
- Use responsive layouts as re-composition, not simple shrinking. Move secondary regions below the task, simplify dense rows carefully, and retain labels and status information.
- Design all interaction states deliberately. A component that has no loading, error, disabled, empty, or long-content behavior is incomplete.
- Keep confirmation proportional to consequence. Explain scope and result for destructive or high-impact changes, but do not insert routine confirmation dialogs that slow reversible work.
- Give validation feedback close to the relevant field and in plain language. Preserve entered values after errors unless a security constraint requires otherwise.
- Make asynchronous behavior legible. Keep stable layout during loading, show what changed after a mutation, and offer a recovery path when an operation fails.
- Test with keyboard navigation, zoom, reduced motion, narrow viewports, long translations, empty datasets, slow responses, and content that exceeds the expected size.

### Decision precedence

When a visual choice and a user need conflict, protect the user need. When a source reference and a resolved token conflict, use the resolved token. When a compact mobile layout and a desktop structure conflict, preserve the primary task and defer supporting detail. When an interaction is ambiguous, favor a clear label and visible consequence over cleverness.

### Quality bar

A completed interface should let a first-time user identify where they are, what information is current, what can be changed, and what will happen after the primary action. It should also let a returning user resume work without reconstructing context. Every screen should remain coherent when data is missing, when there is more data than expected, and when an operation is unavailable. The system is successful when its rules make ordinary screens easier to build and exceptional states easier to understand.

### Screen construction workflow

1. Define the screen contract in one sentence: who uses it, what they need to know, and the action that moves their work forward. If the sentence contains several unrelated goals, split the experience or establish a clear primary path.
2. List the decision-critical content before choosing a layout. Promote facts that change a decision; defer reference detail, history, and supporting actions until they are requested or become necessary.
3. Choose the smallest set of semantic regions that supports the workflow: page heading, navigation context, primary content, supporting context, and persistent action area where needed. Avoid card nesting merely to create visual variety.
4. Apply the information hierarchy with the selected type scale and spacing tokens. Use size, position, and grouping to distinguish page title, section heading, item label, value, metadata, and help text.
5. Select reusable components before composing custom controls. A custom element must have a clear semantic role, a complete state model, and a repeatable reason to exist.
6. Implement the happy path and then test interruption: invalid data, no data, loading, network failure, loss of permission, long labels, and a changed selection. Keep the user's orientation and recovery options visible.
7. Recompose for mobile after the information model is stable. Preserve the same priority order, not necessarily the same visual arrangement. Move secondary context below the task and expose it with an explicit control when space is limited.
8. Review the final screen at realistic density. Test the shortest and longest labels, zero and many items, locale expansion, magnification, and browser zoom. A layout that works only with sample copy is not a reusable system.

### Component contracts

A button communicates an action, not navigation disguised as an action. Give it a specific verb, show its busy state without changing its position, and prevent duplicate submission while a request is in flight. Use a link for navigation and make external destinations clear when the context requires it.

A field needs a persistent label, an expected format when ambiguity is likely, an accessible description for constraints, and an error message tied to the field. Placeholder text is an example, not a label. Group related inputs under a visible heading, and do not clear user-entered values after a recoverable validation failure.

A menu exposes a compact set of contextual choices. Keep the trigger label or icon understandable, support keyboard movement and escape, return focus to the trigger, and avoid putting destructive actions beside routine actions without separation. Use a dialog only when the user must make a focused decision before continuing.

A card groups a coherent unit of information or action. It is not a default wrapper for every paragraph. If a region has no independent task, state, or scan boundary, prefer normal page structure and spacing. Keep whole-card clicks, internal links, and nested buttons from competing for the same interaction.

A table supports comparison and operational scanning. Keep headers visible where practical, align numbers for comparison, expose sorting and filtering state, provide an alternative presentation at narrow widths, and retain the row identity when opening details or returning to the list.

### State and feedback rules

Use optimistic updates only when the operation is safe, reversible, and the result is highly predictable. Otherwise, show pending state and confirm the completed result. Success messages should state what changed and disappear only after users have enough time to read them. Errors should state what failed, whether user data was preserved, and the next recovery action.

For empty states, distinguish between first use, no matching results, no permission, temporary unavailability, and completed cleanup. Each condition needs different copy and a different next action. Do not use a generic illustration where a concise explanation and an actionable control would be more useful.

For destructive changes, make consequences proportionate and concrete. Name the affected record or collection, describe the irreversible portion, and show dependent effects when known. Favor undo for low-risk reversible actions; reserve confirmation for changes that cannot be reasonably recovered.

### Accessibility baseline

All functionality must be available with keyboard alone. Focus must be visible against every supported surface and travel in a predictable order. Associate labels, instructions, errors, and status updates programmatically with their controls. Use native controls when possible; when a custom control is necessary, reproduce its expected keyboard behavior and semantic role.

Do not rely on hover, drag, color, sound, or motion as the sole carrier of information. Respect reduced-motion settings by removing nonessential movement, and avoid motion that obscures state changes. Verify text contrast, non-text contrast, touch target size, zoom behavior, and readable focus outlines across the selected palette mode.

Treat these rules as a quality floor. Product-specific requirements may add detail, but they must not weaken clarity, accessibility, recoverability, or the consistency of the selected design system.

## Resolved CSS

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
  --info: #2563eb;
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
  --input-height: 44px;
  --input-bg: #ffffff;
  --input-color: #171717;
  --input-border: #dfdfdf;
  --input-focus-width: 2px;
  --input-focus-bg: #ffffff;
  --input-focus-color: #3ecf8e;
  --input-focus-shadow: 0 0 0 3px color-mix(in srgb, #3ecf8e, transparent 80%);
}
```

## Local Font Assets

Copy these font family folders from `public/fonts` with their licenses. Load their local stylesheets and do not add runtime Google Fonts requests. Font files are not embedded in this Markdown.

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

