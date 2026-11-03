#!/usr/bin/env python3
"""One-shot corrections from the species review. Safe to re-run; it no-ops once applied."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Seriously Fish temperament line is "peaceful", and the behaviour text does not
# say this fish eats smaller tankmates. The stored semi-aggressive flag came from
# the word "aggressive" in a warning about other fish.
PEACEFUL_LINE = {
    "green-neon-tetra",
    "diamond-tetra",
    "giant-danio",
    "panda-cory",
    "sterbas-cory",
    "three-lined-cory",
    "upside-down-catfish",
    "zebra-loach",
    "clown-loach",
    "pearl-gourami",
    "keyhole-cichlid",
    "schwartzs-cory",
    "yo-yo-loach",
    "polka-dot-loach",
    "three-lined-pencilfish",
    "lyretail-checkerboard-cichlid",
    "coral-red-pencilfish",
    "zebra-oto",
    "elephantnose-fish",
    "sawbwa-barb",
}

# No temperament line was parsed. The behaviour section's own assessment of this
# fish is peaceful (or a community fish). Not a keyword in a warning.
PEACEFUL_FROM_BEHAVIOUR = {
    "filament-barb": "Seriously Fish calls it an ideal addition to a peaceful community.",
    "dwarf-chain-loach": "Seriously Fish calls it an excellent community fish and says some keepers consider it peaceful.",
    "tiger-hillstream-loach": "Seriously Fish says Sewellia are not generally aggressive towards dissimilar fish.",
    "kissing-gourami": "Seriously Fish says it suits a larger community with robust fish and cannot eat anything larger than a few millimetres.",
    "celestial-pearl-danio": "Seriously Fish says it is intimidated by boisterous tankmates, which is a shy fish, not an aggressor.",
    "red-eye-tetra": "Seriously Fish calls it a robust community fish. Boisterous is not the same as aggressive.",
    "ram": "Seriously Fish does not call the ram aggressive. It is a poor competitor that needs clean water.",
    "bolivian-ram": "Seriously Fish does not call the Bolivian ram aggressive. It is a poor competitor that needs clean water.",
    "banded-gourami": "Seriously Fish says it suits most peaceful community tanks. Males can spar when spawning.",
    "wrestling-halfbeak": "Seriously Fish says it can be kept with similarly sized peaceful fish.",
    "chocolate-gourami": "Seriously Fish says it is slow and easily intimidated, and names peaceful cyprinids as tankmates.",
    "horseface-loach": "Seriously Fish pairs it with rasboras and danios in the upper water. It does not call the loach aggressive.",
    "mascara-barb": "Seriously Fish calls it an ideal addition to a peaceful riverine community.",
    "black-lined-loach": "Seriously Fish says it is mild and can be an excellent community fish.",
    "vaillants-chocolate-gourami": "Seriously Fish says it is slow and easily intimidated, like the other chocolate gourami.",
    "madagascan-rainbow-fish": "Seriously Fish calls it undemanding and non-aggressive.",
}

# Peaceful quick-fact, but the behaviour section says this fish eats smaller fish.
KEEP_SEMI_NOTE = {
    "angelfish": "Seriously Fish's temperament line is peaceful, and the behaviour section says it may eat small fish such as tetras. The checker stays at Caution with smaller tankmates for that reason.",
    "firemouth-cichlid": "Seriously Fish's temperament line is peaceful. The behaviour section says it is territorial when breeding and may eat much smaller fishes, so the checker stays at Caution.",
}

# Small-mouthed bottom fish flagged as adult-shrimp predators by length plus a sifting diet.
SHRIMP_JUVENILES = {"kuhli-loach", "black-kuhli-loach", "hognose-brochis", "zebra-loach"}

BOILER = (
    "The behaviour section describes aggression or a territorial adult, so peaceful tankmates stay at Caution "
    "even when the water overlaps. This is not a green community fish on the source used here."
)
PEACEFUL_SENTENCE = (
    "Seriously Fish's own assessment of this fish is peaceful. The checker uses that. "
    "A warning about other species is not this fish's temperament."
)

PROFILE_FILES = [
    ROOT / "data" / "added-profiles.ts",
    ROOT / "data" / "wave2-profiles.ts",
]
COPY_FILES = [
    ROOT / "data" / "added-copy.ts",
    ROOT / "data" / "wave2-copy.ts",
]


def blocks(text: str, kind: str) -> list[tuple[str, str, int, int]]:
    """Return (slug, block, start, end) for each species object."""
    pattern = (
        r'\n  \{\n    slug: "([^"]+)"'
        if kind == "profile"
        else r'\n  "([^"]+)": \{'
    )
    found = []
    for match in re.finditer(pattern, text):
        start = match.start() + 1
        found.append((match.group(1), start))
    spans = []
    for index, (slug, start) in enumerate(found):
        end = found[index + 1][1] - 1 if index + 1 < len(found) else len(text)
        spans.append((slug, text[start:end], start, end))
    return spans


def patch_profile_block(slug: str, block: str) -> str:
    if slug in PEACEFUL_LINE or slug in PEACEFUL_FROM_BEHAVIOUR:
        block = block.replace('temperament: "semi-aggressive"', 'temperament: "peaceful"', 1)
        if slug in PEACEFUL_FROM_BEHAVIOUR:
            note = PEACEFUL_FROM_BEHAVIOUR[slug]
        else:
            note = (
                "Seriously Fish's temperament line is peaceful. The checker uses that line. "
                "The word aggressive in a warning about other fish is not this species' temperament."
            )
        if note[:48] not in block:
            block = block.replace(
                'careLevelNote: "',
                f'careLevelNote: "{note} ',
                1,
            )
    if slug in KEEP_SEMI_NOTE and KEEP_SEMI_NOTE[slug][:48] not in block:
        block = block.replace(
            'careLevelNote: "',
            f'careLevelNote: "{KEEP_SEMI_NOTE[slug]} ',
            1,
        )
    if slug in SHRIMP_JUVENILES:
        block = block.replace('shrimpRisk: "adults"', 'shrimpRisk: "juveniles"', 1)
        block = re.sub(
            r'diet: "At \d+ mm and with animal prey in the Seriously Fish diet notes, an adult [^"]+?is scored as able to eat an adult cherry shrimp\. That is a predation result, not a water-chemistry result\."',
            'diet: "The diet is a sifting micropredator diet. Body length alone does not make this small-mouthed bottom fish a hunter of an adult cherry shrimp. Shrimplets are still small enough to be food."',
            block,
            count=1,
        )
        block = re.sub(
            r'shrimpRiskNote: "Seriously Fish describes animal prey, and at \d+ mm standard length an adult can take an adult cherry shrimp\. Shrimp are scored as prey\."',
            'shrimpRiskNote: "Small crustaceans in a sifting diet are not the same as hunting an adult cherry shrimp. Newly hatched shrimplets are still at risk."',
            block,
            count=1,
        )
    if slug == "kuhli-loach" and "source-limited" not in block:
        block = block.replace(
            "uncertainties: []",
            """uncertainties: [
      {
        field: "FishBase water and size",
        note: "The FishBase summary for Pangio semicincta prints the family and a distribution and does not print temperature, pH, hardness, or max length. Those fields are source-limited to the Seriously Fish profile. No FishBase number was invented to fill the gap."
      }
    ]""",
            1,
        )
    if slug == "glowlight-rasbora-hengeli":
        block = block.replace('slug: "glowlight-rasbora-hengeli"', 'slug: "hengels-rasbora"', 1)
        block = block.replace(
            'commonName: "Glowlight rasbora (Trigonostigma hengeli)"',
            'commonName: "Hengel\'s rasbora"',
            1,
        )
        block = block.replace(
            """aliases: [
      "glowlight rasbora",
      "trigonostigma hengeli"
    ]""",
            """aliases: [
      "hengel's rasbora",
      "lambchop rasbora",
      "trigonostigma hengeli",
      "glowlight rasbora"
    ]""",
            1,
        )
        block = block.replace(
            """{
        field: "Common name",
        note: "Seriously Fish's page title does not print a common name. This record uses Glowlight rasbora, the common name printed in the FishBase title."
      }""",
            """{
        field: "Common name",
        note: "Seriously Fish's title does not print a common name, and FishBase's title says Glowlight rasbora, the same trade name it uses for Trigonopoma pauciperforatum. This record uses Hengel's rasbora, the established name for Trigonostigma hengeli, so the two species are not the same page. Lambchop rasbora is kept as an alias. Trigonostigma espei keeps that common name."
      }""",
            1,
        )
        # Drop the duplicate-title uncertainty if the renamed record still has it.
        block = re.sub(
            r',\s*\{\s*field: "Common name",\s*note: "FishBase prints “Glowlight rasbora”[\s\S]*?\}',
            "",
            block,
            count=1,
        )
    if slug == "sawbwa-barb":
        block = block.replace('slug: "sawbwa-barb"', 'slug: "sawbwa"', 1)
        block = block.replace('commonName: "Sawbwa barb"', 'commonName: "Rummy-nose rasbora / Sawbwa"', 1)
        block = block.replace('family: "Cyprinidae"', 'family: "Danionidae"', 1)
        block = block.replace(
            """aliases: [
      "sawbwa barb",
      "sawbwa resplendens"
    ]""",
            """aliases: [
      "rummy-nose rasbora",
      "sawbwa",
      "sawbwa resplendens",
      "asian rummy-nose"
    ]""",
            1,
        )
        block = block.replace("Sawbwa barb", "Rummy-nose rasbora / Sawbwa")
        if "Danionidae" not in block.split("uncertainties:")[-1]:
            block = block.replace(
                "uncertainties: [",
                """uncertainties: [
      {
        field: "Family",
        note: "The FishBase summary still prints Cyprinidae. The other rasboras and danios in this set are filed as Danionidae, which is the current family for Sawbwa. The checker uses Danionidae so the family filter matches the rest of the danionins."
      },""",
                1,
            )
    return block


def patch_copy_block(slug: str, block: str) -> str:
    if slug in PEACEFUL_LINE or slug in PEACEFUL_FROM_BEHAVIOUR:
        block = block.replace(BOILER, PEACEFUL_SENTENCE)
    if slug == "angelfish":
        block = block.replace(BOILER, KEEP_SEMI_NOTE["angelfish"])
    if slug == "firemouth-cichlid":
        block = block.replace(BOILER, KEEP_SEMI_NOTE["firemouth-cichlid"])
    if slug in SHRIMP_JUVENILES:
        block = re.sub(
            r"At \d+ mm and with animal prey in the Seriously Fish diet notes, an adult [^.]+\. That is a predation result, not a water-chemistry result\.",
            "The diet is a sifting micropredator diet. Body length alone does not make this small-mouthed bottom fish a hunter of an adult cherry shrimp. Shrimplets are still small enough to be food.",
            block,
            count=1,
        )
    if slug == "glowlight-rasbora-hengeli":
        block = block.replace('"glowlight-rasbora-hengeli"', '"hengels-rasbora"', 1)
        block = block.replace("Glowlight rasbora (Trigonostigma hengeli)", "Hengel's rasbora (Trigonostigma hengeli)")
        block = block.replace("Glowlight rasbora", "Hengel's rasbora")
    if slug == "sawbwa-barb":
        block = block.replace('"sawbwa-barb"', '"sawbwa"', 1)
        block = block.replace("Sawbwa barb", "Rummy-nose rasbora / Sawbwa")
        block = block.replace("the family Cyprinidae", "the family Danionidae")
    return block


def apply(path: Path, kind: str) -> None:
    text = path.read_text()
    pieces = []
    last = 0
    changed = 0
    for slug, block, start, end in blocks(text, kind):
        pieces.append(text[last:start])
        new = patch_profile_block(slug, block) if kind == "profile" else patch_copy_block(slug, block)
        if new != block:
            changed += 1
        pieces.append(new)
        last = end
    pieces.append(text[last:])
    path.write_text("".join(pieces))
    print(f"{path.name}: {changed} blocks changed")


def main() -> None:
    for path in PROFILE_FILES:
        apply(path, "profile")
    for path in COPY_FILES:
        apply(path, "copy")


if __name__ == "__main__":
    main()
