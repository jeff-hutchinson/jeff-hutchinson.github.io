import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const learningCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/learning" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seriesOrder: z.number(),
  }),
});

export const collections = {
  'learning': learningCollection,
};
