# 09 — Constellations Section Spec

## 1. Objective
Add a new **Constellations** section to the site as a dedicated page that uses a **scrollytelling “slide” structure** (sticky panels + scroll-driven reveals) and participates in the site’s **Terrestrial → Celestial** theme transition model.

This page showcases 4 constellations (Orion, Cygnus, Cassiopeia, Ursa Major/Big Dipper) using 1 image + a 2–3 sentence myth caption per slide.

## 2. Scope
### In scope
- Add a new route: `/constellations` (Next.js App Router page).
- Add a new primary nav item labeled **Constellations** in the sticky header.
- Create a scrollytelling layout with **4 sticky slides**:
  - Slide 1: Orion
  - Slide 2: Cygnus
  - Slide 3: Cassiopeia
  - Slide 4: Ursa Major (Big Dipper)
- Each slide contains:
  - Full-bleed image (from `refConstellation/`, copied into `website/public/` for serving)
  - Title (constellation name)
  - Myth caption: **2–3 sentences**, myth-only, no astronomy “how to find” instructions
- Scroll-driven motion is minimal and editorial:
  - Caption fades/settles in (opacity + small translate)
  - No 3D, no parallax stacks, no complex sequences
- The page includes a theme transition using the existing global mechanism:
  - The `<body>` class `.is-space-era` is toggled as the viewer scrolls
  - The CSS variable-driven colors/typography update in sync with scroll progress

### Assets
- Source images live at repo root: `refConstellation/`
  - `Orion.png`
  - `Cygnus.png`
  - `Cassiopeia.png`
  - `Big_Dipper.png`

## 3. Non-Goals
- No additional pages, modals, filters, or galleries.
- No external APIs or databases.
- No Three.js / WebGL.
- No custom cursor.
- No “interactive star map” behavior.
- No additional nav levels (dropdowns) — just one new nav link.

## 4. Dependencies
- Next.js App Router site under `website/`.
- GSAP + ScrollTrigger (already present in `website/package.json`).
- Existing theme mechanism: `.is-space-era` and scroll-mixed CSS variables (see `TransitionTrigger`).
- Images must be copied into `website/public/` so static export can serve them.
- Myth copy source: `refConstellation/Mythdetails.txt`.

## 5. Implementation Tasks
- Add `/constellations` page:
  - Create content model for the 4 constellation slides (title, myth caption, image path).
  - Render 4 stacked slides.
- Add scrollytelling mechanics:
  - Use sticky slide stage + taller section wrapper (e.g., 170–200vh) to create “pin time”.
  - Hook ScrollTrigger to animate caption reveal per slide.
- Add Constellations theme transition:
  - Add a page-scoped ScrollTrigger that toggles `.is-space-era` and updates the same CSS vars used elsewhere.
  - Respect `prefers-reduced-motion`: disable scrubbing, snap to end states.
- Add nav link:
  - Update `AdaptiveNav` items to include `/constellations`.
- Asset wiring:
  - Copy the 4 images from `refConstellation/` to `website/public/constellations/`.

## 6. Acceptance Criteria
### Navigation
- **AC 6.1:** Nav shows a “Constellations” link and it routes to `/constellations`.
- **AC 6.2:** Nav remains sticky and visually consistent with the existing design system.

### Scrollytelling layout
- **AC 6.3:** The page renders exactly 4 slides.
- **AC 6.4:** Each slide uses a sticky stage (content remains pinned while scroll progresses through the slide).
- **AC 6.5:** Each slide shows its image plus a 2–3 sentence myth caption.

### Motion + transition
- **AC 6.6:** Caption reveal is limited to subtle opacity/translate only.
- **AC 6.7:** Reduced-motion users see the content without scroll-scrub animation (no jitter, no hidden text).
- **AC 6.8:** As the viewer crosses the page’s transition threshold, the page’s theme progresses from Terrestrial to Celestial:
  - `.is-space-era` becomes active at/after the threshold
  - Background/text CSS variables update in sync with scroll progress

### Build
- **AC 6.9:** `npm run build` succeeds when run from `website/`.
- **AC 6.10:** Static export serves the 4 images correctly from `/constellations/*`.

## 7. Verification Steps
- Run from `website/`:
  - `npm run build`
  - (Optional) `npm run dev` and manually scroll `/constellations`
- Manual checks:
  - Nav link works and highlights appropriately
  - Each slide pins and reveals caption smoothly
  - Theme transition engages on scroll
  - Reduced-motion disables scroll-scrub transitions

## 8. Deliverables
- New page route under `website/app/constellations/page.tsx` (and any minimal supporting components/data).
- Updated nav in `website/components/site/adaptive-nav.tsx`.
- Copied images under `website/public/constellations/`.
- This spec + the implementation document.

## 9. Sprint Status Board
### Planned
- [ ] Create constellation slide data model
- [ ] Copy images into `website/public/constellations/`
- [ ] Implement `/constellations` page layout
- [ ] Add per-slide reveal ScrollTriggers
- [ ] Add page-scoped theme transition trigger
- [ ] Add nav link + active state
- [ ] Verify reduced-motion behavior
- [ ] Verify `npm run build`

### Active
- [ ] (none)

### Completed
- [ ] (none)
