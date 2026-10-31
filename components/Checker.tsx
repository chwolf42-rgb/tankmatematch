"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";
import { profiles as species } from "@/data/profiles";
import { buildQuery, checkSelection, MAX_SPECIES, parseQuery, tankFit } from "@/lib/checker";
import { formatRange } from "@/lib/format";
import type { SpeciesProfile } from "@/lib/types";
import { RangeChart } from "./RangeChart";
import { VerdictPill, verdictCard } from "./VerdictPill";

const TANK_PRESETS = [10, 20, 29, 40];

function matches(animal: SpeciesProfile, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) return false;
  return [animal.commonName, animal.scientificName, animal.slug, ...animal.aliases]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

function minimumLabel(animal: SpeciesProfile): string {
  const parts: string[] = [];
  if (animal.minTank.gallons != null) parts.push(`${animal.minTank.gallons} gal`);
  if (animal.minTank.lengthIn != null) parts.push(`${animal.minTank.lengthIn} in long`);
  else if (animal.minTank.lengthCm != null) parts.push(`${animal.minTank.lengthCm} cm long`);
  return parts.length > 0 ? parts.join(", ") : "no published gallon minimum";
}

function sizeProblem(gallons: number, selected: SpeciesProfile[]): string | null {
  const blocked = selected.filter((animal) =>
    tankFit(animal, gallons).reasons.some((reason) => reason.severity === "incompatible"),
  );
  if (blocked.length === 0) return null;
  return `Too small for ${blocked.map((animal) => animal.commonName).join(", ")}`;
}

export function Checker() {
  const listId = useId();
  const inputId = useId();
  const tankId = useId();
  const [ready, setReady] = useState(false);
  const [slugs, setSlugs] = useState<string[]>([]);
  const [tank, setTank] = useState("");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [limitNote, setLimitNote] = useState("");

  useEffect(() => {
    const parsed = parseQuery(window.location.search);
    setSlugs(parsed.slugs);
    setTank(parsed.tank != null ? String(parsed.tank) : "");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const tankNumber = tank.trim() === "" ? null : Number(tank);
    const safeTank = tankNumber != null && Number.isFinite(tankNumber) && tankNumber > 0 && tankNumber <= 500 ? tankNumber : null;
    const next = `${window.location.pathname}${buildQuery(slugs, safeTank)}`;
    if (`${window.location.pathname}${window.location.search}` === next) return;
    const state = window.history.state;
    window.history.replaceState(state, "", next);
  }, [ready, slugs, tank]);

  const selected = slugs.flatMap((slug) => {
    const animal = species.find((item) => item.slug === slug);
    return animal ? [animal] : [];
  });
  const trimmedQuery = query.trim();
  const showList = trimmedQuery.length > 0;
  const options = useMemo(
    () => species.filter((animal) => !slugs.includes(animal.slug) && matches(animal, trimmedQuery)),
    [trimmedQuery, slugs],
  );
  const activeIndex = options.length === 0 ? 0 : Math.min(active, options.length - 1);

  const tankNumber = tank.trim() === "" ? null : Number(tank);
  const safeTank = tankNumber != null && Number.isFinite(tankNumber) && tankNumber > 0 && tankNumber <= 500 ? tankNumber : null;
  const result = ready ? checkSelection(slugs, safeTank) : null;
  const tankBlocked =
    safeTank != null &&
    selected.some((animal) => tankFit(animal, safeTank).reasons.some((reason) => reason.severity === "incompatible"));
  const mateTank = tankBlocked ? null : safeTank;

  const mateChoices = useMemo(() => {
    if (slugs.length === 0) return [];
    return species
      .filter((animal) => !slugs.includes(animal.slug))
      .map((animal) => ({
        animal,
        report: checkSelection([...slugs, animal.slug], mateTank),
      }));
  }, [slugs, mateTank]);
  const goodMates = mateChoices.filter((item) => item.report.verdict === "compatible");
  const cautionMates = mateChoices.filter((item) => item.report.verdict === "caution");
  const mateTitle =
    selected.length === 1
      ? `Good tank mates for ${selected[0].commonName}`
      : `Good tank mates for ${selected.map((animal) => animal.commonName).join(" and ")}`;

  function addSlug(slug: string) {
    if (slugs.includes(slug)) return;
    if (slugs.length >= MAX_SPECIES) {
      setLimitNote(`The checker compares up to ${MAX_SPECIES} species at a time.`);
      setQuery("");
      return;
    }
    setLimitNote("");
    setSlugs((current) => [...current, slug]);
    setQuery("");
    setActive(0);
  }

  function removeSlug(slug: string) {
    setSlugs((current) => current.filter((item) => item !== slug));
    setLimitNote("");
  }

  async function copyLink() {
    const url = `${window.location.origin}/checker${buildQuery(slugs, safeTank)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
      window.prompt("Copy this link:", url);
    }
  }

  const shareHref = `/checker${buildQuery(slugs, safeTank)}`;

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(18rem,24rem)_1fr]">
      <form
        className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm sm:p-5"
        onSubmit={(event) => {
          event.preventDefault();
          if (showList && options[activeIndex]) addSlug(options[activeIndex].slug);
        }}
      >
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-slate-800">
          Search species
        </label>
        <input
          id={inputId}
          role="combobox"
          aria-expanded={showList}
          aria-controls={showList ? listId : undefined}
          aria-autocomplete="list"
          aria-activedescendant={showList && options[activeIndex] ? `${listId}-${options[activeIndex].slug}` : undefined}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          value={query}
          placeholder="Type a fish, e.g. betta"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-600"
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={(event) => {
            if (!showList) return;
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((current) => Math.min(current + 1, Math.max(options.length - 1, 0)));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((current) => Math.max(current - 1, 0));
            } else if (event.key === "Enter" && options[activeIndex]) {
              event.preventDefault();
              addSlug(options[activeIndex].slug);
            }
          }}
        />
        {showList ? (
          <ul id={listId} role="listbox" aria-label="Matching species" className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900">
            {options.length === 0 ? (
              <li className="px-3 py-3 text-sm text-slate-600">No match in this list of 100 species.</li>
            ) : (
              options.map((animal, index) => (
                <li key={animal.slug} role="presentation" className="border-t border-slate-100 first:border-t-0">
                  <button
                    type="button"
                    role="option"
                    id={`${listId}-${animal.slug}`}
                    aria-selected={index === activeIndex}
                    className={`flex min-h-11 w-full touch-manipulation flex-col items-start px-3 py-2 text-left ${
                      index === activeIndex ? "bg-foam" : "bg-white"
                    }`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => addSlug(animal.slug)}
                  >
                    <span className="font-semibold text-slate-900">{animal.commonName}</span>
                    <span className="text-sm italic text-slate-600">{animal.scientificName}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        ) : null}

        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Selected species">
          {selected.length === 0 ? (
            <li className="text-sm text-slate-600">Nothing selected yet. Type a name, then tap a match.</li>
          ) : (
            selected.map((animal) => (
              <li key={animal.slug} className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-foam py-1 pl-3 pr-1 text-sm font-semibold text-deep">
                <span>{animal.commonName}</span>
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full text-teal-900 hover:bg-white"
                  onClick={() => removeSlug(animal.slug)}
                >
                  <span className="sr-only">Remove {animal.commonName}</span>
                  <span aria-hidden="true">×</span>
                </button>
              </li>
            ))
          )}
        </ul>
        {limitNote ? <p className="mt-2 text-sm text-amber-900">{limitNote}</p> : null}

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-slate-800">Tank size</legend>
          <p className="mt-1 text-sm text-slate-600">Starts on Any size, which compares the animals and ignores gallons.</p>
          {selected.length > 0 ? (
            <ul className="mt-3 space-y-1 text-sm text-slate-800">
              {selected.map((animal) => (
                <li key={animal.slug}>
                  <span className="font-semibold">{animal.commonName}</span> needs {minimumLabel(animal)}.
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-slate-600">Add a fish to see which of these tanks are big enough.</p>
          )}
          <div className="mt-3 grid gap-2" role="group" aria-label="Common tank sizes">
            <button
              type="button"
              aria-pressed={tank.trim() === ""}
              className={`min-h-11 touch-manipulation rounded-lg border px-3 py-2 text-left text-sm font-semibold ${
                tank.trim() === "" ? "border-deep bg-deep text-white" : "border-slate-300 bg-white text-slate-800"
              }`}
              onClick={() => setTank("")}
            >
              Any size
              <span className={`mt-0.5 block text-xs font-medium ${tank.trim() === "" ? "text-teal-100" : "text-slate-600"}`}>
                No gallon limit
              </span>
            </button>
            {TANK_PRESETS.map((gallons) => {
              const pressed = Number(tank) === gallons;
              const problem = sizeProblem(gallons, selected);
              return (
                <button
                  key={gallons}
                  type="button"
                  aria-pressed={pressed}
                  disabled={Boolean(problem) && !pressed}
                  className={`min-h-11 touch-manipulation rounded-lg border px-3 py-2 text-left text-sm font-semibold disabled:cursor-not-allowed ${
                    problem
                      ? "border-red-200 bg-red-50 text-red-900"
                      : pressed
                        ? "border-emerald-700 bg-emerald-700 text-white"
                        : "border-slate-300 bg-white text-slate-800"
                  }`}
                  onClick={() => {
                    if (!problem) setTank(String(gallons));
                  }}
                >
                  {gallons} gal{problem ? `: ${problem.charAt(0).toLowerCase()}${problem.slice(1)}` : selected.length > 0 ? ": fits" : ""}
                  <span
                    className={`mt-0.5 block text-xs font-medium ${
                      problem ? "text-red-800" : pressed ? "text-emerald-50" : "text-slate-600"
                    }`}
                  >
                    {problem ?? (selected.length > 0 ? "Large enough for this selection" : "Available once a fish is added")}
                  </span>
                </button>
              );
            })}
          </div>
          <label htmlFor={tankId} className="mt-3 block text-sm text-slate-600">
            Or type a gallon size
          </label>
          <input
            id={tankId}
            inputMode="decimal"
            value={tank}
            onChange={(event) => setTank(event.target.value)}
            placeholder="Leave blank for any size"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-600"
          />
        </fieldset>
      </form>

      <section className="min-w-0 space-y-4" aria-live="polite">
        {!result || selected.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
            <p className="text-lg font-semibold text-slate-900">Type a fish to start</p>
            <p className="mx-auto mt-2 max-w-md text-slate-600">Matches stay listed under the box while you type. Tap one to add it.</p>
          </div>
        ) : (
          <>
            {result.verdict === "compatible" ? (
              <div className={`rounded-2xl border-2 p-5 sm:p-6 ${verdictCard.compatible}`}>
                <VerdictPill verdict="compatible" />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">These can share a tank.</h2>
                <p className="mt-2 text-sm leading-relaxed">{result.headline}</p>
              </div>
            ) : null}

            <div className="rounded-2xl border border-emerald-700 bg-emerald-50 p-4 text-emerald-950 sm:p-5">
              <h2 className="text-lg font-semibold tracking-tight">{mateTitle}</h2>
              {tankBlocked ? (
                <p className="mt-1 text-sm">
                  This list ignores {safeTank} gallons, because that tank is too small. These fish work together in a large enough tank.
                </p>
              ) : (
                <p className="mt-1 text-sm">Tap a name to add it.</p>
              )}
              {goodMates.length === 0 ? (
                <p className="mt-3 text-sm">
                  None of the other fish in this set are an unqualified yes. The cautious options below are the ones that can work.
                </p>
              ) : (
                <ul className="mt-3 grid gap-2">
                  {goodMates.map(({ animal }) => (
                    <li key={animal.slug}>
                      <button
                        type="button"
                        onClick={() => addSlug(animal.slug)}
                        className="flex min-h-11 w-full touch-manipulation items-center justify-between rounded-xl border border-emerald-700 bg-white px-3 py-2 text-left text-emerald-950"
                      >
                        <span>
                          <span className="block font-semibold">{animal.commonName}</span>
                          <span className="block text-sm italic text-emerald-900">{animal.scientificName}</span>
                        </span>
                        <span className="text-sm font-semibold">Add</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cautionMates.length > 0 ? (
              <div className="rounded-2xl border border-amber-700 bg-amber-50 p-4 text-amber-950 sm:p-5">
                <h2 className="text-lg font-semibold tracking-tight">Caution, still possible</h2>
                <ul className="mt-3 grid gap-2">
                  {cautionMates.map(({ animal, report }) => {
                    const reason = mateReason(report);
                    return (
                      <li key={animal.slug}>
                        <button
                          type="button"
                          onClick={() => addSlug(animal.slug)}
                          className="flex min-h-11 w-full touch-manipulation items-center justify-between gap-3 rounded-xl border border-amber-700 bg-white px-3 py-2 text-left text-amber-950"
                        >
                          <span>
                            <span className="block font-semibold">{animal.commonName}</span>
                            <span className="block text-sm text-amber-900">{reason}</span>
                          </span>
                          <span className="shrink-0 text-sm font-semibold">Add</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {result.verdict !== "compatible" ? (
              <div className={`rounded-2xl border-2 p-5 sm:p-6 ${verdictCard[result.verdict]}`}>
                <VerdictPill verdict={result.verdict} />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {result.verdict === "incomplete" ? "Add a tank mate from the list above." : result.headline}
                </h2>
                {result.verdict !== "incomplete" && result.window.tempF && result.window.pH ? (
                  <p className="mt-3 text-sm leading-relaxed">
                    Shared window: {formatRange(result.window.tempF, "°F")}, {formatRange(result.window.pH, "pH")}
                    {result.window.hardnessDGH ? `, ${formatRange(result.window.hardnessDGH, "dGH")}` : ""}
                    {result.window.hardnessSkipped.length > 0
                      ? `. Hardness was skipped for ${result.window.hardnessSkipped.join(" and ")}.`
                      : "."}
                  </p>
                ) : null}
                {selected.length >= 2 && result.window.tempF ? (
                  <RangeChart
                    label="Temperature"
                    unit="°F"
                    rows={selected.map((animal) => ({ name: animal.commonName, range: animal.tempF }))}
                  />
                ) : null}
                {selected.length >= 2 ? (
                  <RangeChart label="pH" unit="pH" rows={selected.map((animal) => ({ name: animal.commonName, range: animal.pH }))} />
                ) : null}
                <div className="mt-4 space-y-3">
                  {result.pairs.map((pair) => {
                    const a = species.find((item) => item.slug === pair.a);
                    const b = species.find((item) => item.slug === pair.b);
                    if (!a || !b) return null;
                    return (
                      <article key={`${pair.a}-${pair.b}`} className="rounded-xl border border-slate-200 bg-white/80 p-4 text-slate-900">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-lg font-semibold">
                            <Link href={`/species/${a.slug}`} className="text-teal-900">
                              {a.commonName}
                            </Link>
                            <span className="font-normal text-slate-700"> and </span>
                            <Link href={`/species/${b.slug}`} className="text-teal-900">
                              {b.commonName}
                            </Link>
                          </h3>
                          <VerdictPill verdict={pair.verdict} />
                        </div>
                        <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-800">
                          {pair.reasons.map((reason) => (
                            <p key={reason.code} className={reason.severity === "note" ? "text-slate-600" : undefined}>
                              {reason.text}
                            </p>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
                {result.tankReasons.length > 0 ? (
                  <div className="mt-4 space-y-2 text-sm leading-relaxed">
                    {result.tankReasons.map((reason) => (
                      <p key={reason.code} className={reason.severity === "note" ? "text-slate-700" : "rounded-lg bg-white/80 p-3"}>
                        {reason.text}
                      </p>
                    ))}
                  </div>
                ) : null}
                {result.stockingNotes.length > 0 ? (
                  <ul className="mt-4 space-y-1 text-sm">
                    {result.stockingNotes.map((note) => (
                      <li key={note.text}>{note.text}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <Details resultReady={result} selected={selected} />
            )}

            {selected.length > 0 ? (
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex min-h-11 touch-manipulation items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white"
                >
                  {copied ? "Link copied" : "Copy share link"}
                </button>
                <Link href={shareHref} className="text-sm font-semibold text-teal-900">
                  Open this selection on the checker page
                </Link>
              </div>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}

function mateReason(report: ReturnType<typeof checkSelection>): string {
  const reason = [...report.pairs.flatMap((pair) => pair.reasons), ...report.tankReasons].find(
    (item) => item.severity === "caution" || item.severity === "incompatible",
  );
  return reason?.text ?? "Check the ranges before you commit.";
}

function Details({
  resultReady,
  selected,
}: {
  resultReady: NonNullable<ReturnType<typeof checkSelection>>;
  selected: SpeciesProfile[];
}) {
  return (
    <div className={`rounded-2xl border-2 p-5 sm:p-6 ${verdictCard.compatible}`}>
      {resultReady.window.tempF && resultReady.window.pH ? (
        <p className="text-sm leading-relaxed">
          Shared window: {formatRange(resultReady.window.tempF, "°F")}, {formatRange(resultReady.window.pH, "pH")}
          {resultReady.window.hardnessDGH ? `, ${formatRange(resultReady.window.hardnessDGH, "dGH")}` : ""}.
        </p>
      ) : null}
      {selected.length >= 2 && resultReady.window.tempF ? (
        <RangeChart label="Temperature" unit="°F" rows={selected.map((animal) => ({ name: animal.commonName, range: animal.tempF }))} />
      ) : null}
      {selected.length >= 2 ? (
        <RangeChart label="pH" unit="pH" rows={selected.map((animal) => ({ name: animal.commonName, range: animal.pH }))} />
      ) : null}
    </div>
  );
}
