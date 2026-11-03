import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Checker } from "@/components/Checker";
import { JsonLd } from "@/components/JsonLd";
import { checkerApplication } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Tank mate checker",
  description:
    "Compare two to six freshwater species. Temperature, pH, hardness, fins, predation, and tank size, with the reason for every Caution or Not compatible.",
  path: "/checker",
});

export default function CheckerPage() {
  return (
    <div>
      <JsonLd data={checkerApplication()} />
      <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <Breadcrumbs items={[{ name: "Checker", path: "/checker" }]} />
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Tank mate checker</h1>
        <p className="mt-2 text-slate-600">Search two or more species. Tank size is optional.</p>
        <div className="mt-6">
          <Checker />
        </div>
      </div>
    </div>
  );
}
