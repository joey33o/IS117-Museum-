# Sprint 04B - Telescope Route Accessibility Hardening

## Estimate
2-4 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-04-nextjs-production-readiness.md
- project_management/planning/qa-spec-04-nextjs-production-readiness.md
- AGENTS.md

## Goal
Raise accessibility quality of `/telescope-history` and shared navigation to a repeatable baseline that supports keyboard and assistive technologies.

## Tasks
1. Audit semantic heading and landmark structure for the route.
2. Add or correct ARIA labels where needed for nav and section landmarks.
3. Ensure visible focus styles and keyboard traversal work for all navigation links.
4. Validate color contrast for foreground/background combinations used on telescope route.
5. Run accessibility checks and capture findings + fixes.

## Candidate Files To Edit
- teachProject/nextjs_ai_orchestration_spec_sprint_process/components/site/site-header.tsx
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/telescope-history/page.tsx
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/globals.css
- project_management/active/evidence-accessibility-telescope-history.md

## Acceptance Criteria
1. Keyboard-only user can reach main nav, section nav, and telescope cards in a logical order.
2. All interactive controls on route and header have accessible names.
3. Focus-visible states are clearly visible on light and dark route states.
4. Lighthouse accessibility score for `/telescope-history` is >= 90.
5. Next.js build succeeds after changes.

## Verification Steps
1. Build the Next.js project.
2. Manual keyboard walkthrough from top of page through all interactive elements.
3. Run lighthouse (or equivalent) accessibility check and record score.
4. Record findings in accessibility evidence file.

## What Not To Do
- Do not change historical copy for accessibility-only sprint.
- Do not replace primary route architecture or transition behavior.
- Do not scope creep into unrelated pages beyond shared header impacts.
