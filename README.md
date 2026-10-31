# Tank Mate Match

A static freshwater tank-mate checker. The published set is 100 freshwater species. The original ten are betta, neon tetra, guppy, bronze corydoras, cherry shrimp, platy, zebra danio, harlequin rasbora, bristlenose pleco, and honey gourami. The other ninety are generated from Seriously Fish and FishBase profiles by `scripts/build_added_species.py`.

The site is a Next.js app built as static HTML (`output: "export"`). The checker runs in the browser. Species records are TypeScript in the repo. There is no database.

## Scripts

```bash
npm install
npm test
npm run dev
npm run build
```

`npm test` checks the known pairs (betta + guppy is Not compatible, neon tetra + bronze corydoras is Compatible) and the shape of every record. `npm run build` writes the site to `out/`.

Do not point a production domain at this until someone who keeps fish has read the species records against the cited pages.

## How a verdict is reached

The checker uses the aquarium range from Seriously Fish when that profile exists. FishBase is shown on the page when it disagrees, and it is not averaged in. Rules and the footprint table are documented on the methodology page and in `lib/checker.ts`.

Compatible means the published ranges overlap and no behaviour rule fired. Caution means a narrow overlap or a qualified warning. Not compatible means the ranges do not meet, a source names a specific conflict, or the tank is below a published minimum.

An entry in `incompatibleWith` or `cautionWith` beats the generic behaviour rules. It does not beat water chemistry.

## How to add a species

1. Add an object to the `species` array in `data/species.ts`. The `Species` type in `lib/types.ts` is the schema. `slug` is the URL and the value used in `?f=`.
2. Fill temperature, pH, hardness, adult size, tank minimum, group size, and the behaviour flags from at least two sources. Put the URLs in `sources` and the date in `lastVerified`.
3. If the sources disagree, keep both in `uncertainties` and say which figure the checker uses. Do not invent a midpoint. If a field has no published number, leave it `null`. The bristlenose hardness field is the pattern.
4. Write `lede`, `husbandry`, and `tankMateIntro` for that animal. Do not copy another species and swap the name. Add a FAQ only when the answer is a fact from the sources.
5. Add a pair override only when a source describes that specific pairing and the generic rules would get it wrong. Give the override a reason in `detail`.
6. Run `npm test` and `npm run build`. Species, tank-mate, and size pages are generated from the record. A size page appears only when the verdict list changes between 10, 20, 29, and 40 gallons.

Search matches `commonName`, `scientificName`, `aliases`, and `slug`.

Affiliate slots are gated by `showAffiliateSlots` in `lib/site.ts`. Leave it `false` until there is a real program and a disclosure above the first link.
