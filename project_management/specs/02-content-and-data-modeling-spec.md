# Spec: Content and Data Modeling

## Objective
Define a durable content model for eras, milestones, and citations so timeline features are data-driven rather than hardcoded in components.

## Scope
- Create strongly typed content interfaces.
- Establish data structures for eras and milestones.
- Define source citation mapping model.
- Validate content model integration readiness for component consumers.

## Non-Goals
- No final visual rendering behavior.
- No hover/expand milestone interactions (covered in Spec 05).
- No deployment workflow updates.

## Dependencies
- Completed Spec 01 foundation in [project_management/specs/01-foundation-and-project-setup-spec.md](project_management/specs/01-foundation-and-project-setup-spec.md).
- Reference content in [references](references).
- Website app workspace in [website](website).

## Implementation Tasks
- [x] Complete Sprint 02a: Define content types.
- [x] Complete Sprint 02b: Create era and milestone datasets.
- [x] Complete Sprint 02c: Add citation and source mapping.
- [x] Complete Sprint 02d: Validate content consumers.

## Acceptance Criteria
- [x] Core interfaces/types are defined for eras, milestones, and citations.
- [x] Data can represent concise summaries and extended detail text.
- [x] Data shape supports timeline ordering and grouping by era.
- [x] Build passes after content-model integration.

## Verification Steps
1. Confirm types exist and are importable from website code.
2. Confirm dataset files map to those types.
3. Run build from [website](website) and verify success.
4. Confirm sprint lifecycle tracking across planning, active, and complete.

## Deliverables
- Content type definitions and shared contracts.
- Era/milestone dataset structures.
- Citation/source mapping model.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Sprint 02a: define content types
- [x] Sprint 02b: create era and milestone datasets
- [x] Sprint 02c: add citation and source mapping
- [x] Sprint 02d: validate content consumers
