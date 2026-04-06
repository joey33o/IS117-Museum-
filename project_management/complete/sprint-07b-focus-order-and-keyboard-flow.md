# Sprint: Focus Order and Keyboard Flow

## Objective
Ensure keyboard users can navigate through nav anchors and interactive timeline controls in a predictable, efficient focus order.

## Scope
- Improve nav active state semantics for hash-based section links.
- Remove unnecessary tab stops and preserve meaningful controls.
- Improve in-page anchor jump behavior under sticky navigation.

## Non-Goals
- No contrast value tuning (Sprint 07c).
- No broad responsive regression changes (Sprint 07d).
- No new interaction features.

## Dependencies
- Completed Sprint 07a in [project_management/complete/sprint-07a-heading-and-landmark-audit.md](project_management/complete/sprint-07a-heading-and-landmark-audit.md).
- Navigation and timeline components in [website/components/site/adaptive-nav.tsx](website/components/site/adaptive-nav.tsx) and [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Improve hash-link active state and aria-current semantics in nav.
- [x] Remove redundant keyboard tab stops in timeline cards.
- [x] Add anchor offset handling for sticky-nav section jumps.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Keyboard tab order reaches meaningful controls without unnecessary stops.
- [x] Nav correctly reflects active in-page section links.
- [x] Anchor navigation lands on readable section headings below sticky nav.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm Tab sequence flows skip-link -> nav links -> in-page controls logically.
2. Confirm `aria-current` updates for hash-based nav links.
3. Confirm anchor jumps do not hide section headings under sticky nav.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Improved keyboard flow and focus-order behavior.
- Completed Sprint 07b record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify focus order and keyboard flow
