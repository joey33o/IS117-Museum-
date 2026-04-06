# Spec: Accessibility and QA Validation

## Objective
Audit and harden accessibility, navigation semantics, and cross-breakpoint quality so the museum experience remains readable and operable in both terrestrial and celestial states.

## Scope
- Verify heading hierarchy and landmark structure.
- Validate focus order and keyboard interaction.
- Improve color contrast during theme transitions.
- Run responsive regression checks for major sections.
- Add light narrative bridge reading flow between era card groups.
- Prepare dedicated eras-page architecture and transition readability refinement.

## Non-Goals
- No new feature modules outside accessibility and QA scope.
- No deployment pipeline changes.
- No unrelated visual redesigns.

## Dependencies
- Completed Spec 06 transition system in [project_management/specs/06-scroll-transition-and-motion-behavior-spec.md](project_management/specs/06-scroll-transition-and-motion-behavior-spec.md).
- Existing navigation and section structure in [website/components/site/adaptive-nav.tsx](website/components/site/adaptive-nav.tsx) and [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Complete Sprint 07a: Heading and landmark audit.
- [x] Complete Sprint 07b: Focus order and keyboard flow.
- [x] Complete Sprint 07c: Contrast validation both themes.
- [x] Complete Sprint 07d: Responsive regression checks.
- [x] Complete Sprint 07e: Era reading bridges.
- [ ] Complete Sprint 07f: Create dedicated eras page.
- [ ] Complete Sprint 07g: Cosmic blue transition palette.

## Acceptance Criteria
- [ ] Landmarks and heading order are semantically coherent.
- [ ] Navigation targets are meaningful and non-empty.
- [ ] Contrast remains readable across transition states.
- [ ] npm run build succeeds after each sprint.

## Verification Steps
1. Validate heading order and section labeling in page structure.
2. Validate nav targets map to real content sections.
3. Validate keyboard traversal and focus visibility.
4. Validate contrast in both themes and transitional states.
5. Run npm run build in [website](website) and verify success.

## Deliverables
- Accessibility and QA refinements across nav, headings, and contrast.
- Completed sprint records for 07a through 07g.

## Sprint Status Board
### Planned
- [ ] Sprint 07f: create dedicated eras page
- [ ] Sprint 07g: cosmic blue transition palette

### Active
- [ ] None

### Completed
- [x] Sprint 07a: heading and landmark audit
- [x] Sprint 07b: focus order and keyboard flow
- [x] Sprint 07c: contrast validation both themes
- [x] Sprint 07d: responsive regression checks
- [x] Sprint 07e: era reading bridges
