import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateSlot } from "@/components/AffiliateSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { formatNumber, formatRange } from "@/lib/format";
import { speciesArticle } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return species.map((animal) => ({ slug: animal.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const animal = species.find((item) => item.slug === slug);
    if (!animal) return { title: "Species" };
    return pageMeta({
      title: `${animal.commonName} care ranges`,
      description: `${animal.commonName} (${animal.scientificName}): ${formatRange(animal.tempF, "°F")}, pH ${animal.pH.min}–${animal.pH.max}, ${animal.adultSizeIn} in. Sources and disagreements.`,
      path: `/species/${animal.slug}`,
      type: "article",
    });
  });
}

export default async function SpeciesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = species.find((item) => item.slug === slug);
  if (!animal) notFound();
  const sizes = publishedSizeGallons(animal.slug);
  const path = `/species/${animal.slug}`;
  const stats = [
    { label: "Temperature", value: formatRange(animal.tempF, "°F"), detail: formatRange(animal.tempC, "°C") },
    { label: "pH", value: `${animal.pH.min}–${animal.pH.max}`, detail: "Published range" },
    {
      label: "Hardness",
      value: animal.hardnessDGH ? formatRange(animal.hardnessDGH, "dGH") : "Not stated",
      detail: animal.hardnessDGH ? "General hardness" : "Left blank on purpose",
    },
    { label: "Adult size", value: `${animal.adultSizeIn} in`, detail: `${animal.adultSizeMm} mm` },
    {
      label: "Minimum tank",
      value: animal.minTank.gallons != null ? `${animal.minTank.gallons} gal` : animal.minTank.lengthIn != null ? `${animal.minTank.lengthIn} in long` : "Not stated",
      detail: animal.minTank.liters != null ? `About ${animal.minTank.liters} L` : "See the note below",
    },
    { label: "Minimum group", value: animal.minGroup != null ? String(animal.minGroup) : "Not stated", detail: animal.schooling ? "Schooling" : "Not a school" },
  ];

  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "Species", path: "/species" }, { name: animal.commonName, path }]} />
      <JsonLd
        data={speciesArticle({
          path,
          headline: `${animal.commonName} care ranges`,
          description: animal.lede,
          dateModified: animal.lastVerified,
          commonName: animal.commonName,
          scientificName: animal.scientificName,
          citations: animal.sources.map((source) => source.url),
        })}
      />
      {animal.faqs.length > 0 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: animal.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      ) : null}
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{animal.commonName}</h1>
        <p className="mt-2 text-lg italic text-slate-600">{animal.scientificName}</p>
        <p className="lead mt-4">{animal.lede}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/tank-mates/${animal.slug}`} className="inline-flex min-h-11 items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white no-underline">
            Tank mates
          </Link>
          <Link href={`/checker?f=${animal.slug}`} className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 no-underline">
            Start a check
          </Link>
        </div>
      </header>

      <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {stats.map((stat) => (
          <li key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.detail}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-slate-600">Checked {animal.lastVerified}. {animal.careLevelNote}</p>

      <div className="mt-8 max-w-3xl space-y-4 text-[1.05rem] leading-relaxed text-slate-700">
        {animal.husbandry.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
        <p>{animal.adultSizeNote}</p>
        <p>{animal.minGroupNote}</p>
        <p>{animal.longFinnedNote}</p>
        <p className="rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm">{animal.minTank.stated}</p>
      </div>

      {animal.uncertainties.length > 0 ? (
        <section className="mt-10 max-w-3xl rounded-2xl border border-teal-200 bg-foam p-5">
          <h2 className="text-xl font-semibold text-deep">Where the sources disagree</h2>
          <table className="data-table mt-3">
            <caption className="sr-only">Disagreements between sources</caption>
            <thead>
              <tr>
                <th scope="col">Field</th>
                <th scope="col">What we did with it</th>
              </tr>
            </thead>
            <tbody>
              {animal.uncertainties.map((item) => (
                <tr key={item.field}>
                  <th scope="row">{item.field}</th>
                  <td>{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : null}

      {animal.sourceGap ? (
        <p className="mt-6 max-w-3xl rounded-xl border border-amber-700 bg-amber-50 p-4 text-amber-950">
          <strong>Source gap. </strong>
          {animal.sourceGap}
        </p>
      ) : null}

      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tank mates</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{animal.tankMateIntro}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          <li>
            <Link href={`/tank-mates/${animal.slug}`} className="block rounded-xl border border-slate-200 bg-white p-4 font-semibold text-teal-900 no-underline hover:border-teal-700">
              All tank mates, tank size left out
            </Link>
          </li>
          {sizes.map((gallons) => (
            <li key={gallons}>
              <Link
                href={`/tank-mates/${animal.slug}/${gallons}-gallon`}
                className="block rounded-xl border border-slate-200 bg-white p-4 font-semibold text-teal-900 no-underline hover:border-teal-700"
              >
                {animal.commonName} in a {formatNumber(gallons)}-gallon tank
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AffiliateSlot id={`species-${animal.slug}`} />

      {animal.faqs.length > 0 ? (
        <section className="mt-10 max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            Questions with a sourced answer
          </h2>
          <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {animal.faqs.map((faq) => (
              <div key={faq.question} className="p-4">
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Sources</h2>
        <table className="data-table mt-3">
          <caption className="sr-only">Sources for {animal.commonName}</caption>
          <thead>
            <tr>
              <th scope="col">Source</th>
              <th scope="col">Used for</th>
            </tr>
          </thead>
          <tbody>
            {animal.sources.map((source) => (
              <tr key={source.url}>
                <th scope="row">
                  <a href={source.url} className="font-semibold text-teal-800">
                    {source.label}
                  </a>
                  <span className="mt-1 block font-normal text-slate-600">Accessed {source.accessed}</span>
                </th>
                <td>
                  {source.title}. {source.usedFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-slate-600">Origin, as used on this page: {animal.origin}</p>
        <p className="mt-1 text-sm text-slate-600">Diet: {animal.diet}</p>
      </section>
    </article>
  );
}
