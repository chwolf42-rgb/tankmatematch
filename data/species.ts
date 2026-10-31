import { checkSelection } from "../lib/checker";
import type { Species, SpeciesProfile } from "../lib/types";
import { addedCopy } from "./added-copy";
import { coreCopy } from "./core-copy";
import { profiles } from "./profiles";

const copyBySlug = { ...coreCopy, ...addedCopy };

function mateIntro(animal: SpeciesProfile, list: SpeciesProfile[]): string {
  const mates = list
    .filter((other) => other.slug !== animal.slug)
    .map((other) => ({
      other,
      verdict: checkSelection([animal.slug, other.slug], null, list).verdict,
    }));
  const good = mates.filter((item) => item.verdict === "compatible").slice(0, 3);
  const blocked = mates.find((item) => item.verdict === "incompatible");
  const caution = mates.find((item) => item.verdict === "caution");
  const sentences: string[] = [];
  if (good.length > 0) {
    const names = good.map((item) => item.other.commonName);
    const listed = names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
    sentences.push(
      `${listed} overlap ${animal.commonName} on the published temperature, pH, and hardness ranges, and none of the behaviour rules fire.`,
    );
  } else {
    sentences.push(`None of the other species in this set clear every chemistry and behaviour rule with ${animal.commonName}.`);
  }
  if (blocked) {
    sentences.push(`${blocked.other.commonName} is Not compatible. The tank-mate page names the rule that failed.`);
  } else if (caution) {
    sentences.push(`${caution.other.commonName} is Caution: the ranges only meet at an edge, or a behaviour note applies.`);
  }
  sentences.push("Those results ignore gallons. The base length on this page can still rule a tank out.");
  return sentences.join(" ");
}

export const species: Species[] = profiles.map((profile) => {
  const prose = copyBySlug[profile.slug];
  if (!prose) throw new Error(`Missing page copy for ${profile.slug}`);
  const tankMateIntro = prose.tankMateIntro.trim() ? prose.tankMateIntro : mateIntro(profile, profiles);
  return { ...profile, ...prose, tankMateIntro };
});

export function searchSpecies(query: string): Species[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return species;
  return species.filter((item) => {
    const haystack = [item.commonName, item.scientificName, item.slug, ...item.aliases].join(" ").toLowerCase();
    return haystack.includes(needle);
  });
}
