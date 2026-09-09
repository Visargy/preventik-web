# Workflow

## Zásady

- **Každá změna = commit + push.** Malé, tématické commity. Po pushnutí do `main` se web sám nasadí na GitHub Pages (GitHub Actions).
- Pracujeme zatím přímo na větvi `main` (jeden vývojář, rychlá iterace). Až přibudou lidé nebo se web spustí naostro, přejde se na feature větve + PR.
- **Dočasnost:** dokud není doména `preventik.cz`, běží vše jen na GitHub Pages. Žádné placené služby, žádná ostrá analytika, cookie lišta bez sledování.

## Commit konvence

```
<typ>: <stručný popis česky>

typy: feat (nová funkce/stránka), fix (oprava), content (texty/obrázky),
      style (vzhled/CSS), chore (konfigurace, závislosti), docs (dokumentace)
```

Příklad: `feat: stránka Jak to funguje`, `content: FAQ podle sekce 03 zadání`.

Každý commit končí řádkem:
```
Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
```

## Lokální vývoj

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build do ./dist
npm run preview  # náhled produkčního buildu
```

## Nasazení (náhled pro klienta)

1. `git push` do `main`.
2. GitHub Actions (`.github/workflows/deploy.yml`) spustí `npm run build` a nasadí `dist/` na GitHub Pages.
3. Náhled: `https://<uživatel>.github.io/<repo>/` (přesná adresa v README po vytvoření repa).

> Pozn.: GitHub Pages ze **soukromého** repa vyžaduje placený GitHub plán. Pokud je účet Free, repo se pro náhled přepne na veřejné (obsahuje jen placeholder obsah, žádné citlivé údaje), nebo se náhled řeší přes Claude Artifact.

## Připomínky klienta

- Sbíráme do `FEEDBACK.md` (datum, stránka, připomínka, stav).
- Nebo jako GitHub Issues se štítkem `pripominka-klienta`.
- Po zapracování: commit s odkazem na položku feedbacku.

## Až bude doména

1. Klient/designer zaregistruje `preventik.cz`.
2. V `astro.config.mjs` se nastaví `site: 'https://preventik.cz'` a zruší `base`.
3. Na GitHub Pages se přidá custom doména (`public/CNAME`) + DNS.
4. Nebo se přejde na jiný hosting (Netlify / Cloudflare Pages / vlastní).
5. Teprve pak: ostrá analytika, cookie souhlas, Google Business, odeslání sitemap.
