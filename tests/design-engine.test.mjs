import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { parse } from "yaml";
import {
  composeDesign,
  defaultSelection,
  sections,
  luminance,
  validSelection,
} from "../src/lib/design-engine.js";
import { generateMarkdown } from "../src/lib/export-design.js";
const catalog = JSON.parse(
  await readFile(new URL("../src/generated/catalog.json", import.meta.url)),
);
const sourceRoot = new URL("../public/data/brands/", import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL("../public/fonts/manifest.json", import.meta.url)),
);
const sources = Object.fromEntries(
  await Promise.all(
    catalog.map(async (b) => [
      b.id,
      JSON.parse(await readFile(new URL(b.id + ".json", sourceRoot))),
    ]),
  ),
);
const baseline = composeDesign(catalog, defaultSelection);
const contrast = (a, b) =>
  (Math.max(luminance(a), luminance(b)) + 0.05) /
  (Math.min(luminance(a), luminance(b)) + 0.05);

test("cada JSON del dataset aparece una sola vez en todos los selectores", async () => {
  const files = (await readdir(new URL("../dataset/", import.meta.url))).filter(
    (f) => f.endsWith(".json"),
  );
  assert.equal(catalog.length, files.length);
  assert.equal(new Set(catalog.map((b) => b.id)).size, files.length);
  assert.ok(sections.length <= 10);
  assert.deepEqual(catalog.map((b) => b.file).sort(), files.sort());
});
test("las 592 selecciones conservan la paleta nativa y valores CSS resueltos", () => {
  for (const section of sections)
    for (const brand of catalog) {
      const design = composeDesign(catalog, {
        ...defaultSelection,
        [section.key]: brand.id,
      });
      assert.equal(design.selected[section.key].id, brand.id);
      assert.ok(["dark", "light"].includes(design.palette.mode), brand.id);
      assert.ok(
        contrast(design.palette.onPrimary, design.palette.primary) >= 4.5,
        `CTA: ${brand.id}`,
      );

      for (const [key, value] of Object.entries(design.css)) {
        assert.ok(value !== undefined && value !== null, `${brand.id}/${key}`);
        assert.doesNotMatch(
          String(value),
          /NaN|undefined|\{(?:colors|rounded|spacing|typography)\./,
          `${brand.id}/${key}`,
        );
      }
    }
});
test("los selectores alteran su propia sección y mantienen independientes las demás", () => {
  const colors = composeDesign(catalog, {
    ...defaultSelection,
    colors: "spotify",
  });
  assert.equal(colors.palette.primary, "#1ed760");
  assert.equal(colors.palette.background, "#121212");
  assert.equal(colors.palette.foreground, "#ffffff");
  assert.equal(colors.palette.mode, "dark");
  assert.equal(baseline.palette.background, "#ffffff");
  assert.equal(baseline.palette.foreground, "#171717");
  assert.equal(baseline.palette.mode, "light");
  assert.equal(colors.css["--heading-font"], baseline.css["--heading-font"]);
  const shape = composeDesign(catalog, {
    ...defaultSelection,
    shape: "pinterest",
  });
  assert.equal(shape.meta.cardRadius, "32px");
  assert.equal(shape.meta.buttonRadius, baseline.meta.buttonRadius);
  const buttons = composeDesign(catalog, {
    ...defaultSelection,
    buttons: "spotify",
  });
  assert.equal(buttons.meta.buttonRadius, "9999px");
  assert.equal(buttons.palette.primary, baseline.palette.primary);
  const typography = composeDesign(catalog, {
    ...defaultSelection,
    typography: "lamborghini",
  });
  assert.match(typography.meta.headingFont, /Saira Condensed/);
  assert.notEqual(typography.meta.headingFont, baseline.meta.headingFont);
  const layout = composeDesign(catalog, {
    ...defaultSelection,
    layout: "wired",
  });
  assert.equal(layout.meta.columns, 1);
  const spacing = composeDesign(catalog, {
    ...defaultSelection,
    spacing: "linear.app",
  });
  assert.notEqual(spacing.meta.gap, baseline.meta.gap);
});
test("la exportación combina ocho fuentes y coincide exactamente con la vista previa", () => {
  const ids = [
    "spotify",
    "lamborghini",
    "wired",
    "linear.app",
    "pinterest",
    "apple",
    "kraken",
    "claude",
  ];
  const design = composeDesign(
    catalog,
    Object.fromEntries(sections.map((s, i) => [s.key, ids[i]])),
  );
  const markdown = generateMarkdown(design, sources, manifest);
  const yaml = parse(markdown.split("---\n")[1]);
  assert.deepEqual(yaml.resolvedCss, design.css);
  assert.equal(yaml.mode, "dark");
  assert.equal(yaml.colors.primary, "#1ed760");
  sections.forEach((s, i) =>
    assert.equal(yaml.sources[s.key], `dataset/${ids[i]}.json`),
  );
  assert.doesNotMatch(markdown, /\/Users\//);
  assert.match(markdown, /\/fonts\/saira-condensed\/font.css/);
  assert.match(markdown, /Adaptaciones explícitas/);
  assert.throws(
    () => generateMarkdown(design, {}, manifest),
    /Falta el archivo/,
  );
});
test("se recuperan selecciones guardadas obsoletas o corruptas", () => {
  assert.deepEqual(validSelection(catalog, null), defaultSelection);
  assert.equal(
    validSelection(catalog, { colors: "no-existe" }).colors,
    "supabase",
  );
  assert.equal(
    validSelection(catalog, { colors: "spotify" }).colors,
    "spotify",
  );
});
test("todas las familias tienen CSS, archivos reales y licencia local sin URLs remotas", async () => {
  const families = new Set(
    catalog.flatMap((b) => b.families.map((f) => f.family)),
  );
  assert.equal(families.size, manifest.length);
  const allCss = await readFile(
    new URL("../public/fonts/fonts.css", import.meta.url),
    "utf8",
  );
  assert.doesNotMatch(allCss, /url\(["']?https?:|@import/);
  for (const font of manifest) {
    assert.ok(families.has(font.family));
    const css = await readFile(
      new URL("../public" + font.css, import.meta.url),
      "utf8",
    );
    assert.match(css, /@font-face/);
    const license = await readFile(
      new URL(
        "../public" + font.css.replace("font.css", "LICENSE.txt"),
        import.meta.url,
      ),
      "utf8",
    );
    assert.match(license, /LICENSE|License/);
    for (const file of font.files)
      assert.ok(
        (await stat(new URL("../public" + file, import.meta.url))).size > 1000,
        file,
      );
  }
});
