# Sprint: Init Next.js in website

## Objective
Initialize a clean Next.js App Router project inside website/ as the baseline for all subsequent sprints.

## Scope
- Create starter Next.js project files in website/.
- Ensure package manager metadata and dependencies are installed in website/.
- Confirm starter project can build successfully.

## Non-Goals
- No Tailwind/PostCSS customization beyond generator defaults.
- No custom design tokens or layout polish.
- No deployment pipeline setup.

## Dependencies
- [AGENTS.md](AGENTS.md) website-folder requirement.
- [project_management/specs/01-foundation-and-project-setup-spec.md](project_management/specs/01-foundation-and-project-setup-spec.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Run Next.js initialization in website/.
- [x] Validate generated files and dependency manifests.
- [x] Run npm run build from website/.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] website/ contains runnable Next.js App Router scaffold.
- [x] package.json exists under website/ (not at repository root).
- [x] npm run build succeeds from website/.
- [x] project_management workflow state updated correctly.

## Verification Steps
1. Confirm website/package.json exists.
2. Confirm website/app/layout.tsx and website/app/page.tsx exist.
3. Run npm run build from website/ and confirm success.
4. Confirm this sprint file is moved to complete.

## Deliverables
- Initialized Next.js project under website/.
- Verified build output for baseline project.
- Completed Sprint 01a record in complete folder.

## Sprint Status Board
### Planned
- [x] Initialize Next.js scaffold in website/
- [x] Verify baseline build

### Active
- [ ] None

### Completed
- [x] Sprint 01a completed and verified
