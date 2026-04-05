# Sprint: Hover Preview Desktop

## Objective
Add desktop hover previews that reveal deeper milestone context while preserving the summary-first card baseline.

## Scope
- Show a secondary preview snippet on hover for desktop pointer devices.
- Keep mobile behavior unchanged in this sprint.
- Support keyboard focus parity with hover preview visibility.

## Non-Goals
- No click/tap expansion behavior (Sprint 05d).
- No scroll-synced active marker behavior (Sprint 05e).
- No mobile-specific preview interactions.

## Dependencies
- Completed Sprint 05b in [project_management/complete/sprint-05b-summary-first-milestone-cards.md](project_management/complete/sprint-05b-summary-first-milestone-cards.md).
- Timeline rail component in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add hidden preview content using milestone details.
- [x] Reveal preview on desktop hover and focus-within.
- [x] Keep preview suppressed on touch/mobile breakpoints.
- [x] Validate visual hierarchy and readability.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Hovering a milestone card on desktop reveals additional preview context.
- [x] Keyboard focus on card content reveals the same preview state.
- [x] Mobile/touch layout does not show persistent hover previews.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm preview content is hidden by default.
2. Confirm preview appears on desktop hover and focus-within.
3. Confirm preview is suppressed on mobile breakpoints.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Desktop hover preview behavior integrated into timeline cards.
- Completed Sprint 05c record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify desktop hover preview behavior
