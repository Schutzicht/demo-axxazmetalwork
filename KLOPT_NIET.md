# Klopt-niet checklist — voor live-launch

Demo-content die ik (Claude/Jorik) heb verzonnen omdat Sem nog geen echte data heeft aangeleverd. Voor de Sem/Rody/Arie pitch is dit allemaal OK (demo-data herkenbaar als zodanig), maar **vóór live moeten deze items gecheckt en vervangen worden door Sem**.

Vink af zodra bevestigd of vervangen.

---

## ⚠ Kritiek (juridisch / vertrouwen)

### Telefoonnummers
- [x] `+31 (0)88 027 7880` (kantoor) — echt, uit axxaz.nl
- [ ] `+31 (0)6 1234 5678` (Sem mobiel) — **placeholder, vervangen**
- [ ] `+31 (0)6 8765 4321` (Rody mobiel) — **placeholder, vervangen**
- [ ] `+31881234567` (WhatsApp) — **placeholder, vervangen** (Sem mobiel?)

→ Bestand: `src/data/site.ts` regels 7–9

### Reviews / testimonials (homepage)
- [ ] Frank de Boer (Damen) — verzonnen quote
- [ ] Pawel Kowalski (Pools lasser) — verzonnen quote
- [ ] Linda Vermeer (Petrochem HR) — verzonnen quote, bedrijf fictief
- [ ] Reyna Dela Cruz (TIG-lasser) — verzonnen quote
- [ ] "4.8 op Google · 184 reviews" — verzonnen
- [ ] "4.7 Trustpilot · 62" — verzonnen

→ Bestand: `src/data/site.ts` (`reviews`, `reviewSummary`)
→ Optie: review-block helemaal weglaten tot Sem echte testimonials heeft

### Trust-strip klantlogo's
- [x] Damen Shipyards — echt (Sem noemde Damen in WhatsApp)
- [ ] Royal IHC — **placeholder, vervangen door echte AXXAZ-klant**
- [ ] Boskalis — **placeholder, vervangen**
- [ ] Heerema — **placeholder, vervangen**
- [ ] Vopak — **placeholder, vervangen**
- [ ] Smulders — **placeholder, vervangen**

→ Bestand: `src/data/site.ts` (`trustClients`)
→ Logo-bestand droppen in `public/img/clients/{slug}.{svg|png|jpg}`

### Cases (3 verhalen)
- [ ] Damen 22 plaatsingen, 0 incidenten, sinds 2024 — **cijfers verzonnen** (Damen=echt)
- [ ] Petrochem Botlek 12-dagen verhaal — **bedrijf fictief, hele case vervangen**
- [ ] Manilla hub story (40+ plaatsingen) — **cijfers verzonnen** (Manilla=echt)

→ Bestand: `src/data/site.ts` (`cases`)

---

## ⚠ Belangrijk (verhaal moet kloppen)

### Founders (4)
- [x] Namen: Rody Sinke, Sem Goddijn, Angelika, Arie — uit Word-doc
- [ ] Achternaam Angelika — **niet bekend, aanvullen**
- [ ] Achternaam Arie — **niet bekend, aanvullen**
- [ ] Bio Rody (sourcing/klantrelaties/commercie) — **verzonnen, door Sem laten herschrijven**
- [ ] Bio Sem (strateeg internationale vestigingen) — **verzonnen, door Sem laten herschrijven**
- [ ] Bio Angelika (finance/governance) — **verzonnen, door Sem laten herschrijven**
- [ ] Bio Arie (vakman test- en kwalificatiemethoden) — **verzonnen, door Sem laten herschrijven**
- [ ] Jaren ervaring (22, 20, 30, 32) — **verzonnen, echt invullen**
- [ ] Foto's — **GEEN ECHTE FOTO'S** beschikbaar, drop ze in `public/img/team/{slug}.jpg`
- [ ] Founders-duo foto op homepage — toont mannen in **Delta BeroepsBemiddeling** sweaters (oud merk?), vervangen

→ Bestand: `src/data/site.ts` (`founders`)
→ Foto's: `public/img/team/rody.jpg`, `sem.jpg`, `angelika.jpg`, `arie.jpg` + `founders-duo.jpg`

### Tijdlijn / mijlpalen (Wie wij zijn)
- [x] 2004 oprichting — uit Word-doc
- [ ] 2008 eerste eigen vestiging EU (Polen) — **verzonnen jaartal**
- [ ] 2014 vak-/lastestcentrum Tholen geopend — **verzonnen jaartal**
- [ ] 2018 Manilla geopend — **verzonnen jaartal**
- [ ] 2022 NEN 4400-1 + NBBU certificering — **verzonnen jaartal**
- [x] 2026 15 vestigingen — klopt nu

→ Bestand: `src/sections/OverOnsContent.astro` (`milestones`)

### Statistieken (homepage)
- [x] 22+ jaar in metaal — klopt (sinds 2004)
- [x] 15 vestigingen (10 EU + 5 AZ) — uit Word-doc
- [ ] 100% kandidaten getest — claim, klopt als beleid
- [ ] 14 dagen avg plaatsingstijd — **verzonnen**
- [ ] 44 vacatures (in hero search) — **verzonnen**
- [ ] 142 MIG/MAG vacatures (vakgebieden-grid) — **verzonnen**, alle counts
- [ ] 15+ landen waar wij sourcen — verzonnen, exact aantal nodig

→ Bestand: `src/data/site.ts` (`vakgebieden`, `site.yearsActive`)

### Adressen
- [x] HQ Raadhuisstraat 2, 4797 AX Willemstad — echt (axxaz.nl)
- [ ] Tholen Ambachtsweg 7, 4691 SB — vermoedelijk echt, **Sem bevestigen**

### Email
- [ ] `info@axxazmetalwork.nl` — plausibel, **bevestigen of corrigeren**

### Certificaten (op /certificaten + admin paneel)
- [x] Lijst (NEN-4400-1, VCU, ISO-26000, ISO-37500, NBBU, OESO, ILO, Arbeidsgilde) — uit axxaz.nl
- [ ] Issue-datums per certificaat — **verzonnen voor reminder-demo**
- [ ] Expiry-datums per certificaat — **verzonnen, echt invullen**

→ Bestand: `src/data/site.ts` (`certifications`)

---

## Demo-only data (geen actie tenzij live wordt)

### Vacatures (6 fictief)
Voor pitch is dit OK (demo herkenbaar). Voor live: echte vacatures importeren via ATS of CSV.
- `mig-mag-lasser`, `pijpfitter`, `constructiebankwerker`, `plaatwerker`, `cnc-verspaner`, `apparatenbouwer`

→ Bestand: `src/data/site.ts` (`vacancies`)

### ATS demo-data (duidelijk gemarkeerd als demo)
- 10 mock-kandidaten (Pawel Kowalski, Marko Stojanović, Reyna Dela Cruz, etc.)
- 7 mock-klanten in ATS (Damen + 6 fictief)
- 3 broadcasts/verzoeken
- 8 activity log entries
- 7 notificaties
- 3 saved pools

→ Bestand: `src/data/atsData.ts`
→ ATS heeft `DEMO · alle data is fictief` chip altijd zichtbaar — geen probleem voor pitch

### Blog posts (3 fictief)
- "De metaalvakman in 2026"
- "Sem en Rody interview" (kan echt worden door Sem te interviewen)
- "Manilla hub opening" (kan echt worden — wanneer was opening?)

→ Bestand: `src/data/site.ts` (`blogPosts`)

### Social media URLs
- [ ] facebook.com/axxazmetalwork — **bestaat dit?** Anders aanmaken of URL aanpassen
- [ ] linkedin.com/company/axxaz-metalwork — **bestaat dit?**
- [ ] instagram.com/axxazmetalwork — **bestaat dit?**
- [ ] tiktok.com/@axxazmetalwork — **bestaat dit?**
- [ ] youtube.com/@axxazmetalwork — **bestaat dit?**

→ Bestand: `src/data/site.ts` (`site.socials`)

---

## ✅ Wat 100% klopt (geen actie nodig)

- AXXAZMetalwork is handelsmerk van AXXAZ Netherlands, AXXAZ Europe & AXXAZ Asia
- "Sinds 2004 uw partner in vakbekwame metaal medewerkers"
- HQ Willemstad / Testcentrum Tholen
- Multi-talen incl. Tagalog (NL/EN/TL/DE/PL)
- Open sollicitatie als dun balkje boven (geen blob)
- Founders-namen: Rody, Sem, Angelika, Arie
- AXXAZ logo
- Pools-feature met Europa/Derdelanders + push-broadcasts
- Vak-/lastestcentrum + EVC-traject
- Sourcing-flow (eerst EU, dan Azië)

---

## Werkwijze

Voor een echte launch:
1. Print deze lijst met Sem
2. Sem vinkt af wat klopt + levert echte data voor de rest aan
3. Wij/ik vervangen in de bestanden
4. Re-build + test
5. Pas dán livegaan

Zolang dit niet 100% gedaan is, **alleen als demo gebruiken voor interne pitch**.
