# preventik.cz (pracovní název)

Web na míru pro **VaC design s.r.o. / Jiří Kielkovský** – katalog a poptávka vzdělávacích
a reklamních předmětů pro preventivní programy městské policie a měst.

> **Fáze 1 – vzorový web k připomínkování.** Obsah (texty i fotky) je placeholder,
> vymyšlený podle zadání a logické dedukce. Klient ho ve fázi 2 přepíše.

- Zadání: `Taťka pracovní název policajt v1.0.pdf`
- Plán: [`PLAN.md`](PLAN.md)
- Postup práce a nasazení: [`WORKFLOW.md`](WORKFLOW.md)
- Připomínky klienta: [`FEEDBACK.md`](FEEDBACK.md)

## Technologie

Astro (statický web) · Tailwind CSS v4 · TypeScript · katalog přes content collections.

## Vývoj

```bash
npm install
npm run dev       # http://localhost:4321/preventik
npm run build     # -> ./dist
npm run preview
```

## Nasazení (dočasný náhled)

Push do `main` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages.

**Náhled pro klienta:** <https://visargy.github.io/preventik-web/>
Repozitář: <https://github.com/Visargy/preventik-web> (veřejný – nutné pro Pages na Free plánu).

`site` a `base` se pro Pages nastavují automaticky z proměnných `SITE_URL` / `BASE_PATH`
v CI. Lokálně platí výchozí `/preventik`.

## Až bude doména

Viz [`WORKFLOW.md`](WORKFLOW.md) – nastavit `site: 'https://preventik.cz'`, zrušit `base`,
přidat `public/CNAME`, povolit indexaci (`robots.txt` + `<meta robots>`).

## Struktura

```
src/
  content/produkty/     Markdown katalog produktů (21 položek, 6 kategorií)
  content.config.ts     Schéma katalogu
  layouts/Zaklad.astro  Základní layout (SEO, JSON-LD, cookie lišta)
  components/            Hlavička, patička, sekce, karty, FAQ, formulářová výzva
  lib/site.ts           Kontakty, menu, kategorie, helper href()
  lib/obsah.ts          Sdílený placeholder obsah (FAQ, kroky, reference, čísla)
  pages/                Stránky webu
public/                 favicon, robots.txt
```
