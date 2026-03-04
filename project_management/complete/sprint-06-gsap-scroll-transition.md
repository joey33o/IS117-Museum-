# Sprint 06 — GSAP Scroll Transition

**Estimate:** 1–2 hours

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Implement `TransitionTrigger.js` — the single GSAP ScrollTrigger script that toggles `.is-space-era` on `<body>` at the 50% scroll point. This is the core interaction of the entire site.

---

## Tasks

1. Install GSAP from inside `docs/`: `npm install gsap`.
2. Create `docs/src/scripts/TransitionTrigger.js`.
3. Register the `ScrollTrigger` plugin and write the trigger targeting `id="transition-trigger"`.
4. On trigger enter: animate `body` background to `#000000` over 0.8s **and** add `.is-space-era` class.
5. On trigger leave-back (scroll up): animate back to `#F1E7D0` and remove `.is-space-era`.
6. Add `<script>` tag importing `TransitionTrigger.js` into `docs/src/layouts/Layout.astro`.
7. Verify the full Terrestrial → Celestial visual swap working end-to-end.

---

## Files

| File | Action |
|---|---|
| `docs/src/scripts/TransitionTrigger.js` | Create |
| `docs/src/layouts/Layout.astro` | Edit — add `<script src="../scripts/TransitionTrigger.js">` |
| `docs/package.json` | Edit — `gsap` added as dependency after `npm install` |

---

## TransitionTrigger.js (full script)

```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '#transition-trigger',
  start: 'top center',   // fires when trigger-div top hits viewport center (≈50% scroll)
  onEnter: () => {
    document.body.classList.add('is-space-era');
  },
  onLeaveBack: () => {
    document.body.classList.remove('is-space-era');
  },
});
```

> The 0.8s background color animation is handled entirely by the CSS `transition` declared in Sprint 01 (`base.css`). GSAP only adds/removes the class.

---

## Acceptance Criteria

- [ ] **AC 1.3:** At the 50% scroll point, `<body>` background color animates to `#000000` over 0.8 seconds.
- [ ] **AC 1.4:** Serif fonts swap to sans-serif when `.is-space-era` is active.
- [ ] Scrolling back up restores the Terrestrial state (class removed, background returns to `#F1E7D0`).
- [ ] Nav adapts automatically (no extra JS needed — CSS handles it via Sprint 03).
- [ ] No `console.error` messages in DevTools during scroll.

---

## Verification Steps

1. `npm run dev` — open `localhost:4321`.
2. Scroll slowly past the `#transition-trigger` element — background must animate to black.
3. Continue scrolling and scroll back up — Terrestrial state must be restored.
4. DevTools → Network: confirm `gsap` is loaded.
5. DevTools console: run `ScrollTrigger.getAll()` — should return one trigger.
6. `npm run build` — assert zero errors.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** use GSAP to animate individual text or images — stick to the class toggle only.
- Do **not** add a second ScrollTrigger for the nav separately — the nav is CSS-driven already.
- Do **not** add a GSAP timeline for page load animations.
- Do **not** use `gsap.to(body, { backgroundColor: ... })` — the CSS transition handles the color animation; GSAP only manages the class.
- Do **not** install any other GSAP plugins (SplitText, Flip, etc.).
