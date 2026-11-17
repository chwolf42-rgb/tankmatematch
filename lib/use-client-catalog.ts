"use client";

import { useEffect, useState } from "react";
import { bindCatalog } from "./checker";
import type { PickerAnimal } from "./client-catalog";
import type { SpeciesProfile } from "./types";

let pickerPromise: Promise<PickerAnimal[]> | null = null;
let catalogPromise: Promise<SpeciesProfile[]> | null = null;

function loadPicker(): Promise<PickerAnimal[]> {
  pickerPromise ??= fetch("/picker.json").then((response) => {
    if (!response.ok) throw new Error("Species list failed to load.");
    return response.json() as Promise<PickerAnimal[]>;
  });
  return pickerPromise;
}

function loadCatalog(): Promise<SpeciesProfile[]> {
  catalogPromise ??= fetch("/checker-catalog.json").then(async (response) => {
    if (!response.ok) throw new Error("Compatibility data failed to load.");
    const list = (await response.json()) as SpeciesProfile[];
    bindCatalog(list);
    return list;
  });
  return catalogPromise;
}

export function useClientCatalog(loadDetails: boolean): { picker: PickerAnimal[] | null; catalog: SpeciesProfile[] | null; error: string } {
  const [picker, setPicker] = useState<PickerAnimal[] | null>(null);
  const [catalog, setCatalog] = useState<SpeciesProfile[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let live = true;
    loadPicker()
      .then((list) => {
        if (live) setPicker(list);
      })
      .catch(() => {
        if (live) setError("The species list did not load. Refresh the page.");
      });
    return () => {
      live = false;
    };
  }, []);

  useEffect(() => {
    if (!loadDetails) return;
    let live = true;
    loadCatalog()
      .then((list) => {
        if (live) setCatalog(list);
      })
      .catch(() => {
        if (live) setError("The compatibility data did not load. Refresh the page.");
      });
    return () => {
      live = false;
    };
  }, [loadDetails]);

  return { picker, catalog, error };
}
