# Spec 04 - Next.js Production Readiness For Two-Era Telescope Experience

## Status
Draft - Ready for Spec QA

## Source Of Truth
This spec extends:
- AGENTS.md
- project_management/planning/spec-03-nextjs-parity-migration.md
- project_management/planning/qa-sprint-03b-nextjs-content-and-transition-parity.md

## Problem Statement
Parity migration is complete for the two-era telescope route, but production-readiness work is still missing in three high-priority areas called out by AGENTS.md: responsive behavior, accessibility verification, and automated tests. The project needs a controlled hardening phase that preserves narrative constraints while making delivery safer and more maintainable.

## Scope
In scope:
- Responsive layout hardening for mobile-through-desktop on `/telescope-history`
- Accessibility hardening and audit closure for primary navigation and telescope-history route
- Automated testing baseline for critical behavior and constraints

Out of scope:
- New historical content beyond approved references
- Additional eras or transition systems
- Unrelated redesigns of existing non-telescope routes

## Objectives
1. Responsive reliability: ensure usable layout from 375px to 1920px+.
2. Accessibility reliability: meet WCAG-aligned baseline checks for keyboard, semantics, and contrast.
3. Delivery reliability: enforce regression checks through automated tests in CI/local workflows.

## Hard Constraints
1. Preserve exactly two eras and one boundary transition trigger.
2. Preserve reading targets: 1,200-1,450 words per era.
3. Preserve references-only content policy.
4. Keep the single global transition-state class contract (`body.is-space-era`).

## Workstream Plan
1. Sprint 04A - Responsive hardening
2. Sprint 04B - Accessibility hardening
3. Sprint 04C - Automated testing baseline

## Acceptance Criteria
1. `/telescope-history` has no blocking overlap/cutoff at 375px, 768px, 1280px, and 1920px viewport widths.
2. Primary navigation and in-page anchors remain usable via keyboard only.
3. Lighthouse accessibility score for `/telescope-history` is >= 90 in local production build conditions.
4. Automated tests exist for: two-era structure, single trigger presence, and transition class toggle behavior.
5. `npm run build` succeeds and test command(s) pass in the Next.js project.

## Verification Plan
1. Build verification: `npm run build --prefix teachProject/nextjs_ai_orchestration_spec_sprint_process`
2. Responsive verification: manual checks for required breakpoint set.
3. Accessibility verification: keyboard walkthrough + lighthouse/axe checks.
4. Test verification: run unit/integration tests and confirm pass status.

## Risks
- Styling changes may inadvertently regress already-stable narrative spacing.
- Accessibility fixes can conflict with visual polish if not tokenized.
- Test flakiness if transition behavior relies on uncontrolled scroll timing.

## Exit Criteria
Spec QA passes with zero blockers and Sprint 04A/04B/04C docs are approved.
