# Sprint: Home Timeline Reintroduction

## Objective
Reintroduce a compact Home timeline as an orientation rail with direct deep links into dedicated eras reading sections.

## Scope
- Restore timeline section on Home below hero.
- Use curated, compact milestone stops instead of full narrative cards.
- Map each milestone to specific /eras subsection anchors.

## Non-Goals
- No return to full era narrative on Home.
- No route architecture changes.
- No deployment workflow changes.

## Dependencies
- Home page structure in [website/app/page.tsx](website/app/page.tsx).
- Timeline component in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Restore timeline placement on Home under hero.
- [x] Replace prior dataset behavior with curated 8-stop orientation map.
- [x] Link each stop to a specific /eras anchor destination.
- [x] Preserve active marker and responsive timeline behavior.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Home timeline is visible and compact.
- [x] Each timeline stop deep-links to a valid eras anchor.
- [x] Timeline serves orientation and does not duplicate full narrative load.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm timeline appears on Home after hero.
2. Confirm all 8 timeline links navigate to expected /eras anchors.
3. Confirm desktop and mobile timeline behavior remains usable.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Restored Home timeline section in [website/app/page.tsx](website/app/page.tsx).
- Updated orientation timeline mapping in [website/components/content/home/timeline-rail.tsx](website/components/content/home/timeline-rail.tsx).
- Completed sprint record in complete folder.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify home timeline reintroduction
