# Sprint: ScrollTrigger Bootstrap

## Objective
Initialize GSAP ScrollTrigger in the app shell with reliable mount and cleanup behavior, establishing the foundation for theme-threshold transitions.

## Scope
- Add GSAP dependency and ScrollTrigger registration.
- Implement a dedicated client component for transition initialization.
- Mount component from root layout without changing theme behavior yet.

## Non-Goals
- No `is-space-era` toggle logic yet (Sprint 06b).
- No variable sync tuning yet (Sprint 06c).
- No reduced-motion branching yet (Sprint 06d).

## Dependencies
- Layout shell in [website/app/layout.tsx](website/app/layout.tsx).
- Existing global theme token classes in [website/app/globals.css](website/app/globals.css).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Install GSAP dependency in website app.
- [x] Create client-side transition trigger bootstrap component.
- [x] Mount trigger component in root layout.
- [x] Verify no runtime errors and clean unmount behavior.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] GSAP and ScrollTrigger are available in the app.
- [x] Bootstrap component initializes and tears down safely.
- [x] Root layout mounts trigger component without regressions.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm GSAP package is present in dependencies.
2. Confirm trigger component is mounted from layout.
3. Confirm ScrollTrigger instances are cleaned up on unmount.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Transition bootstrap component and dependency wiring.
- Completed Sprint 06a record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify ScrollTrigger bootstrap
