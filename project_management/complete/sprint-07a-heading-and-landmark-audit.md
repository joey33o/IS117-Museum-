# Sprint: Heading and Landmark Audit

## Objective
Ensure top-level navigation maps to meaningful sections and page landmarks/headings are semantically structured.

## Scope
- Audit and correct home-page section landmarks and heading labels.
- Replace empty route targets in nav with valid in-page section anchors.
- Add missing section anchors for Era and Important Figures destinations.

## Non-Goals
- No keyboard interaction enhancements beyond semantic baseline (Sprint 07b).
- No contrast tuning work (Sprint 07c).
- No responsive polish changes outside required semantic structure.

## Dependencies
- Existing nav component in [website/components/site/adaptive-nav.tsx](website/components/site/adaptive-nav.tsx).
- Existing home sections in [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Update nav links to target meaningful page anchors.
- [x] Add anchored sections for Earthbound Observers, Cosmic Instruments, and Important Figures.
- [x] Ensure heading levels and aria labels remain coherent.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Nav links for era sections lead to populated content sections.
- [x] Sections have clear heading hierarchy and landmark labeling.
- [x] No empty destination pages are required for nav flow.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm nav era and figures items point to in-page anchors.
2. Confirm anchored sections render with meaningful content.
3. Confirm heading order is logical and non-skipping from hero onward.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Updated nav destination mapping and audited home-page section landmarks.
- Completed Sprint 07a record in complete folder.

## Sprint Status Board
### Planned
- [x] None

### Active
- [x] None

### Completed
- [x] Implement and verify heading and landmark audit fixes
