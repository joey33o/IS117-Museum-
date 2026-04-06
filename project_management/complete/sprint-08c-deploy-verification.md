# Sprint: deploy verification

## Objective
Verify that GitHub Pages deployment executes successfully and routes are reachable with correct asset loading.

## Scope
- Confirm workflow run completion on target branch.
- Validate deployed `/` and `/eras` routes are accessible.
- Validate assets load correctly under repository base path.

## Non-Goals
- No redesign or content rewrites.
- No major CI architecture changes.

## Dependencies
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- Static export config in [website/next.config.ts](website/next.config.ts).
- GitHub Pages settings enabled for repository.

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Trigger/observe deploy workflow completion.
- [x] Validate deployed pages for `/` and `/eras`.
- [x] Validate static assets resolve under base path.
- [x] Record deployment verification evidence.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Deployment workflow succeeds without errors.
- [x] Home and eras routes render correctly on Pages URL.
- [x] No broken static assets or base-path regressions.

## Verification Steps
1. Inspect Actions run logs for successful build and deploy jobs.
2. Open deployed Pages URL and verify `/` and `/eras`.
3. Check browser console/network for 404 asset errors.
4. Capture brief verification notes.

## Deliverables
- Deployment verification notes with route/asset checks.
- Evidence summary:
	- Deployed URLs reachable: `https://joey33o.github.io/IS117-Museum-/` and `https://joey33o.github.io/IS117-Museum-/eras/`.
	- Hero image loads from `.../IS117-Museum-/telescope-pic.jpg`.
	- GitHub-like build simulation with `GITHUB_ACTIONS=true` and `GITHUB_REPOSITORY=joey33o/IS117-Museum-` succeeds.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Verify deployment routes and assets on Pages URL
