# Spec: Timeline and Milestone Interaction

## Objective
Build the core timeline experience: a structured rail, summary-first milestone cards, and progressive interaction behaviors across desktop and mobile.

## Scope
- Establish the visual rail layout and marker alignment.
- Implement summary-first milestone card structure.
- Add hover preview and click/tap expansion interaction phases.
- Synchronize active marker state with page scroll.
- Adapt timeline behavior and structure for mobile top-rail presentation.

## Non-Goals
- No deployment or CI/CD workflow changes.
- No global theme transition logic changes.
- No backend or account-related features.

## Dependencies
- Completed Spec 02 data model in [project_management/specs/02-content-and-data-modeling-spec.md](project_management/specs/02-content-and-data-modeling-spec.md).
- Completed opening composition in [project_management/specs/04-hero-and-opening-composition-spec.md](project_management/specs/04-hero-and-opening-composition-spec.md).
- Timeline dataset and selectors in [website/lib/content/timeline-data.ts](website/lib/content/timeline-data.ts).

## Implementation Tasks
- [x] Complete Sprint 05a: Timeline rail layout.
- [x] Complete Sprint 05b: Summary-first milestone cards.
- [x] Complete Sprint 05c: Hover preview desktop.
- [x] Complete Sprint 05d: Click/tap expand accessible.
- [x] Complete Sprint 05e: Active marker sync on scroll.
- [x] Complete Sprint 05f: Mobile top-rail adaptation.

## Acceptance Criteria
- [ ] Timeline rail is visually clear and grid-aligned.
- [ ] Milestone cards prioritize concise summaries.
- [ ] Interaction behavior is accessible by mouse, touch, and keyboard.
- [ ] Mobile layout remains readable and functional.
- [ ] npm run build succeeds after each sprint.

## Verification Steps
1. Verify rail and marker alignment across breakpoints.
2. Verify milestone cards preserve summary-first reading order.
3. Verify hover/click behaviors and keyboard accessibility once implemented.
4. Verify active marker synchronization during scroll.
5. Run npm run build in [website](website) and verify success.

## Deliverables
- Timeline rail and milestone interaction implementation.
- Completed sprint records for 05a through 05f.

## Sprint Status Board
### Planned
- [x] None

### Active
- [ ] None

### Completed
- [x] Sprint 05a: timeline rail layout
- [x] Sprint 05b: summary-first milestone cards
- [x] Sprint 05c: hover preview desktop
- [x] Sprint 05d: click/tap expand accessible
- [x] Sprint 05e: active marker sync on scroll
- [x] Sprint 05f: mobile top-rail adaptation
