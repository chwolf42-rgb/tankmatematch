import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateSlot } from "@/components/AffiliateSlot";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { formatNumber, formatRange } from "@/lib/format";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return species.map((animal) => ({ slug: animal.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const animal = species.find((item) => item.slug === slug);
    if (!animal) return { title: "Species" };
    return {
      title: `${animal.commonName} care ranges`,
      description: `${animal.commonName} (${animal.scientificName}): ${formatRange(animal.tempF, "°F")}, pH ${animal.pH.min}–${animal.pH.max}, ${animal.adultSizeIn} inches. Sources and the points they disagree.`,
      alternates: { canonical: `/species/${animal.slug}` },
    };
  });
}

export default async function SpeciesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const animal = species.find((item) => item.slug === slug);
  if (!animal) notFound();
  const sizes = publishedSizeGallons(animal.slug);
  const path = `/species/${animal.slug}`;

  return (
    <article className="wrap">
      <Breadcrumbs items={[{ name: "Species", path: "/species" }, { name: animal.commonName, path }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${animal.commonName} care ranges`,
          url: `${site.url}${path}`,
          description: animal.lede,
          dateModified: animal.lastVerified,
        }}
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
      <header>
        <h1>{animal.commonName}</h1>
        <p className="sci">{animal.scientificName}</p>
        <p className="lede">{animal.lede}</p>
      </header>
      <div className="page-grid">
        <div className="stats-wrap">
          <table className="stats">
            <caption>Published ranges used by the checker. Checked {animal.lastVerified}.</caption>
            <tbody>
              <tr>
                <th scope="row">Temperature</th>
                <td>
                  {formatRange(animal.tempC, "°C")} ({formatRange(animal.tempF, "°F")}
                  {animal.tempFConverted ? ", Fahrenheit converted" : ""})
                </td>
              </tr>
              <tr>
                <th scope="row">pH</th>
                <td>
                  {animal.pH.min}–{animal.pH.max}
                </td>
              </tr>
              <tr>
                <th scope="row">Hardness</th>
                <td>{animal.hardnessDGH ? formatRange(animal.hardnessDGH, "dGH") : "Not stated in the sources used"}</td>
              </tr>
              <tr>
                <th scope="row">Adult size</th>
                <td>
                  {animal.adultSizeMm} mm · {animal.adultSizeIn} in
                </td>
              </tr>
              <tr>
                <th scope="row">Minimum tank</th>
                <td>{animal.minTank.stated}</td>
              </tr>
              <tr>
                <th scope="row">Minimum group</th>
                <td>{animal.minGroup ?? "Not stated"}</td>
              </tr>
              <tr>
                <th scope="row">Temperament</th>
                <td>{animal.temperament === "semi-aggressive" ? "Best kept alone" : "Peaceful"}</td>
              </tr>
              <tr>
                <th scope="row">Care</th>
                <td>{animal.careLevel === "unrated" ? "Not rated" : animal.careLevel}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <Link href={`/tank-mates/${animal.slug}`}>Tank mates for {animal.commonName}</Link>
          </p>
          <p>
            <Link href={`/checker?f=${animal.slug}`}>Start a check with {animal.commonName}</Link>
          </p>
        </div>
        <div>
          {animal.husbandry.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p>{animal.adultSizeNote}</p>
          <p>{animal.minGroupNote}</p>
          <p>{animal.careLevelNote}</p>
          <p>{animal.longFinnedNote}</p>
          {animal.uncertainties.length > 0 ? (
            <div className="uncertainty">
              <h2>Where the sources disagree</h2>
              <ul>
                {animal.uncertainties.map((item) => (
                  <li key={item.field}>
                    <strong>{item.field}. </strong>
                    {item.note}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {animal.sourceGap ? (
            <p className="callout">
              <strong>Source gap. </strong>
              {animal.sourceGap}
            </p>
          ) : null}
          <h2>Tank-mate pages</h2>
          <p>{animal.tankMateIntro}</p>
          <ul>
            <li>
              <Link href={`/tank-mates/${animal.slug}`}>All tank mates, tank size left out</Link>
            </li>
            {sizes.map((gallons) => (
              <li key={gallons}>
                <Link href={`/tank-mates/${animal.slug}/${gallons}-gallon`}>
                  {animal.commonName} in a {formatNumber(gallons)}-gallon tank
                </Link>
              </li>
            ))}
          </ul>
          <AffiliateSlot id={`species-${animal.slug}`} />
          {animal.faqs.length > 0 ? (
            <section className="faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading">Questions with a sourced answer</h2>
              {animal.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
          <h2>Sources</h2>
          <ul className="source-list">
            {animal.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.title}</a> Accessed {source.accessed}. {source.usedFor}
              </li>
            ))}
          </ul>
          <p className="note">Origin, as used on this page: {animal.origin}</p>
          <p className="note">Diet: {animal.diet}</p>
        </div>
      </div>
    </article>
  );
}
