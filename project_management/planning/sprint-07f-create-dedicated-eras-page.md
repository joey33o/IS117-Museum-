# Sprint: Create Dedicated Eras Page

## Objective
Create a dedicated long-form eras route where Era 1 and Era 2 each provide a full reading experience (approximately 5-10 minutes per era), while keeping narrative continuity and static export compatibility.

## Scope
- Create a dedicated eras route that contains two long-form chapters: Earthbound Observers (Era 1) and Cosmic Instruments (Era 2).
- Structure each era into clear subsection anchors so visitors can deep-link directly to topics.
- Ensure home page cards point to specific section anchors within the eras route for targeted navigation.
- Keep a continuous transition between Era 1 and Era 2 within that route.
- Refactor home page into an overview/entry point with concise previews and deep links.

## Non-Goals
- No deployment workflow changes.
- No new data model schema changes unless required for routing.
- No major redesign of timeline interactions.

## Curatorial Quality Targets
- Each era opens with a concise curatorial thesis (interpretive framing before chronology).
- Each major object/milestone includes "what changed" and "why it matters" context.
- Narrative includes limitations/debates, not only achievements.
- Cross-era thematic threads remain visible (precision, scale, collaboration).
- Main reading remains accessible to general audiences with optional deeper notes.

## Dependencies
- Existing era section content in [website/app/page.tsx](website/app/page.tsx).
- Existing transition logic in [website/components/site/transition-trigger.tsx](website/components/site/transition-trigger.tsx).

## Implementation Tasks
- [ ] Move sprint file to active before execution.
- [ ] Create dedicated eras page route and migrate Era 1 + Era 2 reading sections.
- [ ] Expand each era into long-form narrative sections targeting approximately 5-10 minutes read time each.
- [ ] Add stable subsection anchors for era topics (for example, framing, milestones, people, bridge/future).
- [ ] Update home page cards to deep-link to specific era section anchors on the eras route.
- [ ] Keep transition continuity between eras within the dedicated page.
- [ ] Add lightweight orientation aids (section labels or local table of contents) without heavy UI complexity.
- [ ] Validate static-export-safe routing behavior.
- [ ] Run build from website and verify success.
- [ ] Move sprint file to complete after verification.

## Acceptance Criteria
- [ ] Era 1 and Era 2 exist on a dedicated page separate from home.
- [ ] Era 1 reading length supports approximately 5-10 minutes.
- [ ] Era 2 reading length supports approximately 5-10 minutes.
- [ ] Home page cards deep-link to specific section anchors on the eras route.
- [ ] Era transition remains smooth and readable in dedicated route.
- [ ] Home page no longer carries full era reading load.
- [ ] Curatorial framing and interpretation quality targets are present in both eras.
- [ ] npm run build succeeds from website.

## Verification Steps
1. Confirm dedicated eras route renders both long-form era sections.
2. Confirm each era includes multiple subsection anchors and they are addressable in URL hashes.
3. Confirm home page cards navigate to expected deep-linked era sections.
4. Review content length and estimated read time per era to ensure approximately 5-10 minutes each.
5. Confirm no routing regressions in static build output.
6. Run npm run build in [website](website) and verify success.

## Deliverables
- Dedicated eras page plan with two long-form reading chapters (Era 1 and Era 2).
- Anchor mapping plan from home cards to specific era subsections.
- Curatorial quality checklist embedded in content structure.
- Sprint 07f record in planning folder.

## Sprint Status Board
### Planned
- [ ] Implement and verify dedicated eras page migration

### Active
- [ ] None

### Completed
- [ ] None
