# Plán projektu – web „preventik.cz" (pracovní název)

> Web na míru pro **VaC design s.r.o. / Jiří Kielkovský** (mojereklamka.cz).
> Zdroj zadání: `Taťka pracovní název policajt v1.0.pdf` (Podklad projektu – webdesign na míru, 9 sekcí).

## 1. Shrnutí zadání

| Položka | Obsah |
|---|---|
| **Kdo** | VaC design s.r.o., IČO 25367315, Petřvald u Karviné, od 1997. Kontakt: Jiří Kielkovský, +420 775 321 678 (i WhatsApp), info@mojereklamka.cz |
| **Co je web** | Úzce zaměřená prezentace + katalog + poptávka na produkty pro **preventisty městské policie a městských úřadů**, kteří dělají preventivní programy pro děti. NENÍ to celá reklamní výroba firmy. |
| **Hlavní cíl** | Získávat nezávazné poptávky (leady) + budovat důvěru a značku. |
| **Primární konverze** | Odeslání poptávky. Zákazník vyplní kontakt a **nahraje logo své městské policie / úřadu**. |
| **Měřítko úspěchu (6 měsíců)** | Počet a objem poptávek měsíčně; počet úspěšně realizovaných objednávek. |
| **Cílová skupina** | Preventisté MP a úředníci měst. Věk/pohlaví nerozhoduje. Hledají hotové vzdělávací a reklamní materiály pro děti, které nechtějí sami vymýšlet. Starší i mladší publikum → větší písmo, jednoduchost. |
| **Problém zákazníka** | „Nevím přesně, co potřebuji, ale poznám to, až to uvidím." → web musí produkty ukázat vizuálně a rychle. |
| **USP** | Nejen vyrábíme a tiskneme – produkty i **sami vyvíjíme**, vlastníme autorská práva, odzkoušeno „na dětech" ve školách a školkách. Jiné a nové oproti pořád stejným materiálům BESIP. |
| **Odkud chodí zákazníci** | Doporučení, Google; mailem a poštovní zásilkou se vzorky na služebny MP. |
| **Námitky** | Cena, délka realizace, kvalita, „proč právě vy". Odpověď na poslední: originální produkt + know‑how + autorská práva. |
| **Značka – vnímání** | „originální, nápadité, termíny včas". |
| **Vyhnout se** | Lacinému vzhledu, příliš korporátnímu stylu, agresivnímu marketingu, tlaku na objednávku („dáváme jen možnost"). |
| **Jazyky** | CZ + SK (SK ve fázi 2). |
| **Doména** | Pracovní název **preventik.cz**, zatím NEregistrovaná. Hosting zajistí designer. Firemní e‑maily na doméně: ne. |
| **Rozpočet / termíny** | Ve formuláři nevyplněno – doplnit na konzultaci. |

### Inspirace a anti‑vzory
- **Vzor:** [reddo.cz](https://www.reddo.cz/cs/reklamni-karetni-hry) – chytré rozdělení menu, dobrá orientace, rychlé zaujetí, dobré doplňkové info.
- **Anti‑vzor:** [besip.gov.cz](https://besip.gov.cz/) (staré, moc podstránek, nenabízí produkty), [alik.cz](https://www.alik.cz/) (překřičené barvy, přeplácané).

## 2. Vizuální identita (návrh, k odsouhlasení)

- **Barvy:** modrá jako městská policie ČR (primární) + červená jako hasiči ČR (akcent). Hodně bílého prostoru, vzdušnost.
  - Návrh HEX: modrá `#16386e` / `#1f4f9c`, červená `#d3122a`, inkoust `#1a1d21`, papír `#f6f7f9`.
- **Typografie:** bezpatkové moderní písmo (klient zmínil Gotham / Ford Antenna). Náhrada zdarma: **Montserrat** (nadpisy) + **Inter** (text).
- **Ikony:** používat **minimálně**. Klient je nemá rád – raději výstižné tučné slovo. Ikony jen funkčně (telefon, WhatsApp, menu, šipka).
- **Dojem:** čistý a přehledný, ale hravý a lidský; seriózní a důvěryhodný. Velké reálné fotky dětí s produkty. Jemné animace při scrollu. Ne dark mode.
- **Ochrana obsahu:** copyright upozornění, vodoznak / nižší rozlišení u ukázek, zákaz pravého kliku na galerii (měkká ochrana), text „Obsah je chráněn autorským právem".

## 3. Struktura webu (fáze 1)

1. **/** – Homepage: hero (hromadná fotka dětí s produkty) + hlavní sdělení, problém → řešení, kategorie produktů, USP, sociální důkaz (loga MP, čísla), jak objednávka probíhá (vzorek → odečteme, celoročně), reference, FAQ teaser, CTA „Nezávazná poptávka".
2. **/o-nas** – Příběh od 1997, vlastní vývoj a know‑how, odzkoušeno ve školách, fotky týmu a provozu.
3. **/produkty** – Přehled kategorií + náhledy.
4. **/produkty/[kategorie]** – Detail kategorie se seznamem produktů. Kategorie:
   - `vzdelavaci-tiskoviny` (omalovánky, rébusníčky, pracovní listy)
   - `hry` (pexesa, stolní hry s kostkou, karetní hry)
   - `reflexni-prvky` (vesty, náramky, přívěsky, odrazky na aktovky)
   - `odmeny-do-soutezi` (batůžky, ručníky, hrnky, plecháčky, vaky)
   - `drobne-darky` (záložky, rozvrhy hodin, puzzle, samolepky, magnetky, buttony, „prevenťákovo vysvědčení")
   - `pro-mestskou-policii` (výšivky na uniformy, polepy aut, roll‑upy, stany, odznáčky, klíčenky, vektorizace loga)
5. **/produkty/[slug]** – Detail produktu (galerie, popis, varianty, množstevní ceny, CTA poptávka).
6. **/jak-to-funguje** – Průběh spolupráce (5 kroků), politika vzorků (vyšší cena za ks, poté odečet), celoroční objednávání.
7. **/cenik** – Princip cen: množstevní hladiny, cena vzorku, co ovlivňuje cenu. Bez fixního ceníku (individuální kalkulace).
8. **/reference** – Recenze, loga měst / MP (placeholder), případové studie „před / po".
9. **/faq** – Časté dotazy (viz sekce 03 zadání).
10. **/kontakt** – Kontakty, mapa (Petřvald u Karviné), krátký formulář.
11. **/poptavka** – Plný poptávkový formulář: kontakt, o jaké produkty jde, **upload loga** MP/úřadu, poznámka, souhlas GDPR.
12. **/gdpr**, **/obchodni-podminky** – Právní texty (placeholder / generované).

Kotva ve všech CTA → `/poptavka`. Telefon a WhatsApp v hlavičce. Sticky menu, max 6 položek: **Produkty · Jak to funguje · Ceník · Reference · O nás · Kontakt** + tlačítko „Nezávazná poptávka".

## 4. Texty a obsah

- **Fáze 1 = fiktivní web:** placeholder fotky (barevné plochy s popiskem zamýšlené fotky) + vymyšlené, ale realistické texty. Cílem je, aby klient viděl a mohl kritizovat a upravovat.
- Slogany od klienta k použití: *„…za rozumnou cenu. Proč přemýšlet nad tím, co už bylo vymyšleno. Využijte zkušenosti vašich kolegů z jiných regionů. Zkušenost se nedá zkopírovat."*
- Texty připraví designer, klient (Jiří Kielkovský) dodá finální texty a fotky ve fázi 2.

## 5. Technika

| Oblast | Řešení fáze 1 |
|---|---|
| **Stack** | Astro (statický web), Tailwind CSS v4, TypeScript. Katalog přes Astro content collections (Markdown). |
| **Repozitář** | Soukromý GitHub repo. |
| **Náhled / hosting** | GitHub Pages (build přes GitHub Actions). Dočasná adresa `*.github.io`, po registraci domény přesměrování na `preventik.cz`. |
| **Formuláře** | Fáze 1: navržené, neodesílají (nebo mailto fallback). Fáze 2: Formspree/Netlify Forms/vlastní endpoint + upload loga. |
| **SEO** | Meta tagy, `@astrojs/sitemap`, `robots.txt`, strukturovaná data (Organization, Product), sémantické nadpisy. Klíčové fráze: „prevence", „reklamní předměty pro děti", „preventivní program pro školy". |
| **GDPR** | Cookie lišta (odmítnutí předvybráno / bez sledování ve fázi 1), stránka Zásady ochrany osobních údajů. |
| **Analytika** | Fáze 2: Google Analytics + Search Console + Google Business (dodá klient/designer). |
| **Přístupnost** | Kontrast, alt texty, focus stavy, větší písmo, klávesnice. |

## 6. Fáze projektu

- **Fáze 0 – Setup:** repo, Astro skeleton, CI na GitHub Pages, workflow. ✅ probíhá
- **Fáze 1 – Vzorový web (tento úkol):** celý web s placeholder obsahem, CZ, k připomínkování. Výstup: odkaz na GitHub Pages.
- **Fáze 2 – Po připomínkách:** zapracování feedbacku, finální texty a fotky od klienta, funkční poptávkový formulář s uploadem loga, SK verze.
- **Fáze 3 – Spuštění:** registrace `preventik.cz` (klient/designer), přesměrování, analytika, cookie souhlas naostro, Google Business, strukturovaná data, 301 z případného starého webu.
- **Fáze 4 – Rozšíření:** e‑shop / kalkulačka (košík, doprava, „objednat vs. poptat" s množstevní slevou), blog / aktuality, správa a údržba (paušál).

## 7. Otevřené otázky pro klienta

1. Rozpočet a preferovaný termín spuštění (ve formuláři prázdné).
2. Finální doména – potvrdit `preventik.cz`, nebo alternativa (preventik.eu, prevence‑deti.cz…).
3. Existuje logo / název této pod‑značky, nebo ho vytvořit? (Fáze 1 používá placeholder wordmark „preventik".)
4. Je termín vázán na akci (veletrh, začátek školního roku)?
5. Rozsah SK verze – celý web, nebo jen klíčové stránky?
6. Reálné reference a loga měst, která smíme použít.
7. Má být ve fázi 1 poptávkový formulář už funkční (odesílat na e‑mail)?
