import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PairGroups } from "@/components/PairGroups";
import { pairingPages } from "@/data/pairing-pages";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { formatNumber } from "@/lib/format";
import { FaqSection } from "@/components/FaqSection";
import { faqPage, webPage } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { speciesOgImage, tankMateAnswer, tankMateFaqs, tankMatePageCopy } from "@/lib/seo-copy";

export function generateStaticParams() {
  return species.map((animal) => ({ slug: animal.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const animal = species.find((item) => item.slug === slug);
    if (!animal) return { title: "Tank mates" };
    const copy = tankMatePageCopy(animal);
    return pageMeta({
      title: copy.title,
      description: copy.description,
      path: `/tank-mates/${animal.slug}`,
      absoluteTitle: true,
      image: speciesOgImage(animal),
    });
  });
}

export default async function TankMatesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = species.find((item) => item.slug === slug);
  if (!animal) notFound();
  const sizes = publishedSizeGallons(animal.slug);
  const path = `/tank-mates/${animal.slug}`;
  const faqs = tankMateFaqs(animal);
  const answer = tankMateAnswer(animal);

  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "Species", path: "/species" },
          { name: animal.commonName, path: `/species/${animal.slug}` },
          { name: "Tank mates", path },
        ]}
      />
      <JsonLd
        data={webPage({
          path,
          name: `${animal.commonName} tank mates`,
          description: answer ?? animal.tankMateIntro,
          dateModified: animal.lastVerified,
        })}
      />
      <JsonLd data={faqPage(faqs)} />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{animal.commonName} tank mates</h1>
      {answer ? <p className="lead mt-4">{answer}</p> : null}
      <p className={answer ? "mt-4 text-slate-700" : "lead mt-4"}>{animal.tankMateIntro}</p>
      <p className="mt-4 text-slate-600">
        This page ignores gallons. A pair can be Compatible here and still fail in a short tank.{" "}
        <Link href={`/species/${animal.slug}`} className="font-semibold text-teal-800">
          Care ranges for {animal.commonName}
        </Link>
        . The reasons name the ranges those sources published.{" "}
        <Link href="/methodology" className="font-semibold text-teal-800">
          How a disagreement is handled
        </Link>
        .
      </p>
      {sizes.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Where the tank size changes the list</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sizes.map((gallons) => (
              <li key={gallons}>
                <Link
                  href={`${path}/${gallons}-gallon`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 no-underline hover:border-teal-700"
                >
                  {formatNumber(gallons)} gal
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-slate-600">Across 10, 20, 29, and 40 gallons the verdicts do not change, so there is no separate size page.</p>
      )}
      <PairGroups slug={animal.slug} gallons={null} />
      {pairingPages.some((page) => page.a === animal.slug || page.b === animal.slug) ? (
        <section className="mt-8 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-900">Direct answers for this animal</h2>
          <ul className="mt-3 space-y-2">
            {pairingPages
              .filter((page) => page.a === animal.slug || page.b === animal.slug)
              .map((page) => (
                <li key={page.slug}>
                  <Link href={`/can/${page.slug}`} className="font-semibold text-teal-800">
                    {page.h1}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ) : null}
      <FaqSection faqs={faqs} />
    </article>
  );
}
