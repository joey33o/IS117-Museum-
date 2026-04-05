# Spec: Work Segmentation and Delivery Control

## Objective
Define the project-wide segmentation method so implementation is delivered through small, focused sprints that are safe for AI-assisted execution and easy to verify.

## Scope
- Define the required sprint sizing and decomposition rules.
- Define dependency and execution order across Specs 01-08.
- Define file movement workflow across planning, active, and complete folders.
- Define quality gates required before a sprint can be marked complete.
- Define consistency rules so sprint files are uniform and auditable.

## Non-Goals
- This spec does not implement website code directly.
- This spec does not replace feature-level requirements in Specs 01-08.
- This spec does not execute or start any sprint automatically.

## Dependencies
- AGENTS generation rules in [AGENTS.md](AGENTS.md).
- Required folder model under [project_management](project_management).
- Required runnable-app location under [website](website).

## Implementation Tasks
- [ ] Establish sprint granularity rules: one narrow outcome per sprint.
- [ ] Establish decomposition rules for large features into dependent micro-sprints.
- [ ] Establish allowed sprint states: Planned, Active, Completed.
- [ ] Establish file movement workflow: planning -> active -> complete.
- [ ] Establish completion gate: acceptance checks + verification steps + build pass.
- [ ] Establish cross-spec dependency sequencing for Specs 01-08.
- [ ] Establish template compliance rules for all sprint documents.

## Acceptance Criteria
- [ ] Every major feature is decomposed into multiple focused sprints where appropriate.
- [ ] No sprint mixes unrelated major outcomes.
- [ ] Only one sprint can exist in [project_management/active](project_management/active) at any time.
- [ ] Sprint files are created first in [project_management/planning](project_management/planning).
- [ ] A sprint moves to [project_management/complete](project_management/complete) only after criteria and verification pass.
- [ ] All sprint files use the required section template consistently.
- [ ] Planned/Active/Completed status board appears in each sprint file.

## Verification Steps
1. Confirm all required sprint files exist in [project_management/planning](project_management/planning).
2. Sample at least one sprint file from each major spec group (01-08) for template compliance.
3. Confirm [project_management/active](project_management/active) contains at most one sprint file at a time.
4. Confirm completed sprints in [project_management/complete](project_management/complete) include completed acceptance checkboxes and verification evidence.
5. Confirm build command for any sprint touching code is executed from [website](website).

## Deliverables
- Segmentation governance rules documented in this spec.
- Standardized sprint template enforcement.
- Dependency map across major specs and sprint groups.
- Auditable sprint state workflow (planning, active, complete).

## Sprint Status Board
### Planned
- [ ] Validate that all Specs 01-08 remain segmented into micro-sprints.
- [ ] Audit sprint naming and grouping consistency (01a-08d pattern).
- [ ] Audit sprint template compliance across planning files.
- [ ] Audit active-folder exclusivity rule (single active sprint).
- [ ] Define a recurring segmentation QA checklist for future sprint additions.

### Active
- [ ] None

### Completed
- [ ] Initial segmentation policy established in Spec 00
