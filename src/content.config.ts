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
    // Optional second line under the role, e.g. a partner's own company.
    entity: z.string().optional(),
    // Optional one line summary for cards and meta tags. The full bio is the markdown body.
    summary: z.string().optional(),
    // Omitted where the URL has not been supplied yet. The partners page renders the
    // label without a link in that case rather than guessing an address.
    linkedin: z.string().url().optional(),
    photo: z.string().optional(),
    domains: z.string(),
    coverage: z.string(),
    order: z.number(),
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
          // Deep link to the matching section on the services page.
          href: z.string().optional(),
          // "phases" layout only.
          when: z.string().optional(),
          number: z.string().optional(),
        })
      )
      .min(1),
  }),
});

// One file per section of the single services page. The same collection drives both
// the sticky section nav and the sections themselves, so the two cannot drift apart.
const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    // The anchor id. These URLs are sent to prospects on their own, so they are set
    // explicitly here rather than derived from the filename.
    anchor: z.string(),
    // Shorter label for the sticky nav, where the full title does not fit.
    navLabel: z.string(),
    lead: z.string(),
    order: z.number(),
    // Labelled paragraphs: "Delivered", "Applies when", "Not included", "Basis",
    // "Sequence". Which labels appear varies by service.
    blocks: z
      .array(
        z.object({
          label: z.string(),
          body: z.string(),
        })
      )
      .min(1),
  }),
});

export const collections = { partners, sections, services };
