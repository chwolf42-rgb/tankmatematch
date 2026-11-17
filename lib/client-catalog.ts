import type { SpeciesProfile } from "./types";

/** Fields the checker never reads. They stay on the species page, not in the browser catalog. */
const OMITTED = [
  "sources",
  "uncertainties",
  "origin",
  "diet",
  "adultSizeNote",
  "sourceGap",
  "lastVerified",
] as const;

export type PickerAnimal = {
  slug: string;
  commonName: string;
  scientificName: string;
  aliases: string[];
  family: string;
  temperament: SpeciesProfile["temperament"];
  kind: string;
};

export function toClientProfile(animal: SpeciesProfile): SpeciesProfile {
  const copy: SpeciesProfile = { ...animal };
  for (const key of OMITTED) {
    delete (copy as unknown as Record<string, unknown>)[key];
  }
  return copy;
}

export function toPickerAnimal(animal: SpeciesProfile): PickerAnimal {
  return {
    slug: animal.slug,
    commonName: animal.commonName,
    scientificName: animal.scientificName,
    aliases: animal.aliases,
    family: animal.family,
    temperament: animal.temperament,
    kind: animal.kind ?? "fish",
  };
}
