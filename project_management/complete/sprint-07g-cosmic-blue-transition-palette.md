# Sprint: Cosmic Blue Transition Palette

## Objective
Upgrade the terrestrial-to-cosmic transition from grayscale darkening to a cohesive blue-toned celestial palette with stable readability.

## Scope
- Define and apply a complete cosmic blue token set (background, surface, text, border, accent).
- Update transition interpolation to use full palette tokens, not just black/white endpoints.
- Ensure nav, cards, timeline markers, and bridge blocks remain visible throughout transition.

## Non-Goals
- No major content structure changes.
- No route architecture changes.
- No deployment pipeline changes.

## Dependencies
- Existing token system in [website/app/globals.css](website/app/globals.css).
- Transition progress logic in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Define cosmic blue token palette and fallback values.
- [x] Update transition interpolation to blend through new palette values.
- [x] Update key components (nav/cards/markers/bridges) to consume new tokens consistently.
- [x] Validate readability/contrast before-during-after transition.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Cosmic mode uses a cohesive blue palette rather than pure black/white.
- [x] Transition no longer causes elements to appear to disappear.
- [x] Readability remains clear during transition progression.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm tokenized cosmic palette is active in celestial mode.
2. Confirm transition progression preserves component visibility.
3. Confirm nav/cards/timeline remain readable at intermediate states.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Full cosmic-blue transition palette implementation.
- Updated transition token interpolation behavior.
- Completed Sprint 07g record in complete folder.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify cosmic-blue transition palette
