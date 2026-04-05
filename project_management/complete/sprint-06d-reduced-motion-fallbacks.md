# Sprint: Reduced-Motion Fallbacks

## Objective
Respect reduced-motion preferences by switching to low-motion state changes while preserving readability and theme intent.

## Scope
- Add reduced-motion branch in transition trigger logic.
- Reduce or disable non-essential transition effects in global styles.
- Keep theme toggling functional without continuous interpolation.

## Non-Goals
- No new visual modules.
- No content copy changes.
- No deployment pipeline changes.

## Dependencies
- Completed Sprint 06c in [project_management/complete/sprint-06c-sync-css-variable-transition.md](project_management/complete/sprint-06c-sync-css-variable-transition.md).
- Trigger component in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add `prefers-reduced-motion` logic in transition trigger.
- [x] Use discrete state updates instead of continuous interpolation for reduced motion.
- [x] Add CSS reduced-motion overrides for transition-heavy UI elements.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Reduced-motion users do not receive continuous scroll interpolation effects.
- [x] Theme state still toggles correctly between terrestrial and celestial modes.
- [x] Key interface transitions are minimized in reduced-motion mode.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm reduced-motion branch applies discrete theme updates.
2. Confirm non-essential transitions are reduced via media query overrides.
3. Confirm standard-motion behavior remains unchanged.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Reduced-motion fallback implementation across trigger and styles.
- Completed Sprint 06d record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify reduced-motion fallbacks
