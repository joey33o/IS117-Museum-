# Sprint: Add Terrestrial Style State

## Objective
Implement explicit terrestrial navigation styling that matches the parchment/grunge phase before celestial-state work begins.

## Scope
- Add terrestrial nav style tokens.
- Apply terrestrial nav shell visuals (brass border, parchment tone, earthy hover states).
- Ensure terrestrial typography settings are consistent in nav shell.

## Non-Goals
- No celestial nav style implementation (Sprint 03c).
- No scroll-trigger state toggling.
- No keyboard/focus audit changes beyond existing behavior.

## Dependencies
- Completed Sprint 03a in [project_management/complete/sprint-03a-build-sticky-nav-shell.md](project_management/complete/sprint-03a-build-sticky-nav-shell.md).
- Theme variables in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add terrestrial nav tokens in globals.css.
- [x] Apply terrestrial-state styles to nav shell and links.
- [x] Verify nav remains sticky and readable in terrestrial mode.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Terrestrial nav state has distinct styling tokens.
- [x] Nav border and background align to terrestrial visual direction.
- [x] Link hover/focus affordances remain clear and accessible.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm terrestrial tokens exist in [website/app/globals.css](website/app/globals.css).
2. Confirm nav shell/links use terrestrial selectors.
3. Confirm sticky behavior is unchanged.
4. Run npm run build from [website](website) and verify success.

## Deliverables
- Terrestrial nav token definitions.
- Terrestrial nav shell style implementation.
- Completed Sprint 03b record in complete folder.

## Sprint Status Board
### Planned
- [x] Add and validate terrestrial nav state styling

### Active
- [ ] None

### Completed
- [x] Sprint 03b completed and verified
