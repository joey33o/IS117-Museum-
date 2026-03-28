# Sprint 03B - Next.js Content And Transition Parity

## Estimate
3-5 hours

## Lifecycle
Move to active when implementation starts. Move to complete only after implementation QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-03-nextjs-parity-migration.md
- project_management/planning/qa-spec-03-nextjs-parity-migration.md
- project_management/active/evidence-era-source-trace.md
- AGENTS.md

## Goal
Port the implemented two-era narrative and boundary transition behavior from the current Astro app into the Next.js target without changing factual scope or constraints.

## Tasks
1. Port Era 1 and Era 2 narrative blocks into Next.js page/component structure.
2. Preserve the single boundary trigger location between era sections.
3. Implement one client-side transition controller for enter/leave-back state toggle.
4. Preserve telescope entry rendering for modern section (if part of parity target).
5. Re-run per-era word counts and adjust text only within approved source constraints.
6. Recreate source-trace evidence for Next.js rendered text.

## Candidate Files To Edit
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/page.tsx (or feature page)
- teachProject/nextjs_ai_orchestration_spec_sprint_process/components/**
- teachProject/nextjs_ai_orchestration_spec_sprint_process/app/globals.css
- project_management/active/evidence-era-source-trace-nextjs.md

## Acceptance Criteria
1. Exactly two eras render with required headings and long-form text blocks.
2. Era 1 and Era 2 each remain within 1,200-1,450 words.
3. A single boundary transition trigger controls theme state.
4. Scroll down/up behavior matches parity expectations.
5. All visible historical claims map to approved references.
6. `npm run build` succeeds in Next.js project.

## Verification Steps
1. Build verification: `npm run build` in Next.js project.
2. Runtime check: open local page and verify section order + headings.
3. Behavior check: manually test enter and leave-back transition.
4. Word-count check: measure both eras from rendered text blocks.
5. Evidence check: update source trace artifact with paragraph mapping and excerpts.

## What Not To Do
- Do not introduce additional eras or transition triggers.
- Do not add unsourced claims or placeholder copy.
- Do not change reading-time constraints.
- Do not refactor unrelated pages in teachProject.
