# Sprint: next config static export

## Objective
Configure Next.js for static export and GitHub Pages path compatibility.

## Scope
- Set `output: 'export'` in Next config.
- Configure image handling and Pages-safe path settings.
- Validate build output for static routes.

## Non-Goals
- No CI workflow authoring in this sprint.
- No live deployment execution.

## Dependencies
- Next.js app config file [website/next.config.ts](website/next.config.ts).
- Build command in [website/package.json](website/package.json).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add static export configuration to Next config.
- [x] Add GitHub Pages-compatible base path and asset prefix logic.
- [x] Enable unoptimized images for static export.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Next config uses static export mode.
- [x] Pages pathing logic exists for repository deployment.
- [x] Build succeeds with static routes generated.

## Verification Steps
1. Review [website/next.config.ts](website/next.config.ts) for export/path settings.
2. Run `npm run build` in [website](website) and confirm success.

## Deliverables
- Updated static-export-ready config in [website/next.config.ts](website/next.config.ts).
- Verified build output from `npm run build`.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify next config static export
