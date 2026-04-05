# Sprint: Timeline Rail Layout

## Objective
Introduce the structural timeline rail and marker scaffold that future interaction sprints can build upon.

## Scope
- Build a dedicated timeline rail section on the homepage.
- Add a vertical rail with aligned milestone markers and content rows.
- Preserve current summary text while shifting into rail-first composition.

## Non-Goals
- No hover preview behavior (Sprint 05c).
- No click/tap expansion behavior (Sprint 05d).
- No active marker scroll synchronization (Sprint 05e).

## Dependencies
- Data from [website/lib/content/timeline-data.ts](website/lib/content/timeline-data.ts).
- Existing homepage structure in [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add timeline rail wrapper and semantic section labeling.
- [x] Implement vertical rail + marker baseline styles.
- [x] Align milestone items to rail grid rows.
- [x] Validate desktop/mobile readability and alignment.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Timeline section includes a distinct rail and marker structure.
- [x] Milestone cards align consistently relative to the rail.
- [x] Layout remains readable on mobile and desktop.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm rail line renders continuously through milestone list.
2. Confirm each milestone row includes an aligned marker.
3. Confirm section semantics and heading hierarchy remain valid.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Timeline rail layout integrated on homepage.
- Completed Sprint 05a record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify timeline rail layout
