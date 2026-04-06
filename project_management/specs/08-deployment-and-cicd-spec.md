# Spec: deployment and cicd

## Objective
Prepare and validate static deployment for GitHub Pages with reproducible CI build/deploy automation.

## Scope
- Configure Next.js static export and Pages-safe pathing.
- Add GitHub Actions workflow to build and deploy Pages artifact.
- Verify deployment readiness and production behavior via targeted smoke checks.

## Non-Goals
- No backend service deployment.
- No custom domain configuration.
- No unrelated feature development.

## Dependencies
- Existing Next.js application under [website](website).
- GitHub Pages repository settings enabled.
- Completion of Spec 07 front-end content and transition behavior.

## Implementation Tasks
- [x] Complete Sprint 08a: Next config static export.
- [x] Complete Sprint 08b: GitHub Pages workflow.
- [ ] Complete Sprint 08c: Deploy verification.
- [ ] Complete Sprint 08d: Production behavior smoke test.

## Acceptance Criteria
- [x] Static export configuration is present and build succeeds.
- [x] CI workflow exists to build and deploy Pages artifact.
- [ ] Deployment verification confirms expected Pages URL behavior.
- [ ] Production smoke checks pass on deployed site.

## Verification Steps
1. Run `npm run build` from [website](website) and confirm static routes are generated.
2. Validate [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds from `website/` and uploads `website/out`.
3. Trigger or observe deployment workflow completion in GitHub Actions (Sprint 08c).
4. Perform post-deploy smoke checks across `/` and `/eras` routes (Sprint 08d).

## Deliverables
- Static-export-ready [website/next.config.ts](website/next.config.ts).
- Pages workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- Deployment verification report (pending Sprint 08c).
- Production smoke test report (pending Sprint 08d).

## Sprint Status Board
### Planned
- [ ] Sprint 08c: deploy verification
- [ ] Sprint 08d: production behavior smoke test

### Active
- [ ] None

### Completed
- [x] Sprint 08a: next config static export
- [x] Sprint 08b: github pages workflow
