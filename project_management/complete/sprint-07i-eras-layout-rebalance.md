# Sprint: Eras Layout Rebalance

## Objective
Rebalance the eras page so the left rail is functionally dense and the primary reading lane has more visual authority.

## Scope
- Reduce perceived empty space in left column.
- Increase center-lane impact while preserving paragraph readability.
- Introduce sticky left rail behavior for desktop.

## Non-Goals
- No content model changes.
- No route changes.
- No unrelated interaction redesign.

## Dependencies
- Existing eras page structure in [website/app/eras/page.tsx](website/app/eras/page.tsx).
- Existing styling system in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Rebalance grid spans for left rail and reading lane on desktop.
- [x] Add richer left-rail content modules (signals and object focus).
- [x] Introduce sticky left rail behavior on desktop.
- [x] Add breakout treatment for high-impact editorial blocks.
- [x] Validate responsive behavior and readability.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Left rail no longer appears visually underutilized.
- [x] Main reading lane has stronger impact and hierarchy.
- [x] Breakout blocks improve rhythm without harming readability.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm desktop layout uses denser left rail and wider reading lane.
2. Confirm sticky sidebar behavior activates at desktop widths.
3. Confirm mobile layout gracefully stacks without overflow.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Rebalanced eras grid and side modules in [website/app/eras/page.tsx](website/app/eras/page.tsx).
- Sticky and breakout layout rules in [website/app/globals.css](website/app/globals.css).
- Completed sprint record in complete folder.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify eras layout rebalance
