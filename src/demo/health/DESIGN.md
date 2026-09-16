---
version: "1.0"
name: Composed design system
description: A design system composed in DESIGN.md Studio.
mode: dark
productExperience:
  id: health-fitness
  label: Health / Fitness
  description: Tracking, progress, goals, and sensitive data.
  primaryObjective: Help people log activity and understand progress toward personal goals.
  uxPriorities:
    - Current state
    - Activity tracking
    - Goals
  informationHierarchy:
    - Current state or activity
    - Primary metric with context
    - Goal progress
    - Relevant trend
  navigationPrinciples:
    - Separate logging, current activity, progress, and history.
    - Provide fast access to the most frequent activity or log.
    - Keep period, unit, and source visible when comparing metrics.
  interactionPrinciples:
    - Minimize input needed for frequent logs.
    - Allow people to correct data and understand its effect on trends and goals.
    - Distinguish measurement, goal, and recommendation before offering actions.
  contentPrinciples:
    - Present primary metrics with understandable units and ranges.
    - Prioritize useful trends over large volumes of statistics.
    - Avoid diagnostic language when information is not clinical advice.
  primaryActions:
    - Log activity or metric
    - Start or finish activity
    - Review progress
    - Adjust goal
  discoveryPatterns:
    - Daily or weekly summary
    - Recent activities
    - Progress by goal
    - Meaningful trends
  trustAndSafetyConsiderations:
    - Treat health, location, and biometrics as sensitive information.
    - Explain the source, accuracy, and limitations of measurements.
    - Clearly distinguish general wellbeing, recommendation, and professional advice.
  commonPatterns:
    - Quick log
    - Status summary
    - Goal progress
    - Time-based history
  patternsToAvoid:
    - Overloading people with uninterpreted metrics.
    - Presenting estimates as exact measurements.
    - Using pressure or guilt to drive activity.
sources:
  colors: dataset/ferrari.json
  typography: dataset/binance.json
  layout: dataset/spotify.json
  shape: dataset/spotify.json
  elevation: dataset/supabase.json
  buttons: dataset/stripe.json
  inputs: dataset/shopify.json
colors:
  primary: "#da291c"
  primary-active: "#b01e0a"
  primary-hover: "#9d2211"
  ink: "#ffffff"
  body: "#969696"
  body-strong: "#ffffff"
  body-on-light: "#181818"
  muted: "#666666"
  muted-soft: "#8f8f8f"
  hairline: "#303030"
  hairline-on-light: "#d2d2d2"
  hairline-soft: "#ebebeb"
  canvas: "#181818"
  canvas-elevated: "#303030"
  canvas-light: "#ffffff"
  surface-card: "#303030"
  surface-soft-light: "#f7f7f7"
  surface-strong-light: "#ebebeb"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-light: "#181818"
  accent-yellow-hypersail: "#fff200"
  accent-yellow: "#f6e500"
  semantic-info: "#4c98b9"
  semantic-success: "#03904a"
  semantic-warning: "#f13a2c"
  surface: "#303030"
colorRoleSources:
  primary: primary
  background: canvas
  card: surface-card
  border: hairline
  foreground: ink
typography:
  hero-display:
    fontFamily: Inter, sans-serif
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: Inter, sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-md:
    fontFamily: Inter, sans-serif
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.3px
  display-sm:
    fontFamily: Inter, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  title-lg:
    fontFamily: Inter, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: Inter, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  number-display:
    fontFamily: Inter, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.3px
  number-md:
    fontFamily: Inter, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  number-sm:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Inter, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: Inter, sans-serif
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: Inter, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
rounded: {}
spacing: {}
components:
  button:
    borderRadius: 9999px
    padding: 8px 16px
    fontWeight: 400
    letterSpacing: 0px
  input:
    borderRadius: 8px
    padding: 10px 12px
  card:
    borderRadius: 8px
    padding: 12px
    boxShadow: 0 1px 3px rgba(0,0,0,0.06)
resolvedCss:
  --background: "#181818"
  --card: "#303030"
  --popover: "#303030"
  --foreground: "#ffffff"
  --primary: "#da291c"
  --primary-foreground: "#ffffff"
  --border: "#303030"
  --muted-foreground: "#666666"
  --muted: "color-mix(in srgb, #303030, #ffffff 7%)"
  --secondary: "color-mix(in srgb, #303030, #ffffff 7%)"
  --secondary-foreground: "#ffffff"
  --accent: "color-mix(in srgb, #303030, #ffffff 12%)"
  --accent-foreground: "#ffffff"
  --success: "#03904a"
  --warning: "#f13a2c"
  --destructive: "#dc2626"
  --info: "#4c98b9"
  --radius: 8px
  --card-radius: 8px
  --button-radius: 9999px
  --input-radius: 8px
  --preview-font: Inter, sans-serif
  --heading-font: Inter, sans-serif
  --mono-font: "'JetBrains Mono', monospace"
  --body-size: 14px
  --body-weight: 400
  --body-leading: 1.5
  --heading-size: 44px
  --heading-weight: 700
  --heading-tracking: -0.5px
  --heading-leading: 1.1
  --button-weight: 400
  --button-tracking: 0px
  --button-padding: 8px 16px
  --input-padding: 10px 12px
  --gallery-gap: 8px
  --sample-padding: 12px
  --preview-columns: 2
  --sample-shadow: 0 1px 3px rgba(0,0,0,0.06)
  --input-height: 44px
  --input-bg: "#181818"
  --input-color: "#ffffff"
  --input-border: "#303030"
  --input-focus-width: 2px
  --input-focus-bg: "#181818"
  --input-focus-color: "#da291c"
  --input-focus-shadow: "0 0 0 3px color-mix(in srgb, #da291c, transparent 80%)"
---

# DESIGN.md

This is an implementation skill, not a screenshot specification. It combines product behavior with a visual system: product rules decide what users need to accomplish, while visual rules decide how the experience should look and feel.

## 1. Design Philosophy

Compose one coherent system from the selected references. Preserve the visual vocabulary of each selected brand without treating any source document as a literal template. Prefer clear hierarchy, accessible interaction, useful density, and deliberate restraint over decorative effects.

### Composition sources

- **Color palette:** Ferrari
- **Typography:** Binance
- **Layout and spacing:** Spotify
- **Shape and cards:** Spotify
- **Shadows and depth:** Supabase
- **Buttons:** Stripe
- **Fields and controls:** Shopify

The resolved front matter is the source of truth for implementation. Source excerpts document brand intent, but they do not override decisions assigned to another section.

## 2. Product Objective

**Health / Fitness** — Tracking, progress, goals, and sensitive data.

Help people log activity and understand progress toward personal goals.

### UX priorities

- Current state
- Activity tracking
- Goals

### Primary actions

- Log activity or metric
- Start or finish activity
- Review progress
- Adjust goal


## 3. Information Architecture

Order information by decision value:

1. Current state or activity
2. Primary metric with context
3. Goal progress
4. Relevant trend

### Content principles

- Present primary metrics with understandable units and ranges.
- Prioritize useful trends over large volumes of statistics.
- Avoid diagnostic language when information is not clinical advice.


## 4. Layout & Spacing

Use a shared spacing rhythm, stable container behavior, and progressive disclosure. Preserve the selected layout system at every viewport; do not flatten it into generic one-column marketing sections.


```json
{
  "spacing": {},
  "gridAndContainers": [
    {
      "section": "Design System Inspired by Spotify > 4. Component Stylings > Cards & Containers",
      "guidance": "- Background: `#181818` or `#1f1f1f` - Radius: 6px–8px - No visible borders on most cards - Hover: slight background lightening - Shadow: `rgba(0,0,0,0.3) 0px 8px 8px` on elevated"
    },
    {
      "section": "Design System Inspired by Spotify > 5. Layout Principles > Spacing System",
      "guidance": "- Base unit: 8px - Scale: 1px, 2px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 14px, 15px, 16px, 20px"
    },
    {
      "section": "Design System Inspired by Spotify > 5. Layout Principles > Grid & Container",
      "guidance": "- Sidebar (fixed) + main content area - Grid-based album/playlist cards - Full-width now-playing bar at bottom - Responsive content area fills remaining space"
    },
    {
      "section": "Design System Inspired by Spotify > 5. Layout Principles > Whitespace Philosophy",
      "guidance": "- **Dark compression**: Spotify packs content densely — playlist grids, track lists, and navigation are all tightly spaced. The dark background provides visual rest between elements without needing large gaps. - **Content density over breathing room**: This is an app, not a marketing site. Every pixel serves the listening experience."
    },
    {
      "section": "Design System Inspired by Spotify > 5. Layout Principles > Border Radius Scale",
      "guidance": "- Minimal (2px): Badges, explicit tags - Subtle (4px): Inputs, small elements - Standard (6px): Album art containers, cards - Comfortable (8px): Sections, dialogs - Medium (10px–20px): Panels, overlay elements - Large (100px): Large pill buttons - Pill (500px): Primary buttons, search input - Full Pill (9999px): Navigation pills, search - Circle (50%): Play buttons, avatars, icons"
    }
  ],
  "responsive": {
    "breakpoints": [
      "425px",
      "576px",
      "768px",
      "896px",
      "1024px",
      "1280px"
    ],
    "guidance": [
      {
        "section": "Design System Inspired by Spotify > 8. Responsive Behavior > Breakpoints",
        "content": "| Name | Width | Key Changes |\n|------|-------|-------------|\n| Mobile Small | <425px | Compact mobile layout |\n| Mobile | 425–576px | Standard mobile |\n| Tablet | 576–768px | 2-column grid |\n| Tablet Large | 768–896px | Expanded layout |\n| Desktop Small | 896–1024px | Sidebar visible |\n| Desktop | 1024–1280px | Full desktop layout |\n| Large Desktop | >1280px | Expanded grid |"
      },
      {
        "section": "Design System Inspired by Spotify > 8. Responsive Behavior > Collapsing Strategy",
        "content": "- Sidebar: full → collapsed → hidden\n- Album grid: 5 columns → 3 → 2 → 1\n- Now-playing bar: maintained at all sizes\n- Search: pill input maintained, width adjusts\n- Navigation: sidebar → bottom bar on mobile"
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
    }
  ],
  "styles": {
    "hero-display": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "64px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-1px"
    },
    "display-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-0.5px"
    },
    "display-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "40px",
      "fontWeight": 600,
      "lineHeight": 1.15,
      "letterSpacing": "-0.3px"
    },
    "display-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "32px",
      "fontWeight": 600,
      "lineHeight": 1.2,
      "letterSpacing": 0
    },
    "title-lg": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": 0
    },
    "title-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.35,
      "letterSpacing": 0
    },
    "title-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "number-display": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "40px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "-0.3px"
    },
    "number-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "number-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "body-md": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    },
    "body-sm": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "13px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": 0
    },
    "caption": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": 0
    },
    "button": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 600,
      "lineHeight": 1,
      "letterSpacing": 0
    },
    "nav-link": {
      "fontFamily": "Inter, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": 0
    }
  },
  "guidance": [
    {
      "section": "Typography > Font Family",
      "guidance": "The system runs **Inter** for display and body, and **Inter** for numerical / financial data. Both are source-specific Binance custom typefaces. The fallback stack walks `-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif`. The split is functional, not decorative: - Inter → editorial type (headlines, paragraphs, button labels, nav) - Inter → tabular numerical type (prices, volumes, percentages, stat counters, prize pools) Mixing them is not optional — Inter on a price ticker would lose the trading-platform character; Inter on a paragraph would feel monospace-cold."
    },
    {
      "section": "Typography > Hierarchy",
      "guidance": "| Token | Size | Weight | Line Height | Letter Spacing | Use | |---|---|---|---|---|---| | `{typography.hero-display}` | 64px | 700 | 1.1 | -1px | Homepage h1 (\"316,258,026 USERS TRUST US\") | | `{typography.display-lg}` | 48px | 700 | 1.1 | -0.5px | Brand-claim headlines (\"FUNDS ARE SAFU\"), prize-pool hero (\"Futures Masters Arena\") | | `{typography.display-md}` | 40px | 600 | 1.15 | -0.3px | Section heads on long-scroll pages | | `{typography.display-sm}` | 32px | 600 | 1.2 | 0 | CTA band headlines (\"Secure, Low-Fee Trading on Binance\") | | `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Sub-section titles | | `{typography.title-md}` | 20px | 600 | 1.35 | 0 | QR-promo cards, feature card titles | | `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Trust badges, FAQ rows, step labels | | `{"
    },
    {
      "section": "Typography > Principles",
      "guidance": "Display sizes use weight 700 — heavier than most marketing systems. This makes sense for a trading platform: numbers need to read at a glance, headlines need to compete with chart visualizations and dense data tables. The system will not soften display weight to 400 the way Airtable or Stripe does. `{typography.number-display}` and the smaller number variants always use **Inter**, even when surrounding body type uses Inter. Prices, volumes, and stat counters render in Inter regardless of context — it is the system's \"trustworthy number\" voice."
    }
  ]
}
```


## 6. Colors

Use color semantically: primary for the most important action, surfaces to group related information, and borders or contrast to establish separation. Check text contrast in every state, especially on primary actions and dark surfaces.


```json
{
  "tokens": {
    "primary": "#da291c",
    "primary-active": "#b01e0a",
    "primary-hover": "#9d2211",
    "ink": "#ffffff",
    "body": "#969696",
    "body-strong": "#ffffff",
    "body-on-light": "#181818",
    "muted": "#666666",
    "muted-soft": "#8f8f8f",
    "hairline": "#303030",
    "hairline-on-light": "#d2d2d2",
    "hairline-soft": "#ebebeb",
    "canvas": "#181818",
    "canvas-elevated": "#303030",
    "canvas-light": "#ffffff",
    "surface-card": "#303030",
    "surface-soft-light": "#f7f7f7",
    "surface-strong-light": "#ebebeb",
    "on-primary": "#ffffff",
    "on-dark": "#ffffff",
    "on-light": "#181818",
    "accent-yellow-hypersail": "#fff200",
    "accent-yellow": "#f6e500",
    "semantic-info": "#4c98b9"
  },
  "guidance": [
    {
      "section": "Colors > Brand & Accent",
      "guidance": "- **Rosso Corsa** (`{colors.primary}` — #da291c): The iconic Ferrari racing red. Primary CTA fill, Cavallino mark, F1 driver-position highlights. Used scarcely. - **Rosso Corsa Active** (`{colors.primary-active}` — #b01e0a): Press state. - **Rosso Corsa Hover-darker** (`{colors.primary-hover}` — #9d2211): Documented for completeness; per the no-hover policy this is not used in preview HTML. - **Hypersail Yellow** (`{colors.accent-yellow-hypersail}` — #fff200) + **Yellow** (`{colors.accent-yellow}` — #f6e500): Sub-brand accents reserved for the Hypersail sailing program and the global focus-ring color. Not part of the main automotive palette."
    },
    {
      "section": "Colors > Surface",
      "guidance": "- **Canvas** (`{colors.canvas}` — #181818): Near-black page floor — never pure black, slight warmth. - **Canvas Elevated** (`{colors.canvas-elevated}` — #303030): Cards and panels on dark canvas. - **Canvas Light** (`{colors.canvas-light}` — #ffffff): White editorial bands (preowned listings, pricing). - **Surface Card** (`{colors.surface-card}` — #303030): Same as canvas-elevated — driver cards, livery photo plates. - **Surface Soft Light** (`{colors.surface-soft-light}` — #f7f7f7): Light editorial alternating band. - **Surface Strong Light** (`{colors.surface-strong-light}` — #ebebeb): Light-canvas dividers, badges."
    },
    {
      "section": "Colors > Hairlines",
      "guidance": "- **Hairline** (`{colors.hairline}` — #303030): 1px divider on dark — same hex as `{colors.canvas-elevated}`. - **Hairline On Light** (`{colors.hairline-on-light}` — #d2d2d2): 1px divider on light bands. - **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb): Lighter divider."
    },
    {
      "section": "Colors > Text",
      "guidance": "- **Ink** (`{colors.ink}` — #ffffff): Display, body emphasis on dark. - **Body** (`{colors.body}` — #969696): Default running-text on dark. - **Body Strong** (`{colors.body-strong}` — #ffffff): Same as ink. - **Body On Light** (`{colors.body-on-light}` — #181818): Default text on light bands. - **Muted** (`{colors.muted}` — #666666): Sub-titles, captions on dark. - **Muted Soft** (`{colors.muted-soft}` — #8f8f8f): Disabled link text. - **On Primary** (`{colors.on-primary}` — #ffffff): White text on Rosso Corsa."
    }
  ]
}
```


## 7. Components

Build reusable, accessible primitives first. Buttons and fields own their geometry and states; cards and containers own their surface treatment, spacing, and elevation. Do not copy unrelated visual choices between these categories.

### Shape and cards


```json
{
  "radii": {},
  "cards": {},
  "guidance": [
    {
      "section": "Design System Inspired by Spotify > 4. Component Stylings > Buttons",
      "guidance": "**Dark Pill** - Background: `#1f1f1f` - Text: `#ffffff` or `#b3b3b3` - Padding: 8px 16px - Radius: 9999px (full pill) - Use: Navigation pills, secondary actions **Dark Large Pill** - Background: `#181818` - Text: `#ffffff` - Padding: 0px 43px - Radius: 500px - Use: Primary app navigation buttons **Light Pill** - Background: `#eeeeee` - Text: `#181818` - Radius: 500px - Use: Light-mode CTAs (cookie consent, marketing) **Outlined Pill** - Background: transparent - Text: `#ffffff` - Border: `1px solid #7c7c7c` - Padding: 4px 16px 4px 36px (asymmetric for icon) - Radius: 9999px - Use: Follow buttons, secondary actions **Inter Play** - Background: `#1f1f1f` - Text: `#ffffff` - Padding: 12px - Rad"
    },
    {
      "section": "Design System Inspired by Spotify > 4. Component Stylings > Cards & Containers",
      "guidance": "- Background: `#181818` or `#1f1f1f` - Radius: 6px–8px - No visible borders on most cards - Hover: slight background lightening - Shadow: `rgba(0,0,0,0.3) 0px 8px 8px` on elevated"
    },
    {
      "section": "Design System Inspired by Spotify > 4. Component Stylings > Inputs",
      "guidance": "- Search input: `#1f1f1f` background, `#ffffff` text - Radius: 500px (pill) - Padding: 12px 96px 12px 48px (icon-aware) - Focus: border becomes `#000000`, outline `1px solid`"
    },
    {
      "section": "Design System Inspired by Spotify > 4. Component Stylings > Navigation",
      "guidance": "- Dark sidebar with DM Sans 14px weight 700 for active, 400 for inactive - `#b3b3b3` muted color for inactive items, `#ffffff` for active - Inter icon buttons (50% radius) - Spotify logo top-left in green"
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
    "button-primary-pill": {
      "backgroundColor": "{colors.primary}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.pill}",
      "padding": "8px 16px"
    },
    "button-primary-pill-pressed": {
      "backgroundColor": "{colors.primary-press}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.pill}",
      "padding": "8px 16px"
    },
    "button-secondary": {
      "backgroundColor": "{colors.canvas}",
      "textColor": "{colors.primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.pill}",
      "padding": "8px 16px"
    },
    "button-on-dark": {
      "backgroundColor": "{colors.brand-dark-900}",
      "textColor": "{colors.on-primary}",
      "typography": "{typography.button-md}",
      "rounded": "{rounded.pill}",
      "padding": "8px 16px"
    }
  },
  "guidance": [
    {
      "section": "Components > Buttons",
      "guidance": "**`button-primary-pill`** — the dominant CTA system-wide. - Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.pill}` 9999px. - Pressed state `button-primary-pill-pressed` shifts background to `{colors.primary-press}`. **`button-secondary`** — outline-style alternative. - Background `{colors.canvas}`, text `{colors.primary}`, 1px solid `{colors.primary}` border, same pill geometry. **`button-on-dark`** — used on dashboard / dark surfaces. - Background `{colors.brand-dark-900}`, text `{colors.on-primary}`, same pill geometry."
    }
  ]
}
```


### Fields and controls


```json
{
  "tokens": {
    "text-input": {
      "backgroundColor": "{colors.canvas-light}",
      "textColor": "{colors.ink}",
      "typography": "{typography.body-md}",
      "rounded": "{rounded.md}",
      "padding": "10px 12px"
    }
  },
  "guidance": [
    {
      "section": "Components > Inputs & Forms",
      "guidance": "**`text-input`** — standard text input on light surfaces. - Background `{colors.canvas-light}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm}+ {spacing.md}` (10px 12px), rounded `{rounded.md}` 8px, 1px `{colors.hairline-light}` border."
    }
  ]
}
```


## 8. Navigation

- Separate logging, current activity, progress, and history.
- Provide fast access to the most frequent activity or log.
- Keep period, unit, and source visible when comparing metrics.


## 9. Interaction Patterns

- Minimize input needed for frequent logs.
- Allow people to correct data and understand its effect on trends and goals.
- Distinguish measurement, goal, and recommendation before offering actions.

### Discovery patterns

- Daily or weekly summary
- Recent activities
- Progress by goal
- Meaningful trends


## 10. Responsive / Mobile

Design the smallest useful composition first, then enhance it as space increases. Keep primary actions reachable, preserve context while reflowing content, and do not hide required information behind hover-only interactions. Respect touch targets, keyboard navigation, visible focus, and reduced-motion preferences.

Use the responsive guidance in the layout reference above as the product-specific breakpoint contract.

## 11. Product-specific UX

### Trust and safety

- Treat health, location, and biometrics as sensitive information.
- Explain the source, accuracy, and limitations of measurements.
- Clearly distinguish general wellbeing, recommendation, and professional advice.

### Recommended patterns

- Quick log
- Status summary
- Goal progress
- Time-based history


## 12. Do / Don't

Do:

- Use quick log when it supports the user's task.
- Use status summary when it supports the user's task.
- Use goal progress when it supports the user's task.
- Use time-based history when it supports the user's task.

Don't:

- Overloading people with uninterpreted metrics.
- Presenting estimates as exact measurements.
- Using pressure or guilt to drive activity.



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
  --background: #181818;
  --card: #303030;
  --popover: #303030;
  --foreground: #ffffff;
  --primary: #da291c;
  --primary-foreground: #ffffff;
  --border: #303030;
  --muted-foreground: #666666;
  --muted: color-mix(in srgb, #303030, #ffffff 7%);
  --secondary: color-mix(in srgb, #303030, #ffffff 7%);
  --secondary-foreground: #ffffff;
  --accent: color-mix(in srgb, #303030, #ffffff 12%);
  --accent-foreground: #ffffff;
  --success: #03904a;
  --warning: #f13a2c;
  --destructive: #dc2626;
  --info: #4c98b9;
  --radius: 8px;
  --card-radius: 8px;
  --button-radius: 9999px;
  --input-radius: 8px;
  --preview-font: Inter, sans-serif;
  --heading-font: Inter, sans-serif;
  --mono-font: 'JetBrains Mono', monospace;
  --body-size: 14px;
  --body-weight: 400;
  --body-leading: 1.5;
  --heading-size: 44px;
  --heading-weight: 700;
  --heading-tracking: -0.5px;
  --heading-leading: 1.1;
  --button-weight: 400;
  --button-tracking: 0px;
  --button-padding: 8px 16px;
  --input-padding: 10px 12px;
  --gallery-gap: 8px;
  --sample-padding: 12px;
  --preview-columns: 2;
  --sample-shadow: 0 1px 3px rgba(0,0,0,0.06);
  --input-height: 44px;
  --input-bg: #181818;
  --input-color: #ffffff;
  --input-border: #303030;
  --input-focus-width: 2px;
  --input-focus-bg: #181818;
  --input-focus-color: #da291c;
  --input-focus-shadow: 0 0 0 3px color-mix(in srgb, #da291c, transparent 80%);
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

