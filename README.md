# Demo Axxaz Metalwork

Demo-website + ATS voor AXXAZ Metalwork — pitch-versie om Sem, Rody en Arie te overtuigen om de huidige site te vervangen.

## Stack

- **[Astro 6](https://astro.build/)** — static site generator met view transitions
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first met `@theme`-tokens
- **TypeScript** strict mode
- **Vanilla JS** voor ATS Kanban (drag-drop, localStorage, CSV export)
- **Vite 7** (gepind — vite 8/rolldown breekt @tailwindcss/vite)

## Lokaal draaien

```bash
npm install
npm run dev          # dev server op http://localhost:4321
npm run build        # statische export naar dist/
npm run preview      # preview van de productie-build
```

## Talen (5)

Werkende talenswitcher rechtsboven. Astro i18n routing met defaultLocale `nl` zonder prefix.

| Code | Taal       | URL          |
|------|------------|--------------|
| `nl` | Nederlands | `/`          |
| `en` | English    | `/en/`       |
| `tl` | Tagalog    | `/tl/`       |
| `de` | Deutsch    | `/de/`       |
| `pl` | Polski     | `/pl/`       |

UI-strings staan in [`src/i18n/ui.ts`](src/i18n/ui.ts) — alle 5 talen volledig ingevuld voor navigatie, hero, CTA's, footer en certificaten.

## Pagina's

| Route                          | Wat                                                                 |
|--------------------------------|---------------------------------------------------------------------|
| `/`                            | Home — hero + stats + sourcing + testcentrum + oprichters + feed    |
| `/vacatures`                   | Overzicht met filters (urgent/vast/detachering)                     |
| `/vacatures/[slug]`            | Detail — taken, eisen, salaris, direct contact                      |
| `/open-sollicitatie`           | Multi-step formulier (vakgebied, talen, certs, CV)                  |
| `/werkgevers`                  | Diensten + werkwijze + aanvraagformulier                            |
| `/wie-wij-zijn`                | Oprichters-bubbles + tijdlijn 2004→nu + waarden + locaties          |
| `/sourcing`                    | EU/Azië-vestigingen, sourcing-flow, Manilla-hub                     |
| `/vak-en-lastestcentrum`       | Tholen-tests + EVC-traject                                          |
| `/certificaten`                | Downloadbare lijst + admin reminder-paneel (14/7/3 dagen)           |
| `/community`                   | Facebook + LinkedIn feed-mockup, Insta/TikTok, events               |
| `/contact`                     | Adressen + telefoon (kantoor + Sem/Rody mobiel) + formulier         |
| `/ats`                         | **Werkende ATS-demo** (login → dashboard → Kanban → vacs → certs)   |

## ATS-demo

Volledig clientside, state in `localStorage` (key `axxaz-ats-candidates`).

**Functioneel:**
- Login (geen echte auth — gewoon klikken)
- Dashboard met live stats + reminder-feed
- Kanban-pipeline met **drag-and-drop**: Sourced → In test → Gekwalificeerd → Geplaatst
- Vacaturebeheer (overzicht + match-count)
- Certificatenbeheer met automatische reminder-status (14/7/3 dagen)
- "+ Nieuwe kandidaat" via prompt
- **CSV-export** van alle kandidaten

**Demo-data**: 10 fictieve kandidaten uit NL/PL/RO/PH/VN/DE/ID/HU. Reset state met:
```js
localStorage.removeItem('axxaz-ats-candidates'); location.reload();
```

## Brand-tokens

| Token | Hex | Gebruik |
|-------|-----|---------|
| `--color-axxaz-blue` | `#0A2D5C` | Primair blauw (uit logo) |
| `--color-axxaz-blue-deep` | `#061B3B` | Donkerste blauw (header/footer) |
| `--color-axxaz-blue-soft` | `#1E4A8A` | Lichter accent |
| `--color-axxaz-mist` | `#E6EEF9` | Soft achtergrond |
| `--color-spark` | `#FF7A1A` | Vonken-oranje (metaalclub-vibe) |
| `--color-spark-deep` | `#C94B00` | Donker oranje hover |
| `--color-ember` | `#FFC857` | Warm geel highlight |
| `--color-paper` | `#F7F8FA` | Off-white achtergrond |

Fonts: **Saira** (display) + **Inter** (body) — industrieel, modern, leesbaar.

## Briefing-coverage

- ✅ "Vertrouwde, simpele uitstraling" zoals Covebo (helder, geen blog/extra ruis)
- ✅ Blauwe modern-speelse uitstraling met directe WhatsApp- en bel-knop (rechtsonder, fixed)
- ✅ "Open sollicitatie" als **dun balkje bovenaan** — niet zwevend zoals Metadex
- ✅ Sterke flow tussen pagina's, géén AI-reclame
- ✅ Diepgang (echte content op elke pagina, vacature-detail met alles erop)
- ✅ Talenswitcher werkend met **5 talen** (NL/EN/TL/DE/PL) — Tagalog basis voor PH
- ✅ Facebook + LinkedIn feed prominent (homepage + community-pagina)
- ✅ Kleinere Insta + TikTok-strip
- ✅ Metaalclub/Harley-Davidson-sfeer in copy, vonkenkleur als accent
- ✅ Locatie/oorsprong-velden in open sollicitatie + ATS
- ✅ Wereldwijde sourcing-pagina (10 EU + 5 Azië, Manilla-hub)
- ✅ Eigen vak-/lastestcentrum (Tholen) prominent — voor klanten én kandidaten
- ✅ "Wie wij zijn" met team-bubbles (Rody, Sem, Angelika, Arie + zakenpartner)
- ✅ Tijdlijn 2004→nu, 22 jaar verhaal
- ✅ Beheer in eigen handen — statische export, eenvoudig te hosten
- ✅ Certificaten downloadbaar + **automatische reminders** (14/7/3 dagen) in ATS
- ✅ ATS volledig in scope (geen los concept, écht werkende demo)
- ✅ View transitions, sticky glas-header, responsive vanaf 360px

## Te vervangen vóór livegang

- Echte teamfoto's in [`public/img/team/`](public/img/team/) (Rody, Sem, Angelika, Arie, etc.)
- Echte mobiele nummers Sem & Rody in [`src/data/site.ts`](src/data/site.ts) (`phoneSem`, `phoneRody`)
- Echte WhatsApp-nummer in `whatsapp` veld
- Echte certificaat-PDFs in [`public/downloads/`](public/downloads/)
- Eventuele aanvullende vertalingen voor TL/DE/PL waar nodig
- Echte Facebook/LinkedIn feed-integratie (nu mockup)

## Status

Pitch / demo-versie. Alle interactiviteit werkt clientside. ATS bevat geen echte backend (state in localStorage) — bij goedkeuring kunnen we dat koppelen aan een Supabase-backend met auth, of een eigen API.
