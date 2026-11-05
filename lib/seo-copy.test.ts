import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { species } from "../data/species";
import { checkSelection } from "./checker";
import { faqPage } from "./jsonld";
import { checkerFaqs, checkerIntroParagraphs, isFish, tankMateFaqs, tankMatePageCopy } from "./seo-copy";

const verdictLabel = {
  compatible: "Compatible",
  caution: "Caution",
  incompatible: "Not compatible",
} as const;

test("tank-mate FAQs match the checker and the visible copy matches JSON-LD", () => {
  const betta = species.find((animal) => animal.slug === "betta");
  assert.ok(betta);
  const bettaFaqs = tankMateFaqs(betta);
  assert.equal(bettaFaqs.find((faq) => faq.question === "Can a betta live with a guppy?")?.answer.includes("Not compatible"), true);
  assert.match(bettaFaqs.find((faq) => faq.question === "Can a betta live with shrimp?")?.answer ?? "", /Cherry shrimp/);
  assert.match(bettaFaqs.find((faq) => faq.question === "Can a betta live with shrimp?")?.answer ?? "", /Not compatible/);
  assert.equal(bettaFaqs.find((faq) => faq.question === "What size tank does a betta need?")?.answer, betta.minTank.stated);
  assert.match(bettaFaqs.find((faq) => faq.question.startsWith("What fish should never"))?.answer ?? "", /22 fish/);
  assert.match(bettaFaqs.find((faq) => faq.question === "Can a betta live with a neon tetra?")?.answer ?? "", /Caution/);

  const shrimp = species.find((animal) => animal.slug === "cherry-shrimp");
  assert.ok(shrimp);
  assert.equal(
    tankMateFaqs(shrimp).some((faq) => faq.question.endsWith("live with shrimp?")),
    false,
  );

  for (const animal of species) {
    const faqs = tankMateFaqs(animal);
    assert.ok(faqs.length >= 3 && faqs.length <= 5, animal.slug);
    assert.equal(new Set(faqs.map((faq) => faq.question)).size, faqs.length, animal.slug);
    const json = faqPage(faqs);
    assert.equal(json["@type"], "FAQPage");
    assert.deepEqual(
      json.mainEntity.map((item) => item.name),
      faqs.map((faq) => faq.question),
    );
    assert.deepEqual(
      json.mainEntity.map((item) => item.acceptedAnswer.text),
      faqs.map((faq) => faq.answer),
    );
    assert.equal(
      faqs.some((faq) => faq.question.endsWith("live with shrimp?")),
      isFish(animal),
      animal.slug,
    );
    assert.equal(faqs.find((faq) => faq.question.startsWith("What size tank"))?.answer, animal.minTank.stated);

    for (const faq of faqs) {
      const paired = /^(.+) and (.+) are (Compatible|Caution|Not compatible) before tank size is applied\./.exec(faq.answer);
      if (!paired) continue;
      const other = species.find((item) => item.commonName === paired[2]);
      assert.ok(other, faq.question);
      const verdict = checkSelection([animal.slug, other.slug], null).verdict;
      assert.notEqual(verdict, "incomplete");
      assert.equal(paired[3], verdictLabel[verdict as keyof typeof verdictLabel], faq.question);
    }
  }

  const incompatibleFish = species.filter(
    (animal) => animal.slug !== "betta" && isFish(animal) && checkSelection(["betta", animal.slug], null).verdict === "incompatible",
  );
  assert.equal(incompatibleFish.length, 22);

  const tankPage = readFileSync(new URL("../app/tank-mates/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(tankPage, /const faqs = tankMateFaqs\(animal\)/);
  assert.match(tankPage, /faqPage\(faqs\)/);
  assert.match(tankPage, /<FaqSection faqs=\{faqs\}/);
  const checkerPage = readFileSync(new URL("../app/checker/page.tsx", import.meta.url), "utf8");
  assert.match(checkerPage, /const faqs = checkerFaqs\(\)/);
  assert.match(checkerPage, /faqPage\(faqs\)/);
  assert.match(checkerPage, /<FaqSection faqs=\{faqs\}/);
  assert.match(checkerPage, /checkerIntroParagraphs\(\)/);
});

test("checker intro and FAQ describe the published rules", () => {
  const text = checkerIntroParagraphs().join(" ");
  const words = text.split(/\s+/).filter(Boolean);
  assert.ok(words.length >= 120 && words.length <= 200, String(words.length));
  assert.match(text, /Seriously Fish/);
  assert.match(text, /FishBase/);
  assert.match(text, /PlanetCatfish/);
  assert.match(text, /semi-aggressive/);
  assert.match(text, /cherry shrimp/i);
  assert.match(text, /Snails are not in this set/);
  assert.match(text, /4°F/);
  assert.match(text, /adult-inch total/);

  const faqs = checkerFaqs();
  assert.ok(faqs.length >= 3 && faqs.length <= 5);
  const json = faqPage(faqs);
  assert.deepEqual(
    json.mainEntity.map((item) => item.name),
    faqs.map((faq) => faq.question),
  );
  assert.deepEqual(
    json.mainEntity.map((item) => item.acceptedAnswer.text),
    faqs.map((faq) => faq.answer),
  );
  assert.match(faqs.map((faq) => faq.answer).join(" "), /Seriously Fish/);
  assert.match(faqs.map((faq) => faq.answer).join(" "), /Snails are not/);
});

test("a tank-mate description names real mates and the published minimum", () => {
  const neon = species.find((animal) => animal.slug === "neon-tetra");
  assert.ok(neon);
  const copy = tankMatePageCopy(neon);
  assert.match(copy.description, /119 compatible fish/);
  assert.match(copy.description, /Bronze corydoras/);
  assert.match(copy.description, /14 US gallons/);
  for (const name of ["Bronze corydoras", "Zebra danio", "Harlequin rasbora"]) {
    if (!copy.description.includes(name)) continue;
    const other = species.find((animal) => animal.commonName === name);
    assert.ok(other);
    assert.equal(checkSelection([neon.slug, other.slug], null).verdict, "compatible");
  }
});
