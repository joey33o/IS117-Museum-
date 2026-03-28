# Sprint 02 - Era Content Sourcing And Word-Count Compliance

## Estimate
3-4 hours

## Lifecycle
Move this file to active when implementation starts. Move to complete only after sprint QA passes and build succeeds.

## Governing Artifacts
- project_management/planning/spec-01-two-era-telescope-history.md
- project_management/planning/qa-spec-01-two-era-telescope-history.md
- AGENTS.md

## Goal
Populate both eras with source-traceable historical text from approved references and satisfy the 10-minute reading target per era.

## Tasks
1. Draft Era 1 copy from approved early-history sources only.
2. Draft Era 2 copy from approved modern-observatory sources only.
3. Measure rendered word count for each era.
4. Expand or tighten copy to achieve 1,200-1,450 words per era.
5. Build sentence-to-source trace table for all visible historical claims.
6. Remove all placeholder or unsourced text.

## Files To Edit
- Main page content file for era rendering
- Supporting content files/modules used by the page
- New QA artifact for source trace evidence

## Required Evidence Artifact
Create one evidence file during implementation QA:
- project_management/active/evidence-era-source-trace.md

Required table columns:
- rendered sentence or claim
- source file path
- source excerpt

## Acceptance Criteria
1. Era 1 visible text is 1,200-1,450 words.
2. Era 2 visible text is 1,200-1,450 words.
3. Every visible historical sentence maps to one approved reference file.
4. No external-source claims are present.
5. No placeholder text is present.

## Verification Steps
1. Run a word-count check for each era block using rendered text.
2. Cross-check all visible claims with approved references.
3. Confirm evidence table covers all historical paragraphs.
4. Run build and confirm no regressions.

## What Not To Do
- Do not use web search or outside references.
- Do not invent bridge claims that are not source-supported.
- Do not sacrifice source fidelity to hit word-count targets.
