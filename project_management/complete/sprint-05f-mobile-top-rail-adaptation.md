# Sprint: Mobile Top-Rail Adaptation

## Objective
Adapt the timeline for small screens into a horizontal top-rail pattern that improves scanning and touch navigation.

## Scope
- Convert mobile timeline from vertical rail to horizontal top rail.
- Keep desktop/tablet behavior unchanged.
- Improve touch usability with horizontal scrolling and snap points.

## Non-Goals
- No new content fields or data model changes.
- No additional hover behaviors for touch devices.
- No deployment workflow changes.

## Dependencies
- Completed Sprint 05e in [project_management/complete/sprint-05e-active-marker-sync-on-scroll.md](project_management/complete/sprint-05e-active-marker-sync-on-scroll.md).
- Timeline styles in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Implement mobile-only horizontal top-rail structure via CSS.
- [x] Position markers on top rail and preserve active-state visibility.
- [x] Add touch-friendly horizontal scrolling and snap behavior.
- [x] Validate readability and spacing across small viewports.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Mobile timeline renders as horizontal top-rail cards.
- [x] Markers remain visible and meaningful in mobile layout.
- [x] Touch scrolling is smooth and cards remain readable.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm max-width layout switches from vertical rail to top rail.
2. Confirm cards can be horizontally scrolled and snapped.
3. Confirm active marker state still renders correctly on mobile.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Mobile top-rail timeline adaptation in styles.
- Completed Sprint 05f record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify mobile top-rail adaptation
