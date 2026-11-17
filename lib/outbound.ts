const AMAZON_SEARCH = "https://www.amazon.com/s";
const MAPS_SEARCH = "https://www.google.com/maps/search/";

/** Amazon search with only the keyword. No associate tag and no other parameters. */
export function amazonSearchUrl(query: string): string {
  const url = new URL(AMAZON_SEARCH);
  url.searchParams.set("k", query.trim());
  const keys = [...url.searchParams.keys()];
  if (keys.length !== 1 || keys[0] !== "k") {
    throw new Error(`Shop search picked up an extra parameter: ${keys.join(",")}`);
  }
  return url.toString();
}

/** Plain Google Maps search. Stock is not part of the query. */
export function mapsSearchUrl(speciesName: string): string {
  const url = new URL(MAPS_SEARCH);
  url.searchParams.set("api", "1");
  url.searchParams.set("query", `aquarium store near me ${speciesName}`.trim());
  return url.toString();
}

export function destinationHost(href: string): string {
  try {
    return new URL(href).host;
  } catch {
    return "";
  }
}

/** True when a JSX `<a>` tag points off this site, including an unbound href expression. */
export function anchorIsExternal(tag: string): boolean {
  const match = tag.match(/href\s*=\s*(\{[^}]*\}|"[^"]*"|'[^']*')/);
  if (!match) return false;
  const raw = match[1] ?? "";
  if (raw.startsWith("{")) {
    const expr = raw.slice(1, -1).trim();
    const literal = expr.match(/^["']([^"']*)["']$/);
    if (!literal) return true;
    return /^(https?:)?\/\//i.test(literal[1] ?? "");
  }
  return /^(https?:)?\/\//i.test(raw.slice(1, -1));
}

export function rawExternalAnchors(source: string): string[] {
  const clean = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
  const hits: string[] = [];
  let index = 0;
  while (index < clean.length) {
    const at = clean.indexOf("<a", index);
    if (at === -1) break;
    const next = clean[at + 2] ?? "";
    if (!/[\s>/]/.test(next)) {
      index = at + 2;
      continue;
    }
    const end = clean.indexOf(">", at);
    if (end === -1) break;
    const tag = clean.slice(at, end + 1);
    if (anchorIsExternal(tag)) hits.push(tag.replace(/\s+/g, " ").slice(0, 180));
    index = end + 1;
  }
  return hits;
}
