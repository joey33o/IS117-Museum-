# Sprint 05A - Next.js CI Quality Gates

## Estimate
2-4 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and required checks succeed.

## Governing Artifacts
- project_management/planning/spec-05-nextjs-deployment-and-release-readiness.md
- project_management/planning/qa-spec-05-nextjs-deployment-and-release-readiness.md
- AGENTS.md

## Goal
Establish deterministic CI quality gates that block merges/releases when build or critical telescope-route tests fail.

## Tasks
1. Audit existing workflow files and identify primary CI entrypoint.
2. Add/update job steps for Node setup, dependency install, test, and build.
3. Ensure telescope-route regression tests run as part of CI test gate.
4. Add clear workflow step names and failure visibility.
5. Validate workflow syntax and local command parity.

## Candidate Files To Edit
- .github/workflows/*.yml
- teachProject/nextjs_ai_orchestration_spec_sprint_process/package.json (if script alignment needed)
- project_management/active/evidence-ci-gates.md

## Acceptance Criteria
1. CI runs test and build for Next.js project on pull request and/or main branch updates.
2. Failing tests block CI gate.
3. Failing build blocks CI gate.
4. Workflow commands match documented local commands.

## Verification Steps
1. Run local test and build commands used by CI.
2. Validate workflow YAML syntax.
3. Capture CI run evidence (or dry-run evidence where applicable).

## What Not To Do
- Do not add unrelated deployment jobs in this sprint.
- Do not introduce non-deterministic checks as blocking gates.
- Do not expand CI scope to full browser matrix yet.
