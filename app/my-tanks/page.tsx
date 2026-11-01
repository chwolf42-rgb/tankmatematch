import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SavedTankList } from "@/components/SavedTankList";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "My tanks",
  description: "Tanks you saved in this browser. Open a tank in the checker, rename it, or delete it. Nothing is uploaded.",
  path: "/my-tanks",
});

export default function MyTanksPage() {
  return (
    <article className="page">
      <Breadcrumbs items={[{ name: "My tanks", path: "/my-tanks" }]} />
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">My tanks</h1>
      <p className="lead mt-3">
        A saved tank is a name, the species, and a gallon size if you set one. It stays in this browser&apos;s local storage. Opening a tank uses the same address you can share, such as{" "}
        <Link href="/checker?f=betta,neon-tetra">/checker?f=betta,neon-tetra</Link>.
      </p>
      <div className="mt-8 max-w-3xl">
        <SavedTankList />
      </div>
    </article>
  );
}
