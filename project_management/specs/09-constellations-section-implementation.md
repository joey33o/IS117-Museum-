# 09 - Constellations Section Implementation Notes

This document describes the concrete code and file changes required to implement the Constellations page and nav entry. It is intentionally scoped to the reference repo's scrollytelling transition, not the Museum terrestrial-to-celestial theme transition.

## 1. Target UX Summary
- A new nav item: **Constellations**.
- A new page: `/constellations`.
- The page is four scroll-driven slides:
  - Orion, Cygnus, Cassiopeia, Ursa Major (Big Dipper)
- Each slide follows the presentation/scrollytelling transition pattern from `refgithub/bseai_degree`:
  - a tall outer slide section creates scroll time
  - a sticky 100vh stage remains pinned
  - incoming slides stack above previous slides with ascending `z-index`
  - images fade in early and settle with small scale/translate motion
  - captions reveal later in the scroll range
- The Constellations page should not use the Museum Terrestrial -> Celestial body/theme transition. Do not make this page depend on `.is-space-era` or the global scroll-theme color mixer.

## 2. Files to Add / Change
### Add
- `website/app/constellations/page.tsx`
- `website/lib/content/constellations-data.ts` (or `website/lib/content/constellations.ts`)
- `website/components/content/constellations/constellation-slide.tsx`
- `website/components/content/constellations/constellations-trigger.tsx`

### Change
- `website/components/site/adaptive-nav.tsx` (add nav item)
- `website/app/globals.css` (route-scoped slide surface classes only, if needed)

### Assets (copy)
Copy these repo-root images into `website/public/constellations/`:
- `refConstellation/Orion.png` -> `website/public/constellations/orion.png`
- `refConstellation/Cygnus.png` -> `website/public/constellations/cygnus.png`
- `refConstellation/Cassiopeia.png` -> `website/public/constellations/cassiopeia.png`
- `refConstellation/Big_Dipper.png` -> `website/public/constellations/big-dipper.png`

Rationale: Next.js static export will only serve local assets from `website/public/`.

## 3. Content Model (data)
Create a small local dataset (no external DB) with stable IDs.

Example (`website/lib/content/constellations-data.ts`):

```ts
export type ConstellationSlide = {
  id: "orion" | "cygnus" | "cassiopeia" | "ursa-major";
  title: string;
  myth: string; // 2-3 sentences
  imageSrc: string; // /constellations/...
  imageAlt: string;
};
```

## 4. Slide Layout (sticky stage)
Implement a repeated slide structure similar to `refgithub/bseai_degree/components/motion/PresentationSlide.tsx`:

- Outer `<section>` is taller than the viewport. Use `170vh` by default to create pin time without long dead scroll zones.
- Inner slide stage uses `position: sticky; top: 0; height: 100vh`.
- Each slide section is `position: relative` and receives ascending `z-index` so the incoming slide sits above the outgoing one.
- Use a two-layer image treatment:
  - a blurred/expanded background copy to fill the stage
  - a crisp foreground constellation image using `object-contain`
- Keep the caption in the lower-left/lower editorial zone so it reads like a presentation panel, not a separate page card.

Suggested structure:

```tsx
<section data-constellation-slide style={{ height: "170vh", zIndex: index }}>
  <div className="constellation-stage">
    <img data-constellation-bg ... />
    <img data-constellation-image ... />
    <div data-constellation-caption>...</div>
  </div>
</section>
```

Use existing Tailwind tokens and CSS variables where practical, but this page may define a small route-scoped constellation surface treatment for the dark presentation slides.

## 5. Per-slide Reveal (ScrollTrigger)
Create a client component (`constellations-trigger.tsx`) that:
- Registers `ScrollTrigger` once.
- Queries all slide nodes, captions, background images, and foreground images.
- Adds one ScrollTrigger per slide using the reference repo's progress window:
  - trigger progress from `top bottom` to `bottom bottom`
  - incoming image fades in early (`0.06` to `0.46`)
  - image settles (`0.35` to `0.9`)
  - caption reveals later (`0.55` to `0.88`)

Pseudo-logic:

```ts
ScrollTrigger.create({
  trigger: section,
  start: "top bottom",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    // map self.progress 0..1 to image/caption crossfade and settle states
  },
});
```

Reduced-motion:
- If `prefers-reduced-motion: reduce`, set all captions and images to fully visible immediately.
- Do not scrub animation for reduced-motion users.

## 6. No Museum Theme Transition
Do not add a page-scoped Museum theme transition for `/constellations`.

Requirements:
- Do not toggle `<body>.is-space-era` from the constellation trigger.
- Do not call `setScrollThemeProgress` for the constellation route.
- Keep the transition local to the scrollytelling slides: layered image fade, small scale/translate, delayed caption reveal.
- The global nav can remain sticky above the page, but the slide transition itself should be independent of the adaptive Museum color/font swap.

## 7. Nav Update
Update `website/components/site/adaptive-nav.tsx`:
- Add `{ href: '/constellations', label: 'Constellations' }` to `navItems`.
- Ensure `aria-current="page"` is applied when pathname matches `/constellations`.

## 8. Build & Export Considerations
- Ensure images are in `website/public/`.
- Prefer standard `<img>` for simplicity with static export.

## 9. Done Checklist
- [ ] `/constellations` exists and renders 4 slides
- [ ] Captions are myth-only and 2-3 sentences
- [ ] Slide-to-slide scrollytelling transition matches the reference repo pattern
- [ ] Reduced-motion users see fully visible content without scrub animation
- [ ] No constellation code toggles `.is-space-era` or global scroll-theme CSS variables
- [ ] Nav includes Constellations link
- [ ] `npm run build` succeeds in `website/`
