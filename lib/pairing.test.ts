import assert from "node:assert/strict";
import test from "node:test";
import { pairingPages } from "../data/pairing-pages";
import { checkSelection } from "./checker";
import { pairingLabel, pairingPageCopy, pairingVerdict } from "./pairing";

const expectedVerdict = {
  "bettas-cherry-shrimp": "incompatible",
  "bettas-amano-shrimp": "incompatible",
  "bettas-mystery-snails": "caution",
  "bettas-assassin-snails": "incompatible",
  "bettas-neon-tetras": "caution",
  "bettas-zebra-danios": "works-if",
  "bettas-guppies": "incompatible",
  "bettas-harlequin-rasboras": "works-if",
  "bettas-corydoras": "caution",
  "bettas-honey-gouramis": "incompatible",
  "cherry-shrimp-neon-tetras": "caution",
  "assassin-snails-mystery-snails": "incompatible",
  "bettas-bristlenose-plecos": "caution",
} as const;

test("pairing pages match the checker and are not copies of each other", () => {
  assert.equal(pairingPages.length, 13);
  assert.ok(pairingPages.length >= 10 && pairingPages.length <= 15);
  const contexts = new Set(pairingPages.map((page) => page.context));
  assert.equal(contexts.size, pairingPages.length);
  const titles = new Set(pairingPages.map((page) => page.title));
  assert.equal(titles.size, pairingPages.length);
  const summaries = new Set(pairingPages.map((page) => page.summary));
  assert.equal(summaries.size, pairingPages.length);
  const descriptions = new Set(pairingPages.map((page) => pairingPageCopy(page).description));
  assert.equal(descriptions.size, pairingPages.length);
  for (const page of pairingPages) {
    assert.ok(page.context.length > 120, page.slug);
    assert.ok(page.faqs.length >= 2, page.slug);
    const { verdict, reason } = pairingVerdict(page);
    assert.ok(reason.length > 40, page.slug);
    const live = checkSelection([page.a, page.b], null).verdict;
    assert.equal(verdict, live, page.slug);
    assert.equal(verdict, expectedVerdict[page.slug as keyof typeof expectedVerdict], page.slug);
    assert.ok(page.title.length <= 60, page.title);
    const copy = pairingPageCopy(page);
    assert.equal(copy.title, page.title);
    assert.ok(copy.description.length >= 140 && copy.description.length <= 160, `${page.slug} ${copy.description.length}`);
    assert.match(copy.description, new RegExp(pairingLabel(verdict).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(copy.description, new RegExp(page.summary.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(copy.description, /\bthe\.$/);
  }
});
