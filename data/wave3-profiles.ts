import type { SpeciesProfile } from "../lib/types";

export const wave3Profiles = [
  {
    slug: "oscar",
    commonName: "Oscar",
    scientificName: "Astronotus ocellatus",
    aliases: [
      "astronotus ocellatus",
      "oscar"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: western Amazon and Orinoco basins. Introduced elsewhere.",
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
      min: 5,
      max: 20
    },
    adultSizeMm: 350,
    adultSizeIn: 14,
    adultSizeNote: "350 mm SL on Seriously Fish, which also prints 14.0 in. FishBase lists 45.7 cm TL.",
    minTank: {
      gallons: 143,
      liters: 540,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 60 cm, about 540 litres / 143 US gallons."
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
    diet: "Seriously Fish says wild oscars eat smaller fish, insects, and crustaceans. An adult cherry shrimp is scored as food.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish lists smaller fish and crustaceans in the wild diet, and says an oscar should not be combined with much smaller fishes.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    eatsSmallerFish: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish's behaviour section says this fish should not be kept with much smaller fish. Seriously Fish rates Oscar moderate. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Astronotus ocellatus (Oscar), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/astronotus-ocellatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Astronotus ocellatus on FishBase.",
        url: "https://www.fishbase.se/summary/Astronotus-ocellatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 350 mm SL. FishBase lists 45.7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "altum-angel",
    commonName: "Altum angel",
    scientificName: "Pterophyllum altum",
    aliases: [
      "altum angel",
      "pterophyllum altum"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in the upper Negro River drainage; Orinoco River basin, in tributaries of the upper Orinoco River (Inírida and Atabapo rivers) to Puerto Ayacucho.",
    tempC: {
      min: 28,
      max: 32
    },
    tempF: {
      min: 82,
      max: 90
    },
    tempFConverted: false,
    pH: {
      min: 4.8,
      max: 6.2
    },
    hardnessDGH: {
      min: 0,
      max: 5
    },
    adultSizeMm: 178,
    adultSizeIn: 7,
    adultSizeNote: "178 mm TL on Seriously Fish, which also prints 7.0 in. FishBase lists 18 cm TL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Altum angel at 178 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 178 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    eatsSmallerFish: true,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "Seriously Fish's behaviour section says this fish should not be kept with much smaller fish. Seriously Fish rates Altum angel not given a beginner/easy/moderate label. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pterophyllum altum (Altum angel), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pterophyllum-altum/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pterophyllum altum on FishBase.",
        url: "https://www.fishbase.se/summary/Pterophyllum-altum.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 28–32°C (82–90°F). FishBase lists 27–31°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 178 mm TL. FishBase lists 18 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "green-terror-cichlid",
    commonName: "Green terror cichlid",
    scientificName: "Andinoacara rivulatus",
    aliases: [
      "andinoacara rivulatus",
      "green terror",
      "green terror cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Pacific slope from the Esmeraldas River in Ecuador to the Tumbes River in Peru.",
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
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 300,
    adultSizeIn: 12,
    adultSizeNote: "300 mm SL on Seriously Fish, which also prints 12.0 in. FishBase lists 20 cm TL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 300 mm and with animal prey in the Seriously Fish diet notes, an adult Green terror cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 300 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "Seriously Fish temperament line: needs a tank of its own. Seriously Fish rates Green terror cichlid not given a beginner/easy/moderate label. The temperament line is needs a tank of its own. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Andinoacara rivulatus (Green terror cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/andinoacara-rivulatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Andinoacara rivulatus on FishBase.",
        url: "https://www.fishbase.se/summary/Andinoacara-rivulatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 300 mm SL. FishBase lists 20 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "jack-dempsey-cichlid",
    commonName: "Jack dempsey cichlid",
    scientificName: "Rocio octofasciata",
    aliases: [
      "jack dempsey",
      "jack dempsey cichlid",
      "rocio octofasciata"
    ],
    family: "Cichlidae",
    origin: "FishBase: a locality the FishBase summary does not state in one line.",
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
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 25 cm TL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 200 mm and with animal prey in the Seriously Fish diet notes, an adult Jack dempsey cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 200 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    eatsSmallerFish: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish's behaviour section says this fish should not be kept with much smaller fish. Seriously Fish rates Jack dempsey cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rocio octofasciata (Jack dempsey cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rocio-octofasciata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rocio octofasciata on FishBase.",
        url: "https://www.fishbase.se/summary/Rocio-octofasciata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–8. FishBase lists pH 7–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–20 dGH. FishBase lists dH 9–20. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 200 mm SL. FishBase lists 25 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "severum",
    commonName: "Severum",
    scientificName: "Heros efasciatus",
    aliases: [
      "heros efasciatus",
      "severum"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in tributaries of the Ucayali and Amazon rivers in Peru, and the Solimões-Amazon River in Brazil.",
    tempC: {
      min: 22.2,
      max: 28.9
    },
    tempF: {
      min: 72,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 8
    },
    adultSizeMm: 300,
    adultSizeIn: 12,
    adultSizeNote: "300 mm SL on Seriously Fish, which also prints 12.0 in. FishBase lists 17 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 300 mm and with animal prey in the Seriously Fish diet notes, an adult Severum is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 300 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish's behaviour section assesses this fish as territorial or a risk to smaller fish. Seriously Fish rates Severum easy. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Heros efasciatus (Severum), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/heros-efasciatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Heros efasciatus on FishBase.",
        url: "https://www.fishbase.se/summary/Heros-efasciatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22.2–28.9°C (72–84°F). FishBase lists 24–32°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 300 mm SL. FishBase lists 17 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "pearl-cichlid",
    commonName: "Pearl cichlid",
    scientificName: "Geophagus brasiliensis",
    aliases: [
      "geophagus brasiliensis",
      "pearl cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Coastal drainages of eastern and southern Brazil and Uruguay.",
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
      min: 1,
      max: 15
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 28 cm TL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Pearl cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Pearl cichlid moderate. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Geophagus brasiliensis (Pearl cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/geophagus-brasiliensis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Geophagus brasiliensis on FishBase.",
        url: "https://www.fishbase.se/summary/Geophagus-brasiliensis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–10. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 28 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Water",
        note: "FishBase marks this species both freshwater and brackish. The checker uses the Seriously Fish freshwater aquarium range and does not add a salinity rule."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "demon-eartheater",
    commonName: "Demon eartheater",
    scientificName: "Satanoperca jurupari",
    aliases: [
      "demon eartheater",
      "satanoperca jurupari"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, from Peru, Ecuador and Colombia to the mouth of Amazon River in Brazil, in Amapá (Brazil), and eastern French Guiana, also in the Bolivian Amazon drainage except the Guaporé River.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 185,
    adultSizeIn: 7,
    adultSizeNote: "185 mm SL on Seriously Fish, which also prints 7.0 in. FishBase lists 26 cm SL.",
    minTank: {
      gallons: 200,
      liters: 756,
      lengthCm: 210,
      lengthIn: null,
      stated: "base 210 × 60 cm, about 756 litres / 200 US gallons."
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 185 mm and with animal prey in the Seriously Fish diet notes, an adult Demon eartheater is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 185 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Demon eartheater not given a beginner/easy/moderate label. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Satanoperca jurupari (Demon eartheater), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/satanoperca-jurupari/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Satanoperca jurupari on FishBase.",
        url: "https://www.fishbase.se/summary/Satanoperca-jurupari.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6.3–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–10. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 185 mm SL. FishBase lists 26 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flag-cichlid",
    commonName: "Flag cichlid",
    scientificName: "Mesonauta festivus",
    aliases: [
      "flag cichlid",
      "mesonauta festivus"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Paraná River basin, in the Paraguay River drainage in Brazil and Paraguay; Amazon River basin, in the Guaporé (Brazil and Bolivia), Madre de Dios (Peru), Mamoré (Bolivia), Jamari and Tapajós (Brazil) River drainages.",
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
      min: 0,
      max: 5
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 12.1 cm SL.",
    minTank: {
      gallons: 36,
      liters: 137,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 38 cm, about 137 litres / 36 US gallons."
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
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Flag cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Flag cichlid moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Mesonauta festivus (Flag cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/mesonauta-festivus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Mesonauta festivus on FishBase.",
        url: "https://www.fishbase.se/summary/Mesonauta-festivus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 25–34°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–5 dGH. FishBase lists dH 4–6. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 12.1 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "red-edge-apisto",
    commonName: "Red edge apisto",
    scientificName: "Apistogramma viejita",
    aliases: [
      "apistogramma viejita",
      "red edge apisto",
      "red edge dwarf cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: upper Meta River basin of the Orinoco River basin, Colombia.",
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
      max: 6.5
    },
    hardnessDGH: {
      min: 0,
      max: 2
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 3 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Red edge apisto at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Red edge apisto moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Apistogramma viejita (Red edge apisto), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/apistogramma-viejita/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Apistogramma viejita on FishBase.",
        url: "https://www.fishbase.se/summary/Apistogramma-viejita.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 23–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 3 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spadetailed-checkerboard-cichlid",
    commonName: "Spadetailed checkerboard cichlid",
    scientificName: "Dicrossus maculatus",
    aliases: [
      "dicrossus maculatus",
      "spadetailed checkerboard cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in the Tapajós River drainage, Maués River, and near Parintins, Brazil.",
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
      min: 3.4,
      max: 5.4
    },
    hardnessDGH: {
      min: 0,
      max: 1
    },
    adultSizeMm: 53,
    adultSizeIn: 2.1,
    adultSizeNote: "53 mm SL on Seriously Fish, which also prints 2.1 in. FishBase lists 5.3 cm SL.",
    minTank: {
      gallons: 18,
      liters: 68,
      lengthCm: 60,
      lengthIn: null,
      stated: "base 60 × 30 cm, about 68 litres / 18 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Spadetailed checkerboard cichlid at 53 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 53 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spadetailed checkerboard cichlid moderate. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dicrossus maculatus (Spadetailed checkerboard cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dicrossus-maculatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dicrossus maculatus on FishBase.",
        url: "https://www.fishbase.se/summary/Dicrossus-maculatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 26–30°C (79–86°F). FishBase lists 22–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 3.4–5.4. FishBase lists pH 4.8–6. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "african-butterfly-cichlid",
    commonName: "African butterfly cichlid",
    scientificName: "Anomalochromis thomasi",
    aliases: [
      "african butterfly cichlid",
      "anomalochromis thomasi"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: coastal rivers from the Konkouré (Guinea) to the St. John (Liberia).",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult African butterfly cichlid at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates African butterfly cichlid easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Anomalochromis thomasi (African butterfly cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/anomalochromis-thomasi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Anomalochromis thomasi on FishBase.",
        url: "https://www.fishbase.se/summary/Anomalochromis-thomasi.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "blockhead-cichlid",
    commonName: "Blockhead cichlid",
    scientificName: "Steatocranus casuarius",
    aliases: [
      "blockhead cichlid",
      "lionhead cichlid",
      "steatocranus casuarius"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Pool Malebo (=Stanley Pool) and the lower Congo River in both Republic of Congo and Democratic Republic of the Congo.",
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
      min: 2,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 10 cm TL.",
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 120 mm and with animal prey in the Seriously Fish diet notes, an adult Blockhead cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 120 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Blockhead cichlid moderate. The temperament line is territorial.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Steatocranus casuarius (Blockhead cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/steatocranus-casuarius/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Steatocranus casuarius on FishBase.",
        url: "https://www.fishbase.se/summary/Steatocranus-casuarius.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "electric-yellow-cichlid",
    commonName: "Electric yellow cichlid",
    scientificName: "Labidochromis caeruleus",
    aliases: [
      "blue streak hap",
      "caeruleus",
      "electric yellow",
      "electric yellow cichlid",
      "labidochromis caeruleus",
      "yellow lab"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to Lake Malawi. Known only from the northwestern coast of the lake.",
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
      min: 7.7,
      max: 8.6
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 8.1 cm SL.",
    minTank: {
      gallons: 41,
      liters: 154,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 45 cm, about 154 litres / 41 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Electric yellow cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Electric yellow cichlid easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Labidochromis caeruleus, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/labidochromis-caeruleus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Labidochromis caeruleus on FishBase.",
        url: "https://www.fishbase.se/summary/Labidochromis-caeruleus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 23–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 8.1 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Common name",
        note: "Seriously Fish's title is Caeruleus. Its species account says this mbuna is best known in the hobby for the electric yellow morph, which is the fish usually sold, while the blue and white form is more widespread in the lake. FishBase's summary title is Blue streak hap. The page name is Electric yellow cichlid. The scientific name remains Labidochromis caeruleus."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "zebra-mbuna",
    commonName: "Zebra mbuna",
    scientificName: "Maylandia zebra",
    aliases: [
      "maylandia zebra",
      "zebra mbuna"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Lake Malawi in Malawi.",
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
      min: 7.6,
      max: 8.6
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 152,
    adultSizeIn: 6,
    adultSizeNote: "152 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 11.3 cm SL.",
    minTank: {
      gallons: 54,
      liters: 205,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 38 cm, about 205 litres / 54 US gallons."
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
    diet: "At 152 mm and with animal prey in the Seriously Fish diet notes, an adult Zebra mbuna is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 152 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Zebra mbuna moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Maylandia zebra (Zebra mbuna), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/maylandia-zebra/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Maylandia zebra on FishBase.",
        url: "https://www.fishbase.se/summary/Maylandia-zebra.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.6–8.6. FishBase lists pH 8–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 152 mm SL. FishBase lists 11.3 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "golden-mbuna",
    commonName: "Golden mbuna",
    scientificName: "Melanochromis auratus",
    aliases: [
      "golden mbuna",
      "melanochromis auratus"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: endemic to Lake Malawi.",
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
      min: 7.6,
      max: 8.8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 110,
    adultSizeIn: 4,
    adultSizeNote: "110 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 11 cm TL.",
    minTank: {
      gallons: 54,
      liters: 205,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 205 litres / 54 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Golden mbuna.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Golden mbuna moderate. The temperament line is territorial. The social line is one male with several females.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanochromis auratus (Golden mbuna), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanochromis-auratus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanochromis auratus on FishBase.",
        url: "https://www.fishbase.se/summary/Melanochromis-auratus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.6–8.8. FishBase lists pH 7–8.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 10–15. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 110 mm SL. FishBase lists 11 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "grants-peacock",
    commonName: "Grant's peacock",
    scientificName: "Aulonocara stuartgranti",
    aliases: [
      "aulonocara stuartgranti",
      "flavescent peacock",
      "grant's peacock"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to Lake Malawi. Occurs along the entire coast between Ngara and Chizi Point.",
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
      min: 7.5,
      max: 9
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 130,
    adultSizeIn: 5,
    adultSizeNote: "130 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11.8 cm TL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 130 mm and with animal prey in the Seriously Fish diet notes, an adult Grant's peacock is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 130 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Grant's peacock moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aulonocara stuartgranti (Grant's peacock), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aulonocara-stuartgranti/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aulonocara stuartgranti on FishBase.",
        url: "https://www.fishbase.se/summary/Aulonocara-stuartgranti.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–29°C (73–84°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 130 mm SL. FishBase lists 11.8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "electric-blue-hap",
    commonName: "Electric blue hap",
    scientificName: "Sciaenochromis fryeri",
    aliases: [
      "electric blue hap",
      "sciaenochromis fryeri"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: throughout Lake Malawi, including Taiwan Reef, Chinyankwazi and Chinyamwezi Islands.",
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
      min: 7.6,
      max: 8.8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 11.5 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish calls Sciaenochromis fryeri a predatory species and says vegetable matter is not required. The word vegetable in that sentence is a negation, not a grazing diet. An adult cherry shrimp is scored as food.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish says this hap is predatory in nature and does not need vegetable matter. Adult cherry shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Electric blue hap moderate. The temperament line is unknown. The social line is one male with several females.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sciaenochromis fryeri (Electric blue hap), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sciaenochromis-fryeri/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sciaenochromis fryeri on FishBase.",
        url: "https://www.fishbase.se/summary/Sciaenochromis-fryeri.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 200 mm SL. FishBase lists 11.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "malawi-blue-dolphin",
    commonName: "Malawi blue dolphin",
    scientificName: "Cyrtocara moorii",
    aliases: [
      "cyrtocara moorii",
      "hump-head",
      "malawi blue dolphin"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to Lake Malawi; widespread.",
    tempC: {
      min: 25,
      max: 29
    },
    tempF: {
      min: 77,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 7.5,
      max: 8.8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 20 cm TL.",
    minTank: {
      gallons: 68,
      liters: 257,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 38 cm, about 257 litres / 68 US gallons."
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
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Malawi blue dolphin is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Malawi blue dolphin moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Cyrtocara moorii (Malawi blue dolphin), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/cyrtocara-moorii/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Cyrtocara moorii on FishBase.",
        url: "https://www.fishbase.se/summary/Cyrtocara-moorii.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 25–29°C (77–84°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 10–18. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 20 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "dogtooth-cichlid",
    commonName: "Dogtooth cichlid",
    scientificName: "Cynotilapia afra",
    aliases: [
      "cynotilapia afra",
      "dogtooth cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Lake Malawi, indigenous to the central and northern parts of the Lake.",
    tempC: {
      min: 25,
      max: 29
    },
    tempF: {
      min: 77,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 7.5,
      max: 8.5
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 10.1 cm SL.",
    minTank: {
      gallons: 24,
      liters: 90,
      lengthCm: 100,
      lengthIn: null,
      stated: "base 100 × 30 cm, about 90 litres / 24 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Dogtooth cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Dogtooth cichlid moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Cynotilapia afra (Dogtooth cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/cynotilapia-afra/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Cynotilapia afra on FishBase.",
        url: "https://www.fishbase.se/summary/Cynotilapia-afra.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 25–29°C (77–84°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.5–8.5. FishBase lists pH 8–8.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "rusty-cichlid",
    commonName: "Rusty cichlid",
    scientificName: "Iodotropheus sprengerae",
    aliases: [
      "iodotropheus sprengerae",
      "lavender mbuna",
      "rusty cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to Lake Malawi. Occurs in Boadzulu and Chinyankwazi Islands. Also recorded from Chinyamwezi Island.",
    tempC: {
      min: 25,
      max: 29
    },
    tempF: {
      min: 77,
      max: 84
    },
    tempFConverted: false,
    pH: {
      min: 7.5,
      max: 8.8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 10.8 cm SL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Rusty cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Rusty cichlid moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Iodotropheus sprengerae (Rusty cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/iodotropheus-sprengerae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Iodotropheus sprengerae on FishBase.",
        url: "https://www.fishbase.se/summary/Iodotropheus-sprengerae.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 25–29°C (77–84°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "trewavas-cichlid",
    commonName: "Trewavas' cichlid",
    scientificName: "Labeotropheus trewavasae",
    aliases: [
      "labeotropheus trewavasae",
      "scrapermouth mbuna",
      "trewavas' cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Lake Malawi.",
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
      min: 7.6,
      max: 8.8
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 113,
    adultSizeIn: 4,
    adultSizeNote: "113 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 11.7 cm TL.",
    minTank: {
      gallons: 41,
      liters: 154,
      lengthCm: 90,
      lengthIn: null,
      stated: "base 90 × 45 cm, about 154 litres / 41 US gallons."
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
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Trewavas' cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Trewavas' cichlid moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Labeotropheus trewavasae (Trewavas' cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/labeotropheus-trewavasae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Labeotropheus trewavasae on FishBase.",
        url: "https://www.fishbase.se/summary/Labeotropheus-trewavasae.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.6–8.8. FishBase lists pH 8–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 113 mm SL. FishBase lists 11.7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "white-spotted-cichlid",
    commonName: "White-Spotted cichlid",
    scientificName: "Tropheus duboisi",
    aliases: [
      "tropheus duboisi",
      "white-spotted cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: endemic to Lake Tanganyika, patchy distribution in the northern part of the lake.",
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
      min: 8,
      max: 9.5
    },
    hardnessDGH: {
      min: 8,
      max: 25
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 12 cm TL.",
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for White-Spotted cichlid.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates White-Spotted cichlid moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Tropheus duboisi (White-Spotted cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/tropheus-duboisi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Tropheus duboisi on FishBase.",
        url: "https://www.fishbase.se/summary/Tropheus-duboisi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–27°C (73–81°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 8–9.5. FishBase lists pH 8.5–9. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 8–25 dGH. FishBase lists dH 10–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "humphead-cichlid",
    commonName: "Humphead cichlid",
    scientificName: "Cyphotilapia frontosa",
    aliases: [
      "cyphotilapia frontosa",
      "humphead cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: endemic to Lake Tanganyika, distributed in the northern half of the lake.",
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
      min: 8,
      max: 9
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 255,
    adultSizeIn: 10,
    adultSizeNote: "255 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 33 cm TL.",
    minTank: {
      gallons: 228,
      liters: 864,
      lengthCm: 240,
      lengthIn: null,
      stated: "base 240 × 60 cm, about 864 litres / 228 US gallons."
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
    diet: "Seriously Fish describes a generalised predator of smaller fishes, macro-invertebrates, and molluscs. An adult cherry shrimp is scored as food.",
    shrimpRisk: "adults",
    shrimpRiskNote: "The diet includes smaller fishes and macro-invertebrates, so adult cherry shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    eatsSmallerFish: true,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "Seriously Fish's behaviour section says this fish should not be kept with much smaller fish. Seriously Fish rates Humphead cichlid not given a beginner/easy/moderate label. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Cyphotilapia frontosa (Humphead cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/cyphotilapia-frontosa/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Cyphotilapia frontosa on FishBase.",
        url: "https://www.fishbase.se/summary/Cyphotilapia-frontosa.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–27°C (73–81°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 8–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 255 mm SL. FishBase lists 33 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "marliers-julie",
    commonName: "Marlier's julie",
    scientificName: "Julidochromis marlieri",
    aliases: [
      "julidochromis marlieri",
      "marlier's julie"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to the northwestern part of Lake Tanganyika.",
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
      min: 7.5,
      max: 9.5
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 13 cm TL.",
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish says live and frozen foods should be a decent proportion of the diet, with some vegetable matter as well. Shrimplets are scored as food. The page does not say it hunts an adult cherry shrimp.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "Live and frozen foods are a stated part of the diet, so shrimplets are at risk. Adult cherry shrimp are not scored as prey because the page does not say so.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Marlier's julie moderate. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Julidochromis marlieri (Marlier's julie), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/julidochromis-marlieri/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Julidochromis marlieri on FishBase.",
        url: "https://www.fishbase.se/summary/Julidochromis-marlieri.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.5–9.5. FishBase lists pH 7.5–9. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 13 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "calvus-cichlid",
    commonName: "Calvus cichlid",
    scientificName: "Altolamprologus calvus",
    aliases: [
      "altolamprologus calvus",
      "calvus cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: endemic to Lake Tanganyika, found in the southwestern part of the lake.",
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
      min: 7.5,
      max: 9
    },
    hardnessDGH: {
      min: 8,
      max: 20
    },
    adultSizeMm: 138,
    adultSizeIn: 5,
    adultSizeNote: "138 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 13.5 cm TL.",
    minTank: {
      gallons: 45,
      liters: 172,
      lengthCm: 91,
      lengthIn: null,
      stated: "base 91 × 46 cm, about 172 litres / 45 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Calvus cichlid at 138 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 138 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Calvus cichlid moderate. The temperament line is unknown. The social line is one male with several females.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Altolamprologus calvus (Calvus cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/altolamprologus-calvus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Altolamprologus calvus on FishBase.",
        url: "https://www.fishbase.se/summary/Altolamprologus-calvus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–27°C (75–81°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 7.5–9. FishBase lists pH 8–9. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 138 mm SL. FishBase lists 13.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "sardine-cichlid",
    commonName: "Sardine cichlid",
    scientificName: "Cyprichromis leptosoma",
    aliases: [
      "cyprichromis leptosoma",
      "sardine cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Endemic to Lake Tanganyika.",
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
      min: 7.8,
      max: 9
    },
    hardnessDGH: {
      min: 10,
      max: 25
    },
    adultSizeMm: 125,
    adultSizeIn: 5,
    adultSizeNote: "125 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11 cm TL.",
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
    diet: "At 125 mm and with animal prey in the Seriously Fish diet notes, an adult Sardine cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 125 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Sardine cichlid moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Cyprichromis leptosoma (Sardine cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/cyprichromis-leptosoma/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Cyprichromis leptosoma on FishBase.",
        url: "https://www.fishbase.se/summary/Cyprichromis-leptosoma.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–27°C (75–81°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 10–25 dGH. FishBase lists dH 9–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 125 mm SL. FishBase lists 11 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "dwarf-egyptian-mouth-brooder",
    commonName: "Dwarf egyptian mouth-brooder",
    scientificName: "Pseudocrenilabrus multicolor",
    aliases: [
      "dwarf egyptian mouth-brooder",
      "egyptian mouth-brooder",
      "pseudocrenilabrus multicolor"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: Nile River system, Lake Albert, Semliki River, Lakes Victoria and Kyoga, Malawa and Aswa Rivers, Lake George, Lake Nabugabo, swampy lakes Kachira, Kijanebalola and Nakavali which lie between Lakes Edward and Victora; and rivers and lakes of Uganda including the Albert Lake drainage. Absent from Lake Turkana. Previously, two subspecies were recognized:.",
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
      max: 7.2
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 8 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Dwarf egyptian mouth-brooder at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section assesses this fish as aggressive or a fin-nipper. Seriously Fish rates Dwarf egyptian mouth-brooder moderate. The temperament line is unknown. The social line is one male with several females.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudocrenilabrus multicolor (Dwarf egyptian mouth-brooder), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudocrenilabrus-multicolor/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudocrenilabrus multicolor on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudocrenilabrus-multicolor.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–15 dGH. FishBase lists dH 10–14. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "jewel-cichlid",
    commonName: "Jewel cichlid",
    scientificName: "Rubricatochromis bimaculatus",
    aliases: [
      "hemichromis bimaculatus",
      "jewel cichlid",
      "rubricatochromis bimaculatus"
    ],
    family: "Cichlidae",
    origin: "FishBase: Africa: widely distributed in West Africa, where it is known from most hydrographic basins.",
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
      max: 7.8
    },
    hardnessDGH: {
      min: 4,
      max: 18
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 13.6 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish says a jewel cichlid will eat nearly anything offered, with vegetable matter as a supplement. An adult cherry shrimp is scored as food.",
    shrimpRisk: "adults",
    shrimpRiskNote: "The diet note says it will eat nearly anything offered. Adult cherry shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Jewel cichlid easy. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rubricatochromis bimaculatus (Jewel cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemichromis-bimaculatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rubricatochromis bimaculatus on FishBase.",
        url: "https://www.fishbase.se/summary/Rubricatochromis-bimaculatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.8. FishBase lists pH 6.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 4–18 dGH. FishBase lists dH 4–16. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Water",
        note: "FishBase marks this species both freshwater and brackish. The checker uses the Seriously Fish freshwater aquarium range and does not add a salinity rule."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "jaguar-cichlid",
    commonName: "Jaguar cichlid",
    scientificName: "Parachromis managuensis",
    aliases: [
      "jaguar cichlid",
      "jaguar guapote",
      "parachromis managuensis"
    ],
    family: "Cichlidae",
    origin: "FishBase: Central America: Atlantic slope from the Ulua River (Honduras) to the Matina River (Costa Rica). Introduced elsewhere.",
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
      max: 8
    },
    hardnessDGH: {
      min: 6,
      max: 18
    },
    adultSizeMm: 610,
    adultSizeIn: 24,
    adultSizeNote: "610 mm SL on Seriously Fish, which also prints 24.0 in. FishBase lists 55 cm TL.",
    minTank: {
      gallons: 54,
      liters: 205,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 38 cm, about 205 litres / 54 US gallons."
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
    diet: "Seriously Fish says this fish will see smaller fish as food. An adult cherry shrimp is scored as food.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish says smaller fish are food. Adult cherry shrimp are scored as prey as well.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    eatsSmallerFish: true,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish's behaviour section says this fish should not be kept with much smaller fish. Seriously Fish rates Jaguar cichlid easy. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Parachromis managuensis (Jaguar cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/parachromis-managuensis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Parachromis managuensis on FishBase.",
        url: "https://www.fishbase.se/summary/Parachromis-managuensis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 7–8.7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 6–18 dGH. FishBase lists dH 10–15. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 610 mm SL. FishBase lists 55 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "nicaragua-cichlid",
    commonName: "Nicaragua cichlid",
    scientificName: "Hypsophrys nicaraguensis",
    aliases: [
      "hypsophrys nicaraguensis",
      "moga",
      "nicaragua cichlid"
    ],
    family: "Cichlidae",
    origin: "FishBase: Central America: Atlantic slope, from the San Juan drainage, including Lake Nicaragua, in Costa Rica and Nicaragua, to the Matina River drainage in Costa Rica.",
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
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 8,
      max: 20
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 16.5 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Nicaragua cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish's behaviour section assesses this fish as territorial or a risk to smaller fish. Seriously Fish rates Nicaragua cichlid moderate. The temperament line is unknown. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hypsophrys nicaraguensis (Nicaragua cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hypsophrys-nicaraguensis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hypsophrys nicaraguensis on FishBase.",
        url: "https://www.fishbase.se/summary/Hypsophrys-nicaraguensis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 23–36°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 16.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "cupid-cichlid",
    commonName: "Cupid cichlid",
    scientificName: "Biotodoma cupido",
    aliases: [
      "biotodoma cupido",
      "cupid cichlid",
      "greenstreaked eartheater"
    ],
    family: "Cichlidae",
    origin: "FishBase: South America: Amazon River basin, in Peru, Bolivia and Brazil; Essequibo River in Guyana.",
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
      min: 5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 11.7 cm SL.",
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
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Cupid cichlid is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Cupid cichlid moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Biotodoma cupido (Cupid cichlid), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/biotodoma-cupido/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Biotodoma cupido on FishBase.",
        url: "https://www.fishbase.se/summary/Biotodoma-cupido.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–30°C (68–86°F). FishBase lists 23–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–5 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 11.7 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "napo-cory",
    commonName: "Napo cory",
    scientificName: "Gastrodermus napoensis",
    aliases: [
      "corydoras napoensis",
      "gastrodermus napoensis",
      "napo cory",
      "rio napo cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: western Amazon River basin in eastern Ecuador and Loreto, Peru.",
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
      max: 7.4
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 4.2 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Napo cory at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Napo cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gastrodermus napoensis (Napo cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-napoensis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gastrodermus napoensis on FishBase.",
        url: "https://www.fishbase.se/summary/Gastrodermus-napoensis.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 4.2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "elegant-cory",
    commonName: "Elegant cory",
    scientificName: "Gastrodermus elegans",
    aliases: [
      "corydoras elegans",
      "elegant cory",
      "elegant corydoras",
      "gastrodermus elegans"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
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
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.1 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Elegant cory at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Elegant cory beginner. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Gastrodermus elegans (Elegant cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-elegans/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Gastrodermus elegans on FishBase.",
        url: "https://www.fishbase.se/summary/Gastrodermus-elegans.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "smudge-spot-cory",
    commonName: "Smudge spot cory",
    scientificName: "Hoplisoma simile",
    aliases: [
      "corydoras similis",
      "hoplisoma simile",
      "smudge spot cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Madeira River basin.",
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
      min: 5.6,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 3.8 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Smudge spot cory at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Smudge spot cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma simile (Smudge spot cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-similis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma simile on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-simile.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–27°C (70–81°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.6–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 0–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 3.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "skunk-corydoras",
    commonName: "Skunk corydoras",
    scientificName: "Brochis arcuata",
    aliases: [
      "brochis arcuata",
      "corydoras arcuatus",
      "skunk corydoras"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
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
      min: 2,
      max: 12
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 4.8 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Skunk corydoras at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Skunk corydoras beginner. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis arcuata, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-arcuatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis arcuata on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-arcuata.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Skunk corydoras, the common name printed in the FishBase title."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "palespotted-cory",
    commonName: "Palespotted cory",
    scientificName: "Hoplisoma gossei",
    aliases: [
      "corydoras gossei",
      "hoplisoma gossei",
      "palespotted cory",
      "palespotted corydoras"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Brazil and Bolivia (Mamoré River basin).",
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
      max: 10
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Palespotted cory at 55 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 55 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Palespotted cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hoplisoma gossei (Palespotted cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-gossei/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hoplisoma gossei on FishBase.",
        url: "https://www.fishbase.se/summary/Hoplisoma-gossei.html",
        accessed: "2026-11-07",
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
        field: "Hardness",
        note: "Seriously Fish lists 2–10 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "false-network-cory",
    commonName: "False network cory",
    scientificName: "Brochis sodalis",
    aliases: [
      "brochis sodalis",
      "corydoras sodalis",
      "false network catfish",
      "false network cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Amazon River in Loreto, Peru and Amazonas, Brazil.",
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
      min: 1,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 4.9 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult False network cory at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates False network cory moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis sodalis (False network cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-sodalis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis sodalis on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-sodalis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 4.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "mosaic-cory",
    commonName: "Mosaic cory",
    scientificName: "Brochis haraldschultzi",
    aliases: [
      "brochis haraldschultzi",
      "corydoras haraldschultzi",
      "mosaic cory",
      "mosaic corydoras"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Brazil and Bolivia.",
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
      max: 10
    },
    adultSizeMm: 85,
    adultSizeIn: 3.3,
    adultSizeNote: "85 mm SL on Seriously Fish, which also prints 3.3 in. FishBase lists 5.9 cm SL.",
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
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Mosaic cory at 85 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 85 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Mosaic cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis haraldschultzi (Mosaic cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-haraldschultzi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis haraldschultzi on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-haraldschultzi.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 85 mm SL. FishBase lists 5.9 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flagtail-cory",
    commonName: "Flagtail cory",
    scientificName: "Brochis robineae",
    aliases: [
      "bannertail catfish",
      "brochis robineae",
      "corydoras robineae",
      "flagtail cory"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Upper Negro River basin.",
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
      max: 12
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 4.4 cm SL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Flagtail cory at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Flagtail cory easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Brochis robineae (Flagtail cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/corydoras-robineae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Brochis robineae on FishBase.",
        url: "https://www.fishbase.se/summary/Brochis-robineae.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 6.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 4.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "banded-cory",
    commonName: "Banded cory",
    scientificName: "Scleromystax barbatus",
    aliases: [
      "banded cory",
      "banded corydoras",
      "scleromystax barbatus"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Coastal drainages from Rio de Janeiro to Santa Catarina, Brazil.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9.8 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Banded cory at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish's behaviour section assesses this fish as territorial or a risk to smaller fish. Seriously Fish rates Banded cory easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Scleromystax barbatus (Banded cory), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/scleromystax-barbatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Scleromystax barbatus on FishBase.",
        url: "https://www.fishbase.se/summary/Scleromystax-barbatus.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 2–25. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flagtail-catfish",
    commonName: "Flagtail catfish",
    scientificName: "Dianema urostriatum",
    aliases: [
      "dianema urostriatum",
      "flagtail catfish"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Amazon River basin.",
    tempC: {
      min: 25,
      max: 28
    },
    tempF: {
      min: 77,
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
    adultSizeMm: 125,
    adultSizeIn: 5,
    adultSizeNote: "125 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 8.4 cm SL.",
    minTank: {
      gallons: 36,
      liters: 137,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 38 cm, about 137 litres / 36 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Flagtail catfish at 125 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 125 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Flagtail catfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dianema urostriatum (Flagtail catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dianema-urostriatum/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dianema urostriatum on FishBase.",
        url: "https://www.fishbase.se/summary/Dianema-urostriatum.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 125 mm SL. FishBase lists 8.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "porthole-catfish",
    commonName: "Porthole catfish",
    scientificName: "Dianema longibarbis",
    aliases: [
      "dianema longibarbis",
      "porthole catfish"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Amazon River basin.",
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
      max: 20
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9.8 cm SL.",
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
    schooling: true,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Porthole catfish at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Porthole catfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Dianema longibarbis (Porthole catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/dianema-longibarbis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Dianema longibarbis on FishBase.",
        url: "https://www.fishbase.se/summary/Dianema-longibarbis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 24–28°C (75–82°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spotted-hoplo",
    commonName: "Spotted hoplo",
    scientificName: "Megalechis thoracata",
    aliases: [
      "megalechis thoracata",
      "spotted hoplo"
    ],
    family: "Callichthyidae",
    origin: "FishBase: South America: Amazon, Orinoco and upper Paraguay River basins, as well as coastal rivers of the Guianas and northern Brazil.",
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
      min: 0,
      max: 20
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15.5 cm SL.",
    minTank: {
      gallons: 36,
      liters: 137,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 38 cm, about 137 litres / 36 US gallons."
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
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Spotted hoplo at 150 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 150 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spotted hoplo beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalechis thoracata (Spotted hoplo), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/megalechis-thoracata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalechis thoracata on FishBase.",
        url: "https://www.fishbase.se/summary/Megalechis-thoracata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spotted-talking-catfish",
    commonName: "Spotted talking catfish",
    scientificName: "Agamyxis pectinifrons",
    aliases: [
      "agamyxis pectinifrons",
      "spotted talking catfish",
      "whitebarred catfish"
    ],
    family: "Doradidae",
    origin: "FishBase: South America: Amazon River basin.",
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
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 20
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 15 cm SL.",
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
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Spotted talking catfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spotted talking catfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Agamyxis pectinifrons (Spotted talking catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/agamyxis-pectinifrons/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Agamyxis pectinifrons on FishBase.",
        url: "https://www.fishbase.se/summary/Agamyxis-pectinifrons.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "humbug-catfish",
    commonName: "Humbug catfish",
    scientificName: "Platydoras armatulus",
    aliases: [
      "humbug catfish",
      "platydoras armatulus"
    ],
    family: "Doradidae",
    origin: "FishBase: South America: Paraná River basin.",
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
      min: 5.8,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 20
    },
    adultSizeMm: 240,
    adultSizeIn: 9,
    adultSizeNote: "240 mm SL on Seriously Fish, which also prints 9.0 in. FishBase lists 43 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 240 mm and with animal prey in the Seriously Fish diet notes, an adult Humbug catfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 240 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: eats smaller fish. Seriously Fish rates Humbug catfish moderate. The temperament line is eats smaller fish. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Platydoras armatulus (Humbug catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/platydoras-armatulus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Platydoras armatulus on FishBase.",
        url: "https://www.fishbase.se/summary/Platydoras-armatulus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 240 mm SL. FishBase lists 43 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "clown-synodontis",
    commonName: "Clown synodontis",
    scientificName: "Synodontis decorus",
    aliases: [
      "clown squeaker",
      "clown synodontis",
      "synodontis decorus"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: Congo River basin except Luvua and Luapula drainages.",
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
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 25
    },
    adultSizeMm: 300,
    adultSizeIn: 12,
    adultSizeNote: "300 mm SL on Seriously Fish, which also prints 12.0 in. FishBase lists 31.8 cm TL.",
    minTank: {
      gallons: 54,
      liters: 205,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 205 litres / 54 US gallons."
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
    diet: "Seriously Fish says Clown synodontis is omnivorous and accepts frozen, live, and dried foods, and also rasps vegetable matter. Shrimplets are scored as food. The page does not say it hunts an adult cherry shrimp.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet includes live and frozen foods, so shrimplets are at risk. Adult cherry shrimp are not scored as prey because that hunt is not stated.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: needs a tank of its own. Seriously Fish rates Clown synodontis moderate. The temperament line is needs a tank of its own. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis decorus (Clown synodontis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-decorus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis decorus on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-decorus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 300 mm SL. FishBase lists 31.8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "polka-dot-synodontis",
    commonName: "Polka dot synodontis",
    scientificName: "Synodontis angelicus",
    aliases: [
      "angel squeaker",
      "polka dot synodontis",
      "synodontis angelicus"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: Congo River basin.",
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
      min: 3,
      max: 20
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 55 cm TL.",
    minTank: {
      gallons: 54,
      liters: 205,
      lengthCm: 120,
      lengthIn: null,
      stated: "base 120 × 45 cm, about 205 litres / 54 US gallons."
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
    diet: "Seriously Fish says Polka dot synodontis is omnivorous and accepts frozen, live, and dried foods, and also rasps vegetable matter. Shrimplets are scored as food. The page does not say it hunts an adult cherry shrimp.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet includes live and frozen foods, so shrimplets are at risk. Adult cherry shrimp are not scored as prey because that hunt is not stated.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Polka dot synodontis moderate. The temperament line is territorial. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis angelicus (Polka dot synodontis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-angelicus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis angelicus on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-angelicus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–20 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 55 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "pyjama-synodontis",
    commonName: "Pyjama synodontis",
    scientificName: "Synodontis flavitaeniatus",
    aliases: [
      "orangestriped squeaker",
      "pyjama synodontis",
      "synodontis flavitaeniatus"
    ],
    family: "Mochokidae",
    origin: "FishBase: Africa: middle Congo River basin.",
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
      min: 6.5,
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 25
    },
    adultSizeMm: 195,
    adultSizeIn: 8,
    adultSizeNote: "195 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 19.5 cm TL.",
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
    diet: "Seriously Fish says Pyjama synodontis is omnivorous and accepts frozen, live, and dried foods, and also rasps vegetable matter. Shrimplets are scored as food. The page does not say it hunts an adult cherry shrimp.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet includes live and frozen foods, so shrimplets are at risk. Adult cherry shrimp are not scored as prey because that hunt is not stated.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Pyjama synodontis easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Synodontis flavitaeniatus (Pyjama synodontis), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/synodontis-flavitaeniatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Synodontis flavitaeniatus on FishBase.",
        url: "https://www.fishbase.se/summary/Synodontis-flavitaeniatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 195 mm SL. FishBase lists 19.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "gold-nugget-pleco",
    commonName: "Gold nugget pleco",
    scientificName: "Baryancistrus xanthellus",
    aliases: [
      "baryancistrus xanthellus",
      "gold nugget pleco"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Volta Grande do rio Xingu, an area immediately above Belo Monte falls, and rio Iriri, the larger tributary of rio Xingu in Brazil.",
    tempC: {
      min: 27,
      max: 32
    },
    tempF: {
      min: 81,
      max: 90
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
    adultSizeMm: 224,
    adultSizeIn: 9,
    adultSizeNote: "224 mm SL on Seriously Fish, which also prints 9.0 in. FishBase lists 29.7 cm TL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 224 mm and with animal prey in the Seriously Fish diet notes, an adult Gold nugget pleco is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 224 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish's behaviour section assesses this fish as territorial or a risk to smaller fish. Seriously Fish rates Gold nugget pleco moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Baryancistrus xanthellus (Gold nugget pleco), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/baryancistrus-xanthellus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Baryancistrus xanthellus on FishBase.",
        url: "https://www.fishbase.se/summary/Baryancistrus-xanthellus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 224 mm SL. FishBase lists 29.7 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "whiptail-catfish",
    commonName: "Whiptail catfish",
    scientificName: "Rineloricaria lanceolata",
    aliases: [
      "chocolate-colored catfish",
      "rineloricaria lanceolata",
      "whiptail catfish"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
    tempC: {
      min: 25,
      max: 28
    },
    tempF: {
      min: 77,
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
    adultSizeMm: 95,
    adultSizeIn: 3.7,
    adultSizeNote: "95 mm SL on Seriously Fish, which also prints 3.7 in. FishBase lists 12.3 cm TL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 95 mm and with animal prey in the Seriously Fish diet notes, an adult Whiptail catfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 95 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Whiptail catfish beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Rineloricaria lanceolata (Whiptail catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/rineloricaria-lanceolata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Rineloricaria lanceolata on FishBase.",
        url: "https://www.fishbase.se/summary/Rineloricaria-lanceolata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 95 mm SL. FishBase lists 12.3 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "oto-macrospilus",
    commonName: "Oto (macrospilus)",
    scientificName: "Otocinclus macrospilus",
    aliases: [
      "oto (macrospilus)",
      "otocinclus macrospilus"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Amazon River basin.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.5 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Oto (macrospilus) at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Oto (macrospilus) moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Otocinclus macrospilus (Oto (macrospilus)), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/otocinclus-macrospilus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Otocinclus macrospilus on FishBase.",
        url: "https://www.fishbase.se/summary/Otocinclus-macrospilus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "twig-catfish",
    commonName: "Twig catfish",
    scientificName: "Farlowella vittata",
    aliases: [
      "farlowella vittata",
      "twig catfish"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: Orinoco River basin.",
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
      max: 7
    },
    hardnessDGH: {
      min: 3,
      max: 10
    },
    adultSizeMm: 150,
    adultSizeIn: 6,
    adultSizeNote: "150 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 22.5 cm SL.",
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
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 150 mm and with animal prey in the Seriously Fish diet notes, an adult Twig catfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 150 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Twig catfish easy. The temperament line is peaceful. The social line is fine alone.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Farlowella vittata (Twig catfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/farlowella-vittata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Farlowella vittata on FishBase.",
        url: "https://www.fishbase.se/summary/Farlowella-vittata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 150 mm SL. FishBase lists 22.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "bushymouth-catfish",
    commonName: "Bushymouth catfish",
    scientificName: "Ancistrus dolichopterus",
    aliases: [
      "ancistrus dolichopterus",
      "bushymouth catfish"
    ],
    family: "Loricariidae",
    origin: "FishBase: South America: upper and middle Brazilian Amazon River basin and from the Negro, lower Trombetas, Tefé, Madeira and Tapajós River basins.",
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
      min: 1,
      max: 10
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 14.5 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 200 mm and with animal prey in the Seriously Fish diet notes, an adult Bushymouth catfish is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 200 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Bushymouth catfish moderate. The temperament line is territorial. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Ancistrus dolichopterus, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/ancistrus-dolichopterus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Ancistrus dolichopterus on FishBase.",
        url: "https://www.fishbase.se/summary/Ancistrus-dolichopterus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 26–30°C (79–86°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–10 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 200 mm SL. FishBase lists 14.5 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Bushymouth catfish, the common name printed in the FishBase title."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "giant-kuhli-loach",
    commonName: "Giant kuhli loach",
    scientificName: "Pangio myersi",
    aliases: [
      "giant kuhli loach",
      "pangio myersi"
    ],
    family: "Cobitidae",
    origin: "FishBase: Asia: Mekong basin and southeastern Thailand.",
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
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 10 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Giant kuhli loach at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Giant kuhli loach easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pangio myersi (Giant kuhli loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pangio-myersi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pangio myersi on FishBase.",
        url: "https://www.fishbase.se/summary/Pangio-myersi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "bengal-loach",
    commonName: "Bengal loach",
    scientificName: "Botia dario",
    aliases: [
      "bengal loach",
      "botia dario"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: India and Bangladesh.",
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
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 130,
    adultSizeIn: 5,
    adultSizeNote: "130 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 15.1 cm TL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 130 mm and with animal prey in the Seriously Fish diet notes, an adult Bengal loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 130 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Bengal loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Botia dario (Bengal loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/botia-dario/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Botia dario on FishBase.",
        url: "https://www.fishbase.se/summary/Botia-dario.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 130 mm SL. FishBase lists 15.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "zipper-loach",
    commonName: "Zipper loach",
    scientificName: "Paracanthocobitis botia",
    aliases: [
      "acanthocobitis botia",
      "paracanthocobitis botia",
      "zipper loach"
    ],
    family: "Nemacheilidae",
    origin: "FishBase: Asia: Indus basin in Pakistan to the Mae Khlong basin in Thailand through Ganges, Chindwin, Irrawaddy, Sitang and Salween basins. Recorded also from Yunnan, China.",
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
      min: 5,
      max: 12
    },
    adultSizeMm: 152,
    adultSizeIn: 6,
    adultSizeNote: "152 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 14.9 cm TL.",
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
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 152 mm and with animal prey in the Seriously Fish diet notes, an adult Zipper loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 152 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Zipper loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Paracanthocobitis botia (Zipper loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/acanthocobitis-botia/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Paracanthocobitis botia on FishBase.",
        url: "https://www.fishbase.se/summary/acanthocobitis-botia.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–26°C (70–79°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 152 mm SL. FishBase lists 14.9 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "sumo-loach",
    commonName: "Sumo loach",
    scientificName: "Schistura balteata",
    aliases: [
      "schistura balteata",
      "sumo loach"
    ],
    family: "Nemacheilidae",
    origin: "FishBase: Asia: Myanmar.",
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
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 5.4 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Sumo loach at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Sumo loach moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Schistura balteata (Sumo loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/schistura-balteata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Schistura balteata on FishBase.",
        url: "https://www.fishbase.se/summary/Schistura-balteata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 5.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "golden-zebra-loach",
    commonName: "Golden zebra loach",
    scientificName: "Sinibotia pulchra",
    aliases: [
      "golden zebra loach",
      "sinibotia pulchra"
    ],
    family: "Botiidae",
    origin: "FishBase: Asia: China and Viet Nam.",
    tempC: {
      min: 20,
      max: 25.5
    },
    tempF: {
      min: 68,
      max: 78
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
    adultSizeMm: 110,
    adultSizeIn: 4,
    adultSizeNote: "110 mm SL on Seriously Fish, which also prints 4.0 in. FishBase lists 10 cm TL.",
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
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Golden zebra loach at 110 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 110 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Golden zebra loach moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Sinibotia pulchra (Golden zebra loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/sinibotia-pulchra/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Sinibotia pulchra on FishBase.",
        url: "https://www.fishbase.se/summary/Sinibotia-pulchra.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25.5°C (68–78°F). FishBase lists 22–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 110 mm SL. FishBase lists 10 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "vietnamese-giraffe-loach",
    commonName: "Vietnamese giraffe loach",
    scientificName: "Annamia normani",
    aliases: [
      "annamia normani",
      "vietnamese giraffe loach"
    ],
    family: "Gastromyzontidae",
    origin: "FishBase: Asia: Mekong basin.",
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
      min: 1,
      max: 10
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 7.8 cm SL.",
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
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Vietnamese giraffe loach at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Vietnamese giraffe loach moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Annamia normani (Vietnamese giraffe loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/annamia-normani/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Annamia normani on FishBase.",
        url: "https://www.fishbase.se/summary/Annamia-normani.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 7.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "saddle-back-loach",
    commonName: "Saddle-back loach",
    scientificName: "Homaloptera orthogoniata",
    aliases: [
      "homaloptera orthogoniata",
      "saddle-back loach"
    ],
    family: "Balitoridae",
    origin: "FishBase: Asia: Thailand and Laos.",
    tempC: {
      min: 20,
      max: 25.5
    },
    tempF: {
      min: 68,
      max: 78
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
    adultSizeMm: 95,
    adultSizeIn: 3.7,
    adultSizeNote: "95 mm SL on Seriously Fish, which also prints 3.7 in. FishBase lists 13 cm SL.",
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
    waterLayer: "bottom",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 95 mm and with animal prey in the Seriously Fish diet notes, an adult Saddle-back loach is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 95 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Saddle-back loach moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Homaloptera orthogoniata (Saddle-back loach), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/homaloptera-orthogoniata/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Homaloptera orthogoniata on FishBase.",
        url: "https://www.fishbase.se/summary/Homaloptera-orthogoniata.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25.5°C (68–78°F). FishBase lists 20–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 95 mm SL. FishBase lists 13 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "blind-cave-tetra",
    commonName: "Blind cave tetra",
    scientificName: "Astyanax mexicanus",
    aliases: [
      "astyanax mexicanus",
      "blind cave tetra",
      "mexican tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: North America: Mexico.",
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
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 25
    },
    adultSizeMm: 95,
    adultSizeIn: 3.7,
    adultSizeNote: "95 mm SL on Seriously Fish, which also prints 3.7 in. FishBase lists 12 cm TL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Blind cave tetra at 95 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 95 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Blind cave tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Astyanax mexicanus (Blind cave tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/astyanax-mexicanus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Astyanax mexicanus on FishBase.",
        url: "https://www.fishbase.se/summary/Astyanax-mexicanus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 95 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "peruvian-tetra",
    commonName: "Peruvian tetra",
    scientificName: "Hyphessobrycon peruvianus",
    aliases: [
      "hyphessobrycon peruvianus",
      "peruvian tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Upper Amazon River basin.",
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
      max: 7
    },
    hardnessDGH: {
      min: 2,
      max: 10
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.9 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Peruvian tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Peruvian tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon peruvianus (Peruvian tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-peruvianus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon peruvianus on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-peruvianus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–7. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–10 dGH. FishBase lists dH 5–10. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "lesser-bleeding-heart-tetra",
    commonName: "Lesser bleeding heart tetra",
    scientificName: "Megalamphodus socolofi",
    aliases: [
      "hyphessobrycon socolofi",
      "lesser bleeding heart tetra",
      "megalamphodus socolofi",
      "spotfin tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Negro River basin.",
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
      max: 10
    },
    adultSizeMm: 56,
    adultSizeIn: 2.2,
    adultSizeNote: "56 mm SL on Seriously Fish, which also prints 2.2 in. FishBase lists 5.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Lesser bleeding heart tetra at 56 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 56 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Lesser bleeding heart tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Megalamphodus socolofi (Lesser bleeding heart tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-socolofi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Megalamphodus socolofi on FishBase.",
        url: "https://www.fishbase.se/summary/Megalamphodus-socolofi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–28°C (72–82°F). FishBase lists 23–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flag-tetra",
    commonName: "Flag tetra",
    scientificName: "Hyphessobrycon heterorhabdus",
    aliases: [
      "flag tetra",
      "hyphessobrycon heterorhabdus"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: lower Amazon River basin.",
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
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 3.6 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Flag tetra at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Flag tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon heterorhabdus (Flag tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-heterorhabdus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon heterorhabdus on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-heterorhabdus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 3.6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flame-back-bleeding-heart-tetra",
    commonName: "Flame-back bleeding heart tetra",
    scientificName: "Hyphessobrycon pyrrhonotus",
    aliases: [
      "flame-back bleeding heart tetra",
      "hyphessobrycon pyrrhonotus"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Negro River basin.",
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
      max: 8
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Flame-back bleeding heart tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Flame-back bleeding heart tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hyphessobrycon pyrrhonotus (Flame-back bleeding heart tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hyphessobrycon-pyrrhonotus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hyphessobrycon pyrrhonotus on FishBase.",
        url: "https://www.fishbase.se/summary/Hyphessobrycon-pyrrhonotus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–27°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "january-tetra",
    commonName: "January tetra",
    scientificName: "Hemigrammus hyanuary",
    aliases: [
      "hemigrammus hyanuary",
      "january tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Amazon River basin.",
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
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 4.4 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult January tetra at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates January tetra moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hemigrammus hyanuary (January tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-hyanuary/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hemigrammus hyanuary on FishBase.",
        url: "https://www.fishbase.se/summary/Hemigrammus-hyanuary.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 6–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 4.4 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "pretty-tetra",
    commonName: "Pretty tetra",
    scientificName: "Holopristis pulchra",
    aliases: [
      "garnet tetra",
      "hemigrammus pulcher",
      "holopristis pulchra",
      "pretty tetra"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: upper Amazon River basin.",
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
      min: 5.5,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 3.3 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Pretty tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Pretty tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Holopristis pulchra (Pretty tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-pulcher/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Holopristis pulchra on FishBase.",
        url: "https://www.fishbase.se/summary/Holopristis-pulchra.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists 1–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 45 mm SL. FishBase lists 3.3 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "broken-line-tetra",
    commonName: "Broken-line tetra",
    scientificName: "Hemigrammus ulreyi",
    aliases: [
      "broken-line tetra",
      "hemigrammus ulreyi"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Paraguay River basin.",
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
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 4.4 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Broken-line tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Broken-line tetra moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Hemigrammus ulreyi (Broken-line tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/hemigrammus-ulreyi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Hemigrammus ulreyi on FishBase.",
        url: "https://www.fishbase.se/summary/Hemigrammus-ulreyi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 4.4 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "one-lined-pencilfish",
    commonName: "One-lined pencilfish",
    scientificName: "Nannostomus unifasciatus",
    aliases: [
      "nannostomus unifasciatus",
      "one-lined pencilfish",
      "oneline pencilfish"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Parts of the Amazon basin of Bolivia, Brazil, and probably Colombia; the upper Orinoco basin of Venezuela, and Guyana.",
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
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 10
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.8 cm SL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult One-lined pencilfish at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates One-lined pencilfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus unifasciatus (One-lined pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-unifasciatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus unifasciatus on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-unifasciatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 23–28°C (73–82°F). FishBase lists 25–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5.5–7. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "greenstripe-pencilfish",
    commonName: "Greenstripe pencilfish",
    scientificName: "Nannostomus marilynae",
    aliases: [
      "greenstripe pencilfish",
      "nannostomus marilynae"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Negro and Vichada River basins.",
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
      max: 6.5
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Greenstripe pencilfish at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Greenstripe pencilfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Nannostomus marilynae (Greenstripe pencilfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/nannostomus-marilynae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Nannostomus marilynae on FishBase.",
        url: "https://www.fishbase.se/summary/Nannostomus-marilynae.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–6.5. FishBase lists pH 5.5–6.5. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "glass-tetra",
    commonName: "Glass tetra",
    scientificName: "Bario oligolepis",
    aliases: [
      "bario oligolepis",
      "glass tetra",
      "moenkhausia oligolepis"
    ],
    family: "Acestrorhamphidae",
    origin: "FishBase: South America: Venezuela, the Guianas and the Amazon River basin.",
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
      max: 7.2
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 10 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Glass tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Glass tetra easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Bario oligolepis (Glass tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/moenkhausia-oligolepis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Bario oligolepis on FishBase.",
        url: "https://www.fishbase.se/summary/Bario-oligolepis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 10 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "blue-tetra",
    commonName: "Blue tetra",
    scientificName: "Knodus borki",
    aliases: [
      "blue tetra",
      "knodus borki"
    ],
    family: "Stevardiidae",
    origin: "FishBase: South America: Iquitos, Peru.",
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
      min: 5,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in.",
    minTank: {
      gallons: 23,
      liters: 86,
      lengthCm: 75,
      lengthIn: null,
      stated: "base 75 × 38 cm, about 86 litres / 23 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Blue tetra at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Blue tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Knodus borki (Blue tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/knodus-borki/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Knodus borki on FishBase.",
        url: "https://www.fishbase.se/summary/Knodus-borki.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "glass-bloodfin-tetra",
    commonName: "Glass bloodfin tetra",
    scientificName: "Prionobrama filigera",
    aliases: [
      "glass bloodfin",
      "glass bloodfin tetra",
      "prionobrama filigera"
    ],
    family: "Characidae",
    origin: "FishBase: South America: Amazon River basin.",
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
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 0,
      max: 30
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6 cm TL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Glass bloodfin tetra at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Glass bloodfin tetra moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Prionobrama filigera (Glass bloodfin tetra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/prionobrama-filigera/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Prionobrama filigera on FishBase.",
        url: "https://www.fishbase.se/summary/Prionobrama-filigera.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 60 mm SL. FishBase lists 6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "blackwing-hatchetfish",
    commonName: "Blackwing hatchetfish",
    scientificName: "Carnegiella marthae",
    aliases: [
      "blackwing hatchetfish",
      "carnegiella marthae"
    ],
    family: "Gasteropelecidae",
    origin: "FishBase: South America: Negro and upper Orinoco River basins.",
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
    adultSizeMm: 28,
    adultSizeIn: 1.1,
    adultSizeNote: "28 mm SL on Seriously Fish, which also prints 1.1 in. FishBase lists 2.9 cm SL.",
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
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Blackwing hatchetfish at 28 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 28 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Blackwing hatchetfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Carnegiella marthae (Blackwing hatchetfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/carnegiella-marthae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Carnegiella marthae on FishBase.",
        url: "https://www.fishbase.se/summary/Carnegiella-marthae.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5.5–6.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "pygmy-hatchetfish",
    commonName: "Pygmy hatchetfish",
    scientificName: "Carnegiella myersi",
    aliases: [
      "carnegiella myersi",
      "pygmy hatchetfish"
    ],
    family: "Gasteropelecidae",
    origin: "FishBase: South America: Amazon River basin in Peru.",
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
      min: 4,
      max: 7
    },
    hardnessDGH: {
      min: 1,
      max: 6
    },
    adultSizeMm: 25,
    adultSizeIn: 1,
    adultSizeNote: "25 mm SL on Seriously Fish, which also prints 1.0 in. FishBase lists 2.2 cm SL.",
    minTank: {
      gallons: 12,
      liters: 45,
      lengthCm: 50,
      lengthIn: null,
      stated: "base 50 × 30 cm, about 45 litres / 12 US gallons."
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Pygmy hatchetfish at 25 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 25 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Pygmy hatchetfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Carnegiella myersi (Pygmy hatchetfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/carnegiella-myersi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Carnegiella myersi on FishBase.",
        url: "https://www.fishbase.se/summary/Carnegiella-myersi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5.5–6.5. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spotfin-hatchetfish",
    commonName: "Spotfin hatchetfish",
    scientificName: "Thoracocharax stellatus",
    aliases: [
      "spotfin hatchetfish",
      "thoracocharax stellatus"
    ],
    family: "Gasteropelecidae",
    origin: "FishBase: South America: Paraná, Amazon, and Orinoco River basins.",
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
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 6.7 cm SL.",
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
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Spotfin hatchetfish at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spotfin hatchetfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Thoracocharax stellatus (Spotfin hatchetfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/thoracocharax-stellatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Thoracocharax stellatus on FishBase.",
        url: "https://www.fishbase.se/summary/Thoracocharax-stellatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spotted-headstander",
    commonName: "Spotted headstander",
    scientificName: "Chilodus punctatus",
    aliases: [
      "chilodus punctatus",
      "spotted headstander"
    ],
    family: "Chilodidae",
    origin: "FishBase: South America: Amazon River basin, Apeú River, Pará State, Guyana, Suriname, and western Orinoco River basin.",
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
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 18 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Spotted headstander at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spotted headstander moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Chilodus punctatus (Spotted headstander), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/chilodus-punctatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Chilodus punctatus on FishBase.",
        url: "https://www.fishbase.se/summary/Chilodus-punctatus.html",
        accessed: "2026-11-07",
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
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 18 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "striped-headstander",
    commonName: "Striped headstander",
    scientificName: "Anostomus anostomus",
    aliases: [
      "anostomus anostomus",
      "striped headstander"
    ],
    family: "Anostomidae",
    origin: "FishBase: South America: Amazon and Orinoco River basins.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 18
    },
    adultSizeMm: 200,
    adultSizeIn: 8,
    adultSizeNote: "200 mm SL on Seriously Fish, which also prints 8.0 in. FishBase lists 16 cm TL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 200 mm and with animal prey in the Seriously Fish diet notes, an adult Striped headstander is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 200 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Striped headstander easy. The temperament line is territorial. The social line is fine alone.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Anostomus anostomus (Striped headstander), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/anostomus-anostomus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Anostomus anostomus on FishBase.",
        url: "https://www.fishbase.se/summary/Anostomus-anostomus.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–18 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 200 mm SL. FishBase lists 16 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "gold-striped-headstander",
    commonName: "Gold-Striped headstander",
    scientificName: "Anostomus ternetzi",
    aliases: [
      "anostomus ternetzi",
      "gold-striped headstander"
    ],
    family: "Anostomidae",
    origin: "FishBase: South America: Orinoco, Araguaia and Amazon River basins; coastal rivers of Guianas.",
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
      min: 5.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 125,
    adultSizeIn: 5,
    adultSizeNote: "125 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 12 cm TL.",
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
    minGroup: 6,
    minGroupNote: "Seriously Fish's behaviour section says at least 6. The checker uses 6.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for Gold-Striped headstander.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Gold-Striped headstander easy. The temperament line is territorial. The social line is fine alone.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Anostomus ternetzi (Gold-Striped headstander), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/anostomus-ternetzi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Anostomus ternetzi on FishBase.",
        url: "https://www.fishbase.se/summary/Anostomus-ternetzi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–28°C (68–82°F). FishBase lists 24–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists dH 8–20. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 125 mm SL. FishBase lists 12 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "redhook",
    commonName: "Redhook myleus",
    scientificName: "Myloplus rubripinnis",
    aliases: [
      "myloplus rubripinnis",
      "redhook",
      "redhook myleus"
    ],
    family: "Serrasalmidae",
    origin: "FishBase: South America: Amazon and Orinoco River basins; north and eastern Guiana Shield rivers.",
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
      min: 6,
      max: 7
    },
    hardnessDGH: {
      min: 0,
      max: 10
    },
    adultSizeMm: 250,
    adultSizeIn: 10,
    adultSizeNote: "250 mm SL on Seriously Fish, which also prints 10.0 in. FishBase lists 41.5 cm TL.",
    minTank: {
      gallons: 69,
      liters: 260,
      lengthCm: 180,
      lengthIn: null,
      stated: "base 180 × 38 cm, about 260 litres / 69 US gallons."
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
    diet: "At 250 mm and with animal prey in the Seriously Fish diet notes, an adult Redhook myleus is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 250 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "Seriously Fish temperament line: eats smaller fish. Seriously Fish rates Redhook myleus not given a beginner/easy/moderate label. The temperament line is eats smaller fish. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Myloplus rubripinnis (Redhook), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/myloplus-rubripinnis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Myloplus rubripinnis on FishBase.",
        url: "https://www.fishbase.se/summary/Myloplus-rubripinnis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7. FishBase lists pH 5–7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 250 mm SL. FishBase lists 41.5 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "ansorges-neolebias",
    commonName: "Ansorge's neolebias",
    scientificName: "Neolebias ansorgii",
    aliases: [
      "ansorge's neolebias",
      "neolebias ansorgii"
    ],
    family: "Distichodontidae",
    origin: "FishBase: Africa: known from the Niger delta to the lower portions of the Congo River.",
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
      min: 5,
      max: 6
    },
    hardnessDGH: {
      min: 5,
      max: 12
    },
    adultSizeMm: 35,
    adultSizeIn: 1.4,
    adultSizeNote: "35 mm SL on Seriously Fish, which also prints 1.4 in. FishBase lists 2.6 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Ansorge's neolebias at 35 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 35 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Ansorge's neolebias moderate. The temperament line is unknown. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Neolebias ansorgii (Ansorge's neolebias), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/neolebias-ansorgii/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Neolebias ansorgii on FishBase.",
        url: "https://www.fishbase.se/summary/Neolebias-ansorgii.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 35 mm SL. FishBase lists 2.6 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "spotted-tetra",
    commonName: "Spotted tetra",
    scientificName: "Copella nattereri",
    aliases: [
      "copella nattereri",
      "spotted tetra"
    ],
    family: "Lebiasinidae",
    origin: "FishBase: South America: Colombia (Rio Amazonas at Letícia); Brazil (rio Amazonas from mouth of rio Negro to mouth of rio Tapajós); Venezuela (upper and middle rio Orinoco basin); rio Negro basin (Brazil, Venezuela, and Guyana).",
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
      max: 5
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm SL on Seriously Fish, which also prints 1.8 in. FishBase lists 4.5 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Spotted tetra at 45 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 45 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Spotted tetra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Copella nattereri, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/copella-nattereri/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Copella nattereri on FishBase.",
        url: "https://www.fishbase.se/summary/Copella-nattereri.html",
        accessed: "2026-11-07",
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
        note: "Seriously Fish lists pH 4–7. FishBase lists pH 5.8–7.5. The checker uses Seriously Fish."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Spotted tetra, the common name printed in the FishBase title."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "yoma-danio",
    commonName: "Yoma danio",
    scientificName: "Danio feegradei",
    aliases: [
      "danio feegradei",
      "yoma danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Rakhine Yoma in Myanmar.",
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
      min: 6.5,
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm SL on Seriously Fish, which also prints 2.4 in. FishBase lists 6.8 cm SL.",
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
    minGroup: 10,
    minGroupNote: "Seriously Fish's behaviour section says at least 10. The checker uses 10.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Yoma danio at 60 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 60 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Yoma danio moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio feegradei (Yoma danio), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/danio-feegradei/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Danio feegradei on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-feegradei.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "giant-danio-aequipinnatus",
    commonName: "Giant danio (Devario aequipinnatus)",
    scientificName: "Devario aequipinnatus",
    aliases: [
      "devario aequipinnatus",
      "giant danio"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: India and Nepal to Indochina.",
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
      min: 2,
      max: 15
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm SL on Seriously Fish, which also prints 3.0 in. FishBase lists 15 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Giant danio at 75 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 75 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Giant danio moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Devario aequipinnatus, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/devario-aequipinnatus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Devario aequipinnatus on FishBase.",
        url: "https://www.fishbase.se/summary/Devario-aequipinnatus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 16–26°C (61–79°F). FishBase lists 22–24°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–15 dGH. FishBase lists dH 5–19. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 75 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Group size",
        note: "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Giant danio, the common name printed in the FishBase title."
      },
      {
        field: "Common name",
        note: "FishBase prints “Giant danio” for this species and for already published. The page title uses Giant danio (Devario aequipinnatus) so the two records are not the same page. The FishBase common name is still Giant danio."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flying-barb",
    commonName: "Flying barb",
    scientificName: "Esomus danrica",
    aliases: [
      "esomus danrica",
      "flying barb"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: Pakistan, India, Nepal, Bangladesh.",
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
      min: 1,
      max: 12
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 13 cm TL.",
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
    flow: "still",
    flowNote: "Seriously Fish's maintenance notes describe still or sluggish water.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Flying barb at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section assesses this fish as aggressive or a fin-nipper. Seriously Fish rates Flying barb moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Esomus danrica (Flying barb), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/esomus-danrica/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Esomus danrica on FishBase.",
        url: "https://www.fishbase.se/summary/Esomus-danrica.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 13 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Water",
        note: "FishBase marks this species both freshwater and brackish. The checker uses the Seriously Fish freshwater aquarium range and does not add a salinity rule."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "red-dwarf-rasbora",
    commonName: "Red dwarf rasbora",
    scientificName: "Microrasbora rubescens",
    aliases: [
      "microrasbora rubescens",
      "red dwarf rasbora"
    ],
    family: "Danionidae",
    origin: "FishBase: Asia: endemic to Lake Inle, Myanmar.",
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
      max: 8
    },
    hardnessDGH: {
      min: 3,
      max: 15
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Red dwarf rasbora at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Red dwarf rasbora easy. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Microrasbora rubescens (Red dwarf rasbora), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/microrasbora-rubescens/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Microrasbora rubescens on FishBase.",
        url: "https://www.fishbase.se/summary/Microrasbora-rubescens.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–24°C (68–75°F). FishBase lists 21–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "jae-barb",
    commonName: "Jae barb",
    scientificName: "Enteromius jae",
    aliases: [
      "barbus jae",
      "enteromius jae",
      "jae barb"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Africa: various rivers from the Wouri in Cameroon to the Kouilou-Niari in Republic of Congo.",
    tempC: {
      min: 17,
      max: 24
    },
    tempF: {
      min: 63,
      max: 75
    },
    tempFConverted: false,
    pH: {
      min: 5,
      max: 6.5
    },
    hardnessDGH: {
      min: 1,
      max: 5
    },
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "40 mm SL on Seriously Fish, which also prints 1.6 in. FishBase lists 3.8 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Jae barb at 40 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 40 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Jae barb moderate. The temperament line is unknown. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Enteromius jae, Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/barbus-jae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Enteromius jae on FishBase.",
        url: "https://www.fishbase.se/summary/Enteromius-jae.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 17–24°C (63–75°F). FishBase lists 21–25°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5–6.5. FishBase lists pH 5.5–6. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 40 mm SL. FishBase lists 3.8 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      },
      {
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Jae barb, the common name printed in the FishBase title."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "daisys-ricefish",
    commonName: "Daisy's ricefish",
    scientificName: "Oryzias woworae",
    aliases: [
      "daisy's ricefish",
      "oryzias woworae"
    ],
    family: "Adrianichthyidae",
    origin: "FishBase: Asia: Indonesia. The single known collection of.",
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
      min: 6,
      max: 7.5
    },
    hardnessDGH: {
      min: 5,
      max: 15
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm SL on Seriously Fish, which also prints 1.2 in. FishBase lists 2.8 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Daisy's ricefish at 30 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 30 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Daisy's ricefish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Oryzias woworae (Daisy's ricefish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/oryzias-woworae/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Oryzias woworae on FishBase.",
        url: "https://www.fishbase.se/summary/Oryzias-woworae.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "western-rainbowfish",
    commonName: "Western rainbowfish",
    scientificName: "Melanotaenia australis",
    aliases: [
      "melanotaenia australis",
      "western rainbowfish"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Oceania: widespread in northwestern Australia; throughout the Pilbara region of Western Australia between the Ashburton and DeGrey Rivers and in the Kimberley region in the extreme northern part of Western Australia between the Fitzroy River and the Northern Territory border. Also in the northwestern sector of the Timor Sea drainage of the Northern Territory as far as the Adelaide River just east of Darwin.",
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
      min: 5,
      max: 20
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 11 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Western rainbowfish at 120 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 120 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Western rainbowfish easy. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia australis (Western rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-australis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia australis on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-australis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–27°C (72–81°F). FishBase lists 22–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "lake-tebera-rainbowfish",
    commonName: "Lake tebera rainbowfish",
    scientificName: "Melanotaenia herbertaxelrodi",
    aliases: [
      "lake tebera rainbowfish",
      "melanotaenia herbertaxelrodi"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Oceania: known mainly from the Lake Tebera basin in the Southern Highlands of Papua New Guinea. A single specimen has been collected at Karamui, 38 km north of the lake.",
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
      min: 10,
      max: 15
    },
    adultSizeMm: 90,
    adultSizeIn: 3.5,
    adultSizeNote: "90 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 15 cm TL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Lake tebera rainbowfish at 90 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 90 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Lake tebera rainbowfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Melanotaenia herbertaxelrodi (Lake tebera rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/melanotaenia-herbertaxelrodi/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Melanotaenia herbertaxelrodi on FishBase.",
        url: "https://www.fishbase.se/summary/Melanotaenia-herbertaxelrodi.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "pH",
        note: "Seriously Fish lists pH 7–8. FishBase lists pH 7.5–7.8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 90 mm SL. FishBase lists 15 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "lake-wanam-rainbowfish",
    commonName: "Lake wanam rainbowfish",
    scientificName: "Glossolepis wanamensis",
    aliases: [
      "glossolepis wanamensis",
      "lake wanam rainbowfish"
    ],
    family: "Melanotaeniidae",
    origin: "FishBase: Oceania: known only from Lake Wanam, a roughly circular lake situated on a small plateau 24 km west of Lae, Papua New Guinea.",
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
      min: 7,
      max: 8
    },
    hardnessDGH: {
      min: 10,
      max: 20
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 9 cm SL.",
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
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Lake wanam rainbowfish at 100 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 100 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Lake wanam rainbowfish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Glossolepis wanamensis (Lake wanam rainbowfish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/glossolepis-wanamensis/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Glossolepis wanamensis on FishBase.",
        url: "https://www.fishbase.se/summary/Glossolepis-wanamensis.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "pacific-blue-eye",
    commonName: "Pacific blue-eye",
    scientificName: "Pseudomugil signifer",
    aliases: [
      "pacific blue-eye",
      "pseudomugil signifer"
    ],
    family: "Pseudomugilidae",
    origin: "FishBase: Oceania: endemic to Australia.",
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
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 7 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Pacific blue-eye at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish did not print a temperament line. The behaviour section's opening assessment of this fish is peaceful or shy, not aggressive. Seriously Fish rates Pacific blue-eye moderate. The temperament line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Pseudomugil signifer (Pacific blue-eye), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/pseudomugil-signifer/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Pseudomugil signifer on FishBase.",
        url: "https://www.fishbase.se/summary/Pseudomugil-signifer.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 23–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 5–15 dGH. FishBase lists dH 12–15. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Water",
        note: "FishBase marks this species both freshwater and brackish. The checker uses the Seriously Fish freshwater aquarium range and does not add a salinity rule."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "red-striped-lyretail",
    commonName: "Red-Striped lyretail",
    scientificName: "Aphyosemion striatum",
    aliases: [
      "aphyosemion striatum",
      "red-striped lyretail"
    ],
    family: "Nothobranchiidae",
    origin: "FishBase: Africa: lower Mitémele river drainage in southern Equatorial Guinea and the Mbei, Komo, Gabon, Abanga and lower Ogowe river drainages in northwestern Gabon.",
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
      min: 3,
      max: 12
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm SL on Seriously Fish, which also prints 2.0 in. FishBase lists 6 cm TL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Red-Striped lyretail at 50 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 50 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Red-Striped lyretail beginner. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Aphyosemion striatum (Red-Striped lyretail), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/aphyosemion-striatum/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Aphyosemion striatum on FishBase.",
        url: "https://www.fishbase.se/summary/Aphyosemion-striatum.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 21–23°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6.5–7.5. FishBase lists pH 6–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 3–12 dGH. FishBase lists dH 5–12. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 50 mm SL. FishBase lists 6 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "brunei-beauty",
    commonName: "Brunei beauty",
    scientificName: "Betta macrostoma",
    aliases: [
      "betta macrostoma",
      "brunei beauty",
      "spotfin betta"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Borneo.",
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
      min: 4,
      max: 6
    },
    hardnessDGH: {
      min: 0,
      max: 5
    },
    adultSizeMm: 100,
    adultSizeIn: 3.9,
    adultSizeNote: "100 mm SL on Seriously Fish, which also prints 3.9 in. FishBase lists 6.7 cm SL.",
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
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "At 100 mm and with animal prey in the Seriously Fish diet notes, an adult Brunei beauty is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 100 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: needs a tank of its own. Seriously Fish rates Brunei beauty moderate. The temperament line is needs a tank of its own. The social line is best in a pair.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Betta macrostoma (Brunei beauty), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/betta-macrostoma/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Betta macrostoma on FishBase.",
        url: "https://www.fishbase.se/summary/Betta-macrostoma.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–25°C (68–77°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 4–6. FishBase lists pH 4.4–5.7. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 100 mm SL. FishBase lists 6.7 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "black-paradise-fish",
    commonName: "Black paradise fish",
    scientificName: "Macropodus spechti",
    aliases: [
      "black paradise fish",
      "macropodus spechti"
    ],
    family: "Osphronemidae",
    origin: "FishBase: Asia: Viet Nam.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 80,
    adultSizeIn: 3.1,
    adultSizeNote: "80 mm SL on Seriously Fish, which also prints 3.1 in. FishBase lists 5.8 cm SL.",
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
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric minimum group is stated. The field is blank on purpose.",
    waterLayer: "top",
    flow: "gentle",
    flowNote: "Seriously Fish's maintenance notes do not demand a strong current.",
    diet: "Seriously Fish's diet notes include small animal food. An adult Black paradise fish at 80 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 80 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Black paradise fish easy. The temperament line is peaceful. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Macropodus spechti (Black paradise fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/macropodus-spechti/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Macropodus spechti on FishBase.",
        url: "https://www.fishbase.se/summary/Macropodus-spechti.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–30°C (68–86°F). FishBase lists 20–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–8. FishBase lists pH 6.5–7.8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 80 mm SL. FishBase lists 5.8 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "ornate-ctenopoma",
    commonName: "Ornate ctenopoma",
    scientificName: "Microctenopoma ansorgii",
    aliases: [
      "microctenopoma ansorgii",
      "ornate ctenopoma"
    ],
    family: "Anabantidae",
    origin: "FishBase: Africa: Chiloango River, and widespread in the central Congo basin; possibly also in the Nyong in Cameroon.",
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
      min: 5,
      max: 20
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm SL on Seriously Fish, which also prints 2.8 in. FishBase lists 5.4 cm SL.",
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
    diet: "Seriously Fish's diet notes include small animal food. An adult Ornate ctenopoma at 70 mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet notes include small animal food. At 70 mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: fights its own kind. Seriously Fish rates Ornate ctenopoma moderate. The temperament line is fights its own kind. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Microctenopoma ansorgii (Ornate ctenopoma), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/microctenopoma-ansorgii/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Microctenopoma ansorgii on FishBase.",
        url: "https://www.fishbase.se/summary/Microctenopoma-ansorgii.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–27°C (68–81°F). FishBase lists 26–28°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 5.5–7.5. FishBase lists pH 6–8. The checker uses Seriously Fish."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 70 mm SL. FishBase lists 5.4 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "doctor-fish",
    commonName: "Doctor fish",
    scientificName: "Garra rufa",
    aliases: [
      "doctor fish",
      "garra rufa",
      "red garra"
    ],
    family: "Cyprinidae",
    origin: "FishBase: a locality the FishBase summary does not state in one line.",
    tempC: {
      min: 14,
      max: 20
    },
    tempF: {
      min: 57,
      max: 68
    },
    tempFConverted: false,
    pH: {
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 1,
      max: 15
    },
    adultSizeMm: 120,
    adultSizeIn: 5,
    adultSizeNote: "120 mm SL on Seriously Fish, which also prints 5.0 in. FishBase lists 14.1 cm TL.",
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
    minGroup: 4,
    minGroupNote: "Seriously Fish's behaviour section says at least 4. The checker uses 4.",
    waterLayer: "mid",
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "Seriously Fish says Garra rufa grazes biofilm and is not an exclusive herbivore. It should also be offered small meaty foods and chopped prawn. Shrimplets are scored as food. The page does not say it hunts an adult cherry shrimp.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The stated foods are biofilm and small prepared or frozen items. Shrimplets are at risk. Adult cherry shrimp are not scored as prey from length alone.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Doctor fish moderate. The temperament line is peaceful. The social line is needs to be in a group.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Garra rufa (Doctor fish), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/garra-rufa/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Garra rufa on FishBase.",
        url: "https://www.fishbase.se/summary/Garra-rufa.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish prints 14–20°C and 57–68°F together, and says this is strictly not a tropical species and a heater is usually unnecessary. That is the maintenance range the checker uses. FishBase lists 15–28°C, a wider environmental band, and it is not averaged in as a warmer target."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 120 mm SL. FishBase lists 14.1 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "panda-garra",
    commonName: "Panda garra",
    scientificName: "Garra flavatra",
    aliases: [
      "garra flavatra",
      "panda garra"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: Myanmar.",
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
      max: 7.5
    },
    hardnessDGH: {
      min: 2,
      max: 12
    },
    adultSizeMm: 90,
    adultSizeIn: 3.5,
    adultSizeNote: "90 mm SL on Seriously Fish, which also prints 3.5 in. FishBase lists 6.2 cm SL.",
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
    flow: "current",
    flowNote: "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
    diet: "At 90 mm and with animal prey in the Seriously Fish diet notes, an adult Panda garra is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 90 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: peaceful. Seriously Fish rates Panda garra moderate. The temperament line is peaceful.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Garra flavatra (Panda garra), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/garra-flavatra/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Garra flavatra on FishBase.",
        url: "https://www.fishbase.se/summary/Garra-flavatra.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 90 mm SL. FishBase lists 6.2 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "flying-fox",
    commonName: "Flying fox",
    scientificName: "Epalzeorhynchos kalopterum",
    aliases: [
      "epalzeorhynchos kalopterum",
      "epalzeorhynchos kalopterus",
      "flying fox"
    ],
    family: "Cyprinidae",
    origin: "FishBase: Asia: lower half of the Malayan/Thailand peninsula, Borneo, Java and Sumatra in Indonesia.",
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
    adultSizeMm: 160,
    adultSizeIn: 6,
    adultSizeNote: "160 mm SL on Seriously Fish, which also prints 6.0 in. FishBase lists 16 cm TL.",
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
    diet: "At 160 mm and with animal prey in the Seriously Fish diet notes, an adult Flying fox is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 160 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: territorial. Seriously Fish rates Flying fox moderate. The temperament line is territorial.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Epalzeorhynchos kalopterum (Flying fox), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/epalzeorhynchos-kalopterus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Epalzeorhynchos kalopterum on FishBase.",
        url: "https://www.fishbase.se/summary/Epalzeorhynchos-kalopterum.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 24–26°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "pH",
        note: "Seriously Fish lists pH 6–7.5. FishBase lists pH 6.5–7. The checker uses Seriously Fish."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 2–12 dGH. FishBase lists dH 5–8. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in."
      },
      {
        field: "Adult size",
        note: "Seriously Fish lists 160 mm SL. FishBase lists 16 cm TL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  },
  {
    slug: "senegal-bichir",
    commonName: "Senegal bichir",
    scientificName: "Polypterus senegalus",
    aliases: [
      "gray bichir",
      "polypterus senegalus",
      "senegal bichir"
    ],
    family: "Polypteridae",
    origin: "FishBase: Africa: subspecies.",
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
      min: 6.2,
      max: 7.8
    },
    hardnessDGH: {
      min: 5,
      max: 20
    },
    adultSizeMm: 500,
    adultSizeIn: 20,
    adultSizeNote: "500 mm SL on Seriously Fish, which also prints 20.0 in. FishBase lists 70 cm SL.",
    minTank: {
      gallons: 143,
      liters: 540,
      lengthCm: 150,
      lengthIn: null,
      stated: "base 150 × 60 cm, about 540 litres / 143 US gallons."
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
    diet: "At 500 mm and with animal prey in the Seriously Fish diet notes, an adult Senegal bichir is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes animal prey, and at 500 mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish temperament line: eats smaller fish. Seriously Fish rates Senegal bichir moderate. The temperament line is eats smaller fish. The social line is unknown.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Polypterus senegalus (Senegal bichir), Seriously Fish.",
        url: "https://www.seriouslyfish.com/species/polypterus-senegalus/",
        accessed: "2026-11-07",
        usedFor: "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour."
      },
      {
        label: "FishBase",
        title: "Polypterus senegalus on FishBase.",
        url: "https://www.fishbase.se/summary/Polypterus-senegalus.html",
        accessed: "2026-11-07",
        usedFor: "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish lists 500 mm SL. FishBase lists 70 cm SL. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-11-07"
  }
] satisfies SpeciesProfile[];
