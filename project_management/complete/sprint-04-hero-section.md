# Sprint 04 — Hero Section

**Estimate:** 1–2 hours

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Build `Hero.astro` — the full-viewport Grunge landing section with an atmospheric grain overlay on images. This section defines the initial Terrestrial aesthetic and marks the visual start of the scroll journey. Copy for the headline and subheadline must be drawn from the telescope history reference files, not invented.

---

## Tasks

1. **Read the history reference files** before writing any copy:
   - `references/2Historyoftelescope.txt` — the 1608 invention by Hans Lipperhey, Galileo's discoveries (Jupiter's moons, lunar surface), and the telescope's societal impact.
   - `references/telescopeHisotry.txt` — the full scholarly arc from early refracting telescopes through Newton's reflector, Herschel, and 19th-century observatory building.
2. Create `src/components/Hero.astro`.
3. Write the `<h1>` headline and `<p>` subheadline using copy derived from the history references — e.g., the 1608 invention as the opening framing device.
4. Build a full-viewport (`100dvh`) section using `var(--font-primary)` for all text.
5. Use `references/blackhole.jpg` (copy it to `public/images/blackhole.jpg`) as the hero background or feature image; apply `filter: var(--img-filter)`.
6. Add the **grain overlay** as a CSS pseudo-element on images (see code block below).
7. Add a zero-height `id="transition-trigger"` div at the bottom of the Hero for Sprint 06.
8. Import `Hero` into `src/pages/index.astro`.

---

## Reference → Copy Guide

Read both history files, then write copy using these anchor points:

- **Headline (`<h1>`):** Frame the 400-year arc. Example direction: *"Four Centuries of Looking Up"* or a quote-adjacent phrase from the Lipperhey/Galileo discovery narrative.
- **Subheadline (`<p>`):** 1–2 sentences. Draw from the opening of `2Historyoftelescope.txt`: the 1608 patent, Galileo's 1609 improvements, the first view of Jupiter's moons. Keep it under 25 words.
- Do not invent facts. Every claim must be verifiable against `references/2Historyoftelescope.txt` or `references/telescopeHisotry.txt`.

---

## Files

| File | Action |
|---|---|
| `docs/src/components/Hero.astro` | Create |
| `docs/src/pages/index.astro` | Edit — import and render `<Hero />` |
| `docs/public/images/blackhole.jpg` | Copy from `references/blackhole.jpg` — use as hero image |
| `docs/public/images/grain.png` | Add — noise/grain texture (tileable PNG, ~200×200px) |

---

## Grain Overlay (CSS pseudo-element approach)

```css
.grain-image {
  position: relative;
  display: inline-block;
}

.grain-image img {
  filter: var(--img-filter);
  display: block;
  width: 100%;
}

.grain-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/grain.png');
  background-repeat: repeat;
  opacity: 0.18;
  pointer-events: none;
  mix-blend-mode: multiply;
}
```

---

## Acceptance Criteria

- [ ] **AC 1.1:** Page loads with `#F1E7D0` background and Crimson Text serif font visible in the Hero.
- [ ] **AC 1.2:** Images within `Hero.astro` have the grain overlay visible (check at 100% zoom; it should be subtle).
- [ ] An element with `id="transition-trigger"` exists at the bottom of the Hero section (can be a zero-height div).
- [ ] The `filter: var(--img-filter)` is applied to the hero image — switching to `.is-space-era` changes it to `brightness(1.1)`.
- [ ] Section fills the full viewport height on load.

---

## Verification Steps

1. `localhost:4321` — Hero fills viewport, serif font renders.
2. DevTools → Elements → find the hero `<img>` → Computed: `filter: sepia(0.5) contrast(0.9)`.
3. Zoom browser to 150%+ and look for subtle film-grain texture on the image.
4. Confirm `id="transition-trigger"` element is in the DOM.
5. Apply `is-space-era` via DevTools — hero image filter changes to `brightness(1.1)`.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** add scroll animations or GSAP in this component — that is Sprint 06.
- Do **not** build a slideshow, carousel, or parallax background.
- Do **not** use Three.js or any 3D effect.
- Do **not** add a custom cursor.
- Do **not** invent headline or body copy — all text must come from the reference files.
- Do **not** add more than one image to the Hero — `blackhole.jpg` is sufficient.
