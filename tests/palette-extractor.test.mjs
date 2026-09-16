import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  deltaE,
  extractPaletteFromPixels,
  paletteToBrand,
  rgbToLab,
} from "../src/lib/palette-extractor.js";
import { composeDesign, defaultSelection } from "../src/lib/design-engine.js";
import { generateMarkdown } from "../src/lib/export-design.js";

const catalog = JSON.parse(
  await readFile(new URL("../src/generated/catalog.json", import.meta.url)),
);

const repeat = (color, count) => Array.from({ length: count }, () => color);

test("conserva un acento minoritario aunque el fondo domine la imagen", () => {
  const pixels = [
    ...repeat([248, 248, 248, 255], 900),
    ...repeat([20, 20, 20, 255], 70),
    ...repeat([245, 112, 20, 255], 30),
  ];
  const palette = extractPaletteFromPixels(pixels);

  assert.ok(palette.colors.some(({ rgb }) => rgb.r > 220 && rgb.g > 70 && rgb.g < 150));
  assert.equal(palette.roles.background, "#F8F8F8");
  assert.equal(palette.roles.text, "#141414");
  assert.ok(
    [palette.roles.primary, palette.roles.accent].includes("#F57014"),
    "el naranja debe recibir un rol visual",
  );
});

test("ignora transparencia y fusiona tonos perceptualmente cercanos", () => {
  const pixels = [
    ...repeat([255, 0, 255, 0], 500),
    ...repeat([244, 244, 244, 255], 300),
    ...repeat([246, 246, 246, 255], 200),
    ...repeat([35, 35, 38, 255], 150),
    ...repeat([0, 118, 255, 255], 80),
    ...repeat([255, 190, 0, 255], 70),
    ...repeat([34, 180, 105, 255], 60),
    ...repeat([145, 75, 210, 255], 50),
  ];
  const palette = extractPaletteFromPixels(pixels);

  assert.ok(palette.colors.length >= 5 && palette.colors.length <= 8);
  assert.ok(!palette.colors.some(({ hex }) => hex === "#FF00FF"));
  assert.equal(
    palette.colors.filter(({ rgb }) => rgb.r > 235 && rgb.g > 235 && rgb.b > 235).length,
    1,
  );
});

test("la conversión LAB y la marca custom producen datos estables para el compositor", () => {
  assert.ok(deltaE(rgbToLab({ r: 255, g: 255, b: 255 }), rgbToLab({ r: 0, g: 0, b: 0 })) > 95);
  const palette = extractPaletteFromPixels([
    ...repeat([250, 250, 250, 255], 50),
    ...repeat([18, 18, 18, 255], 20),
    ...repeat([0, 120, 255, 255], 10),
    ...repeat([255, 90, 40, 255], 8),
    ...repeat([30, 180, 100, 255], 7),
    ...repeat([135, 70, 210, 255], 5),
  ]);
  const brand = paletteToBrand(palette);

  assert.equal(brand.id, "custom-image-palette");
  assert.equal(brand.sourceUri, "local://image-palette");
  assert.equal(brand.colors.canvas, palette.roles.background);
  assert.ok(brand.colors.primary);
});

test("la paleta local se integra y exporta sin requerir un dataset externo", async () => {
  const palette = extractPaletteFromPixels([
    ...repeat([252, 252, 252, 255], 60),
    ...repeat([25, 28, 31, 255], 20),
    ...repeat([245, 100, 25, 255], 8),
    ...repeat([20, 125, 230, 255], 6),
    ...repeat([40, 175, 95, 255], 6),
  ]);
  const custom = paletteToBrand(palette);
  const design = composeDesign([...catalog, custom], {
    ...defaultSelection,
    colors: custom.id,
  });
  const supabase = JSON.parse(
    await readFile(new URL("../public/data/brands/supabase.json", import.meta.url)),
  );
  const markdown = generateMarkdown(
    design,
    {
      supabase,
      [custom.id]: {
        colors: { tokens: custom.colors, guidance: [] },
      },
    },
    [],
  );

  assert.equal(design.selected.colors.id, custom.id);
  assert.match(markdown, /local:\/\/image-palette/);
  assert.match(markdown, new RegExp(design.palette.primary, "i"));
});
