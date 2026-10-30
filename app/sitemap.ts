import type { MetadataRoute } from "next";
import { species } from "@/data/species";
import { publishedSizeGallons } from "@/lib/checker";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-30");
  const staticPaths = ["", "/checker", "/species", "/about", "/methodology", "/privacy", "/affiliate-disclosure"];
  const urls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified,
  }));
  for (const animal of species) {
    urls.push({ url: `${site.url}/species/${animal.slug}`, lastModified });
    urls.push({ url: `${site.url}/tank-mates/${animal.slug}`, lastModified });
    for (const gallons of publishedSizeGallons(animal.slug)) {
      urls.push({ url: `${site.url}/tank-mates/${animal.slug}/${gallons}-gallon`, lastModified });
    }
  }
  return urls;
}
