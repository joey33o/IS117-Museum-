# Spec 03 - Next.js Parity Migration For Two-Era Telescope Site

## Status
Draft - Ready for Spec QA

## Source Of Truth
This spec extends:
- AGENTS.md (Next.js direction and strict workflow)
- spec-01-two-era-telescope-history.md
- Implemented behavior in ReferenceProject1/docs

## Problem Statement
The current working telescope site implementation is in Astro, while AGENTS.md now declares Next.js as the framework direction. The project needs a controlled migration to Next.js without regressing narrative structure, transition behavior, source-traceability, or reading-time targets.

## Scope
In scope:
- Recreate the current two-era single-page experience in Next.js
- Preserve boundary-trigger transition behavior (single trigger, single global state)
- Preserve era copy and content constraints
- Preserve references-only source policy
- Preserve acceptance/QA evidence standards

Out of scope:
- New features unrelated to parity migration
- Visual redesign beyond required framework adaptation
- Additional eras, additional transitions, or new data sources

## Migration Objectives
1. Framework alignment: move runtime implementation to Next.js.
2. Functional parity: two-era rendering and boundary transition must match current behavior.
3. Content parity: keep all sourced narrative constraints and word-count targets.
4. QA parity: preserve measurable ACs and evidence artifacts.

## Hard Constraints
1. Exactly two eras with headings:
- Era 1: Making of Telescope History
- Era 2: Modern Telescope History

2. Reading-time constraint preserved:
- Era 1: 1,200-1,450 words
- Era 2: 1,200-1,450 words

3. Source constraint preserved:
- Only approved files under ReferenceProject1/references
- No invented or placeholder claims

4. Transition constraint preserved:
- Single boundary trigger between era sections
- Single global class/state toggle
- Down-scroll enter and up-scroll leave-back behavior

## Target Architecture (Next.js)
- App router entry: app/page.tsx
- Shared layout: app/layout.tsx
- Presentational sections/components under components/
- Global styling and CSS variables in app/globals.css
- Client-side transition logic isolated in one client component/script

## Acceptance Criteria
1. Next.js page renders exactly two eras with required headings.
2. A single transition trigger exists at the era boundary.
3. Theme state toggles on enter/leave-back exactly once per crossing.
4. Era 1 and Era 2 remain within 1,200-1,450 words each.
5. All visible historical claims remain traceable to approved references.
6. Next.js build succeeds with zero blocking errors.

## Verification Plan
1. Build verification: npm run build in the Next.js project.
2. Structural verification: inspect rendered DOM for exactly two era sections and one trigger.
3. Behavioral verification: manual scroll down/up transition check.
4. Content verification: re-run word count and source-trace evidence table.

## Risks
- Transition behavior drift when porting from Astro script lifecycle to Next.js client lifecycle.
- Unintentional copy drift during content transfer.
- Styling drift due to framework-level CSS differences.

## Exit Criteria
Spec QA passes with no blocking issues and migration sprint docs are approved.
