# Sprint 03 — AdaptiveNav Component

**Estimate:** 1–2 hours

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Build `AdaptiveNav.astro` — a sticky header that reads CSS variables for all visual states. The component itself contains **no JavaScript**; it is purely CSS-driven. The class toggle that activates the Space state is handled in Sprint 06.

---

## Tasks

1. Create `src/components/AdaptiveNav.astro`.
2. Mark the `<nav>` as `position: sticky; top: 0; z-index: 50`.
3. Apply `backdrop-filter: var(--nav-blur)` for the terrestrial frosted effect.
4. Style the bottom border: `2px solid #B8860B` (brass) by default; swap to `1px solid #FFFFFF` when `.is-space-era` is on `<body>`.
5. Set `background-color` and `opacity` to transition to transparent in Space mode via CSS only.
6. Add placeholder nav links ("About", "Collection", "Contact") as simple `<a>` tags.
7. Import `AdaptiveNav` into `src/layouts/Layout.astro` above `<slot>`.

---

## Files

| File | Action |
|---|---|
| `docs/src/components/AdaptiveNav.astro` | Create |
| `docs/src/layouts/Layout.astro` | Edit — import and render `<AdaptiveNav />` |

---

## CSS Rules (inside `<style>` in AdaptiveNav.astro)

```css
nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: var(--nav-blur);
  background-color: rgba(241, 231, 208, 0.6);
  border-bottom: 2px solid #B8860B;
  transition: background-color 0.8s ease, border-color 0.8s ease, backdrop-filter 0.8s ease;
  padding: 0.75rem 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Space-era state — triggered by body class */
:global(body.is-space-era) nav {
  background-color: transparent;
  border-bottom: 1px solid #FFFFFF;
}
```

---

## Acceptance Criteria

- [ ] Nav is visible and sticks to the top on scroll.
- [ ] **AC 2.1:** Nav remains sticky at the top of the viewport throughout the page.
- [ ] **AC 2.2:** Manually adding `is-space-era` to `<body>` in DevTools makes nav background fully transparent.
- [ ] **AC 2.3:** Border changes from brass (`#B8860B`) to 1px white when `is-space-era` is active.
- [ ] `backdrop-filter: blur(4px)` is active in Terrestrial mode (confirm in DevTools Computed styles).
- [ ] No JavaScript exists in this component file.

---

## Verification Steps

1. Open `localhost:4321` — nav is sticky at top.
2. DevTools → Elements → `<nav>` → Computed: confirm `backdrop-filter: blur(4px)`.
3. DevTools console: `document.body.classList.add('is-space-era')` — nav becomes transparent, border turns white.
4. `document.body.classList.remove('is-space-era')` — nav returns to Terrestrial state.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** build a mobile hamburger menu.
- Do **not** add active-link highlighting or route detection.
- Do **not** add any scroll event listeners or GSAP in this component — that is Sprint 06.
- Do **not** make the links functional — they are visual placeholders for now.
- Do **not** add a logo image — a text wordmark is sufficient.
