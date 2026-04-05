This specification is designed to be pasted directly into a coding agent (like Cursor, Claude Engineer, or Replit Agent). It provides a strict technical roadmap to ensure the "Adaptive UI" and "Grunge-to-Swiss" transition are built correctly without unnecessary bloat.

---

# Technical Specification: "The Celestial Eye" Museum Website

## 1. Project Overview

A single-page, scroll-driven Next.js application that visually transitions from a "Terrestrial/Grunge" aesthetic to a "Celestial/Swiss" aesthetic.

### Core Tech Stack

- **Framework:** Next.js (App Router, Static Export)
- **Animation:** GSAP + ScrollTrigger
- **Styling:** Tailwind CSS + CSS Variables
- **Deployment:** GitHub Pages (via GitHub Actions)

---

## 2. Global Styling & State (Unambiguous)

The site must use CSS variables to manage the theme. A global class `.is-space-era` on the `<body>` will toggle these variables via a GSAP ScrollTrigger.

| Variable         | Terrestrial (Default)      | Celestial (`.is-space-era`) |
| ---------------- | -------------------------- | --------------------------- |
| `--bg-color`     | `#F1E7D0` (Parchment)      | `#000000` (OLED Black)      |
| `--text-color`   | `#2B2622` (Ink)            | `#FFFFFF` (White)           |
| `--font-primary` | `'Crimson Text', serif`    | `'Inter', sans-serif`       |
| `--nav-blur`     | `blur(4px)`                | `blur(0px)`                 |
| `--img-filter`   | `sepia(0.5) contrast(0.9)` | `brightness(1.1) sharp`     |

---

## 3. Modular Component Architecture

1. **`Hero.tsx`**: Contains the Grunge-style landing and the transition trigger point.
2. **`TelescopeEntry.tsx`**: A reusable component that takes `title`, `description`, and `image` as props.
3. **`AdaptiveNav.tsx`**: A sticky header that morphs from a textured bar to a transparent line.
4. **`TransitionTrigger.tsx`**: A client component that initializes GSAP ScrollTrigger and handles class toggling.

---

## 4. Page Requirements & Acceptance Criteria (Testable)

### Page 1: The Home Scroll (`app/page.tsx`)

- **AC 1.1:** Initial load displays `#F1E7D0` background and serif typography.
- **AC 1.2:** Images in the top 40% of the page have a subtle "atmospheric grain" overlay.
- **AC 1.3:** At 50% scroll height, the `<body>` background color must animate to `#000000` over 0.8 seconds.
- **AC 1.4:** In the "Space" section (50%+), all serif fonts must swap to clean sans-serif instantly or via fade.

### Component: The Adaptive Nav

- **AC 2.1:** Nav remains sticky at the top of the viewport.
- **AC 2.2:** Nav background opacity drops to 0% when `.is-space-era` is active.
- **AC 2.3:** Nav border-bottom changes from "brass" hex to a 1px white line in Space mode.

### Editorial System: Tschichold Alignment

- **AC 3.1:** Typography follows a function-led hierarchy (display, heading, body, caption) with consistent role usage across all sections.
- **AC 3.2:** Long-form paragraph measure is constrained for readability and does not drift into full-width columns on desktop.
- **AC 3.3:** Asymmetrical compositions remain grid-aligned at each breakpoint and never appear accidental.
- **AC 3.4:** Spacing is token-driven and repeatable; one-off spacing values are not introduced for individual sections.
- **AC 3.5:** Motion remains minimal (small opacity/translate transitions only) and respects reduced-motion preferences.
- **AC 3.6:** Color contrast and focus visibility satisfy accessible reading and keyboard navigation expectations.

---

## 5. Tschichold Editorial Methods (Implementation Constraints)

### 5.1 Core Principles

- **Function-Led Typography:** Every type choice must communicate structure and improve reading flow.
- **Structured Asymmetry:** Use off-center layout intentionally while preserving proportional balance.
- **Economy of Means:** Limit font families, weight variants, and decorative treatments.
- **Grid Discipline:** Keep all text/media aligned to shared responsive column logic.

### 5.2 Typography Method

- Define predictable roles: display, H1/H2, body, caption/meta.
- Keep weight usage constrained and systematic.
- Enforce vertical rhythm and controlled paragraph measure.
- Prioritize informational clarity over ornamental styling.

### 5.3 Grid and Spacing Method

- Use responsive column logic: mobile (4), tablet (6), desktop (12).
- Apply project-level spacing tokens consistently.
- Allow asymmetry only when still snapped to grid columns.

### 5.4 Color and Motion Method

- Maintain a restrained, high-contrast palette.
- Use one signal/accent color only when necessary for hierarchy.
- Keep motion subtle and purposeful.
- Respect `prefers-reduced-motion` with non-animated fallbacks.

---

## 6. Deployment & CI/CD

- **Step 1:** Configure `next.config.ts` for static export and GitHub Pages pathing:
	- `output: 'export'`
	- `images: { unoptimized: true }`
	- `basePath` and `assetPrefix` for `/<repo-name>` when deploying to project pages.
- **Step 2:** Include `.github/workflows/deploy.yml` to:
	- Build with `npm ci` and `npm run build`
	- Upload `out/` as the Pages artifact
	- Deploy with `actions/deploy-pages`.
- **Acceptance Criteria:**
- Build succeeds with `npm run build`.
- Site is accessible via the GitHub Pages URL with all GSAP triggers functional.

---

## 7. Non-Goals (Preventing Scope Creep)

- **No Custom Cursor:** Use the standard system pointer only.
- **No External Database:** All telescope data should be stored in a local JSON or Markdown file within the `src/content` folder.
- **No 3D Rendering:** Do not use Three.js; stick to high-quality 2D imagery and CSS/GSAP transforms.
- **No User Accounts:** The site is a read-only museum experience.

---

## 8. Suggested Execution Phases

### Phase 1: Foundation

- Establish design tokens, base layout shell, and responsive grid logic.

### Phase 2: Typography and Hero

- Implement type hierarchy and asymmetrical hero structure with clear reading order.

### Phase 3: Editorial Modules

- Implement reusable timeline/cards/quote/section-heading modules with strict role-based typography.

### Phase 4: Polish and Validation

- Validate accessibility, spacing precision, responsive consistency, and motion constraints.

---

## 9. Definition of Done

The Tschichold-aligned adaptive museum experience is complete when:

- Visual language clearly communicates modernist editorial structure.
- Typography, spacing, and grid behavior are systematic and repeatable.
- Asymmetry is intentional and balanced at all breakpoints.
- Existing adaptive transition behavior (Terrestrial to Celestial) remains fully functional.
- Accessibility and reduced-motion expectations are satisfied.

---

## 10. Implementation Prompt for Agent

> "Using the specification above, initialize a Next.js App Router project. Start by setting up the global CSS variables in `app/globals.css` and the GSAP ScrollTrigger logic in a client component mounted from `app/layout.tsx`. Ensure the background color and typography swap are perfectly synced to the scroll position."

**Would you like me to generate the `next.config.ts` and `deploy.yml` code so the GitHub Pages setup is plug-and-play?**

---

## 11. Spec Generation Protocol (When Prompted)

When asked to "generate from AGENTS.md" or produce a build plan/specification set, the agent must generate a multi-spec package instead of a single generic plan.

### 11.1 Required Spec Files

Create one spec file per major build step, at minimum:

1. Foundation and project setup
2. Content and data modeling
3. Adaptive navigation
4. Hero and opening composition
5. Timeline and milestone interaction
6. Scroll transition and motion behavior
7. Accessibility and QA validation
8. Deployment and CI/CD

Files should be stored in `project_management/planning/` using ordered names such as:

- `sprint-01-<topic>.md`
- `sprint-02-<topic>.md`
- `...`

### 11.2 Required Structure Inside Each Spec File

Each generated spec file must include all of the following sections:

1. Objective
2. Scope
3. Non-Goals
4. Dependencies
5. Implementation Tasks
6. Acceptance Criteria
7. Verification Steps
8. Deliverables
9. Sprint Status Board

### 11.3 Sprint Status Board Format (Mandatory)

Each spec must include a sprint status board with three subsections:

- **Planned**
- **Active**
- **Completed**

Use task checklists under each subsection. At generation time, all tasks start in **Planned**.

### 11.4 Folder Workflow Enforcement

Sprint files must follow the repository workflow:

- `project_management/planning/` for not-started work
- `project_management/active/` for in-progress work
- `project_management/complete/` for finished work

Only one sprint should be in `project_management/active/` at a time.

### 11.5 Completion Rule

A sprint can move to `project_management/complete/` only when:

1. All acceptance criteria are checked
2. Verification steps pass
3. `npm run build` succeeds for the target app

---

## 12. Website Folder Requirement (Mandatory)

When asked to generate, initialize, or implement the website from this specification, the agent must use a dedicated `website/` folder at repository root.

### 12.1 Required Location

- Create `website/` if it does not already exist.
- All runnable web application files must live under `website/`.

### 12.2 Scope of Files Inside `website/`

The following must be created and maintained inside `website/`:

- `package.json`, lockfiles, and dependency manifests
- Next.js app source (for example `app/`, `components/`, `lib/`, `public/`)
- Framework/tooling config (for example `next.config.ts`, `tsconfig.json`, `postcss.config.*`, `tailwind.config.*`)
- Build outputs and local caches produced by the app workflow

### 12.3 Root-Level Restriction

- Do not create runnable app source folders or dependency manifests at repository root.
- Repository root remains for project-management files, docs, references, and shared CI metadata.

### 12.4 Command Execution Rule

- Run install, dev, test, lint, and build commands from `website/`.
- Verification commands are valid only when executed in `website/`.

### 12.5 Generation Compliance Check

When prompted to "generate from AGENTS.md," the output is non-compliant unless:

1. The `website/` folder exists.
2. The web app and dependencies are contained in `website/`.
3. Sprint specs and planning artifacts remain in `project_management/`.
