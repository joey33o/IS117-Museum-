# Sprint: Summary-First Milestone Cards

## Objective
Refine timeline milestone cards so users immediately see concise summaries before secondary metadata or expanded details.

## Scope
- Reorder and style card content for summary-first reading flow.
- Add lightweight visual emphasis for milestone importance.
- Keep details content deferred to later interaction sprints.

## Non-Goals
- No hover preview behavior (Sprint 05c).
- No click/tap expansion behavior (Sprint 05d).
- No active scroll synchronization behavior (Sprint 05e).

## Dependencies
- Completed Sprint 05a in [project_management/complete/sprint-05a-timeline-rail-layout.md](project_management/complete/sprint-05a-timeline-rail-layout.md).
- Existing timeline rail component in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Adjust card content order to prioritize summary readability.
- [x] Add consistent metadata row (year, era, importance marker).
- [x] Add subtle styling that supports quick scanning.
- [x] Validate card readability on mobile/tablet/desktop.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Each milestone card shows a clear summary-first reading order.
- [x] Importance and era metadata are visible without overwhelming summary text.
- [x] Layout remains aligned to existing timeline rail structure.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm card structure renders title and summary before secondary details.
2. Confirm importance and era metadata are consistently shown.
3. Confirm cards remain readable and balanced at key breakpoints.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Updated summary-first milestone card presentation in timeline rail.
- Completed Sprint 05b record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify summary-first milestone cards
