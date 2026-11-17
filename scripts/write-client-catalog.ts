import { mkdirSync, writeFileSync } from "node:fs";
import { profiles } from "../data/profiles";
import { toClientProfile, toPickerAnimal } from "../lib/client-catalog";

mkdirSync("public", { recursive: true });
writeFileSync("public/checker-catalog.json", JSON.stringify(profiles.map(toClientProfile)));
writeFileSync("public/picker.json", JSON.stringify(profiles.map(toPickerAnimal)));
console.log(`Wrote picker.json and checker-catalog.json for ${profiles.length} animals`);
