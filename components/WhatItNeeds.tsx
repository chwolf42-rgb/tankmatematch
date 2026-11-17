import { TrackedLink } from "@/components/TrackedLink";
import type { SpeciesNeeds } from "@/data/needs";
import { amazonSearchUrl } from "@/lib/outbound";

const topicLabel = {
  diet: "Diet",
  plants: "Plants and cover",
  decor: "Decor",
} as const;

export function WhatItNeeds({ needs }: { needs: SpeciesNeeds }) {
  const page = `/species/${needs.slug}`;
  return (
    <section className="mt-10 max-w-3xl" aria-labelledby="needs-heading">
      <h2 id="needs-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
        What it needs
      </h2>
      <p className="mt-3 text-slate-700">
        Only the points a named source actually states are here. A blank topic means that source did not publish it.
      </p>
      <div className="mt-4 space-y-4">
        {needs.items.map((item) => (
          <div key={`${item.topic}-${item.shopItem ?? item.sourceLabel}`} className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-slate-900">{topicLabel[item.topic]}</h3>
            <p className="mt-2 text-slate-700">{item.text}</p>
            <p className="mt-3 text-sm">
              <TrackedLink
                href={item.sourceUrl}
                page={page}
                item={`source-${item.topic}`}
                linkType="source"
                region="what-it-needs"
                className="font-semibold text-teal-800"
              >
                {item.sourceLabel}
              </TrackedLink>
            </p>
            {item.shopQuery && item.shopItem ? (
              <p className="mt-2 text-sm">
                <TrackedLink
                  href={amazonSearchUrl(item.shopQuery)}
                  page={page}
                  item={item.shopItem}
                  linkType="shop-search"
                  region="what-it-needs"
                  className="font-semibold text-teal-800"
                >
                  Search shops for {item.shopQuery}
                </TrackedLink>
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-600">These links open third-party shops. This site does not check what they sell.</p>
    </section>
  );
}
