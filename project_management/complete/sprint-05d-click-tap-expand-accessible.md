# Sprint: Click/Tap Expand Accessible

## Objective
Add explicit click/tap expansion controls so users on touch devices and keyboard can access fuller milestone details.

## Scope
- Add per-card expansion controls with semantic accessible markup.
- Ensure expansion works for mouse, touch, and keyboard users.
- Keep hover preview behavior intact as a supplemental desktop affordance.

## Non-Goals
- No scroll-synced active marker behavior (Sprint 05e).
- No mobile top-rail structural adaptation (Sprint 05f).
- No redesign of data model.

## Dependencies
- Completed Sprint 05c in [project_management/complete/sprint-05c-hover-preview-desktop.md](project_management/complete/sprint-05c-hover-preview-desktop.md).
- Timeline rail component in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add semantic expandable content control to each milestone card.
- [x] Ensure control is keyboard reachable and readable by assistive tech.
- [x] Style expanded/collapsed states for clear affordance.
- [x] Validate touch and keyboard behavior.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Each milestone card has a click/tap expansion control.
- [x] Expansion works with keyboard navigation and focus.
- [x] Expanded content is readable and does not break rail layout.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm each card includes an explicit expansion affordance.
2. Confirm Enter/Space can open and close the details section.
3. Confirm touch interaction toggles details visibility.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Accessible click/tap expansion behavior in timeline cards.
- Completed Sprint 05d record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify accessible click/tap expansion
