# Sprint 05 — TelescopeEntry Component

**Estimate:** 1 hour

> **Lifecycle:** Move this file to `project_management/active/` when you start the first task. Move it to `project_management/complete/` once every AC checkbox is checked and `npm run build` passes.

> **Working Directory:** All project files for this sprint are created inside `docs/`. Run every `npm` command from inside `docs/`. Never create Astro project files at the repo root.

---

## Goal

Build the `TelescopeEntry.astro` reusable card component that accepts `title`, `description`, and `image` as props and adapts its visual style to whichever theme is active via CSS variables.

---

## Tasks

1. Create `src/components/TelescopeEntry.astro`.
2. Define `Props` interface with `title: string`, `description: string`, `image: string`.
3. Destructure props and render a semantic `<article>` with an `<img>`, `<h2>`, and `<p>`.
4. Apply `filter: var(--img-filter)` to the image.
5. Style the card to respect `var(--text-color)` and `var(--font-primary)`.
6. Write a `<style>` block scoped to this component only.
7. Do **not** import it into any page yet — that is Sprint 07.

---

## Files

| File | Action |
|---|---|
| `docs/src/components/TelescopeEntry.astro` | Create |

---

## Component Shape

```astro
---
interface Props {
  title: string;
  description: string;
  image: string;
}
const { title, description, image } = Astro.props;
---

<article class="telescope-entry">
  <div class="entry-image">
    <img src={image} alt={title} />
  </div>
  <h2>{title}</h2>
  <p>{description}</p>
</article>

<style>
  .telescope-entry {
    display: grid;
    gap: 1rem;
    color: var(--text-color);
    font-family: var(--font-primary);
  }

  .entry-image img {
    width: 100%;
    height: auto;
    filter: var(--img-filter);
    transition: filter 0.8s ease;
  }

  h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
</style>
```

---

## Acceptance Criteria

- [ ] Component accepts and renders all three props without TypeScript errors.
- [ ] Image uses `filter: var(--img-filter)` — visually confirms both sepia and brightness states.
- [ ] Text color and font family respond to CSS variable changes (test by toggling `is-space-era` in DevTools).
- [ ] `npm run build` passes with no errors referencing this file.
- [ ] Component has **no JavaScript** — it is a pure presentational Astro component.

---

## Verification Steps

1. Temporarily render `<TelescopeEntry title="Test" description="Test desc" image="/images/hubble.jpg" />` in `index.astro`.
2. Confirm card displays at `localhost:4321`.
3. Toggle `is-space-era` in DevTools — image filter and text color must change.
4. Remove the temporary render from `index.astro` before ending sprint.
5. `npm run build` — zero errors.

---

## What Not To Do (Scope Creep Prevention)

- Do **not** add hover animations or interactive states.
- Do **not** add a "Read More" link or modal — entries are display-only.
- Do **not** add extra optional props (tags, date, author) beyond the three in the spec.
- Do **not** wire up the content collection inside this component — the parent page handles that in Sprint 07.
