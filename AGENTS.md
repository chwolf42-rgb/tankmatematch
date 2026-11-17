# Tank Mate Match

Read this before changing the site. `README.md` is older: it still says 300 species and tells you to append a record to `data/species.ts`. Neither is how the code works now.

## Mission

Tank Mate Match (https://tankmatematch.com) answers whether freshwater animals can live together, using numbers a reader can check. The site description in `lib/site.ts` is the promise: every range is tied to a named source, and the result says why.

The owner is running a 90-day Google-traffic test of that promise. The repo does not store a start date, a traffic target, or an analytics goal. Treat the test as the reason every public page has to be indexable, specific, and sourced. A thin or invented page does not help that test.

## Sourcing

- Use a named source a reader can open. Seriously Fish and FishBase are the usual pair for fish. Invertebrates use the papers and fact sheets already cited on those records (USGS, USFWS, GBIF, PlanetCatfish, and the papers named in `data/invert-profiles.ts`).
- Never invent a temperature, pH, hardness, adult size, tank minimum, or group size. If a source does not print the number, store `null` and say so. Do not average two sources. When they disagree, keep both in `uncertainties` and say which figure the checker uses. The checker follows the Seriously Fish aquarium range when that profile exists.
- Skip the species, or the topic, when you cannot cite the fact. A missing plant list is better than a guessed one.
- Label judgment calls in the text. These are judgments, not measurements: the betta Works if families (Danionidae read as the cyprinids Seriously Fish named, and "small" read as no longer than the betta's 70 mm standard length); `shrimpRisk` scores; snails at or under `SMALL_SNAIL_MM` (40) treated like that shrimp score; crayfish `eatsTankmates`; the inches-per-gallon stocking line in `lib/planner.ts`.
- No thin AI filler. Do not copy one species page and swap the name. Do not add an FAQ whose answer is not already in the sources or the checker.

## How the site is built

Next.js static export (`output: "export"` in `next.config.ts`). `npm run build` writes `out/`. `prebuild` runs `scripts/write-llms.ts`. The Next config then runs `scripts/write-og.ts`, which writes gitignored PNGs under `public/og/`.

The checker runs in the browser. Species records are TypeScript, not a database. There is no Spanish locale and no hreflang.

`npm test` is `tsx --test lib/*.test.ts`.

## Data

`data/species.ts` builds the `species` array. It does not hold the records.

Profiles, one object per animal, are concatenated in `data/profiles.ts`:

- `data/core-profiles.ts` and `data/core-copy.ts` are the original hand-written set.
- `data/added-profiles.ts`, `data/wave2-profiles.ts`, and `data/wave3-profiles.ts`, with matching `*-copy.ts` files, are the generated fish waves. `python3 scripts/build_added_species.py wave3` rewrites only wave 3.
- `data/invert-profiles.ts` and `data/invert-copy.ts` are the invertebrates.

Copy (`lede`, `husbandry`, `tankMateIntro`, `faqs`) must exist for every profile slug. `data/species.ts` throws if a profile has no copy. An empty `tankMateIntro` is replaced with a generated sentence from `checkSelection`.

The schema is `SpeciesProfile` and `Species` in `lib/types.ts`. `kind` is `fish` when omitted. Other kinds are `shrimp`, `snail`, `crayfish`, `crab`, and `other-invertebrate`. `shrimpRisk: "not-applicable"` means this animal is the shrimp.

Pairing questions live in `data/pairing-pages.ts`. Routes are `app/can/[slug]/page.tsx`. `lib/pairing.ts` calls `checkSelection` for the verdict. The page must not invent a second rule.

There is no `data/needs.ts` on this branch. A "What it needs" section is the shape in the open shop-links pull request, not a file here. See below.

## Checker

`lib/checker.ts` is the only verdict engine. `checkSelection(slugs, tankGallons)` returns the pair reports and the tank fit.

Chemistry uses published temperature, pH, and hardness. A missing range is a note (`temp-unknown`, `ph-unknown`, `hardness-unknown`), not a failure and not a filled-in number. No overlap is Not compatible. A narrow overlap is Caution: under `TEMP_CAUTION_BELOW_F` (4°F), `PH_CAUTION_BELOW` (0.6), or `HARDNESS_CAUTION_BELOW` (3 dGH).

Behaviour runs after chemistry. An `incompatibleWith` or `cautionWith` override replaces the generic behaviour rules for that pair. It does not replace chemistry. `worst()` ranks Not compatible above Caution, Caution above Works if, and Works if above Compatible.

Works if is not a global tier for every semi-aggressive fish. It fires only when that animal has a `worksIf` rule and the partner matches it (family, max length, not long-finned, not a current-loving fish, and a fish). Only the betta record has `worksIf`. Other semi-aggressive fish stay at Caution.

Other behaviour codes include adult-shrimp predation, shrimplets, small-snail predation, snail-eating snails, crayfish prey, trailing fins, surface territory, flow, and salinity. Copper sensitivity is a stocking note, not a pair verdict.

Tank size is separate. `publishedSizeGallons` and `tankFit` use the published minimum. The planner in `lib/planner.ts` (`planAdditions`) lists only Compatible, then Works if, for the whole selection. Its inch total is the old inches-per-gallon shortcut and must stay labeled as an estimate.

Chips use `speciesSelectionStatus`: the worst pairing, plus that animal's own tank minimum. A green chip is not a whole-tank stocking approval.

## How to add a species

1. Add the profile to the right file (`core`, a wave, or `invert-profiles.ts`) and the matching copy file. Do not push a raw object into `data/species.ts`.
2. Cite adult size and a temperature range from a named source before the animal is added. Add pH and hardness only where that source, or a second named source, prints them. Leave the rest `null`.
3. Set temperament from the source's own assessment. Set `shrimpRisk` and the other behaviour flags from the source text, and say in `shrimpRiskNote` that the score is a judgment when it is one.
4. Write original `lede` and `husbandry`. Add an FAQ only when the answer is a sourced fact.
5. Add an override only when a source names that specific pairing and the generic rules would get it wrong.
6. Extend the count assertions in `lib/checker.test.ts`, `lib/invert.test.ts`, and `lib/review.test.ts` if those tests lock `species.length`.
7. Run `npm test` and `npm run build`. The build regenerates `public/llms.txt`, `public/llms-full.txt`, species pages, tank-mate pages, and `/og/{slug}.png`.

Search matches `commonName`, `scientificName`, `aliases`, and `slug` after 3 characters.

## How to add a pairing page

1. Add one object to `data/pairing-pages.ts`: `slug`, `title` (60 characters or fewer), `h1`, the two species slugs, a unique `summary`, a unique `context` of sourced prose, and at least two FAQs. Both animals must already be in `species`.
2. Do not store a verdict on the object. `pairingVerdict` in `lib/pairing.ts` reads `checkSelection`. The first sentence on `app/can/[slug]/page.tsx` is that label and the matching reason.
3. Keep the page from being a duplicate. Different pairs that share a rule still need their own context. Do not add a page whose only difference is the title.
4. `lib/pairing.test.ts` locks the expected verdict, unique copy, and a 140–160 character description. Update that expected map when the new page's checker result is the one you mean.
5. Sitemap and the llms files pick the page up from `pairingPages`. Do not hand-edit `public/llms.txt`. Run the build so `scripts/write-llms.ts` rewrites both llms files and `scripts/write-og.ts` writes `public/og/pair-{slug}.png`.
6. Run `npm test` and `npm run build`.

## How to add a "What it needs" section

This section is not on main. The open shop-links pull request is the version to follow once it is merged: `data/needs.ts`, `components/WhatItNeeds.tsx`, and a shop search with only an Amazon `k` parameter. Until that lands, do not add a second shop-link component.

When you do add one:

1. Only include diet, plants or cover, and decor when a named source states them. Skip the topic otherwise.
2. Cite that source on the card. Add an FAQ only for a question the source answers, and put it in the same FAQPage as the species FAQs.
3. Shop links are plain searches by item type, with no affiliate tag, and a one-line note that they open a third-party shop and that stock is not checked.
4. Mention the section from `scripts/write-llms.ts` so `llms.txt` and `llms-full.txt` stay generated.

## SEO and AI search

Every new public URL needs all of the following. `lib/seo.ts` `pageMeta` sets the canonical and the Open Graph and Twitter cards. Titles stay at or under 60 characters. Descriptions stay between 140 and 160 (`fitDescription` in `lib/seo-copy.ts`). Do not put "Sourced" in a tank-mate title, and do not publish a title whose count is zero.

- Title, meta description, one H1, and a canonical path with no trailing slash. The site root stays `/`.
- The answer in the first paragraph, in words a search engine can quote.
- Internal links to the related species, tank-mate, checker, or planner pages.
- FAQPage JSON-LD (`faqPage` in `lib/jsonld.ts`) when the page has FAQs. Visible FAQ text and the JSON-LD must match.
- An OG image. Species pages use `/og/{slug}.png`. Pairing pages use `/og/pair-{slug}.png`. The default `/og.png` is only the fallback.
- A sitemap entry from `app/sitemap.ts`. `lib/seo.test.ts` rebuilds the expected set; update that test in the same change. `/my-tanks` stays out of the sitemap.
- `llms.txt` and `llms-full.txt` regenerated by `scripts/write-llms.ts`, then committed.
- `app/robots.ts` allows `*`, GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, and Applebot-Extended, and points at the sitemap.

Thin tank-size pages stay `noindex, follow`. `lib/size-index.ts` indexes only the smallest published gallon size where that animal itself does not fit. Other size URLs stay reachable and canonicalize back to the unsized tank-mate page. `/my-tanks` and the 404 page are also noindex.

Performance: species and tank-mate pages should stay near 125 kB of first-load JavaScript. That shell is shared. Do not import the species catalog into the root layout. The checker is larger on purpose because the picker ships the catalog. A new client component on a content page has to stay tiny.

## Outbound links

Main still has ordinary external anchors on source tables, the privacy page, and the share buttons. Do not add more of them.

The required pattern is `TrackedLink` from the open shop-links pull request. A click calls `track('outbound_click', { page, item, linkType, destHost, region })` from `@vercel/analytics`. The event carries the page path, a short item id, the kind of link, the destination host, and the region. It does not carry a name, an email, or the search text, and the component does not set its own cookie. If you add outbound links before that pull request merges, bring that component across instead of writing a second tracker.

Links stay plain. No affiliate tag, no associate parameter, and no commission wording, until the owner says otherwise. `showAffiliateSlots` in `lib/site.ts` stays `false`. `AffiliateSlot` renders nothing while it is false.

`/find-a-shop` and the per-species map button are part of that same open pull request, not this branch. A map link is a Google Maps search for aquarium stores. It must say that stock is not checked.

## Visitor data

Without sign-in, tanks are stored in this browser under `tankmatematch.tanks` (`lib/saved-tanks.ts`). The required sentence is `BROWSER_ONLY_NOTICE` in `lib/notices.ts`. Use that sentence. Do not paraphrase it.

Sign-in is optional. It is hidden unless `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set. The flow is email and a 6-digit code. There is no password and no phone number. Signed-in tanks go to the `tanks` table in `supabase/migrations/20261102160000_create_tanks.sql`, written by the browser Supabase client so the site can stay a static export. Row level security limits each person to their own rows.

`/privacy` has to keep describing localStorage, the key name, the "never leaves" line for browser-only tanks, and that the email is used only for sign-in and saved tanks. `lib/seo.test.ts` locks those phrases. Vercel Web Analytics is already named on that page. `/my-tanks` stays noindex because it is on-device data.

## Workflow

One change, one branch, one preview pull request. The owner looks at the Vercel preview. Merge only when the owner explicitly says to merge. Do not merge your own pull request.

Before opening the pull request, run `npm test` and `npm run build`. Put the counts, the skipped items, and the judgment calls in the pull request description.

Generated files (`public/llms.txt`, `public/llms-full.txt`, and anything else a script writes) are regenerated, not hand-merged. If main moves under the branch, merge or rebase, then run the generators again.

## Planned, not built

- Supabase-backed page content. Today Supabase stores saved tanks only. Species copy stays in the TypeScript files. If content moves later, the public pages still have to be prerendered for the sitemap and the HTML answers.
- Community shared tanks. Saved tanks are private to the browser or to the signed-in user. There is no public tank gallery.
- A Spanish version. The UI is English (`en_US` on the Open Graph tags). There is no `hreflang` and no locale route. Add those together when a translation exists. Do not invent a Spanish page with no sourced text.
