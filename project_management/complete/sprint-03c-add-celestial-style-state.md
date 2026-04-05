# Sprint: Add Celestial Style State

## Objective
Implement explicit celestial navigation styling for the space-era state, including transparent shell treatment and white-line navigation language.

## Scope
- Add celestial nav style tokens.
- Apply `.is-space-era` nav shell overrides.
- Ensure links and brand are legible against celestial background.

## Non-Goals
- No state-toggle logic implementation.
- No keyboard/focus audit changes (Sprint 03d).
- No timeline behavior changes.

## Dependencies
- Completed Sprint 03a in [project_management/complete/sprint-03a-build-sticky-nav-shell.md](project_management/complete/sprint-03a-build-sticky-nav-shell.md).
- Completed Sprint 03b in [project_management/complete/sprint-03b-add-terrestrial-style-state.md](project_management/complete/sprint-03b-add-terrestrial-style-state.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add celestial nav tokens in globals.css.
- [x] Add `.is-space-era` nav shell and link style overrides.
- [x] Verify nav border and transparency align to celestial requirements.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Celestial nav state has explicit style tokens.
- [x] In space state, nav shell uses transparent/near-transparent treatment.
- [x] Nav border becomes a 1px white line in space state.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm celestial tokens exist in [website/app/globals.css](website/app/globals.css).
2. Confirm `.is-space-era` selectors style nav shell and links.
3. Confirm border is white in celestial state.
4. Run npm run build from [website](website) and verify success.

## Deliverables
- Celestial nav token definitions and style selectors.
- Updated nav shell behavior for space-era state.
- Completed Sprint 03c record in complete folder.

## Sprint Status Board
### Planned
- [x] Add and verify celestial nav state styling

### Active
- [ ] None

### Completed
- [x] Sprint 03c completed and verified
