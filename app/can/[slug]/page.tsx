import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { pairingPages } from "@/data/pairing-pages";
import { faqPage, webPage } from "@/lib/jsonld";
import { pairingAnimals, pairingBySlug, pairingLabel, pairingPageCopy, pairingVerdict } from "@/lib/pairing";
import { pageMeta } from "@/lib/seo";
import { buildQuery } from "@/lib/checker";

export function generateStaticParams() {
  return pairingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = pairingBySlug(slug);
    if (!page) return { title: "Tank mate question" };
    const copy = pairingPageCopy(page);
    const { verdict } = pairingVerdict(page);
    return pageMeta({
      title: copy.title,
      description: copy.description,
      path: `/can/${page.slug}`,
      absoluteTitle: true,
      image: {
        url: `/og/pair-${page.slug}.png`,
        width: 1200,
        height: 630,
        alt: `${page.h1} ${pairingLabel(verdict)}.`,
      },
    });
  });
}

export default async function PairingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pairingBySlug(slug);
  if (!page) notFound();
  const animals = pairingAnimals(page);
  if (!animals) notFound();
  const { verdict, reason } = pairingVerdict(page);
  const label = pairingLabel(verdict);
  const path = `/can/${page.slug}`;
  const copy = pairingPageCopy(page);

  return (
    <article className="page">
      <Breadcrumbs
        items={[
          { name: "Checker", path: "/checker" },
          { name: page.h1, path },
        ]}
      />
      <JsonLd data={webPage({ path, name: page.h1, description: copy.description, dateModified: animals.a.lastVerified })} />
      <JsonLd data={faqPage(page.faqs)} />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{page.h1}</h1>
      <p className="lead mt-4">
        {label}. {reason}
      </p>
      <p className="mt-4 text-slate-700">{page.context}</p>
      <p className="mt-4 text-slate-700">
        Where temperature, pH, or hardness is missing, that comparison stays blank. The checker does not invent a number.
      </p>
      <p className="mt-4 text-slate-700">
        Read{" "}
        <Link href={`/species/${animals.a.slug}`} className="font-semibold text-teal-800">
          {animals.a.commonName}
        </Link>{" "}
        and{" "}
        <Link href={`/species/${animals.b.slug}`} className="font-semibold text-teal-800">
          {animals.b.commonName}
        </Link>
        , or open the pair in the{" "}
        <Link href={`/checker${buildQuery([animals.a.slug, animals.b.slug], null)}`} className="font-semibold text-teal-800">
          checker
        </Link>
        . To start from the animals you already keep, use{" "}
        <Link href="/what-to-add" className="font-semibold text-teal-800">
          What can I add to my tank?
        </Link>
      </p>
      <FaqSection faqs={page.faqs} />
    </article>
  );
}
