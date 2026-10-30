import type { Metadata } from "next";
import { site } from "./site";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Tank Mate Match, a freshwater tank-mate checker",
} as const;

/** Canonical paths have no trailing slash. The site root stays `/`. */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const bare = path.split("?")[0]?.split("#")[0] ?? "/";
  const withSlash = bare.startsWith("/") ? bare : `/${bare}`;
  if (withSlash.length > 1 && withSlash.endsWith("/")) return withSlash.replace(/\/+$/, "") || "/";
  return withSlash;
}

export function absoluteUrl(path: string): string {
  const canonical = canonicalPath(path);
  return canonical === "/" ? site.url : `${site.url}${canonical}`;
}

export function pageMeta(options: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
}): Metadata {
  const path = canonicalPath(options.path);
  const description = options.description.replace(/\s+/g, " ").trim().slice(0, 160);
  const url = absoluteUrl(path);
  return {
    title: options.absoluteTitle ? { absolute: options.title } : options.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: options.title,
      description,
      url,
      siteName: site.name,
      type: options.type ?? "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description,
      images: [ogImage.url],
    },
  };
}
