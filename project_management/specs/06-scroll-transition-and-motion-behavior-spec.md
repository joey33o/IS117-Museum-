# Spec: Scroll Transition and Motion Behavior

## Objective
Implement the scroll-driven transition system that controls terrestrial-to-celestial state changes with restrained, accessible motion.

## Scope
- Bootstrap GSAP ScrollTrigger in a dedicated client component.
- Toggle `is-space-era` state at defined scroll threshold.
- Sync CSS variable/theme transition behavior to scroll.
- Add reduced-motion fallbacks for transition effects.

## Non-Goals
- No major content restructuring.
- No deployment/CI updates.
- No 3D/WebGL interactions.

## Dependencies
- Completed Spec 04 opening composition in [project_management/specs/04-hero-and-opening-composition-spec.md](project_management/specs/04-hero-and-opening-composition-spec.md).
- Completed Spec 05 timeline modules in [project_management/specs/05-timeline-and-milestone-interaction-spec.md](project_management/specs/05-timeline-and-milestone-interaction-spec.md).
- Existing CSS token system in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Complete Sprint 06a: ScrollTrigger bootstrap.
- [x] Complete Sprint 06b: Toggle `is-space-era` at threshold.
- [x] Complete Sprint 06c: Sync CSS variable transition behavior.
- [x] Complete Sprint 06d: Reduced-motion fallbacks.

## Acceptance Criteria
- [ ] ScrollTrigger is initialized in a stable client-side lifecycle.
- [ ] Theme state toggles at intended scroll threshold.
- [ ] Motion remains subtle and respects reduced-motion settings.
- [ ] npm run build succeeds after each sprint.

## Verification Steps
1. Verify ScrollTrigger setup mounts and cleans up correctly.
2. Verify body class toggles in expected scroll range.
3. Verify reduced-motion users do not receive unnecessary animation.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Transition trigger component and motion-state wiring.
- Completed sprint records for 06a through 06d.

## Sprint Status Board
### Planned
- [x] None

### Active
- [ ] None

### Completed
- [x] Sprint 06a: scrolltrigger bootstrap
- [x] Sprint 06b: toggle is-space-era at threshold
- [x] Sprint 06c: sync css variable transition
- [x] Sprint 06d: reduced-motion fallbacks
