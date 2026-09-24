import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      initials: z.string(),
      logo: image().optional(),
      title: z.string(),
      start: z.string(),
      end: z.string(),
      order: z.number(),
      link: z
        .object({
          href: z.string(),
          label: z.string(),
        })
        .optional(),
    }),
});

export const collections = { experience };
