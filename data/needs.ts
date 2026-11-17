import type { Faq } from "../lib/types";

export type NeedTopic = "diet" | "plants" | "decor";

export interface NeedItem {
  topic: NeedTopic;
  text: string;
  sourceLabel: string;
  sourceUrl: string;
  shopQuery?: string;
  shopItem?: string;
}

export interface SpeciesNeeds {
  slug: string;
  items: NeedItem[];
  faqs: Faq[];
}

const seriously = {
  betta: "https://www.seriouslyfish.com/species/betta-splendens/",
  neon: "https://www.seriouslyfish.com/species/paracheirodon-innesi/",
  guppy: "https://www.seriouslyfish.com/species/poecilia-reticulata/",
  cory: "https://www.seriouslyfish.com/species/corydoras-aeneus/",
  platy: "https://www.seriouslyfish.com/species/xiphophorus-maculatus/",
  zebra: "https://www.seriouslyfish.com/species/danio-rerio/",
  harlequin: "https://www.seriouslyfish.com/species/trigonostigma-heteromorpha/",
  honey: "https://www.seriouslyfish.com/species/trichogaster-chuna/",
  angel: "https://www.seriouslyfish.com/species/pterophyllum-scalare/",
} as const;

export const speciesNeeds: SpeciesNeeds[] = [
  {
    slug: "betta",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish describes a carnivore: aquatic and terrestrial invertebrates in nature, and prepared foods plus small live or frozen foods in the aquarium. The same profile says this genus fattens easily.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.betta,
        shopQuery: "aquarium frozen bloodworms",
        shopItem: "frozen-bloodworms",
      },
      {
        topic: "plants",
        text: "The Seriously Fish maintenance notes say the tank should be well planted, with cover at the surface.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.betta,
        shopQuery: "live aquarium plants",
        shopItem: "live-plants",
      },
      {
        topic: "decor",
        text: "Seriously Fish says strong water movement should be avoided, and gives a turned-down air-powered sponge filter as the example. The fish also needs a covered gap of humid air, because it breathes at the surface and it jumps.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.betta,
        shopQuery: "aquarium sponge filter",
        shopItem: "sponge-filter",
      },
    ],
    faqs: [
      {
        question: "What should a betta eat?",
        answer:
          "Seriously Fish says prepared foods plus small live or frozen invertebrates. The profile also says the genus fattens easily.",
      },
    ],
  },
  {
    slug: "guppy",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish calls the aquarium fish an omnivore and says wild guppies are primarily insectivorous. The profile's short line for feeding is that they take most foods.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.guppy,
        shopQuery: "tropical fish flakes",
        shopItem: "fish-flakes",
      },
      {
        topic: "plants",
        text: "Seriously Fish's tank note for guppies includes plants and no strong current. The same profile says plants at the surface give the babies somewhere to hide, because adults eat the young.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.guppy,
        shopQuery: "floating aquarium plants",
        shopItem: "floating-plants",
      },
    ],
    faqs: [
      {
        question: "Do guppies need plants?",
        answer:
          "Seriously Fish includes plants in the tank description and says surface plants shelter the babies. Plants are not listed as a food.",
      },
    ],
  },
  {
    slug: "neon-tetra",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish describes small invertebrates, crustaceans, and some plant matter. FishBase lists worms, small insects, crustaceans, and plant matter.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.neon,
        shopQuery: "aquarium frozen daphnia",
        shopItem: "frozen-daphnia",
      },
      {
        topic: "plants",
        text: "Seriously Fish matches the forest streams it describes with dim light, a dark substrate, and cover from plants or leaves.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.neon,
        shopQuery: "live aquarium plants",
        shopItem: "live-plants",
      },
      {
        topic: "decor",
        text: "The same Seriously Fish setup names a dark substrate. No other ornament is specified.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.neon,
        shopQuery: "dark aquarium substrate",
        shopItem: "dark-substrate",
      },
    ],
    faqs: [
      {
        question: "What cover does a neon tetra need?",
        answer:
          "Seriously Fish says dim light, a dark substrate, and cover from plants or leaves. It does not name a brand of ornament.",
      },
    ],
  },
  {
    slug: "bronze-corydoras",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish says sinking prepared foods plus small live or frozen foods. They are not to live on leftovers, and the profile says they are not an aquarium cleaner.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.cory,
        shopQuery: "sinking fish food",
        shopItem: "sinking-food",
      },
      {
        topic: "decor",
        text: "Seriously Fish asks for fine sand. Rounded gravel is the compromise the profile allows if it is kept clean. Plants are not given as a requirement.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.cory,
        shopQuery: "aquarium sand",
        shopItem: "aquarium-sand",
      },
    ],
    faqs: [
      {
        question: "What substrate does a bronze corydoras need?",
        answer: "Seriously Fish asks for fine sand, and allows clean rounded gravel. Plants are not stated as a requirement on this record.",
      },
    ],
  },
  {
    slug: "cherry-shrimp",
    items: [
      {
        topic: "diet",
        text: "Namaei Kohal et al. (2018) reared red cherry shrimp on formulated diets that included Arthrospira (Spirulina) platensis meal. This record does not add a plant or leaf-litter requirement, because the sources used here do not state one.",
        sourceLabel: "Namaei Kohal et al. 2018",
        sourceUrl: "https://doi.org/10.1007/s10811-017-1220-5",
        shopQuery: "aquarium shrimp food",
        shopItem: "shrimp-food",
      },
    ],
    faqs: [
      {
        question: "What do cherry shrimp eat?",
        answer:
          "Namaei Kohal et al. (2018) reared them on formulated diets, including a Spirulina meal. A plant list is not in the sources used on this page.",
      },
    ],
  },
  {
    slug: "angelfish",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish's diet section, read 11 November 2026, says wild fish feed mainly on zoobenthos such as small crustaceans and other aquatic invertebrates, and that tank-bred fish take pellet or flake food and live or frozen foods.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.angel,
        shopQuery: "aquarium fish pellets",
        shopItem: "fish-pellets",
      },
      {
        topic: "plants",
        text: "The same page's maintenance section says the tank should be well planted with tall leafy plants such as Amazon swords, with gentle flow, and at least 50 cm of height for adults.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.angel,
        shopQuery: "amazon sword aquarium plant",
        shopItem: "sword-plant",
      },
    ],
    faqs: [
      {
        question: "Do angelfish need plants?",
        answer:
          "Seriously Fish's maintenance section says a well planted tank with tall leafy plants such as Amazon swords. That sentence is about cover, not a claim that the fish eats the plants.",
      },
    ],
  },
  {
    slug: "platy",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish calls platies omnivores and says they take most foods.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.platy,
        shopQuery: "tropical fish flakes",
        shopItem: "fish-flakes",
      },
      {
        topic: "plants",
        text: "Seriously Fish says plants are appreciated. The same account says plants are not required for them to breed, because platies breed anyway.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.platy,
        shopQuery: "live aquarium plants",
        shopItem: "live-plants",
      },
    ],
    faqs: [
      {
        question: "Do platies need plants to breed?",
        answer: "No. Seriously Fish says plants are appreciated and are not required for breeding.",
      },
    ],
  },
  {
    slug: "zebra-danio",
    items: [
      {
        topic: "diet",
        text: "Stomach analyses cited by Seriously Fish found aquatic crustaceans and other invertebrates, including mosquito larvae. FishBase lists worms, small crustaceans, and insect larvae.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.zebra,
        shopQuery: "aquarium frozen daphnia",
        shopItem: "frozen-daphnia",
      },
      {
        topic: "plants",
        text: "Seriously Fish says they scatter eggs and eat them, and that a planted tank sometimes raises a few fry with no extra help. Plants are not described as the adult diet.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.zebra,
        shopQuery: "live aquarium plants",
        shopItem: "live-plants",
      },
    ],
    faqs: [
      {
        question: "Will plants feed adult zebra danios?",
        answer:
          "Not on the Seriously Fish account used here. The cited stomach contents are small animals. Plants are mentioned because the fish scatter eggs and sometimes a few fry survive among them.",
      },
    ],
  },
  {
    slug: "harlequin-rasbora",
    items: [
      {
        topic: "diet",
        text: "Stomach analyses cited by Seriously Fish found small insects, worms, crustaceans, and other zooplankton. The profile says flakes alone are survival food, not the diet that keeps the colour.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.harlequin,
        shopQuery: "aquarium frozen daphnia",
        shopItem: "frozen-daphnia",
      },
      {
        topic: "plants",
        text: "Seriously Fish says dim light shows the colour. Breeding, when it is the point, is an inverted spawn on the underside of a broad leaf. FishBase also records that leaf-spawning note. A community tank is not that breeding setup.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.harlequin,
        shopQuery: "broad leaf aquarium plants",
        shopItem: "broad-leaf-plants",
      },
      {
        topic: "decor",
        text: "Seriously Fish pairs the dim light with a dark substrate.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.harlequin,
        shopQuery: "dark aquarium substrate",
        shopItem: "dark-substrate",
      },
    ],
    faqs: [
      {
        question: "Why do harlequin rasboras get a broad leaf?",
        answer:
          "Seriously Fish and FishBase describe them sticking eggs to the underside of a leaf. That is a breeding note. It is not a claim that a community tank must contain that leaf.",
      },
    ],
  },
  {
    slug: "bristlenose-pleco",
    items: [
      {
        topic: "diet",
        text: "PlanetCatfish says the bulk of the diet must be vegetable matter. They graze algae off leaves rather than eating the plants, and a constant high-protein diet leads to stomach trouble. Meat is occasional.",
        sourceLabel: "PlanetCatfish Cat-eLog",
        sourceUrl: "https://www.planetcatfish.com/ancistrus_sp(3)",
        shopQuery: "algae wafers",
        shopItem: "algae-wafers",
      },
      {
        topic: "plants",
        text: "PlanetCatfish says they graze algae off the leaves and leave the leaves. The plants are a grazing surface in that account, not the meal.",
        sourceLabel: "PlanetCatfish Cat-eLog",
        sourceUrl: "https://www.planetcatfish.com/ancistrus_sp(3)",
      },
      {
        topic: "decor",
        text: "PlanetCatfish recommends bogwood for the lignin, not because this fish eats wood the way a panaque does. Males each need a cave. Without that cover they fight.",
        sourceLabel: "PlanetCatfish Cat-eLog",
        sourceUrl: "https://www.planetcatfish.com/ancistrus_sp(3)",
        shopQuery: "aquarium driftwood",
        shopItem: "driftwood",
      },
    ],
    faqs: [
      {
        question: "Does a bristlenose need bogwood?",
        answer:
          "PlanetCatfish recommends bogwood for the lignin. The same account says they do not eat the wood the way a panaque does, and they do not eat the plant leaves they graze.",
      },
    ],
  },
  {
    slug: "honey-gourami",
    items: [
      {
        topic: "diet",
        text: "Seriously Fish says insects and other invertebrates in nature, and prepared foods plus small live or frozen foods such as Daphnia or brine shrimp in the aquarium.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.honey,
        shopQuery: "frozen brine shrimp",
        shopItem: "frozen-brine-shrimp",
      },
      {
        topic: "decor",
        text: "Seriously Fish says the water should be sluggish, with an air-powered sponge filter, a tight lid, and a gap of humid air. They are labyrinth fish and they jump. A planted-tank shopping list is not in that maintenance note, so none is added here.",
        sourceLabel: "Seriously Fish",
        sourceUrl: seriously.honey,
        shopQuery: "aquarium lid",
        shopItem: "aquarium-lid",
      },
    ],
    faqs: [
      {
        question: "Does a honey gourami need a lid?",
        answer:
          "Seriously Fish says yes: a tight lid and a gap of humid air. They jump, and the fry use that air while the labyrinth develops.",
      },
    ],
  },
];

export function needsBySlug(slug: string): SpeciesNeeds | undefined {
  return speciesNeeds.find((entry) => entry.slug === slug);
}
