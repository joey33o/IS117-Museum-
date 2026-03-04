# Sprint 01 — Project Foundation

**Estimate:** 1–2 hours

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

---

## Goal

Initialize the Astro project with Tailwind CSS, set up global CSS variables for both themes, and verify the dev server runs with the correct default (Terrestrial) appearance.

---

## Tasks

1. Run `npm create astro@latest` (or use the existing repo root) and install dependencies.
2. Install and configure Tailwind CSS via the official Astro integration (`@astrojs/tailwind`).
3. Create `src/styles/base.css` and declare all five CSS variable pairs (default + `.is-space-era` overrides).
4. Import `base.css` into `src/layouts/Layout.astro`; scaffold the basic HTML shell with `<html>`, `<head>`, `<body>`, `<slot>`.
5. Add Google Fonts `<link>` tags for **Crimson Text** and **Inter** to `<head>`.
6. Verify `npm run dev` starts without errors and the page background is `#F1E7D0`.

---

## Files

| File | Action |
|---|---|
| `astro.config.mjs` | Create / confirm base config (no `site` URL yet — that is Sprint 08) |
| `tailwind.config.mjs` | Create with `content` glob pointing at `src/**/*.{astro,ts,js}` |
| `src/styles/base.css` | Create — CSS variable declarations only |
| `src/layouts/Layout.astro` | Create — HTML shell + font links + base.css import |
| `package.json` | Confirm `astro`, `@astrojs/tailwind`, `tailwindcss` are listed |

---

## CSS Variable Reference (paste exactly into `base.css`)

```css
:root {
  --bg-color: #F1E7D0;
  --text-color: #2B2622;
  --font-primary: 'Crimson Text', serif;
  --nav-blur: blur(4px);
  --img-filter: sepia(0.5) contrast(0.9);
}

body.is-space-era {
  --bg-color: #000000;
  --text-color: #FFFFFF;
  --font-primary: 'Inter', sans-serif;
  --nav-blur: blur(0px);
  --img-filter: brightness(1.1);
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-primary);
  transition: background-color 0.8s ease, color 0.3s ease;
}
```

---

## Acceptance Criteria

- [ ] `npm run dev` starts with zero errors.
- [ ] Browser at `localhost:4321` shows `#F1E7D0` background.
- [ ] Page text renders in **Crimson Text** (verify in DevTools → Computed → font-family).
- [ ] Manually adding `is-space-era` to `<body>` in DevTools changes background to `#000000` and font to **Inter**.
- [ ] No unused files or boilerplate pages exist beyond `index.astro`.

---

## Verification Steps

1. `npm run dev` — assert no console errors.
2. Open DevTools → Elements → `<body>` → Styles. Confirm `background-color: #F1E7D0`.
3. In DevTools console: `document.body.classList.add('is-space-era')` — background must animate to black.
4. `npm run build` — assert build completes (even if page is mostly empty).

---

## What Not To Do (Scope Creep Prevention)

- Do **not** add GSAP yet — that is Sprint 06.
- Do **not** create any component files (`Hero.astro`, `AdaptiveNav.astro`, etc.) yet.
- Do **not** set the `site` URL in `astro.config.mjs` — that is Sprint 08.
- Do **not** add content/data files — that is Sprint 02.
- Do **not** configure GitHub Actions — that is Sprint 08.
