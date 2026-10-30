import assert from "node:assert/strict";
import test from "node:test";
import { species } from "../data/species";
import sitemap from "../app/sitemap";
import robots from "../app/robots";
import { publishedSizeGallons } from "./checker";
import { formatRange } from "./format";
import { checkerApplication, organizationAndWebsite, speciesArticle, webPage } from "./jsonld";
import { absoluteUrl, canonicalPath, pageMeta } from "./seo";
import { site } from "./site";

test("canonical paths drop a trailing slash and keep the site root", () => {
  assert.equal(canonicalPath("/"), "/");
  assert.equal(canonicalPath(""), "/");
  assert.equal(canonicalPath("/checker/"), "/checker");
  assert.equal(canonicalPath("/species/betta///"), "/species/betta");
  assert.equal(canonicalPath("/checker?tank=20&f=betta"), "/checker");
  assert.equal(absoluteUrl("/"), site.url);
  assert.equal(absoluteUrl("/checker/"), `${site.url}/checker`);
});

test("sitemap lists every public page once, on the apex, with lastModified", () => {
  const urls = sitemap().map((entry) => entry.url);
  assert.equal(new Set(urls).size, urls.length);
  const expected = new Set<string>([
    absoluteUrl("/"),
    absoluteUrl("/checker"),
    absoluteUrl("/species"),
    absoluteUrl("/about"),
    absoluteUrl("/methodology"),
    absoluteUrl("/privacy"),
    absoluteUrl("/affiliate-disclosure"),
    absoluteUrl("/llms.txt"),
    absoluteUrl("/llms-full.txt"),
  ]);
  for (const animal of species) {
    expected.add(absoluteUrl(`/species/${animal.slug}`));
    expected.add(absoluteUrl(`/tank-mates/${animal.slug}`));
    for (const gallons of publishedSizeGallons(animal.slug)) {
      expected.add(absoluteUrl(`/tank-mates/${animal.slug}/${gallons}-gallon`));
    }
  }
  assert.deepEqual(new Set(urls), expected);
  for (const entry of sitemap()) {
    assert.match(entry.url, /^https:\/\/tankmatematch\.com(\/|$)/);
    assert.equal(entry.url.includes("www."), false);
    assert.ok(entry.lastModified instanceof Date);
    assert.equal(Number.isNaN(entry.lastModified.getTime()), false);
    assert.equal(entry.url.endsWith("/"), false);
  }
  assert.equal(urls.includes(`${site.url}/404`), false);
});

test("robots allows the named crawlers and points at the sitemap", () => {
  const config = robots();
  const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
  const agents = rules.map((rule) => rule.userAgent);
  for (const agent of ["*", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
    assert.equal(agents.includes(agent), true);
  }
  for (const rule of rules) {
    assert.equal(rule.allow, "/");
  }
  assert.equal(config.sitemap, `${site.url}/sitemap.xml`);
  assert.equal(config.host, site.url);
});

test("page metadata stays unique and within the description limit", () => {
  const pages = [
    pageMeta({
      title: "Tank mate checker for freshwater aquariums",
      description:
        "Check whether freshwater fish can share a tank. Temperature, pH, hardness, and behaviour come from named sources, with the reason for every verdict.",
      path: "/",
      absoluteTitle: true,
    }),
    pageMeta({
      title: "Tank mate checker",
      description:
        "Compare two to six freshwater species. Temperature, pH, hardness, fins, predation, and tank size, with the reason for every Caution or Not compatible.",
      path: "/checker",
    }),
  ];
  for (const animal of species) {
    pages.push(
      pageMeta({
        title: `${animal.commonName} care ranges`,
        description: `${animal.commonName} (${animal.scientificName}): ${formatRange(animal.tempF, "°F")}, pH ${animal.pH.min}–${animal.pH.max}, ${animal.adultSizeIn} in. Sources and disagreements.`,
        path: `/species/${animal.slug}`,
        type: "article",
      }),
    );
    pages.push(
      pageMeta({
        title: `${animal.commonName} tank mates`,
        description: `${animal.commonName} tank mates: which species are Compatible, Caution, or Not compatible, and the published reason.`,
        path: `/tank-mates/${animal.slug}`,
      }),
    );
    for (const gallons of publishedSizeGallons(animal.slug)) {
      pages.push(
        pageMeta({
          title: `${animal.commonName} in a ${gallons}-gallon tank`,
          description: `${animal.commonName} tank mates in a ${gallons}-gallon tank, and which pairings change once the published minimum is applied.`,
          path: `/tank-mates/${animal.slug}/${gallons}-gallon`,
        }),
      );
    }
  }
  const titles = pages.map((page) => (typeof page.title === "string" ? page.title : page.title && "absolute" in page.title ? page.title.absolute : ""));
  const descriptions = pages.map((page) => page.description);
  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(descriptions).size, descriptions.length);
  for (const description of descriptions) {
    assert.equal(typeof description, "string");
    assert.ok((description ?? "").length > 40);
    assert.ok((description ?? "").length <= 160);
  }
  for (const page of pages) {
    assert.ok(page.alternates && "canonical" in page.alternates);
    assert.ok(page.openGraph?.images);
    const card = page.twitter && "card" in page.twitter ? page.twitter.card : undefined;
    assert.equal(card, "summary_large_image");
  }
});

test("JSON-LD uses the requested types and required fields", () => {
  const graph = organizationAndWebsite()["@graph"];
  assert.deepEqual(
    graph.map((node) => node["@type"]),
    ["Organization", "WebSite"],
  );
  assert.equal(checkerApplication()["@type"], "WebApplication");
  assert.equal(checkerApplication().offers.price, "0");
  const animal = species[0];
  const article = speciesArticle({
    path: `/species/${animal.slug}`,
    headline: `${animal.commonName} care ranges`,
    description: animal.lede,
    dateModified: animal.lastVerified,
    commonName: animal.commonName,
    scientificName: animal.scientificName,
    citations: animal.sources.map((source) => source.url),
  });
  assert.equal(article["@type"], "Article");
  assert.equal(article.about["@type"], "Thing");
  assert.equal(article.about.name, animal.commonName);
  assert.ok(article.citation.length > 0);
  const page = webPage({ path: `/tank-mates/${animal.slug}`, name: "Tank mates", description: animal.tankMateIntro });
  assert.equal(page["@type"], "WebPage");
  assert.equal(page.isPartOf["@id"], `${site.url}/#website`);
});
