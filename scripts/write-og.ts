import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createElement as h } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { pairingPages } from "../data/pairing-pages";
import { species } from "../data/species";
import { pairingLabel, pairingVerdict } from "../lib/pairing";
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
async function writeCard(file: string, commonName: string, scientificName: string, facts: string): Promise<void> {
  const svg = await satori(card(commonName, scientificName, facts), {
    width: WIDTH,
    height: HEIGHT,
    fonts,
  });
  const rendered = new Resvg(svg, { font: { loadSystemFonts: false } }).render();
  if (rendered.width !== WIDTH || rendered.height !== HEIGHT) {
    throw new Error(`${file} rendered at ${rendered.width}x${rendered.height}`);
  }
  writeFileSync(file, rendered.asPng());
}

function pairCard(question: string, verdict: string, facts: string) {
  const size = question.length > 40 ? 42 : question.length > 32 ? 50 : 60;
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
    h("div", { style: { display: "flex", height: 150 } }),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h(
        "div",
        {
          style: {
            display: "flex",
            fontSize: size,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 1048,
          },
        },
        question,
      ),
      h(
        "div",
        { style: { display: "flex", marginTop: 18, fontSize: 36, color: "#e6f3f4", maxWidth: 1048 } },
        verdict,
      ),
      h("div", { style: { display: "flex", marginTop: 22, width: 128, height: 8, borderRadius: 4, background: "#7ddee4" } }),
      h(
        "div",
        { style: { display: "flex", marginTop: 22, fontSize: 28, lineHeight: 1.3, color: "#e6f3f4", maxWidth: 1048 } },
        facts,
      ),
    ),
  );
}

async function writePairImages(): Promise<number> {
  let written = 0;
  for (const page of pairingPages) {
    const file = join(OUT_DIR, `pair-${page.slug}.png`);
    if (existsSync(file)) continue;
    const { verdict } = pairingVerdict(page);
    const svg = await satori(pairCard(page.h1, pairingLabel(verdict), page.summary), {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    });
    const rendered = new Resvg(svg, { font: { loadSystemFonts: false } }).render();
    if (rendered.width !== WIDTH || rendered.height !== HEIGHT) {
      throw new Error(`${file} rendered at ${rendered.width}x${rendered.height}`);
    }
    writeFileSync(file, rendered.asPng());
    written += 1;
  }
  return written;
}

const ready = existsSync(stampPath) && readFileSync(stampPath, "utf8") === signature && species.every((animal) => existsSync(join(OUT_DIR, `${animal.slug}.png`)));
if (ready) {
  writePairImages()
    .then((written) => {
      console.log(`OG images already current (${species.length}); pairing cards written ${written}`);
    })
    .catch((error: unknown) => {
      console.error(error);
      process.exit(1);
    });
} else {

async function writeImages(): Promise<void> {
  const started = Date.now();
  for (const animal of species) {
    await writeCard(join(OUT_DIR, `${animal.slug}.png`), animal.commonName, animal.scientificName, speciesFactLine(animal));
  }
  const pairs = await writePairImages();
  writeFileSync(stampPath, signature);
  console.log(`Wrote ${species.length} species OG images and ${pairs} pairing cards in ${((Date.now() - started) / 1000).toFixed(1)}s`);
}

writeImages().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
}
