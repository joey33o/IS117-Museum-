# Sprint: Eras Header and Transition Refinement

## Objective
Resolve eras header overlap issues and refine transition timing so celestial shift begins during the late Era 1 bridge while remaining route-scoped to eras page.

## Scope
- Fix header row composition to prevent panel/title collision.
- Restrict transition trigger behavior to /eras route.
- Start transition in late Era 1 (bridge section) and continue into Era 2.

## Non-Goals
- No new content modules.
- No deployment workflow changes.
- No global route architecture changes.

## Dependencies
- Header composition in [website/app/eras/page.tsx](website/app/eras/page.tsx).
- Transition logic in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Restructure eras header into non-overlapping rows.
- [x] Add route guard so transition only runs on /eras.
- [x] Retarget trigger to late Era 1 bridge entry and preserve smooth continuation.
- [x] Validate readability before/during/after transition.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Header helper panel no longer overlaps or competes with page title.
- [x] Transition is inactive outside /eras route.
- [x] Transition begins in late Era 1 and continues into Era 2.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm header title and helper panel occupy distinct rows.
2. Confirm no transition behavior on Home route.
3. Confirm transition starts in Era 1 bridge and progresses into Era 2 sections.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Header layout fix in [website/app/eras/page.tsx](website/app/eras/page.tsx).
- Transition trigger refinements in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).
- Completed sprint record in complete folder.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify eras header and transition refinement
