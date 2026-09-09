## Projekt

Web „preventik.cz" (pracovní název) pro klienta **VaC design s.r.o. / Jiří Kielkovský** –
katalog + poptávka vzdělávacích a reklamních předmětů pro preventisty městské policie a měst.
Kontext a rozhodnutí: `PLAN.md`. Postup práce: `WORKFLOW.md`.

- **Fáze 1 = vzorový web s placeholder obsahem** k připomínkování klientem. Texty i fotky
  jsou vymyšlené podle zadání – nevydávat je za finální.
- Jazyk webu i obsahu je **čeština** (později + slovenština).
- **Každá změna = commit + push** (viz `WORKFLOW.md`, commit konvence).
- Dokud není doména: nasazení jen na GitHub Pages, `<meta robots>` = noindex,
  `robots.txt` = Disallow, cookie lišta bez sledování.
- Placeholder fotky přes komponentu `src/components/Foto.astro` (nepoužívat `<img>`).
- Ikony používat minimálně – klient je nemá rád.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
