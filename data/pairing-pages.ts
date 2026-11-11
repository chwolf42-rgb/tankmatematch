import type { Faq } from "../lib/types";

export interface PairingPage {
  slug: string;
  title: string;
  h1: string;
  a: string;
  b: string;
  /** Unique sourced context. The verdict sentence itself is built from the checker. */
  context: string;
  /** Short clause for the meta description. The verdict label is added by the checker. */
  summary: string;
  faqs: Faq[];
}

export const pairingPages: PairingPage[] = [
  {
    slug: "bettas-cherry-shrimp",
    title: "Can Bettas Live with Cherry Shrimp?",
    h1: "Can bettas live with cherry shrimp?",
    a: "betta",
    b: "cherry-shrimp",
    summary: "Adult cherry shrimp are scored as prey. Extra gallons do not change it.",
    context:
      "Seriously Fish describes a betta diet of small invertebrates, and the betta record uses 70 mm standard length. Cherry shrimp average about 20–25 mm, with 40 mm as the outside figure from Klotz et al. (2013). The checker treats that size gap as predation. Extra gallons do not change it.",
    faqs: [
      {
        question: "Will a planted tank save cherry shrimp from a betta?",
        answer:
          "No. The failure is predation, not missing cover. Seriously Fish says the betta eats small invertebrates, and the shrimp is inside that size.",
      },
      {
        question: "Are baby cherry shrimp the only ones at risk?",
        answer:
          "No. This pair is Not compatible for adult shrimp. Shrimplet-only Caution is a different result, used when a fish is not scored as eating adults.",
      },
    ],
  },
  {
    slug: "bettas-ghost-shrimp",
    title: "Can Bettas Live with Ghost Shrimp?",
    h1: "Can bettas live with ghost shrimp?",
    a: "betta",
    b: "ghost-shrimp",
    summary: "At 50 mm they are still shrimp. The temperature overlap does not save them.",
    context:
      "Ghost shrimp in this catalog are Palaemon paludosus, the eastern grass shrimp. The USGS fact sheet says adults reach 50 mm (Baranowski 2011) and quotes a preferred 10–35°C from Christmas and Langley (1973). That is larger than a cherry shrimp, and the temperature bands can overlap a betta's. The pair is still Not compatible, because the record is a shrimp and a betta is scored as eating adult shrimp. Shops also sell other animals under the name ghost shrimp. This page is only Palaemon paludosus.",
    faqs: [
      {
        question: "Is a 50 mm ghost shrimp too big for a betta?",
        answer:
          "Not on this checker. The betta rule is adult-shrimp predation, not a length that exempts a 50 mm shrimp. The USGS fact sheet is the size source.",
      },
      {
        question: "Does the shared temperature make this Compatible?",
        answer:
          "No. Christmas and Langley (1973), quoted by USGS, give 10–35°C, which overlaps a betta. The failure is predation. pH is not published for this shrimp, so that comparison stays blank.",
      },
    ],
  },
  {
    slug: "bettas-amano-shrimp",
    title: "Can Bettas Live with Amano Shrimp?",
    h1: "Can bettas live with amano shrimp?",
    a: "betta",
    b: "amano-shrimp",
    summary: "Amano shrimp are still shrimp. The sea-larva note is a separate limit.",
    context:
      "Amano shrimp are Caridina multidentata, 25–35 mm in Ohara et al. (2024), and the record marks them as shrimp. A betta is already scored as eating adult shrimp. The amano's larvae also have to reach the sea, which is a separate husbandry limit and not the reason this pair fails.",
    faqs: [
      {
        question: "Are amano shrimp too big for a betta to eat?",
        answer:
          "Not on this checker. They are still shrimp, and the betta rule is adult-shrimp predation, not a length cutoff that exempts a 35 mm shrimp.",
      },
      {
        question: "Can amano shrimp breed in the betta tank?",
        answer:
          "No. Ohara et al. (2024) describe an amphidromous life cycle. The larvae have to reach the sea even if the adults were safe, and here the adults are not.",
      },
    ],
  },
  {
    slug: "bettas-mystery-snails",
    title: "Can Bettas Live with Mystery Snails?",
    h1: "Can bettas live with mystery snails?",
    a: "betta",
    b: "spike-topped-apple-snail",
    summary: "Pomacea diffusa is above the 40 mm small-snail cutoff.",
    context:
      "The mystery snail in this set is the spike-topped apple snail, Pomacea diffusa, with a shell 40–70 mm high. That is above the 40 mm small-snail cutoff, so the betta's shrimp-predation score does not fire. The pair is still not Compatible. Seriously Fish says a betta is best kept alone, and mystery snails are not the small cyprinids or loaches that page says can sometimes be suitable.",
    faqs: [
      {
        question: "Does a betta eat mystery snails?",
        answer:
          "This checker does not score that. The snail is too large for the small-snail rule, and no source used here says a betta hunts adult Pomacea diffusa.",
      },
      {
        question: "Why is this Caution instead of Works if?",
        answer:
          "Works if is reserved for the small short-finned cyprinids and loaches Seriously Fish names. A mystery snail is neither.",
      },
    ],
  },
  {
    slug: "bettas-assassin-snails",
    title: "Can Bettas Live with Assassin Snails?",
    h1: "Can bettas live with assassin snails?",
    a: "betta",
    b: "assassin-snail",
    summary: "At about 30 mm, this snail is under the 40 mm cutoff.",
    context:
      "Assassin snails, Anentome helena, have a maximum length of about 30 mm in the USFWS summary. That is under the 40 mm small-snail cutoff, so a betta scored as eating adult shrimp is Not compatible with them. The assassin's own habit of eating other snails does not change this pair, because a betta is not a snail.",
    faqs: [
      {
        question: "Will an assassin snail eat a betta?",
        answer: "No. The snail is scored as eating other snails, not fish. The failure runs from the betta to the snail.",
      },
      {
        question: "Is 30 mm large enough to be safe?",
        answer: "No. The small-snail rule uses 40 mm. An assassin snail at about 30 mm is under that line.",
      },
    ],
  },
  {
    slug: "bettas-neon-tetras",
    title: "Can Bettas Live with Neon Tetras?",
    h1: "Can bettas live with neon tetras?",
    a: "betta",
    b: "neon-tetra",
    summary: "A tetra is not in the cyprinid or loach group.",
    context:
      "Neon tetras are short-finned and the published temperature, pH, and hardness ranges overlap a betta's. They are still Caution. Seriously Fish says community success with a betta is the exception, and the Works if rule on this site is limited to small cyprinids and loaches. A neon is a tetra, family Characidae, so it does not enter that group.",
    faqs: [
      {
        question: "Do neon tetras nip a betta's fins?",
        answer:
          "Not on these records. The neon is not marked as a fin nipper. The Caution is the betta's temperament, not a nip.",
      },
      {
        question: "Would a planted tank make this Compatible?",
        answer:
          "No. Plants and surface cover are part of the Works if conditions for the cyprinids and loaches Seriously Fish names. A neon is not in that group, so the result stays Caution.",
      },
    ],
  },
  {
    slug: "bettas-zebra-danios",
    title: "Can Bettas Live with Zebra Danios?",
    h1: "Can bettas live with zebra danios?",
    a: "betta",
    b: "zebra-danio",
    summary: "One betta, surface cover, and both published tank minimums.",
    context:
      "Zebra danios are small danionids with short fins, and their water overlaps a betta's without an edge failure. Seriously Fish says some small cyprinids from similar still water can be suitable, and this site treats danios as that group. The result is Works if: one betta, both published tank minimums, and a well-planted tank with surface cover. It is not a green Compatible.",
    faqs: [
      {
        question: "Are zebra danios a safe betta tank mate with no conditions?",
        answer: "No. Works if still requires the single betta, the cover, and the tank minimums. Compatible would mean no conditions.",
      },
      {
        question: "Why a danio and not a neon?",
        answer:
          "Seriously Fish named small cyprinids and loaches. This site files zebra danios in Danionidae, the split from Cyprinidae. Neons are tetras and stay at Caution.",
      },
    ],
  },
  {
    slug: "bettas-guppies",
    title: "Can Bettas Live with Guppies?",
    h1: "Can bettas live with guppies?",
    a: "betta",
    b: "guppy",
    summary: "Trailing fins are the refusal. A larger tank does not remove them.",
    context:
      "This pair is a specific refusal, not the general temperament Caution. Seriously Fish says species with trailing finnage should certainly be avoided with a male betta, because he may view them as rivals. The guppy record is the long-finned fish sold in shops. A larger tank does not remove the fins.",
    faqs: [
      {
        question: "Will a 20-gallon tank fix bettas and guppies?",
        answer: "No. The stored override says the conflict is the fins. Gallons are not the reason the pair fails.",
      },
      {
        question: "What about a short-finned wild guppy?",
        answer:
          "This record is the ornamental long-finned form. A short-finned wild fish is not what the checker assumes, and the page does not invent a second guppy.",
      },
    ],
  },
  {
    slug: "bettas-harlequin-rasboras",
    title: "Can Bettas Live with Harlequin Rasboras?",
    h1: "Can bettas live with harlequin rasboras?",
    a: "betta",
    b: "harlequin-rasbora",
    summary: "A short-finned danionid, with the Works if conditions.",
    context:
      "Harlequin rasboras are small, short-finned danionids in still-to-gentle water, which is the group this site maps to Seriously Fish's 'small cyprinids.' The pair is Works if you keep a single betta in a planted tank with surface cover that meets both minimums. It is not Compatible with no conditions.",
    faqs: [
      {
        question: "Do harlequin rasboras have the fins a betta attacks?",
        answer: "No. The harlequin record is short-finned. The long-fin refusal used for guppies does not fire.",
      },
      {
        question: "What has to be true for this pair to work?",
        answer:
          "One betta, a well-planted tank with surface cover, and a tank that meets the published minimum for both fish. Seriously Fish still says living with other species is the exception.",
      },
    ],
  },
  {
    slug: "bettas-corydoras",
    title: "Can Bettas Live with Corydoras?",
    h1: "Can bettas live with corydoras?",
    a: "betta",
    b: "bronze-corydoras",
    summary: "A cory is not in the named cyprinid or loach families.",
    context:
      "Bronze corydoras are peaceful, short-finned, and not a surface fish, and the water ranges can overlap. They are still Caution. Seriously Fish's conditional allowance is for some small cyprinids and loaches, not for callichthyid catfish. A cory is not given a Works if result on that sentence.",
    faqs: [
      {
        question: "Do corydoras nip a betta's fins?",
        answer: "No. The bronze cory record is not a fin nipper. The Caution is the betta's temperament rule, not a nip.",
      },
      {
        question: "Is a corydoras close enough to a loach to count?",
        answer:
          "No. The Works if families are Cyprinidae, Danionidae, and the loach families named on the betta record. Callichthyidae is not one of them.",
      },
    ],
  },
  {
    slug: "bettas-honey-gouramis",
    title: "Can Bettas Live with a Honey Gourami?",
    h1: "Can bettas live with a honey gourami?",
    a: "betta",
    b: "honey-gourami",
    summary: "Both fish defend the same surface. Extra gallons do not add another.",
    context:
      "Both fish hold the surface. The checker treats two surface-territorial fish as Not compatible, because they defend the same few inches and extra gallons do not add a second surface. That is a different failure from the betta's general temperament Caution.",
    faqs: [
      {
        question: "Is a honey gourami peaceful enough for a betta?",
        answer:
          "The honey gourami record is not the problem by temperament alone. Both animals are marked as holding the surface, and that rule refuses the pair.",
      },
      {
        question: "Would a taller tank separate them?",
        answer: "No. The rule says extra gallons do not give either fish a second surface.",
      },
    ],
  },
  {
    slug: "cherry-shrimp-neon-tetras",
    title: "Can Cherry Shrimp Live with Neon Tetras?",
    h1: "Can cherry shrimp live with neon tetras?",
    a: "cherry-shrimp",
    b: "neon-tetra",
    summary: "Adult cherry shrimp are not scored as prey. Shrimplets are.",
    context:
      "Neon tetras are not scored as hunters of adult cherry shrimp. Their diet notes cover small crustaceans and insects, which this site treats as a risk to shrimplets. The result is Caution, not Not compatible. Adult shrimp are not automatically cleared.",
    faqs: [
      {
        question: "Will neon tetras eat adult cherry shrimp?",
        answer: "Not on this scoring. The neon record is juveniles, not adults. The Caution is the shrimplet.",
      },
      {
        question: "Is this the same answer as a betta?",
        answer: "No. A betta is Not compatible with adult cherry shrimp. A neon is Caution for shrimplets.",
      },
    ],
  },
  {
    slug: "assassin-snails-mystery-snails",
    title: "Can Assassin Snails Live with Mystery Snails?",
    h1: "Can assassin snails live with mystery snails?",
    a: "assassin-snail",
    b: "spike-topped-apple-snail",
    summary: "The assassin snail is scored as eating other snails.",
    context:
      "Assassin snails are scored as eating other snails. The USFWS summary's ecology section is about that diet, and the maximum length used here is about 30 mm. The mystery snail in this set is Pomacea diffusa. The pair is Not compatible because one snail eats snails. Water chemistry is not what fails it.",
    faqs: [
      {
        question: "Are mystery snails too big for an assassin snail?",
        answer:
          "The rule does not exempt a larger snail. Anentome helena is scored as eating other snails, and Pomacea diffusa is a snail.",
      },
      {
        question: "Do mystery snails eat assassin snails back?",
        answer:
          "Not on these records. Pomacea diffusa is not marked as a snail-eater. The care guide names that habit for other apple snails, not this one.",
      },
    ],
  },
  {
    slug: "bettas-bristlenose-plecos",
    title: "Can Bettas Live with a Bristlenose Pleco?",
    h1: "Can bettas live with a bristlenose pleco?",
    a: "betta",
    b: "bristlenose-pleco",
    summary: "Still water and current do not match, and temperament stays Caution.",
    context:
      "A bristlenose is not a fin nipper and not a surface fish, and it is not scored as shrimp-style prey. Two cautions still stack. The betta wants still water and the pleco's record does not, and a betta is not a straightforward community fish. A bristlenose is also not one of the small cyprinids or loaches in the Works if rule.",
    faqs: [
      {
        question: "Will a bristlenose attack a betta?",
        answer: "Not on these records. The Caution is flow plus the betta's temperament, not a predation score.",
      },
      {
        question: "Does the pleco need a stronger current than the betta?",
        answer:
          "The betta record says strong water movement should be avoided. The pair carries a flow Caution because those demands do not match.",
      },
    ],
  },
];
