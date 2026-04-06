# Sprint: github pages workflow

## Objective
Create a GitHub Actions workflow that builds the website and deploys static export output to GitHub Pages.

## Scope
- Add Pages workflow file under `.github/workflows`.
- Install dependencies and run build from `website/`.
- Upload `website/out` and deploy using Pages actions.

## Non-Goals
- No branch protection or repository settings changes.
- No manual live deploy validation in this sprint.

## Dependencies
- Static export configuration in [website/next.config.ts](website/next.config.ts).
- GitHub Actions deploy actions and Pages permissions.

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Add GitHub Pages workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- [x] Configure build to run in `website/` with `npm ci` and `npm run build`.
- [x] Configure artifact upload from `website/out` and deploy via Pages action.
- [x] Verify local build still succeeds after workflow addition.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Workflow exists with build and deploy jobs.
- [x] Workflow uploads static export artifact from `website/out`.
- [x] Local build remains successful.

## Verification Steps
1. Review [.github/workflows/deploy.yml](.github/workflows/deploy.yml) for build/deploy jobs.
2. Run `npm run build` in [website](website) and verify success.

## Deliverables
- Pages deployment workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- Verified compatible local build output.

## Sprint Status Board
### Planned
- [ ] None

### Active
- [ ] None

### Completed
- [x] Implement and verify github pages workflow
