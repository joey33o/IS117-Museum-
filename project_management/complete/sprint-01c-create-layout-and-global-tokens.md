# Sprint: Create Layout and Global Tokens

## Objective
Create a reusable root layout shell and global token set that supports theme switching and future section-level implementation.

## Scope
- Add project-level CSS variables for theme, typography, spacing, and motion.
- Add `.is-space-era` state token overrides in global CSS.
- Create a minimal root app shell structure in layout.tsx.
- Set metadata baseline for project identity.

## Non-Goals
- No feature-section implementation (timeline, hero modules, etc.).
- No advanced animation wiring in this sprint.
- No deployment workflow changes.

## Dependencies
- Completed Sprint 01a in [project_management/complete/sprint-01a-init-nextjs-in-website.md](project_management/complete/sprint-01a-init-nextjs-in-website.md).
- Completed Sprint 01b in [project_management/complete/sprint-01b-configure-tailwind-and-postcss.md](project_management/complete/sprint-01b-configure-tailwind-and-postcss.md).

## Implementation Tasks
- [x] Move sprint file to active before execution.
- [x] Define global CSS tokens in website/app/globals.css.
- [x] Add `.is-space-era` token overrides in website/app/globals.css.
- [x] Update root layout shell in website/app/layout.tsx.
- [x] Run npm run build from website/.
- [x] Move sprint file to complete after verification.

## Acceptance Criteria
- [x] Global tokens exist for color, typography, spacing, and motion.
- [x] `.is-space-era` overrides are defined in global CSS.
- [x] Root layout includes a consistent shell wrapper.
- [x] npm run build succeeds from website/.

## Verification Steps
1. Confirm tokens are defined in [website/app/globals.css](website/app/globals.css).
2. Confirm `.is-space-era` overrides exist in [website/app/globals.css](website/app/globals.css).
3. Confirm shell wrapper is present in [website/app/layout.tsx](website/app/layout.tsx).
4. Run npm run build from website/ and verify success.

## Deliverables
- Tokenized global stylesheet baseline.
- Root layout shell and metadata baseline.
- Completed Sprint 01c record in complete folder.

## Sprint Status Board
### Planned
- [x] Define global tokens and space-era overrides
- [x] Add root shell layout structure
- [x] Verify build after layout/token updates

### Active
- [ ] None

### Completed
- [x] Sprint 01c completed and verified
