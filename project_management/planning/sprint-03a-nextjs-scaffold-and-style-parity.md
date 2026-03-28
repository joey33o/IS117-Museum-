# Sprint 03A - Next.js Scaffold And Style Parity

## Estimate
2-3 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-03-nextjs-parity-migration.md
- project_management/planning/qa-spec-03-nextjs-parity-migration.md
- AGENTS.md

## Goal
Establish a Next.js implementation baseline for the two-era telescope experience with global styling tokens and app structure ready for parity migration.

## Tasks
1. Identify/create the target app location under teachProject/nextjs_ai_orchestration_spec_sprint_process.
2. Create a dedicated feature route or page skeleton for the telescope two-era experience.
3. Add/align global CSS variables for theme states (initial and space era).
4. Add a single transition-state class contract on body or root container.
5. Add base section wrappers for Era 1 and Era 2 headings (without full content migration yet).
6. Ensure build and dev scripts run cleanly.

## Candidate Files To Edit
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/page.tsx (or feature page)
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/layout.tsx
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/globals.css
- teachProject/nextjs_ai_orchestration_spec_sprint_process/components/** (if needed)

## Acceptance Criteria
1. Next.js renders a page containing exactly two era headings with placeholder section containers.
2. Global theme variable model exists with one initial state and one space-era override state.
3. Single transition-state class contract is defined and documented in code comments.
4. `npm run build` succeeds in the target Next.js project.

## Verification Steps
1. Run `npm run build` in the Next.js project root.
2. Run `npm run dev` and confirm page loads without runtime errors.
3. Inspect DOM/CSS and confirm theme variables and class contract exist.
4. Confirm exactly two top-level era section containers are present.

## What Not To Do
- Do not migrate full era narrative text in this sprint.
- Do not add multiple transition classes.
- Do not introduce new visual redesign patterns unrelated to parity setup.
