# Sprint: Grid-Aligned Asymmetry Layout

## Objective
Introduce a deliberate asymmetrical opening composition that remains grid-aligned across breakpoints.

## Scope
- Refine hero layout into asymmetric column balance.
- Align opening metrics and chronology preview to a shared responsive grid.
- Preserve readability and clear hierarchy while introducing off-center composition.

## Non-Goals
- No atmospheric image/grain styling (Sprint 04c).
- No full typography rhythm pass (Sprint 04d).
- No interaction behavior changes.

## Dependencies
- Completed Sprint 04a in [project_management/complete/sprint-04a-hero-headline-and-lead-structure.md](project_management/complete/sprint-04a-hero-headline-and-lead-structure.md).
- Homepage structure in [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Refine hero component to asymmetrical grid structure.
- [x] Align supporting homepage sections (stats and chronology) to shared grid.
- [x] Verify layout behavior across mobile/tablet/desktop.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Hero and opening blocks use intentional off-center composition.
- [x] Asymmetry remains snapped to responsive grid columns.
- [x] Content remains readable and ordered semantically.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm hero uses asymmetrical grid classes.
2. Confirm supporting sections align to same responsive column logic.
3. Check mobile and desktop layouts for coherent composition.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Updated hero and opening layout structure with grid-aligned asymmetry.
- Completed Sprint 04b record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify asymmetrical grid alignment
