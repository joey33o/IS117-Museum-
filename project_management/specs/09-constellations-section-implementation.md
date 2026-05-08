# 09 — Constellations Section Implementation Notes

This document describes the concrete code + file changes required to implement the Constellations page and nav entry. It is intentionally minimal and aligned with the existing design system and motion constraints.

## 1. Target UX Summary
- A new nav item: **Constellations**.
- A new page: `/constellations`.
- The page is four scroll-driven “slides”:
  - Orion, Cygnus, Cassiopeia, Ursa Major (Big Dipper)
- Each slide pins and reveals the caption subtly.
- The page triggers a Terrestrial → Celestial theme progression using the existing `.is-space-era` + CSS-variable approach.

## 2. Files to Add / Change
### Add
- `website/app/constellations/page.tsx`
- `website/lib/content/constellations-data.ts` (or `website/lib/content/constellations.ts`)
- `website/components/content/constellations/constellation-slide.tsx` (optional, preferred for cleanliness)
- `website/components/content/constellations/constellations-trigger.tsx` (client component for ScrollTrigger setup)

### Change
- `website/components/site/adaptive-nav.tsx` (add nav item)

### Assets (copy)
Copy these repo-root images into `website/public/constellations/`:
- `refConstellation/Orion.png` → `website/public/constellations/orion.png`
- `refConstellation/Cygnus.png` → `website/public/constellations/cygnus.png`
- `refConstellation/Cassiopeia.png` → `website/public/constellations/cassiopeia.png`
- `refConstellation/Big_Dipper.png` → `website/public/constellations/big-dipper.png`

Rationale: Next.js static export will only serve local assets from `website/public/`.

## 3. Content Model (data)
Create a small local dataset (no external DB) with stable IDs.

Example (`website/lib/content/constellations-data.ts`):

```ts
export type ConstellationSlide = {
  id: "orion" | "cygnus" | "cassiopeia" | "ursa-major";
  title: string;
  myth: string; // 2–3 sentences
  imageSrc: string; // /constellations/...
};

export const CONSTELLATION_SLIDES: ConstellationSlide[] = [
  {
    id: "orion",
    title: "Orion",
    myth: "Orion was a legendary hunter, favored by Artemis, whose story ends in tragedy—most famously when a giant scorpion is sent against him after he boasts he can hunt every beast on Earth. After his death, Artemis asks Zeus to set Orion among the stars, with Scorpius placed opposite so they never share the sky.",
    imageSrc: "/constellations/orion.png",
  },
  {
    id: "cygnus",
    title: "Cygnus",
    myth: "One myth says a devoted friend begged Zeus to turn him into a swan so he could dive into a river and save his companion. Moved by that loyalty and courage, Zeus later placed the swan in the heavens as Cygnus.",
    imageSrc: "/constellations/cygnus.png",
  },
  {
    id: "cassiopeia",
    title: "Cassiopeia",
    myth: "Cassiopeia, queen of Ethiopia, bragged she was more beautiful than the Nereids, and Poseidon punished her pride by sending the sea monster Cetus. Cassiopeia is set in the sky as a warning—condemned to spend part of the year upside down.",
    imageSrc: "/constellations/cassiopeia.png",
  },
  {
    id: "ursa-major",
    title: "Ursa Major",
    myth: "In Roman myth, the nymph Callisto bore a son by Jupiter (Zeus), and Juno (Hera) transformed her into a bear out of jealousy. When her grown son nearly killed her, Jupiter intervened and placed them among the stars as the Great Bear.",
    imageSrc: "/constellations/big-dipper.png",
  },
];
```

## 4. Slide Layout (sticky stage)
Implement a repeated slide structure similar in spirit to the reference `scrollytelling.md` pattern:

- Outer `<section>` is taller than the viewport (e.g. `180vh`) to create “pin time”.
- Inner slide stage uses `position: sticky; top: 0; height: 100vh`.

Suggested structure:

```tsx
<section data-constellation-slide style={{ height: "180vh" }}>
  <div className="..." style={{ position: "sticky", top: 0, height: "100vh" }}>
    <img ... />
    <div className="caption">...</div>
  </div>
</section>
```

Use existing Tailwind tokens / CSS variables; avoid new colors.

## 5. Per-slide Reveal (ScrollTrigger)
Create a client component (`constellations-trigger.tsx`) that:
- Registers `ScrollTrigger` once
- Queries all slide nodes and their caption nodes
- Adds one ScrollTrigger per slide to fade/translate caption in as progress advances

Pseudo-logic:

```ts
ScrollTrigger.create({
  trigger: section,
  start: "top top",
  end: "bottom top",
  scrub: prefersReducedMotion ? false : true,
  onUpdate: (self) => {
    // map self.progress 0..1 to opacity/y for caption
  },
});
```

Reduced-motion:
- If `prefers-reduced-motion: reduce`, set caption to fully visible immediately (no scrub).

## 6. Page-scoped Theme Transition
Because the existing `TransitionTrigger` is eras-route specific, add a second page-scoped trigger for `/constellations`.

Requirements:
- Toggle `<body>.is-space-era` on entering the “space” half of the page.
- Update the same CSS variables used by `TransitionTrigger` (so the nav + global tokens stay consistent).

Recommended approach:
- Factor the color-mixing helpers into a shared util (optional; can be duplicated if you prefer minimal refactor).
- On `/constellations`, create a ScrollTrigger that:
  - Starts near slide 2 and ends near slide 4
  - Calls the shared “setScrollThemeProgress(progress)” function

Reduced-motion:
- Snap to 0/1 based on whether the trigger is active.

## 7. Nav Update
Update `website/components/site/adaptive-nav.tsx`:
- Add `{ href: '/constellations', label: 'Constellations' }` to `navItems`.
- Ensure `aria-current="page"` is applied when pathname matches `/constellations`.

## 8. Build & Export Considerations
- Ensure images are in `website/public/`.
- Prefer standard `<img>` for simplicity with static export, or `next/image` with `images.unoptimized = true` (already typical for GH Pages).

## 9. Done Checklist
- [ ] `/constellations` exists and renders 4 slides
- [ ] Captions are myth-only and 2–3 sentences
- [ ] Subtle scroll reveal works and respects reduced motion
- [ ] Theme transition progresses across the page
- [ ] Nav includes Constellations link
- [ ] `npm run build` succeeds in `website/`
