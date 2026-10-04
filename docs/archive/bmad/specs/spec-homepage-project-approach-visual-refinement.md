---
title: 'Homepage Project and Approach Visual Refinement'
type: 'feature'
created: '2026-09-26'
status: 'in-progress'
review_loop_iteration: 0
baseline_commit: 'd04d23c730f47137ca69b5213a1495fdfb202241'
context:
  - '/Users/jugranados/Projects/MyPortfolio/docs/DESIGN.md'
  - '/Users/jugranados/Projects/MyPortfolio/docs/EXPERIENCE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The homepage's core-stack pills and primary CTA do not match the requested treatment, the headings need a stronger display face, and Selected Engineering Work and How I Work differ from the two supplied visual references in content and layout.

**Approach:** Refine the current Next.js homepage and global styles in place: use the body surface for stack pills, white text on the primary CTA, a locally available system sans stack with stronger heading weights, the supplied case-study copy and blue/gray palette, and a six-step approach row with the supplied descriptions and connector rules.

## Boundaries & Constraints

**Always:** Preserve current routes, semantics, existing unrelated changes, responsive layout, keyboard focus, reduced-motion support, and snap scrolling. Use only the user-provided text and visual references for these sections. Keep case-study CTAs non-navigating until real case-study destinations exist. Prefer local/system fonts; do not add a dependency or remote font request.

**Ask First:** Any change to the supplied wording, added case-study route/link, external font asset, or additional dependency.

**Never:** Edit the attached reference images, invent project claims or metrics, replace the page with a screenshot, add fixed-position desktop-only layout, or overwrite existing worktree edits.

</frozen-after-approval>

## Code Map

- `app/page.tsx` -- `workItems` data and the `#work` card loop supply project titles, roles, descriptions, diagrams, and case-study affordance. The current `approachStages` array and `#approach` markup provide only stage names; replace with six objects containing the screenshot's numbered titles and descriptions.
- `app/globals.css` -- `--bg`, `--surface`, `--accent`, `.hero-copy h1`, section headings, `.button.primary`, `.pill`, `.work-grid`, `.work-card`, `.card-visual`, `.diagram-bar`, `.card-copy`, `.stage-grid`, `.stage-card`, and responsive breakpoints control the relevant visual treatments. Retain existing scroll snap and reduced-motion rules.
- `docs/DESIGN.md` -- Existing approved visual direction; update only if the chosen local display-font stack materially changes that documented contract.

## Tasks & Acceptance

**Execution:**
- [ ] `app/page.tsx` -- Replace the four selected-work entries with screenshot text, add per-project visual-diagram variants and a styled non-link “Read case study →” affordance, and define the six numbered approach stages and descriptions -- match the supplied examples without fabricating destinations.
- [x] `app/globals.css` -- Apply body-colored technology pills, white primary CTA text, a local system sans display stack with a stronger heading weight, screenshot-matched work card/grid/diagram styling, and a six-column numbered approach layout with thin blue-accent-compatible connector rules -- preserve responsive usability.
- [x] `app/page.tsx` and `app/globals.css` -- Verify desktop and mobile rendering, keyboard affordances, and existing snap/reduced-motion behavior -- prevent layout regressions.

**Acceptance Criteria:**
- Given the hero and framework panel, when rendered, then the stack labels use the body background and “Explore My Work” uses white text.
- Given a display heading, when rendered, then it uses a locally available sans-serif display stack at a visibly stronger weight than the previous regular fallback without a remote font dependency.
- Given Selected Engineering Work, when rendered at desktop width, then it shows the four supplied titles, roles, descriptions, blue role/link accents, gray body copy, dark cards, and corresponding diagrams in a two-by-two layout; at mobile widths, cards stack without horizontal overflow.
- Given How I Work, when rendered at desktop width, then it shows “APPROACH // 03”, “How I Work”, all six supplied numbered stages and descriptions, and connecting rules aligned with the indices; at narrow widths, stages remain legible and connectors do not collide.
- Given existing links and motion preferences, when this change is applied, then real destinations remain unchanged and reduced-motion, focus, and scroll-snap behavior remain intact.

## Design Notes

Use the first attached image as the exact text/color/card reference for the four work examples and the second for the six-step approach. GCash: “Lead Mobile Architect”; Xamarin: “Principal Migrations Consultant”; Damstra: “Senior Mobile Engineer”; Tara Tsek: “Core Library Architect”. Approach stages: Problem, Investigation, Decision, Implementation, Validation, Result. Use the supplied descriptions verbatim. Render the case-study label as a non-interactive span because no destination is provided.

## Verification

**Commands:**
- `npm run build` -- expected: production export succeeds.
- `npm run lint` -- expected: no lint errors.

**Manual checks:**
- At 1440px, compare work cards and approach row against the supplied images; at 390px confirm no horizontal overflow, readable project text, and clean stage stacking.
- Confirm stack pill and primary CTA computed colors, stronger heading weight, keyboard focus visibility, scroll snap, and reduced-motion opt-out.
