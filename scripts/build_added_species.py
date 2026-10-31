#!/usr/bin/env python3
"""Fetch Seriously Fish and FishBase profiles and write added species records.

Numbers on the generated records are parsed from those two pages. Prose is
written here from those numbers. Species missing a husbandry range, or missing
a FishBase page, are skipped and listed in data/dropped-species.json.
"""

from __future__ import annotations

import html as html_lib
import json
import re
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ACCESSED = "2026-10-31"
UA = "TankMateMatch/1.0 (species research; +https://tankmatematch.com)"

# Priority order. The first 90 that clear both sources are kept.
CANDIDATES = """
paracheirodon-axelrodi
paracheirodon-simulans
hyphessobrycon-amandae
hyphessobrycon-herbertaxelrodi
hyphessobrycon-pulchripinnis
hyphessobrycon-megalopterus
hyphessobrycon-eques
hyphessobrycon-erythrostigma
hyphessobrycon-bentosi
hyphessobrycon-rosaceus
hyphessobrycon-flammeus
hyphessobrycon-sweglesi
hemigrammus-erythrozonus
hemigrammus-rhodostomus
hemigrammus-ocellifer
petitella-georgiae
petitella-bleheri
hemigrammus-bleheri
phenacogrammus-interruptus
thayeria-boehlkei
pristella-maxillaris
moenkhausia-pittieri
moenkhausia-sanctaefilomenae
gymnocorymbus-ternetzi
hasemania-nana
nematobrycon-palmeri
aphyocharax-anisitsi
inpaichthys-kerri
nannostomus-beckfordi
nannostomus-marginatus
nannostomus-eques
nannostomus-trifasciatus
carnegiella-strigata
gasteropelecus-sternicla
copella-arnoldi
ladigesia-roloffi
boraras-brigittae
boraras-maculatus
boraras-merah
trigonostigma-espei
trigonostigma-hengeli
rasbora-trilineata
rasbora-borapetensis
rasbora-einthovenii
danio-margaritatus
danio-albolineatus
danio-kyathit
devario-malabaricus
danio-choprae
celestichthys-choprae
tanichthys-albonubes
tanichthys-micagemmae
puntius-titteya
puntigrus-tetrazona
pethia-conchonius
pethia-padamya
pethia-nigrofasciata
pethia-gelius
sahyadria-denisonii
puntius-denisonii
oliotius-oligolepis
barbodes-semifasciolatus
puntius-semifasciolatus
crossocheilus-langei
epalzeorhynchos-frenatum
epalzeorhynchos-bicolor
dawkinsia-filamentosa
poecilia-wingei
poecilia-sphenops
poecilia-latipinna
xiphophorus-hellerii
xiphophorus-variatus
heterandria-formosa
corydoras-panda
hoplisoma-panda
corydoras-paleatus
hoplisoma-paleatum
corydoras-sterbai
hoplisoma-sterbai
corydoras-pygmaeus
gastrodermus-pygmaeus
corydoras-julii
hoplisoma-julii
corydoras-habrosus
gastrodermus-habrosus
corydoras-adolfoi
hoplisoma-adolfoi
corydoras-trilineatus
hoplisoma-trilineatum
brochis-splendens
otocinclus-vittatus
otocinclus-affinis
panaqolus-maccus
kryptopterus-vitreolus
synodontis-nigriventris
pimelodus-pictus
pangio-kuhlii
pangio-semicincta
botia-striata
ambastaia-sidthimunki
yasuhikotakia-sidthimunki
chromobotia-macracanthus
sewellia-lineolata
misgurnus-anguillicaudatus
trichogaster-lalius
trichopodus-leerii
trichopodus-trichopterus
trichopsis-pumila
trichopsis-vittata
helostoma-temminckii
macropodus-opercularis
betta-imbellis
pterophyllum-scalare
mikrogeophagus-ramirezi
mikrogeophagus-altispinosus
apistogramma-cacatuoides
apistogramma-agassizii
pelvicachromis-pulcher
amatitlania-nigrofasciata
cleithracara-maronii
andinoacara-pulcher
thorichthys-meeki
laetacara-curviceps
melanotaenia-boesemani
melanotaenia-praecox
melanotaenia-lacustris
iriatherina-werneri
marosatherina-ladigesi
bedotia-geayi
pseudomugil-gertrudae
pseudomugil-furcatus
tateurndina-ocellicauda
dario-dario
carinotetraodon-travancoricus
pantodon-buchholzi
aplocheilus-lineatus
epiplatys-annulatus
glossolepis-incisus
chilatherina-bleheri
hyphessobrycon-peruvianus
bohlkea-fredcochui
carydoras-panda
farlowella-acus
otocinclus-cocama
pangio-myersi
botia-lohachata
syncrossus-berdmorei
chromobotia
danio-nigrofasciatus
rasbora-paviana
trigonopoma-pauciperforatum
sundadanio-axelrodi
sawbwa-resplendens
celestichthys-erythromicron
microdevario-kubotai
boraras-uros
pethia-ticto
puntius-sophore
barbus-fasciolatus
enteromius-fasciolatus
neolebias-ansorgii
ladigesia
arnoldichthys-spilopterus
phenacogrammus-aurantiacus
alestopetersius-caudalis
nannostomus-mortenthaleri
copella-nattereri
pyrrhulina-vittata
carnegiella-marthae
thoracocharax-stellatus
hyphessobrycon-elachys
hyphessobrycon-socolofi
hyphessobrycon-vilmae
hemigrammus-ulreyi
hyphessobrycon-colombianus
mikrogeophagus
dicrossus-filamentosus
apistogramma-borellii
apistogramma-nijsseni
taeniacara-candidi
crenicara
laetacara-dorsigera
cryptoheros-spilurus
amatitlania-siquia
herotilapia-multispinosa
mesonauta-insignis
pterophyllum-altum
symphysodon-aequifasciatus
symphysodon-discus
uara-amphiacanthoides
melanotaenia-trifasciata
melanotaenia-parkinsoni
pseudomugil-paskai
pseudomugil-luminatus
popondichthys-furcatus
iriatherina
marosatherina
bedotia-madagascariensis
poecilia-salvatoris
xiphophorus-montezumae
limia-perugiae
phalloceros-caudimaculatus
gambusia-affinis
corydoras-aeneus
osteogaster-aenea
corydoras-rabauti
hoplisoma-rabauti
corydoras-similis
corydoras-elegans
gastrodermus-elegans
scleromystax-barbatus
dianema-urostriatum
callichthys-callichthys
megalechis-thoracata
hoplosternum-littorale
ancistrus-cirrhosus
panaqolus-albivermis
hypancistrus-zebra
otocinclus-macrospilus
parotocinclus
farlowella-vittata
sturisoma-panamense
chaetostoma-milesi
synodontis-petricola
synodontis-eupterus
synodontis-angelicus
microsynodontis
kryptopterus-macrocephalus
pangio-shelfordii
leptobotia-guilinensis
yasuhikotakia-morleti
botia-kubotai
chromobotia-macracanthus
sewellia
gastromyzon
beaufortia-leveretti
homaloptera-orthogoniata
crossocheilus-reticulatus
garra-rufa
epalzeorhynchos-kalopterus
labeo-bicolor
dawkinsia-assimilis
haludaria-fasciata
pethia-setnai
rasbora-elegans
rasbora-sarawakensis
brachydanio-rerio
tanichthys-albonubes
macropodus-opercularis
betta-smaragdina
betta-splendens
trichopsis-pumila
trichogaster-chuna
colisa-chuna
helostoma
trichopodus-microlepis
ctenops-nobilis
gourami
badis-badis
dario-hysginon
tateurndina
brachygobius-xanthozonus
stigmatogobius-sadanundio
chlamydogobius-eranmi
tyto-no
carinotetraodon-imitator
tetraodon-biocellatus
pantodon
xenomystus-nigri
notopterus
gnathonemus-petersii
campylomormyrus
eigenmannia-virescens
apteronotus-albifrons
pollimyrus
""".split()

EXISTING_SCIENTIFIC = {
    "betta splendens",
    "paracheirodon innesi",
    "poecilia reticulata",
    "osteogaster aenea",
    "neocaridina davidi",
    "xiphophorus maculatus",
    "danio rerio",
    "trigonostigma heteromorpha",
    "ancistrus sp. (3)",
    "trichogaster chuna",
}
# Held out of the published 100 so the set can include angelfish, rams, and kribs
# without passing 100. These profiles exist; they are not source failures.
EXCLUDE_SLUGS = {
    "false-rummy-nose",
    "red-phantom-tetra",
    "jelly-bean-tetra",
    "purple-emperor-tetra",
    "three-lined-pencilfish",
    "head-and-tail-light-tetra",
    "ornate-tetra",
    "brilliant-rasbora",
    "orange-finned-danio",
    "checkered-barb",
}

EXISTING_SLUGS = {
    "betta",
    "neon-tetra",
    "guppy",
    "bronze-corydoras",
    "cherry-shrimp",
    "platy",
    "zebra-danio",
    "harlequin-rasbora",
    "bristlenose-pleco",
    "honey-gourami",
}


CACHE = Path("/tmp/tmm-source-cache")


def fetch(url: str) -> tuple[int, str, str]:
    CACHE.mkdir(parents=True, exist_ok=True)
    key = re.sub(r"[^A-Za-z0-9]+", "_", url)[:180]
    cached = CACHE / key
    if cached.exists() and cached.stat().st_size > 500:
        return 200, url, cached.read_text()
    request = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            raw = response.read().decode("utf-8", "replace")
            status = response.status
            final = response.geturl()
    except urllib.error.HTTPError as error:
        return error.code, url, ""
    except Exception:
        return 0, url, ""
    if status == 200 and raw:
        cached.write_text(raw)
    return status, final, raw


def lines_of(html: str) -> list[str]:
    text = re.sub(r"<script[\s\S]*?</script>", " ", html, flags=re.I)
    text = re.sub(r"<style[\s\S]*?</style>", " ", text, flags=re.I)
    text = re.sub(r"<[^>]+>", "\n", text)
    for src, dst in {
        "&deg;": "°",
        "&nbsp;": " ",
        "&amp;": "&",
        "&ndash;": "–",
        "&mdash;": "—",
        "&#176;": "°",
        "&lt;": "<",
        "&gt;": ">",
    }.items():
        text = text.replace(src, dst)
    text = text.replace("\xa0", " ")
    out = []
    for line in text.splitlines():
        clean = re.sub(r"\s+", " ", line).strip()
        if clean and clean != "&nbsp":
            out.append(clean)
    return out


def find_line(lines: list[str], label: str, start: int = 0) -> int:
    target = label.lower()
    for index in range(start, len(lines)):
        if lines[index].lower() == target:
            return index
    return -1


def find_last(lines: list[str], label: str) -> int:
    target = label.lower()
    found = -1
    for index, line in enumerate(lines):
        if line.lower() == target:
            found = index
    return found


def parse_span(token: str) -> tuple[float, float] | None:
    match = re.search(r"(\d+(?:\.\d+)?)\s*[-–—to]+\s*(\d+(?:\.\d+)?)", token)
    if not match:
        return None
    low, high = float(match.group(1)), float(match.group(2))
    if low > high:
        low, high = high, low
    if low == high:
        return None
    return low, high


def num(token: str) -> float | None:
    match = re.search(r"\d+(?:\.\d+)?", token.replace(",", ""))
    return float(match.group(0)) if match else None


def parse_seriously(html: str, requested_slug: str) -> dict | str:
    title_match = re.search(r"<title>(.*?)</title>", html, re.I | re.S)
    if not title_match:
        return "no title"
    title = html_lib.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", title_match.group(1))).strip())
    title = title.replace("\u2019", "'")
    name_match = re.match(r"(.+?)\s+\((.+?)\)\s+·\s+Seriously Fish", title)
    if not name_match:
        return f"unparsed title: {title[:120]}"
    scientific = name_match.group(1).strip()
    common = name_match.group(2).strip()
    rows = lines_of(html)
    quick_at = find_line(rows, "Quick facts")
    if quick_at < 0:
        return "no quick facts"

    def collect_until(start: int, stops: set[str], limit: int = 40) -> list[str]:
        bag = []
        for line in rows[start : start + limit]:
            if line.lower() in stops:
                break
            bag.append(line)
        return bag

    quick = collect_until(quick_at + 1, {"etymology", "distribution", "classification"})
    # The quick-facts block ends when prose begins. Cap at the difficulty cluster.
    facts: dict[str, list[str]] = {}
    labels = {
        "max size",
        "aquarium size",
        "temp",
        "ph",
        "hardness",
        "difficulty",
        "space",
        "water",
        "diet",
        "temperament",
        "social",
        "compatibility",
    }
    current = None
    for line in quick:
        low = line.lower()
        if low in labels:
            current = low
            facts.setdefault(current, [])
            continue
        if low == "how the rating is worked out":
            continue
        if current and len(facts[current]) < 6:
            facts[current].append(line)

    def span_from(tokens: list[str]) -> tuple[float, float] | None:
        for token in tokens:
            parsed = parse_span(token)
            if parsed:
                return parsed
        joined = " ".join(tokens)
        return parse_span(joined)

    size_tokens = facts.get("max size", [])
    mm = None
    inches = None
    size_kind = "SL"
    for index, token in enumerate(size_tokens):
        low = token.lower()
        if "mm" in low and mm is None and index:
            mm = num(size_tokens[index - 1])
            if "tl" in low:
                size_kind = "TL"
        if re.fullmatch(r"in(?:\s+(?:sl|tl))?", low) and inches is None and index:
            inches = num(size_tokens[index - 1])
        if low.startswith("cm") and mm is None and index:
            cm = num(size_tokens[index - 1])
            if cm is not None:
                mm = cm * 10
                size_kind = "TL" if "tl" in low else "SL"
    if mm is None:
        # "35 mm SL" as one token somewhere later in the page
        blob = " ".join(rows)
        match = re.search(r"(\d+(?:\.\d+)?)\s*mm\s*SL", blob)
        if match:
            mm = float(match.group(1))
            size_kind = "SL"

    base = None
    for index, token in enumerate(facts.get("aquarium size", [])):
        if "×" in token or "x" in token.lower():
            dims = re.findall(r"\d+(?:\.\d+)?", token)
            if len(dims) >= 2:
                base = (float(dims[0]), float(dims[1]))
                break
    litres = None
    gallons = None
    blob = "\n".join(rows)
    vol = re.search(r"~\s*(\d+(?:\.\d+)?)\s*\n?\s*litres\s*\n?\s*~\s*(\d+(?:\.\d+)?)\s*\n?\s*US gal", blob, re.I)
    if not vol:
        vol = re.search(r"(\d+(?:\.\d+)?)\s+litres\s+(\d+(?:\.\d+)?)\s+US gal", blob, re.I)
    if vol:
        litres = float(vol.group(1))
        gallons = float(vol.group(2))

    temp_c = span_from(facts.get("temp", []))
    temp_f = None
    temp_tokens = facts.get("temp", [])
    if len(temp_tokens) >= 3 and "°f" in temp_tokens[2].lower():
        temp_f = parse_span(temp_tokens[0] if False else "")
    # Quick facts layout: "23–29", "°C", "73–84", "°F"
    if len(temp_tokens) >= 4 and "°c" in temp_tokens[1].lower() and "°f" in temp_tokens[3].lower():
        temp_c = parse_span(temp_tokens[0])
        temp_f = parse_span(temp_tokens[2])
    ph = span_from(facts.get("ph", []))
    hard = span_from(facts.get("hardness", []))

    # Water-conditions block overrides quick facts when both exist.
    window: list[str] = []
    water_at = find_last(rows, "Water conditions")
    if water_at >= 0:
        window = rows[water_at : water_at + 80]
        text = " \n ".join(window)
        c_match = re.search(r"(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)\s*°C", text)
        f_match = re.search(r"(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)\s*°F", text)
        ph_match = re.search(r"pH\s*:?\s*(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)", text, re.I)
        gh_match = re.search(r"(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)\s*dGH", text, re.I)
        if c_match:
            temp_c = (float(c_match.group(1)), float(c_match.group(2)))
        if f_match:
            temp_f = (float(f_match.group(1)), float(f_match.group(2)))
        if ph_match:
            ph = (float(ph_match.group(1)), float(ph_match.group(2)))
        if gh_match:
            hard = (float(gh_match.group(1)), float(gh_match.group(2)))

    if temp_c is None or temp_f is None or ph is None or mm is None:
        return "missing temp, pH, or adult size"

    behaviour_at = find_last(rows, "Behaviour and compatibility")
    if behaviour_at < 0:
        behaviour_at = find_last(rows, "Behavior and compatibility")
    behaviour = ""
    if behaviour_at >= 0:
        chunk = []
        for line in rows[behaviour_at + 1 : behaviour_at + 40]:
            if line.lower() in {"sexual dimorphism", "reproduction", "notes", "references"}:
                break
            if line.lower() in {"edit", "write a note"}:
                continue
            chunk.append(line)
        behaviour = " ".join(chunk)

    diet_at = -1
    if behaviour_at > 0:
        for index in range(behaviour_at - 1, max(0, behaviour_at - 30), -1):
            if rows[index].lower() == "diet":
                diet_at = index
                break
    diet = ""
    if diet_at >= 0:
        chunk = []
        for line in rows[diet_at + 1 : behaviour_at]:
            if line.lower() in {"edit", "write a note", "recommended foods", "behaviour and compatibility"}:
                if chunk:
                    break
                continue
            chunk.append(line)
        diet = " ".join(chunk)

    maintenance = ""
    maint_at = find_last(rows, "Maintenance")
    if maint_at >= 0:
        chunk = []
        for line in rows[maint_at + 1 : maint_at + 20]:
            if line.lower() in {"water conditions", "diet", "edit"}:
                if line.lower() != "edit":
                    break
                continue
            if line.lower() == "write a note":
                continue
            chunk.append(line)
        maintenance = " ".join(chunk)

    difficulty = " ".join(facts.get("difficulty", [])[:3])
    rating = "unrated"
    for word in ("beginner", "easy", "moderate", "difficult", "challenging"):
        if word in difficulty.lower():
            rating = "beginner" if word == "beginner" else "easy" if word == "easy" else "moderate" if word == "moderate" else "unrated"
            break
    temperament = " ".join(facts.get("temperament", [])[:2]).lower()
    social = " ".join(facts.get("social", [])[:3]).lower()

    return {
        "sfSlug": requested_slug,
        "scientific": scientific,
        "common": common,
        "mm": mm,
        "inches": inches if inches is not None else round(mm / 25.4, 1),
        "inchesFromSource": inches is not None,
        "sizeKind": size_kind,
        "base": base,
        "litres": litres,
        "gallons": gallons,
        "tempC": temp_c,
        "tempF": temp_f,
        "ph": ph,
        "hardness": hard,
        "rating": rating,
        "temperamentLine": temperament or "not stated",
        "socialLine": social or "not stated",
        "diet": diet,
        "behaviour": behaviour,
        "maintenance": maintenance,
        "waterCaveat": bool(re.search(r"commercially-produced fish are relatively unfussy|as low as 3", " ".join(window) if water_at >= 0 else "", re.I)),
    }


def parse_fishbase(html: str, final_url: str) -> dict | None:
    if "Max length" not in html and "pH range" not in html:
        return None
    family_match = re.search(r"title='Family'>([^<]+)", html)
    family = family_match.group(1).strip() if family_match else None
    rows = lines_of(html)
    environment = ""
    distribution = ""
    length = ""
    for index, line in enumerate(rows):
        if line.startswith("Freshwater;") or line.startswith("Brackish;"):
            environment = line
            # The temperature often continues on the same logical sentence but was split.
            if index + 1 < len(rows) and "°C" not in line:
                environment = f"{line} {rows[index + 1]}"
        if re.match(r"(Africa|Asia|South America|North America|Central America|Europe|Oceania|Western|Eastern):", line):
            if not distribution:
                distribution = re.split(r"\s*\(Ref\.?", line)[0].strip().rstrip(".") + "."
        if line.startswith("Max length"):
            length = line
    ph = re.search(r"pH range:\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)", environment)
    dh = re.search(r"dH range:\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)", environment)
    temp = re.search(r"(\d+(?:\.\d+)?)°C\s*-\s*(\d+(?:\.\d+)?)°C", environment)
    length_match = re.search(r"([\d.]+)\s*cm\s*(SL|TL|FL)?", length)
    generic_group = "51539" in html and "groups of 5 or more" in html
    return {
        "url": final_url,
        "family": family,
        "distribution": distribution,
        "ph": [float(ph.group(1)), float(ph.group(2))] if ph else None,
        "dh": [float(dh.group(1)), float(dh.group(2))] if dh else None,
        "tempC": [float(temp.group(1)), float(temp.group(2))] if temp else None,
        "lengthCm": float(length_match.group(1)) if length_match else None,
        "lengthKind": (length_match.group(2) or "unspecified") if length_match else None,
        "genericGroupLine": generic_group,
    }


def fishbase_urls(scientific: str) -> list[str]:
    scientific = scientific.replace('"', "").replace("“", "").replace("”", "")
    parts = scientific.split()
    if len(parts) < 2:
        return []
    genus, species = parts[0], parts[1]
    slug = f"{genus}-{species}.html"
    return [
        f"https://www.fishbase.se/summary/{slug}",
        f"https://www.fishbase.se/summary/SpeciesSummary.php?genusname={genus}&speciesname={species}",
    ]


def keywords(text: str) -> str:
    return text.lower()


def classify(profile: dict, fishbase: dict) -> dict:
    diet = keywords(profile["diet"])
    behaviour = keywords(profile["behaviour"])
    maintenance = keywords(profile["maintenance"])
    notes = f"{behaviour} {maintenance}"
    mm = profile["mm"]

    fin_nipper = False
    for sentence in re.split(r"[.]", notes):
        if not re.search(r"fin[-\s]?nip|nips?\s+fins|nippy|fin nipping|biting the fins|bites the fins", sentence):
            continue
        if re.search(r"does not|do not|not usually|rarely|attributed|unless", sentence):
            continue
        fin_nipper = True
        break
    long_finned = False
    for sentence in re.split(r"[.]", notes):
        if re.search(r"avoid|do not|should not|biting the fins|bites the fins|fin-nip", sentence):
            continue
        if re.search(r"(male|males|this species|adults|it has|they have).{0,60}(extended fin|trailing fin|filamentous|veil|sail-?like fin)", sentence):
            long_finned = True
    semi = False
    if "peaceful" not in profile["temperamentLine"]:
        if re.search(r"aggressive|territorial|intolerant|quarrel", profile["temperamentLine"]):
            semi = True
    if re.search(r"\baggressive\b|quarrelsome|notorious fin|highly territorial|best kept alone|may eat small fish|will eat small fish", notes):
        semi = True
    if re.search(r"\bboisterous\b", notes) and not re.search(r"peaceful", notes[:140]):
        semi = True
    if "peaceful" in profile["temperamentLine"] and not re.search(
        r"\baggressive\b|quarrelsome|notorious|may eat small fish|will eat small fish", notes
    ):
        semi = False

    flow = "gentle"
    if re.search(r"strong current|well oxygenated|well-oxygenated|rheophil|hillstream|fast[- ]flowing|brisk flow|high flow", notes):
        flow = "current"
    elif re.search(r"still water|sluggish|avoid strong|little current|slow[- ]flowing|quiet water|gentle flow", notes):
        flow = "still"

    vigorous = bool(re.search(r"\bvigorous\b|boisterous|fast[- ]swimming|very active", notes))
    slow = bool(re.search(r"sluggish|slow[- ]moving|easily intimidat|outcompeted|timid", notes))
    if flow == "current":
        vigorous = True
    if vigorous:
        slow = False

    family = fishbase.get("family") or "Not given on the FishBase summary"
    common_low = profile["common"].lower()
    anabantoid = family == "Osphronemidae" or "gourami" in common_low or common_low.startswith("betta")
    surface = anabantoid and bool(re.search(r"territorial|aggressive", notes))

    if re.search(r"puffer|piscivor|eats small fish|predator of", f"{diet} {notes}") or (
        mm >= 80 and re.search(r"small fish|shrimp|crustace", diet) and re.search(r"predator|carniv", diet + notes)
    ):
        shrimp = "adults"
    elif re.search(r"\bpuffer\b", common_low):
        shrimp = "adults"
    elif re.search(r"algae|aufwuchs|herbivor|vegetable matter|detritus", diet) and not re.search(
        r"invertebrate|crustace|insect|worm|zooplankton", diet
    ):
        shrimp = "unlikely"
    elif re.search(r"invertebrate|crustace|insect|worm|zooplankton|daphnia|larvae", diet):
        shrimp = "adults" if mm >= 90 else "juveniles"
    else:
        shrimp = "juveniles"

    group = None
    group_match = re.search(
        r"(?:at least|no fewer than)\s+(\d+)\s*[-–—to]{1,3}\s*(\d+)",
        profile["behaviour"],
        re.I,
    )
    if not group_match:
        group_match = re.search(
            r"(?:at least|no fewer than|group of)\s+(\d+)\s+(?:specimens|individuals|fishes|fish|or more)",
            profile["behaviour"],
            re.I,
        )
    if group_match:
        group = int(group_match.group(1))
    elif re.search(r"\b(\d+)\s+or more\b", profile["behaviour"]):
        group = int(re.search(r"\b(\d+)\s+or more\b", profile["behaviour"]).group(1))

    schooling = "group" in profile["socialLine"] or "shoal" in profile["socialLine"] or (group is not None and group >= 4)
    if re.search(r"shoal|school", notes) and (group is None or group >= 4):
        schooling = True

    layer = "mid"
    if family in {"Callichthyidae", "Loricariidae", "Cobitidae", "Balitoridae", "Gastromyzontidae"} or re.search(
        r"cory|loach|plec|oto|catfish", common_low
    ):
        layer = "bottom"
    elif anabantoid or family in {"Gasteropelecidae", "Pantodontidae"} or "hatchet" in common_low:
        layer = "top"
    elif re.search(r"all levels|throughout the water|every level", notes):
        layer = "all"

    genus = profile["scientific"].split()[0]
    livebearer = family == "Poeciliidae" or genus in {"Poecilia", "Xiphophorus", "Heterandria", "Limia", "Phalloceros", "Gambusia"}
    return {
        "finNipper": fin_nipper,
        "longFinned": long_finned,
        "semi": semi,
        "flow": flow,
        "vigorous": vigorous,
        "slow": slow,
        "surface": surface,
        "shrimp": shrimp,
        "group": group,
        "schooling": schooling,
        "layer": layer,
        "livebearer": livebearer,
        "family": family,
    }


def rng(pair: tuple[float, float]) -> dict:
    low, high = pair
    def clean(value: float) -> int | float:
        if abs(value - round(value)) < 1e-9:
            return int(round(value))
        return round(value, 2)
    return {"min": clean(low), "max": clean(high)}


def differs(a: tuple[float, float] | list[float] | None, b: list[float] | None, margin: float) -> bool:
    if not a or not b:
        return False
    return abs(a[0] - b[0]) >= margin or abs(a[1] - b[1]) >= margin


def clean_common(common: str) -> str:
    common = html_lib.unescape(common).replace("\u2019", "'")
    common = re.sub(r"'([^']+)'", r"\1", common)
    common = common.replace('"', "").replace("“", "").replace("”", "")
    parts = common.split()
    if not parts:
        return common
    titled = [parts[0][0].upper() + parts[0][1:] if parts[0] else parts[0]]
    for part in parts[1:]:
        titled.append(part if part.isupper() and len(part) <= 3 else part.lower())
    return " ".join(titled)


def slugify(common: str) -> str:
    plain = common.replace("'", "")
    slug = re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")
    return slug


def sentence(*parts: str) -> str:
    text = " ".join(part.strip() for part in parts if part and part.strip())
    text = re.sub(r"\s+", " ", text).strip()
    if text and text[-1] not in ".!?":
        text += "."
    return text


def build_record(profile: dict, fishbase: dict, flags: dict) -> dict:
    common = clean_common(profile["common"])
    scientific = html_lib.unescape(profile["scientific"]).replace('"', "").replace("“", "").replace("”", "").strip()
    slug = slugify(common)
    mm = int(profile["mm"]) if abs(profile["mm"] - round(profile["mm"])) < 1e-9 else profile["mm"]
    inches = profile["inches"]
    temp_c = rng(profile["tempC"])
    temp_f = rng(profile["tempF"])
    ph = rng(profile["ph"])
    hard = rng(profile["hardness"]) if profile["hardness"] else None
    base = profile["base"]
    gallons = int(profile["gallons"]) if profile["gallons"] and abs(profile["gallons"] - round(profile["gallons"])) < 1e-9 else profile["gallons"]
    litres = int(profile["litres"]) if profile["litres"] and abs(profile["litres"] - round(profile["litres"])) < 1e-9 else profile["litres"]
    distribution = fishbase.get("distribution") or "FishBase did not print a one-line distribution on the summary that was parsed."
    family = flags["family"]

    base_cm = base[0] if base else None
    fits_ten = base_cm is not None and base_cm <= 51
    ten_sentence = ""
    if base_cm is not None:
        if fits_ten:
            ten_sentence = f"That base is {base_cm:g} cm, short enough that a standard 20-inch (10-gallon) tank can cover the length. Volume and the group size are the remaining constraints."
        else:
            ten_sentence = f"That base is {base_cm:g} cm. A standard 10-gallon tank is 20 inches, about 51 cm, so it is short of the published footprint even before the gallons are counted."

    group = flags["group"]
    if group:
        group_sentence = f"Seriously Fish asks for at least {group}. A single fish is not the setup that page describes, and the checker uses {group} as the minimum group."
    elif "group" in profile["socialLine"] or "shoal" in profile["socialLine"]:
        group_sentence = f"Seriously Fish says this fish {profile['socialLine']}, but it does not give a headcount. The group field is left blank rather than filled with FishBase's repeated line of five."
    else:
        group_sentence = "No numeric group size is stated. The field is left blank rather than guessed."

    hard_sentence = (
        f"Hardness on Seriously Fish is {hard['min']}–{hard['max']} dGH."
        if hard
        else "Seriously Fish does not state a dGH range in the water block that was parsed, so hardness is left blank and the checker skips it."
    )
    flow_sentence = {
        "still": "The maintenance notes point at still or sluggish water, so the checker treats a strong current as a mismatch.",
        "current": "The maintenance notes ask for current or highly oxygenated water, so a still-water tankmate is a flow caution.",
        "gentle": "Seriously Fish does not ask for a strong current, so flow is recorded as gentle.",
    }[flags["flow"]]

    fb_bits = []
    uncertainties = []
    if fishbase.get("tempC") and differs(profile["tempC"], fishbase["tempC"], 1):
        fb_temp = fishbase["tempC"]
        uncertainties.append(
            {
                "field": "Temperature",
                "note": f"Seriously Fish lists {temp_c['min']}–{temp_c['max']}°C ({temp_f['min']}–{temp_f['max']}°F). FishBase lists {fb_temp[0]:g}–{fb_temp[1]:g}°C. The checker uses the Seriously Fish aquarium range and does not average the two.",
            }
        )
        fb_bits.append(f"FishBase's temperature, {fb_temp[0]:g}–{fb_temp[1]:g}°C, is not the same band")
    if fishbase.get("ph") and differs(profile["ph"], fishbase["ph"], 0.3):
        fb_ph = fishbase["ph"]
        uncertainties.append(
            {
                "field": "pH",
                "note": f"Seriously Fish lists pH {ph['min']}–{ph['max']}. FishBase lists pH {fb_ph[0]:g}–{fb_ph[1]:g}. The checker uses Seriously Fish.",
            }
        )
        fb_bits.append(f"FishBase's pH {fb_ph[0]:g}–{fb_ph[1]:g} disagrees")
    if hard and fishbase.get("dh") and differs((hard["min"], hard["max"]), fishbase["dh"], 2):
        fb_dh = fishbase["dh"]
        uncertainties.append(
            {
                "field": "Hardness",
                "note": f"Seriously Fish lists {hard['min']}–{hard['max']} dGH. FishBase lists dH {fb_dh[0]:g}–{fb_dh[1]:g}. The checker uses the Seriously Fish dGH range. FishBase's dH figure is not relabelled and averaged in.",
            }
        )
        fb_bits.append(f"FishBase's dH {fb_dh[0]:g}–{fb_dh[1]:g} disagrees")
    if fishbase.get("lengthCm"):
        fb_mm = fishbase["lengthCm"] * 10
        kind = fishbase.get("lengthKind") or "unspecified"
        if kind != "SL" or abs(fb_mm - float(mm)) / float(mm) > 0.15:
            uncertainties.append(
                {
                    "field": "Adult size",
                    "note": f"Seriously Fish lists {mm} mm {profile['sizeKind']}. FishBase lists {fishbase['lengthCm']:g} cm {kind}. The checker uses the Seriously Fish length. A total length and a standard length are not the same measurement, and the two figures are not averaged.",
                }
            )
            fb_bits.append(f"FishBase's maximum of {fishbase['lengthCm']:g} cm {kind} is a different figure from {mm} mm {profile['sizeKind']}")
    if fishbase.get("genericGroupLine"):
        uncertainties.append(
            {
                "field": "Group size",
                "note": "FishBase repeats “Aquarium keeping: in groups of 5 or more; minimum aquarium size 60 cm” (Ref. 51539) across unrelated species. That line is not used as this species' group size or tank length.",
            }
        )

    if not fb_bits:
        fb_sentence = "On the fields compared here, FishBase does not add a second range that would change the Seriously Fish figures, so there is no disagreement to average."
    else:
        fb_sentence = "Where the databases disagree, both numbers stay on this page and the checker keeps Seriously Fish: " + "; ".join(fb_bits) + "."

    diet_low = keywords(profile["diet"])
    if flags["shrimp"] == "unlikely":
        diet_sentence = f"The diet Seriously Fish describes is grazing food rather than a hunting diet, which is why cherry shrimp are not scored as prey for {common}."
    elif flags["shrimp"] == "adults":
        diet_sentence = f"At {mm} mm and with animal prey in the Seriously Fish diet notes, an adult {common} is scored as able to eat an adult cherry shrimp. That is a predation result, not a water-chemistry result."
    else:
        diet_sentence = f"Seriously Fish's diet notes include small animal food. An adult {common} at {mm} mm is not scored as a hunter of a full-grown cherry shrimp, but shrimplets are small enough to be food."

    if flags["finNipper"]:
        behaviour_sentence = "The behaviour section describes fin nipping, so long-finned tankmates are Not compatible. Extra gallons do not remove the fins."
    elif flags["semi"]:
        behaviour_sentence = "The behaviour section describes aggression or a territorial adult, so peaceful tankmates stay at Caution even when the water overlaps. This is not a green community fish on the source used here."
    elif flags["slow"]:
        behaviour_sentence = "The behaviour notes describe a slow or easily intimidated fish, so a vigorous tankmate is Caution: it takes the food."
    elif flags["schooling"] and group:
        behaviour_sentence = f"Kept in the group of {group} or more that the behaviour section asks for, the fish spends its time with its own kind. A singleton is the husbandry mistake, not a tankmate choice."
    else:
        behaviour_sentence = "The behaviour section does not add a fin-nipping or predatory rule on top of the water ranges. Chemistry can still fail the match."

    surprise = ten_sentence or group_sentence
    lede = sentence(
        f"{common} ({scientific}) is in the family {family}. FishBase places it in {distribution.rstrip('.')}.",
        f"The aquarium range used by this checker is the Seriously Fish profile: {temp_f['min']}–{temp_f['max']}°F, pH {ph['min']}–{ph['max']}, {mm} mm {profile['sizeKind']}.",
        surprise,
    )
    stated_parts = []
    if base:
        stated_parts.append(f"base {base[0]:g} × {base[1]:g} cm")
    if litres and gallons:
        stated_parts.append(f"about {litres} litres / {gallons} US gallons")
    stated = (", ".join(stated_parts) + ".") if stated_parts else "No base or volume is stated. No gallon minimum is invented."

    husbandry = [
        sentence(
            f"The tank figure is a footprint, not a slogan.",
            f"Seriously Fish recommends {stated}",
            ten_sentence,
            f"Temperature is {temp_c['min']}–{temp_c['max']}°C ({temp_f['min']}–{temp_f['max']}°F) and pH {ph['min']}–{ph['max']}.",
            hard_sentence,
            group_sentence,
            flow_sentence,
        ),
        sentence(
            diet_sentence,
            fb_sentence,
            behaviour_sentence,
            "The same Seriously Fish profile says farmed fish are less demanding, and that the bottom of the printed pH is what some wild fish need in order to breed. It does not print a second numeric range for farmed fish, so the checker uses the printed range."
            if profile.get("waterCaveat")
            else "",
        ),
    ]

    faqs = []
    if base_cm is not None and base_cm > 51:
        faqs.append(
            {
                "question": f"Can a {common.lower()} live in a 10-gallon tank?",
                "answer": f"Not on the Seriously Fish footprint. The profile asks for a base of {base_cm:g} cm. A standard 10-gallon tank is about 51 cm long, so the checker marks 10 gallons as too short.",
            }
        )
    elif gallons and isinstance(gallons, (int, float)) and gallons > 10 and (base_cm is None or base_cm > 51):
        faqs.append(
            {
                "question": f"What tank does Seriously Fish actually name for {common.lower()}?",
                "answer": f"About {gallons} US gallons" + (f", on a {base_cm:g} cm base." if base_cm else "."),
            }
        )
    if group:
        faqs.append(
            {
                "question": f"How many {common.lower()} should be kept together?",
                "answer": f"Seriously Fish's behaviour section says at least {group}. The checker uses that number as the minimum group and does not substitute the generic FishBase line of five.",
            }
        )
    elif any(item["field"] == "Adult size" for item in uncertainties):
        faqs.append(
            {
                "question": f"How big does a {common.lower()} get?",
                "answer": f"This page uses {mm} mm {profile['sizeKind']} from Seriously Fish. FishBase prints {fishbase['lengthCm']:g} cm {fishbase.get('lengthKind')}. Those figures are both shown. They are not averaged.",
            }
        )
    faqs = faqs[:2]

    shrimp_note = {
        "adults": f"Seriously Fish describes animal prey, and at {mm} mm standard length an adult can take an adult cherry shrimp. Shrimp are scored as prey.",
        "juveniles": f"The diet notes include small animal food. At {mm} mm this fish is not scored as a hunter of an adult cherry shrimp. Newly hatched shrimplets are.",
        "unlikely": "The diet notes describe grazing food, not a hunting diet. Cherry shrimp are not scored as prey.",
    }[flags["shrimp"]]

    if flags["longFinned"]:
        fin_note = "Seriously Fish describes extended or trailing fins on the fish this record covers, so a fin nipper is Not compatible with it."
    else:
        fin_note = "The profile parsed here does not describe trailing veil fins, so the long-finned flag stays off."

    flow_note = {
        "still": "Seriously Fish's maintenance notes describe still or sluggish water.",
        "current": "Seriously Fish's maintenance notes describe current or strongly oxygenated water.",
        "gentle": "Seriously Fish's maintenance notes do not demand a strong current.",
    }[flags["flow"]]

    rating_word = profile["rating"] if profile["rating"] != "unrated" else "not given a beginner/easy/moderate label"
    care_bits = [f"Seriously Fish rates {common} {rating_word}."]
    if profile["temperamentLine"] not in {"", "not stated"}:
        care_bits.append(f"The temperament line is {profile['temperamentLine']}.")
    if profile["socialLine"] not in {"", "not stated"}:
        care_bits.append(f"The social line is {profile['socialLine']}.")
    care_note = " ".join(care_bits)

    min_group_note = (
        f"Seriously Fish's behaviour section says at least {group}. The checker uses {group}."
        if group
        else "No numeric minimum group is stated. The field is blank on purpose."
    )

    size_note = f"{mm} mm {profile['sizeKind']} on Seriously Fish" + (
        f", which also prints {inches} in." if profile["inchesFromSource"] else f". {inches} in is {mm} mm converted at 25.4 mm per inch, and the source did not print an inch figure in the quick facts."
    )
    if fishbase.get("lengthCm"):
        size_note += f" FishBase lists {fishbase['lengthCm']:g} cm {fishbase.get('lengthKind')}."

    record = {
        "slug": slug,
        "commonName": common,
        "scientificName": scientific,
        "aliases": sorted({common.lower(), scientific.lower(), profile["sfSlug"].replace("-", " ")}),
        "family": family,
        "origin": f"FishBase: {distribution}",
        "tempC": temp_c,
        "tempF": temp_f,
        "tempFConverted": False,
        "pH": ph,
        "hardnessDGH": hard,
        "adultSizeMm": mm,
        "adultSizeIn": inches if isinstance(inches, int) else round(float(inches), 1),
        "adultSizeNote": size_note,
        "minTank": {
            "gallons": gallons,
            "liters": litres,
            "lengthCm": base[0] if base else None,
            "lengthIn": None,
            "stated": stated,
        },
        "temperament": "semi-aggressive" if flags["semi"] else "peaceful",
        "finNipper": flags["finNipper"],
        "longFinned": flags["longFinned"],
        "longFinnedNote": fin_note,
        "attacksLongFins": False,
        "schooling": flags["schooling"],
        "minGroup": group,
        "minGroupNote": min_group_note,
        "waterLayer": flags["layer"],
        "flow": flags["flow"],
        "flowNote": flow_note,
        "diet": diet_sentence,
        "shrimpRisk": flags["shrimp"],
        "shrimpRiskNote": shrimp_note,
        "slowMoving": flags["slow"],
        "vigorous": flags["vigorous"],
        "surfaceTerritorial": flags["surface"],
        "livebearer": flags["livebearer"],
        "careLevel": profile["rating"] if profile["rating"] in {"beginner", "easy", "moderate"} else "unrated",
        "careLevelNote": care_note,
        "incompatibleWith": [],
        "cautionWith": [],
        "endorsedWith": [],
        "sources": [
            {
                "label": "Seriously Fish",
                "title": f"{scientific} ({common}), Seriously Fish.",
                "url": f"https://www.seriouslyfish.com/species/{profile['sfSlug']}/",
                "accessed": ACCESSED,
                "usedFor": "Adult size, tank base, temperature, pH, hardness when stated, diet, and behaviour.",
            },
            {
                "label": "FishBase",
                "title": f"{scientific} on FishBase.",
                "url": fishbase["url"],
                "accessed": ACCESSED,
                "usedFor": "Family, distribution, and a second length, temperature, pH, or hardness when the summary prints one.",
            },
        ],
        "uncertainties": uncertainties,
        "sourceGap": None,
        "lastVerified": ACCESSED,
        "lede": lede,
        "husbandry": husbandry,
        "tankMateIntro": "",
        "faqs": faqs,
    }
    return record


def ts_value(value, indent: int = 0) -> str:
    pad = "  " * indent
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        if isinstance(value, float) and value.is_integer():
            return str(int(value))
        return str(value)
    if isinstance(value, str):
        return json.dumps(value, ensure_ascii=False)
    if isinstance(value, list):
        if not value:
            return "[]"
        inner = ",\n".join(pad + "  " + ts_value(item, indent + 1) for item in value)
        return "[\n" + inner + "\n" + pad + "]"
    if isinstance(value, dict):
        if not value:
            return "{}"
        parts = []
        for key, item in value.items():
            key_text = key if re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", key) else json.dumps(key, ensure_ascii=False)
            parts.append(f"{pad}  {key_text}: {ts_value(item, indent + 1)}")
        return "{\n" + ",\n".join(parts) + "\n" + pad + "}"
    raise TypeError(type(value))


COPY_KEYS = ("lede", "husbandry", "tankMateIntro", "faqs")


def main() -> None:
    core = json.loads(Path("/tmp/core-species.json").read_text())
    seen_scientific = {item["scientificName"].lower() for item in core}
    seen_slugs = set(EXISTING_SLUGS)
    dropped = []
    kept = []
    seen_requests = []

    unique_slugs = []
    for slug in CANDIDATES:
        if slug not in unique_slugs and slug not in {"betta-splendens", "trichogaster-chuna", "colisa-chuna", "brachydanio-rerio"}:
            unique_slugs.append(slug)

    def job(slug: str):
        status, final, html = fetch(f"https://www.seriouslyfish.com/species/{slug}/")
        time.sleep(0.15)
        return slug, status, final, html

    print(f"fetching {len(unique_slugs)} Seriously Fish profiles")
    pages = {}
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = [pool.submit(job, slug) for slug in unique_slugs]
        for future in as_completed(futures):
            slug, status, final, html = future.result()
            pages[slug] = (status, final, html)
            print(f"  SF {slug} {status} {len(html)}")

    for slug in unique_slugs:
        if len(kept) >= 90:
            break
        status, final, html = pages.get(slug, (0, "", ""))
        if status != 200 or not html:
            dropped.append({"slug": slug, "reason": f"Seriously Fish HTTP {status}"})
            continue
        parsed = parse_seriously(html, slug)
        if isinstance(parsed, str):
            dropped.append({"slug": slug, "reason": parsed})
            continue
        parsed["scientific"] = html_lib.unescape(parsed["scientific"]).replace('"', "").replace("“", "").replace("”", "").strip()
        parsed["common"] = clean_common(parsed["common"])
        scientific_key = parsed["scientific"].lower()
        if scientific_key in seen_scientific or scientific_key in EXISTING_SCIENTIFIC:
            dropped.append({"slug": slug, "reason": f"already in the set as {parsed['scientific']}"})
            continue
        fishbase = None
        fb_status = None
        for url in fishbase_urls(parsed["scientific"]):
            fb_status, fb_final, fb_html = fetch(url)
            time.sleep(0.1)
            if fb_status == 200 and fb_html:
                fishbase = parse_fishbase(fb_html, fb_final)
                if fishbase:
                    break
        if not fishbase:
            dropped.append({"slug": slug, "reason": f"no FishBase summary for {parsed['scientific']} (HTTP {fb_status})"})
            continue
        flags = classify(parsed, fishbase)
        record = build_record(parsed, fishbase, flags)
        if record["slug"] in EXCLUDE_SLUGS:
            dropped.append({"slug": slug, "reason": "held out to keep the published set at 100, not a source failure"})
            continue
        if record["slug"] in seen_slugs:
            record["slug"] = f"{record['slug']}-{parsed['sfSlug'].split('-')[-1]}"
        if record["slug"] in seen_slugs:
            dropped.append({"slug": slug, "reason": f"slug collision on {record['slug']}"})
            continue
        if len(record["lede"]) < 80 or len(record["husbandry"]) < 2:
            dropped.append({"slug": slug, "reason": "generated prose too short"})
            continue
        seen_slugs.add(record["slug"])
        seen_scientific.add(scientific_key)
        kept.append(record)
        print(f"KEEP {record['slug']} | {record['scientificName']} | {record['tempF']} pH {record['pH']}")

    profiles = []
    copy = {}
    for record in kept:
        prose = {key: record[key] for key in COPY_KEYS}
        copy[record["slug"]] = prose
        profile = {key: value for key, value in record.items() if key not in COPY_KEYS}
        profiles.append(profile)

    def emit(path: Path, body: str) -> None:
        path.write_text(body)
        print("wrote", path, "bytes", path.stat().st_size)

    emit(
        ROOT / "data" / "added-profiles.ts",
        "import type { SpeciesProfile } from \"../lib/types\";\n\n"
        "export const addedProfiles = "
        + ts_value(profiles)
        + " satisfies SpeciesProfile[];\n",
    )
    emit(
        ROOT / "data" / "added-copy.ts",
        "import type { SpeciesCopy } from \"../lib/types\";\n\n"
        "export const addedCopy: Record<string, SpeciesCopy> = "
        + ts_value(copy)
        + ";\n",
    )
    (ROOT / "data" / "dropped-species.json").write_text(json.dumps(dropped, indent=2))
    print(f"kept {len(kept)} dropped {len(dropped)}")


if __name__ == "__main__":
    main()
