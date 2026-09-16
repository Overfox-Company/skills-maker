import { stringify } from "yaml";
import { sections } from "./design-engine.js";
const fenced = (value) =>
  `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
const bullets = (values) => values.map((value) => `- ${value}`).join("\n");
const ordered = (values) =>
  values.map((value, index) => `${index + 1}. ${value}`).join("\n");

const exportSectionLabels = {
  colors: "Color palette",
  typography: "Typography",
  layout: "Layout and spacing",
  shape: "Shape and cards",
  elevation: "Shadows and depth",
  buttons: "Buttons",
  inputs: "Fields and controls",
};

function exportedProductExperience(product) {
  const profile = product.exportProfile ?? product;
  if (!profile)
    throw new Error(`Missing English export profile for ${product?.id}`);
  return {
    id: product.id,
    ...profile,
    // Preserve the exact localized intent shown in the catalog alongside the
    // English implementation guidance. Both are owned by the same archetype.
    wireframes: product.wireframes,
    previewIntent: {
      locale: "es",
      primaryObjective: product.primaryObjective,
      agentFocus: product.agentFocus,
      informationHierarchy: product.informationHierarchy,
      navigationPrinciples: product.navigationPrinciples,
      interactionPrinciples: product.interactionPrinciples,
      patternsToAvoid: product.patternsToAvoid,
    },
  };
}

function productExperienceSection(product) {
  if (!product) return null;
  const profile = exportedProductExperience(product);
  return `## 2. Product Objective

**${profile.label}** — ${profile.description}

${profile.primaryObjective}

### UX priorities

${bullets(profile.uxPriorities)}

### Primary actions

${bullets(profile.primaryActions)}

## 3. Information Architecture

Order information by decision value:

${ordered(profile.informationHierarchy)}

### Content principles

${bullets(profile.contentPrinciples)}

## 8. Navigation

${bullets(profile.navigationPrinciples)}

## 9. Interaction Patterns

${bullets(profile.interactionPrinciples)}

### Discovery patterns

${bullets(profile.discoveryPatterns)}

## 11. Product-specific UX

### Trust and safety

${bullets(profile.trustAndSafetyConsiderations)}

### Recommended patterns

${bullets(profile.commonPatterns)}

## 12. Do / Don't

Do:

${bullets(profile.commonPatterns.map((pattern) => `Use ${pattern.toLowerCase()} when it supports the user's task.`))}

Don't:

${bullets(profile.patternsToAvoid)}

`;
}

const trimText = (value, limit) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);

function compactGuidance(guidance = [], { count = 3, chars = 550 } = {}) {
  return guidance.slice(0, count).map(({ section, content }) => ({
    section,
    guidance: trimText(content, chars),
  }));
}

function compactObject(object = {}, count) {
  return Object.fromEntries(Object.entries(object).slice(0, count));
}

function compactSource(key, source) {
  const selected = sourceSection(key, source);
  if (key === "colors")
    return {
      tokens: compactObject(selected.tokens, 24),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 700 }),
    };
  if (key === "typography")
    return {
      families: selected.families,
      styles: compactObject(selected.styles, 18),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 800 }),
    };
  if (key === "layout")
    return {
      spacing: selected.spacing,
      gridAndContainers: compactGuidance(selected.gridAndContainers, {
        count: 6,
        chars: 750,
      }),
      responsive: selected.responsive,
    };
  if (key === "shape")
    return {
      radii: selected.shape?.radii,
      cards: compactObject(selected.cards?.tokens, 12),
      guidance: compactGuidance(selected.cards?.guidance, {
        count: 4,
        chars: 700,
      }),
    };
  if (key === "elevation")
    return {
      tokens: compactObject(selected.tokens, 12),
      guidance: compactGuidance(selected.guidance, { count: 4, chars: 700 }),
    };
  return {
    tokens: compactObject(selected.tokens, 18),
    guidance: compactGuidance(selected.guidance, { count: 5, chars: 700 }),
  };
}
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
  const productExperience = design.productType
    ? exportedProductExperience(design.productType)
    : undefined;
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
    name: "Composed design system",
    description: "A design system composed in DESIGN.md Studio.",
    mode: design.palette.mode,
    ...(design.productType
      ? {
          productExperience: {
            ...productExperience,
          },
        }
      : {}),
    sources: Object.fromEntries(
      sections.map(({ key }) => [
        key,
        design.selected[key].sourceUri ?? `dataset/${design.selected[key].id}.json`,
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
        borderRadius: design.meta.inputRadius,
        padding: design.css["--input-padding"],
      },
      card: {
        borderRadius: design.meta.cardRadius,
        padding: design.css["--sample-padding"],
        boxShadow: design.css["--sample-shadow"],
      },
    },
    resolvedCss: design.css,
  };
  for (const section of sections) {
    const brand = design.selected[section.key];
    if (!sources[brand.id])
      throw new Error(`Missing source file for ${brand.name}`);
  }
  const sourceFor = (key) => {
    const brand = design.selected[key];
    return compactSource(key, sources[brand.id]);
  };
  const productSections =
    productExperienceSection(design.productType) ??
    `## 2. Product Objective

No product profile is selected. Define a single user goal for each screen before choosing components or layout.

## 3. Information Architecture

Place the primary user task first, show decision-critical information next, and defer supporting detail until it is requested.

## 8. Navigation

Keep the current location, primary destinations, search, and back paths predictable across views.

## 9. Interaction Patterns

Use direct manipulation where possible, give immediate feedback, and make destructive actions deliberate and reversible.

## 11. Product-specific UX

Add product-specific rules only when they clarify a user decision, a safety concern, or a repeated workflow.

## 12. Do / Don't

Do: prioritize the user's next decision, preserve context, and explain consequential state changes.

Don't: add visual novelty, confirmation steps, or dense controls that do not advance the task.

`;
  const productSection = (number) =>
    productSections.match(
      new RegExp(`## ${number}\\.[\\s\\S]*?(?=\\n## \\d+\\.|$)`),
    )?.[0] ?? "";
  const implementationGuidance = `
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
`;
  let md = `---\n${stringify(frontmatter, { lineWidth: 0 })}---\n\n# DESIGN.md\n\nThis is an implementation skill, not a screenshot specification. It combines product behavior with a visual system: product rules decide what users need to accomplish, while visual rules decide how the experience should look and feel.\n\n## 1. Design Philosophy\n\nCompose one coherent system from the selected references. Preserve the visual vocabulary of each selected brand without treating any source document as a literal template. Prefer clear hierarchy, accessible interaction, useful density, and deliberate restraint over decorative effects.\n\n### Composition sources\n\n${sections.map((s) => `- **${exportSectionLabels[s.key]}:** ${design.selected[s.key].name}`).join("\n")}\n\nThe resolved front matter is the source of truth for implementation. Source excerpts document brand intent, but they do not override decisions assigned to another section.\n\n${productSection(2)}\n\n${productSection(3)}\n\n## 4. Layout & Spacing\n\nUse a shared spacing rhythm, stable container behavior, and progressive disclosure. Preserve the selected layout system at every viewport; do not flatten it into generic one-column marketing sections.\n\n${fenced(sourceFor("layout"))}\n\n## 5. Typography\n\nTypography establishes hierarchy before color or decoration. Use the selected families and styles as named roles, retain readable line lengths, and avoid introducing remote font requests when local assets are available.\n\n${fenced(sourceFor("typography"))}\n\n## 6. Colors\n\nUse color semantically: primary for the most important action, surfaces to group related information, and borders or contrast to establish separation. Check text contrast in every state, especially on primary actions and dark surfaces.\n\n${fenced(sourceFor("colors"))}\n\n## 7. Components\n\nBuild reusable, accessible primitives first. Buttons and fields own their geometry and states; cards and containers own their surface treatment, spacing, and elevation. Do not copy unrelated visual choices between these categories.\n\n### Shape and cards\n\n${fenced(sourceFor("shape"))}\n\n### Elevation\n\n${fenced(sourceFor("elevation"))}\n\n### Buttons\n\n${fenced(sourceFor("buttons"))}\n\n### Fields and controls\n\n${fenced(sourceFor("inputs"))}\n\n${productSection(8)}\n\n${productSection(9)}\n\n## 10. Responsive / Mobile\n\nDesign the smallest useful composition first, then enhance it as space increases. Keep primary actions reachable, preserve context while reflowing content, and do not hide required information behind hover-only interactions. Respect touch targets, keyboard navigation, visible focus, and reduced-motion preferences.\n\nUse the responsive guidance in the layout reference above as the product-specific breakpoint contract.\n\n${productSection(11)}\n\n${productSection(12)}\n\n## 13. Agent Implementation Rules\n\n- Implement the values in \`resolvedCss\` and the resolved component definitions before introducing new tokens.\n- Keep color and typography global; apply button, field, card, and layout geometry only to their respective primitives.\n- Use accessible shadcn/ui-compatible patterns, semantic HTML, keyboard support, visible focus, and \`prefers-reduced-motion\`.\n- Treat the exported palette mode as part of the product UI. The editor sidebar is not part of the exported design.\n- Keep components composable. Add a variant only when it represents a repeatable semantic or behavioral difference.\n- Validate contrast, loading, empty, error, disabled, and long-content states before considering a screen complete.\n- When information conflicts, prioritize the product objective and information architecture over visual novelty.\n\n## Resolved CSS\n\n\`\`\`css\n:root {\n${Object.entries(
    design.css,
  )
    .map(([key, value]) => `  ${key}: ${value};`)
    .join(
      "\n",
    )}\n}\n\`\`\`\n\n## Local Font Assets\n\nCopy these font family folders from \`public/fonts\` with their licenses. Load their local stylesheets and do not add runtime Google Fonts requests. Font files are not embedded in this Markdown.\n${fenced(assets)}\n`;
  md = md.replace(
    "## Resolved CSS",
    `${implementationGuidance}\n## Resolved CSS`,
  );
  return md;
}
export async function loadExportSources(design) {
  const brands = [
    ...new Map(Object.values(design.selected).map((brand) => [brand.id, brand])).values(),
  ];
  const entries = await Promise.all(
    brands.map(async (brand) => {
      const { id } = brand;
      if (brand.sourceUri === "local://image-palette") {
        return [
          id,
          {
            colors: {
              tokens: brand.colors,
              guidance: [
                {
                  section: "Locally extracted image palette",
                  content:
                    "Palette sampled in the browser, clustered in CIELAB, deduplicated by perceptual distance, and assigned semantic roles from contrast, presence, saturation, and lightness.",
                },
              ],
            },
          },
        ];
      }
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
