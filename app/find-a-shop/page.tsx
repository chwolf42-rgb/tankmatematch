import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { speciesNeeds } from "@/data/needs";
import { species } from "@/data/species";
import { faqPage, webPage } from "@/lib/jsonld";
import { mapsSearchUrl } from "@/lib/outbound";
import { pageMeta } from "@/lib/seo";
import { fitDescription } from "@/lib/seo-copy";
import type { Faq } from "@/lib/types";

const title = "Find an Aquarium Shop Near You";
const description = fitDescription(
  ["Find an aquarium shop near you with a plain Google Maps search."],
  ["A species page adds that animal's name to the search.", "Stock is not checked.", "No personal data is sent by this site."],
);

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/find-a-shop",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    question: "Does this page check which shop has a fish in stock?",
    answer: "No. The button opens a Google Maps search for aquarium stores near you. It does not read a shop's stock.",
  },
  {
    question: "How does the species name get into the search?",
    answer:
      "Each species page has its own button. That search is 'aquarium store near me' plus the common name. This page uses the search without a species name.",
  },
];

export default function FindAShopPage() {
  const named = speciesNeeds.flatMap((entry) => {
    const animal = species.find((item) => item.slug === entry.slug);
    return animal ? [animal] : [];
  });

  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "Find a shop", path: "/find-a-shop" }]} />
      <JsonLd data={webPage({ path: "/find-a-shop", name: title, description, dateModified: "2026-11-17" })} />
      <JsonLd data={faqPage(faqs)} />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Find a shop near you</h1>
      <p className="lead mt-4">
        This opens a Google Maps search for aquarium stores near you. Stock is not checked.
      </p>
      <p className="mt-4 text-slate-700">
        The link is a plain map address. It does not add a tag from this site. On a species page the same search includes that animal&apos;s common name, which is still only a search, not a stock check.
      </p>
      <p className="mt-5">
        <TrackedLink
          href={mapsSearchUrl("")}
          page="/find-a-shop"
          item="aquarium-store"
          linkType="map-search"
          region="find-a-shop"
          className="inline-flex min-h-11 items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white no-underline"
        >
          Find a shop near you
        </TrackedLink>
      </p>
      <p className="mt-3 text-sm text-slate-600">This link opens a third-party map. This site does not check what the shops sell.</p>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-lg font-semibold text-slate-900">Search with a species name</h2>
        <ul className="mt-3 space-y-2">
          {named.map((animal) => (
            <li key={animal.slug}>
              <Link href={`/species/${animal.slug}`} className="font-semibold text-teal-800">
                {animal.commonName}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10 max-w-3xl" aria-labelledby="shop-faq-heading">
        <h2 id="shop-faq-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          Common questions
        </h2>
        <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <div key={faq.question} className="p-4">
              <dt className="font-semibold text-slate-900">{faq.question}</dt>
              <dd className="mt-2 text-slate-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
