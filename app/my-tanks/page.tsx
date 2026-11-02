import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MyTanksList } from "@/components/MyTanksList";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "My tanks",
    description: "Tanks you saved in this browser. The name, species, and gallon size stay on the device.",
    path: "/my-tanks",
  }),
  robots: { index: false, follow: true },
};

export default function MyTanksPage() {
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: "My tanks", path: "/my-tanks" }]} />
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900">My tanks</h1>
      <p className="lead mt-3">
        Tanks you name in the checker. The list stays in this browser and is not sent to an account.{" "}
        <Link href="/privacy" className="font-semibold text-teal-800">
          What is stored.
        </Link>
      </p>
      <div className="mt-8">
        <MyTanksList />
      </div>
    </div>
  );
}
