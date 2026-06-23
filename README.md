# PROKAT — webový projekt

Složka pro přípravu a ladění webu **PROKAT**. Zatím pouze dokumentace — kód a nasazení přijdou později.

## Stav projektu

| Fáze | Stav |
|------|------|
| Dokumentace | 🟡 rozpracováno |
| Design / wireframe | ⬜ nezačato |
| HTML / CSS / JS | ⬜ nezačato |
| Nasazení | ⬜ nezačato |

## Dokumenty

| Soubor | Obsah |
|--------|--------|
| [docs/01-prehled.md](./docs/01-prehled.md) | Cíl webu, cílová skupina, základní info |
| [docs/02-struktura-webu.md](./docs/02-struktura-webu.md) | Stránky, sekce, navigace |
| [docs/03-obsah.md](./docs/03-obsah.md) | Texty, média, odkazy ke stažení |
| [docs/04-design.md](./docs/04-design.md) | Barvy, fonty, logo, **Office šablony** |
| [docs/05-poznamky.md](./docs/05-poznamky.md) | Průběžné poznámky z ladění |

## Firemní šablony (Word / Excel / PowerPoint)

**Pro odeslání klientovi:** složka [`odeslat-klientovi/`](./odeslat-klientovi/) — obsahuje ZIP archiv i jednotlivé soubory.

| Formát | Dokument | Cenová nabídka |
|--------|----------|----------------|
| Word `.docx` / šablona `.dotx` | `odeslat-klientovi/word/PROKAT-vzor-dokument.*` | `odeslat-klientovi/word/PROKAT-vzor-cenova-nabidka.*` |
| Excel `.xlsx` / šablona `.xltx` | `odeslat-klientovi/excel/PROKAT-vzor-dokument.*` | `odeslat-klientovi/excel/PROKAT-vzor-cenova-nabidka.*` |
| PowerPoint `.pptx` / šablona `.potx` | `odeslat-klientovi/powerpoint/PROKAT-vzor-dokument.*` | `odeslat-klientovi/powerpoint/PROKAT-vzor-cenova-nabidka.*` |

ZIP: [`odeslat-klientovi/PROKAT-Invest-sablony.zip`](./odeslat-klientovi/PROKAT-Invest-sablony.zip)

## Struktura složky (plán)

```
PROKAT/
├── README.md          ← tento soubor
├── create_templates.py ← generátor Office šablon
├── assets/            ← logo, paleta barev, vodoznak
├── docs/              ← dokumentace a podklady
├── templates/         ← hotové Word / Excel / PPT vzory
└── (webové soubory)   ← index.html, CSS, JS — později
```

## Související projekty v repu

| Složka | Popis |
|--------|--------|
| `webovice/` | statický web (HTML/CSS/JS) |
| `onlineskoleni-web/` | Next.js marketing + LMS |
| `VODA/` | prezentace / podklady |
