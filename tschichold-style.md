# Tschichold Style Site Specification (Next.js Concept Plan)

## Document Purpose
Define the conceptual methods, decisions, and implementation approach for building a Jan Tschichold-inspired website in a Next.js environment.

Assumption:
- Next.js project foundation is already complete.

## Creative Direction
Build a site that reflects modernist editorial principles:
- Asymmetrical composition
- Strong typographic hierarchy
- Minimal color system
- Intentional white space
- Clarity over decoration

The site should feel systematic, not ornamental.

## Core Tschichold Principles to Apply

### 1. Function-Led Typography
- Every type decision should improve information flow.
- Prioritize hierarchy, rhythm, and reading order.
- Avoid decorative type treatments that do not communicate structure.

### 2. Structured Asymmetry
- Use asymmetry intentionally, not randomly.
- Keep visual balance through proportion and alignment.
- Place elements off-center while still respecting a strict grid.

### 3. Economy of Means
- Limit font families and weight variants.
- Use a restrained color palette.
- Reuse repeatable modules rather than introducing one-off layouts.

### 4. Grid Discipline
- Base all layouts on a responsive grid system.
- Keep spacing tied to a fixed scale.
- Align text, media, and UI components to shared column logic.

## Next.js Concept Architecture

### Route Structure (Concept)
- Home page: introductory editorial statement.
- Essay page: long-form typographic narrative.
- Principles page: manifesto sections.
- Archive page: modular content cards.

Use route groups and shared layout where useful, but keep page structures simple and predictable.

### Layout Strategy
- Create a global shell for:
  - Header/navigation
  - Main content region
  - Footer metadata
- Build section wrappers that enforce:
  - Max width
  - Column behavior
  - Vertical rhythm

### Component Strategy
Design with reusable system components:
- Hero block (display headline + lead + label)
- Manifesto list (numbered principles)
- Editorial card module
- Pull quote module
- Section heading module

All components should expose content as props while keeping style rules consistent.

## Typography System Method

### Font Method
- Use one primary sans-serif family suitable for editorial work.
- Optional accent style is allowed only if it reinforces hierarchy.
- Keep weight usage constrained (for example: regular, medium, bold).

### Scale Method
Define a predictable type scale using responsive values:
- Display level for major hero statements
- H1 and H2 levels for structure
- Body text with high readability
- Caption/meta level for labels and supporting notes

### Rhythm Method
- Lock text spacing to a vertical rhythm.
- Standardize line-height by role (display, heading, body, caption).
- Keep paragraph measure controlled for reading comfort.

## Grid and Spacing Method

### Responsive Grid Method
- Mobile: 4-column logic
- Tablet: 6-column logic
- Desktop: 12-column logic

### Spacing Scale Method
- Define spacing tokens at project level.
- Apply spacing only through tokens.
- Keep section spacing and internal module spacing consistent.

### Asymmetry Rules
- Hero headline can occupy wide left span.
- Supporting copy can be offset right.
- Cards and pull quotes may intentionally break symmetry while staying on grid.

## Color System Method
- Primary palette should be neutral and high contrast.
- Use one signal color for emphasis.
- Avoid broad multi-color usage.
- Preserve WCAG AA contrast in all text contexts.

## Motion Method (Minimal)

### Allowed Motion
- Subtle reveal on section entry.
- Small opacity and translate transitions.
- Short stagger for text sequences.

### Motion Constraints
- No decorative continuous motion.
- Keep transition distances small.
- Prioritize readability over visual effect.

### Accessibility Motion Rule
- Respect reduced-motion preference.
- Provide non-animated fallback states.

## Content Method
- Use concise, declarative headings.
- Keep paragraphs tight and purposeful.
- Prefer informational density over marketing tone.
- Use labels, captions, and pull quotes to guide interpretation.

## Accessibility and Quality Method

### Accessibility
- Semantic structure across all pages.
- Keyboard-visible focus states.
- Logical heading order.
- Color contrast compliance.

### Performance
- Optimize font loading strategy.
- Avoid heavy animation libraries when simple CSS/JS is enough.
- Animate only opacity and transform where possible.

### Consistency Checks
Before release, verify:
- Grid alignment is consistent across breakpoints.
- Typographic scale values are systematic.
- Asymmetry appears intentional, not accidental.
- Repeated modules preserve the same structural rules.

## Suggested Execution Phases

### Phase 1: Foundation
- Establish tokens, base layout shell, and responsive grid.

### Phase 2: Typography and Hero
- Implement type hierarchy and signature asymmetrical hero.

### Phase 3: Editorial Modules
- Add manifesto list, card modules, and pull quote treatment.

### Phase 4: Polish and Validation
- Finalize accessibility, spacing precision, and responsive QA.

## Definition of Done
A Tschichold-style Next.js site is complete when:
- The visual language clearly expresses modernist editorial structure.
- Typography, spacing, and grid are systematic and repeatable.
- Asymmetry is intentional and balanced.
- Accessibility and readability standards are satisfied.
- Motion is minimal, meaningful, and optional for reduced-motion users.
