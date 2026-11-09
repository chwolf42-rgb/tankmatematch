import { getSpecies, publishedSizeGallons, tankFit } from "./checker";

/**
 * The one tank-size URL worth indexing for a species: the smallest published
 * size where the fish itself does not fit. That page answers "will this fish
 * fit in a N-gallon tank?" The other size URLs repeat the mate list with a
 * different gallon filter, so they stay available and out of the index.
 */
export function indexableSizeGallon(slug: string): number | null {
  const animal = getSpecies(slug);
  if (!animal) return null;
  for (const gallons of publishedSizeGallons(slug)) {
    const blocked = tankFit(animal, gallons).reasons.some((reason) => reason.severity === "incompatible");
    if (blocked) return gallons;
  }
  return null;
}

export function sizePageIndexing(slug: string, gallons: number): { index: boolean; canonicalPath: string } {
  const index = indexableSizeGallon(slug) === gallons;
  return {
    index,
    canonicalPath: index ? `/tank-mates/${slug}/${gallons}-gallon` : `/tank-mates/${slug}`,
  };
}
