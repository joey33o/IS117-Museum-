# Spec 01 - Two-Era Telescope History Experience

## Status
Draft - Ready for Spec QA

## Source Of Truth
This spec is derived from AGENTS.md in the repository root.

## Problem Statement
The site needs a clear, teachable historical narrative that is easy to follow while preserving factual integrity. The current direction requires exactly two long-form eras and one visual transition between them.

## Scope
In scope:
- Single-page two-era narrative experience
- Era 1: Making of Telescope History
- Era 2: Modern Telescope History
- One transition trigger at the era boundary
- Next.js implementation direction
- Reference-only historical content from approved files

Out of scope:
- Additional eras beyond two
- External web research and uncited claims
- Placeholder content
- Multi-trigger or multi-theme transition logic

## Design Goals
1. Make chronology intuitive with a strict two-era structure.
2. Keep the existing transition behavior but align it with the era boundary.
3. Ensure every visible sentence is source-traceable.
4. Keep each era long-form and balanced in reading time.

## Hard Constraints
### Reading-Time Requirement
- Target reading pace: 130 words per minute
- Target per era: 1,200-1,450 words (about 10 minutes each)
- Combined total target: 2,400-2,900 words

### Approved Content Sources Only
All visible text must come from these files only:
- ReferenceProject1/references/2Historyoftelescope.txt
- ReferenceProject1/references/telescopeHisotry.txt
- ReferenceProject1/references/telescopeHisotry copy.txt
- ReferenceProject1/references/hubbleTele.txt
- ReferenceProject1/references/JamesWebbTele.txt
- ReferenceProject1/references/CLandraTele.txt
- ReferenceProject1/references/MoreClandra.txt
- ReferenceProject1/references/EventHorizontelescope.txt

No external websites, no invented facts, no placeholder text.

## Narrative Architecture
### Era 1 - Making of Telescope History
Required flow:
1. Why telescopes changed human knowledge
2. 1608 invention context and early optics
3. Early improvements and observing breakthroughs
4. Bridge from early limits to modern observatories

Primary source emphasis:
- 2Historyoftelescope.txt
- telescopeHisotry.txt
- telescopeHisotry copy.txt

### Era 2 - Modern Telescope History
Required flow:
1. Transition framing into modern observatories
2. Hubble impact
3. Chandra and high-energy astronomy
4. James Webb and current frontier
5. Event Horizon Telescope as synthesis point

Primary source emphasis:
- hubbleTele.txt
- CLandraTele.txt
- MoreClandra.txt
- JamesWebbTele.txt
- EventHorizontelescope.txt

## Technical Architecture
- Framework: Next.js
- Transition trigger: one boundary trigger between Era 1 and Era 2
- State model: one global class/state toggle
- Visual system: CSS variables drive background, typography, nav, image treatment

## Acceptance Criteria
1. Exactly two eras are rendered with clear headings.
2. Era 1 word count is 1,200-1,450.
3. Era 2 word count is 1,200-1,450.
4. One transition switch occurs at the era boundary.
5. Transition works both directions (down and back up).
6. Every visible sentence is traceable to approved reference files.
7. No placeholder text remains anywhere in rendered content.

## Verification Plan
1. Word-count check per era block.
2. Manual source-trace pass with rendered page and source files side by side.
3. Scroll verification in browser for enter and leave-back behavior.
4. Spot-check visual token swaps (theme variables) at boundary.

## Risks
- Under/over target word counts per era.
- Accidental unsourced connective text.
- Transition trigger placed too early/late relative to narrative boundary.

## Dependencies
- Existing transition logic in the application
- Existing styling token system (CSS variables)
- Reference files listed above

## Exit Criteria
Spec QA passes with no unresolved high-severity issues.
