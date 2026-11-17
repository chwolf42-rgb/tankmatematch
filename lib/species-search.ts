type Searchable = {
  slug: string;
  commonName: string;
  scientificName: string;
  aliases: string[];
};

/** Type-ahead stays closed until the query is at least this long. */
export const MIN_SPECIES_QUERY = 3;

export function speciesMatchesQuery(animal: Searchable, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (needle.length < MIN_SPECIES_QUERY) return false;
  const haystack = [animal.commonName, animal.scientificName, animal.slug, ...animal.aliases].join(" ").toLowerCase();
  return haystack.includes(needle);
}

/** Case-insensitive substring match on common name, scientific name, slug, and aliases. */
export function searchSpecies<T extends Searchable>(query: string, list: T[], exclude: readonly string[] = []): T[] {
  const skipped = new Set(exclude);
  return list.filter((animal) => !skipped.has(animal.slug) && speciesMatchesQuery(animal, query));
}
