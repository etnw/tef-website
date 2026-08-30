import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One markdown file per partner. Frontmatter carries the structured fields, the
// markdown body carries the bio paragraphs.
const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    location: z.string(),
    // Optional one line summary for cards and meta tags. The full bio is the markdown body.
    summary: z.string().optional(),
    linkedin: z.string().url().optional(),
    photo: z.string().optional(),
    order: z.number().optional(),
  }),
});

// Repeated "eyebrow + heading + list of items" blocks on the home page.
// "layout" selects which existing CSS structure the block renders into.
const sections = defineCollection({
  loader: glob({ base: './src/content/sections', pattern: '**/*.md' }),
  schema: z.object({
    eyebrow: z.string(),
    // May contain inline HTML such as <em> and &nbsp;, rendered with set:html.
    title: z.string(),
    layout: z.enum(['serve', 'items', 'phases', 'not']),
    panel: z.boolean().default(false),
    intro: z.string().optional(),
    outro: z.string().optional(),
    order: z.number().optional(),
    items: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string(),
          // "phases" layout only.
          when: z.string().optional(),
          number: z.string().optional(),
        })
      )
      .min(1),
  }),
});

export const collections = { partners, sections };
