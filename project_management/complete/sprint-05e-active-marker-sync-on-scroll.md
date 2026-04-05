# Sprint: Active Marker Sync on Scroll

## Objective
Synchronize timeline marker emphasis to the milestone currently in view so users can track position while scrolling.

## Scope
- Track in-view milestone rows with client-side observation.
- Apply active styles to the corresponding marker and card.
- Keep hover and expand behaviors fully compatible.

## Non-Goals
- No mobile top-rail structural changes (Sprint 05f).
- No changes to milestone copy/content model.
- No changes to global page transition logic.

## Dependencies
- Completed Sprint 05d in [project_management/complete/sprint-05d-click-tap-expand-accessible.md](project_management/complete/sprint-05d-click-tap-expand-accessible.md).
- Timeline rail layout and styles in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx) and [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add viewport observation logic for timeline items.
- [x] Map active milestone id to marker/card state classes.
- [x] Style active marker and card to be clearly visible in both themes.
- [x] Validate behavior while scrolling and with keyboard focus.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Exactly one timeline marker is highlighted as active during typical scroll states.
- [x] Active card state updates smoothly as user scrolls through milestones.
- [x] Active styles are legible in terrestrial and celestial themes.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm active marker changes when different milestone rows enter the viewport.
2. Confirm active card state and marker remain aligned to same item.
3. Confirm theme contrast for active styles remains readable.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Scroll-synced active marker state for timeline rail.
- Completed Sprint 05e record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify active marker sync on scroll
