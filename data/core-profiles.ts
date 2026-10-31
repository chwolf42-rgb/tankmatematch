import type { SpeciesProfile } from "../lib/types";

export const coreProfiles = [
  {
    slug: "betta",
    commonName: "Betta",
    scientificName: "Betta splendens",
    aliases: [
      "siamese fighting fish",
      "betta splendens",
      "fighting fish"
    ],
    family: "Osphronemidae",
    origin: "Central Thailand. Seriously Fish restricts the native range to the Chao Phraya basin region and treats many Mekong records as other species or introductions. FishBase still says 'Mekong basin.'",
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
      max: 15
    },
    adultSizeMm: 70,
    adultSizeIn: 2.8,
    adultSizeNote: "70 mm standard length on Seriously Fish. FishBase lists 6.5 cm total length, which includes the tail and is not the same measurement. Ornamental veil fins make the total length longer still. No source used here gives a total length for a veil-tail strain.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "Seriously Fish: base 45 × 30 cm, about 41 litres / 11 US gallons, for a single male or a pair. The profile rejects tiny aquaria and jars."
    },
    temperament: "semi-aggressive",
    finNipper: false,
    longFinned: true,
    longFinnedNote: "The check assumes the ornamental male sold in shops, which has extended fins. Short-finned plakat males and females are not that shape.",
    attacksLongFins: true,
    schooling: false,
    minGroup: 1,
    minGroupNote: "One fish. Seriously Fish says ornamental strains are usually kept as a single individual, and males and females are housed apart except to breed.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish says strong water movement should be avoided. An air-powered sponge filter turned down is the example they give.",
    diet: "Carnivore. Seriously Fish: aquatic and terrestrial invertebrates in nature; prepared foods plus small live or frozen foods in the aquarium.",
    shrimpRisk: "adults",
    shrimpRiskNote: "Seriously Fish describes a diet of small invertebrates, and an adult betta at 70 mm standard length can take an average adult cherry shrimp (about 25 mm). Shrimp are prey here, not a cleanup crew.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "moderate",
    careLevelNote: "Seriously Fish rates the species Moderate, and the temperament line is 'needs a tank of its own.'",
    incompatibleWith: [
      {
        slug: "guppy",
        verdict: "incompatible",
        summary: "Flowing fins get read as a rival.",
        detail: "Seriously Fish says species with trailing finnage should certainly be avoided with Betta splendens, because a male may view them as rivals. The guppies in shops are the long-finned ornamental form; the short-finned wild fish is rarely sold. Temperature and pH do overlap. The conflict is the fins, and a larger tank does not remove them."
      }
    ],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Betta splendens (Siamese fighting fish), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/betta-splendens/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, temperament, diet, and the trailing-fin warning."
      },
      {
        label: "FishBase",
        title: "Betta splendens on FishBase.",
        url: "https://www.fishbase.se/summary/Betta-splendens.html",
        accessed: "2026-10-30",
        usedFor: "A second temperature, pH, hardness, and length (6.5 cm total length). Distribution wording disagrees with Seriously Fish."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 22–30°C (72–86°F) for ornamental fish and says wild fish likely prefer pH 5–7. FishBase lists 24–30°C. The checker uses the Seriously Fish aquarium range and does not average the two."
      },
      {
        field: "Hardness",
        note: "Seriously Fish lists 1–15 dGH. FishBase lists 5–19 dGH. The checker uses 1–15 dGH."
      },
      {
        field: "Distribution",
        note: "FishBase says Mekong basin. Seriously Fish says records from the Mekong, peninsular Thailand, Laos, Vietnam, and Cambodia refer to other species or introduced populations."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "neon-tetra",
    commonName: "Neon tetra",
    scientificName: "Paracheirodon innesi",
    aliases: [
      "neon",
      "paracheirodon innesi",
      "innes tetra"
    ],
    family: "Characidae",
    origin: "Blackwater and clearwater streams of the western Amazon, in Peru, Colombia, and Brazil. Seriously Fish and FishBase agree on that general region.",
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
      min: 4,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 30,
    adultSizeIn: 1.2,
    adultSizeNote: "30 mm standard length (1.2 in) on Seriously Fish. FishBase lists a maximum of 2.5 cm standard length. The checker uses the larger Seriously Fish figure so space and predation checks are not undersized.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "Seriously Fish: base 60 × 30 cm or larger, about 54 litres / 14 US gallons, for a school."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The ordinary neon is short-finned. A long-finned strain exists; this record is the common fish.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish says a mixed-sex group of at least 8–10. FishBase's aquarium line says groups of 5 or more, the same sentence it repeats for many unrelated species, so the checker uses 8.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Forest-stream fish. Seriously Fish does not ask for a strong current.",
    diet: "Omnivore with a bias toward tiny animal food. Seriously Fish: small invertebrates, crustaceans, and some plant matter. FishBase: worms, small insects, crustaceans, and plant matter.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "Both sources include small crustaceans in the diet. An adult neon is about 30 mm standard length, similar to an average adult cherry shrimp, so adult shrimp are not scored as prey. Newly hatched shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates the species Easy, with the caveat that commercial stock is often weak and that neon tetra disease is a separate problem from columnaris.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Paracheirodon innesi (neon tetra), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/paracheirodon-innesi/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, school size, diet, and the disease notes."
      },
      {
        label: "FishBase",
        title: "Paracheirodon innesi on FishBase.",
        url: "https://www.fishbase.se/summary/Paracheirodon-innesi.html",
        accessed: "2026-10-30",
        usedFor: "A second length, pH, hardness, and temperature. The aquarium-keeping line (groups of 5, tank of 60 cm) is a repeated database default and is not used as the group size."
      }
    ],
    uncertainties: [
      {
        field: "pH and hardness",
        note: "Seriously Fish lists pH 4.0–7.5 and 1–12 dGH, and says captive-bred fish are more adaptable than wild ones. FishBase lists pH 5.0–7.0 and dH 1–2. The checker uses the Seriously Fish aquarium range. The FishBase hardness would make almost every community pairing look impossible, and it is not how the husbandry source describes the fish people actually buy."
      },
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–25°C (70–77°F). FishBase lists 20–26°C. A heater left at 78°F is already above the Seriously Fish range. The checker uses 70–77°F."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "guppy",
    commonName: "Guppy",
    scientificName: "Poecilia reticulata",
    aliases: [
      "poecilia reticulata",
      "millionfish",
      "rainbow fish"
    ],
    family: "Poeciliidae",
    origin: "Northeastern South America and the southern Caribbean, including Venezuela, the Guianas, and Trinidad. Widely introduced elsewhere. Seriously Fish and FishBase agree on that outline.",
    tempC: {
      min: 17,
      max: 28
    },
    tempF: {
      min: 63,
      max: 82
    },
    tempFConverted: false,
    pH: {
      min: 7,
      max: 8.5
    },
    hardnessDGH: {
      min: 8,
      max: 30
    },
    adultSizeMm: 60,
    adultSizeIn: 2.4,
    adultSizeNote: "60 mm standard length on Seriously Fish. FishBase lists females to 6.0 cm standard length, which matches, and males smaller. A common length on FishBase is 2.8 cm total length.",
    minTank: {
      gallons: 11,
      liters: 41,
      lengthCm: 45,
      lengthIn: null,
      stated: "Seriously Fish: base 45 × 30 cm, about 41 litres / 11 US gallons. FishBase repeats a generic 60 cm aquarium line that this site does not treat as a measured minimum."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: true,
    longFinnedNote: "Shop males are the long-finned ornamental form. Seriously Fish says the wild fish, which has shorter fins, is rarely sold. Females are shorter-finned than those males.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No species-specific headcount. Seriously Fish says several females to each male, because males harass. FishBase says 'groups of 5 or more' in a line it repeats across unrelated species, so that number is not used.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish says strong currents should be avoided.",
    diet: "Omnivore in the aquarium. Wild fish are primarily insectivorous according to Seriously Fish. FishBase lists zooplankton, small insects, and detritus.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "FishBase lists zooplankton, small insects, and detritus. That supports a risk to shrimplets. Neither source describes guppies taking adult cherry shrimp, which are 20–40 mm, so adults are not scored as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates the species Easy, and then spends a paragraph on inbred commercial stock that is not hardy. Easy water does not mean every fish from a farm pond is robust.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [
      {
        slug: "bronze-corydoras",
        note: "Seriously Fish's guppy profile names corydoras among the fish that do well with them, alongside other livebearers, rasboras, small loricariids, and tetras. That mention does not override a water-chemistry caution."
      },
      {
        slug: "platy",
        note: "Seriously Fish lists other livebearers as suitable company for guppies. Platies share the hard, alkaline water guppies need."
      }
    ],
    sources: [
      {
        label: "Seriously Fish",
        title: "Poecilia reticulata (guppy), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/poecilia-reticulata/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, the hard-water requirement, finnage, and the tankmate list."
      },
      {
        label: "FishBase",
        title: "Poecilia reticulata on FishBase.",
        url: "https://www.fishbase.se/summary/Poecilia-reticulata.html",
        accessed: "2026-10-30",
        usedFor: "A second length, pH 7–8, dH 9–19, and 18–28°C. Females are the larger sex."
      }
    ],
    uncertainties: [
      {
        field: "pH and hardness",
        note: "Seriously Fish lists pH 7.0–8.5 and 8–30 dGH, and says long-term care should be moderately hard or harder. FishBase lists pH 7–8 and dH 9–19. The checker uses the Seriously Fish range."
      },
      {
        field: "Group size",
        note: "The sex ratio is sourced. A numeric minimum is not. FishBase's '5 or more' is a repeated aquarium-keeping default (Ref. 51539) and is not treated as a count for this species."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "bronze-corydoras",
    commonName: "Bronze corydoras",
    scientificName: "Osteogaster aenea",
    aliases: [
      "corydoras",
      "cory",
      "corydoras aeneus",
      "bronze cory",
      "green cory",
      "osteogaster aenea"
    ],
    family: "Callichthyidae",
    origin: "Described from Trinidad. Seriously Fish says the fish in shops are commercial strains of uncertain identity, and that the huge South American range attached to the old name Corydoras aeneus looks like a species complex.",
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
      min: 6,
      max: 8
    },
    hardnessDGH: {
      min: 2,
      max: 15
    },
    adultSizeMm: 75,
    adultSizeIn: 3,
    adultSizeNote: "75 mm standard length on Seriously Fish. FishBase lists 7.5 cm standard length, the same figure, still under the name Corydoras aeneus.",
    minTank: {
      gallons: 19,
      liters: 72,
      lengthCm: 80,
      lengthIn: null,
      stated: "Seriously Fish: base 80 × 30 cm, about 72 litres / 19 US gallons, for long-term care of a group."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The ordinary bronze cory is short-finned. A long-finned strain exists and would be more exposed to nippers. This record is the common fish.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 4,
    minGroupNote: "Seriously Fish says a group of at least 4–6. The checker uses 4 as the floor of that phrase. FishBase mentions wild schools of 20–30, which is natural history, not an aquarium minimum, and a generic 'groups of 5' line that is not used.",
    waterLayer: "bottom",
    flow: "gentle",
    flowNote: "FishBase says quiet, shallow water and also running water. Seriously Fish does not demand a strong current. They do need oxygenated water: they are facultative air breathers and will dart to the surface.",
    diet: "Foraging omnivore. Seriously Fish: sinking prepared foods plus small live or frozen foods. Not leftovers, and not an aquarium cleaner. FishBase: worms, crustaceans, insects, and plant matter.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "They forage on the bottom for worms, crustaceans, and similar small foods. That puts shrimplets on the menu. Nothing in these sources describes them hunting adult shrimp.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates the species Easy. The hard part is buying the fish the profile is about, because the trade name covers a mess of lookalikes.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Osteogaster aenea (bronze cory), Seriously Fish, revised 2026. The page still resolves at the old Corydoras aeneus URL.",
        url: "https://www.seriouslyfish.com/species/corydoras-aeneus/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, group size, diet, and the 2024 genus move."
      },
      {
        label: "FishBase",
        title: "Corydoras aeneus on FishBase. FishBase has not adopted Osteogaster in this summary.",
        url: "https://www.fishbase.se/summary/Corydoras-aeneus.html",
        accessed: "2026-10-30",
        usedFor: "A matching standard length and pH, a disagreeing temperature (25–28°C) and hardness (dH 5–19), and the wild school size."
      }
    ],
    uncertainties: [
      {
        field: "Identity",
        note: "Dias and colleagues moved this fish from Corydoras to Osteogaster in 2024. Seriously Fish says shop fish may not be the Trinidad species at all, and that names such as C. schultzei and C. venezuelanus are routinely misapplied. Panda corydoras are a different animal and are not covered by these numbers."
      },
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–27°C (70–81°F). FishBase lists 25–28°C. The checker uses Seriously Fish. Using the FishBase band would make the overlap with neon tetras a single degree, which is not how the husbandry source describes the pairing."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "cherry-shrimp",
    commonName: "Cherry shrimp",
    scientificName: "Neocaridina davidi",
    aliases: [
      "neocaridina",
      "neocaridina davidi",
      "red cherry shrimp",
      "rcs",
      "cherry red shrimp"
    ],
    family: "Atyidae",
    origin: "East and Central Asian streams. Klotz and coauthors (2013) discuss small to medium streams in East and Central China. Schoolmann and Arndt (2018), quoted by the US Fish and Wildlife Service, give China, Korea, Taiwan, and Vietnam. The red aquarium morph is a captive colour form.",
    tempC: {
      min: 14,
      max: 29
    },
    tempF: {
      min: 57.2,
      max: 84.2
    },
    tempFConverted: true,
    pH: {
      min: 6.5,
      max: 8
    },
    hardnessDGH: null,
    adultSizeMm: 40,
    adultSizeIn: 1.6,
    adultSizeNote: "Up to 40 mm body length, with average females about 25 mm and males about 20 mm (Klotz et al. 2013). Namaei Kohal et al. (2018), citing Heerbrandt and Lin (2006), report about 1.5–3.5 cm and up to 4 cm. The 1.6 inch figure is 40 mm converted. It is a maximum, not a typical adult.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: null,
      stated: "No gallon or length minimum in the sources read for this record. Namaei Kohal and coauthors held juveniles in 80 L aquaria and later females in 30 L aquaria. Those are study tanks, not a published minimum, so they are not used as one."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "Not a finned fish. The flag is off so fin rules never fire against them.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No sourced minimum group size. They are colonial breeders. This site does not invent a count such as 10.",
    waterLayer: "all",
    flow: "gentle",
    flowNote: "Klotz's quoted habitat is streams, not torrents. No source read here sets a current requirement for the aquarium morph, so the record stays at gentle rather than a guessed value.",
    diet: "Not scored from a stomach study. Namaei Kohal et al. (2018) reared them on formulated diets. The checker treats them as prey, not as predators of fish.",
    shrimpRisk: "not-applicable",
    shrimpRiskNote: "This is the shrimp the other records are scored against.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "unrated",
    careLevelNote: "No specialist aquarium profile in the sources used here assigns a difficulty grade. A wide captive breeding window is not the same thing as an easy-care rating, so none is printed.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Klotz et al. 2013",
        title: "Klotz, W., Miesen, F. W., Hüllen, S., and Herder, F. Two Asian fresh water shrimp species found in a thermally polluted stream system in North Rhine-Westphalia, Germany. Aquatic Invasions 8: 333–339.",
        url: "http://www.aquaticinvasions.net/2013/AI_2013_3_Klotz_etal.pdf",
        accessed: "2026-10-30",
        usedFor: "Maximum and average body length, and the note that home-region streams run from about 6–8°C in winter to nearly 30°C in summer."
      },
      {
        label: "Namaei Kohal et al. 2018",
        title: "Namaei Kohal, M., Esmaeili Fereidouni, A., Firouzbakhsh, F., and Hayati, I. Effects of dietary incorporation of Arthrospira (Spirulina) platensis meal on growth, survival, body composition, and reproductive performance of red cherry shrimp Neocaridina davidi. Journal of Applied Phycology 30: 431–443.",
        url: "https://doi.org/10.1007/s10811-017-1220-5",
        accessed: "2026-10-30",
        usedFor: "The aquarium band they cite from Heerbrandt and Lin (2006): pH 6.5–8 and 14–29°C, and lengths up to 4 cm. Their own trial was held at 26–28°C, pH 7.0–7.2, and hardness 85–90 mg/L."
      },
      {
        label: "USFWS ERSS, 2025",
        title: "U.S. Fish and Wildlife Service. Ecological risk screening summary: cherry shrimp (Neocaridina davidi). June 2025.",
        url: "https://www.fws.gov/sites/default/files/documents/2025-06/ecological-risk-screening-summary-cherry-shrimp-june-2025.pdf",
        accessed: "2026-10-30",
        usedFor: "Quotations of Klotz et al. on size and of Prati et al. (2024) on a captive breeding window. The hardness figure in that quotation is not used. See the uncertainty note."
      }
    ],
    uncertainties: [
      {
        field: "Temperature and pH",
        note: "The checker uses 14–29°C and pH 6.5–8, the aquarium figures Namaei Kohal et al. attribute to Heerbrandt and Lin (2006). This site has not read Heerbrandt and Lin directly. The authors' own experiment used a much tighter 26–28°C and pH 7.0–7.2. Klotz's field note of winter water at 6–8°C is a survival observation, not the band used for pairing."
      },
      {
        field: "Hardness",
        note: "No trusted dGH range is published here. The USFWS screening summary quotes Prati et al. (2024) as 'gH 0–27 °C', which attaches a temperature unit to a hardness value. That string is not used. Namaei Kohal's 85–90 mg/L is a study setpoint, about 5 dGH if read as CaCO3, and is not a tolerance range."
      },
      {
        field: "Tank size and group size",
        note: "Neither is stated as a minimum in the sources read. The page leaves both blank on purpose."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "platy",
    commonName: "Platy",
    scientificName: "Xiphophorus maculatus",
    aliases: [
      "xiphophorus maculatus",
      "southern platyfish",
      "platyfish",
      "moon platy"
    ],
    family: "Poeciliidae",
    origin: "Atlantic slope of Mexico and northern Central America. Seriously Fish includes Mexico, Guatemala, Belize, and Nicaragua. FishBase says Ciudad Veracruz to northern Belize. Wild fish are rarely the ones for sale.",
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
      min: 10,
      max: 30
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm standard length on Seriously Fish. FishBase lists males to 4.0 cm total length and females to 6.0 cm total length. Total length includes the tail, so the female figure is not a larger body than the Seriously Fish standard length implies. The checker uses 50 mm standard length.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "Seriously Fish: base 60 × 30 cm, about 54 litres / 14 US gallons. The profile says they will not thrive in soft, acidic water."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "Common platies are not long-finned. Seriously Fish notes a hi-fin strain, which this check does not assume. If your fish has a sail-like dorsal, treat it as long-finned when you read a betta result.",
    attacksLongFins: false,
    schooling: false,
    minGroup: null,
    minGroupNote: "No numeric group size. Seriously Fish says that if males and females are kept together there should be more females, because male attention is relentless. Males tolerate each other, unlike some swordtails.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "FishBase describes slow-moving water. Seriously Fish does not set a current. Gentle is the record.",
    diet: "Omnivore. Seriously Fish: most foods. FishBase: worms, crustaceans, insects, and plant matter.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "FishBase includes crustaceans and insects in the diet, which covers shrimplets. Adult cherry shrimp are not described as prey.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: true,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates the species Beginner, provided the water is moderately hard or harder. Soft, acidic tanks are the condition they say will fail.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Xiphophorus maculatus (platy), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/xiphophorus-maculatus/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, temperament, and the hybrid note."
      },
      {
        label: "FishBase",
        title: "Xiphophorus maculatus on FishBase.",
        url: "https://www.fishbase.se/summary/Xiphophorus-maculatus.html",
        accessed: "2026-10-30",
        usedFor: "Total lengths, pH 7–8, dH 9–19, 18–25°C, and the diet list. IUCN status on FishBase is Data Deficient, assessed 2018."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 20–26°C (68–79°F). FishBase lists 18–25°C. The checker uses Seriously Fish."
      },
      {
        field: "Hardness and pH",
        note: "Seriously Fish lists pH 7.0–8.2 and 10–30 dGH, and says the fish will not thrive in soft, acidic water. FishBase lists pH 7–8 and dH 9–19."
      },
      {
        field: "Hybrids",
        note: "Seriously Fish says some colour forms are produced by crossing with Xiphophorus helleri or X. variatus. A fish labelled 'platy' in a shop may not be pure X. maculatus. The numbers here are for X. maculatus as profiled."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "zebra-danio",
    commonName: "Zebra danio",
    scientificName: "Danio rerio",
    aliases: [
      "danio rerio",
      "zebrafish",
      "zebra fish",
      "danio"
    ],
    family: "Danionidae",
    origin: "India and Bangladesh, in slower water, rice paddies, and stream margins. Seriously Fish doubts older records from Pakistan and Myanmar. FishBase still includes those countries.",
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
      min: 5,
      max: 20
    },
    adultSizeMm: 50,
    adultSizeIn: 2,
    adultSizeNote: "50 mm standard length on Seriously Fish. FishBase lists 3.8 cm standard length. The checker uses 50 mm so the tank is not sized for the smaller figure.",
    minTank: {
      gallons: 21,
      liters: 81,
      lengthCm: 90,
      lengthIn: null,
      stated: "Seriously Fish: base 90 × 30 cm, about 81 litres / 21 US gallons, because the fish is active. A 20-gallon long is 30 inches and does not meet 90 cm."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The striped fish is not long-finned. Long-fin strains exist. This record is the common short-finned fish. Seriously Fish calls the species very peaceful, so it is not scored as a fin nipper.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish says a group of at least 8–10. FishBase's generic 'groups of 5' line is not used.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish says filtration need not be strong, and that the fish appreciates some water movement. That is not the bristlenose's demand for a strong current, so the record stays at gentle.",
    diet: "Micropredator. Seriously Fish cites stomach analyses: aquatic crustaceans and other invertebrates, including mosquito larvae. FishBase: worms, small crustaceans, and insect larvae.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "Wild diets in both sources include small crustaceans. A zebra danio is about 50 mm standard length and an adult cherry shrimp averages 20–25 mm, up to 40 mm. Adults are close enough in size that they are not scored as guaranteed prey. Shrimplets are.",
    slowMoving: false,
    vigorous: true,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates the species Easy and calls it hardy. The demand it does make is horizontal space.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Danio rerio (zebra danio), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/danio-rerio/",
        accessed: "2026-10-30",
        usedFor: "Size, the 90 cm tank, the 18–25°C maintenance range, pH, hardness, school size, and diet."
      },
      {
        label: "FishBase",
        title: "Danio rerio on FishBase.",
        url: "https://www.fishbase.se/summary/Danio-rerio.html",
        accessed: "2026-10-30",
        usedFor: "A smaller standard length (3.8 cm), 18–24°C, pH 6–8, dH 5–19, and a wider distribution than Seriously Fish accepts."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish's maintenance range is 18–25°C (64–77°F). The same page reports a July field reading of 24.6–38.6°C and tells you not to keep the aquarium there. FishBase lists 18–24°C. The checker uses 64–77°F."
      },
      {
        field: "Length",
        note: "50 mm standard length (Seriously Fish) against 3.8 cm standard length (FishBase). The tank recommendation follows the source that also measured the footprint, which is Seriously Fish."
      },
      {
        field: "Fin nipping",
        note: "Hobby talk often calls danios nippy. Seriously Fish calls them very peaceful. This check follows the profile and does not set the fin-nipper flag. A group of three in a short tank will chase. That is understocking, and it is not entered as a species trait."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "harlequin-rasbora",
    commonName: "Harlequin rasbora",
    scientificName: "Trigonostigma heteromorpha",
    aliases: [
      "harlequin",
      "trigonostigma heteromorpha",
      "rasbora heteromorpha",
      "harlequin rasbora"
    ],
    family: "Danionidae",
    origin: "Southern Thailand, Peninsular Malaysia, Singapore, and parts of Sumatra. Seriously Fish could not confirm Borneo. FishBase says the Malay Peninsula, Singapore, and Indonesia.",
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
      min: 5,
      max: 7.5
    },
    hardnessDGH: {
      min: 1,
      max: 12
    },
    adultSizeMm: 45,
    adultSizeIn: 1.8,
    adultSizeNote: "45 mm standard length in the Seriously Fish quick facts. The same page, citing Kottelat and Witte (1999), notes a wild maximum near 32 mm for the genus, with captive fish sometimes larger. FishBase lists 5.0 cm total length. The checker uses 45 mm standard length.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "Seriously Fish: base 60 × 30 cm, about 54 litres / 14 US gallons, because the fish should be kept in numbers."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "Short-finned. Not a nipper on the Seriously Fish account, which calls the species very peaceful.",
    attacksLongFins: false,
    schooling: true,
    minGroup: 8,
    minGroupNote: "Seriously Fish says a group of at least 8–10. FishBase's generic 'groups of 5' line is not used. A field note on FishBase mentions peat-swamp groups of more than 100, which is not an aquarium minimum.",
    waterLayer: "mid",
    flow: "gentle",
    flowNote: "Seriously Fish describes gently flowing forest streams. The aquarium section does not demand a strong current.",
    diet: "Micropredator. Seriously Fish cites stomach analyses: small insects, worms, crustaceans, and other zooplankton.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The stomach contents Seriously Fish cites are small animal prey. Adult cherry shrimp are a similar order of size to a 45 mm rasbora and are not scored as a sure meal. Shrimplets are.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "Seriously Fish rates the species Easy and recommends it for newcomers, with the school size as the real requirement.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trigonostigma heteromorpha (harlequin), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/trigonostigma-heteromorpha/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, school size, diet, spawning, and the cryptic-lineage note."
      },
      {
        label: "FishBase",
        title: "Trigonostigma heteromorpha on FishBase.",
        url: "https://www.fishbase.se/summary/Trigonostigma-heteromorpha",
        accessed: "2026-10-30",
        usedFor: "5.0 cm total length, pH 5–7, dH 5–12, 22–25°C, and the leaf-spawning note."
      }
    ],
    uncertainties: [
      {
        field: "Temperature",
        note: "Seriously Fish lists 21–28°C (70–82°F). FishBase lists 22–25°C. The checker uses Seriously Fish."
      },
      {
        field: "pH and hardness",
        note: "Seriously Fish lists pH 5.0–7.5 and 1–12 dGH. FishBase lists pH 5–7 and dH 5–12. The checker uses Seriously Fish."
      },
      {
        field: "Identity",
        note: "Collins and coauthors (2012), discussed on Seriously Fish, found two genetic lineages in aquarium stock, with small differences in shape and fin pigment. The fish sold as a harlequin may not be a single species. The care Seriously Fish gives is the same for both."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  },
  {
    slug: "bristlenose-pleco",
    commonName: "Bristlenose pleco",
    scientificName: "Ancistrus sp. (3)",
    aliases: [
      "bristlenose",
      "bushynose",
      "ancistrus",
      "ancistrus cirrhosus",
      "bn pleco",
      "common bristlenose"
    ],
    family: "Loricariidae",
    origin: "Unknown. PlanetCatfish treats the common captive-bred bristlenose as an unidentified domesticated Ancistrus, possibly a hybrid, and does not assign it to Ancistrus cirrhosus. Shops still print that name. There is no FishBase page for a fish without a species name.",
    tempC: {
      min: 21.5,
      max: 26.5
    },
    tempF: {
      min: 70.7,
      max: 79.7
    },
    tempFConverted: false,
    pH: {
      min: 5.8,
      max: 7.2
    },
    hardnessDGH: null,
    adultSizeMm: 125,
    adultSizeIn: 4.9,
    adultSizeNote: "125 mm or 4.9 inches standard length on the PlanetCatfish Cat-eLog for Ancistrus sp. (3). That is standard length, not total length.",
    minTank: {
      gallons: null,
      liters: null,
      lengthCm: null,
      lengthIn: 30,
      stated: "Kathy Jinkings, PlanetCatfish Catfish of the Month, December 1998: a thirty-inch tank for one pair, a four-foot tank for two or three pairs, and nothing smaller as a permanent home. No gallon figure is stated, and this site does not invent one."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "The common fish is not long-finned. PlanetCatfish lists long-fin and veiltail strains. Those are more exposed to fin damage and are not what this check assumes.",
    attacksLongFins: false,
    schooling: false,
    minGroup: 1,
    minGroupNote: "A single fish is acceptable. Males fight each other if they cannot each have a cave and room to avoid one another. The 30-inch minimum in the 1998 article is for one pair, not a rule that you must keep a pair.",
    waterLayer: "bottom",
    flow: "current",
    flowNote: "PlanetCatfish says they prefer a strong current and well-oxygenated water, plus hiding places. Bogwood is recommended.",
    diet: "Mainly vegetable. PlanetCatfish: the bulk of the diet must be vegetable matter, they graze algae off leaves rather than eating the plants, and a constant high-protein diet leads to stomach trouble. They will take occasional meat.",
    shrimpRisk: "unlikely",
    shrimpRiskNote: "The Cat-eLog diet is vegetable roughage, with meat as an occasional food rather than the staple. Adult cherry shrimp are not scored as prey. The profile also says tiny free-swimming fry of other fish are left alone, which is as close as the source comes to a predation statement.",
    slowMoving: false,
    vigorous: false,
    surfaceTerritorial: false,
    livebearer: false,
    careLevel: "easy",
    careLevelNote: "PlanetCatfish calls the water 'relatively undemanding' and the 1998 article calls them hardy. That is not a Seriously Fish difficulty score. There is no second husbandry database for this unnamed form.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "PlanetCatfish Cat-eLog",
        title: "Ancistrus sp. (3), common bristlenose, PlanetCatfish Cat-eLog. Record updated 17 February 2025.",
        url: "https://www.planetcatfish.com/ancistrus_sp(3)",
        accessed: "2026-10-30",
        usedFor: "Identity, 125 mm standard length, pH 5.8–7.2, 21.5–26.5°C, diet, current, and the statement that males fight over territory in a tank that is too small."
      },
      {
        label: "PlanetCatfish, Jinkings 1998",
        title: "Jinkings, K. Common bristlenose catfish. PlanetCatfish Catfish of the Month, December 1998.",
        url: "https://www.planetcatfish.com/cotm/cotm.php?article_id=112",
        accessed: "2026-10-30",
        usedFor: "The 30-inch tank for one pair and the four-foot tank for two or three pairs. Same publisher as the Cat-eLog, different document."
      }
    ],
    uncertainties: [
      {
        field: "Identity",
        note: "PlanetCatfish says the common captive-bred bristlenose cannot be identified to species, was listed as Ancistrus cf. cirrhosus for a time, and was returned to Ancistrus sp. (3) in 2024 because it is best treated as a domesticated form that may involve hybridisation. A shop label of Ancistrus cirrhosus is not confirmation."
      },
      {
        field: "Hardness",
        note: "The Cat-eLog does not give a dGH range. Jinkings wrote that the fish will live in hard or soft water. No numbers were attached, so the checker does not compare hardness for this species."
      },
      {
        field: "Tank size",
        note: "The sourced minimum is a length, 30 inches for one pair. Gallon recommendations on forums are not used."
      }
    ],
    sourceGap: "Both husbandry documents are from PlanetCatfish. FishBase has no entry for an unnamed domesticated form, and using the FishBase page for Ancistrus cirrhosus would mix in a different fish. The gap is real and is why hardness and a gallon minimum are left blank.",
    lastVerified: "2026-10-30"
  },
  {
    slug: "honey-gourami",
    commonName: "Honey gourami",
    scientificName: "Trichogaster chuna",
    aliases: [
      "trichogaster chuna",
      "colisa chuna",
      "honey gourami",
      "sunset gourami"
    ],
    family: "Osphronemidae",
    origin: "Ganges and Brahmaputra drainages in India and Bangladesh, with records from Nepal on Seriously Fish. FishBase says India and Bangladesh. Wild fish are rare in the trade.",
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
      max: 15
    },
    adultSizeMm: 55,
    adultSizeIn: 2.2,
    adultSizeNote: "55 mm standard length on Seriously Fish. FishBase lists 13.7 cm total length. That figure is several times the Seriously Fish length and is not used. It is flagged as unresolved rather than averaged in.",
    minTank: {
      gallons: 14,
      liters: 54,
      lengthCm: 60,
      lengthIn: null,
      stated: "Seriously Fish: base 60 × 30 cm, about 54 litres / 14 US gallons, for a pair or a small group."
    },
    temperament: "peaceful",
    finNipper: false,
    longFinned: false,
    longFinnedNote: "Males have pointed, extended dorsal and anal fins. They are not the trailing veil of an ornamental betta or guppy, so the long-finned flag stays off. A betta may still react to another anabantoid. That case is handled as surface territory, not as a fin-shape rule.",
    attacksLongFins: false,
    schooling: false,
    minGroup: 4,
    minGroupNote: "Seriously Fish says no fewer than 4–6. The checker uses 4 as the floor. They are not a shoal. They form hierarchies and the dominant fish chases the others.",
    waterLayer: "top",
    flow: "still",
    flowNote: "Seriously Fish: sluggish water in nature, and an air-powered sponge filter in the aquarium. They also need a lid and an air gap, because they are labyrinth fish and they jump.",
    diet: "Small animal prey. Seriously Fish: insects and other invertebrates in nature, and prepared foods plus small live or frozen foods in the aquarium.",
    shrimpRisk: "juveniles",
    shrimpRiskNote: "The diet Seriously Fish describes is insects and other small invertebrates. That covers shrimplets. An adult cherry shrimp, up to 40 mm, is close to the gourami's own 55 mm standard length and is not scored as a guaranteed meal.",
    slowMoving: true,
    vigorous: false,
    surfaceTerritorial: true,
    livebearer: false,
    careLevel: "beginner",
    careLevelNote: "Seriously Fish rates the species Beginner. The conditions attached to that rating are a quiet tank and tankmates that will not outcompete it.",
    incompatibleWith: [],
    cautionWith: [],
    endorsedWith: [],
    sources: [
      {
        label: "Seriously Fish",
        title: "Trichogaster chuna (honey gourami), Seriously Fish, revised 2026.",
        url: "https://www.seriouslyfish.com/species/trichogaster-chuna/",
        accessed: "2026-10-30",
        usedFor: "Size, tank, temperature, pH, hardness, group size, flow, diet, and the warning about vigorous tankmates."
      },
      {
        label: "FishBase",
        title: "Trichogaster chuna on FishBase.",
        url: "https://www.fishbase.se/summary/Trichogaster-chuna.html",
        accessed: "2026-10-30",
        usedFor: "A conflicting maximum length of 13.7 cm total length, pH 6–8, dH 5–19, and 22–28°C. The length is not used."
      }
    ],
    uncertainties: [
      {
        field: "Adult size",
        note: "Seriously Fish: 55 mm standard length. FishBase: 13.7 cm total length (Ref. 125929). Those cannot both describe the adult fish aquarists keep, and this site has not found a way to reconcile them. The checker uses 55 mm. Do not size a tank for a 14 cm honey gourami on the FishBase figure alone."
      },
      {
        field: "pH and temperature",
        note: "Seriously Fish lists pH 6.0–7.5 and 22–27°C. FishBase lists pH 6–8 and 22–28°C. The checker uses Seriously Fish."
      }
    ],
    sourceGap: null,
    lastVerified: "2026-10-30"
  }
] satisfies SpeciesProfile[];
