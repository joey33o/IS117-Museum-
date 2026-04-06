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
- [ ] Move sprint file to active before execution.
- [ ] Trigger/observe deploy workflow completion.
- [ ] Validate deployed pages for `/` and `/eras`.
- [ ] Validate static assets resolve under base path.
- [ ] Record deployment verification evidence.
- [ ] Move sprint file to complete after verification.

## Acceptance Criteria
- [ ] Deployment workflow succeeds without errors.
- [ ] Home and eras routes render correctly on Pages URL.
- [ ] No broken static assets or base-path regressions.

## Verification Steps
1. Inspect Actions run logs for successful build and deploy jobs.
2. Open deployed Pages URL and verify `/` and `/eras`.
3. Check browser console/network for 404 asset errors.
4. Capture brief verification notes.

## Deliverables
- Deployment verification notes with route/asset checks.

## Sprint Status Board
### Planned
- [x] This sprint is planned

### Active
- [ ] None

### Completed
- [ ] None
