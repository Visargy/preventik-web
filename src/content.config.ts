import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const kategorieSlug = [
  "vzdelavaci-tiskoviny",
  "hry",
  "reflexni-prvky",
  "odmeny-do-soutezi",
  "drobne-darky",
  "pro-mestskou-policii",
] as const;

const produkty = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/produkty" }),
  schema: z.object({
    nazev: z.string(),
    kategorie: z.enum(kategorieSlug),
    poradi: z.number().default(50),
    kratky: z.string(),
    fotoPopis: z.string(),
    cenaOd: z.number().optional(),
    jednotka: z.string().default("ks"),
    minMnozstvi: z.number().optional(),
    vzorekCena: z.number().optional(),
    prednosti: z.array(z.string()).default([]),
    varianty: z.array(z.string()).default([]),
    novinka: z.boolean().default(false),
    doporucujeme: z.boolean().default(false),
  }),
});

export const collections = { produkty };
