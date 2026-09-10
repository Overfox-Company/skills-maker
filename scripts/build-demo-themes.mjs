import { readFileSync, writeFileSync } from "node:fs";
import YAML from "yaml";

// Only each demo's own DESIGN.md determines its resolved visual tokens.
for (const name of ["ecommerce", "delivery", "videos"]) {
  const base = new URL(`../src/demo/${name}/`, import.meta.url);
  const document = readFileSync(new URL("DESIGN.md", base), "utf8");
  const design = YAML.parse(document.split("---")[1]);
  const tokens = { ...design.resolvedCss };
  for (const [key, value] of Object.entries(
    design.components.content.product.style,
  )) {
    tokens[`--product-${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`] =
      value;
  }
  const css = `/* Generated from this folder's DESIGN.md. Run npm run demos:tokens. */\n.demo-${name} {\n  color-scheme: ${design.mode};\n${Object.entries(
    tokens,
  )
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n")}\n}\n`;
  writeFileSync(new URL("theme.css", base), css);
}
