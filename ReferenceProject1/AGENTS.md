This specification is designed to be pasted directly into a coding agent (like Cursor, Claude Engineer, or Replit Agent). It provides a strict technical roadmap to ensure the "Adaptive UI" and "Grunge-to-Swiss" transition are built correctly without unnecessary bloat.

---

# Technical Specification: "The Celestial Eye" Museum Website

## 1. Project Overview

A single-page, scroll-driven Astro application that visually transitions from a "Terrestrial/Grunge" aesthetic to a "Celestial/Swiss" aesthetic.

### Core Tech Stack

- **Framework:** Astro (Static)
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

1. **`Hero.astro`**: Contains the Grunge-style landing and the transition trigger point.
2. **`TelescopeEntry.astro`**: A reusable component that takes `title`, `description`, and `image` as props.
3. **`AdaptiveNav.astro`**: A sticky header that morphs from a textured bar to a transparent line.
4. **`TransitionTrigger.js`**: A standalone GSAP script to handle class toggling.

---

## 4. Page Requirements & Acceptance Criteria (Testable)

### Page 1: The Home Scroll (index.astro)

- **AC 1.1:** Initial load displays `#F1E7D0` background and serif typography.
- **AC 1.2:** Images in the top 40% of the page have a subtle "atmospheric grain" overlay.
- **AC 1.3:** At 50% scroll height, the `<body>` background color must animate to `#000000` over 0.8 seconds.
- **AC 1.4:** In the "Space" section (50%+), all serif fonts must swap to clean sans-serif instantly or via fade.

### Component: The Adaptive Nav

- **AC 2.1:** Nav remains sticky at the top of the viewport.
- **AC 2.2:** Nav background opacity drops to 0% when `.is-space-era` is active.
- **AC 2.3:** Nav border-bottom changes from "brass" hex to a 1px white line in Space mode.

---

## 5. Deployment & CI/CD

- **Step 1:** Configure `astro.config.mjs` with `site: 'https://<username>.github.io/<repo-name>/'`.
- **Step 2:** Include a `.github/workflows/deploy.yml` using the official `withastro/action`.
- **Acceptance Criteria:**
- Build succeeds with `npm run build`.
- Site is accessible via the GitHub Pages URL with all GSAP triggers functional.

---

## 6. Non-Goals (Preventing Scope Creep)

- **No Custom Cursor:** Use the standard system pointer only.
- **No External Database:** All telescope data should be stored in a local JSON or Markdown file within the `src/content` folder.
- **No 3D Rendering:** Do not use Three.js; stick to high-quality 2D imagery and CSS/GSAP transforms.
- **No User Accounts:** The site is a read-only museum experience.

---

## 7. Implementation Prompt for Agent

> "Using the specification above, initialize an Astro project. Start by setting up the global CSS variables in `base.css` and the GSAP ScrollTrigger logic in a `Layout.astro` file. Ensure the background color and typography swap are perfectly synced to the scroll position."

**Would you like me to generate the `astro.config.mjs` and the `deploy.yml` code for you to ensure the GitHub Pages setup is plug-and-play?**
