import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createElement as h } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { species } from "../data/species";
import { speciesFactLine } from "../lib/seo-copy";

const WIDTH = 1200;
const HEIGHT = 630;
const STYLE = "og-v2";
const OUT_DIR = join("public", "og");

function titleSize(name: string): number {
  if (name.length > 28) return 52;
  if (name.length > 18) return 64;
  return 76;
}

function card(commonName: string, scientificName: string, facts: string) {
  return h(
    "div",
    {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection: "column",
        background: "#08343c",
        color: "#ffffff",
        padding: "68px 76px",
        fontFamily: "Inter",
      },
    },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", fontSize: 28, fontWeight: 600, letterSpacing: 3, color: "#7ddee4" } },
      "TANK MATE MATCH",
    ),
    h("div", { style: { display: "flex", height: 210 } }),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: titleSize(commonName),
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -1,
            maxWidth: 1048,
          },
        },
        commonName,
      ),
      h(
        "div",
        { style: { display: "flex", marginTop: 14, fontSize: 32, color: "#e6f3f4", maxWidth: 1048 } },
        scientificName,
      ),
      h("div", { style: { display: "flex", marginTop: 22, width: 128, height: 8, borderRadius: 4, background: "#7ddee4" } }),
      h(
        "div",
        { style: { display: "flex", marginTop: 22, fontSize: 30, lineHeight: 1.25, color: "#e6f3f4", maxWidth: 1048 } },
        facts,
      ),
    ),
  );
}

const regular = readFileSync(join("assets", "fonts", "Inter-Regular.ttf"));
const semibold = readFileSync(join("assets", "fonts", "Inter-SemiBold.ttf"));
const fonts = [
  { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
  { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
];

const signature = createHash("sha256")
  .update(STYLE)
  .update(String(regular.length))
  .update(String(semibold.length))
  .update(species.map((animal) => `${animal.slug}|${animal.commonName}|${animal.scientificName}|${speciesFactLine(animal)}`).join("\n"))
  .digest("hex");

mkdirSync(OUT_DIR, { recursive: true });
const stampPath = join(OUT_DIR, ".stamp");
const ready = existsSync(stampPath) && readFileSync(stampPath, "utf8") === signature && species.every((animal) => existsSync(join(OUT_DIR, `${animal.slug}.png`)));
if (ready) {
  console.log(`OG images already current (${species.length})`);
  process.exit(0);
}

async function writeImages(): Promise<void> {
  const started = Date.now();
  for (const animal of species) {
    const svg = await satori(card(animal.commonName, animal.scientificName, speciesFactLine(animal)), {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    });
    const rendered = new Resvg(svg, { font: { loadSystemFonts: false } }).render();
    if (rendered.width !== WIDTH || rendered.height !== HEIGHT) {
      throw new Error(`${animal.slug} rendered at ${rendered.width}x${rendered.height}`);
    }
    writeFileSync(join(OUT_DIR, `${animal.slug}.png`), rendered.asPng());
  }
  writeFileSync(stampPath, signature);
  console.log(`Wrote ${species.length} OG images in ${((Date.now() - started) / 1000).toFixed(1)}s`);
}

writeImages().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
