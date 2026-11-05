import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Checker } from "@/components/Checker";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { checkerApplication, faqPage } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import { checkerFaqs, checkerIntroParagraphs, checkerPageCopy } from "@/lib/seo-copy";

const checkerCopy = checkerPageCopy();

export const metadata: Metadata = pageMeta({
  title: checkerCopy.title,
  description: checkerCopy.description,
  path: "/checker",
  absoluteTitle: true,
});

export default function CheckerPage() {
  const faqs = checkerFaqs();
  return (
    <div>
      <JsonLd data={checkerApplication()} />
      <JsonLd data={faqPage(faqs)} />
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <Breadcrumbs items={[{ name: "Checker", path: "/checker" }]} />
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Tank mate checker</h1>
        <p className="mt-2 text-slate-600">Search two or more species. Tank size is optional.</p>
        <div className="mt-6">
          <Checker />
        </div>
        <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="how-checker-heading">
          <h2 id="how-checker-heading" className="text-xl font-semibold tracking-tight text-slate-900">
            How the checker decides
          </h2>
          {checkerIntroParagraphs().map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </section>
        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
