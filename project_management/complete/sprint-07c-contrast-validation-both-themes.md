# Sprint: Contrast Validation Both Themes

## Objective
Resolve readability issues across terrestrial/celestial transition states and validate contrast quality in both themes.

## Scope
- Audit and tune text/background contrast in transition states.
- Adjust transition activation point to begin at Cosmic Instruments instead of generic home-page midpoint.
- Validate nav/card readability in both themes and intermediate states.

## Non-Goals
- No new content modules.
- No keyboard flow changes beyond contrast-related refinements.
- No deployment pipeline updates.

## Dependencies
- Completed Sprint 07b in [project_management/complete/sprint-07b-focus-order-and-keyboard-flow.md](project_management/complete/sprint-07b-focus-order-and-keyboard-flow.md).
- Transition trigger logic in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).
- Home section anchors in [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Measure and tune contrast for text/cards/nav in both themes.
- [x] Update transition trigger start point to activate at `#cosmic-instruments`.
- [x] Validate readability while scrolling through transition zone.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Readability remains clear in terrestrial, celestial, and transition states.
- [x] Theme transition does not start until Cosmic Instruments section is reached.
- [x] Nav and card text maintain sufficient visual contrast.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm transition activation aligns with the Cosmic Instruments section boundary.
2. Confirm body/nav/card text remains readable before, during, and after transition.
3. Confirm no regressions to section anchor navigation.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Updated transition trigger point and contrast tuning for both themes.
- Completed Sprint 07c record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify contrast validation across both themes
