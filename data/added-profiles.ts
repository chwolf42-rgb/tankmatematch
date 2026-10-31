import type { SpeciesProfile } from "../lib/types";

export const addedProfiles = [
  {
    slug: "cardinal-tetra",
    commonName: "Cardinal tetra",
    scientificName: "Paracheirodon axelrodi",
    aliases: [
      "cardinal tetra",
      "paracheirodon axelrodi"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Upper Orinoco and Negro River basins.",
    tempC: {
      min: 23,
      max: 29
    },
    tempF: {
      min: 73,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 3.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Cardinal tetra at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Cardinal tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Paracheirodon axelrodi (Cardinal tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/paracheirodon-axelrodi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Paracheirodon axelrodi on FishBase.",
        url: "https://www.fishbase.se/summary/Paracheirodon-axelrodi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–29°C (73–84°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 3.5–7.5. FishBase lists pH 4–6. The checker uses Seriously Fish."
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
    lastVerified: "2026-10-31"
  },
  {
    slug: "green-neon-tetra",
    commonName: "Green neon tetra",
    scientificName: "Paracheirodon simulans",
    aliases: [
      "green neon tetra",
      "paracheirodon simulans"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Upper Negro and Orinoco River basins.",
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
      min: 3,
      max: 6.5
    },
    hardnessDGH: {
      min: 1,
      max: 8
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Green neon tetra at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Green neon tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Paracheirodon simulans (Green neon tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/paracheirodon-simulans/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Paracheirodon simulans on FishBase.",
        url: "https://www.fishbase.se/summary/Paracheirodon-simulans.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–27°C (75–81°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 3–6.5. FishBase lists pH 5.5–6. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 25 mm SL. FishBase lists 2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "ember-tetra",
    commonName: "Ember tetra",
    scientificName: "Hyphessobrycon amandae",
    aliases: [
      "ember tetra",
      "hyphessobrycon amandae"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Araguaia River basin.",
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
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 20,
    adultSizeIn: 0.8,
    adultSizeNote: "20 mm SL on Seriously Fish, which also prints 0.8 in. FishBase lists 2 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Ember tetra at 20 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 20 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Ember tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon amandae (Ember tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-amandae/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon amandae on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-amandae.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "black-neon-tetra",
    commonName: "Black neon tetra",
    scientificName: "Hyphessobrycon herbertaxelrodi",
    aliases: [
      "black neon tetra",
      "hyphessobrycon herbertaxelrodi"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Paraguay River basin.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Black neon tetra at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Black neon tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon herbertaxelrodi (Black neon tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-herbertaxelrodi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon herbertaxelrodi on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-herbertaxelrodi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 5.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "lemon-tetra",
    commonName: "Lemon tetra",
    scientificName: "Hyphessobrycon pulchripinnis",
    aliases: [
      "hyphessobrycon pulchripinnis",
      "lemon tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Tapajós River basin.",
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
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.8 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Lemon tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Lemon tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon pulchripinnis (Lemon tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-pulchripinnis/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon pulchripinnis on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-pulchripinnis.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 5.5–8. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "black-phantom-tetra",
    commonName: "Black phantom tetra",
    scientificName: "Megalamphodus megalopterus",
    aliases: [
      "black phantom tetra",
      "hyphessobrycon megalopterus",
      "megalamphodus megalopterus"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Upper Paraguay and Guaporé River basins.",
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
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 36,
    adultSizeIn: 1.4,
    adultSizeNote: "36 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Black phantom tetra at 36 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 36 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Black phantom tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus megalopterus (Black phantom tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-megalopterus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus megalopterus on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-megalopterus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "serpae-tetra",
    commonName: "Serpae tetra",
    scientificName: "Megalamphodus eques",
    aliases: [
      "hyphessobrycon eques",
      "megalamphodus eques",
      "serpae tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Amazon, Guaporé and Paraguay River basins.",
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
      max: 15
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm SL.",
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
    schooling: true,
    minGroup: 12,
    minGroupNote: "Seriously Fish's behaviour section says at least 12. The checker uses 12.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Serpae tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Serpae tetra easy. The temperament line is territorial. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus eques (Serpae tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-eques/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus eques on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-eques.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 10–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "bleeding-heart-tetra",
    commonName: "Bleeding heart tetra",
    scientificName: "Megalamphodus erythrostigma",
    aliases: [
      "bleeding heart tetra",
      "hyphessobrycon erythrostigma",
      "megalamphodus erythrostigma"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
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
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6.1 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Bleeding heart tetra at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Bleeding heart tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus erythrostigma (Bleeding heart tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-erythrostigma/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus erythrostigma on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-erythrostigma.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7.5. FishBase lists pH 5.6–7.2. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "rosy-tetra",
    commonName: "Rosy tetra",
    scientificName: "Megalamphodus rosaceus",
    aliases: [
      "hyphessobrycon rosaceus",
      "megalamphodus rosaceus",
      "rosy tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Essequibo, Corantijn and Suriname River basins.",
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
      min: 1,
      max: 12
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.4 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Rosy tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Rosy tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus rosaceus (Rosy tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-rosaceus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus rosaceus on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-rosaceus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "flame-tetra",
    commonName: "Flame tetra",
    scientificName: "Hyphessobrycon flammeus",
    aliases: [
      "flame tetra",
      "hyphessobrycon flammeus"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Brazil in streams and coastal rivers of Rio de Janeiro, in Guanabara bay basin, middle rio Paraíba do Sul basin and rio Guandu basin, and upper rio Tietê drainage (upper rio Paraná basin, São Paulo).",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Flame tetra at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Flame tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon flammeus (Flame tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-flammeus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon flammeus on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-flammeus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "glowlight-tetra",
    commonName: "Glowlight tetra",
    scientificName: "Hemigrammus erythrozonus",
    aliases: [
      "glowlight tetra",
      "hemigrammus erythrozonus"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Essequibo River.",
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
      min: 2,
      max: 15
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.3 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Glowlight tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Glowlight tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hemigrammus erythrozonus (Glowlight tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-erythrozonus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hemigrammus erythrozonus on FishBase.",
        url: "https://www.fishbase.se/summary/Hemigrammus-erythrozonus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 3.3 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "rummy-nose-tetra",
    commonName: "Rummy-nose tetra",
    scientificName: "Petitella rhodostoma",
    aliases: [
      "hemigrammus rhodostomus",
      "petitella rhodostoma",
      "rummy-nose tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: lower Amazon River basin and Orinoco River basin.",
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
      min: 2,
      max: 15
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 5 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Rummy-nose tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Rummy-nose tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Petitella rhodostoma (Rummy-nose tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-rhodostomus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Petitella rhodostoma on FishBase.",
        url: "https://www.fishbase.se/summary/Petitella-rhodostoma.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "firehead-tetra",
    commonName: "Firehead tetra",
    scientificName: "Petitella bleheri",
    aliases: [
      "firehead tetra",
      "petitella bleheri"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Negro and Meta River basins.",
    tempC: {
      min: 23,
      max: 26
    },
    tempF: {
      min: 73,
      max: 79
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 3.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Firehead tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Firehead tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Petitella bleheri (Firehead tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/petitella-bleheri/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Petitella bleheri on FishBase.",
        url: "https://www.fishbase.se/summary/Petitella-bleheri.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7. FishBase lists pH 5–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 3.6 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "congo-tetra",
    commonName: "Congo tetra",
    scientificName: "Phenacogrammus interruptus",
    aliases: [
      "congo tetra",
      "phenacogrammus interruptus"
    ],
    family: "Alestidae",
    origin: "FishBase: Africa: lower and middle Congo River basin in Democratic Republic of the Congo.",
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
      min: 3,
      max: 18
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 8 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Congo tetra at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Congo tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Phenacogrammus interruptus (Congo tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/phenacogrammus-interruptus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Phenacogrammus interruptus on FishBase.",
        url: "https://www.fishbase.se/summary/Phenacogrammus-interruptus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 23–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–18 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "false-penguin-tetra",
    commonName: "False penguin tetra",
    scientificName: "Thayeria boehlkei",
    aliases: [
      "false penguin tetra",
      "thayeria boehlkei"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: upper Amazon River basin in Peru and Araguaia River in Brazil.",
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
      max: 8
    },
    hardnessDGH: {
      min: 0,
      max: 20
    },
    adultSizeMm: 36,
    adultSizeIn: 1.4,
    adultSizeNote: "36 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult False penguin tetra at 36 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 36 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates False penguin tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Thayeria boehlkei (False penguin tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/thayeria-boehlkei/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Thayeria boehlkei on FishBase.",
        url: "https://www.fishbase.se/summary/Thayeria-boehlkei.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "x-ray-tetra",
    commonName: "X-ray tetra",
    scientificName: "Pristella maxillaris",
    aliases: [
      "pristella maxillaris",
      "x-ray tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Amazon, Orinoco, and coastal river drainages of the Guianas.",
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
      max: 20
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.5 cm TL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult X-ray tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates X-ray tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pristella maxillaris (X-ray tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pristella-maxillaris/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pristella maxillaris on FishBase.",
        url: "https://www.fishbase.se/summary/Pristella-maxillaris.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 4.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "diamond-tetra",
    commonName: "Diamond tetra",
    scientificName: "Makunaima pittieri",
    aliases: [
      "diamond tetra",
      "makunaima pittieri",
      "moenkhausia pittieri"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Lake Valencia basin in Venezuela.",
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
      max: 7
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 38 cm, about 68 litres / 18 US gallons."
    },
    temperament: "semi-aggressive",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Diamond tetra at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Diamond tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Makunaima pittieri (Diamond tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/moenkhausia-pittieri/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Makunaima pittieri on FishBase.",
        url: "https://www.fishbase.se/summary/Makunaima-pittieri.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "red-eye-tetra",
    commonName: "Red-eye tetra",
    scientificName: "Bario sanctaefilomenae",
    aliases: [
      "bario sanctaefilomenae",
      "moenkhausia sanctaefilomenae",
      "red-eye tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Paranaíba, São Francisco, upper Parana, Paraguay amd Uruguay River basins.",
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
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 20
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 7 cm SL.",
    minTank: {
      gallons: 27,
      liters: 103,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 38 cm, about 103 litres / 27 US gallons."
    },
    temperament: "semi-aggressive",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Red-eye tetra at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Red-eye tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Bario sanctaefilomenae (Red-eye tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/moenkhausia-sanctaefilomenae/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Bario sanctaefilomenae on FishBase.",
        url: "https://www.fishbase.se/summary/Bario-sanctaefilomenae.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "black-widow-tetra",
    commonName: "Black widow tetra",
    scientificName: "Gymnocorymbus ternetzi",
    aliases: [
      "black widow tetra",
      "gymnocorymbus ternetzi"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Paraguay and Guaporé River basins to Argentina.",
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
      max: 7
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 7.5 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 30 cm, about 68 litres / 18 US gallons."
    },
    temperament: "peaceful",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 12,
    minGroupNote: "Seriously Fish's behaviour section says at least 12. The checker uses 12.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Black widow tetra at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Black widow tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gymnocorymbus ternetzi (Black widow tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/gymnocorymbus-ternetzi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gymnocorymbus ternetzi on FishBase.",
        url: "https://www.fishbase.se/summary/Gymnocorymbus-ternetzi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 7.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "silvertip-tetra",
    commonName: "Silvertip tetra",
    scientificName: "Hasemania nana",
    aliases: [
      "hasemania nana",
      "silvertip tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: São Francisco River basin in Minas Gerais, Brazil.",
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
      max: 20
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 3.8 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Silvertip tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Silvertip tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hasemania nana (Silvertip tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hasemania-nana/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hasemania nana on FishBase.",
        url: "https://www.fishbase.se/summary/Hasemania-nana.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists 50 mm SL. FishBase lists 3.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "emperor-tetra",
    commonName: "Emperor tetra",
    scientificName: "Nematobrycon palmeri",
    aliases: [
      "emperor tetra",
      "nematobrycon palmeri"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Atrato and San Juan River basins.",
    tempC: {
      min: 23,
      max: 27
    },
    tempF: {
      min: 73,
      max: 81
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
    adultSizeMm: 42,
    adultSizeIn: 1.7,
    adultSizeNote: "42 mm SL on Seriously Fish, which also prints 1.7 in. FishBase lists 4.2 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Emperor tetra at 42 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 42 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Emperor tetra moderate. The temperament line is territorial. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nematobrycon palmeri (Emperor tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nematobrycon-palmeri/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nematobrycon palmeri on FishBase.",
        url: "https://www.fishbase.se/summary/Nematobrycon-palmeri.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 5–8. The checker uses Seriously Fish."
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
    lastVerified: "2026-10-31"
  },
  {
    slug: "bloodfin-tetra",
    commonName: "Bloodfin tetra",
    scientificName: "Aphyocharax anisitsi",
    aliases: [
      "aphyocharax anisitsi",
      "bloodfin tetra"
    ],
    family: "Characidae",
    origin: "FishBase: South America: Paraná River basin.",
    tempC: {
      min: 18,
      max: 28
    },
    tempF: {
      min: 64,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 25
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.5 cm TL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Bloodfin tetra at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Bloodfin tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aphyocharax anisitsi (Bloodfin tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aphyocharax-anisitsi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aphyocharax anisitsi on FishBase.",
        url: "https://www.fishbase.se/summary/Aphyocharax-anisitsi.html",
        accessed: "2026-10-31",
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
    lastVerified: "2026-10-31"
  },
  {
    slug: "golden-pencilfish",
    commonName: "Golden pencilfish",
    scientificName: "Nannostomus beckfordi",
    aliases: [
      "golden pencilfish",
      "nannostomus beckfordi"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: native in the rivers of Guyana south to the Amazon basin and up the Amazon River to the Negro River.",
    tempC: {
      min: 21,
      max: 27
    },
    tempF: {
      min: 70,
      max: 81
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
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 6.5 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden pencilfish at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Golden pencilfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus beckfordi (Golden pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-beckfordi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus beckfordi on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-beckfordi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–27°C (70–81°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
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
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "dwarf-pencilfish",
    commonName: "Dwarf pencilfish",
    scientificName: "Nannostomus marginatus",
    aliases: [
      "dwarf pencilfish",
      "nannostomus marginatus"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Lower to middle Amazon River, Colombia east of the Andes, Guyana, Peru east of the Andes, Suriname and Venezuela east of the Andes.",
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
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 3.5 cm TL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf pencilfish at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dwarf pencilfish moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus marginatus (Dwarf pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-marginatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus marginatus on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-marginatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5.8–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 25 mm SL. FishBase lists 3.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "hockeystick-pencilfish",
    commonName: "Hockeystick pencilfish",
    scientificName: "Nannostomus eques",
    aliases: [
      "hockeystick pencilfish",
      "nannostomus eques"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: central and upper Amazon.",
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
      min: 4.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 5 cm TL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Hockeystick pencilfish at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Hockeystick pencilfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus eques (Hockeystick pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-eques/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus eques on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-eques.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4.5–7.5. FishBase lists pH 5–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "marbled-hatchetfish",
    commonName: "Marbled hatchetfish",
    scientificName: "Carnegiella strigata",
    aliases: [
      "carnegiella strigata",
      "marbled hatchetfish"
    ],
    family: "Gasteropelecidae",
    origin: "FishBase: South America: Lower, middle and upper Amazon River basin; south of Amazon; and Caqueta River in Colombia.",
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
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.5 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Marbled hatchetfish at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Marbled hatchetfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Carnegiella strigata (Marbled hatchetfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/carnegiella-strigata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Carnegiella strigata on FishBase.",
        url: "https://www.fishbase.se/summary/Carnegiella-strigata.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "common-hatchetfish",
    commonName: "Common hatchetfish",
    scientificName: "Gasteropelecus sternicla",
    aliases: [
      "common hatchetfish",
      "gasteropelecus sternicla"
    ],
    family: "Gasteropelecidae",
    origin: "FishBase: South America: Peruvian Amazon, middle Amazon, the Guianas and Venezuela.",
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
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm SL.",
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
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Common hatchetfish at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Common hatchetfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gasteropelecus sternicla (Common hatchetfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/gasteropelecus-sternicla/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gasteropelecus sternicla on FishBase.",
        url: "https://www.fishbase.se/summary/Gasteropelecus-sternicla.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "splash-tetra",
    commonName: "Splash tetra",
    scientificName: "Copella arnoldi",
    aliases: [
      "copella arnoldi",
      "splash tetra"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: lower rio Amazonas basin, coastal drainages of Pará and Amapá, Brazil,.",
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
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 8
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 4.2 cm SL.",
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Splash tetra at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Splash tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Copella arnoldi (Splash tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/copella-arnoldi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Copella arnoldi on FishBase.",
        url: "https://www.fishbase.se/summary/Copella-arnoldi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 25–29°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–8 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 4.2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "mosquito-rasbora",
    commonName: "Mosquito rasbora",
    scientificName: "Boraras brigittae",
    aliases: [
      "boraras brigittae",
      "mosquito rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: southern Borneo, Indonesia.",
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
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 20,
    adultSizeIn: 0.8,
    adultSizeNote: "20 mm SL on Seriously Fish, which also prints 0.8 in. FishBase lists 3.5 cm TL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Mosquito rasbora at 20 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 20 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Mosquito rasbora moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Boraras brigittae (Mosquito rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/boraras-brigittae/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Boraras brigittae on FishBase.",
        url: "https://www.fishbase.se/summary/Boraras-brigittae.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 20 mm SL. FishBase lists 3.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "dwarf-rasbora",
    commonName: "Dwarf rasbora",
    scientificName: "Boraras maculatus",
    aliases: [
      "boraras maculatus",
      "dwarf rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Malay Peninsula to Sumatra, Indonesia.",
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
      min: 4,
      max: 6.5
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2.5 cm SL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf rasbora at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dwarf rasbora moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Boraras maculatus (Dwarf rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/boraras-maculatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Boraras maculatus on FishBase.",
        url: "https://www.fishbase.se/summary/Boraras-maculatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–6.5. FishBase lists pH 5–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–5 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "lambchop-rasbora",
    commonName: "Lambchop rasbora",
    scientificName: "Trigonostigma espei",
    aliases: [
      "lambchop rasbora",
      "trigonostigma espei"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Thailand and Cambodia.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 2.5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Lambchop rasbora at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Lambchop rasbora easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trigonostigma espei (Lambchop rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trigonostigma-espei/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trigonostigma espei on FishBase.",
        url: "https://www.fishbase.se/summary/Trigonostigma-espei.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 30 mm SL. FishBase lists 2.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "scissortail-rasbora",
    commonName: "Scissortail rasbora",
    scientificName: "Rasbora trilineata",
    aliases: [
      "rasbora trilineata",
      "scissortail rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Mekong and Chao Phraya basins; Malay Peninsula, Sumatra, Borneo. Spread around the world through the aquarium fish trade.",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 13 cm TL.",
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
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Scissortail rasbora is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Scissortail rasbora moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rasbora trilineata (Scissortail rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rasbora-trilineata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rasbora trilineata on FishBase.",
        url: "https://www.fishbase.se/summary/Rasbora-trilineata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–25°C (72–77°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 13 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "red-tailed-rasbora",
    commonName: "Red-tailed rasbora",
    scientificName: "Rasbora borapetensis",
    aliases: [
      "rasbora borapetensis",
      "red-tailed rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Mekong, Chao Phraya and Meklong basins; also northern Malay Peninsula.",
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
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 10 cm TL.",
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
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Red-tailed rasbora at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Red-tailed rasbora easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rasbora borapetensis (Red-tailed rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rasbora-borapetensis/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rasbora borapetensis on FishBase.",
        url: "https://www.fishbase.se/summary/Rasbora-borapetensis.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists 50 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "celestial-pearl-danio",
    commonName: "Celestial pearl danio",
    scientificName: "Danio margaritatus",
    aliases: [
      "celestial pearl danio",
      "danio margaritatus"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Myanmar.",
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
      min: 5,
      max: 15
    },
    adultSizeMm: 21,
    adultSizeIn: 0.8,
    adultSizeNote: "21 mm SL on Seriously Fish, which also prints 0.8 in. FishBase lists 2.1 cm SL.",
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
    minGroup: 20,
    minGroupNote: "Seriously Fish's behaviour section says at least 20. The checker uses 20.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Celestial pearl danio at 21 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 21 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Celestial pearl danio easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio margaritatus (Celestial pearl danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-margaritatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio margaritatus on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-margaritatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "pearl-danio",
    commonName: "Pearl danio",
    scientificName: "Danio albolineatus",
    aliases: [
      "danio albolineatus",
      "pearl danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Myanmar to Laos and the island of Sumatra, Indonesia.",
    tempC: {
      min: 16,
      max: 25
    },
    tempF: {
      min: 61,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 20
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 9.6 cm TL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Pearl danio at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Pearl danio easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio albolineatus (Pearl danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-albolineatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio albolineatus on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-albolineatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 16–25°C (61–77°F). FishBase lists 20–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 9.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "giant-danio",
    commonName: "Giant danio",
    scientificName: "Devario malabaricus",
    aliases: [
      "devario malabaricus",
      "giant danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: west coast of India and Sri Lanka. Has been widely transported around the world through the aquarium fish trade industry.",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 12 cm TL.",
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
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Giant danio at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Giant danio moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Devario malabaricus (Giant danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/devario-malabaricus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Devario malabaricus on FishBase.",
        url: "https://www.fishbase.se/summary/Devario-malabaricus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "glowlight-danio",
    commonName: "Glowlight danio",
    scientificName: "Danio choprae",
    aliases: [
      "danio choprae",
      "glowlight danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Irrawaddy in northern Myanmar.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 3.1 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Glowlight danio at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Glowlight danio easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio choprae (Glowlight danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-choprae/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio choprae on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-choprae.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "white-cloud-mountain-minnow",
    commonName: "White cloud mountain minnow",
    scientificName: "Tanichthys albonubes",
    aliases: [
      "tanichthys albonubes",
      "white cloud mountain minnow"
    ],
    family: "Tanichthyidae",
    origin: "FishBase: Asia: China.",
    tempC: {
      min: 14,
      max: 22
    },
    tempF: {
      min: 57,
      max: 72
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8.5
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm TL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult White cloud mountain minnow at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates White cloud mountain minnow easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Tanichthys albonubes (White cloud mountain minnow), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/tanichthys-albonubes/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Tanichthys albonubes on FishBase.",
        url: "https://www.fishbase.se/summary/Tanichthys-albonubes.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 14–22°C (57–72°F). FishBase lists 18–22°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 4 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "cherry-barb",
    commonName: "Cherry barb",
    scientificName: "Puntius titteya",
    aliases: [
      "cherry barb",
      "puntius titteya"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Kelani to Nilwala basins, Sri Lanka. The more colorful varieties are possibly being overfished for the aquarium trade.",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 20
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 5 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Cherry barb at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Cherry barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Puntius titteya (Cherry barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/puntius-titteya/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Puntius titteya on FishBase.",
        url: "https://www.fishbase.se/summary/Puntius-titteya.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "tiger-barb",
    commonName: "Tiger barb",
    scientificName: "Puntigrus tetrazona",
    aliases: [
      "puntigrus tetrazona",
      "tiger barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Sumatra and Borneo. Introduced widely and has been reared in several countries in facilities for breeding aquarium fishes.",
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
      max: 20
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 7 cm TL.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "base 80 × 30 cm, about 72 litres / 19 US gallons."
    },
    temperament: "semi-aggressive",
    finNipper: true,
    longFinned: false,
    longFinnedNote: "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish's behaviour section says at least 8. The checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Tiger barb at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Tiger barb easy. The temperament line is territorial. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Puntigrus tetrazona (Tiger barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/puntigrus-tetrazona/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Puntigrus tetrazona on FishBase.",
        url: "https://www.fishbase.se/summary/Puntigrus-tetrazona.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "rosy-barb",
    commonName: "Rosy barb",
    scientificName: "Pethia conchonius",
    aliases: [
      "pethia conchonius",
      "rosy barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Afghanistan, Pakistan, India, Nepal, and Bangladesh.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 14 cm TL.",
    minTank: {
      gallons: 24,
      liters: 90,
      lengthCm: 100,
      lengthIn: null,
      stated: "base 100 × 30 cm, about 90 litres / 24 US gallons."
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
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Rosy barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Rosy barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia conchonius (Rosy barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-conchonius/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia conchonius on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-conchonius.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 16–24°C (61–75°F). FishBase lists 18–22°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 14 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "odessa-barb",
    commonName: "Odessa barb",
    scientificName: "Pethia padamya",
    aliases: [
      "odessa barb",
      "pethia padamya"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Myanmar. Known only from the type locality, an artificial pond in Toe Gyi village, situated just above the Anisakan Falls, near Pyin Oo Lwin, on the road Mandalay-Hsipaw, and from the lower Chindwin River.",
    tempC: {
      min: 16,
      max: 25
    },
    tempF: {
      min: 61,
      max: 77
    },
    tempFConverted: false,
    pH: {
      min: 6.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 46,
    adultSizeIn: 1.8,
    adultSizeNote: "46 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Odessa barb at 46 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 46 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Odessa barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia padamya (Odessa barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-padamya/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia padamya on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-padamya.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "black-ruby-barb",
    commonName: "Black ruby barb",
    scientificName: "Pethia nigrofasciata",
    aliases: [
      "black ruby barb",
      "pethia nigrofasciata"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: restricted to forest streams from the Kelani to Nilwala basins in Sri Lanka. It occurs in hilly areas up to about 300 m elevation. The brightly colored population introduced to Mahaweli at Ginigathena, Sri Lanka are said to have diminished in number due to the aquarium export trade.",
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
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 6 cm TL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Black ruby barb at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Black ruby barb easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia nigrofasciata (Black ruby barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-nigrofasciata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia nigrofasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-nigrofasciata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 55 mm SL. FishBase lists 6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "golden-dwarf-barb",
    commonName: "Golden dwarf barb",
    scientificName: "Pethia gelius",
    aliases: [
      "golden dwarf barb",
      "pethia gelius"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Pakistan, India and Bangladesh. Widely transported around the world and quite popular with aquarists.",
    tempC: {
      min: 18,
      max: 24
    },
    tempF: {
      min: 64,
      max: 75
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 5.1 cm TL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden dwarf barb at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Golden dwarf barb moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pethia gelius (Golden dwarf barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pethia-gelius/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pethia gelius on FishBase.",
        url: "https://www.fishbase.se/summary/Pethia-gelius.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 18–24°C (64–75°F). FishBase lists 18–22°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 5.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "red-line-torpedo-barb",
    commonName: "Red-line torpedo barb",
    scientificName: "Dawkinsia denisonii",
    aliases: [
      "dawkinsia denisonii",
      "red-line torpedo barb",
      "sahyadria denisonii"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: endemic to India.",
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
      min: 6.5,
      max: 7.8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 110,
    adultSizeIn: 4,
    adultSizeNote: "110 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 15 cm TL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 110 mm and with animal prey in the Seriously Fish diet notes, an adult Red-line torpedo barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 110 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Red-line torpedo barb moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dawkinsia denisonii (Red-line torpedo barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sahyadria-denisonii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dawkinsia denisonii on FishBase.",
        url: "https://www.fishbase.se/summary/Dawkinsia-denisonii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 110 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "golden-barb",
    commonName: "Golden barb*",
    scientificName: "Barbodes semifasciolatus",
    aliases: [
      "barbodes semifasciolatus",
      "golden barb*"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Red River basin, southwestern China, including Hainan.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 20
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 7.6 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden barb* at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Golden barb* easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Barbodes semifasciolatus (Golden barb*), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/barbodes-semifasciolatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Barbodes semifasciolatus on FishBase.",
        url: "https://www.fishbase.se/summary/Barbodes-semifasciolatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 7.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "siamese-algae-eater",
    commonName: "Siamese algae eater",
    scientificName: "Crossocheilus langei",
    aliases: [
      "crossocheilus langei",
      "siamese algae eater"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Malaysia and Sumatra, Indonesia.",
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
      max: 15
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 14.5 cm TL.",
    minTank: {
      gallons: 80,
      liters: 304,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 45 cm, about 304 litres / 80 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Siamese algae eater.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Siamese algae eater moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Crossocheilus langei (Siamese algae eater), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/crossocheilus-langei/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Crossocheilus langei on FishBase.",
        url: "https://www.fishbase.se/summary/Crossocheilus-langei.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 14.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "rainbow-shark",
    commonName: "Rainbow shark",
    scientificName: "Epalzeorhynchos frenatum",
    aliases: [
      "epalzeorhynchos frenatum",
      "rainbow shark"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Mekong, Chao Phraya and Xe Bangfai basins.",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15 cm TL.",
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
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Rainbow shark is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Rainbow shark moderate. The temperament line is territorial.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Epalzeorhynchos frenatum (Rainbow shark), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/epalzeorhynchos-frenatum/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Epalzeorhynchos frenatum on FishBase.",
        url: "https://www.fishbase.se/summary/Epalzeorhynchos-frenatum.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "red-tailed-black-shark",
    commonName: "Red-Tailed black shark",
    scientificName: "Epalzeorhynchos bicolor",
    aliases: [
      "epalzeorhynchos bicolor",
      "red-tailed black shark"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Chao Phraya basin, Thailand. Reported from the Mekong basin.",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 125,
    adultSizeIn: 5,
    adultSizeNote: "125 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 13 cm TL.",
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
    diet: "At 125 mm and with animal prey in the Seriously Fish diet notes, an adult Red-Tailed black shark is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 125 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Red-Tailed black shark moderate. The temperament line is territorial.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Epalzeorhynchos bicolor (Red-Tailed black shark), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/epalzeorhynchos-bicolor/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Epalzeorhynchos bicolor on FishBase.",
        url: "https://www.fishbase.se/summary/Epalzeorhynchos-bicolor.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 6.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 125 mm SL. FishBase lists 13 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "filament-barb",
    commonName: "Filament barb",
    scientificName: "Dawkinsia filamentosa",
    aliases: [
      "dawkinsia filamentosa",
      "filament barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: India.",
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
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 18 cm TL.",
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
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Filament barb is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Filament barb moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dawkinsia filamentosa (Filament barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dawkinsia-filamentosa/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dawkinsia filamentosa on FishBase.",
        url: "https://www.fishbase.se/summary/Dawkinsia-filamentosa.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 6–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 18 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "endlers-livebearer",
    commonName: "Endler's livebearer",
    scientificName: "Poecilia wingei",
    aliases: [
      "endler's livebearer",
      "poecilia wingei"
    ],
    family: "Poeciliidae",
    origin: "FishBase: South America: Campoma- and Buena Vista Lagoons in Venezuela.",
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
      max: 8.5
    },
    hardnessDGH: {
      min: 15,
      max: 35
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2 cm SL.",
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Endler's livebearer.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Endler's livebearer easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Poecilia wingei (Endler's livebearer), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/poecilia-wingei/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Poecilia wingei on FishBase.",
        url: "https://www.fishbase.se/summary/Poecilia-wingei.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 25 mm SL. FishBase lists 2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "short-finned-molly-black-molly",
    commonName: "Short-finned molly/black molly",
    scientificName: "Poecilia sphenops",
    aliases: [
      "poecilia sphenops",
      "short-finned molly/black molly"
    ],
    family: "Poeciliidae",
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
      min: 7,
      max: 8.5
    },
    hardnessDGH: {
      min: 15,
      max: 30
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 7.5 cm SL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Short-finned molly/black molly.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Short-finned molly/black molly easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Poecilia sphenops (Short-finned molly/black molly), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/poecilia-sphenops/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Poecilia sphenops on FishBase.",
        url: "https://www.fishbase.se/summary/Poecilia-sphenops.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–8.5. FishBase lists pH 7.5–8.2. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 15–30 dGH. FishBase lists dH 11–30. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "sailfin-molly",
    commonName: "Sailfin molly",
    scientificName: "Poecilia latipinna",
    aliases: [
      "poecilia latipinna",
      "sailfin molly"
    ],
    family: "Poeciliidae",
    origin: "FishBase: North America: Cape Fear drainage in North Carolina, USA to Veracruz, Mexico. Introduced to many countries. Several countries report adverse ecological impact after introduction. Gulf of Mexico.",
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
      min: 7,
      max: 8.5
    },
    hardnessDGH: {
      min: 15,
      max: 35
    },
    adultSizeMm: 125,
    adultSizeIn: 5,
    adultSizeNote: "125 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 15 cm TL.",
    minTank: {
      gallons: 23,
      liters: 87,
      lengthCm: 76,
      lengthIn: null,
      stated: "base 76 × 38 cm, about 87 litres / 23 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Sailfin molly.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Sailfin molly easy. The temperament line is fights its own kind. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Poecilia latipinna (Sailfin molly), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/poecilia-latipinna/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Poecilia latipinna on FishBase.",
        url: "https://www.fishbase.se/summary/Poecilia-latipinna.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 125 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "green-swordtail",
    commonName: "Green swordtail",
    scientificName: "Xiphophorus hellerii",
    aliases: [
      "green swordtail",
      "xiphophorus hellerii"
    ],
    family: "Poeciliidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
    tempC: {
      min: 16,
      max: 28
    },
    tempF: {
      min: 61,
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
    adultSizeMm: 140,
    adultSizeIn: 6,
    adultSizeNote: "140 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 14 cm TL.",
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
    diet: "At 140 mm and with animal prey in the Seriously Fish diet notes, an adult Green swordtail is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 140 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Green swordtail moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Xiphophorus hellerii (Green swordtail), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/xiphophorus-hellerii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Xiphophorus hellerii on FishBase.",
        url: "https://www.fishbase.se/summary/Xiphophorus-hellerii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 140 mm SL. FishBase lists 14 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "variable-platy",
    commonName: "Variable platy",
    scientificName: "Xiphophorus variatus",
    aliases: [
      "variable platy",
      "xiphophorus variatus"
    ],
    family: "Poeciliidae",
    origin: "FishBase: North America: endemic to Mexico from southern Tamaulipas to northern Veracruz. At least one country reports adverse ecological impact after introduction.",
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
      min: 7,
      max: 8.2
    },
    hardnessDGH: {
      min: 14,
      max: 30
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 7 cm TL.",
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Variable platy.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Variable platy beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Xiphophorus variatus (Variable platy), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/xiphophorus-variatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Xiphophorus variatus on FishBase.",
        url: "https://www.fishbase.se/summary/Xiphophorus-variatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 14–30 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "least-killifish",
    commonName: "Least killifish",
    scientificName: "Heterandria formosa",
    aliases: [
      "heterandria formosa",
      "least killifish"
    ],
    family: "Poeciliidae",
    origin: "FishBase: North America: occurs only in the USA from Cape Fear River drainage in North Carolina to southern Louisiana.",
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
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 20,
    adultSizeIn: 0.8,
    adultSizeNote: "20 mm SL on Seriously Fish, which also prints 0.8 in. FishBase lists 3.6 cm TL.",
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Least killifish.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Least killifish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Heterandria formosa (Least killifish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/heterandria-formosa/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Heterandria formosa on FishBase.",
        url: "https://www.fishbase.se/summary/Heterandria-formosa.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–20 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 20 mm SL. FishBase lists 3.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "panda-cory",
    commonName: "Panda cory",
    scientificName: "Hoplisoma panda",
    aliases: [
      "corydoras panda",
      "hoplisoma panda",
      "panda cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
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
      min: 6,
      max: 7.4
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 3.8 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Panda cory at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Panda cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma panda (Panda cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-panda/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma panda on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-panda.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–25°C (72–77°F). FishBase lists 20–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.4. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 3.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "pepper-cory",
    commonName: "Pepper cory",
    scientificName: "Hoplisoma paleatum",
    aliases: [
      "corydoras paleatus",
      "hoplisoma paleatum",
      "pepper cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Argentina, Brazil, and Uruguay.",
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
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 12
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 6.6 cm SL.",
    minTank: {
      gallons: 18,
      liters: 70,
      lengthCm: 61,
      lengthIn: null,
      stated: "base 61 × 38 cm, about 70 litres / 18 US gallons."
    },
    temperament: "peaceful",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Pepper cory at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Pepper cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma paleatum (Pepper cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-paleatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma paleatum on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-paleatum.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–26°C (72–79°F). FishBase lists 18–23°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "sterbas-cory",
    commonName: "Sterba's cory",
    scientificName: "Hoplisoma sterbai",
    aliases: [
      "corydoras sterbai",
      "hoplisoma sterbai",
      "sterba's cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: central Brazil and Bolivia.",
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
      max: 7.6
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 6.8 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Sterba's cory at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Sterba's cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma sterbai (Sterba's cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-sterbai/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma sterbai on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-sterbai.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 21–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.6. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "pygmy-cory",
    commonName: "Pygmy cory",
    scientificName: "Gastrodermus pygmaeus",
    aliases: [
      "corydoras pygmaeus",
      "gastrodermus pygmaeus",
      "pygmy cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Madeira River basin.",
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
      min: 6.4,
      max: 7.4
    },
    hardnessDGH: {
      min: 0,
      max: 8
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 2.1 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Pygmy cory at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Pygmy cory moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gastrodermus pygmaeus (Pygmy cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-pygmaeus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gastrodermus pygmaeus on FishBase.",
        url: "https://www.fishbase.se/summary/Gastrodermus-pygmaeus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.4–7.4. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–8 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 30 mm SL. FishBase lists 2.1 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "julii-cory",
    commonName: "Julii cory",
    scientificName: "Hoplisoma julii",
    aliases: [
      "corydoras julii",
      "hoplisoma julii",
      "julii cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Lower Amazon River and coastal rivers in northeastern Brazil.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.2 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Julii cory at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Julii cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma julii (Julii cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-julii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma julii on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-julii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 23–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "salt-and-pepper-cory",
    commonName: "Salt and pepper cory",
    scientificName: "Hoplisoma habrosum",
    aliases: [
      "corydoras habrosus",
      "hoplisoma habrosum",
      "salt and pepper cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Orinoco River basin.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 2 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Salt and pepper cory at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Salt and pepper cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma habrosum (Salt and pepper cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-habrosus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma habrosum on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-habrosum.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–10 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "adolfos-cory",
    commonName: "Adolfo's cory",
    scientificName: "Hoplisoma adolfoi",
    aliases: [
      "adolfo's cory",
      "corydoras adolfoi",
      "hoplisoma adolfoi"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Negro River basin.",
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
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 5.7 cm SL.",
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
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Adolfo's cory at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Adolfo's cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma adolfoi (Adolfo's cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-adolfoi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma adolfoi on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-adolfoi.html",
        accessed: "2026-10-31",
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
    lastVerified: "2026-10-31"
  },
  {
    slug: "three-lined-cory",
    commonName: "Three-lined cory",
    scientificName: "Hoplisoma trilineatum",
    aliases: [
      "corydoras trilineatus",
      "hoplisoma trilineatum",
      "three-lined cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Central Amazon River basin; Peruvian Amazon and coastal drainages of Suriname.",
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
      min: 5.8,
      max: 7.2
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 6.1 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Three-lined cory at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Three-lined cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma trilineatum (Three-lined cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-trilineatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma trilineatum on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-trilineatum.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.8–7.2. FishBase lists pH 6–8. The checker uses Seriously Fish."
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
    lastVerified: "2026-10-31"
  },
  {
    slug: "emerald-brochis",
    commonName: "Emerald brochis",
    scientificName: "Brochis splendens",
    aliases: [
      "brochis splendens",
      "emerald brochis"
    ],
    family: "Callichthyidae",
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
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 9.9 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Emerald brochis at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Emerald brochis easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis splendens (Emerald brochis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/brochis-splendens/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis splendens on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-splendens.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–8. FishBase lists pH 5.8–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 2–30. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 9.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "glass-catfish",
    commonName: "Glass catfish",
    scientificName: "Kryptopterus vitreolus",
    aliases: [
      "glass catfish",
      "kryptopterus vitreolus"
    ],
    family: "Siluridae",
    origin: "FishBase: Asia: Peninsular and southeastern Thailand; absent in central Thailand. Report from Penang, Malaysia requires verification.",
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
      max: 10
    },
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 6.5 cm SL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Glass catfish at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Glass catfish moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Kryptopterus vitreolus (Glass catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/kryptopterus-vitreolus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Kryptopterus vitreolus on FishBase.",
        url: "https://www.fishbase.se/summary/Kryptopterus-vitreolus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "upside-down-catfish",
    commonName: "Upside-down catfish",
    scientificName: "Synodontis nigriventris",
    aliases: [
      "synodontis nigriventris",
      "upside-down catfish"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: middle Congo River basin, including Pool Malebo (=Stanley Pool) and drainages of the Kasai and Ubangi.",
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
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9.6 cm TL.",
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
    minGroup: 3,
    minGroupNote: "Seriously Fish's behaviour section says at least 3. The checker uses 3.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Upside-down catfish.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Upside-down catfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis nigriventris (Upside-down catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-nigriventris/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis nigriventris on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-nigriventris.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–20 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 9.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "pictus-cat",
    commonName: "Pictus cat",
    scientificName: "Pimelodus pictus",
    aliases: [
      "pictus cat",
      "pimelodus pictus"
    ],
    family: "Pimelodidae",
    origin: "FishBase: South America: Amazon and Orinoco River basins.",
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
      min: 5.8,
      max: 6.8
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11 cm TL.",
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
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Pictus cat is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Pictus cat moderate. The temperament line is eats smaller fish. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pimelodus pictus (Pictus cat), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pimelodus-pictus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pimelodus pictus on FishBase.",
        url: "https://www.fishbase.se/summary/Pimelodus-pictus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.8–6.8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 11 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "zebra-loach",
    commonName: "Zebra loach",
    scientificName: "Botia striata",
    aliases: [
      "botia striata",
      "zebra loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Western Ghats and Maharashtra in India.",
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
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 90,
    adultSizeIn: 3.5,
    adultSizeNote: "90 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 7.8 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 90 mm and with animal prey in the Seriously Fish diet notes, an adult Zebra loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 90 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Zebra loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Botia striata (Zebra loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/botia-striata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Botia striata on FishBase.",
        url: "https://www.fishbase.se/summary/Botia-striata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–26°C (70–79°F). FishBase lists 23–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "dwarf-chain-loach",
    commonName: "Dwarf chain loach",
    scientificName: "Ambastaia sidthimunki",
    aliases: [
      "ambastaia sidthimunki",
      "dwarf chain loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Chao Phraya and Mekong basins.",
    tempC: {
      min: 20,
      max: 30
    },
    tempF: {
      min: 68,
      max: 86
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 5.5 cm SL.",
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
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf chain loach at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Dwarf chain loach moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Ambastaia sidthimunki (Dwarf chain loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/ambastaia-sidthimunki/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Ambastaia sidthimunki on FishBase.",
        url: "https://www.fishbase.se/summary/Ambastaia-sidthimunki.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–30°C (68–86°F). FishBase lists 26–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "clown-loach",
    commonName: "Clown loach",
    scientificName: "Chromobotia macracanthus",
    aliases: [
      "chromobotia macracanthus",
      "clown loach"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: Endemic to Indonesia (Sumatra and Borneo).",
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
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 400,
    adultSizeIn: 16,
    adultSizeNote: "400 mm SL on Seriously Fish, which also prints 16.0 in. FishBase lists 30.5 cm TL.",
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
    schooling: true,
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 400 mm and with animal prey in the Seriously Fish diet notes, an adult Clown loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 400 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Clown loach moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Chromobotia macracanthus (Clown loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/chromobotia-macracanthus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Chromobotia macracanthus on FishBase.",
        url: "https://www.fishbase.se/summary/Chromobotia-macracanthus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–30°C (75–86°F). FishBase lists 25–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 5–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 400 mm SL. FishBase lists 30.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "tiger-hillstream-loach",
    commonName: "Tiger hillstream loach",
    scientificName: "Sewellia lineolata",
    aliases: [
      "sewellia lineolata",
      "tiger hillstream loach"
    ],
    family: "Gastromyzontidae",
    origin: "FishBase: Asia: China, Viet Nam, Cambodia. Known from the Mekong basin.",
    tempC: {
      min: 20,
      max: 24
    },
    tempF: {
      min: 68,
      max: 75
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
    adultSizeMm: 65,
    adultSizeIn: 2.6,
    adultSizeNote: "65 mm SL on Seriously Fish, which also prints 2.6 in. FishBase lists 5.7 cm SL.",
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
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Tiger hillstream loach at 65 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 65 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Tiger hillstream loach moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sewellia lineolata (Tiger hillstream loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sewellia-lineolata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sewellia lineolata on FishBase.",
        url: "https://www.fishbase.se/summary/Sewellia-lineolata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "oriental-weather-loach",
    commonName: "Oriental weather loach",
    scientificName: "Misgurnus anguillicaudatus",
    aliases: [
      "misgurnus anguillicaudatus",
      "oriental weather loach"
    ],
    family: "Cobitidae",
    origin: "FishBase: Asia: Native to Siberia (Tugur and Amur drainages), Sakhalin, Korea, Japan, China south to northern Vietnam. Europe: Introduced in several localities in Rhine (France Ref.",
    tempC: {
      min: 18,
      max: 23
    },
    tempF: {
      min: 64,
      max: 73
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
    adultSizeMm: 280,
    adultSizeIn: 11,
    adultSizeNote: "280 mm SL on Seriously Fish, which also prints 11.0 in. FishBase lists 28 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 280 mm and with animal prey in the Seriously Fish diet notes, an adult Oriental weather loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 280 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Oriental weather loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Misgurnus anguillicaudatus (Oriental weather loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/misgurnus-anguillicaudatus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Misgurnus anguillicaudatus on FishBase.",
        url: "https://www.fishbase.se/summary/Misgurnus-anguillicaudatus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "dwarf-gourami",
    commonName: "Dwarf gourami",
    scientificName: "Trichogaster lalius",
    aliases: [
      "dwarf gourami",
      "trichogaster lalius"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Pakistan, India and Bangladesh.",
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
      min: 2,
      max: 18
    },
    adultSizeMm: 88,
    adultSizeIn: 3.5,
    adultSizeNote: "88 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 9.5 cm TL.",
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
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf gourami at 88 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 88 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Dwarf gourami easy. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichogaster lalius (Dwarf gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichogaster-lalius/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichogaster lalius on FishBase.",
        url: "https://www.fishbase.se/summary/Trichogaster-lalius.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–18 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 88 mm SL. FishBase lists 9.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "pearl-gourami",
    commonName: "Pearl gourami",
    scientificName: "Trichopodus leerii",
    aliases: [
      "pearl gourami",
      "trichopodus leerii"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Malay Peninsula, Thailand and Indonesia (Sumatra and Borneo).",
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
      min: 5.5,
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 30
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 12 cm TL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Pearl gourami at 120 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 120 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Pearl gourami beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichopodus leerii (Pearl gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichopodus-leerii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichopodus leerii on FishBase.",
        url: "https://www.fishbase.se/summary/Trichopodus-leerii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–30°C (75–86°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–8. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–30 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "three-spot-gourami",
    commonName: "Three-spot gourami",
    scientificName: "Trichopodus trichopterus",
    aliases: [
      "three-spot gourami",
      "trichopodus trichopterus"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Mekong basin in Laos, Yunnan, Thailand, Cambodia and Viet Nam; Southeast Asia.",
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
      min: 5.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 3,
      max: 35
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Three-spot gourami is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Three-spot gourami easy. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichopodus trichopterus (Three-spot gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichopodus-trichopterus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichopodus trichopterus on FishBase.",
        url: "https://www.fishbase.se/summary/Trichopodus-trichopterus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–8.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–35 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "sparkling-gourami",
    commonName: "Sparkling gourami",
    scientificName: "Trichopsis pumila",
    aliases: [
      "sparkling gourami",
      "trichopsis pumila"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Thailand.",
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
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Sparkling gourami at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Sparkling gourami beginner. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichopsis pumila (Sparkling gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichopsis-pumila/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichopsis pumila on FishBase.",
        url: "https://www.fishbase.se/summary/Trichopsis-pumila.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "croaking-gourami",
    commonName: "Croaking gourami",
    scientificName: "Trichopsis vittata",
    aliases: [
      "croaking gourami",
      "trichopsis vittata"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Thailand to Viet Nam and the islands of Sumatra, Borneo and Java. Distributed to many countries through the aquarium trade industry.",
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
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 8 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Croaking gourami at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates Croaking gourami beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichopsis vittata (Croaking gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/trichopsis-vittata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Trichopsis vittata on FishBase.",
        url: "https://www.fishbase.se/summary/Trichopsis-vittata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "kissing-gourami",
    commonName: "Kissing gourami",
    scientificName: "Helostoma temminckii",
    aliases: [
      "helostoma temminckii",
      "kissing gourami"
    ],
    family: "Helostomatidae",
    origin: "FishBase: Asia: Thailand to Indonesia.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 20
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 30 cm TL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Kissing gourami is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Kissing gourami moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Helostoma temminckii (Kissing gourami), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/helostoma-temminckii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Helostoma temminckii on FishBase.",
        url: "https://www.fishbase.se/summary/Helostoma-temminckii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 30 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "paradise-fish",
    commonName: "Paradise fish",
    scientificName: "Macropodus opercularis",
    aliases: [
      "macropodus opercularis",
      "paradise fish"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: China, from Yangtze basin to the south, on Hainan Island, in Taiwan, north Viet Nam; introduced to the tropical and subtropical world.",
    tempC: {
      min: 10,
      max: 22
    },
    tempF: {
      min: 50,
      max: 72
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
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 6.7 cm SL.",
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
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Paradise fish at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Paradise fish moderate. The temperament line is unknown. The social line is one male with several females.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Macropodus opercularis (Paradise fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/macropodus-opercularis/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Macropodus opercularis on FishBase.",
        url: "https://www.fishbase.se/summary/Macropodus-opercularis.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 10–22°C (50–72°F). FishBase lists 16–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 6.7 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "crescent-betta",
    commonName: "Crescent betta",
    scientificName: "Betta imbellis",
    aliases: [
      "betta imbellis",
      "crescent betta"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Thailand, Malaysia, Singapore and Indonesia.",
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
      max: 10
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6 cm SL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Crescent betta at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Crescent betta moderate. The temperament line is needs a tank of its own. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Betta imbellis (Crescent betta), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/betta-imbellis/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Betta imbellis on FishBase.",
        url: "https://www.fishbase.se/summary/Betta-imbellis.html",
        accessed: "2026-10-31",
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
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "angelfish",
    commonName: "Angelfish",
    scientificName: "Pterophyllum scalare",
    aliases: [
      "angelfish",
      "pterophyllum scalare"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in Peru, Colombia, and Brazil, along the Ucayali, Solimões and Amazon rivers; rivers of Amapá (Brazil), Rio Oyapock in French Guiana; Essequibo River in Guyana.",
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
      min: 6,
      max: 7.4
    },
    hardnessDGH: {
      min: 0,
      max: 15
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 10.5 cm TL.",
    minTank: {
      gallons: 53,
      liters: 200,
      lengthCm: 100,
      lengthIn: null,
      stated: "base 100 × 40 cm, about 200 litres / 53 US gallons."
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
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Angelfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Angelfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pterophyllum scalare (Angelfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pterophyllum-scalare/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pterophyllum scalare on FishBase.",
        url: "https://www.fishbase.se/summary/Pterophyllum-scalare.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.4. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–15 dGH. FishBase lists dH 5–13. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 10.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "ram",
    commonName: "Ram",
    scientificName: "Mikrogeophagus ramirezi",
    aliases: [
      "mikrogeophagus ramirezi",
      "ram"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Orinoco River basin, in the llanos of Venezuela and Colombia.",
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
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4.2 cm SL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Ram at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Ram moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Mikrogeophagus ramirezi (Ram), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/mikrogeophagus-ramirezi/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Mikrogeophagus ramirezi on FishBase.",
        url: "https://www.fishbase.se/summary/Mikrogeophagus-ramirezi.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5–6. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "bolivian-ram",
    commonName: "Bolivian ram",
    scientificName: "Mikrogeophagus altispinosus",
    aliases: [
      "bolivian ram",
      "mikrogeophagus altispinosus"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in the Guaporé River drainage in Brazil and Bolivia, and in the Mamoré River drainage in Bolivia.",
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
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 5.6 cm SL.",
    minTank: {
      gallons: 48,
      liters: 182,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 45 cm, about 182 litres / 48 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Bolivian ram at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Bolivian ram moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Mikrogeophagus altispinosus (Bolivian ram), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/mikrogeophagus-altispinosus/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Mikrogeophagus altispinosus on FishBase.",
        url: "https://www.fishbase.se/summary/Mikrogeophagus-altispinosus.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 5.6 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "cockatoo-cichlid",
    commonName: "Cockatoo cichlid",
    scientificName: "Apistogramma cacatuoides",
    aliases: [
      "apistogramma cacatuoides",
      "cockatoo cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in tributaries of the Ucayali, Amazon and Solimôes rivers from the Pachitea River to Tabatinga.",
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
      max: 6
    },
    hardnessDGH: {
      min: 0,
      max: 15
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Cockatoo cichlid at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Cockatoo cichlid moderate. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Apistogramma cacatuoides (Cockatoo cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/apistogramma-cacatuoides/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Apistogramma cacatuoides on FishBase.",
        url: "https://www.fishbase.se/summary/Apistogramma-cacatuoides.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–29°C (72–84°F). FishBase lists 24–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–6. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "agassizs-dwarf-cichlid",
    commonName: "Agassiz's dwarf cichlid",
    scientificName: "Apistogramma agassizii",
    aliases: [
      "agassiz's dwarf cichlid",
      "apistogramma agassizii"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, along Amazon-Solimões River from Peru through Brazil to the Capim River basin.",
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
      min: 3,
      max: 4
    },
    hardnessDGH: {
      min: 0,
      max: 10
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 4.4 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Agassiz's dwarf cichlid at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Agassiz's dwarf cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Apistogramma agassizii (Agassiz's dwarf cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/apistogramma-agassizii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Apistogramma agassizii on FishBase.",
        url: "https://www.fishbase.se/summary/Apistogramma-agassizii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–29°C (72–84°F). FishBase lists 26–29°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 3–4. FishBase lists pH 5–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–10 dGH. FishBase lists dH 0–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 4.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "kribensis",
    commonName: "Kribensis",
    scientificName: "Pelvicachromis pulcher",
    aliases: [
      "kribensis",
      "pelvicachromis pulcher"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: eastern Benin, southern Nigeria and western Cameroon.",
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
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 0,
      max: 12
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 11 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Kribensis at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates Kribensis easy. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pelvicachromis pulcher (Kribensis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pelvicachromis-pulcher/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pelvicachromis pulcher on FishBase.",
        url: "https://www.fishbase.se/summary/Pelvicachromis-pulcher.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 5–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–12 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 11 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "convict-cichlid",
    commonName: "Convict cichlid",
    scientificName: "Amatitlania nigrofasciata",
    aliases: [
      "amatitlania nigrofasciata",
      "convict cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Central America: Pacific slope, from Río Sucio, El Salvador to Río Suchiate, Guatemala; Atlantic slope, from Río Patuca, Honduras to Río Jutiapa, Guatemala. Not in slope to Panama (.",
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
      max: 25
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 10 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Convict cichlid at 150 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 150 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Convict cichlid moderate. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Amatitlania nigrofasciata (Convict cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/amatitlania-nigrofasciata/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Amatitlania nigrofasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Amatitlania-nigrofasciata.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 20–36°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 7–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–25 dGH. FishBase lists dH 9–20. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 10 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "keyhole-cichlid",
    commonName: "Keyhole cichlid",
    scientificName: "Cleithracara maronii",
    aliases: [
      "cleithracara maronii",
      "keyhole cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Trinidad (impersistent), Orinoco River basin (delta), rivers from Barima River (Guyana) to Ouanary River (French Guiana).",
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
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 110,
    adultSizeIn: 4,
    adultSizeNote: "110 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 7.1 cm SL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 110 mm and with animal prey in the Seriously Fish diet notes, an adult Keyhole cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 110 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Keyhole cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Cleithracara maronii (Keyhole cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/cleithracara-maronii/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Cleithracara maronii on FishBase.",
        url: "https://www.fishbase.se/summary/Cleithracara-maronii.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 110 mm SL. FishBase lists 7.1 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  },
  {
    slug: "blue-acara",
    commonName: "Blue acara",
    scientificName: "Andinoacara pulcher",
    aliases: [
      "andinoacara pulcher",
      "blue acara"
    ],
    family: "Cichlidae",
    origin: "FishBase: FishBase did not print a one-line distribution on the summary that was parsed.",
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
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 16 cm TL.",
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
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Blue acara is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates Blue acara moderate. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Andinoacara pulcher (Blue acara), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/andinoacara-pulcher/",
        accessed: "2026-10-31",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Andinoacara pulcher on FishBase.",
        url: "https://www.fishbase.se/summary/Andinoacara-pulcher.html",
        accessed: "2026-10-31",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 16 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-31"
  }
] satisfies SpeciesProfile[];
