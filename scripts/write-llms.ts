import { mkdirSync, writeFileSync } from "node:fs";
import { species } from "../data/species";
import { publishedSizeGallons } from "../lib/checker";
import { formatRange } from "../lib/format";
import { absoluteUrl } from "../lib/seo";
import { site, VERIFIED_ON } from "../lib/site";

const pages = [
  ["/", "Home", "Checker embedded on the home page, plus links to every species."],
  ["/checker", "Tank mate checker", "Compare two or more species. The selection is stored in the URL."],
  ["/species", "Species index", "The ten freshwater animals in this version."],
  ["/methodology", "How a verdict is reached", "Sources, disagreements, and the Compatible / Caution / Not compatible rules."],
  ["/about", "About", "What the site is for."],
  ["/privacy", "Privacy", "No accounts and no analytics in this version."],
  ["/affiliate-disclosure", "Affiliate disclosure", "No affiliate links or ads in this version."],
] as const;

function speciesBlock(full: boolean): string {
  return species
    .map((animal) => {
      const hardness = animal.hardnessDGH ? formatRange(animal.hardnessDGH, "dGH") : "not stated";
      const tank = animal.minTank.gallons != null ? `${animal.minTank.gallons} US gal` : animal.minTank.stated;
      const lines = [
        `### ${animal.commonName} (${animal.scientificName})`,
        "",
        `- Species: ${absoluteUrl(`/species/${animal.slug}`)}`,
        `- Tank mates: ${absoluteUrl(`/tank-mates/${animal.slug}`)}`,
        `- Temperature: ${formatRange(animal.tempC, "°C")} (${formatRange(animal.tempF, "°F")})`,
        `- pH: ${animal.pH.min}–${animal.pH.max}`,
        `- Hardness: ${hardness}`,
        `- Adult size: ${animal.adultSizeMm} mm (${animal.adultSizeIn} in)`,
        `- Minimum tank: ${tank}`,
        `- Minimum group: ${animal.minGroup ?? "not stated"}`,
        `- Care: ${animal.careLevel}`,
        `- Verified: ${animal.lastVerified}`,
      ];
      if (full) {
        lines.push(`- Summary: ${animal.lede.replace(/\s+/g, " ")}`);
        lines.push("- Sources:");
        for (const source of animal.sources) {
          lines.push(`  - ${source.label}: ${source.url}`);
        }
        const sizes = publishedSizeGallons(animal.slug);
        if (sizes.length > 0) {
          lines.push(`- Size pages: ${sizes.map((gallons) => absoluteUrl(`/tank-mates/${animal.slug}/${gallons}-gallon`)).join(", ")}`);
        }
      }
      return lines.join("\n");
    })
    .join("\n\n");
}

const summary = `# ${site.name}

> ${site.description}

The canonical site is ${absoluteUrl("/")} (apex, no www). Facts are written in the HTML of each species and tank-mate page, with the source named on the page. The checker itself runs in the browser. This file was generated from the species records on ${VERIFIED_ON}.

## Key pages

${pages.map(([path, title, detail]) => `- [${title}](${absoluteUrl(path)}): ${detail}`).join("\n")}

## Species

${species.map((animal) => `- [${animal.commonName}](${absoluteUrl(`/species/${animal.slug}`)}) (${animal.scientificName}): ${formatRange(animal.tempF, "°F")}, pH ${animal.pH.min}–${animal.pH.max}. [Tank mates](${absoluteUrl(`/tank-mates/${animal.slug}`)}).`).join("\n")}
`;

const full = `${summary}
## Species records

${speciesBlock(true)}
`;

mkdirSync("public", { recursive: true });
writeFileSync("public/llms.txt", summary);
writeFileSync("public/llms-full.txt", full);
console.log(`Wrote public/llms.txt (${summary.length} chars) and public/llms-full.txt (${full.length} chars)`);
