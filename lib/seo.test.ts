import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { species } from "../data/species";
import sitemap from "../app/sitemap";
import robots from "../app/robots";
import { publishedSizeGallons } from "./checker";
import { checkerApplication, organizationAndWebsite, speciesArticle, webPage } from "./jsonld";
import { checkerPageCopy, compatibleFishCount, homePageCopy, speciesOgImage, speciesPageCopy, tankMatePageCopy, tankSizePageCopy } from "./seo-copy";
import { absoluteUrl, canonicalPath, ogImage, pageMeta } from "./seo";
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
  assert.equal(urls.includes(`${site.url}/my-tanks`), false);
  assert.equal(urls.some((url) => url.endsWith(".txt")), false);
});

test("my tanks is noindex and privacy names the on-device store", () => {
  const myTanks = readFileSync(new URL("../app/my-tanks/page.tsx", import.meta.url), "utf8");
  assert.match(myTanks, /index:\s*false/);
  assert.match(myTanks, /follow:\s*true/);
  const privacy = readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  assert.match(privacy, /localStorage/);
  assert.match(privacy, /tankmatematch\.tanks/);
  assert.match(privacy, /never leaves/);
  assert.match(privacy, /used only for sign-in and saved tanks/);
  assert.match(privacy, /no phone number/i);
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

test("page metadata stays unique, keyword-led, and within the search limits", () => {
  const home = homePageCopy();
  const checker = checkerPageCopy();
  const pages = [
    pageMeta({ title: home.title, description: home.description, path: "/", absoluteTitle: true }),
    pageMeta({ title: checker.title, description: checker.description, path: "/checker", absoluteTitle: true }),
  ];
  assert.equal(home.title, "Fish Compatibility Checker: Will These Fish Get Along?");
  assert.equal(checker.title, "Fish Compatibility Checker: Compare Tank Mates");
  for (const animal of species) {
    const care = speciesPageCopy(animal);
    const mates = tankMatePageCopy(animal);
    const image = speciesOgImage(animal);
    pages.push(
      pageMeta({
        title: care.title,
        description: care.description,
        path: `/species/${animal.slug}`,
        type: "article",
        absoluteTitle: true,
        image,
      }),
    );
    pages.push(
      pageMeta({
        title: mates.title,
        description: mates.description,
        path: `/tank-mates/${animal.slug}`,
        absoluteTitle: true,
        image,
      }),
    );
    assert.equal(compatibleFishCount(animal.slug) >= 0, true);
    assert.ok(mates.title.includes(`(${compatibleFishCount(animal.slug)} Compatible`));
    assert.equal(image.url, `/og/${animal.slug}.png`);
    for (const gallons of publishedSizeGallons(animal.slug)) {
      const sized = tankSizePageCopy(animal, gallons);
      pages.push(
        pageMeta({
          title: sized.title,
          description: sized.description,
          path: `/tank-mates/${animal.slug}/${gallons}-gallon`,
          absoluteTitle: true,
          image,
        }),
      );
      assert.ok(sized.title.includes(`${gallons}-Gallon`));
      assert.ok(sized.description.includes(String(gallons)));
    }
  }
  const titles = pages.map((page) => (typeof page.title === "string" ? page.title : page.title && "absolute" in page.title ? page.title.absolute : ""));
  const descriptions = pages.map((page) => page.description);
  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(descriptions).size, descriptions.length);
  for (const title of titles) {
    assert.equal(typeof title, "string");
    assert.ok((title ?? "").length > 10);
    assert.ok((title ?? "").length <= 60, title ?? "");
  }
  for (const description of descriptions) {
    assert.equal(typeof description, "string");
    assert.ok((description ?? "").length >= 140, description ?? "");
    assert.ok((description ?? "").length <= 160, description ?? "");
  }
  for (const page of pages) {
    assert.ok(page.alternates && "canonical" in page.alternates);
    assert.equal(page.openGraph?.title, page.twitter && "title" in page.twitter ? page.twitter.title : undefined);
    assert.equal(page.openGraph?.description, page.description);
    const card = page.twitter && "card" in page.twitter ? page.twitter.card : undefined;
    assert.equal(card, "summary_large_image");
    const twitterImages = page.twitter && "images" in page.twitter ? page.twitter.images : [];
    const ogImages = Array.isArray(page.openGraph?.images) ? page.openGraph.images : [];
    const ogUrl = ogImages[0] && typeof ogImages[0] === "object" && "url" in ogImages[0] ? ogImages[0].url : "";
    const twitterUrl = Array.isArray(twitterImages) ? twitterImages[0] : twitterImages;
    assert.equal(twitterUrl, ogUrl);
  }
  const homeMeta = pages[0];
  const homeImages = Array.isArray(homeMeta?.openGraph?.images) ? homeMeta.openGraph.images : [];
  const homeImage = homeImages[0] && typeof homeImages[0] === "object" && "url" in homeImages[0] ? homeImages[0].url : "";
  assert.equal(homeImage, ogImage.url);
  const betta = species.find((animal) => animal.slug === "betta");
  assert.ok(betta);
  assert.equal(speciesPageCopy(betta).title, "Betta Care & Tank Mates: Size, Temp, pH");
  assert.equal(tankMatePageCopy(betta).title, "Best Betta Tank Mates (0 Compatible Fish, Sourced)");
  assert.match(tankMatePageCopy(betta).description, /11 US gallons/);
  assert.equal(tankSizePageCopy(betta, 10).title, "Betta Tank Mates for a 10-Gallon Tank");
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
