# Sprint: Configure Tailwind and PostCSS

## Objective
Add Tailwind CSS and PostCSS tooling to the Next.js app in website/ so later sprints can implement token-driven styling quickly.

## Scope
- Install Tailwind CSS, PostCSS, and Autoprefixer in website/.
- Generate tailwind and postcss config files.
- Wire Tailwind directives in app/globals.css.
- Verify build success after setup.

## Non-Goals
- No design-token refactor (handled in Sprint 01c).
- No component-level styling overhaul.
- No deployment configuration changes.

## Dependencies
- Completed Sprint 01a in [project_management/complete/sprint-01a-init-nextjs-in-website.md](project_management/complete/sprint-01a-init-nextjs-in-website.md).
- Existing Next.js app in [website](website).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Install Tailwind, PostCSS, and Autoprefixer in website/.
- [x] Generate and configure tailwind/postcss config files.
- [x] Update app/globals.css with Tailwind directives.
- [x] Run npm run build from website/.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Tailwind and PostCSS dependencies are present in website/package.json.
- [x] Tailwind and PostCSS config files exist in website/.
- [x] app/globals.css includes Tailwind directives.
- [x] npm run build succeeds from website/.

## Verification Steps
1. Confirm dependencies in [website/package.json](website/package.json).
2. Confirm config files exist in [website/tailwind.config.js](website/tailwind.config.js) and [website/postcss.config.js](website/postcss.config.js).
3. Confirm directives exist in [website/app/globals.css](website/app/globals.css).
4. Run npm run build from website/ and verify success.

## Deliverables
- Tailwind/PostCSS toolchain configured in website/.
- Updated global stylesheet with Tailwind directives.
- Completed Sprint 01b record in complete folder.

## Sprint Status Board
### Planned
- [x] Install Tailwind and PostCSS toolchain
- [x] Verify build after configuration

### Active
- [ ] None

### Completed
- [x] Sprint 01b completed and verified
