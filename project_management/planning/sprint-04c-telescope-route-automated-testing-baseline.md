# Sprint 04C - Telescope Route Automated Testing Baseline

## Estimate
3-5 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-04-nextjs-production-readiness.md
- project_management/planning/qa-spec-04-nextjs-production-readiness.md
- AGENTS.md

## Goal
Add a minimal but reliable automated test suite that protects critical two-era structure and single-transition-state behavior.

## Tasks
1. Configure or extend existing test setup for route/component checks.
2. Add test for exactly two era headings on `/telescope-history`.
3. Add test for single transition trigger boundary presence.
4. Add client-behavior test for transition class toggle contract (`is-space-era`).
5. Add command documentation for test execution in project README or sprint notes.

## Candidate Files To Edit
- teachProject/nextjs_ai_orchestration_spec_sprint_process/tests/**
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/telescope-history/**
- teachProject/nextjs_ai_orchestration_spec_sprint_process/package.json
- project_management/active/evidence-tests-telescope-history.md

## Acceptance Criteria
1. Automated test asserts exactly two era headings on telescope route.
2. Automated test asserts exactly one `#transition-trigger` element.
3. Automated test verifies class toggle behavior entry/exit contract in controlled conditions.
4. Test command runs locally with passing status.
5. Next.js build still succeeds after test additions.

## Verification Steps
1. Run build in Next.js project.
2. Run test command(s) and confirm pass.
3. Review test files for deterministic assertions and no flaky time-based waits.
4. Record results in test evidence file.

## What Not To Do
- Do not attempt full E2E matrix in this baseline sprint.
- Do not add brittle tests coupled to exact paragraph text.
- Do not change narrative content to satisfy tests.
