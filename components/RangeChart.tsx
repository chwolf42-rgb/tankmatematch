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

  return (
    <figure className="range-chart">
      <figcaption>
        {label}
        {overlaps
          ? `, shared window ${formatNumber(overlapMin)}–${formatNumber(overlapMax)} ${unit}`
          : ", no shared window"}
      </figcaption>
      <div className="range-rows" aria-hidden="true">
        {rows.map((row) => (
          <div className="range-row" key={row.name}>
            <span>{row.name}</span>
            <span className="range-track">
              <span
                className="range-bar"
                style={{
                  left: `${((row.range.min - low) / span) * 100}%`,
                  width: `${(Math.max(row.range.max - row.range.min, span * 0.015) / span) * 100}%`,
                }}
              />
            </span>
          </div>
        ))}
      </div>
      <table>
        <caption className="sr-only">{label} by species</caption>
        <thead>
          <tr>
            <th scope="col">Species</th>
            <th scope="col">{unit && unit !== label ? `${label} (${unit})` : label}</th>
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
