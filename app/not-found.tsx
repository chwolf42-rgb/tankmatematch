import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Page not found",
    description: "That page is not on Tank Mate Match. Use the checker or the species list.",
    path: "/404",
  }),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page prose-page">
      <h1>Page not found</h1>
      <p>That address is not one of the published pages. The species set is the first ten freshwater animals.</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/checker">Tank mate checker</Link>
        </li>
        <li>
          <Link href="/species">Species</Link>
        </li>
        <li>
          <Link href="/methodology">How a verdict is reached</Link>
        </li>
      </ul>
    </div>
  );
}
