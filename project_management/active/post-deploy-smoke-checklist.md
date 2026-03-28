# Post-Deploy Smoke Checklist - Telescope History

## Target
- Deployment URL:
- Date/time:
- Runner:

## Critical Checks
1. Route availability
- [ ] `GET /telescope-history` returns successful status (<400)

2. Required structure
- [ ] Era 1 heading exists
- [ ] Era 2 heading exists
- [ ] Exactly one `#transition-trigger` exists

3. Navigation and accessibility quick checks
- [ ] Main navigation is present
- [ ] First tab stop lands on an interactive element (prefer skip link)
- [ ] `#era-2` anchor navigation lands within visible viewport

## Execution Command
- `npm run smoke:deploy --prefix teachProject/nextjs_ai_orchestration_spec_sprint_process -- <target-url>`

## Failure Triage
1. If route health fails: block release and initiate rollback trigger.
2. If structural checks fail: block release and open P1 regression issue.
3. If accessibility quick checks fail: block release and route to a11y fix owner.

## Output Capture
- [ ] Save command output in `project_management/active/evidence-post-deploy-smoke.md`
- [ ] Record pass/fail decision and owner signoff.
