import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path}>
                {last ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
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
