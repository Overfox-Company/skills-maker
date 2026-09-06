import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { root, readDataset } from "./build-catalog.mjs";
const fontRoot = resolve(root, "public/fonts");
await mkdir(fontRoot, { recursive: true });
const records = await readDataset();
const families = [
  ...new Map(
    records
      .flatMap(({ data }) => data.typography.families)
      .map((f) => [f.family, f]),
  ).values(),
];
async function get(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(45000),
      });
      if (!res.ok) throw new Error(`${res.status}: ${url}`);
      return res;
    } catch (error) {
      if (attempt === 2) throw error;
    }
  }
}
const metadataText = await (
  await get("https://fonts.google.com/metadata/fonts")
).text();
const metadata = JSON.parse(
  metadataText.replace(/^\)\]\}'\s*/, ""),
).familyMetadataList;
const manifest = [];
let cursor = 0;
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (cursor < families.length) {
      const font = families[cursor++];
      const info = metadata.find((m) => m.family === font.family);
      if (!info)
        throw new Error(`Sin metadatos de Google Fonts: ${font.family}`);
      const slug = font.family.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const dir = resolve(fontRoot, slug);
      await mkdir(dir, { recursive: true });
      const weights = Object.keys(info.fonts)
        .filter((w) => !w.endsWith("i"))
        .map(Number)
        .sort((a, b) => a - b);
      const weightAxis = info.axes?.find((a) => a.tag === "wght");
      const hasItalic = Object.keys(info.fonts).some((w) => w.endsWith("i"));
      const weightQuery = weightAxis
        ? `${weightAxis.min}..${weightAxis.max}`
        : weights.join(";");
      const query = hasItalic
        ? `ital,wght@${[0, 1].flatMap((i) => weightQuery.split(";").map((w) => `${i},${w}`)).join(";")}`
        : `wght@${weightQuery}`;
      const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font.family)}:${query}&display=swap`;
      let css = await (await get(cssUrl)).text();
      const files = [];
      for (const url of [
        ...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1])),
      ]) {
        const extension = new URL(url).pathname.endsWith(".woff2")
          ? "woff2"
          : "ttf";
        const file = `${createHash("sha256").update(url).digest("hex").slice(0, 16)}.${extension}`;
        const path = resolve(dir, file);
        try {
          await access(path);
        } catch {
          await writeFile(
            path,
            Buffer.from(await (await get(url)).arrayBuffer()),
          );
        }
        css = css.split(url).join(`/fonts/${slug}/${file}`);
        files.push(`/fonts/${slug}/${file}`);
      }
      let licenseText, licenseSource;
      for (const base of ["ofl", "apache", "ufl"]) {
        const url = `https://raw.githubusercontent.com/google/fonts/main/${base}/${font.family.toLowerCase().replace(/[^a-z0-9]/g, "")}/${base === "ofl" ? "OFL.txt" : "LICENSE.txt"}`;
        const res = await fetch(url);
        if (res.ok) {
          licenseText = await res.text();
          licenseSource = url;
          break;
        }
      }
      if (!licenseText) {
        const meta = await (
          await get(
            `https://raw.githubusercontent.com/google/fonts/main/ofl/${font.family.toLowerCase().replace(/[^a-z0-9]/g, "")}/METADATA.pb`,
          )
        ).text();
        const repo = meta.match(
          /repository_url: "https:\/\/github.com\/([^"]+)"/,
        )?.[1];
        if (repo)
          for (const branch of ["main", "master"])
            for (const name of ["OFL.txt", "LICENSE.txt", "LICENSE"]) {
              if (licenseText) break;
              const url = `https://raw.githubusercontent.com/${repo}/${branch}/${name}`;
              const res = await fetch(url);
              if (res.ok) {
                licenseText = await res.text();
                licenseSource = url;
              }
            }
      }
      if (!licenseText)
        throw new Error(`No se pudo obtener la licencia: ${font.family}`);
      await writeFile(resolve(dir, "LICENSE.txt"), licenseText);
      await writeFile(resolve(dir, "font.css"), css);
      manifest.push({
        ...font,
        css: `/fonts/${slug}/font.css`,
        files,
        weights: weightAxis ? [weightAxis.min, weightAxis.max] : weights,
        italic: hasItalic,
        licenseSource,
      });
      console.log(`${font.family}: ${files.length} archivos locales`);
    }
  }),
);
manifest.sort((a, b) => a.family.localeCompare(b.family));
await writeFile(
  resolve(fontRoot, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);
await writeFile(
  resolve(fontRoot, "fonts.css"),
  (
    await Promise.all(
      manifest.map((f) => readFile(resolve(root, "public" + f.css), "utf8")),
    )
  ).join("\n"),
);
console.log(
  `Completado: ${manifest.length} familias con licencias. Sin dependencias remotas en CSS.`,
);
