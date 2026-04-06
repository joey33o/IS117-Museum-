# Sprint: production behavior smoke test

## Objective
Run targeted post-deploy smoke tests to confirm core museum experience behavior in production.

## Scope
- Validate primary navigation and anchor routing.
- Validate timeline deep links from Home to Eras sections.
- Validate transition behavior on `/eras` only.

## Non-Goals
- No extensive cross-browser matrix testing.
- No performance optimization beyond smoke checks.

## Dependencies
- Successful completion of Sprint 08c deployment verification.
- Deployed Pages URL available.

## Implementation Tasks
- [ ] Move sprint file to active before execution.
- [ ] Validate top-level navigation behavior on deployed site.
- [ ] Validate Home timeline links into `/eras#...` anchors.
- [ ] Validate transition starts in late Era 1 and remains scoped to `/eras`.
- [ ] Validate mobile and desktop quick smoke pass.
- [ ] Record smoke-test outcomes.
- [ ] Move sprint file to complete after verification.

## Acceptance Criteria
- [ ] Core routes and nav links work in production.
- [ ] Timeline-to-eras deep links resolve correctly.
- [ ] Transition behavior matches intended production rules.

## Verification Steps
1. Open deployed site on desktop and validate route flows.
2. Open deployed site on mobile viewport and validate key interactions.
3. Confirm expected transition behavior in `/eras`.
4. Capture concise pass/fail summary.

## Deliverables
- Production smoke test summary report.

## Sprint Status Board
### Planned
- [x] This sprint is planned

### Active
- [ ] None

### Completed
- [ ] None
