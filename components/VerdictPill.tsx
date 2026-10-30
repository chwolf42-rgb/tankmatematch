import type { Verdict } from "@/lib/types";

const label: Record<Verdict | "incomplete", string> = {
  compatible: "Compatible",
  caution: "Caution",
  incompatible: "Not compatible",
  incomplete: "Add a species",
};

export function VerdictPill({ verdict }: { verdict: Verdict | "incomplete" }) {
  return <p className={`verdict verdict-${verdict}`}>{label[verdict]}</p>;
}
