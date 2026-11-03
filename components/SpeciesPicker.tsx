"use client";

import { useId, useMemo, useState } from "react";
import { profiles } from "@/data/profiles";
import { MAX_SPECIES } from "@/lib/checker";
import { buildSpeciesPresets } from "@/lib/presets";
import { MIN_SPECIES_QUERY, searchSpecies } from "@/lib/species-search";
import type { SpeciesProfile } from "@/lib/types";

const TEMPERAMENTS = [
  { id: "all", label: "All temperaments" },
  { id: "peaceful", label: "Peaceful" },
  { id: "semi-aggressive", label: "Semi-aggressive" },
] as const;

export function SpeciesPicker({
  slugs,
  limitNote,
  onAdd,
  onRemove,
  onReplace,
  onClear,
}: {
  slugs: string[];
  limitNote: string;
  onAdd: (slug: string) => void;
  onRemove: (slug: string) => void;
  onReplace: (slugs: string[], gallons: number | null) => void;
  onClear: () => void;
}) {
  const helpId = useId();
  const listId = useId();
  const inputId = useId();
  const familyId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [browse, setBrowse] = useState(false);
  const [temperament, setTemperament] = useState<(typeof TEMPERAMENTS)[number]["id"]>("all");
  const [family, setFamily] = useState("all");
  const presets = useMemo(() => buildSpeciesPresets(), []);
  const families = useMemo(
    () => [...new Set(profiles.map((animal) => animal.family))].sort((a, b) => a.localeCompare(b)),
    [],
  );
  const selected = slugs.flatMap((slug) => {
    const animal = profiles.find((item) => item.slug === slug);
    return animal ? [animal] : [];
  });
  const trimmedQuery = query.trim();
  const showList = trimmedQuery.length >= MIN_SPECIES_QUERY;
  const options = useMemo(
    () => (showList ? searchSpecies(trimmedQuery, profiles, slugs) : []),
    [showList, trimmedQuery, slugs],
  );
  const activeIndex = options.length === 0 ? 0 : Math.min(active, options.length - 1);
  const visible = useMemo(() => {
    return profiles
      .filter((animal) => (temperament === "all" ? true : animal.temperament === temperament))
      .filter((animal) => (family === "all" ? true : animal.family === family))
      .slice()
      .sort((a, b) => a.commonName.localeCompare(b.commonName, "en"));
  }, [temperament, family]);

  function applyPreset(slugsNext: string[], gallons: number | null) {
    setQuery("");
    setActive(0);
    onReplace(slugsNext, gallons);
  }

  return (
    <div>
      <p id={helpId} className="text-sm text-slate-600">
        Type 3 letters of a common or scientific name.
      </p>

      <label htmlFor={inputId} className="mb-1.5 mt-3 block text-sm font-semibold text-slate-800">
        Search species
      </label>
      <input
        id={inputId}
        role="combobox"
        aria-expanded={showList && options.length > 0}
        aria-controls={showList && options.length > 0 ? listId : undefined}
        aria-autocomplete="list"
        aria-haspopup="listbox"
        aria-describedby={helpId}
        aria-activedescendant={showList && options[activeIndex] ? `${listId}-${options[activeIndex].slug}` : undefined}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        enterKeyHint="search"
        value={query}
        placeholder="Type 3 or more letters"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-lg text-slate-900 placeholder:text-slate-500"
        onChange={(event) => {
          setQuery(event.target.value);
          setActive(0);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setQuery("");
            setActive(0);
            return;
          }
          if (!showList) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((current) => Math.min(current + 1, Math.max(options.length - 1, 0)));
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((current) => Math.max(current - 1, 0));
          } else if (event.key === "Enter" && options[activeIndex]) {
            event.preventDefault();
            onAdd(options[activeIndex].slug);
            setQuery("");
            setActive(0);
          }
        }}
      />
      {trimmedQuery.length > 0 && trimmedQuery.length < MIN_SPECIES_QUERY ? (
        <p className="mt-2 text-sm text-slate-600">Type {MIN_SPECIES_QUERY} letters to search.</p>
      ) : null}
      {showList && options.length === 0 ? (
        <p role="status" className="mt-2 text-sm text-slate-600">
          No match in this list of {profiles.length} species.
        </p>
      ) : null}
      {showList && options.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Matching species"
          className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-white text-slate-900"
        >
          {options.map((animal, index) => (
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
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onAdd(animal.slug);
                  setQuery("");
                  setActive(0);
                }}
              >
                <span className="font-semibold text-slate-900">{animal.commonName}</span>
                <span className="text-sm italic text-slate-600">{animal.scientificName}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Preset tanks">
        {presets.map((preset) => (
          <li key={preset.id}>
            <button
              type="button"
              className="inline-flex min-h-11 touch-manipulation items-center rounded-full border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800"
              onClick={() => applyPreset(preset.slugs, preset.gallons)}
            >
              {preset.label}
              <span className="sr-only">. {preset.detail}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Selected species">
        {selected.length === 0 ? null : (
          selected.map((animal) => (
            <li
              key={animal.slug}
              className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-foam py-1 pl-3 pr-1 text-sm font-semibold text-deep"
            >
              <span>{animal.commonName}</span>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full text-teal-900 hover:bg-white"
                onClick={() => onRemove(animal.slug)}
              >
                <span className="sr-only">Remove {animal.commonName}</span>
                <span aria-hidden="true">×</span>
              </button>
            </li>
          ))
        )}
      </ul>
      {limitNote ? <p className="mt-2 text-sm text-amber-900">{limitNote}</p> : null}

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          aria-expanded={browse}
          className="inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800"
          onClick={() => setBrowse((open) => !open)}
        >
          {browse ? "Hide species list" : "Browse all species"}
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 touch-manipulation items-center rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={slugs.length === 0}
          onClick={onClear}
        >
          Clear all
        </button>
      </div>
      {browse ? (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by temperament">
            {TEMPERAMENTS.map((option) => {
              const pressed = temperament === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={pressed}
                  className={`inline-flex min-h-11 touch-manipulation items-center rounded-lg border px-3 text-sm font-semibold ${
                    pressed ? "border-deep bg-deep text-white" : "border-slate-300 bg-white text-slate-800"
                  }`}
                  onClick={() => setTemperament(option.id)}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <label htmlFor={familyId} className="mt-3 block text-sm font-semibold text-slate-800">
            Family
          </label>
          <select
            id={familyId}
            value={family}
            onChange={(event) => setFamily(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900"
          >
            <option value="all">All families</option>
            {families.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <p className="mt-3 text-sm text-slate-600">
            {visible.length} of {profiles.length}. The checker holds {MAX_SPECIES} at a time.
          </p>
          <ul className="mt-2 max-h-80 space-y-1 overflow-y-auto" aria-label="All species">
            {visible.map((animal) => (
              <SpeciesCheck key={animal.slug} animal={animal} checked={slugs.includes(animal.slug)} onAdd={onAdd} onRemove={onRemove} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function SpeciesCheck({
  animal,
  checked,
  onAdd,
  onRemove,
}: {
  animal: SpeciesProfile;
  checked: boolean;
  onAdd: (slug: string) => void;
  onRemove: (slug: string) => void;
}) {
  const id = useId();
  return (
    <li>
      <label htmlFor={id} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg bg-white px-2 text-sm">
        <input
          id={id}
          type="checkbox"
          className="size-5 shrink-0 accent-teal-800"
          checked={checked}
          onChange={() => (checked ? onRemove(animal.slug) : onAdd(animal.slug))}
        />
        <span>
          <span className="font-semibold text-slate-900">{animal.commonName}</span>
          <span className="italic text-slate-600"> {animal.scientificName}</span>
        </span>
      </label>
    </li>
  );
}
