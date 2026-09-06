import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { root, buildCatalog } from "./build-catalog.mjs";
import {
  composeDesign,
  defaultSelection,
  sections,
} from "../src/lib/design-engine.js";
import { generateMarkdown } from "../src/lib/export-design.js";
const { brands } = await buildCatalog();
const selection = { ...defaultSelection };
for (const arg of process.argv.slice(2)) {
  const [key, id] = arg.replace(/^--/, "").split("=");
  if (!sections.some((s) => s.key === key) || !brands.some((b) => b.id === id))
    throw new Error(
      `Opción inválida: ${arg}. Usa --sección=marca; pnpm catalog muestra las marcas.`,
    );
  selection[key] = id;
}
const design = composeDesign(brands, selection);
const ids = [...new Set(Object.values(selection))];
const sources = Object.fromEntries(
  await Promise.all(
    ids.map(async (id) => [
      id,
      JSON.parse(
        await readFile(resolve(root, `public/data/brands/${id}.json`), "utf8"),
      ),
    ]),
  ),
);
const fontManifest = JSON.parse(
  await readFile(resolve(root, "public/fonts/manifest.json"), "utf8"),
);
await mkdir(resolve(root, "output"), { recursive: true });
await writeFile(
  resolve(root, "output/DESIGN.md"),
  generateMarkdown(design, sources, fontManifest),
);
console.log("Archivo generado: output/DESIGN.md");
