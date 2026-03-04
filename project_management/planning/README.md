# The Celestial Eye — Sprint Plan

All sprints are designed to be completable in **1–3 hours** each. Complete them in order; each sprint's output is a dependency for the next.

---

| Sprint | Goal | Key Files | Estimate |
|--------|------|-----------|----------|
| [01](./sprint-01-project-foundation.md) | Astro + Tailwind scaffold, CSS variables | `base.css`, `Layout.astro` | 1–2 hrs |
| [02](./sprint-02-content-data-layer.md) | Telescope content schema + 3 sample entries | `src/content/telescopes/*.md` | 1 hr |
| [03](./sprint-03-adaptive-nav.md) | Sticky nav with CSS-variable-driven theming | `AdaptiveNav.astro` | 1–2 hrs |
| [04](./sprint-04-hero-section.md) | Grunge hero section with grain overlay | `Hero.astro` | 1–2 hrs |
| [05](./sprint-05-telescope-entry.md) | Reusable TelescopeEntry card component | `TelescopeEntry.astro` | 1 hr |
| [06](./sprint-06-gsap-scroll-transition.md) | GSAP ScrollTrigger class toggle at 50% scroll | `TransitionTrigger.js` | 1–2 hrs |
| [07](./sprint-07-page-assembly.md) | Wire all components into `index.astro` | `index.astro` | 1–2 hrs |
| [08](./sprint-08-deployment-cicd.md) | GitHub Pages config + CI/CD workflow | `deploy.yml`, `astro.config.mjs` | 1 hr |

---

## Working Directory Rule

**All Astro project files live inside `docs/`.** This applies to every sprint.

```
Museum/                         ← repo root
├── docs/                       ← ALL Astro work goes here
│   ├── package.json
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs
│   ├── src/
│   └── public/
├── .github/workflows/          ← deploy.yml only (GitHub requires repo root)
├── references/                 ← source material (read-only)
└── project_management/         ← sprint files
```

Never create `package.json`, `src/`, or `public/` at the repo root. Run all `npm` commands from inside `docs/`.

---

## Sprint Lifecycle

Each sprint file moves through three folders as work progresses.

```
project_management/
├── planning/    ← sprint lives here before work starts
├── active/      ← move here when you begin the sprint
└── complete/    ← move here when every AC checkbox is checked off
```

| State | Folder | Trigger |
|-------|--------|---------|
| Not started | `planning/` | Default — file created here |
| In progress | `active/` | Move the file the moment you start the first task |
| Done | `complete/` | Move the file only after all AC checkboxes pass and `npm run build` succeeds |

**Only one sprint should be in `active/` at a time.** Finish or pause the current sprint before pulling the next one.

---

## Reference Files

All website content must be drawn from the files in `references/`. Do not invent copy.

| File | Used In | Subject |
|------|---------|---------|
| `references/2Historyoftelescope.txt` | Sprint 04 | Telescope invention 1608, Galileo, societal impact |
| `references/telescopeHisotry.txt` | Sprint 04 | Full scholarly history through 19th century |
| `references/hubbleTele.txt` | Sprint 02 | Hubble specs, instruments, 35-year mission data |
| `references/JamesWebbTele.txt` | Sprint 02 | JWST specs, instruments, mission goals |
| `references/CLandraTele.txt` | Sprint 02 | Chandra mirrors, iridium coatings, X-ray optics |
| `references/MoreClandra.txt` | Sprint 02 | Chandra mission context, NASA Great Observatories |
| `references/blackhole.jpg` | Sprint 04 | Hero background image → `public/images/blackhole.jpg` |

---

## Global Non-Goals (apply to every sprint)

Taken directly from spec Section 6 — never implement these:

- No custom cursor
- No external database or CMS
- No Three.js / 3D rendering
- No user accounts or authentication
- No extra pages beyond `index.astro`
