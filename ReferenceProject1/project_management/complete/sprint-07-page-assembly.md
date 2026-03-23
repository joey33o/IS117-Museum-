# Sprint 07 — Page Assembly (index.astro)

**Estimate:** 1–2 hours

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Wire all components together on `src/pages/index.astro`. Fetch the telescope entries from the content collection and render each with `<TelescopeEntry>`. Before finalizing, do a **content review pass** — cross-check every visible text string against the reference files to confirm nothing is placeholder or invented. Verify all acceptance criteria from Section 4 of the spec are met end-to-end.

---

## Tasks

1. Open `src/pages/index.astro`.
2. Import `Layout`, `Hero`, `AdaptiveNav` (already in Layout), and `TelescopeEntry`.
3. Call `getCollection('telescopes')` to load all entries.
4. Render `<Hero />` first, followed by a Space-era section containing a mapped list of `<TelescopeEntry>` components.
5. Pass `entry.data.title`, `entry.data.description`, `entry.data.image` as props.
6. Add light layout structure: a container div, heading for the Space section, and appropriate spacing.
7. **Content review pass:** Read the rendered page in the browser and open each reference file side-by-side. Confirm:
   - Hero `<h1>` and subheadline trace to `references/2Historyoftelescope.txt` or `references/telescopeHisotry.txt`.
   - Hubble card copy traces to `references/hubbleTele.txt`.
   - James Webb card copy traces to `references/JamesWebbTele.txt`.
   - Chandra card copy traces to `references/CLandraTele.txt` / `references/MoreClandra.txt`.
8. Manually scroll-test all ACs from spec Section 4.

---

## Files

| File | Action |
|---|---|
| `docs/src/pages/index.astro` | Edit — full page assembly |

---

## index.astro Structure

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
import TelescopeEntry from '../components/TelescopeEntry.astro';
import { getCollection } from 'astro:content';

const telescopes = await getCollection('telescopes');
---

<Layout title="The Celestial Eye">
  <Hero />

  <section id="space-collection">
    <h2>The Collection</h2>
    {telescopes.map((entry) => (
      <TelescopeEntry
        title={entry.data.title}
        description={entry.data.description}
        image={entry.data.image}
      />
    ))}
  </section>
</Layout>
```

---

## Acceptance Criteria

- [ ] **AC 1.1:** Initial load displays `#F1E7D0` background and serif typography across the full page.
- [ ] **AC 1.2:** Hero section images have the grain overlay visible.
- [ ] **AC 1.3:** At ~50% scroll, background animates to `#000000` over 0.8s.
- [ ] **AC 1.4:** Serif fonts visually swap to sans-serif in the Space section.
- [ ] **AC 2.1:** Nav stays sticky throughout the full scroll.
- [ ] **AC 2.2:** Nav background goes transparent in Space mode.
- [ ] **AC 2.3:** Nav border transitions from brass to white 1px line.
- [ ] All three telescope entries (Hubble, James Webb, Chandra) render with title, description, and image.
- [ ] Every visible text string on the page is sourced from a file in `references/` — zero placeholder text remains.
- [ ] `npm run build` — zero errors, zero warnings.

---

## Verification Steps

1. `npm run dev` → `localhost:4321` — Terrestrial state loads.
2. Scroll to Hero bottom — trigger fires, full Celestial swap occurs.
3. Scroll back to top — Terrestrial state restores.
4. Confirm all three telescope entries are visible in the Space section.
5. **Content check:** Open `references/hubbleTele.txt` and confirm at least one specific fact (e.g., "1.7 million observations") appears in the rendered Hubble card.
6. **Content check:** Open `references/2Historyoftelescope.txt` and confirm the Hero headline/subheadline reflects the 1608 invention narrative.
7. DevTools → Accessibility: confirm `<h1>` exists in Hero, `<h2>` exists in Space section.
8. `npm run build` — pass.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** add a separate About or Contact page.
- Do **not** add sorting, filtering, or search for telescope entries.
- Do **not** add page transitions or view transitions API — the spec does not require them.
- Do **not** add a footer unless it is one line of plain text.
- Do **not** add loading states or skeleton screens.
