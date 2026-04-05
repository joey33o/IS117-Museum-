# Sprint: Toggle is-space-era at Threshold

## Objective
Toggle the global `is-space-era` class when scroll progress crosses the midpoint threshold, enabling terrestrial-to-celestial theme switching.

## Scope
- Add threshold-based body class toggling in transition trigger.
- Keep behavior deterministic during up/down scrolling.
- Ensure class cleanup when component unmounts.

## Non-Goals
- No motion smoothing/tweening logic yet (Sprint 06c).
- No reduced-motion branching yet (Sprint 06d).
- No content structure updates.

## Dependencies
- Completed Sprint 06a in [project_management/complete/sprint-06a-scrolltrigger-bootstrap.md](project_management/complete/sprint-06a-scrolltrigger-bootstrap.md).
- Trigger component in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add scroll-progress threshold logic to toggle `body.is-space-era`.
- [x] Ensure threshold updates correctly when scrolling both directions.
- [x] Ensure cleanup removes class and kills trigger instances.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] `is-space-era` is applied at or beyond the intended threshold.
- [x] `is-space-era` is removed when scrolling back above threshold.
- [x] No duplicate or leaked ScrollTrigger instances remain on unmount.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm body class toggles around midpoint scroll threshold.
2. Confirm reverse scroll restores terrestrial state.
3. Confirm unmount cleanup removes class and kills trigger.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Threshold-based global theme class toggling.
- Completed Sprint 06b record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify is-space-era threshold toggling
