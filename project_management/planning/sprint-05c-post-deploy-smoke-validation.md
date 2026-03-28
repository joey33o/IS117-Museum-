# Sprint 05C - Post-Deploy Smoke Validation

## Estimate
2-3 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes.

## Governing Artifacts
- project_management/planning/spec-05-nextjs-deployment-and-release-readiness.md
- project_management/planning/qa-spec-05-nextjs-deployment-and-release-readiness.md
- AGENTS.md

## Goal
Provide a repeatable post-deploy smoke validation procedure for production URL checks of critical telescope-route behavior.

## Tasks
1. Define smoke script/checklist for production route checks.
2. Include checks for route availability, two headings, single trigger, and nav access.
3. Add one keyboard-path check and one anchor-link check.
4. Document issue triage and rollback trigger thresholds.
5. Record first execution evidence template.

## Candidate Files To Edit
- project_management/active/post-deploy-smoke-checklist.md
- project_management/active/evidence-post-deploy-smoke.md
- scripts/ (optional smoke helper script)

## Acceptance Criteria
1. Post-deploy smoke checklist exists and is executable by a reviewer.
2. Checklist includes route-health and structural checks for telescope route.
3. Checklist includes accessibility-oriented quick checks (keyboard + anchor behavior).
4. Triage path is documented for smoke-check failures.

## Verification Steps
1. Run checklist against a target URL (or placeholder with clear TODO markers).
2. Confirm all checks have expected-result definitions.
3. Capture run output in evidence file.

## What Not To Do
- Do not replace full regression testing with smoke checks.
- Do not add non-critical checks that increase runtime significantly.
- Do not leave failure handling ambiguous.
