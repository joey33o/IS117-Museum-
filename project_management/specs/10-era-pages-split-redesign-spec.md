# 10 - Era Pages Split and Editorial Redesign Spec

## 1. Objective
Split the current combined `/eras` reading route into separate exhibit pages for **Era 1: Earthbound Observers** and **Era 2: Cosmic Instruments**, then update site navigation and existing calls-to-action so users move through the two eras intentionally.

The new pages should feel closer to the provided wide editorial reference: broad horizontal sections, image-forward figure cards, clear section groupings, and end-of-page buttons that connect the era pages.

## 2. Scope
### In scope
- Keep the runnable app inside `website/`.
- Replace the single long `/eras` reading route with:
  - `/eras` as a lightweight era hub.
  - `/eras/earthbound-observers` as the Era 1 page.
  - `/eras/cosmic-instruments` as the Era 2 page.
- Update current links that point to `/eras#...` so they point to the new route and matching hash.
- Add end-of-page navigation:
  - Era 1 ends with a primary button to `/eras/cosmic-instruments`.
  - Era 2 ends with buttons to `/eras/earthbound-observers`, `/constellations`, and optionally `/`.
- Redesign each era page toward a wide exhibit layout:
  - runway/anchor cards near the top.
  - core narrative section.
  - large figure or object cards.
  - why-it-matters callout.
  - connection cards.
  - primary sources / reading prompts.
- Preserve the adaptive Museum theme behavior:
  - Era 1 should begin in the terrestrial visual language.
  - Era 2 should support the celestial visual language.
  - Navigation remains sticky and accessible.

### Out of scope
- No new external API or database.
- No custom cursor.
- No Three.js or 3D scene.
- No major rewrite of the constellation scrollytelling page.
- No new deployment target beyond the existing GitHub Pages static export.
- No full content rewrite beyond reorganizing and lightly expanding the existing era copy.

## 3. Dependencies
- Existing app routes under `website/app/`.
- Current combined page at `website/app/eras/page.tsx`.
- Current nav at `website/components/site/adaptive-nav.tsx`.
- Current home links in `website/app/page.tsx`.
- Current timeline links in `website/components/content/home/timeline-rail.tsx`.
- Current global styles in `website/app/globals.css`.
- Static export pathing in `website/next.config.ts`.

## 4. Proposed Routes
| Route | Purpose |
| --- | --- |
| `/eras` | Hub page that introduces both eras and links to each exhibit page. |
| `/eras/earthbound-observers` | Era 1 exhibit page. Parchment, archival, wide editorial card layout. |
| `/eras/cosmic-instruments` | Era 2 exhibit page. Dark/celestial, modern observatory layout. |

## 5. UX Requirements
### Era hub
- Shows two large cards: **Earthbound Observers** and **Cosmic Instruments**.
- Each card includes a short description, estimated reading time, and a button.
- Provides a simple recommended path: Era 1 -> Era 2 -> Constellations.

### Era 1 page
- Uses a wide editorial layout inspired by the third reference image.
- Opens with a runway section containing three anchor cards.
- Includes large figure/object cards instead of relying on a dense sidebar.
- Ends with a clear **Continue to Cosmic Instruments** button.

### Era 2 page
- Uses a wide dark editorial layout with card rows and mission/instrument blocks.
- Opens with three anchor cards related to orbital observation, spectra, and networks.
- Ends with **Back to Earthbound Observers** and **Explore Constellations** buttons.

### Navigation and links
- Header nav should link directly to:
  - `/eras/earthbound-observers`
  - `/eras/cosmic-instruments`
  - `/eras/cosmic-instruments#era2-open-questions`
- Home and timeline cards should preserve deep-link behavior by pointing to the correct new page plus hash.

## 6. Content Structure
### Shared page sections
Each era page should follow this general order:
1. Hero / runway heading.
2. Three anchor cards.
3. Core narrative.
4. Key figures, objects, or instruments.
5. Why it matters.
6. Connections.
7. Primary sources or archive prompts.
8. End-of-page navigation.

### Era 1 suggested content groups
- Runway cards:
  - First lenses make visual proof public.
  - Observatory discipline turns seeing into repeatable method.
  - Instrument standards make small differences meaningful.
- Large cards:
  - Galileo Galilei.
  - Thomas Harriot.
  - Christiaan Huygens.
  - Giovanni Cassini.
  - Precision refractor assemblies.
- End CTA:
  - Continue to Cosmic Instruments.

### Era 2 suggested content groups
- Runway cards:
  - Orbit removes atmospheric interference.
  - Spectrum expansion reveals hidden phenomena.
  - Networked observatories distribute authorship.
- Large cards:
  - Hubble Space Telescope.
  - Chandra X-ray Observatory.
  - James Webb Space Telescope.
  - Event Horizon Telescope.
  - Multi-spectral mission stack.
- End CTA:
  - Back to Earthbound Observers.
  - Explore Constellations.

## 7. Design Requirements
- Use wider page containers than the current narrow reading route.
- Prefer horizontal card rows on desktop and stacked cards on mobile.
- Use `responsive-section-grid` or a shared exhibit-grid pattern rather than one-off layout values.
- Keep text measures readable; body paragraphs should not span the full viewport width.
- Do not nest cards inside cards.
- Use buttons for page-to-page navigation and simple text links for local section jumps.
- Maintain high contrast in both parchment and dark modes.
- Respect `prefers-reduced-motion`.

## 8. Accessibility Requirements
- Each page has one `h1`.
- Section headings follow a logical hierarchy.
- End-of-page buttons are real links with visible focus states.
- Card rows retain readable order on mobile.
- Anchor links remain keyboard accessible.
- The hub page clearly labels the recommended reading path without requiring visual layout cues.

## 9. Acceptance Criteria
- **AC 9.1:** `/eras` renders a hub page, not the full combined article.
- **AC 9.2:** `/eras/earthbound-observers` renders only Era 1 content.
- **AC 9.3:** `/eras/cosmic-instruments` renders only Era 2 content.
- **AC 9.4:** Header nav no longer points to `/eras#earthbound-observers` or `/eras#cosmic-instruments`.
- **AC 9.5:** Home page cards and timeline links point to the correct new era route and section hash.
- **AC 9.6:** Era 1 includes a working end button to Era 2.
- **AC 9.7:** Era 2 includes working end buttons to Era 1 and Constellations.
- **AC 9.8:** The adaptive nav and theme transition still work on the era routes.
- **AC 9.9:** `npm run build` succeeds from `website/`.
- **AC 9.10:** Static export serves all new pages correctly on GitHub Pages.

## 10. Verification Steps
1. Run `npm run build` from `website/`.
2. Run the app locally and check:
   - `/eras`
   - `/eras/earthbound-observers`
   - `/eras/cosmic-instruments`
3. Check every nav item from each page.
4. Check home card links and timeline rail links.
5. Check end-of-page buttons.
6. Check mobile layout at a narrow viewport.
7. Check GitHub Pages export paths after deployment.

## 11. Deliverables
- New route files under `website/app/eras/`.
- Shared era exhibit components under `website/components/content/eras/`.
- Updated nav and home/timeline links.
- Updated route-aware transition logic.
- Updated styles in `website/app/globals.css`.
- This spec and the implementation document.

## 12. Sprint Status Board
### Planned
- [ ] Create era route structure.
- [ ] Extract reusable era content/components.
- [ ] Build `/eras` hub page.
- [ ] Build Era 1 exhibit page.
- [ ] Build Era 2 exhibit page.
- [ ] Update nav, home cards, and timeline links.
- [ ] Update route-aware transition logic.
- [ ] Add wide editorial styles.
- [ ] Verify build and route behavior.

### Active
- [ ] None

### Completed
- [ ] None
