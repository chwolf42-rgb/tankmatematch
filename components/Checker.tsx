"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { species } from "@/data/species";
import { buildQuery, checkSelection, MAX_SPECIES, parseQuery } from "@/lib/checker";
import { formatRange } from "@/lib/format";
import type { Species } from "@/lib/types";
import { RangeChart } from "./RangeChart";
import { VerdictPill } from "./VerdictPill";

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
  const [ready, setReady] = useState(false);
  const [slugs, setSlugs] = useState<string[]>([]);
  const [tank, setTank] = useState("");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [limitNote, setLimitNote] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

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
    window.history.replaceState(null, "", next);
  }, [ready, slugs, tank]);

  const selected = slugs.flatMap((slug) => {
    const animal = species.find((item) => item.slug === slug);
    return animal ? [animal] : [];
  });
  const options = useMemo(
    () => species.filter((animal) => !slugs.includes(animal.slug) && matches(animal, query)),
    [query, slugs],
  );

  const tankNumber = tank.trim() === "" ? null : Number(tank);
  const safeTank = tankNumber != null && Number.isFinite(tankNumber) && tankNumber > 0 && tankNumber <= 500 ? tankNumber : null;
  const result = ready ? checkSelection(slugs, safeTank) : null;

  function addSlug(slug: string) {
    if (slugs.includes(slug)) return;
    if (slugs.length >= MAX_SPECIES) {
      setLimitNote(`The checker compares up to ${MAX_SPECIES} species at a time.`);
      return;
    }
    setLimitNote("");
    setSlugs((current) => [...current, slug]);
    setQuery("");
    setOpen(false);
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
    <div className="checker-grid">
      <form
        className="checker-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (options[active]) addSlug(options[active].slug);
        }}
      >
        <div>
          <label htmlFor={inputId}>Add a species</label>
          <input
            id={inputId}
            ref={inputRef}
            role="combobox"
            aria-expanded={open}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={open && options[active] ? `${listId}-${options[active].slug}` : undefined}
            value={query}
            placeholder="Betta, Corydoras aeneus, harlequin…"
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
              setActive(0);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setOpen(true);
                setActive((current) => Math.min(current + 1, Math.max(options.length - 1, 0)));
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setActive((current) => Math.max(current - 1, 0));
              } else if (event.key === "Escape") {
                setOpen(false);
              } else if (event.key === "Enter" && open && options[active]) {
                event.preventDefault();
                addSlug(options[active].slug);
              }
            }}
          />
          <ul id={listId} role="listbox" aria-label="Matching species" hidden={!open} className="species-options">
            {options.length === 0 ? (
              <li className="option-empty">No match in this first set of ten species.</li>
            ) : (
              options.map((animal, index) => (
                <li key={animal.slug} role="presentation">
                  <button
                    type="button"
                    role="option"
                    id={`${listId}-${animal.slug}`}
                    aria-selected={index === active}
                    className={index === active ? "is-active" : undefined}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => addSlug(animal.slug)}
                  >
                    <span>{animal.commonName}</span>
                    <span className="sci">{animal.scientificName}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        <ul className="chips" aria-label="Selected species">
          {selected.map((animal) => (
            <li key={animal.slug}>
              <span>{animal.commonName}</span>
              <button type="button" onClick={() => removeSlug(animal.slug)}>
                Remove {animal.commonName}
              </button>
            </li>
          ))}
        </ul>
        {limitNote ? <p className="note">{limitNote}</p> : null}

        <div>
          <label htmlFor={tankId}>Tank size in US gallons, optional</label>
          <input
            id={tankId}
            inputMode="decimal"
            value={tank}
            onChange={(event) => setTank(event.target.value)}
            placeholder="e.g. 20"
          />
          <p className="note">Leave this blank to compare the animals only. A gallon count is not a footprint.</p>
        </div>
      </form>

      <section className="checker-result" aria-live="polite">
        {!result ? (
          <p>Loading the shared selection…</p>
        ) : (
          <>
            <VerdictPill verdict={result.verdict} />
            <h2>{result.headline}</h2>
            {result.verdict !== "incomplete" && result.window.tempF && result.window.pH ? (
              <p>
                Shared window: {formatRange(result.window.tempF, "°F")}
                {result.window.pH ? `, ${formatRange(result.window.pH, "pH")}` : ""}
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
              <RangeChart
                label="pH"
                unit="pH"
                rows={selected.map((animal) => ({ name: animal.commonName, range: animal.pH }))}
              />
            ) : null}

            {result.pairs.map((pair) => {
              const a = species.find((item) => item.slug === pair.a);
              const b = species.find((item) => item.slug === pair.b);
              if (!a || !b) return null;
              return (
                <article key={`${pair.a}-${pair.b}`} className="pair-block">
                  <h3>
                    <Link href={`/species/${a.slug}`}>{a.commonName}</Link>
                    {" and "}
                    <Link href={`/species/${b.slug}`}>{b.commonName}</Link>
                  </h3>
                  <VerdictPill verdict={pair.verdict} />
                  {pair.reasons.map((reason) => (
                    <p key={reason.code} className={reason.severity === "note" ? "note" : undefined}>
                      {reason.text}
                    </p>
                  ))}
                </article>
              );
            })}

            {result.tankReasons.map((reason) => (
              <p key={reason.code} className={reason.severity === "note" ? "note" : "callout"}>
                {reason.text}
              </p>
            ))}
            {result.stockingNotes.map((note) => (
              <p key={note.text} className="note">
                {note.text}
              </p>
            ))}

            {selected.length > 0 ? (
              <p className="share-row">
                <button type="button" onClick={copyLink}>
                  {copied ? "Link copied" : "Copy share link"}
                </button>
                <Link href={shareHref}>Open this selection on the checker page</Link>
              </p>
            ) : null}
          </>
        )}
      </section>
    </div>
  );
}
