import type { MetadataRoute } from "next";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { absoluteUrl } from "@/lib/seo";
import { VERIFIED_ON } from "@/lib/site";

export const dynamic = "force-static";

function dated(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const verified = dated(VERIFIED_ON);
  const staticPaths = [
    "/",
    "/checker",
    "/my-tanks",
    "/species",
    "/about",
    "/methodology",
    "/privacy",
    "/affiliate-disclosure",
    "/llms.txt",
    "/llms-full.txt",
  ];
  const urls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: verified,
  }));

  for (const animal of species) {
    const lastModified = dated(animal.lastVerified);
    urls.push({ url: absoluteUrl(`/species/${animal.slug}`), lastModified });
    urls.push({ url: absoluteUrl(`/tank-mates/${animal.slug}`), lastModified });
    for (const gallons of publishedSizeGallons(animal.slug)) {
      urls.push({
        url: absoluteUrl(`/tank-mates/${animal.slug}/${gallons}-gallon`),
        lastModified,
      });
    }
  }

  return urls;
}
