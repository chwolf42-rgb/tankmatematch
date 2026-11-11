import type { Metadata } from "next";
import Link from "next/link";
import { AddPlanner } from "@/components/AddPlanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { faqPage, webPage } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";
import type { Faq } from "@/lib/types";

const title = "What Can I Add to My Tank?";
const description =
  "Enter gallons or litres and the animals you already keep. Compatible additions come first, then Works if, from the same cited checker. The inch total is an estimate.";

export const metadata: Metadata = pageMeta({
  title,
  description,
  path: "/what-to-add",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    question: "What can I add to my tank?",
    answer:
      "Add an animal that is Compatible with every animal you already entered, then one marked Works if, if you can meet the conditions on that result. The list uses the same temperature, pH, hardness, and behaviour rules as the checker. It does not invent a range.",
  },
  {
    question: "How is the stocking level calculated?",
    answer:
      "Adult length in inches times the published minimum group, or times one when no source gives a group size. If that inch total is higher than the US gallon count, the estimate says the tank is overstocked. It is the old inches-per-gallon shortcut, not a number from a species profile, and it ignores body shape.",
  },
  {
    question: "Do I need an account?",
    answer: "No. The size and the animals stay in this page while you use it. Nothing is sent to an account.",
  },
];

export default function WhatToAddPage() {
  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "What to add", path: "/what-to-add" }]} />
      <JsonLd
        data={webPage({
          path: "/what-to-add",
          name: title,
          description,
          dateModified: "2026-11-11",
        })}
      />
      <JsonLd data={faqPage(faqs)} />
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">What can I add to my tank?</h1>
      <p className="lead mt-4">
        Add an animal that is Compatible with everything you already keep. If none is, use Works if only when you can
        meet the conditions in that result. Enter the tank in gallons or litres and the animals you have. The ranking
        is Compatible first, then Works if, and smaller adults first inside each group because the stocking line is
        adult inches.
      </p>
      <p className="mt-4 text-slate-700">
        The stocking line is an estimate: adult inches compared with US gallons. It is not a cited biological capacity.
        A higher inch total than the gallon count is the warning for overstocking.{" "}
        <Link href="/methodology" className="font-semibold text-teal-800">
          How a verdict is reached
        </Link>
        .
      </p>
      <AddPlanner />
      <FaqSection faqs={faqs} />
    </article>
  );
}
