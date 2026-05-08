# 09 - Constellations Section Spec

## 1. Objective
Add a dedicated **Constellations** page that uses the reference repo's presentation-style scrollytelling transition: stacked sticky slides, image crossfade/settle motion, and delayed caption reveal.

This page showcases 4 constellations (Orion, Cygnus, Cassiopeia, Ursa Major/Big Dipper) using one image plus a 2-3 sentence myth caption per slide.

## 2. Scope
### In scope
- Add a new route: `/constellations` (Next.js App Router page).
- Add a primary nav item labeled **Constellations** in the sticky header.
- Create a scrollytelling layout with 4 sticky slides:
  - Slide 1: Orion
  - Slide 2: Cygnus
  - Slide 3: Cassiopeia
  - Slide 4: Ursa Major (Big Dipper)
- Each slide contains:
  - A full-viewport dark presentation stage
  - A layered constellation image treatment
  - Title (constellation name)
  - Myth caption: 2-3 sentences, myth-only, no astronomy "how to find" instructions
- Scroll-driven motion is minimal and editorial:
  - incoming slide stacks above the previous slide
  - image fades in early and settles with small scale/translate motion
  - caption fades/translates in later in the scroll range
- Reduced-motion users see all slide content without scroll-scrub animation.

### Assets
- Source images live at repo root: `refConstellation/`
  - `Orion.png`
  - `Cygnus.png`
  - `Cassiopeia.png`
  - `Big_Dipper.png`

## 3. Non-Goals
- No Museum terrestrial-to-celestial body/theme transition for this page.
- No `.is-space-era` toggling from constellation code.
- No global scroll-theme CSS variable mixing from constellation code.
- No additional pages, modals, filters, or galleries.
- No external APIs or databases.
- No Three.js / WebGL.
- No custom cursor.
- No interactive star map behavior.
- No additional nav levels or dropdowns.

## 4. Dependencies
- Next.js App Router site under `website/`.
- GSAP + ScrollTrigger (already present in `website/package.json`).
- Reference behavior from `refgithub/bseai_degree/components/motion/PresentationSlide.tsx`.
- Images must be copied into `website/public/` so static export can serve them.
- Myth copy source: `refConstellation/Mythdetails.txt`.

## 5. Implementation Tasks
- Add `/constellations` page:
  - Create content model for the 4 constellation slides.
  - Render 4 stacked sticky slides.
- Add scrollytelling mechanics:
  - Use sticky slide stage plus taller section wrapper (`170vh` default).
  - Use ascending `z-index` so incoming slides stack above outgoing slides.
  - Hook ScrollTrigger to animate layered image and caption reveal per slide.
- Add route-scoped slide styling:
  - Dark stage background.
  - Blurred/expanded background image.
  - Crisp foreground image with `object-contain`.
  - Caption panel with accessible contrast.
- Add nav link:
  - Update `AdaptiveNav` items to include `/constellations`.
- Asset wiring:
  - Copy the 4 images from `refConstellation/` to `website/public/constellations/`.

## 6. Acceptance Criteria
### Navigation
- **AC 6.1:** Nav shows a "Constellations" link and it routes to `/constellations`.
- **AC 6.2:** Nav remains sticky and visually consistent with the existing design system.

### Scrollytelling layout
- **AC 6.3:** The page renders exactly 4 slides.
- **AC 6.4:** Each slide uses a sticky stage.
- **AC 6.5:** Each slide shows its image plus a 2-3 sentence myth caption.
- **AC 6.6:** Incoming slides visually stack over previous slides.
- **AC 6.7:** Slide height avoids long empty scroll zones.

### Motion
- **AC 6.8:** Image transition is limited to opacity plus small scale/translate changes.
- **AC 6.9:** Caption reveal is limited to subtle opacity/translate only.
- **AC 6.10:** Reduced-motion users see the content without scroll-scrub animation.
- **AC 6.11:** Constellation code does not toggle `.is-space-era` or call the global scroll-theme mixer.

### Build
- **AC 6.12:** `npm run build` succeeds when run from `website/`.
- **AC 6.13:** Static export serves the 4 images correctly from `/constellations/*`.

## 7. Verification Steps
- Run from `website/`:
  - `npm run build`
  - Optional: `npm run dev` and manually scroll `/constellations`
- Manual checks:
  - Nav link works and highlights appropriately.
  - Each slide pins and transitions smoothly.
  - Image/caption timing resembles the reference presentation transition.
  - No global Museum theme transition occurs on `/constellations`.
  - Reduced-motion disables scroll-scrub transitions.

## 8. Deliverables
- New page route under `website/app/constellations/page.tsx`.
- Supporting constellation data and components.
- Updated nav in `website/components/site/adaptive-nav.tsx`.
- Copied images under `website/public/constellations/`.
- This spec and the implementation document.

## 9. Sprint Status Board
### Planned
- [ ] Create constellation slide data model
- [ ] Copy images into `website/public/constellations/`
- [ ] Implement `/constellations` page layout
- [ ] Add per-slide scrollytelling ScrollTriggers
- [ ] Add route-scoped slide surface styling
- [ ] Add nav link + active state
- [ ] Verify reduced-motion behavior
- [ ] Verify `npm run build`

### Active
- [ ] (none)

### Completed
- [ ] (none)
