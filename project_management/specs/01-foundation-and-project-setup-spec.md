# Spec: Foundation and Project Setup

## Objective
Create a stable Next.js App Router foundation in website/ so all future sprints can build on a consistent project baseline.

## Scope
- Initialize the Next.js project inside website/.
- Ensure base tooling and scripts are present and runnable.
- Establish root restriction compliance (no runnable app manifests at repository root).
- Prepare layout/global-style scaffold for follow-on sprints.

## Non-Goals
- No feature-level UI implementation beyond starter app files.
- No content modeling or timeline implementation.
- No deployment workflow configuration in this spec.

## Dependencies
- Work segmentation rules from [project_management/specs/00-work-segmentation-spec.md](project_management/specs/00-work-segmentation-spec.md).
- Website-folder requirement from [AGENTS.md](AGENTS.md).
- Node.js/npm available locally.

## Implementation Tasks
- [x] Complete Sprint 01a: Initialize Next.js in website/.
- [x] Complete Sprint 01b: Configure Tailwind and PostCSS.
- [x] Complete Sprint 01c: Create layout and global tokens.
- [x] Complete Sprint 01d: Verify build and root restrictions.

## Acceptance Criteria
- [x] website/ contains a runnable Next.js App Router project.
- [x] Baseline scripts execute from website/.
- [x] Root-level runnable manifests/source are not introduced.
- [x] Foundation artifacts exist for downstream specs.

## Verification Steps
1. Confirm expected starter files exist under website/.
2. Run npm run build from website/ and verify success.
3. Confirm project root does not contain runnable app manifests.
4. Confirm Sprint 01 files are distributed and tracked via planning/active/complete workflow.

## Deliverables
- Next.js project scaffold in website/.
- Foundation sprint records for 01a-01d.
- Verified root-structure compliance.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Sprint 01a: init nextjs in website
- [x] Sprint 01b: configure tailwind and postcss
- [x] Sprint 01c: create layout and global tokens
- [x] Sprint 01d: verify build and root restrictions
