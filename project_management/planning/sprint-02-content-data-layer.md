# Sprint 02 — Content & Data Layer

**Estimate:** 1 hour

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Define the telescope content schema and populate three entries — **Hubble**, **James Webb**, and **Chandra** — using the real factual content extracted from the reference files in `references/`. No placeholder text; every description must come directly from the source material.

---

## Tasks

1. **Read the reference files** before writing any content:
   - `references/hubbleTele.txt` — Hubble history, specs, instruments, achievements.
   - `references/JamesWebbTele.txt` — JWST launch date, mirror specs, instruments, mission goals.
   - `references/CLandraTele.txt` and `references/MoreClandra.txt` — Chandra X-ray Observatory mirrors, iridium coatings, X-ray astronomy context.
2. Create `src/content/config.ts` and define a `telescopes` collection with a Zod schema.
3. Write three Markdown files in `src/content/telescopes/` using the extracted facts — one entry per telescope.
4. Confirm Astro's content API resolves the collection without type errors.

---

## Files

| File | Action |
|---|---|
| `src/content/config.ts` | Create — Zod schema for `telescopes` collection |
| `src/content/telescopes/hubble.md` | Create — content from `references/hubbleTele.txt` |
| `src/content/telescopes/james-webb.md` | Create — content from `references/JamesWebbTele.txt` |
| `src/content/telescopes/chandra.md` | Create — content from `references/CLandraTele.txt` + `MoreClandra.txt` |

---

## Schema (paste into `config.ts`)

```ts
import { defineCollection, z } from 'astro:content';

const telescopes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(), // relative path to public/images/
  }),
});

export const collections = { telescopes };
```

## Reference → Content Extraction Guide

Read each file, then write the frontmatter `description` and body copy using the facts below as a starting point. Paraphrase where needed; do not paste raw scraped text verbatim.

### hubble.md (source: `references/hubbleTele.txt`)
Key facts to include:
- Launched 1990; 43.5 ft long, 14 ft diameter, ~24,000 lbs
- 94.5-inch primary mirror; observes ultraviolet through infrared
- Five astronaut servicing missions extended its operational life
- 1.7 million observations; 22,000+ peer-reviewed papers; 35+ years of operation
- Current instruments: ACS, COS, STIS, WFC3
- Orbits at 300 miles altitude, 95-minute orbital period, 17,000 mph

### james-webb.md (source: `references/JamesWebbTele.txt`)
Key facts to include:
- Launched December 25, 2021; infrared observatory
- 6.5 m (21.3 ft) primary mirror; 18 gold-coated hexagonal mirror segments
- Five-layer sun shield: 21.197 m × 14.162 m; maintains 600°+ temperature difference
- Mission goals: early universe, galaxy evolution, star formation, exoplanet atmospheres
- Instruments: NIRCam, NIRSpec, MIRI, FGS/NIRISS
- Innovations: folding segmented mirrors, cryogenic systems, microshutters

### chandra.md (source: `references/CLandraTele.txt` + `references/MoreClandra.txt`)
Key facts to include:
- Part of NASA's "Great Observatories" fleet
- Mirrors coated with iridium; precision aligned to 1.3 micrometers
- High Resolution Mirror Assembly built at Eastman Kodak
- Observes X-rays, which cannot be collected with conventional mirrors
- Managed by NASA's Marshall Center; operations from the Chandra X-ray Center (CXC)

### Frontmatter shape for all three entries

```md
---
title: "Hubble Space Telescope"
description: "Launched in 1990, Hubble has made 1.7 million observations over 35 years, orbiting 300 miles above Earth and observing in ultraviolet through infrared light."
image: "/images/hubble.jpg"
---

<!-- Body copy: 2–3 sentences drawn from the reference file expanding on instruments or a key discovery. -->
```

---

## Acceptance Criteria

- [ ] `src/content/config.ts` exports a `telescopes` collection with `title`, `description`, and `image` fields.
- [ ] Three `.md` files exist under `src/content/telescopes/` named `hubble.md`, `james-webb.md`, `chandra.md`.
- [ ] Each `description` field contains a real factual sentence traceable to its reference file — no "lorem ipsum" or invented copy.
- [ ] Body copy in each entry contains at least two factual sentences sourced from the reference files.
- [ ] `npm run build` passes with no content-layer type errors.
- [ ] Running `getCollection('telescopes')` in a temporary `index.astro` log returns all three entries (verify in terminal output or devtools).

---

## Verification Steps

1. In `src/pages/index.astro`, temporarily add:
   ```astro
   ---
   import { getCollection } from 'astro:content';
   const entries = await getCollection('telescopes');
   console.log(entries.map(e => e.data.title));
   ---
   ```
2. Run `npm run dev` — terminal must log all three titles.
3. Remove the debug log before ending the sprint.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** render the entries on the page yet — that is Sprint 07.
- Do **not** add extra fields (tags, date, author) beyond `title`, `description`, `image`.
- Do **not** use a database, CMS, or external API — data lives in `src/content` only.
- Do **not** place images in `src/` — all images go in `public/images/`.
