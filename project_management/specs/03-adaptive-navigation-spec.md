# Spec: Adaptive Navigation

## Objective
Deliver a sticky, accessible navigation system that supports terrestrial-to-celestial state transitions and provides stable wayfinding across the museum experience.

## Scope
- Build the sticky navigation shell component.
- Implement terrestrial style state tokens.
- Implement celestial style state tokens.
- Validate keyboard navigation and focus behavior.

## Non-Goals
- No timeline interaction implementation in this spec.
- No final page content styling beyond navigation concerns.
- No deployment workflow updates.

## Dependencies
- Completed Spec 01 foundation in [project_management/specs/01-foundation-and-project-setup-spec.md](project_management/specs/01-foundation-and-project-setup-spec.md).
- Completed Spec 02 data modeling in [project_management/specs/02-content-and-data-modeling-spec.md](project_management/specs/02-content-and-data-modeling-spec.md).
- Theme tokens available in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Complete Sprint 03a: Build sticky nav shell.
- [x] Complete Sprint 03b: Add terrestrial style state.
- [x] Complete Sprint 03c: Add celestial style state.
- [x] Complete Sprint 03d: Keyboard and focus nav validation.

## Acceptance Criteria
- [x] Navigation is sticky and visible throughout scroll.
- [x] Nav styles align with terrestrial/celestial state tokens.
- [x] Navigation supports keyboard access with visible focus states.
- [x] Build passes after navigation integration.

## Verification Steps
1. Confirm nav component renders from root layout.
2. Confirm sticky behavior on scroll.
3. Confirm keyboard tab flow across nav links.
4. Run npm run build from [website](website) and verify success.

## Deliverables
- Adaptive navigation component and style hooks.
- Accessible keyboard/focus behavior for nav links.
- Sprint records for 03a-03d.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Sprint 03a: build sticky nav shell
- [x] Sprint 03b: add terrestrial style state
- [x] Sprint 03c: add celestial style state
- [x] Sprint 03d: keyboard and focus nav validation
