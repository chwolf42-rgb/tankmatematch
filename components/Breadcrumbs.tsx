import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span aria-current="page" className="font-medium text-slate-800">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="text-teal-800 no-underline hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${site.url}${item.path === "/" ? "" : item.path}`,
          })),
        }}
      />
    </>
  );
}
