import { profiles } from "../data/profiles";
import type { SpeciesProfile } from "./types";

/** Type-ahead stays closed until the query is at least this long. */
export const MIN_SPECIES_QUERY = 3;

export function speciesMatchesQuery(animal: SpeciesProfile, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (needle.length < MIN_SPECIES_QUERY) return false;
  const haystack = [animal.commonName, animal.scientificName, animal.slug, ...animal.aliases].join(" ").toLowerCase();
  return haystack.includes(needle);
}

/** Case-insensitive substring match on common name, scientific name, slug, and aliases. */
export function searchSpecies(
  query: string,
  list: SpeciesProfile[] = profiles,
  exclude: readonly string[] = [],
): SpeciesProfile[] {
  const skipped = new Set(exclude);
  return list.filter((animal) => !skipped.has(animal.slug) && speciesMatchesQuery(animal, query));
}
