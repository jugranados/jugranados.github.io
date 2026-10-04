---
title: 'Homepage Figma Visual Parity'
type: 'feature'
created: '2026-09-25'
status: 'done'
review_loop_iteration: 0
baseline_commit: '87507d90e037ac980ef1cf6c131e94d0e5bcce26'
context:
  - '/Users/jugranados/Projects/MyPortfolio/docs/DESIGN.md'
  - '/Users/jugranados/Projects/MyPortfolio/docs/EXPERIENCE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The current portfolio homepage has the same content direction as the supplied Figma homepage but does not match its desktop visual composition. It is too spacious and large, uses different hero metadata and CTA content, and presents the process and lower sections with different layouts.

**Approach:** Recompose the existing Next.js homepage and CSS around the Figma `homepage-desktop` frame while preserving semantic content, accessibility, responsive stacking, and supported claims.

## Boundaries & Constraints

**Always:** Keep the change focused on the homepage. Use the existing Next.js/React structure, CSS token approach, and Lucide icons. Match the Figma frame's near-black surfaces, compact technical typography, 120px desktop content gutter, compact hero, four-step process diagram, dense section rhythm, and responsive behavior. Keep keyboard focus, reduced-motion-safe transitions, semantic landmarks, and mobile no-overflow behavior.

**Ask First:** Any new portfolio claim, new external asset, new dependency, or change to routes/content architecture.

**Never:** Do not implement the design as a screenshot or fixed-position canvas. Do not add unsupported experience claims, heavy animation libraries, CMS/backend work, or unrelated refactors. Do not overwrite or revert pre-existing staged changes.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Desktop homepage | 1440px viewport | Homepage aligns with Figma gutters, scale, hero composition, process diagram, and section density | Fix visual mismatch before review |
| Narrow desktop | 1024px viewport | Content remains readable and does not overflow; grids collapse predictably | Adjust breakpoint/layout rules |
| Mobile homepage | 390px viewport | Semantic order is preserved, content stacks, CTAs remain usable, no horizontal scroll | Fix overflow or inaccessible controls |
| Reduced motion | `prefers-reduced-motion: reduce` | No essential content depends on motion | Disable non-essential transitions |

</frozen-after-approval>

## Code Map

- `/Users/jugranados/Projects/MyPortfolio/app/page.tsx` -- Homepage content, hero metadata/CTAs, process steps, and all lower-page section markup.
- `/Users/jugranados/Projects/MyPortfolio/app/globals.css` -- Global palette, typography, layout grid, cards, responsive breakpoints, focus styles, and motion.
- `/Users/jugranados/Projects/MyPortfolio/app/layout.tsx` -- Global document metadata and body shell; change only if parity requires it.
- `/Users/jugranados/Projects/MyPortfolio/docs/DESIGN.md` -- Existing approved visual direction; update only if implementation changes the documented contract.
- `/Users/jugranados/Projects/MyPortfolio/docs/EXPERIENCE.md` -- Existing interaction and responsive contract; update only if behavior changes.

## Tasks & Acceptance

**Execution:**
- [x] `/Users/jugranados/Projects/MyPortfolio/app/globals.css` -- Align tokens, desktop container, typography, surfaces, spacing, cards, hero, process diagram, section grids, and responsive rules to the Figma frame -- establish visual parity without screenshot-like positioning.
- [x] `/Users/jugranados/Projects/MyPortfolio/app/page.tsx` -- Update hero metadata/CTA labels and compose process, project, toolbox, experience, AI, contact, and footer markup to support the target layout -- preserve semantic content and existing links.
- [x] `/Users/jugranados/Projects/MyPortfolio/app/page.tsx` and `/Users/jugranados/Projects/MyPortfolio/app/globals.css` -- Validate desktop and mobile rendering -- prevent overflow and preserve focus/reduced-motion behavior.

**Acceptance Criteria:**
- Given the homepage at 1440px, when it is rendered, then the page uses the Figma visual hierarchy, dark palette, compact type scale, gutter, hero structure, process diagram, and section density.
- Given the hero, when it is rendered, then it shows the target senior-engineer metadata, `Explore My Work`, `View Résumé`, framework panel, and four connected process steps.
- Given a viewport at or below the mobile breakpoint, when the page is rendered, then sections stack without horizontal overflow and all primary links remain keyboard accessible.
- Given the existing content, when the page is updated, then no unsupported claim or unrelated route behavior is introduced.

## Design Notes

The Figma frame is the visual reference, not a literal geometry specification. Prefer CSS grid/flex and responsive constraints over absolute coordinates. Keep the existing content model and derive compact visual groupings from it rather than adding new data.

## Verification

**Commands:**
- `npm run build` -- expected: production export succeeds.
- `npm run lint` -- expected: no lint errors.
- `npm run validate:frontmatter` -- expected: documentation frontmatter remains valid.

**Manual checks:**
- Render the homepage at 1440px, 1024px, and 390px; compare the hero and all major section boundaries against the Figma frame and confirm no horizontal scroll or focus regression.

## Suggested Review Order

**Homepage composition**

- Start with the visual shell and target metadata treatment.
  [`page.tsx:98`](../../app/page.tsx#L98)

- Review the hero hierarchy, CTA labels, and framework panel structure.
  [`page.tsx:107`](../../app/page.tsx#L107)

**Visual system**

- Check the Figma-derived palette, typography, content gutter, and global responsive foundation.
  [`globals.css:1`](../../app/globals.css#L1)

- Review the compact hero, process diagram, and section grid rules.
  [`globals.css:74`](../../app/globals.css#L74)

- Review mobile stacking, overflow prevention, and reduced-motion behavior.
  [`globals.css:509`](../../app/globals.css#L509)

**Verification**

- Confirm the production and responsive checks recorded in the verification section.
  [`package.json:1`](../../package.json#L1)
