# Sprint: Add Citation and Source Mapping

## Objective
Implement a reusable source citation mapping layer so timeline data references source ids consistently and resolves citations through shared utilities.

## Scope
- Create centralized source citation registry and id map.
- Add source id typing to content contracts.
- Refactor timeline dataset to resolve citation ids via reusable mapping utility.

## Non-Goals
- No UI changes for citation display.
- No milestone interaction implementation.
- No deployment configuration updates.

## Dependencies
- Completed Sprint 02a in [project_management/complete/sprint-02a-define-content-types.md](project_management/complete/sprint-02a-define-content-types.md).
- Completed Sprint 02b in [project_management/complete/sprint-02b-create-era-and-milestone-datasets.md](project_management/complete/sprint-02b-create-era-and-milestone-datasets.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Create reusable source citation registry and id map.
- [x] Refactor timeline dataset to map citation ids to citation objects.
- [x] Add strong typing for source citation ids.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Citation/source mapping is centralized in reusable content modules.
- [x] Dataset references citation ids and resolves them through mapping utilities.
- [x] Source citation ids are strongly typed.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm mapping module exists in website/lib/content/source-map.ts.
2. Confirm timeline-data uses citation ids with resolver mapping.
3. Confirm types.ts defines SourceCitationId.
4. Run npm run build in website and confirm success.

## Deliverables
- Centralized source citation mapping module.
- Refactored timeline dataset with id-based citation mapping.
- Completed Sprint 02c record in complete folder.

## Sprint Status Board
### Planned
- [x] Execute citation/source mapping implementation

### Active
- [ ] None

### Completed
- [x] Sprint 02c completed and verified
