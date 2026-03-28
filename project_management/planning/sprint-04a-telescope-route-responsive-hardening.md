# Sprint 04A - Telescope Route Responsive Hardening

## Estimate
2-4 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-04-nextjs-production-readiness.md
- project_management/planning/qa-spec-04-nextjs-production-readiness.md
- AGENTS.md

## Goal
Harden `/telescope-history` layout behavior so content, navigation, and cards remain readable and non-overlapping across required viewport sizes.

## Tasks
1. Audit current layout behavior for 375px, 768px, 1280px, and 1920px widths.
2. Fix any sticky-header overlap and anchor offset drift for era sections.
3. Ensure telescope cards reflow without clipping, horizontal overflow, or collapsed text.
4. Validate heading scale and paragraph line length for mobile readability.
5. Re-run manual viewport checks and record evidence.

## Candidate Files To Edit
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/globals.css
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/telescope-history/page.tsx
- project_management/active/evidence-responsive-telescope-history.md

## Acceptance Criteria
1. No content overlaps sticky nav at any required viewport width.
2. Era paragraphs remain fully readable with no horizontal scroll at required breakpoints.
3. Telescope cards display image/title/description without clipping at all required breakpoints.
4. In-page anchors land below sticky header consistently.
5. Next.js build succeeds after changes.

## Verification Steps
1. Run build in Next.js project.
2. Manually inspect `/telescope-history` at 375px, 768px, 1280px, 1920px.
3. Navigate via main nav and in-page links to verify anchor offsets.
4. Capture short evidence notes/screenshots references in active evidence file.

## What Not To Do
- Do not change era narrative text for responsive-only fixes.
- Do not introduce a second transition trigger.
- Do not redesign unrelated routes.
