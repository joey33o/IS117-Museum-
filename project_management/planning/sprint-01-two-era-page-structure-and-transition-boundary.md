# Sprint 01 - Two-Era Page Structure And Transition Boundary

## Estimate
2-3 hours

## Lifecycle
Move this file to active when implementation starts. Move to complete only after sprint QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-01-two-era-telescope-history.md
- project_management/planning/qa-spec-01-two-era-telescope-history.md
- AGENTS.md

## Goal
Implement the two-era page structure and ensure the single existing transition is anchored exactly at the Era 1 to Era 2 boundary.

## Tasks
1. Update page content structure to render exactly two major eras with clear section headings.
2. Ensure transition trigger is located at the boundary between Era 1 and Era 2.
3. Keep one global transition state toggle only.
4. Ensure CSS variable theming responds correctly across the boundary.
5. Add content placeholders only if sourced text is already available from approved references; otherwise skip placeholder text.

## Files To Edit
- docs/src/pages/index.astro or Next.js equivalent page entry
- docs/src/scripts/TransitionTrigger.js or Next.js equivalent transition module
- docs/src/styles/base.css or Next.js equivalent global style file

## Acceptance Criteria
1. Exactly two eras render with visible headings:
- Era 1: Making of Telescope History
- Era 2: Modern Telescope History
2. A single transition trigger exists at the era boundary only.
3. Scrolling down activates modern theme state at boundary.
4. Scrolling back up restores initial theme state.
5. No second trigger or alternate state mechanism is introduced.

## Verification Steps
1. Run app locally and confirm two sections render in order.
2. Scroll to boundary and confirm theme switch happens once.
3. Scroll back above boundary and confirm theme reverts.
4. Inspect code to verify one trigger and one global state toggle.

## What Not To Do
- Do not add a third era.
- Do not add multiple transition triggers.
- Do not replace CSS-variable theme model with per-component JS state.
- Do not introduce unsourced historical copy.
