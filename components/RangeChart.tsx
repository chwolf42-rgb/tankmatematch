import { formatNumber } from "@/lib/format";
import type { Range } from "@/lib/types";

export function RangeChart({
  label,
  unit,
  rows,
}: {
  label: string;
  unit: string;
  rows: { name: string; range: Range }[];
}) {
  const low = Math.min(...rows.map((row) => row.range.min));
  const high = Math.max(...rows.map((row) => row.range.max));
  const span = high - low || 1;
  const overlapMin = Math.max(...rows.map((row) => row.range.min));
  const overlapMax = Math.min(...rows.map((row) => row.range.max));
  const overlaps = overlapMin <= overlapMax;
  const heading = unit && unit !== label ? `${label} (${unit})` : label;

  return (
    <figure className="mt-4">
      <figcaption className="text-sm font-semibold">
        {heading}
        {overlaps
          ? ` · shared ${formatNumber(overlapMin)}–${formatNumber(overlapMax)}${unit === "pH" ? "" : ` ${unit}`}`
          : " · no shared window"}
      </figcaption>
      <div className="mt-2 space-y-2" aria-hidden="true">
        {rows.map((row) => (
          <div className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[9rem_1fr] sm:gap-3" key={row.name}>
            <span className="truncate text-sm">{row.name}</span>
            <span className="relative h-2 rounded-full bg-white/80">
              <span
                className="absolute inset-y-0 rounded-full bg-deep"
                style={{
                  left: `${((row.range.min - low) / span) * 100}%`,
                  width: `${(Math.max(row.range.max - row.range.min, span * 0.02) / span) * 100}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
      <table className="data-table mt-3 bg-white/70">
        <caption className="sr-only">{heading} by species</caption>
        <thead>
          <tr>
            <th scope="col">Species</th>
            <th scope="col">{heading}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>
                {formatNumber(row.range.min)}–{formatNumber(row.range.max)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
