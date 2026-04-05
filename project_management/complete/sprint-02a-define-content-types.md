# Sprint: Define Content Types

## Objective
Create the core TypeScript type system for timeline content so downstream sprints can add data and component consumers safely.

## Scope
- Define types for eras, milestones, and timeline entries.
- Define citation/source types for attribution.
- Export types from a shared content module.

## Non-Goals
- No population of final era/milestone data.
- No rendering logic changes in pages/components.
- No citation UI behavior.

## Dependencies
- Completed foundation from [project_management/specs/01-foundation-and-project-setup-spec.md](project_management/specs/01-foundation-and-project-setup-spec.md).
- Next.js project in [website](website).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Create shared content type module under website.
- [x] Define era, milestone, and citation interfaces.
- [x] Export union/utility types for timeline ordering and grouping.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Content types are defined and exported from a single shared location.
- [x] Types support summary and full detail text fields.
- [x] Types include citation metadata structure.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm type file exists in website content module.
2. Confirm exported types include era, milestone, citation, and dataset contracts.
3. Run npm run build from [website](website) and verify success.
4. Confirm sprint moved planning -> active -> complete.

## Deliverables
- Shared TypeScript content contracts for Spec 02.
- Completed Sprint 02a record in complete folder.

## Sprint Status Board
### Planned
- [x] Define core content contracts
- [x] Validate build compatibility

### Active
- [ ] None

### Completed
- [x] Sprint 02a completed and verified
