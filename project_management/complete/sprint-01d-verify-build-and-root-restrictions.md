# Sprint: Verify Build and Root Restrictions

## Objective
Confirm the foundation is compliant by validating production build from website/ and enforcing root-level restrictions.

## Scope
- Validate npm run build executes successfully from website/.
- Verify repository root does not contain runnable app manifests.
- Verify repository root does not contain runnable app source folders.

## Non-Goals
- No new app features.
- No additional dependency installation.
- No deployment workflow implementation.

## Dependencies
- Completed Sprint 01a in [project_management/complete/sprint-01a-init-nextjs-in-website.md](project_management/complete/sprint-01a-init-nextjs-in-website.md).
- Completed Sprint 01b in [project_management/complete/sprint-01b-configure-tailwind-and-postcss.md](project_management/complete/sprint-01b-configure-tailwind-and-postcss.md).
- Completed Sprint 01c in [project_management/complete/sprint-01c-create-layout-and-global-tokens.md](project_management/complete/sprint-01c-create-layout-and-global-tokens.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Run npm run build from website/ and capture pass result.
- [x] Verify no root-level package.json, lockfiles, or node_modules.
- [x] Verify no root-level app, components, lib, or public folders.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Production build succeeds from website/.
- [x] Root contains no runnable dependency manifests.
- [x] Root contains no runnable app source directories.
- [x] Sprint workflow state is updated correctly.

## Verification Steps
1. Run npm run build in [website](website).
2. Check root for package.json, package-lock.json, yarn.lock, pnpm-lock.yaml, node_modules.
3. Check root for app, components, lib, public directories.
4. Confirm sprint moved from planning to active to complete.

## Deliverables
- Verification evidence for build and root restrictions.
- Completed Sprint 01d record in complete folder.

## Sprint Status Board
### Planned
- [x] Validate build and root compliance checks

### Active
- [ ] None

### Completed
- [x] Sprint 01d completed and verified
