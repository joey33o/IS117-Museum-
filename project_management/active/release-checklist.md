# Release Checklist - Telescope History Route

## Release Metadata
- Release date:
- Release owner:
- Reviewer:
- Target environment URL:
- Commit/branch:

## Pre-Release Gates (Must Pass)
1. Build gate
- [ ] `npm run build --prefix teachProject/nextjs_ai_orchestration_spec_sprint_process`
- Evidence:

2. Test gate
- [ ] `npm run test --prefix teachProject/nextjs_ai_orchestration_spec_sprint_process`
- Evidence:

3. Telescope regression gate
- [ ] Telescope route structure + transition tests pass in CI/local
- Evidence: `project_management/active/evidence-tests-telescope-history.md`

4. Responsive and accessibility baseline
- [ ] Responsive evidence reviewed
- [ ] Accessibility evidence reviewed
- Evidence:
  - `project_management/active/evidence-responsive-telescope-history.md`
  - `project_management/active/evidence-accessibility-telescope-history.md`

5. CI gates configured
- [ ] Workflow includes blocking test/build gates for PR and main
- Evidence: `project_management/active/evidence-ci-gates.md`

## Deployment Readiness
1. Deployment workflow target confirmed
- [ ] `.github/workflows/deploy.yml` reviewed for branch and artifact path

2. Output artifact readiness
- [ ] `out/` produced by build
- [ ] Telescope route included in route map

## Post-Release Verification
1. Smoke validation
- [ ] Run `npm run smoke:deploy --prefix teachProject/nextjs_ai_orchestration_spec_sprint_process -- <target-url>`
- [ ] Confirm route health and structural checks pass
- Evidence: `project_management/active/evidence-post-deploy-smoke.md`

## Rollback Plan
1. Rollback trigger
- Any failure in build/test/smoke critical checks after deployment.

2. Rollback action
- Revert to prior known-good commit and redeploy previous artifact.

3. Communication
- Notify stakeholders with failure summary and rollback status.

## Signoff
- [ ] Release owner signoff
- [ ] Reviewer signoff
