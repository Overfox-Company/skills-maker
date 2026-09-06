import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const root = resolve(import.meta.dirname, "..");
export async function readDataset() {
  const files = (await readdir(resolve(root, "dataset")))
    .filter((f) => f.endsWith(".json"))
    .sort();
  return Promise.all(
    files.map(async (file) => {
      const data = JSON.parse(
        await readFile(resolve(root, "dataset", file), "utf8"),
      );
      if (!data.brand?.id || !data.colors?.tokens || !data.typography?.families)
        throw new Error(`Dataset incompleto: ${file}`);
      return { file, data };
    }),
  );
}
export function tokenTable(guidance, group) {
  const result = {};
  for (const { content } of guidance ?? []) {
    for (const match of content.matchAll(
      new RegExp(`\\{${group}\\.([^}]+)\\}[^|\\n]*\\|\\s*([^|\\n]+)`, "g"),
    )) {
      const value = match[2].replace(/[`*]/g, "").trim();
      if (/^\d+(\.\d+)?(px|rem|%)$/.test(value)) result[match[1]] = value;
    }
  }
  return result;
}
const names = {
  "linear.app": "Linear",
  "mistral.ai": "Mistral AI",
  "x.ai": "xAI",
  "opencode.ai": "OpenCode",
  "together.ai": "Together AI",
  "cal.json": "Cal.com",
  cal: "Cal.com",
  "bmw-m": "BMW M",
  bmw: "BMW",
  ibm: "IBM",
  hp: "HP",
  nvidia: "NVIDIA",
  "dell-1996": "Dell 1996",
  "nintendo-2001": "Nintendo 2001",
  runwayml: "Runway",
  elevenlabs: "ElevenLabs",
  spacex: "SpaceX",
  webflow: "Webflow",
  playstation: "PlayStation",
  airtable: "Airtable",
  clickhouse: "ClickHouse",
  posthog: "PostHog",
  voltagent: "VoltAgent",
  mongodb: "MongoDB",
  theverge: "The Verge",
  minimax: "MiniMax",
  hashicorp: "HashiCorp",
};
export const brandName = (id) =>
  names[id] ?? id.charAt(0).toUpperCase() + id.slice(1);
export async function buildCatalog() {
  const records = await readDataset();
  const ids = new Set();
  const brands = records
    .map(({ file, data: d }) => {
      if (ids.has(d.brand.id))
        throw new Error(`Marca duplicada: ${d.brand.id}`);
      ids.add(d.brand.id);
      const layoutText = (d.layout.gridAndContainers ?? [])
        .map((g) => g.content)
        .join("\n");
      const columns = Number(
        layoutText.match(/(?:mockups[^.]*?|product UI[^.]*?)([23])-up/i)?.[1] ??
          layoutText.match(
            /(?:grids? (?:are |is )?|grid is |Pricing collapses )(\d)-up/i,
          )?.[1] ??
          layoutText.match(/(\d)-up/)?.[1] ??
          2,
      );
      const elevationText = (d.elevation.guidance ?? [])
        .map((g) => g.content)
        .join("\n");
      const shadows = [
        ...elevationText.matchAll(
          /`(?:box-shadow:\s*)?([^`\n]*(?:rgba?\([^)]+\)[^`\n]*|\d+px[^`\n]*#[\da-f]+))`/gi,
        ),
      ]
        .map((m) => m[1].replace(/;$/, ""))
        .filter(
          (s) =>
            !s.includes("{") &&
            /\d+px/.test(s) &&
            !s.includes("border") &&
            !s.includes("solid"),
        );
      return {
        id: d.brand.id,
        name: brandName(d.brand.id),
        file,
        colors: d.colors.tokens,
        families: d.typography.families,
        typography: d.typography.styles,
        spacing: {
          ...tokenTable(d.layout.gridAndContainers, "spacing"),
          ...d.layout.spacing,
        },
        spacingValues: d.layout.spacingValues,
        radii: { ...tokenTable(d.shape.guidance, "rounded"), ...d.shape.radii },
        radiusValues: d.shape.radiusValues,
        columns: Math.min(3, Math.max(1, columns)),
        shadows,
        components: Object.fromEntries(
          Object.entries(d.components.tokens).filter(
            ([key]) =>
              /button.*primary|primary.*button|button-solid|button-filled|text-input|input-text|^input$|search-input|form-input/.test(
                key,
              ) && !/pressed|active|disabled|focus/.test(key),
          ),
        ),
        notes: {
          components: Object.keys(d.components.tokens).length
            ? []
            : d.components.guidance.filter((g) =>
                /button|input|form/i.test(g.section),
              ),
        },
        gaps: {
          components: Object.keys(d.components.tokens).length === 0,
          typography: Object.keys(d.typography.styles).length < 2,
        },
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  await mkdir(resolve(root, "public/data/brands"), { recursive: true });
  await mkdir(resolve(root, "src/generated"), { recursive: true });
  for (const { data } of records) {
    // Original analysis stays available for export; strip machine-specific paths.
    const clean = {
      ...data,
      brand: {
        ...data.brand,
        source: { ...data.brand.source, file: `dataset/${data.brand.id}.json` },
      },
    };
    await writeFile(
      resolve(root, "public/data/brands", `${data.brand.id}.json`),
      JSON.stringify(clean),
    );
  }
  await writeFile(
    resolve(root, "src/generated/catalog.json"),
    JSON.stringify(brands),
  );
  const families = [
    ...new Map(
      brands.flatMap((b) => b.families).map((f) => [f.family, f]),
    ).values(),
  ].sort((a, b) => a.family.localeCompare(b.family));
  await writeFile(
    resolve(root, "public/data/options.json"),
    JSON.stringify(
      {
        brandCount: brands.length,
        fontCount: families.length,
        brands: brands.map(({ id, name, file }) => ({ id, name, file })),
        families,
      },
      null,
      2,
    ),
  );
  console.log(
    `${brands.length} marcas · ${families.length} familias. Catálogo: public/data/options.json`,
  );
  if (process.argv.includes("--list"))
    console.table(
      brands.map(({ id, name, families }) => ({
        id,
        marca: name,
        fuentes: families.map((f) => f.family).join(", "),
      })),
    );
  return { brands, families };
}
if (import.meta.url === pathToFileURL(process.argv[1]).href)
  await buildCatalog();
