// Centrální data webu. Fáze 1 = placeholder / z veřejných zdrojů zadání.

export const firma = {
  znacka: "preventik",
  znackaDlouha: "preventik.cz",
  provozovatel: "VaC design s.r.o.",
  osoba: "Jiří Kielkovský",
  ico: "25367315",
  pravniForma: "s.r.o.",
  telefon: "+420 775 321 678",
  telefonHref: "tel:+420775321678",
  whatsappHref: "https://wa.me/420775321678",
  email: "info@mojereklamka.cz",
  adresa: "Petřvald u Karviné",
  odRoku: 1997,
  puvodniWeb: "mojereklamka.cz",
};

// Slogan od klienta (k doslovnému použití)
export const slogan =
  "Proč přemýšlet nad tím, co už bylo vymyšleno. Využijte zkušenosti kolegů z jiných regionů. Zkušenost se nedá zkopírovat.";

export const hlavniMenu = [
  { text: "Produkty", odkaz: "/produkty" },
  { text: "Jak to funguje", odkaz: "/jak-to-funguje" },
  { text: "Ceník", odkaz: "/cenik" },
  { text: "Reference", odkaz: "/reference" },
  { text: "O nás", odkaz: "/o-nas" },
  { text: "Kontakt", odkaz: "/kontakt" },
];

export const patickaMenu = [
  { text: "Zásady ochrany osobních údajů", odkaz: "/gdpr" },
  { text: "Obchodní podmínky", odkaz: "/obchodni-podminky" },
  { text: "Časté dotazy", odkaz: "/faq" },
];

export const kategorie = [
  {
    slug: "vzdelavaci-tiskoviny",
    nazev: "Vzdělávací tiskoviny",
    strucne: "Omalovánky, rébusníčky a pracovní listy, které si děti odnesou domů.",
    barva: "policie",
  },
  {
    slug: "hry",
    nazev: "Hry",
    strucne: "Pexesa, karetní hry a stolní hry s kostkou na dopravní a bezpečnostní témata.",
    barva: "hasici",
  },
  {
    slug: "reflexni-prvky",
    nazev: "Reflexní prvky",
    strucne: "Vesty, náramky, přívěsky a odrazky – viditelnost jako odměna i jako pomůcka.",
    barva: "policie",
  },
  {
    slug: "odmeny-do-soutezi",
    nazev: "Odměny do soutěží",
    strucne: "Batůžky, ručníky, hrnky a plecháčky pro vítěze besed a soutěží.",
    barva: "hasici",
  },
  {
    slug: "drobne-darky",
    nazev: "Drobné dárky pro každého",
    strucne: "Záložky, rozvrhy hodin, puzzle, samolepky, magnetky, buttony, „vysvědčení prevenťáka“.",
    barva: "policie",
  },
  {
    slug: "pro-mestskou-policii",
    nazev: "Pro městskou policii",
    strucne: "Výšivky na uniformy, polepy aut, roll‑upy, stany, odznáčky, vektorizace loga.",
    barva: "hasici",
  },
];

/** Interní odkaz s ohledem na base path (GitHub Pages). */
export function href(cesta: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!cesta.startsWith("/")) cesta = "/" + cesta;
  return base + cesta || "/";
}
