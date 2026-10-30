import type { Verdict } from "@/lib/types";

const label: Record<Verdict | "incomplete", string> = {
  compatible: "Compatible",
  caution: "Caution",
  incompatible: "Not compatible",
  incomplete: "Needs a second species",
};

export const verdictCard: Record<Verdict | "incomplete", string> = {
  compatible: "border-emerald-700 bg-emerald-50 text-emerald-950",
  caution: "border-amber-700 bg-amber-50 text-amber-950",
  incompatible: "border-red-800 bg-red-50 text-red-950",
  incomplete: "border-slate-200 bg-white text-slate-800",
};

export const verdictBadge: Record<Verdict | "incomplete", string> = {
  compatible: "bg-emerald-700 text-white",
  caution: "bg-amber-700 text-white",
  incompatible: "bg-red-800 text-white",
  incomplete: "bg-slate-200 text-slate-800",
};

export function VerdictPill({ verdict }: { verdict: Verdict | "incomplete" }) {
  return (
    <p className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide ${verdictBadge[verdict]}`}>
      {label[verdict]}
    </p>
  );
}
