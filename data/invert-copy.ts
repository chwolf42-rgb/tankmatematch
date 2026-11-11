import type { SpeciesCopy } from "../lib/types";

export const invertCopy: Record<string, SpeciesCopy> = {
  "amano-shrimp": {
    lede: "Amano shrimp (Caridina multidentata) are freshwater shrimp from Japan and Taiwan. Adults live in rivers and the larvae must reach the sea. Ohara et al. (2024) give 25–35 mm and tested breeding at 20–26°C. They are prey for any fish scored as eating adult shrimp. No pH range is on file.",
    husbandry: [
      "Suzuki and Naruse (2011), quoted by Ohara et al. (2024), give 25–35 mm body length. The checker uses 35 mm.",
      "The checker uses 20–26°C. Ohara et al. (2024) tested 20, 23, and 26°C because those match the Banda River from spring through autumn. It is a reproductive-season band, not a printed survival limit. No pH was in that paper."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a amano shrimp need?",
        answer: "The checker uses 20–26°C. Ohara et al. (2024) tested 20, 23, and 26°C because those match the Banda River from spring through autumn. It is a reproductive-season band, not a printed survival limit. No pH was in that paper."
      },
      {
        question: "Will a amano shrimp eat tank mates?",
        answer: "No. They are algae and biofilm shrimp in the sources used here. Fish that eat shrimp are the risk, not the other way around."
      }
    ]
  },
  "typus-shrimp": {
    lede: "Typus shrimp (Caridina typus) are freshwater atyid shrimp, 30–40 mm in Ohara et al. (2024). That paper tested them at 20–26°C. They are prey for fish scored as eating adult shrimp. No pH range is on file. Typus shrimp is a name taken from the scientific name; the paper does not print a separate trade name.",
    husbandry: [
      "Suzuki and Naruse (2011), quoted by Ohara et al. (2024), give 30–40 mm body length. The checker uses 40 mm.",
      "The checker uses the same 20–26°C reproductive-season band Ohara et al. (2024) tested for this species and for amano shrimp. No pH was stated."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a typus shrimp need?",
        answer: "The checker uses the same 20–26°C reproductive-season band Ohara et al. (2024) tested for this species and for amano shrimp. No pH was stated."
      },
      {
        question: "Will a typus shrimp eat tank mates?",
        answer: "No. The predation risk runs from fish toward this shrimp."
      }
    ]
  },
  "channeled-apple-snail": {
    lede: "Channeled apple snails (Pomacea canaliculata) are large freshwater snails. The USFWS summary quotes a shell up to 75 mm wide in the usual range, and a temperature preference of 18–25°C. They eat plants, and a care reference reports that they also eat other snails. They are Not compatible with other snails in this set.",
    husbandry: [
      "Holswade and Kondapalli (2013), quoted by the USFWS summary, give a shell 40–60 mm high and 45–75 mm wide, and say it can reach 150 mm. The checker uses 75 mm.",
      "The checker uses 18–25°C. The USFWS summary quotes a preference of 18–25°C, with mortality rising below 18°C or above 32°C (Cowie 2005, via Holswade and Kondapalli 2013). No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a channeled apple snail need?",
        answer: "The checker uses 18–25°C. The USFWS summary quotes a preference of 18–25°C, with mortality rising below 18°C or above 32°C (Cowie 2005, via Holswade and Kondapalli 2013). No pH range is stored."
      },
      {
        question: "Will a channeled apple snail eat tank mates?",
        answer: "They eat plants, and the Apple Snail Website reports that this species eats other snails. Other snails in the set are Not compatible. They are not scored as hunters of fish."
      }
    ]
  },
  "spike-topped-apple-snail": {
    lede: "Spike-topped apple snails (Pomacea diffusa) are the mystery snails of the trade. The USFWS summary quotes a shell 40–70 mm high. The temperature used here is 18–28°C from an apple-snail care guide, not a species experiment, and that limit is named on the page. They are not scored as snail-eaters. At 70 mm they are above the small-snail cutoff.",
    husbandry: [
      "Queensland Museum (2016), quoted by the USFWS summary, gives a shell 40–70 mm high and 40–50 mm wide. The checker uses 70 mm.",
      "The checker uses 18–28°C from the Apple Snail Website care guide, which states that optimum for apple snails. The USFWS summary, quoting Perrera and Halls (1996), discusses aquarium lifespan at 20–21°C and at 25°C or above, but does not print a min–max tolerance. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a spike-topped apple snail need?",
        answer: "The checker uses 18–28°C from the Apple Snail Website care guide, which states that optimum for apple snails. The USFWS summary, quoting Perrera and Halls (1996), discusses aquarium lifespan at 20–21°C and at 25°C or above, but does not print a min–max tolerance. No pH range is stored."
      },
      {
        question: "Will a spike-topped apple snail eat tank mates?",
        answer: "This page does not score them as predators of other snails. The care guide says they prefer dead plant matter and need to be fed."
      }
    ]
  },
  "giant-apple-snail": {
    lede: "Giant apple snails (Pomacea maculata) are very large freshwater snails, up to 165 mm shell height in the USFWS summary. The tolerance figures used here are 15.2–36.6°C and pH 4.0–10.5, from Ramakrishnan (2007) as quoted in that summary. They are tolerance limits, not a target. At this size they are not treated as cherry-shrimp prey.",
    husbandry: [
      "CABI (2017), quoted by the USFWS summary, says adults can reach 165 mm shell height (Kyle et al. 2009; Hayes et al. 2012). The checker uses 165 mm.",
      "The checker uses 15.2–36.6°C and pH 4.0–10.5. The USFWS summary says Ramakrishnan (2007) examined tolerance across that temperature, salinity 0–6.8‰, and that pH. Those are tolerance figures, not a preferred aquarium target."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a giant apple snail need?",
        answer: "The checker uses 15.2–36.6°C and pH 4.0–10.5. The USFWS summary says Ramakrishnan (2007) examined tolerance across that temperature, salinity 0–6.8‰, and that pH. Those are tolerance figures, not a preferred aquarium target."
      },
      {
        question: "Will a giant apple snail eat tank mates?",
        answer: "Not scored as a snail-eater. The snail-eating note on the apple-snail care guide names other species."
      }
    ]
  },
  "florida-apple-snail": {
    lede: "Florida apple snails (Pomacea paludosa) are 60 mm snails in the USFWS summary. The temperature used here is 18–28°C from an apple-snail care guide because the species summary does not print its own numeric band. That gap is on the page. They are above the small-snail cutoff.",
    husbandry: [
      "Benson (2016), quoted by the USFWS summary, gives 60 mm in length and width (Burch 1982). The checker uses 60 mm.",
      "The checker uses 18–28°C from the apple-snail care guide. The USFWS summary only calls this a tropical species and cites a low-temperature intolerance (Freiburg and Hazelwood 1977) without a numeric band. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a florida apple snail need?",
        answer: "The checker uses 18–28°C from the apple-snail care guide. The USFWS summary only calls this a tropical species and cites a low-temperature intolerance (Freiburg and Hazelwood 1977) without a numeric band. No pH range is stored."
      },
      {
        question: "Will a florida apple snail eat tank mates?",
        answer: "Not scored as a predator of other snails or of fish."
      }
    ]
  },
  "indian-apple-snail": {
    lede: "Indian apple snails (Pila globosa) are 4–6 cm snails that use both water and dry ground. The USFWS summary quotes lethal exposures at 10°C, 20°C, and 40°C. The 18–28°C band on this page is the apple-snail care guide, and the page says so. Pairing one with a fully aquatic animal is Caution because the snail needs land, not because it is scored as eating the fish.",
    husbandry: [
      "Thomas (1975), quoted by the USFWS summary, says Pila globosa measures 4–6 cm in diameter. The checker uses 60 mm.",
      "The checker uses 18–28°C from the apple-snail care guide. The USFWS summary, quoting Meenakshi (1964) via Cowie (2006), says this snail cannot survive 2 days at 40°C, dies within 4 days at 20°C, and dies within 1 day at 10°C. Those are lethal exposures, not a preferred band. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a indian apple snail need?",
        answer: "The checker uses 18–28°C from the apple-snail care guide. The USFWS summary, quoting Meenakshi (1964) via Cowie (2006), says this snail cannot survive 2 days at 40°C, dies within 4 days at 20°C, and dies within 1 day at 10°C. Those are lethal exposures, not a preferred band. No pH range is stored."
      },
      {
        question: "Will a indian apple snail eat tank mates?",
        answer: "Not scored as a hunter of fish or of other snails. The mismatch with fully aquatic tank mates is the dry-ground habit."
      }
    ]
  },
  "quilted-melania": {
    lede: "Quilted melania (Tarebia granifera) are small freshwater snails, commonly about 25 mm and up to 40 mm in Abbott (1952). The USFWS summary quotes a survival tolerance of 0–47.5°C. That wide band is what the checker uses, and it is a survival claim, not a target. At 40 mm they are on the small-snail cutoff, so shrimp-eating fish are Not compatible.",
    husbandry: [
      "Abbott (1952), quoted by the USFWS summary, gives adults from 6 to 40 mm, commonly about 25 mm. The checker uses 40 mm, the stated adult maximum.",
      "The checker uses 0–47.5°C. Miranda et al. (2010), quoted by the USFWS summary, say it can tolerate that span. That is a survival claim, not a recommended aquarium target. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a quilted melania need?",
        answer: "The checker uses 0–47.5°C. Miranda et al. (2010), quoted by the USFWS summary, say it can tolerate that span. That is a survival claim, not a recommended aquarium target. No pH range is stored."
      },
      {
        question: "Will a quilted melania eat tank mates?",
        answer: "Not scored as a predator. Fish that eat adult shrimp are Not compatible with this snail because of its size."
      }
    ]
  },
  "chinese-mystery-snail": {
    lede: "Chinese mystery snails (Cipangopaludina chinensis) reach 65 mm. The USFWS summary quotes 0–30°C and occurrences at pH 6.5–8.4. They are large snails, so they are not treated as cherry-shrimp prey. They are not scored as predators.",
    husbandry: [
      "Kipp et al. (2016), quoted by the USFWS summary, say it can reach 65 mm. The checker uses 65 mm.",
      "The checker uses 0–30°C and pH 6.5–8.4. The USFWS summary quotes the temperature limits from Kipp and Benson (2008) via Karatayev et al. (2009), and the pH from waters where it has been found (Jokinen 1982, 1992)."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a chinese mystery snail need?",
        answer: "The checker uses 0–30°C and pH 6.5–8.4. The USFWS summary quotes the temperature limits from Kipp and Benson (2008) via Karatayev et al. (2009), and the pH from waters where it has been found (Jokinen 1982, 1992)."
      },
      {
        question: "Will a chinese mystery snail eat tank mates?",
        answer: "Not scored as a predator of fish, shrimp, or other snails."
      }
    ]
  },
  "faucet-snail": {
    lede: "Faucet snails (Bithynia tentaculata) are small European snails, usually no larger than 12–15 mm, found at pH 6.6–8.4 in the USFWS summary. Temperature is not compared, because the summary gives breeding thresholds rather than a range. At 15 mm they are small-snail prey for fish that eat adult shrimp.",
    husbandry: [
      "Kipp et al. (2015), quoted by the USFWS summary, say the shell is usually no larger than 12–15 mm. The checker uses 15 mm.",
      "No min–max temperature is stored. The USFWS summary says egg-laying starts when water is 20°C or higher and that oocytes develop poorly at 30–34°C. Those are breeding notes, not a tolerance range, so the checker skips temperature."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a faucet snail need?",
        answer: "No min–max temperature is stored. The USFWS summary says egg-laying starts when water is 20°C or higher and that oocytes develop poorly at 30–34°C. Those are breeding notes, not a tolerance range, so the checker skips temperature."
      },
      {
        question: "Will a faucet snail eat tank mates?",
        answer: "Not scored as a predator. Shrimp-eating fish are Not compatible with them."
      }
    ]
  },
  "asian-clam": {
    lede: "Asian clams (Corbicula fluminea) are freshwater bivalves, usually under 25 mm and up to 65 mm. The USFWS summary quotes a tolerance of 2–30°C. They are not snails and not shrimp. A crayfish or prawn scored as eating tank mates is Not compatible with them.",
    husbandry: [
      "GISD (2005), quoted by the USFWS summary, says they are usually under 25 mm and can reach 50–65 mm (Aguirre and Poss 1999). The checker uses 65 mm.",
      "The checker uses 2–30°C. The USFWS summary quotes that tolerance from Balcom (1994) via GISD (2005). The Fahrenheit half of that sentence in the summary is incomplete, so Fahrenheit here is a conversion of the Celsius band. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a asian clam need?",
        answer: "The checker uses 2–30°C. The USFWS summary quotes that tolerance from Balcom (1994) via GISD (2005). The Fahrenheit half of that sentence in the summary is incomplete, so Fahrenheit here is a conversion of the Celsius band. No pH range is stored."
      },
      {
        question: "Will a asian clam eat tank mates?",
        answer: "Not scored as a predator. They filter feed."
      }
    ]
  },
  "new-zealand-mudsnail": {
    lede: "New Zealand mudsnails (Potamopyrgus antipodarum) are tiny invasive snails, to 12 mm in their native range and often 4–6 mm in the Great Lakes. The USFWS summary quotes a tolerance of 0–34°C. They are small-snail prey for fish that eat adult shrimp. This record is here so a hitchhiker can be checked, not as a shopping suggestion.",
    husbandry: [
      "Benson et al. (2015), quoted by the USFWS summary, say it is usually 4–6 mm in the Great Lakes and grows to 12 mm in its native range. The checker uses 12 mm.",
      "The checker uses 0–34°C. The USFWS summary quotes that tolerance from Cox and Rutherford (2000) and Zaranko et al. (1997). It is a tolerance, not a target. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a new zealand mudsnail need?",
        answer: "The checker uses 0–34°C. The USFWS summary quotes that tolerance from Cox and Rutherford (2000) and Zaranko et al. (1997). It is a tolerance, not a target. No pH range is stored."
      },
      {
        question: "Will a new zealand mudsnail eat tank mates?",
        answer: "Not scored as a predator."
      }
    ]
  },
  "red-swamp-crayfish": {
    lede: "Red swamp crayfish (Procambarus clarkii) are 5.5–12 cm crayfish. The checker uses an optimal 21–27°C and a tolerance of pH 5.8–10, both from the USFWS summary. They are Not compatible with shrimp, snails, and fish they can overpower. A longer fish stays at Caution because of the claws.",
    husbandry: [
      "Nagy et al. (2015), quoted by the USFWS summary, give adults 5.5–12 cm. The checker uses 120 mm.",
      "The checker uses 21–27°C, the optimal band Ackefors (1999) gives in the USFWS summary. Growth is inhibited below 12°C. The same summary quotes a very wide pH tolerance of 5.8–10 (Huner and Barr 1991). That pH is a tolerance, not a target."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a red swamp crayfish need?",
        answer: "The checker uses 21–27°C, the optimal band Ackefors (1999) gives in the USFWS summary. Growth is inhibited below 12°C. The same summary quotes a very wide pH tolerance of 5.8–10 (Huner and Barr 1991). That pH is a tolerance, not a target."
      },
      {
        question: "Will a red swamp crayfish eat tank mates?",
        answer: "Yes. They are scored as predators of shrimp, snails, and fish at or under their own length."
      }
    ]
  },
  "redclaw-crayfish": {
    lede: "Redclaw crayfish (Cherax quadricarinatus) reach about 250 mm, or up to 35 cm in one sentence of the USFWS summary. The checker uses 23–31°C for growth and pH 6.5–8 from the Jones culture notes. They are Not compatible with shrimp, snails, and fish they can overpower.",
    husbandry: [
      "Ahyong and Yeo (2007), quoted by the USFWS summary, say about 250 mm total length. CABI, in the same summary, says up to 35 cm and seldom longer. The checker uses 250 mm.",
      "The checker uses 23–31°C, the band in which the USFWS summary says more than 70 percent of adult growth occurs (CABI 2016, citing King 1994). pH 6.5–8.0 is the culture range in the Jones notes. Hardness is only given as above 40 ppm, so no dGH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a redclaw crayfish need?",
        answer: "The checker uses 23–31°C, the band in which the USFWS summary says more than 70 percent of adult growth occurs (CABI 2016, citing King 1994). pH 6.5–8.0 is the culture range in the Jones notes. Hardness is only given as above 40 ppm, so no dGH range is stored."
      },
      {
        question: "Will a redclaw crayfish eat tank mates?",
        answer: "Yes. Shrimp, snails, and fish at or under this length are Not compatible."
      }
    ]
  },
  "marbled-crayfish": {
    lede: "Marbled crayfish (Procambarus virginalis) are parthenogenetic crayfish with a recorded maximum of about 11 cm. The checker uses the 18–25°C culture band from Kaldre et al. (2015), not the wider survival temperatures. They are Not compatible with shrimp, snails, and fish they can overpower. Do not release them.",
    husbandry: [
      "Vogt et al. (2018), quoted by the USFWS summary, give a maximum of about 11 cm. The checker uses 110 mm.",
      "The checker uses 18–25°C. Kaldre et al. (2015), quoted by the USFWS summary, say marbled crayfish are best cultured at 18–25°C and can withstand below 8°C and above 30°C for weeks, with rising mortality. The culture band is what the checker uses. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a marbled crayfish need?",
        answer: "The checker uses 18–25°C. Kaldre et al. (2015), quoted by the USFWS summary, say marbled crayfish are best cultured at 18–25°C and can withstand below 8°C and above 30°C for weeks, with rising mortality. The culture band is what the checker uses. No pH range is stored."
      },
      {
        question: "Will a marbled crayfish eat tank mates?",
        answer: "Yes. They are scored as predators of shrimp, snails, and fish at or under their length."
      }
    ]
  },
  "mexican-dwarf-crayfish": {
    lede: "Mexican dwarf crayfish (Cambarellus patzcuarensis) in the aquarium trade measured 17–22 mm in the study quoted by the USFWS summary. The tolerance used here is 10–26°C. They are Not compatible with shrimp and snails. A fish longer than 22 mm stays at Caution, because this record does not have a larger wild maximum.",
    husbandry: [
      "Mrugała et al. (2015), quoted by the USFWS summary, measured aquarium-trade animals at 17–22 mm, average 19.7 mm. The checker uses 22 mm. A wild maximum is not in that summary.",
      "The checker uses 10–26°C. Papavlasopoulou et al. (2014), quoted by the USFWS summary, list that tolerance. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a mexican dwarf crayfish need?",
        answer: "The checker uses 10–26°C. Papavlasopoulou et al. (2014), quoted by the USFWS summary, list that tolerance. No pH range is stored."
      },
      {
        question: "Will a mexican dwarf crayfish eat tank mates?",
        answer: "Yes for shrimp and snails. Fish longer than 22 mm are Caution, not automatically a meal."
      }
    ]
  },
  "yabby": {
    lede: "Yabbies in this record are Cherax albidus, the name on the USFWS summary, which also says Cherax destructor may be the same species. Average length is 7–10 cm. The checker uses a preferred 15–26°C and pH 7.5–10. They are Not compatible with shrimp, snails, and fish they can overpower.",
    husbandry: [
      "Australian Blue Yabby Aquaculture (2012), quoted by the USFWS summary, says the average dam yabby is 7–10 cm. The checker uses 100 mm. A maximum length is not given; a maximum weight of 220 g is.",
      "The checker uses the preferred 15–26°C. The same quotation says adults tolerate 1–35°C and juveniles do not survive above 30°C. pH 7.5–10 is the alkaline preference in that quotation. The preferred band is what the checker uses."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a yabby need?",
        answer: "The checker uses the preferred 15–26°C. The same quotation says adults tolerate 1–35°C and juveniles do not survive above 30°C. pH 7.5–10 is the alkaline preference in that quotation. The preferred band is what the checker uses."
      },
      {
        question: "Will a yabby eat tank mates?",
        answer: "Yes. Shrimp, snails, and fish at or under 10 cm are Not compatible."
      }
    ]
  },
  "rusty-crayfish": {
    lede: "Rusty crayfish (Faxonius rusticus) are about 4 inches in the body, plus claws. The checker uses a preferred 20–25°C. They are Not compatible with shrimp, snails, and fish at or under that body length. The older name Orconectes rusticus is what the USFWS summary prints.",
    husbandry: [
      "ANSIS (2011), quoted by the USFWS summary, says roughly 4 inches from head to tail, plus about 2 inches of claws (Lodge et al. 1985). The checker uses 4 inches, 102 mm, and does not add the claws to the body length.",
      "The checker uses the preferred 20–25°C (Mundahl and Benton 1990). The same quotation says native Ohio waters can run from near 0°C to 39°C. That exposure is not the checker range. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a rusty crayfish need?",
        answer: "The checker uses the preferred 20–25°C (Mundahl and Benton 1990). The same quotation says native Ohio waters can run from near 0°C to 39°C. That exposure is not the checker range. No pH range is stored."
      },
      {
        question: "Will a rusty crayfish eat tank mates?",
        answer: "Yes. Shrimp, snails, and fish no longer than the body are Not compatible."
      }
    ]
  },
  "giant-river-prawn": {
    lede: "Giant river prawns (Macrobrachium rosenbergii) reach 320 mm in males. The USFWS summary quotes a tolerance of 14–35°C, best growth at 29–31°C, and an optimal pH of 7.0–8.5. Adults live in freshwater and the larvae need brackish water. They are Not compatible with shrimp, snails, and fish they can overpower.",
    husbandry: [
      "CABI (2018), quoted by the USFWS summary, gives males 320 mm and females 250 mm total length (Holthuis 1980). The checker uses 320 mm.",
      "The checker uses the stated tolerance of 14–35°C and the optimal pH of 7.0–8.5 (New 1995, via Cheng and Chen 1998 in the USFWS summary). Optimal growth temperature is 29–31°C and is named on the page, not used as the whole range. Adults are freshwater. Larvae need brackish water."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a giant river prawn need?",
        answer: "The checker uses the stated tolerance of 14–35°C and the optimal pH of 7.0–8.5 (New 1995, via Cheng and Chen 1998 in the USFWS summary). Optimal growth temperature is 29–31°C and is named on the page, not used as the whole range. Adults are freshwater. Larvae need brackish water."
      },
      {
        question: "Will a giant river prawn eat tank mates?",
        answer: "Yes. Other shrimp, snails, and fish at or under this length are Not compatible. The prawn itself is not scored as prey."
      }
    ]
  },
  "assassin-snail": {
    lede: "Assassin snails (Anentome helena) eat other snails. The USFWS summary quotes a maximum length of about 30 mm. Temperature and pH are not compared, because the only numbers are a narrow set of collection sites. They are Not compatible with every other snail in this set, and fish that eat adult shrimp are Not compatible with them.",
    husbandry: [
      "CABI (2018), quoted by the USFWS summary, says maximum length is around 30 mm and usually smaller. The checker uses 30 mm.",
      "No temperature range is stored. Ng et al. (2016), quoted by the USFWS summary, measured collection sites at 30.5–31.6°C and pH 7.11–7.29. That is a snapshot of a few sites, not a tolerance, so the checker skips temperature and pH."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a assassin snail need?",
        answer: "No temperature range is stored. Ng et al. (2016), quoted by the USFWS summary, measured collection sites at 30.5–31.6°C and pH 7.11–7.29. That is a snapshot of a few sites, not a tolerance, so the checker skips temperature and pH."
      },
      {
        question: "Will a assassin snail eat tank mates?",
        answer: "Yes, other snails. They are not scored as hunters of fish. Fish that eat shrimp are Not compatible with this snail because it is only 30 mm."
      }
    ]
  },
  "colombian-ramshorn": {
    lede: "Colombian ramshorns (Marisa cornuarietis) are apple snails with shells 48–56 mm high. The species page warns against prolonged temperatures below 12°C and does not give a ceiling, so temperature is not compared. The care guide reports that they eat other snails. Other snails in this set are Not compatible.",
    husbandry: [
      "The Apple Snail Website gives shell height 48–56 mm. The checker uses 56 mm.",
      "No min–max temperature is stored. The species page says temperature should not stay below 12°C for prolonged periods and does not print an upper limit. The apple-snail care guide's 18–28°C optimum is not copied onto this species, because this page already has a species-specific cold warning and no matching ceiling."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a colombian ramshorn need?",
        answer: "No min–max temperature is stored. The species page says temperature should not stay below 12°C for prolonged periods and does not print an upper limit. The apple-snail care guide's 18–28°C optimum is not copied onto this species, because this page already has a species-specific cold warning and no matching ceiling."
      },
      {
        question: "Will a colombian ramshorn eat tank mates?",
        answer: "Yes, other snails. They are not scored as hunters of fish."
      }
    ]
  },
  "hairy-marron": {
    lede: "Hairy marron (Cherax tenuimanus) are very large crayfish, quoted at more than 380 mm. Growth is given as 11–30°C, with 24°C optimal. They are Not compatible with shrimp, snails, and fish they can overpower, which is nearly everything else in this set.",
    husbandry: [
      "Invasive Species South Africa (2017), quoted by the USFWS summary, says marron can grow to more than 380 mm. The checker uses 380 mm. The same sentence is easy to mix up with smooth marron; the temperature sentence in the summary names C. tenuimanus.",
      "The checker uses 11–30°C. Anchor Environmental, quoted by the USFWS hairy-marron summary, says growth of C. tenuimanus occurs between 11 and 30°C, with 24°C optimal. No pH range is stored."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a hairy marron need?",
        answer: "The checker uses 11–30°C. Anchor Environmental, quoted by the USFWS hairy-marron summary, says growth of C. tenuimanus occurs between 11 and 30°C, with 24°C optimal. No pH range is stored."
      },
      {
        question: "Will a hairy marron eat tank mates?",
        answer: "Yes. Almost every fish, shrimp, and snail in this set is small enough to be Not compatible."
      }
    ]
  },
  "smooth-marron": {
    lede: "Smooth marron (Cherax cainii) are quoted at 380 mm and up to 2.7 kg. The USFWS summary does not print a numeric temperature, so temperature is not compared. They are Not compatible with shrimp, snails, and fish they can overpower.",
    husbandry: [
      "Bryant and Papas (2007), quoted by the USFWS summary, give 380 mm and up to 2.7 kg (Merrick and Lambert 1991; Molony et al. 2004). The checker uses 380 mm.",
      "No numeric temperature is stored. The USFWS summary only says the climate has a warm summer and a cold winter. A number is not invented from that phrase."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a smooth marron need?",
        answer: "No numeric temperature is stored. The USFWS summary only says the climate has a warm summer and a cold winter. A number is not invented from that phrase."
      },
      {
        question: "Will a smooth marron eat tank mates?",
        answer: "Yes. Size alone makes shrimp, snails, and ordinary aquarium fish Not compatible. Temperature is not part of that verdict."
      }
    ]
  },
  "white-river-crayfish": {
    lede: "White river crayfish (Procambarus acutus) can reach 5 inches. The USFWS summary says their natural temperature requirements are unknown, so temperature is not compared. They are Not compatible with shrimp, snails, and fish at or under 5 inches.",
    husbandry: [
      "Benson (2015), quoted by the USFWS summary, says it can reach 5 inches. The checker uses 127 mm. The smallest breeding male cited is about 72 mm, which is not the maximum.",
      "No numeric temperature is stored. CABI (2015), quoted by the USFWS summary, says nothing is known about its environmental requirements in natural conditions. A culture anecdote about seasonal mortality is not a min–max range."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a white river crayfish need?",
        answer: "No numeric temperature is stored. CABI (2015), quoted by the USFWS summary, says nothing is known about its environmental requirements in natural conditions. A culture anecdote about seasonal mortality is not a min–max range."
      },
      {
        question: "Will a white river crayfish eat tank mates?",
        answer: "Yes for shrimp, snails, and fish no longer than 5 inches. Temperature is not part of that verdict."
      }
    ]
  },
  "spiny-cheek-crayfish": {
    lede: "Spiny-cheek crayfish (Faxonius limosus) reach just over 11 cm. The USFWS summary does not print a numeric temperature, so temperature is not compared. They are Not compatible with shrimp, snails, and fish at or under that length.",
    husbandry: [
      "Aldridge (2011), quoted by the USFWS summary, says the largest specimens reach just over 11 cm. The checker uses 110 mm.",
      "No numeric temperature is stored. The USFWS summary says adults tolerate low temperatures and does not print a range."
    ],
    tankMateIntro: "",
    faqs: [
      {
        question: "What temperature does a spiny-cheek crayfish need?",
        answer: "No numeric temperature is stored. The USFWS summary says adults tolerate low temperatures and does not print a range."
      },
      {
        question: "Will a spiny-cheek crayfish eat tank mates?",
        answer: "Yes for shrimp, snails, and fish no longer than 11 cm."
      }
    ]
  },
  "red-rimmed-melania": {
    lede: "Red-rimmed melania (Melanoides tuberculata) is the Malaysian trumpet snail. The USGS fact sheet gives an average shell of 20–27 mm and a maximum of 80 mm. NeoBiota quotes a temperature range of about 18–32°C. The checker uses 27 mm and 18–32°C. At that average length it is treated as a small snail, so fish scored as eating adult shrimp are Not compatible with it. No pH range is stored.",
    husbandry: [
      "The USGS fact sheet gives an average shell length of 20–27 mm and a maximum of 80 mm, citing India Biodiversity Portal (2018). The checker uses 27 mm, the top of the average, and keeps 80 mm as a maximum that is not the pairing length.",
      "NeoBiota quotes a temperature range of about 18–32°C from Mitchell and Brandt (2005). A 2022 review printed 18–31°C. The checker uses 18–32°C and does not average the two."
    ],
    tankMateIntro: "",
    faqs: [
      { question: "How big does a red-rimmed melania get?", answer: "The USGS fact sheet gives an average of 20–27 mm and a maximum of 80 mm. This checker uses 27 mm for pairing." },
      { question: "What temperature does a red-rimmed melania need?", answer: "The checker uses about 18–32°C, the range NeoBiota quotes from Mitchell and Brandt (2005)." }
    ]
  },
  "ghost-shrimp": {
    lede: "Ghost shrimp in this record are Palaemon paludosus, the eastern grass shrimp. The USGS fact sheet says adults reach 50 mm and prefer 10–35°C. They are shrimp, so a fish scored as eating adult shrimp is Not compatible with them. That predation label is this site's shrimp rule, not a trial that used this species. No pH range is stored.",
    husbandry: [
      "The USGS fact sheet says up to 50 mm total length, citing Baranowski (2011), and a preferred temperature of 10–35°C from Christmas and Langley (1973).",
      "GBIF accepts Palaemon paludosus. The USGS page still prints Palaemonetes paludosus. The fact sheet says the animal is primarily freshwater and can occur in brackish water. The record stays freshwater."
    ],
    tankMateIntro: "",
    faqs: [
      { question: "Can a betta live with ghost shrimp?", answer: "Not on this checker. Ghost shrimp are shrimp, and a betta is scored as eating adult shrimp. The temperature bands can overlap. The predation rule still fails the pair." },
      { question: "What temperature do ghost shrimp need?", answer: "The USGS fact sheet quotes a preferred range of 10–35°C from Christmas and Langley (1973)." }
    ]
  },
  "signal-crayfish": {
    lede: "Signal crayfish (Pacifastacus leniusculus) males reach 16 cm in the USFWS summary. NEMESIS lists a tolerance of 7.5–32°C from two papers. That span is a tolerance, not a preferred aquarium target. They are Not compatible with shrimp, snails, and fish they can overpower. pH is left blank because the summary only says they are not found below pH 6.",
    husbandry: [
      "GISD, quoted by the USFWS summary, says males reach 16 cm from rostrum to telson and females 12 cm. The checker uses 160 mm.",
      "NEMESIS lists a minimum of 7.5°C (Westhoff and Rosenberger 2016) and a maximum of 32°C (Becker, Genoway, and Merrill 1975). E-Fauna BC, citing Bondar et al. (2005), says the species prefers temperatures under 25°C. The checker uses the wider tolerance and names the preference."
    ],
    tankMateIntro: "",
    faqs: [
      { question: "How big does a signal crayfish get?", answer: "The USFWS summary quotes 16 cm for males and 12 cm for females. The checker uses 16 cm." },
      { question: "Will a signal crayfish eat tank mates?", answer: "Yes. It is scored as a crayfish that eats shrimp, snails, and fish at or under its length. That score is this site's crayfish rule." }
    ]
  },
  "bamboo-shrimp": {
    lede: "Bamboo shrimp (Atyopsis moluccensis) are fan shrimp from fast hill streams. The USFWS summary quotes Petshrimp for 8–12 cm and 73–84°F, and Aquatic Arts for 2–3 inches. The checker uses 12 cm and 73–84°F. Those figures come from keeper pages, not a field study. They are shrimp, so fish scored as eating adult shrimp are Not compatible with them.",
    husbandry: [
      "Petshrimp, quoted by the USFWS summary, gives 8–12 cm. Aquatic Arts, in the same summary, gives 2–3 inches. The checker uses 12 cm and names the smaller figure.",
      "The same Petshrimp quotation says a tropical species is best kept at 73–84°F. Iwata et al. (2003), also quoted there, say the shrimp selected water moving at 20–60 cm per second, so flow is recorded as current."
    ],
    tankMateIntro: "",
    faqs: [
      { question: "What temperature does a bamboo shrimp need?", answer: "The USFWS summary quotes 73–84°F from Petshrimp. That is a keeper page, not a field measurement, and the page says so." },
      { question: "Will a bamboo shrimp eat fish?", answer: "No. It filters particles from the current. Fish scored as eating adult shrimp are Not compatible with it, because this record is a shrimp." }
    ]
  }
};
