import type { SpeciesProfile } from "../lib/types";

export const wave2Profiles = [
  {
    slug: "ornate-tetra",
    commonName: "Ornate tetra",
    scientificName: "Megalamphodus bentosi",
    aliases: [
      "hyphessobrycon bentosi",
      "megalamphodus bentosi",
      "ornate tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Amazon River basin.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.3 cm SL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Ornate tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Ornate tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus bentosi (Ornate tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-bentosi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus bentosi on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-bentosi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 5.8–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "brilliant-rasbora",
    commonName: "Brilliant rasbora",
    scientificName: "Rasbora einthovenii",
    aliases: [
      "brilliant rasbora",
      "rasbora einthovenii"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Malay Peninsula and Indonesia.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 90,
    adultSizeIn: 3.5,
    adultSizeNote: "90 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 10.6 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 90 mm and with animal prey in the Seriously Fish diet notes, an adult Brilliant rasbora is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 90 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Brilliant rasbora moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rasbora einthovenii (Brilliant rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rasbora-einthovenii/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rasbora einthovenii on FishBase.",
        url: "https://www.fishbase.se/summary/Rasbora-einthovenii.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 90 mm SL. FishBase lists 10.6 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "checkered-barb",
    commonName: "Checkered barb",
    scientificName: "Oliotius oligolepis",
    aliases: [
      "checkered barb",
      "oliotius oligolepis"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Sumatra, Indonesia.",
    tempC: {
      min: 18,
      max: 25
    },
    tempF: {
      min: 64,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 5 cm TL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Checkered barb at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Checkered barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Oliotius oligolepis (Checkered barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/oliotius-oligolepis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Oliotius oligolepis on FishBase.",
        url: "https://www.fishbase.se/summary/Oliotius-oligolepis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 18–25°C (64–77°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "knife-livebearer",
    commonName: "Knife livebearer",
    scientificName: "Alfaro cultratus",
    aliases: [
      "alfaro cultratus",
      "knife livebearer"
    ],
    family: "Poeciliidae",
    origin: "FishBase: Central America: Costa Rica, Panama and Nicaragua.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 7.5 cm TL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Knife livebearer at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Knife livebearer easy. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Alfaro cultratus (Knife livebearer), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/alfaro-cultratus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Alfaro cultratus on FishBase.",
        url: "https://www.fishbase.se/summary/Alfaro-cultratus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–20 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 7.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "moonlight-gourami",
    commonName: "Moonlight gourami",
    scientificName: "Trichopodus microlepis",
    aliases: [
      "moonlight gourami",
      "trichopodus microlepis"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: originally occurring in the Mekong in Cambodia and Viet Nam and Chao Phraya basins.",
    tempC: {
      min: 25,
      max: 30
    },
    tempF: {
      min: 77,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 25
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 14 cm TL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Moonlight gourami at 150 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 150 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Moonlight gourami easy. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichopodus microlepis (Moonlight gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichopodus-microlepis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichopodus microlepis on FishBase.",
        url: "https://www.fishbase.se/summary/Trichopodus-microlepis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 25–30°C (77–86°F). FishBase lists 26–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 14 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "firemouth-cichlid",
    commonName: "Firemouth cichlid",
    scientificName: "Thorichthys meeki",
    aliases: [
      "firemouth cichlid",
      "thorichthys meeki"
    ],
    family: "Cichlidae",
    origin: "FishBase: Central America: Atlantic slope, in the Usumacinta River drainage, the Belize River drainage, and near Progreso, in Mexico, Guatemala and Belize.",
    tempC: {
      min: 20,
      max: 32
    },
    tempF: {
      min: 68,
      max: 90
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 17 cm TL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Firemouth cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Firemouth cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Thorichthys meeki (Firemouth cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/thorichthys-meeki/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Thorichthys meeki on FishBase.",
        url: "https://www.fishbase.se/summary/Thorichthys-meeki.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–32°C (68–90°F). FishBase lists 26–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–8.5. FishBase lists pH 6.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 17 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "kuhli-loach",
    commonName: "Kuhli loach",
    scientificName: "Pangio semicincta",
    aliases: [
      "kuhli loach",
      "pangio kuhlii",
      "pangio semicincta"
    ],
    family: "Cobitidae",
    origin: "FishBase: Asia: Malay Peninsula.",
    tempC: {
      min: 21,
      max: 26
    },
    tempF: {
      min: 70,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 3.5,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 8
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 5,
    minGroupNote: "Seriously Fish's behaviour section says at least 5. The checker uses 5.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Kuhli loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Kuhli loach easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pangio semicincta (Kuhli loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pangio-kuhlii/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pangio semicincta on FishBase.",
        url: "https://www.fishbase.se/summary/Pangio-semicincta.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "schwartzs-cory",
    commonName: "Schwartz's cory",
    scientificName: "Hoplisoma schwartzi",
    aliases: [
      "corydoras schwartzi",
      "hoplisoma schwartzi",
      "schwartz's catfish",
      "schwartz's cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Purus River basin in Brazil.",
    tempC: {
      min: 22,
      max: 24
    },
    tempF: {
      min: 72,
      max: 75
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 3.9 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 38 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Schwartz's cory at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Schwartz's cory moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma schwartzi (Schwartz's cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-schwartzi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma schwartzi on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-schwartzi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–24°C (72–75°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 3.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "boesemans-rainbowfish",
    commonName: "Boeseman's rainbowfish",
    scientificName: "Melanotaenia boesemani",
    aliases: [
      "boeseman's rainbowfish",
      "melanotaenia boesemani"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Asia: known only from the Ajamaru Lakes region in Vogelkop Peninsula, Irian Jaya, Indonesia. Also in the Aitinjo Lake, 20 km southeast of Ajamaru Lakes.",
    tempC: {
      min: 27,
      max: 30
    },
    tempF: {
      min: 81,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 10,
      max: 20
    },
    adultSizeMm: 110,
    adultSizeIn: 4,
    adultSizeNote: "110 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 9 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Boeseman's rainbowfish at 110 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 110 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Boeseman's rainbowfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia boesemani (Boeseman's rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-boesemani/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia boesemani on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-boesemani.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 110 mm SL. FishBase lists 9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "dwarf-puffer",
    commonName: "Dwarf puffer",
    scientificName: "Carinotetraodon travancoricus",
    aliases: [
      "carinotetraodon travancoricus",
      "dwarf puffer",
      "malabar pufferfish"
    ],
    family: "Tetraodontidae",
    origin: "FishBase: Asia: India.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6.8,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 3.5 cm TL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "At 25 mm and with animal prey in the Seriously Fish diet notes, an adult Dwarf puffer is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 25 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dwarf puffer moderate. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Carinotetraodon travancoricus (Dwarf puffer), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/carinotetraodon-travancoricus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Carinotetraodon travancoricus on FishBase.",
        url: "https://www.fishbase.se/summary/Carinotetraodon-travancoricus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.8–8. FishBase lists pH 7.5–8.3. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 25 mm SL. FishBase lists 3.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "red-phantom-tetra",
    commonName: "Red phantom tetra",
    scientificName: "Megalamphodus sweglesi",
    aliases: [
      "hyphessobrycon sweglesi",
      "megalamphodus sweglesi",
      "red phantom tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Orinoco River basin.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 4.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.2 cm SL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Red phantom tetra at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Red phantom tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus sweglesi (Red phantom tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-sweglesi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus sweglesi on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-sweglesi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 20–23°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4.5–7.5. FishBase lists pH 5.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "glowlight-rasbora",
    commonName: "Glowlight rasbora",
    scientificName: "Trigonopoma pauciperforatum",
    aliases: [
      "glowlight rasbora",
      "redstripe rasbora",
      "trigonopoma pauciperforatum"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Thailand, Cambodia.",
    tempC: {
      min: 21,
      max: 26
    },
    tempF: {
      min: 70,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 0,
      max: 10
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 7 cm TL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Glowlight rasbora at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Glowlight rasbora easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trigonopoma pauciperforatum (Glowlight rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trigonopoma-pauciperforatum/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trigonopoma pauciperforatum on FishBase.",
        url: "https://www.fishbase.se/summary/Trigonopoma-pauciperforatum.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–26°C (70–79°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7.5. FishBase lists pH 5–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "ticto-barb",
    commonName: "Ticto barb",
    scientificName: "Pethia ticto",
    aliases: [
      "pethia ticto",
      "ticto barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Pakistan, India, Nepal, Sri Lanka, Bangladesh, Myanmar and Thailand.",
    tempC: {
      min: 18,
      max: 25
    },
    tempF: {
      min: 64,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 12.5 cm TL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Ticto barb at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Ticto barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia ticto (Ticto barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-ticto/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia ticto on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-ticto.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 12.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "dusky-millions-fish",
    commonName: "Dusky millions fish",
    scientificName: "Phalloceros caudimaculatus",
    aliases: [
      "dusky millions fish",
      "phalloceros caudimaculatus"
    ],
    family: "Poeciliidae",
    origin: "FishBase: South America: Rio de Janeiro, Brazil southward to Uruguay and Argentina.",
    tempC: {
      min: 16,
      max: 22
    },
    tempF: {
      min: 61,
      max: 72
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 3.5 cm SL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dusky millions fish at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dusky millions fish moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Phalloceros caudimaculatus (Dusky millions fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/phalloceros-caudimaculatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Phalloceros caudimaculatus on FishBase.",
        url: "https://www.fishbase.se/summary/Phalloceros-caudimaculatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 16–22°C (61–72°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–25 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 3.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "banded-gourami",
    commonName: "Banded gourami",
    scientificName: "Trichogaster fasciata",
    aliases: [
      "banded gourami",
      "trichogaster fasciata"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Pakistan, India, Nepal, Bangladesh and upper Myanmar. Widely transported around the world.",
    tempC: {
      min: 21,
      max: 28
    },
    tempF: {
      min: 70,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 12.5 cm TL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Banded gourami at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Banded gourami beginner. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichogaster fasciata (Banded gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichogaster-fasciata/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichogaster fasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Trichogaster-fasciata.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 12.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "dwarf-flag-cichlid",
    commonName: "Dwarf flag cichlid",
    scientificName: "Laetacara curviceps",
    aliases: [
      "dwarf flag cichlid",
      "flag acara",
      "laetacara curviceps"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in lower portions of tributaries of the Amazon River in Brazil.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 4.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 4.6 cm SL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf flag cichlid at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Dwarf flag cichlid beginner. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Laetacara curviceps (Dwarf flag cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/laetacara-curviceps/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Laetacara curviceps on FishBase.",
        url: "https://www.fishbase.se/summary/Laetacara-curviceps.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4.5–7.5. FishBase lists pH 5.2–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "yo-yo-loach",
    commonName: "Yo-Yo loach",
    scientificName: "Botia almorhae",
    aliases: [
      "botia almorhae",
      "yo-yo loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: India and Nepal.",
    tempC: {
      min: 19,
      max: 27.5
    },
    tempF: {
      min: 66,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 160,
    adultSizeIn: 6,
    adultSizeNote: "160 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15.5 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 160 mm and with animal prey in the Seriously Fish diet notes, an adult Yo-Yo loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 160 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Yo-Yo loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Botia almorhae (Yo-Yo loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/botia-almorhae/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Botia almorhae on FishBase.",
        url: "https://www.fishbase.se/summary/Botia-almorhae.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "bandit-cory",
    commonName: "Bandit cory",
    scientificName: "Hoplisoma metae",
    aliases: [
      "bandit cory",
      "corydoras metae",
      "hoplisoma metae",
      "masked corydoras"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Meta River basin in Colombia.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 4.8 cm SL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Bandit cory at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Bandit cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma metae (Bandit cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-metae/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma metae on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-metae.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "neon-dwarf-rainbowfish",
    commonName: "Neon dwarf rainbowfish",
    scientificName: "Melanotaenia praecox",
    aliases: [
      "dwarf rainbowfish",
      "melanotaenia praecox",
      "neon dwarf rainbowfish"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Asia: Mamberamo River in northern Irian Jaya, Indonesia.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6.8,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 5 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Neon dwarf rainbowfish at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Neon dwarf rainbowfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia praecox (Neon dwarf rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-praecox/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia praecox on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-praecox.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "scarlet-badis",
    commonName: "Scarlet badis",
    scientificName: "Dario dario",
    aliases: [
      "dario dario",
      "scarlet badis"
    ],
    family: "Badidae",
    origin: "FishBase: Asia: India.",
    tempC: {
      min: 18,
      max: 26
    },
    tempF: {
      min: 64,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 20,
    adultSizeIn: 0.8,
    adultSizeNote: "20 mm SL on Seriously Fish, which also prints 0.8 in. FishBase lists 1.5 cm SL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Scarlet badis at 20 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 20 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Scarlet badis moderate. The temperament line is fights its own kind. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dario dario (Scarlet badis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dario-dario/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dario dario on FishBase.",
        url: "https://www.fishbase.se/summary/Dario-dario.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 20 mm SL. FishBase lists 1.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "head-and-tail-light-tetra",
    commonName: "Head-and-tail light tetra",
    scientificName: "Holopristis ocellifera",
    aliases: [
      "head-and-tail light tetra",
      "head-and-taillight tetra",
      "hemigrammus ocellifer",
      "holopristis ocellifera"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Rivers of Guyana, Suriname, French Guiana, and Amazon basin in Brazil and Peru.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.9 cm TL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 38 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Head-and-tail light tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Head-and-tail light tetra easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Holopristis ocellifera (Head-and-tail light tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-ocellifer/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Holopristis ocellifera on FishBase.",
        url: "https://www.fishbase.se/summary/Holopristis-ocellifera.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 4.9 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "elegant-rasbora",
    commonName: "Elegant rasbora",
    scientificName: "Rasbora elegans",
    aliases: [
      "elegant rasbora",
      "rasbora elegans",
      "twospot rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Malay Peninsula, Singapore, Borneo and Sumatra.",
    tempC: {
      min: 22,
      max: 25
    },
    tempF: {
      min: 72,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 20 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 200 mm and with animal prey in the Seriously Fish diet notes, an adult Elegant rasbora is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 200 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Elegant rasbora moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rasbora elegans (Elegant rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rasbora-elegans/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rasbora elegans on FishBase.",
        url: "https://www.fishbase.se/summary/Rasbora-elegans.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "melon-barb",
    commonName: "Melon barb",
    scientificName: "Haludaria fasciata",
    aliases: [
      "haludaria fasciata",
      "melon barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: endemic to southern India.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Melon barb at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Melon barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Haludaria fasciata (Melon barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/haludaria-fasciata/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Haludaria fasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Haludaria-fasciata.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "giant-sailfin-molly",
    commonName: "Giant sailfin molly",
    scientificName: "Poecilia velifera",
    aliases: [
      "giant sailfin molly",
      "poecilia velifera",
      "sail-fin molly"
    ],
    family: "Poeciliidae",
    origin: "FishBase: Central America: Yucatán-Quintana Roo and lower Usumacinta-Laguna de Términos systems in Mexico.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8.5
    },
    hardnessDGH: {
      min: 15,
      max: 35
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15 cm TL.",
    minTank: {
      gallons: 27,
      liters: 104,
      lengthCm: 91,
      lengthIn: null,
      stated: "base 91 × 38 cm, about 104 litres / 27 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Giant sailfin molly.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Giant sailfin molly easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Poecilia velifera (Giant sailfin molly), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/poecilia-velifera/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Poecilia velifera on FishBase.",
        url: "https://www.fishbase.se/summary/Poecilia-velifera.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–8.5. FishBase lists pH 8–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 15–35 dGH. FishBase lists dH 13–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "thick-lipped-gourami",
    commonName: "Thick-lipped gourami",
    scientificName: "Trichogaster labiosa",
    aliases: [
      "thick lipped gourami",
      "thick-lipped gourami",
      "trichogaster labiosa"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: South Myanmar. Widely transported around the world as part of the aquarium fish trade industry.",
    tempC: {
      min: 22,
      max: 27
    },
    tempF: {
      min: 72,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9 cm TL.",
    minTank: {
      gallons: 18,
      liters: 67,
      lengthCm: 74,
      lengthIn: null,
      stated: "base 74 × 30 cm, about 67 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Thick-lipped gourami is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Thick-lipped gourami beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichogaster labiosa (Thick-lipped gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichogaster-labiosa/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichogaster labiosa on FishBase.",
        url: "https://www.fishbase.se/summary/Trichogaster-labiosa.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–15 dGH. FishBase lists dH 4–10. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 9 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "borellis-dwarf-cichlid",
    commonName: "Borelli's dwarf cichlid",
    scientificName: "Apistogramma borellii",
    aliases: [
      "apistogramma borellii",
      "borelli's dwarf cichlid",
      "umbrella cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Paraguay River basin and along the lower Paraná River in Argentina.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 3.9 cm SL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Borelli's dwarf cichlid at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Borelli's dwarf cichlid beginner. The temperament line is peaceful. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Apistogramma borellii (Borelli's dwarf cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/apistogramma-borellii/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Apistogramma borellii on FishBase.",
        url: "https://www.fishbase.se/summary/Apistogramma-borellii.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 24–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 3.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "polka-dot-loach",
    commonName: "Polka-Dot loach",
    scientificName: "Botia kubotai",
    aliases: [
      "botia kubotai",
      "polka-dot loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Myanmar.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15 cm unspecified.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Polka-Dot loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Polka-Dot loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Botia kubotai (Polka-Dot loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/botia-kubotai/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Botia kubotai on FishBase.",
        url: "https://www.fishbase.se/summary/Botia-kubotai.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 15 cm unspecified. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "tail-spot-pygmy-cory",
    commonName: "Tail-spot pygmy cory",
    scientificName: "Gastrodermus hastatus",
    aliases: [
      "corydoras hastatus",
      "dwarf corydoras",
      "gastrodermus hastatus",
      "tail-spot pygmy cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Amazon and Paraguay River basins.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 32,
    adultSizeIn: 1.3,
    adultSizeNote: "32 mm SL on Seriously Fish, which also prints 1.3 in. FishBase lists 2.4 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Tail-spot pygmy cory at 32 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 32 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Tail-spot pygmy cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gastrodermus hastatus (Tail-spot pygmy cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-hastatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gastrodermus hastatus on FishBase.",
        url: "https://www.fishbase.se/summary/Gastrodermus-hastatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 32 mm SL. FishBase lists 2.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "threadfin-rainbowfish",
    commonName: "Threadfin rainbowfish",
    scientificName: "Iriatherina werneri",
    aliases: [
      "iriatherina werneri",
      "threadfin rainbowfish"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
    tempC: {
      min: 22,
      max: 30
    },
    tempF: {
      min: 72,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Threadfin rainbowfish at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Threadfin rainbowfish moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Iriatherina werneri (Threadfin rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/iriatherina-werneri/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Iriatherina werneri on FishBase.",
        url: "https://www.fishbase.se/summary/Iriatherina-werneri.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–30°C (72–86°F). FishBase lists 26–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "badis",
    commonName: "Badis",
    scientificName: "Badis badis",
    aliases: [
      "badis",
      "badis badis"
    ],
    family: "Badidae",
    origin: "FishBase: Asia: Ganges River drainage in India, Bangladesh, and Nepal, from Himachal Pradesh (Yamuna River) to the estuary; the Mahanadi River drainage; Assam lowlands close to Brahmaputra (Kaziranga, Gauhati, and Dibru River).",
    tempC: {
      min: 15,
      max: 25
    },
    tempF: {
      min: 59,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 3,
      max: 15
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 7.1 cm TL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Badis at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Badis moderate. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Badis badis (Badis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/badis-badis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Badis badis on FishBase.",
        url: "https://www.fishbase.se/summary/Badis-badis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 15–25°C (59–77°F). FishBase lists 14–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 7.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "false-rummy-nose",
    commonName: "False rummy-nose",
    scientificName: "Petitella georgiae",
    aliases: [
      "false rummy-nose",
      "false rummynose tetra",
      "petitella georgiae"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: upper Amazon River basin in Peru; Purus, Negro, and Madeira River basins.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 3.9 cm SL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult False rummy-nose at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates False rummy-nose easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Petitella georgiae (False rummy-nose), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/petitella-georgiae/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Petitella georgiae on FishBase.",
        url: "https://www.fishbase.se/summary/Petitella-georgiae.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 3.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "clown-rasbora",
    commonName: "Clown rasbora",
    scientificName: "Rasbora kalochroma",
    aliases: [
      "clown rasbora",
      "rasbora kalochroma"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Malay Peninsula and Indonesia (Borneo and Sumatra).",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 10 cm TL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Clown rasbora is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Clown rasbora moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rasbora kalochroma (Clown rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rasbora-kalochroma/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rasbora kalochroma on FishBase.",
        url: "https://www.fishbase.se/summary/Rasbora-kalochroma.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "pentazona-barb",
    commonName: "Pentazona barb",
    scientificName: "Desmopuntius hexazona",
    aliases: [
      "desmopuntius hexazona",
      "pentazona barb",
      "six-banded tiger barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Malay Peninsula, Borneo, Sumatra (Indonesia), and Singapore.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.5 cm TL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Pentazona barb at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Pentazona barb easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Desmopuntius hexazona (Pentazona barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/desmopuntius-hexazona/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Desmopuntius hexazona on FishBase.",
        url: "https://www.fishbase.se/summary/Desmopuntius-hexazona.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 5.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "wrestling-halfbeak",
    commonName: "Wrestling halfbeak",
    scientificName: "Dermogenys pusilla",
    aliases: [
      "dermogenys pusilla",
      "wrestling halfbeak"
    ],
    family: "Zenarchopteridae",
    origin: "FishBase: Asia: Java, Indonesia.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 10,
      max: 20
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 16.1 cm TL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 38 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Wrestling halfbeak at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Wrestling halfbeak moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dermogenys pusilla (Wrestling halfbeak), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dermogenys-pusilla/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dermogenys pusilla on FishBase.",
        url: "https://www.fishbase.se/summary/Dermogenys-pusilla.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 16.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "chocolate-gourami",
    commonName: "Chocolate gourami",
    scientificName: "Sphaerichthys osphromenoides",
    aliases: [
      "chocolate gourami",
      "sphaerichthys osphromenoides"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Indonesia (Sumatra and Borneo) and Malaya.",
    tempC: {
      min: 26,
      max: 31
    },
    tempF: {
      min: 79,
      max: 88
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 6.5
    },
    hardnessDGH: {
      min: 0,
      max: 3
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 6 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Chocolate gourami at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Chocolate gourami moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sphaerichthys osphromenoides (Chocolate gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sphaerichthys-osphromenoides/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sphaerichthys osphromenoides on FishBase.",
        url: "https://www.fishbase.se/summary/Sphaerichthys-osphromenoides.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 26–31°C (79–88°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–6.5. FishBase lists pH 4–6. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "skunk-loach",
    commonName: "Skunk loach",
    scientificName: "Yasuhikotakia morleti",
    aliases: [
      "skunk botia",
      "skunk loach",
      "yasuhikotakia morleti"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Mekong, Chao Phraya and Meklong basins, and peninsular Thailand.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 85,
    adultSizeIn: 3.3,
    adultSizeNote: "85 mm SL on Seriously Fish, which also prints 3.3 in. FishBase lists 10 cm TL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Skunk loach at 85 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 85 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Skunk loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Yasuhikotakia morleti (Skunk loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/yasuhikotakia-morleti/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Yasuhikotakia morleti on FishBase.",
        url: "https://www.fishbase.se/summary/Yasuhikotakia-morleti.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 26–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 85 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "rusty-cory",
    commonName: "Rusty cory",
    scientificName: "Osteogaster rabauti",
    aliases: [
      "corydoras rabauti",
      "osteogaster rabauti",
      "rust corydoras",
      "rusty cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Amazon, Solimões, and Negro River basins.",
    tempC: {
      min: 20,
      max: 27
    },
    tempF: {
      min: 68,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7.2
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 5 cm SL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Rusty cory at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Rusty cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Osteogaster rabauti (Rusty cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-rabauti/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Osteogaster rabauti on FishBase.",
        url: "https://www.fishbase.se/summary/Osteogaster-rabauti.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.2. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "spotted-blue-eye",
    commonName: "Spotted blue-eye",
    scientificName: "Pseudomugil gertrudae",
    aliases: [
      "pseudomugil gertrudae",
      "spotted blue-eye"
    ],
    family: "Pseudomugilidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
    tempC: {
      min: 21,
      max: 28
    },
    tempF: {
      min: 70,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 4.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 38,
    adultSizeIn: 1.5,
    adultSizeNote: "38 mm SL on Seriously Fish, which also prints 1.5 in. FishBase lists 3.8 cm SL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Spotted blue-eye at 38 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 38 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Spotted blue-eye moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudomugil gertrudae (Spotted blue-eye), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudomugil-gertrudae/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudomugil gertrudae on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudomugil-gertrudae.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 25–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4.5–7.5. FishBase lists pH 6–6. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "african-butterfly-fish",
    commonName: "African butterfly fish",
    scientificName: "Pantodon buchholzi",
    aliases: [
      "african butterfly fish",
      "freshwater butterflyfish",
      "pantodon buchholzi"
    ],
    family: "Pantodontidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
    tempC: {
      min: 23,
      max: 30
    },
    tempF: {
      min: 73,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11.9 cm TL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult African butterfly fish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates African butterfly fish moderate. The temperament line is eats smaller fish. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pantodon buchholzi (African butterfly fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pantodon-buchholzi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pantodon buchholzi on FishBase.",
        url: "https://www.fishbase.se/summary/Pantodon-buchholzi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 11.9 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "purple-emperor-tetra",
    commonName: "Purple emperor tetra",
    scientificName: "Inpaichthys kerri",
    aliases: [
      "inpaichthys kerri",
      "purple emperor tetra",
      "royal tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Aripuanã River, upper Madeira River basin, Mato Grosso, Brazil.",
    tempC: {
      min: 24,
      max: 27
    },
    tempF: {
      min: 75,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 2.8 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 38 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Purple emperor tetra at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Purple emperor tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Inpaichthys kerri (Purple emperor tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/inpaichthys-kerri/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Inpaichthys kerri on FishBase.",
        url: "https://www.fishbase.se/summary/Inpaichthys-kerri.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 2.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "spanner-barb",
    commonName: "Spanner barb",
    scientificName: "Striuntius lateristriga",
    aliases: [
      "barbodes lateristriga",
      "spanner barb",
      "striuntius lateristriga"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Malay Peninsula to Borneo.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 18.6 cm TL.",
    minTank: {
      gallons: 80,
      liters: 304,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 45 cm, about 304 litres / 80 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Spanner barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Spanner barb moderate. The temperament line is territorial. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Striuntius lateristriga (Spanner barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/barbodes-lateristriga/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Striuntius lateristriga on FishBase.",
        url: "https://www.fishbase.se/summary/Striuntius-lateristriga.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 18.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "metallic-girardinus",
    commonName: "Metallic girardinus",
    scientificName: "Girardinus metallicus",
    aliases: [
      "girardinus metallicus",
      "metallic girardinus",
      "metallic livebearer"
    ],
    family: "Poeciliidae",
    origin: "FishBase: Central America: Cuba.",
    tempC: {
      min: 22,
      max: 27
    },
    tempF: {
      min: 72,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 8,
      max: 20
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 5 cm TL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Metallic girardinus at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Metallic girardinus beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Girardinus metallicus (Metallic girardinus), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/girardinus-metallicus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Girardinus metallicus on FishBase.",
        url: "https://www.fishbase.se/summary/Girardinus-metallicus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "emerald-betta",
    commonName: "Emerald betta",
    scientificName: "Betta smaragdina",
    aliases: [
      "betta smaragdina",
      "blue betta",
      "emerald betta"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Mekong and Chao Phraya basins.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 7 cm TL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Emerald betta at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Emerald betta moderate. The temperament line is needs a tank of its own. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Betta smaragdina (Emerald betta), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/betta-smaragdina/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Betta smaragdina on FishBase.",
        url: "https://www.fishbase.se/summary/Betta-smaragdina.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "golden-dwarf-cichlid",
    commonName: "Golden dwarf cichlid",
    scientificName: "Nannacara anomala",
    aliases: [
      "golden dwarf cichlid",
      "goldeneye cichlid",
      "nannacara anomala"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Aruka River in Guyana east to the lower Marowijne River in Suriname.",
    tempC: {
      min: 22,
      max: 27
    },
    tempF: {
      min: 72,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: null,
    adultSizeMm: 76,
    adultSizeIn: 3,
    adultSizeNote: "76 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 5.6 cm SL.",
    minTank: {
      gallons: 14,
      liters: 52,
      lengthCm: 46,
      lengthIn: null,
      stated: "base 46 × 38 cm, about 52 litres / 14 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden dwarf cichlid at 76 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 76 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Golden dwarf cichlid easy. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannacara anomala (Golden dwarf cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannacara-anomala/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannacara anomala on FishBase.",
        url: "https://www.fishbase.se/summary/Nannacara-anomala.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 76 mm SL. FishBase lists 5.6 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "horseface-loach",
    commonName: "Horseface loach",
    scientificName: "Acantopsis dialuzona",
    aliases: [
      "acantopsis dialuzona",
      "horseface loach"
    ],
    family: "Cobitidae",
    origin: "FishBase: Asia: Java, Borneo, Sumatra, and the Malay Peninsula as far north as southern Thailand. Reported from areas of Southeast Asia outside its range, including as.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 25 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 200 mm and with animal prey in the Seriously Fish diet notes, an adult Horseface loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 200 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Horseface loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Acantopsis dialuzona (Horseface loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/acantopsis-dialuzona/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Acantopsis dialuzona on FishBase.",
        url: "https://www.fishbase.se/summary/Acantopsis-dialuzona.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 200 mm SL. FishBase lists 25 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "false-bandit-cory",
    commonName: "False bandit cory",
    scientificName: "Hoplisoma melini",
    aliases: [
      "bandit corydoras",
      "corydoras melini",
      "false bandit cory",
      "hoplisoma melini"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Negro and Meta River basins.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 5 cm SL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult False bandit cory at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates False bandit cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma melini (False bandit cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-melini/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma melini on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-melini.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–5 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "peacock-goby",
    commonName: "Peacock goby",
    scientificName: "Tateurndina ocellicauda",
    aliases: [
      "peacock goby",
      "peacock gudgeon",
      "tateurndina ocellicauda"
    ],
    family: "Eleotridae",
    origin: "FishBase: Oceania: eastern Papua New Guinea.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 10
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 7.5 cm TL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Peacock goby at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Peacock goby easy. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Tateurndina ocellicauda (Peacock goby), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/tateurndina-ocellicauda/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Tateurndina ocellicauda on FishBase.",
        url: "https://www.fishbase.se/summary/Tateurndina-ocellicauda.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 7.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "striped-panchax",
    commonName: "Striped panchax",
    scientificName: "Aplocheilus lineatus",
    aliases: [
      "aplocheilus lineatus",
      "striped panchax"
    ],
    family: "Aplocheilidae",
    origin: "FishBase: Asia: Widely distributed in Peninsular India.",
    tempC: {
      min: 24,
      max: 27
    },
    tempF: {
      min: 75,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm TL on Seriously Fish, which also prints 3.9 in. FishBase lists 10 cm TL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Striped panchax at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Striped panchax moderate. The temperament line is eats smaller fish. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aplocheilus lineatus (Striped panchax), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aplocheilus-lineatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aplocheilus lineatus on FishBase.",
        url: "https://www.fishbase.se/summary/Aplocheilus-lineatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm TL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "three-lined-pencilfish",
    commonName: "Three-lined pencilfish",
    scientificName: "Nannostomus trifasciatus",
    aliases: [
      "nannostomus trifasciatus",
      "three-lined pencilfish",
      "threestripe pencilfish"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Peruvian, Bolivian, and Brazilian Amazon River basin, Negro River basin, and Guyana.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 33,
    adultSizeIn: 1.3,
    adultSizeNote: "33 mm SL on Seriously Fish, which also prints 1.3 in. FishBase lists 3.6 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Three-lined pencilfish at 33 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 33 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Three-lined pencilfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus trifasciatus (Three-lined pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-trifasciatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus trifasciatus on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-trifasciatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7.5. FishBase lists pH 5.5–7. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "orange-finned-danio",
    commonName: "Orange-Finned danio",
    scientificName: "Danio kyathit",
    aliases: [
      "danio kyathit",
      "orange-finned danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: upper parts of three right bank tributaries of the upper Ayeyarwaddy near Myitkyina, the Hpa-Lap Chaung, Mogaung and Chindwin rivers in Myanmar.",
    tempC: {
      min: 16,
      max: 26
    },
    tempF: {
      min: 61,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 3.5 cm SL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Orange-Finned danio at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Orange-Finned danio moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio kyathit (Orange-Finned danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-kyathit/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio kyathit on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-kyathit.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 3.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "african-banded-barb",
    commonName: "African banded barb",
    scientificName: "Enteromius fasciolatus",
    aliases: [
      "african banded barb",
      "enteromius fasciolatus"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Africa: Cunene, Okavango.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 6.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult African banded barb at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates African banded barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Enteromius fasciolatus (African banded barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/enteromius-fasciolatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Enteromius fasciolatus on FishBase.",
        url: "https://www.fishbase.se/summary/Enteromius-fasciolatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–6.5. FishBase lists pH 6–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "black-bellied-limia",
    commonName: "Black-bellied limia",
    scientificName: "Limia melanogaster",
    aliases: [
      "black-bellied limia",
      "blackbelly limia",
      "limia melanogaster"
    ],
    family: "Poeciliidae",
    origin: "FishBase: Central America: Jamaica and Haiti.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 20,
      max: 30
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Black-bellied limia at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Black-bellied limia easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Limia melanogaster (Black-bellied limia), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/limia-melanogaster/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Limia melanogaster on FishBase.",
        url: "https://www.fishbase.se/summary/Limia-melanogaster.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "frail-gourami",
    commonName: "Frail gourami",
    scientificName: "Ctenops nobilis",
    aliases: [
      "ctenops nobilis",
      "frail gourami"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: India and Bangladesh.",
    tempC: {
      min: 15,
      max: 25
    },
    tempF: {
      min: 59,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 10 cm TL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Frail gourami is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Frail gourami moderate. The temperament line is fights its own kind. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Ctenops nobilis (Frail gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/ctenops-nobilis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Ctenops nobilis on FishBase.",
        url: "https://www.fishbase.se/summary/Ctenops-nobilis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 15–25°C (59–77°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "lyretail-checkerboard-cichlid",
    commonName: "Lyretail checkerboard cichlid",
    scientificName: "Dicrossus filamentosus",
    aliases: [
      "chessboard cichlid",
      "dicrossus filamentosus",
      "lyretail checkerboard cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in the Negro River drainage; Orinoco River basin in from Inírida River in Colombia to Maripa in Venezuela.",
    tempC: {
      min: 27,
      max: 30
    },
    tempF: {
      min: 81,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 6.5
    },
    hardnessDGH: null,
    adultSizeMm: 102,
    adultSizeIn: 4,
    adultSizeNote: "102 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 3.8 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 102 mm and with animal prey in the Seriously Fish diet notes, an adult Lyretail checkerboard cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 102 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Lyretail checkerboard cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dicrossus filamentosus (Lyretail checkerboard cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dicrossus-filamentosus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dicrossus filamentosus on FishBase.",
        url: "https://www.fishbase.se/summary/Dicrossus-filamentosus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 27–30°C (81–86°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–6.5. FishBase lists pH 5–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 102 mm SL. FishBase lists 3.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "redfin-tiger-loach",
    commonName: "Redfin tiger loach",
    scientificName: "Syncrossus berdmorei",
    aliases: [
      "blyth's loach",
      "redfin tiger loach",
      "syncrossus berdmorei"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: India, Myanmar and central Thailand.",
    tempC: {
      min: 21,
      max: 26
    },
    tempF: {
      min: 70,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 15 cm unspecified.",
    minTank: {
      gallons: 96,
      liters: 365,
      lengthCm: 180,
      lengthIn: null,
      stated: "base 180 × 45 cm, about 365 litres / 96 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Redfin tiger loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Redfin tiger loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Syncrossus berdmorei (Redfin tiger loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/syncrossus-berdmorei/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Syncrossus berdmorei on FishBase.",
        url: "https://www.fishbase.se/summary/Syncrossus-berdmorei.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–26°C (70–79°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 15 cm unspecified. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "celebes-rainbowfish",
    commonName: "Celebes rainbowfish",
    scientificName: "Marosatherina ladigesi",
    aliases: [
      "celebes rainbowfish",
      "marosatherina ladigesi"
    ],
    family: "Telmatherinidae",
    origin: "FishBase: Asia: Bantimurung area south Sulawesi, Indonesia.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 8 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 76,
      lengthIn: null,
      stated: "base 76 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Celebes rainbowfish at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Celebes rainbowfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Marosatherina ladigesi (Celebes rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/marosatherina-ladigesi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Marosatherina ladigesi on FishBase.",
        url: "https://www.fishbase.se/summary/Marosatherina-ladigesi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "clown-killifish",
    commonName: "Clown killifish",
    scientificName: "Epiplatys annulatus",
    aliases: [
      "banded panchax",
      "clown killifish",
      "epiplatys annulatus"
    ],
    family: "Nothobranchiidae",
    origin: "FishBase: Africa: Guinea, Liberia and Sierra Leone.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 8
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 4 cm TL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Clown killifish at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Clown killifish moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Epiplatys annulatus (Clown killifish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/epiplatys-annulatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Epiplatys annulatus on FishBase.",
        url: "https://www.fishbase.se/summary/Epiplatys-annulatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 4 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "coral-red-pencilfish",
    commonName: "Coral red pencilfish",
    scientificName: "Nannostomus mortenthaleri",
    aliases: [
      "coral red pencilfish",
      "nannostomus mortenthaleri"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Peru.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 2.9 cm SL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Coral red pencilfish at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Coral red pencilfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus mortenthaleri (Coral red pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-mortenthaleri/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus mortenthaleri on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-mortenthaleri.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "dwarf-spotted-danio",
    commonName: "Dwarf spotted danio",
    scientificName: "Danio nigrofasciatus",
    aliases: [
      "danio nigrofasciatus",
      "dwarf danio",
      "dwarf spotted danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: northern Myanmar.",
    tempC: {
      min: 18,
      max: 26
    },
    tempF: {
      min: 64,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.7 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf spotted danio at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Dwarf spotted danio easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio nigrofasciatus (Dwarf spotted danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-nigrofasciatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio nigrofasciatus on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-nigrofasciatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 18–26°C (64–79°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "mascara-barb",
    commonName: "Mascara barb",
    scientificName: "Dawkinsia assimilis",
    aliases: [
      "dawkinsia assimilis",
      "mascara barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: India.",
    tempC: {
      min: 19,
      max: 25
    },
    tempF: {
      min: 66,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11.2 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Mascara barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Mascara barb moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dawkinsia assimilis (Mascara barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dawkinsia-assimilis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dawkinsia assimilis on FishBase.",
        url: "https://www.fishbase.se/summary/Dawkinsia-assimilis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "tiger-teddy",
    commonName: "Tiger teddy",
    scientificName: "Neoheterandria elegans",
    aliases: [
      "neoheterandria elegans",
      "tiger teddy"
    ],
    family: "Poeciliidae",
    origin: "FishBase: South America: Rio Truando, a tributary of the Rio Atrato in Colombia.",
    tempC: {
      min: 24,
      max: 30
    },
    tempF: {
      min: 75,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2 cm TL.",
    minTank: {
      gallons: 3,
      liters: 12,
      lengthCm: 30,
      lengthIn: null,
      stated: "base 30 × 20 cm, about 12 litres / 3 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Tiger teddy at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Tiger teddy moderate. The temperament line is needs a tank of its own. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Neoheterandria elegans (Tiger teddy), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/neoheterandria-elegans/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Neoheterandria elegans on FishBase.",
        url: "https://www.fishbase.se/summary/Neoheterandria-elegans.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–30°C (75–86°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 25 mm SL. FishBase lists 2 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "brown-spike-tailed-paradise-fish",
    commonName: "Brown spike-tailed paradise fish",
    scientificName: "Pseudosphromenus dayi",
    aliases: [
      "brown spike-tailed paradise fish",
      "pseudosphromenus dayi"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Kerala, India.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 7.5 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Brown spike-tailed paradise fish at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Brown spike-tailed paradise fish easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudosphromenus dayi (Brown spike-tailed paradise fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudosphromenus-dayi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudosphromenus dayi on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudosphromenus-dayi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 4–15. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 7.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "rainbow-cichlid",
    commonName: "Rainbow cichlid",
    scientificName: "Herotilapia multispinosa",
    aliases: [
      "herotilapia multispinosa",
      "rainbow cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Central America: San Juan ichthyological province of Costa Rica and Nicaragua.",
    tempC: {
      min: 22,
      max: 28
    },
    tempF: {
      min: 72,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 0,
      max: 20
    },
    adultSizeMm: 175,
    adultSizeIn: 7,
    adultSizeNote: "175 mm SL on Seriously Fish, which also prints 7.0 in. FishBase lists 17 cm TL.",
    minTank: {
      gallons: 27,
      liters: 103,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 38 cm, about 103 litres / 27 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Rainbow cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Rainbow cichlid easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Herotilapia multispinosa (Rainbow cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/herotilapia-multispinosa/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Herotilapia multispinosa on FishBase.",
        url: "https://www.fishbase.se/summary/Herotilapia-multispinosa.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 21–36°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–20 dGH. FishBase lists dH 9–20. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 175 mm SL. FishBase lists 17 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "butterfly-loach",
    commonName: "Butterfly loach",
    scientificName: "Beaufortia kweichowensis",
    aliases: [
      "beaufortia kweichowensis",
      "butterfly loach"
    ],
    family: "Gastromyzontidae",
    origin: "FishBase: Asia: China.",
    tempC: {
      min: 16,
      max: 24
    },
    tempF: {
      min: 61,
      max: 75
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 8 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Butterfly loach at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Butterfly loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Beaufortia kweichowensis (Butterfly loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/beaufortia-kweichowensis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Beaufortia kweichowensis on FishBase.",
        url: "https://www.fishbase.se/summary/Beaufortia-kweichowensis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "zebra-oto",
    commonName: "Zebra oto",
    scientificName: "Otocinclus cocama",
    aliases: [
      "otocinclus cocama",
      "zebra oto"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Peru.",
    tempC: {
      min: 21,
      max: 25
    },
    tempF: {
      min: 70,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.4 cm SL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Zebra oto.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Zebra oto moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Otocinclus cocama (Zebra oto), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/otocinclus-cocama/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Otocinclus cocama on FishBase.",
        url: "https://www.fishbase.se/summary/Otocinclus-cocama.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "red-rainbowfish",
    commonName: "Red rainbowfish",
    scientificName: "Glossolepis incisa",
    aliases: [
      "glossolepis incisa",
      "glossolepis incisus",
      "red rainbowfish"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Asia: Endemic to Lake Sentani in Irian Jaya, Indonesia.",
    tempC: {
      min: 24,
      max: 29
    },
    tempF: {
      min: 75,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 10,
      max: 20
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 12 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Red rainbowfish at 150 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 150 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Red rainbowfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Glossolepis incisa (Red rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/glossolepis-incisus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Glossolepis incisa on FishBase.",
        url: "https://www.fishbase.se/summary/Glossolepis-incisa.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–29°C (75–84°F). FishBase lists 29–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–8. FishBase lists pH 7.6–8.2. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 12 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "golden-lyretail",
    commonName: "Golden lyretail",
    scientificName: "Aphyosemion australe",
    aliases: [
      "aphyosemion australe",
      "golden lyretail",
      "lyretail panchax"
    ],
    family: "Nothobranchiidae",
    origin: "FishBase: Africa: Angola, Gabon, Cameroon and Congo.",
    tempC: {
      min: 21,
      max: 32
    },
    tempF: {
      min: 70,
      max: 90
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6 cm TL.",
    minTank: {
      gallons: 7,
      liters: 28,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 25 cm, about 28 litres / 7 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden lyretail at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Golden lyretail beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aphyosemion australe (Golden lyretail), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aphyosemion-australe/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aphyosemion australe on FishBase.",
        url: "https://www.fishbase.se/summary/Aphyosemion-australe.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–32°C (70–90°F). FishBase lists 21–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "jelly-bean-tetra",
    commonName: "Jelly bean tetra",
    scientificName: "Ladigesia roloffi",
    aliases: [
      "jelly bean tetra",
      "ladigesia roloffi",
      "sierra leone dwarf characin"
    ],
    family: "Alestidae",
    origin: "FishBase: Africa: Kasewe in the Gbangbaia basin (small stream systems west of Jong) in Sierra Leone.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 8
    },
    adultSizeMm: 31,
    adultSizeIn: 1.2,
    adultSizeNote: "31 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 3.1 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Jelly bean tetra at 31 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 31 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Jelly bean tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Ladigesia roloffi (Jelly bean tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/ladigesia-roloffi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Ladigesia roloffi on FishBase.",
        url: "https://www.fishbase.se/summary/Ladigesia-roloffi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–7. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "cumings-barb",
    commonName: "Cuming's barb",
    scientificName: "Pethia cumingii",
    aliases: [
      "cuming's barb",
      "pethia cumingii",
      "two spot barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: endemic to Sri Lanka. Occurs mainly at the south western wet zone, from the Kelani to the Gin basins. Range extends north of the Kelani, into the swamps around Gampaha (Attanagalu Oya) and northwards. Introduced into the Perdeniya Gardens in the Mahaweli basin and is well established between Gampola and Ginigathena (Sri Lanka).",
    tempC: {
      min: 20,
      max: 27
    },
    tempF: {
      min: 68,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 41,
    adultSizeIn: 1.6,
    adultSizeNote: "41 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 5 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Cuming's barb at 41 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 41 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Cuming's barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia cumingii (Cuming's barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-cumingii/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia cumingii on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-cumingii.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 22–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7. FishBase lists pH 5.5–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 41 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "western-mosquitofish",
    commonName: "Western mosquitofish",
    scientificName: "Gambusia affinis",
    aliases: [
      "gambusia affinis",
      "mosquitofish",
      "western mosquitofish"
    ],
    family: "Poeciliidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
    tempC: {
      min: 18,
      max: 27
    },
    tempF: {
      min: 64,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 30
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 5.1 cm TL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "semi-aggressive",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Western mosquitofish at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Western mosquitofish beginner. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gambusia affinis (Western mosquitofish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/gambusia-affinis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gambusia affinis on FishBase.",
        url: "https://www.fishbase.se/summary/Gambusia-affinis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–30 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 5.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "scarlet-betta",
    commonName: "Scarlet betta",
    scientificName: "Betta coccina",
    aliases: [
      "betta coccina",
      "scarlet betta"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Malaysia and Indonesia.",
    tempC: {
      min: 22,
      max: 30
    },
    tempF: {
      min: 72,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 4,
      max: 6
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 5.6 cm TL.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "base 45 × 30 cm, about 41 litres / 11 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Scarlet betta at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Scarlet betta moderate. The temperament line is needs a tank of its own. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Betta coccina (Scarlet betta), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/betta-coccina/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Betta coccina on FishBase.",
        url: "https://www.fishbase.se/summary/Betta-coccina.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–30°C (72–86°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 5.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "black-lined-loach",
    commonName: "Black-Lined loach",
    scientificName: "Ambastaia nigrolineata",
    aliases: [
      "ambastaia nigrolineata",
      "black-lined loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Mekong basin.",
    tempC: {
      min: 20,
      max: 25
    },
    tempF: {
      min: 68,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 8 cm SL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Black-Lined loach at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Black-Lined loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Ambastaia nigrolineata (Black-Lined loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/ambastaia-nigrolineata/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Ambastaia nigrolineata on FishBase.",
        url: "https://www.fishbase.se/summary/Ambastaia-nigrolineata.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25°C (68–77°F). FishBase lists 15–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–7.5. FishBase lists pH 7–7.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "zebra-plec",
    commonName: "Zebra plec",
    scientificName: "Hypancistrus zebra",
    aliases: [
      "hypancistrus zebra",
      "zebra plec",
      "zebra pleco"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Brazil.",
    tempC: {
      min: 26,
      max: 30
    },
    tempF: {
      min: 79,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 7 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Zebra plec at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Zebra plec moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hypancistrus zebra (Zebra plec), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hypancistrus-zebra/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hypancistrus zebra on FishBase.",
        url: "https://www.fishbase.se/summary/Hypancistrus-zebra.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 26–30°C (79–86°F). FishBase lists 23–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "lake-kutubu-rainbowfish",
    commonName: "Lake kutubu rainbowfish",
    scientificName: "Melanotaenia lacustris",
    aliases: [
      "lake kutubu rainbowfish",
      "melanotaenia lacustris"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Oceania: known only from Lake Kutubu and its outlet, the Soro River, in the Kikori River drainage of the Southern Highlands, Papua New Guinea.",
    tempC: {
      min: 20,
      max: 25
    },
    tempF: {
      min: 68,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 9
    },
    hardnessDGH: {
      min: 10,
      max: 20
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 10 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Lake kutubu rainbowfish at 120 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 120 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Lake kutubu rainbowfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia lacustris (Lake kutubu rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-lacustris/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia lacustris on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-lacustris.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25°C (68–77°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–9. FishBase lists pH 7–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–20 dGH. FishBase lists dH 9–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 10 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "steel-blue-killifish",
    commonName: "Steel-blue killifish",
    scientificName: "Fundulopanchax gardneri",
    aliases: [
      "blue lyretail",
      "fundulopanchax gardneri",
      "steel-blue killifish"
    ],
    family: "Nothobranchiidae",
    origin: "FishBase: Africa: Cross River and the lower part of the Beno.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 6.5 cm TL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Steel-blue killifish at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Steel-blue killifish moderate. The temperament line is needs a tank of its own. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Fundulopanchax gardneri (Steel-blue killifish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/fundulopanchax-gardneri/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Fundulopanchax gardneri on FishBase.",
        url: "https://www.fishbase.se/summary/Fundulopanchax-gardneri.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–8. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 6.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "glowlight-rasbora-hengeli",
    commonName: "Glowlight rasbora (Trigonostigma hengeli)",
    scientificName: "Trigonostigma hengeli",
    aliases: [
      "glowlight rasbora",
      "trigonostigma hengeli"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Sumatra and Borneo, Indonesia.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 3 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Glowlight rasbora at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Glowlight rasbora easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trigonostigma hengeli, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trigonostigma-hengeli/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trigonostigma hengeli on FishBase.",
        url: "https://www.fishbase.se/summary/Trigonostigma-hengeli.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Glowlight rasbora, the common name printed in the FishBase title."
      },
      {
        field: "Common name",
        note: "FishBase prints “Glowlight rasbora” for this species and for Trigonopoma pauciperforatum. The page title uses Glowlight rasbora (Trigonostigma hengeli) so the two records are not the same page. The FishBase common name is still Glowlight rasbora."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "striped-barb",
    commonName: "Striped barb",
    scientificName: "Desmopuntius johorensis",
    aliases: [
      "desmopuntius johorensis",
      "striped barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Malay Peninsula to Borneo.",
    tempC: {
      min: 20,
      max: 25
    },
    tempF: {
      min: 68,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 12 cm TL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Striped barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Striped barb easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Desmopuntius johorensis (Striped barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/desmopuntius-johorensis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Desmopuntius johorensis on FishBase.",
        url: "https://www.fishbase.se/summary/Desmopuntius-johorensis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25°C (68–77°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "ceylonese-combtail",
    commonName: "Ceylonese combtail",
    scientificName: "Belontia signata",
    aliases: [
      "belontia signata",
      "ceylonese combtail"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: common in the south west quarter and mid-hill region of the Mahaweli basin, including the lower hills up to about 800 m. Found throughout Kelani and Kalu River basins, Sri Lanka.",
    tempC: {
      min: 20,
      max: 27
    },
    tempF: {
      min: 68,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 18 cm TL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Ceylonese combtail is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Ceylonese combtail moderate. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Belontia signata (Ceylonese combtail), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/belontia-signata/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Belontia signata on FishBase.",
        url: "https://www.fishbase.se/summary/Belontia-signata.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 18 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "striped-kribensis",
    commonName: "Striped kribensis",
    scientificName: "Pelvicachromis taeniatus",
    aliases: [
      "pelvicachromis taeniatus",
      "striped kribensis"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: from east Benin to Nigeria, restricted to freshwater parts of regions near the coast.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 7.1 cm SL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Striped kribensis at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Striped kribensis easy. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pelvicachromis taeniatus (Striped kribensis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pelvicachromis-taeniatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pelvicachromis taeniatus on FishBase.",
        url: "https://www.fishbase.se/summary/Pelvicachromis-taeniatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–26°C (72–79°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "black-kuhli-loach",
    commonName: "Black kuhli loach",
    scientificName: "Pangio oblonga",
    aliases: [
      "black kuhli loach",
      "java loach",
      "pangio oblonga"
    ],
    family: "Cobitidae",
    origin: "FishBase: Asia: Viet Nam, Laos, Cambodia, Thailand, Malaysia and Indonesia. Reported from India and Myanmar.",
    tempC: {
      min: 21,
      max: 26
    },
    tempF: {
      min: 70,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 3.5,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 8
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 8 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 5,
    minGroupNote: "Seriously Fish's behaviour section says at least 5. The checker uses 5.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 80 mm and with animal prey in the Seriously Fish diet notes, an adult Black kuhli loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 80 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Black kuhli loach easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pangio oblonga (Black kuhli loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pangio-oblonga/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pangio oblonga on FishBase.",
        url: "https://www.fishbase.se/summary/Pangio-oblonga.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–26°C (70–79°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "dwarf-lake-synodontis",
    commonName: "Dwarf lake synodontis",
    scientificName: "Synodontis petricola",
    aliases: [
      "cuckoo catfish",
      "dwarf lake synodontis",
      "synodontis petricola"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: Lake Tanganyika.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 10,
      max: 35
    },
    adultSizeMm: 130,
    adultSizeIn: 5,
    adultSizeNote: "130 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 10.2 cm TL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Dwarf lake synodontis.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dwarf lake synodontis moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis petricola (Dwarf lake synodontis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-petricola/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis petricola on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-petricola.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.5–8.5. FishBase lists pH 8–9. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–35 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 130 mm SL. FishBase lists 10.2 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "forktail-blue-eye",
    commonName: "Forktail blue-eye",
    scientificName: "Pseudomugil furcatus",
    aliases: [
      "forktail blue-eye",
      "forktail rainbowfish",
      "pseudomugil furcatus"
    ],
    family: "Pseudomugilidae",
    origin: "FishBase: Oceania: known only from the lowlands of eastern Papua New Guinea between Dyke Ackland Bay and Collingwood Bay.",
    tempC: {
      min: 24,
      max: 28
    },
    tempF: {
      min: 75,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 15,
      max: 30
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 5 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Forktail blue-eye at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Forktail blue-eye moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudomugil furcatus (Forktail blue-eye), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudomugil-furcatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudomugil furcatus on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudomugil-furcatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 15–30 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "elephantnose-fish",
    commonName: "Elephantnose fish",
    scientificName: "Gnathonemus petersii",
    aliases: [
      "elephantnose fish",
      "gnathonemus petersii"
    ],
    family: "Mormyridae",
    origin: "FishBase: Africa: Niger to Congo River basins.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 225,
    adultSizeIn: 9,
    adultSizeNote: "225 mm SL on Seriously Fish, which also prints 9.0 in. FishBase lists 35 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 5,
    minGroupNote: "Seriously Fish's behaviour section says at least 5. The checker uses 5.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 225 mm and with animal prey in the Seriously Fish diet notes, an adult Elephantnose fish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 225 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Elephantnose fish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gnathonemus petersii (Elephantnose fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/gnathonemus-petersii/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gnathonemus petersii on FishBase.",
        url: "https://www.fishbase.se/summary/Gnathonemus-petersii.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 225 mm SL. FishBase lists 35 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "green-fire-tetra",
    commonName: "Green fire tetra",
    scientificName: "Aphyocharax rathbuni",
    aliases: [
      "aphyocharax rathbuni",
      "green fire tetra"
    ],
    family: "Characidae",
    origin: "FishBase: South America: Paraguay River basin.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 20
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 7.1 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Green fire tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Green fire tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aphyocharax rathbuni (Green fire tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aphyocharax-rathbuni/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aphyocharax rathbuni on FishBase.",
        url: "https://www.fishbase.se/summary/Aphyocharax-rathbuni.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–7.5. FishBase lists pH 6–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 7.1 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "onespot-barb",
    commonName: "Onespot barb",
    scientificName: "Puntius terio",
    aliases: [
      "onespot barb",
      "puntius terio"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Pakistan, India, Bangladesh.",
    tempC: {
      min: 18,
      max: 26
    },
    tempF: {
      min: 64,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 90,
    adultSizeIn: 3.5,
    adultSizeNote: "90 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 10 cm TL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 90 mm and with animal prey in the Seriously Fish diet notes, an adult Onespot barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 90 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Onespot barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Puntius terio (Onespot barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/puntius-terio/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Puntius terio on FishBase.",
        url: "https://www.fishbase.se/summary/Puntius-terio.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 18–26°C (64–79°F). FishBase lists 18–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–7.5. FishBase lists pH 7–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 15–30. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 90 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "vaillants-chocolate-gourami",
    commonName: "Vaillant's chocolate gourami",
    scientificName: "Sphaerichthys vaillanti",
    aliases: [
      "sphaerichthys vaillanti",
      "vaillant's chocolate gourami"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Indonesia (Borneo).",
    tempC: {
      min: 21,
      max: 25
    },
    tempF: {
      min: 70,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 3.5,
      max: 6.5
    },
    hardnessDGH: {
      min: 0,
      max: 3
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 3.9 cm SL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Vaillant's chocolate gourami at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Vaillant's chocolate gourami moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sphaerichthys vaillanti (Vaillant's chocolate gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sphaerichthys-vaillanti/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sphaerichthys vaillanti on FishBase.",
        url: "https://www.fishbase.se/summary/Sphaerichthys-vaillanti.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–25°C (70–77°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 3.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "roman-nose-angelfish",
    commonName: "Roman nose angelfish",
    scientificName: "Pterophyllum leopoldi",
    aliases: [
      "pterophyllum leopoldi",
      "roman nose angelfish"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, along the Solimões Amazon River between about Manacapuru and Santarém; Rupununi River in the Essequibo River drainage in Guyana.",
    tempC: {
      min: 22,
      max: 29
    },
    tempF: {
      min: 72,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 6
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 5 cm SL.",
    minTank: {
      gallons: 32,
      liters: 122,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 122 litres / 32 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Roman nose angelfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Roman nose angelfish moderate. The temperament line is territorial. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pterophyllum leopoldi (Roman nose angelfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pterophyllum-leopoldi/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pterophyllum leopoldi on FishBase.",
        url: "https://www.fishbase.se/summary/Pterophyllum-leopoldi.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "redtail-loach",
    commonName: "Redtail loach",
    scientificName: "Yasuhikotakia modesta",
    aliases: [
      "redtail botia",
      "redtail loach",
      "yasuhikotakia modesta"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Mekong and Chao Phraya basins.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 25 cm SL.",
    minTank: {
      gallons: 80,
      liters: 304,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 45 cm, about 304 litres / 80 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Redtail loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Redtail loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Yasuhikotakia modesta (Redtail loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/yasuhikotakia-modesta/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Yasuhikotakia modesta on FishBase.",
        url: "https://www.fishbase.se/summary/Yasuhikotakia-modesta.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "featherfin-synodontis",
    commonName: "Featherfin synodontis",
    scientificName: "Synodontis eupterus",
    aliases: [
      "featherfin squeaker",
      "featherfin synodontis",
      "synodontis eupterus"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: White Nile.",
    tempC: {
      min: 22,
      max: 27
    },
    tempF: {
      min: 72,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 8,
      max: 20
    },
    adultSizeMm: 300,
    adultSizeIn: 12,
    adultSizeNote: "300 mm SL on Seriously Fish, which also prints 12.0 in. FishBase lists 30 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Featherfin synodontis.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Featherfin synodontis moderate. The temperament line is needs a tank of its own. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis eupterus (Featherfin synodontis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-eupterus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis eupterus on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-eupterus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "madagascan-rainbow-fish",
    commonName: "Madagascan rainbow fish",
    scientificName: "Bedotia madagascariensis",
    aliases: [
      "bedotia madagascariensis",
      "madagascan rainbow fish"
    ],
    family: "Bedotiidae",
    origin: "FishBase: Africa: lower reaches of Ivoloina River to at least as far south as Manambolo Creek which drains into the Lakendrano Mpangalana 10 km south of the town of Vatomandry, Madagascar.",
    tempC: {
      min: 23,
      max: 32
    },
    tempF: {
      min: 73,
      max: 90
    },
    tempFConverted: false,
    pH: {
      min: 4.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 0,
      max: 15
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 8.6 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Madagascan rainbow fish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Madagascan rainbow fish moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Bedotia madagascariensis (Madagascan rainbow fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/bedotia-madagascariensis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Bedotia madagascariensis on FishBase.",
        url: "https://www.fishbase.se/summary/Bedotia-madagascariensis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "black-ghost-knifefish",
    commonName: "Black ghost knifefish",
    scientificName: "Apteronotus albifrons",
    aliases: [
      "apteronotus albifrons",
      "black ghost",
      "black ghost knifefish"
    ],
    family: "Apteronotidae",
    origin: "FishBase: South America: Venezuela to Paraguay and Paraná rivers. Also in the Amazon Basin of Peru.",
    tempC: {
      min: 23,
      max: 28
    },
    tempF: {
      min: 73,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 10
    },
    adultSizeMm: 500,
    adultSizeIn: 20,
    adultSizeNote: "500 mm TL on Seriously Fish, which also prints 20.0 in. FishBase lists 50 cm TL.",
    minTank: {
      gallons: 171,
      liters: 648,
      lengthCm: 180,
      lengthIn: null,
      stated: "base 180 × 60 cm, about 648 litres / 171 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 500 mm and with animal prey in the Seriously Fish diet notes, an adult Black ghost knifefish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 500 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Black ghost knifefish moderate. The temperament line is fights its own kind.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Apteronotus albifrons (Black ghost knifefish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/apteronotus-albifrons/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Apteronotus albifrons on FishBase.",
        url: "https://www.fishbase.se/summary/Apteronotus-albifrons.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–10 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 500 mm TL. FishBase lists 50 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "african-red-eyed-tetra",
    commonName: "African red-eyed tetra",
    scientificName: "Arnoldichthys spilopterus",
    aliases: [
      "african red-eyed tetra",
      "arnoldichthys spilopterus",
      "niger tetra"
    ],
    family: "Lepidarchidae",
    origin: "FishBase: Africa: lower Niger and Ogun rivers in Nigeria.",
    tempC: {
      min: 24,
      max: 27
    },
    tempF: {
      min: 75,
      max: 81
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9.6 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult African red-eyed tetra at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates African red-eyed tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Arnoldichthys spilopterus (African red-eyed tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/arnoldichthys-spilopterus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Arnoldichthys spilopterus on FishBase.",
        url: "https://www.fishbase.se/summary/Arnoldichthys-spilopterus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–27°C (75–81°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "sawbwa-barb",
    commonName: "Sawbwa barb",
    scientificName: "Sawbwa resplendens",
    aliases: [
      "sawbwa barb",
      "sawbwa resplendens"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Inle lake in Myanmar.",
    tempC: {
      min: 18,
      max: 22
    },
    tempF: {
      min: 64,
      max: 72
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 15
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3 cm unspecified.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 1,
    minGroupNote: "Seriously Fish's behaviour section says at least 1. The checker uses 1.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Sawbwa barb at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Sawbwa barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sawbwa resplendens, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sawbwa-resplendens/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sawbwa resplendens on FishBase.",
        url: "https://www.fishbase.se/summary/Sawbwa-resplendens.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 18–22°C (64–72°F). FishBase lists 21–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 7–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–15 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 3 cm unspecified. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Sawbwa barb, the common name printed in the FishBase title."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "narayan-barb",
    commonName: "Narayan barb",
    scientificName: "Pethia setnai",
    aliases: [
      "narayan barb",
      "pethia setnai"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Goa, India.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 5.7 cm TL.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 30 cm, about 81 litres / 21 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Narayan barb at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Narayan barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia setnai (Narayan barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-setnai/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia setnai on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-setnai.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 5.7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "spiketail-paradisefish",
    commonName: "Spiketail paradisefish",
    scientificName: "Pseudosphromenus cupanus",
    aliases: [
      "pseudosphromenus cupanus",
      "spiketail paradisefish"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: India, Sri Lanka, Myanmar, Malay Peninsula and Indonesia. Reported from Bangladesh.",
    tempC: {
      min: 20,
      max: 28
    },
    tempF: {
      min: 68,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 25
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 7.5 cm TL.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 54 litres / 14 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Spiketail paradisefish at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Spiketail paradisefish easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudosphromenus cupanus (Spiketail paradisefish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudosphromenus-cupanus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudosphromenus cupanus on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudosphromenus-cupanus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7.8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 65 mm SL. FishBase lists 7.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "discus",
    commonName: "Discus",
    scientificName: "Symphysodon aequifasciatus",
    aliases: [
      "blue discus",
      "discus",
      "symphysodon aequifasciatus"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: eastern Amazon River, lower reaches of Amazon River and affluents east of the confluence of the Negro and Solimões Rivers.",
    tempC: {
      min: 26,
      max: 30
    },
    tempF: {
      min: 79,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 5
    },
    adultSizeMm: 140,
    adultSizeIn: 6,
    adultSizeNote: "140 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 13.7 cm SL.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No base or volume is stated. No gallon minimum is invented."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Discus at 140 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 140 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Discus moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Symphysodon aequifasciatus (Discus), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/symphysodon-aequifasciatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Symphysodon aequifasciatus on FishBase.",
        url: "https://www.fishbase.se/summary/Symphysodon-aequifasciatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 5–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–5 dGH. FishBase lists dH 0–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "green-tiger-loach",
    commonName: "Green tiger loach",
    scientificName: "Syncrossus hymenophysa",
    aliases: [
      "green tiger loach",
      "syncrossus hymenophysa",
      "tiger loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Indonesia (Sumatra and Borneo) and Malaya.",
    tempC: {
      min: 25,
      max: 30
    },
    tempF: {
      min: 77,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 210,
    adultSizeIn: 8,
    adultSizeNote: "210 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 21 cm SL.",
    minTank: {
      gallons: 80,
      liters: 304,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 45 cm, about 304 litres / 80 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 210 mm and with animal prey in the Seriously Fish diet notes, an adult Green tiger loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 210 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Green tiger loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Syncrossus hymenophysa (Green tiger loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/syncrossus-hymenophysa/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Syncrossus hymenophysa on FishBase.",
        url: "https://www.fishbase.se/summary/Syncrossus-hymenophysa.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "hognose-brochis",
    commonName: "Hognose brochis",
    scientificName: "Brochis multiradiata",
    aliases: [
      "brochis multiradiata",
      "brochis multiradiatus",
      "hognose brochis",
      "hognosed brochis"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: western Amazon River basin.",
    tempC: {
      min: 20,
      max: 26
    },
    tempF: {
      min: 68,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 6.7 cm SL.",
    minTank: {
      gallons: 64,
      liters: 243,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 243 litres / 64 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Hognose brochis is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Hognose brochis easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis multiradiata (Hognose brochis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/brochis-multiradiatus/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis multiradiata on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-multiradiatus.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 21–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 6.7 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "banded-rainbowfish",
    commonName: "Banded rainbowfish",
    scientificName: "Melanotaenia trifasciata",
    aliases: [
      "banded rainbowfish",
      "melanotaenia trifasciata"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Oceania: Northern Territory and Queensland in Australia.",
    tempC: {
      min: 24,
      max: 33
    },
    tempF: {
      min: 75,
      max: 91
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 8,
      max: 20
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 13 cm SL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Banded rainbowfish at 150 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 150 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Banded rainbowfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia trifasciata (Banded rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-trifasciata/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia trifasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-trifasciata.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–33°C (75–91°F). FishBase lists 25–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–8. FishBase lists pH 7–8. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  },
  {
    slug: "yellow-tailed-congo-tetra",
    commonName: "Yellow-Tailed congo tetra",
    scientificName: "Alestopetersius caudalis",
    aliases: [
      "alestopetersius caudalis",
      "yellow-tailed congo tetra",
      "yellowtail tetra"
    ],
    family: "Alestidae",
    origin: "FishBase: Africa: lower and middle Congo River basin in Democratic Republic of the Congo and Central African Republic.",
    tempC: {
      min: 22,
      max: 26
    },
    tempF: {
      min: 72,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6.2 cm TL.",
    minTank: {
      gallons: 29,
      liters: 108,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 30 cm, about 108 litres / 29 US gallons."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Yellow-Tailed congo tetra at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Yellow-Tailed congo tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Alestopetersius caudalis (Yellow-Tailed congo tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/alestopetersius-caudalis/",
        accessed: "2026-11-03",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Alestopetersius caudalis on FishBase.",
        url: "https://www.fishbase.se/summary/Alestopetersius-caudalis.html",
        accessed: "2026-11-03",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6.5–7.8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 6.2 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-03"
  }
] satisfies SpeciesProfile[];
