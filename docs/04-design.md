# PROKAT — design a brand

## Logo a značka

| Položka | Hodnota |
|---------|---------|
| Logo (zdroj) | `assets/logo-prokat-invest-source.png` |
| Logo (pro šablony) | `assets/logo-prokat-invest.png` — průhledné pozadí |
| Vodoznak | `assets/watermark-prokat.png` (generovaný, 14 % opacity) |
| Název | **PROKAT** (tučně, caps) + **invest** (regular, lowercase) |
| Font loga | Bezpatkový sans-serif (Arial / Helvetica) |

## Barvy (nová škála 2026)

| Token | HEX | RGB | Použití |
|-------|-----|-----|---------|
| Navy | `#10102A` | 16, 16, 42 | nadpisy, tabulky hlavičky |
| Bronze | `#4C3A2E` | 76, 58, 46 | podnadpisy, popisky |
| Gold mid | `#8E6B33` | 142, 107, 51 | akcenty, podtituly |
| Gold | `#D29C3A` | 210, 156, 58 | linky, zvýraznění |
| Black | `#000000` | 0, 0, 0 | logo text, titulky |
| Text | `#1A1A1A` | | hlavní text |
| Muted | `#666666` | | patičky, metadata |
| Pozadí | `#F5F5F5` | | světlé bloky |

Referenční škála: `assets/paleta-barev.png`

## Typografie

| Účel | Font | Váha |
|------|------|------|
| Nadpisy | Arial | Bold |
| Text | Arial | Regular |
| Firemní název | Arial | Bold 14 pt |

## Firemní šablony

Šablony ve složce `templates/` — generované skriptem `create_templates.py`:

| Formát | Klasický dokument | Cenová nabídka |
|--------|-------------------|----------------|
| Word | `templates/word/PROKAT-vzor-dokument.docx` | `templates/word/PROKAT-vzor-cenova-nabidka.docx` |
| Excel | `templates/excel/PROKAT-vzor-dokument.xlsx` | `templates/excel/PROKAT-vzor-cenova-nabidka.xlsx` |
| PowerPoint | `templates/powerpoint/PROKAT-vzor-dokument.pptx` | `templates/powerpoint/PROKAT-vzor-cenova-nabidka.pptx` |

Všechny šablony obsahují logo v záhlaví a vodoznak s logem PROKAT invest.

### Regenerace šablon

```bash
cd PROKAT
python3 create_templates.py
```

Potřebné balíčky: `python-docx`, `openpyxl`, `python-pptx`, `Pillow`

## Inspirace / reference

| Název | URL | Co převzít |
|-------|-----|------------|
| Logo PROKAT invest | `assets/logo-prokat-invest.png` | firemní identita |
| Barevná škála | `assets/paleta-barev.png` | navy → bronze → gold gradient |

## Responzivita

| Breakpoint | Šířka | Poznámka |
|------------|-------|----------|
| Mobil | &lt; 768px | |
| Tablet | 768–1024px | |
| Desktop | &gt; 1024px | |

## Dark mode

- [ ] Ano
- [ ] Ne
- [x] Zatím neurčeno — šablony jsou světlé

## Wireframe / mockup

| Soubor | Popis |
|--------|-------|
| `templates/` | hotové Office šablony jako výchozí vzory |
