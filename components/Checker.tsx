"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { species } from "@/data/species";
import { buildQuery, checkSelection, MAX_SPECIES, parseQuery } from "@/lib/checker";
import { formatRange } from "@/lib/format";
import type { Species } from "@/lib/types";
import { RangeChart } from "./RangeChart";
import { VerdictPill, verdictCard } from "./VerdictPill";

const TANK_PRESETS = [10, 20, 29, 40];

function matches(animal: Species, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  return [animal.commonName, animal.scientificName, animal.slug, ...animal.aliases]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

export function Checker() {
  const listId = useId();
  const inputId = useId();
  const tankId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typedAt = useRef(0);
  const [ready, setReady] = useState(false);
  const [slugs, setSlugs] = useState<string[]>([]);
  const [tank, setTank] = useState("");
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [dropUp, setDropUp] = useState(false);
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
    // Pass the existing history entry through. replaceState(null, ...) misses Next's
    // __NA fast path and dispatches a route restore, which can remount this field.
    const state = window.history.state;
    window.history.replaceState(state, "", next);
  }, [ready, slugs, tank]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (boxRef.current?.contains(event.target as Node)) return;
      // A software keyboard can emit a pointer event just after a character.
      // Closing on that event hides the matches the keystroke just opened.
      if (Date.now() - typedAt.current < 500) return;
      setFocused(false);
      setDismissed(true);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const selected = slugs.flatMap((slug) => {
    const animal = species.find((item) => item.slug === slug);
    return animal ? [animal] : [];
  });
  const options = useMemo(
    () => species.filter((animal) => !slugs.includes(animal.slug) && matches(animal, query)),
    [query, slugs],
  );
  const activeIndex = options.length === 0 ? 0 : Math.min(active, options.length - 1);
  const showList = !dismissed && (focused || query.trim().length > 0);

  useLayoutEffect(() => {
    if (!showList || !inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    setDropUp(spaceBelow < 240 && rect.top > spaceBelow);
    listRef.current?.scrollIntoView({ block: "nearest" });
  }, [showList, query]);

  const tankNumber = tank.trim() === "" ? null : Number(tank);
  const safeTank = tankNumber != null && Number.isFinite(tankNumber) && tankNumber > 0 && tankNumber <= 500 ? tankNumber : null;
  const result = ready ? checkSelection(slugs, safeTank) : null;

  function addSlug(slug: string) {
    if (slugs.includes(slug)) return;
    if (slugs.length >= MAX_SPECIES) {
      setLimitNote(`The checker compares up to ${MAX_SPECIES} species at a time.`);
      setDismissed(true);
      return;
    }
    setLimitNote("");
    setSlugs((current) => [...current, slug]);
    setQuery("");
    setDismissed(true);
    setActive(0);
    inputRef.current?.focus();
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
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(18rem,22rem)_1fr]">
      <form
        className="relative z-20 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm sm:p-5"
        onSubmit={(event) => {
          event.preventDefault();
          if (showList && options[activeIndex]) addSlug(options[activeIndex].slug);
        }}
      >
        <div ref={boxRef} className="relative">
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-semibold text-slate-800">
            Search species
          </label>
          <input
            id={inputId}
            ref={inputRef}
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
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 placeholder:text-slate-500"
            onChange={(event) => {
              typedAt.current = Date.now();
              setQuery(event.target.value);
              setDismissed(false);
              setFocused(true);
              setActive(0);
            }}
            onFocus={() => setFocused(true)}
            onClick={() => setDismissed(false)}
            onBlur={(event) => {
              if (boxRef.current?.contains(event.relatedTarget as Node | null)) return;
              setFocused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setDismissed(false);
                setActive((current) => Math.min(current + 1, Math.max(options.length - 1, 0)));
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setDismissed(false);
                setActive((current) => Math.max(current - 1, 0));
              } else if (event.key === "Escape") {
                setDismissed(true);
              } else if (event.key === "Enter" && showList && options[activeIndex]) {
                event.preventDefault();
                addSlug(options[activeIndex].slug);
              }
            }}
          />
          {showList ? (
            <ul
              id={listId}
              ref={listRef}
              role="listbox"
              aria-label="Matching species"
              className={`z-50 max-h-72 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 text-slate-900 shadow-lg ${
                dropUp ? "absolute bottom-full left-0 right-0 mb-1" : "relative mt-1"
              }`}
            >
              {options.length === 0 ? (
                <li className="px-3 py-3 text-sm text-slate-600">No match in this first set of ten species.</li>
              ) : (
                options.map((animal, index) => (
                  <li key={animal.slug} role="presentation">
                    <button
                      type="button"
                      role="option"
                      id={`${listId}-${animal.slug}`}
                      aria-selected={index === activeIndex}
                      className={`flex min-h-11 w-full flex-col items-start px-3 py-2 text-left ${
                        index === activeIndex ? "bg-foam" : "bg-white"
                      }`}
                      onMouseEnter={() => setActive(index)}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        addSlug(animal.slug);
                      }}
                      onPointerDown={(event) => {
                        event.preventDefault();
                        addSlug(animal.slug);
                      }}
                    >
                      <span className="font-semibold text-slate-900">{animal.commonName}</span>
                      <span className="text-sm italic text-slate-500">{animal.scientificName}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          ) : null}
        </div>

        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Selected species">
          {selected.length === 0 ? (
            <li className="text-sm text-slate-500">Nothing selected yet. Choose a name from the list.</li>
          ) : (
            selected.map((animal) => (
              <li key={animal.slug} className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-foam py-1 pl-3 pr-1 text-sm font-semibold text-deep">
                <span>{animal.commonName}</span>
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-teal-900 hover:bg-white"
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
          <legend className="mb-2 text-sm font-semibold text-slate-800">Tank size, optional</legend>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Common tank sizes">
            <button
              type="button"
              aria-pressed={tank.trim() === ""}
              className={`min-h-11 rounded-lg border px-3 text-sm font-semibold ${
                tank.trim() === "" ? "border-deep bg-deep text-white" : "border-slate-300 bg-white text-slate-800"
              }`}
              onClick={() => setTank("")}
            >
              Any size
            </button>
            {TANK_PRESETS.map((gallons) => {
              const pressed = Number(tank) === gallons;
              return (
                <button
                  key={gallons}
                  type="button"
                  aria-pressed={pressed}
                  className={`min-h-11 rounded-lg border px-3 text-sm font-semibold ${
                    pressed ? "border-deep bg-deep text-white" : "border-slate-300 bg-white text-slate-800"
                  }`}
                  onClick={() => setTank(String(gallons))}
                >
                  {gallons} gal
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
            placeholder="e.g. 20"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-3 text-base placeholder:text-slate-500"
          />
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Leave this on “Any size” to compare the animals only. Gallons are not the tank’s length.
          </p>
        </fieldset>
      </form>

      <section className="min-w-0" aria-live="polite">
        {!result ? (
          <p className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">Loading the shared selection…</p>
        ) : result.verdict === "incomplete" ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
            <p className="text-lg font-semibold text-slate-900">{result.headline}</p>
            <p className="mx-auto mt-2 max-w-md text-slate-600">
              Search for a fish, tap a result, and it stays as a chip. The verdict appears as soon as two species are selected.
            </p>
          </div>
        ) : (
          <div className={`rounded-2xl border-2 p-5 sm:p-6 ${verdictCard[result.verdict]}`}>
            <VerdictPill verdict={result.verdict} />
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{result.headline}</h2>
            {result.window.tempF && result.window.pH ? (
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
                  <article key={`${pair.a}-${pair.b}`} className="rounded-xl border border-current/15 bg-white/80 p-4 text-slate-900">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold">
                        <Link href={`/species/${a.slug}`} className="text-teal-900 no-underline hover:underline">
                          {a.commonName}
                        </Link>
                        <span className="font-normal text-slate-500"> and </span>
                        <Link href={`/species/${b.slug}`} className="text-teal-900 no-underline hover:underline">
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
                  <p key={reason.code} className={reason.severity === "note" ? "text-slate-700" : "rounded-lg bg-white/70 p-3"}>
                    {reason.text}
                  </p>
                ))}
              </div>
            ) : null}
            {result.stockingNotes.length > 0 ? (
              <ul className="mt-4 space-y-1 text-sm text-slate-800">
                {result.stockingNotes.map((note) => (
                  <li key={note.text}>{note.text}</li>
                ))}
              </ul>
            ) : null}

            {selected.length > 0 ? (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex min-h-11 items-center rounded-lg bg-deep px-4 text-sm font-semibold text-white"
                >
                  {copied ? "Link copied" : "Copy share link"}
                </button>
                <Link href={shareHref} className="text-sm font-semibold text-teal-900">
                  Open this selection on the checker page
                </Link>
              </div>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
}
