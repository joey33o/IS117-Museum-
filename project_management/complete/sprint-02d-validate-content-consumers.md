# Sprint: Validate Content Consumers

## Objective
Validate that the content model is consumable by app code through typed selectors and page-level integration.

## Scope
- Add consumer helper functions for timeline data access.
- Integrate data consumption into the homepage as a validation surface.
- Ensure data can be grouped, sorted, and summarized without type errors.

## Non-Goals
- No final museum page design implementation.
- No advanced interaction logic (hover/expand) in this sprint.
- No deployment behavior changes.

## Dependencies
- Completed Sprint 02a in [project_management/complete/sprint-02a-define-content-types.md](project_management/complete/sprint-02a-define-content-types.md).
- Completed Sprint 02b in [project_management/complete/sprint-02b-create-era-and-milestone-datasets.md](project_management/complete/sprint-02b-create-era-and-milestone-datasets.md).
- Completed Sprint 02c in [project_management/complete/sprint-02c-add-citation-and-source-mapping.md](project_management/complete/sprint-02c-add-citation-and-source-mapping.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add typed content selector utilities.
- [x] Integrate selectors and dataset into homepage consumer example.
- [x] Verify grouped and sorted content can render without errors.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] At least one page imports and consumes timeline dataset via typed selectors.
- [x] Consumer functions are type-safe and compile.
- [x] App renders content-derived values without runtime/type errors.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm selector utility module exists in website/lib/content.
2. Confirm homepage imports and uses dataset/selectors.
3. Run npm run build in [website](website) and confirm success.
4. Confirm sprint moved planning -> active -> complete.

## Deliverables
- Typed selector utilities for content consumers.
- Homepage consumer validation implementation.
- Completed Sprint 02d record in complete folder.

## Sprint Status Board
### Planned
- [x] Validate typed consumer integration end-to-end

### Active
- [ ] None

### Completed
- [x] Sprint 02d completed and verified
