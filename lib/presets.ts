import { profiles as catalog } from "../data/profiles";
import { checkSelection, getSpecies, MAX_SPECIES } from "./checker";
import type { SpeciesProfile } from "./types";

export interface SpeciesPreset {
  id: string;
  label: string;
  detail: string;
  slugs: string[];
  gallons: number | null;
}

interface PresetSpec {
  id: string;
  label: string;
  gallons: number | null;
  seeds: string[];
}

/**
 * Seed lists are preferences only. A species is kept when it is in the dataset
 * and checkSelection still calls the group Compatible. A betta group is not
 * seeded: every betta pairing in this dataset is Caution or Not compatible.
 */
const PRESET_SPECS: PresetSpec[] = [
  {
    id: "community-tetra",
    label: "Community tetra tank",
    gallons: 40,
    seeds: ["neon-tetra", "cardinal-tetra", "ember-tetra", "harlequin-rasbora", "bronze-corydoras"],
  },
  {
    id: "livebearer",
    label: "Livebearer tank",
    gallons: 20,
    seeds: ["guppy", "platy", "endlers-livebearer", "variable-platy", "least-killifish"],
  },
];

export function assemblePreset(spec: PresetSpec, list: SpeciesProfile[] = catalog): SpeciesPreset | null {
  const chosen: string[] = [];
  for (const slug of spec.seeds) {
    if (!getSpecies(slug, list) || chosen.includes(slug)) continue;
    if (chosen.length >= MAX_SPECIES) break;
    const trial = [...chosen, slug];
    if (trial.length === 1) {
      if (spec.gallons != null) {
        const alone = checkSelection(trial, spec.gallons, list);
        if (alone.verdict === "incompatible" || alone.verdict === "caution") continue;
      }
      chosen.push(slug);
      continue;
    }
    if (checkSelection(trial, spec.gallons, list).verdict === "compatible") chosen.push(slug);
  }
  if (chosen.length < 2) return null;
  if (checkSelection(chosen, spec.gallons, list).verdict !== "compatible") return null;
  const names = chosen.map((slug) => getSpecies(slug, list)?.commonName ?? slug);
  const size = spec.gallons == null ? "Any size" : `${spec.gallons} gal`;
  return {
    id: spec.id,
    label: spec.label,
    detail: `${names.join(", ")} · ${size}`,
    slugs: chosen,
    gallons: spec.gallons,
  };
}

export function buildSpeciesPresets(list: SpeciesProfile[] = catalog): SpeciesPreset[] {
  return PRESET_SPECS.flatMap((spec) => {
    const preset = assemblePreset(spec, list);
    return preset ? [preset] : [];
  });
}
