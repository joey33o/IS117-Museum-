# Sprint: Typography Measure and Rhythm Polish

## Objective
Refine opening typography into a disciplined editorial system with controlled measure, consistent hierarchy, and repeatable rhythm.

## Scope
- Apply role-based typography classes for label, display, lead, section heading, and body text.
- Constrain long-form measure in opening and chronology content blocks.
- Normalize spacing cadence across opening and chronology modules.

## Non-Goals
- No new interactions or timeline behavior changes.
- No ScrollTrigger/theme logic changes.
- No deployment workflow changes.

## Dependencies
- Completed Sprint 04c in [project_management/complete/sprint-04c-atmospheric-grain-and-image-treatment.md](project_management/complete/sprint-04c-atmospheric-grain-and-image-treatment.md).
- Existing opening layout and styles in [website/components/content/home/hero-opening.tsx](website/components/content/home/hero-opening.tsx) and [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Introduce reusable editorial type/rhythm classes.
- [x] Apply classes to opening headline, lead, and section headers.
- [x] Tighten chronology card text measure and spacing cadence.
- [x] Validate readability at mobile/tablet/desktop.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Text roles are consistently distinguishable (label/display/lead/body).
- [x] Long-form lines avoid overly wide measure on desktop.
- [x] Spacing rhythm is consistent and token-driven across opening modules.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm role-based classes are applied in opening and chronology sections.
2. Confirm lead/body copy remains readable with constrained measure on desktop.
3. Confirm spacing rhythm is consistent between section title, list, and cards.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Polished opening typography and rhythm styles/components.
- Completed Sprint 04d record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify typography measure and rhythm polish
