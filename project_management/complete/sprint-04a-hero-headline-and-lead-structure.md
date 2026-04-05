# Sprint: Hero Headline and Lead Structure

## Objective
Implement the homepage hero with a strong editorial headline and supporting lead paragraph that introduces the museum narrative.

## Scope
- Create a dedicated hero component.
- Add display headline, section label, and lead copy.
- Integrate hero component into homepage.

## Non-Goals
- No atmospheric image overlay yet (Sprint 04c).
- No full asymmetry tuning pass (Sprint 04b).
- No deep typography rhythm polish beyond baseline hierarchy (Sprint 04d).

## Dependencies
- Completed navigation shell from [project_management/specs/03-adaptive-navigation-spec.md](project_management/specs/03-adaptive-navigation-spec.md).
- Existing homepage route in [website/app/page.tsx](website/app/page.tsx).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Create hero component for headline and lead structure.
- [x] Integrate hero component into homepage.
- [x] Ensure semantic heading order and readable lead measure.
- [x] Run build from website and verify success.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Hero headline and lead are visible on homepage.
- [x] Headline and lead are semantically structured and readable.
- [x] Integration compiles without regressions.
- [x] npm run build succeeds from website.

## Verification Steps
1. Confirm hero component exists under website/components.
2. Confirm homepage imports and renders hero component.
3. Confirm h1 and lead paragraph are present.
4. Run npm run build in [website](website) and verify success.

## Deliverables
- Hero opening component with headline and lead.
- Homepage integration for opening structure.
- Completed Sprint 04a record in complete folder.

## Sprint Status Board
### Planned
- [x] Build and integrate hero headline/lead module
- [x] Verify build and semantic structure

### Active
- [ ] None

### Completed
- [x] Sprint 04a completed and verified
