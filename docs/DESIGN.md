# Design and UX

Source of truth for tokens and styles is `app/globals.css` (`:root` variables). This file records intent and rules, not values.

## Direction
"Premium technical + technical workspace": editorial typography with restrained engineering-system details. Near-black background, slightly lighter surfaces, off-white text, muted gray secondary text, one electric-blue accent, thin borders, subtle technical grid, generous whitespace. Sans-serif for body/headings, monospace for technical labels, metadata and numbers.

Avoid: neon/cyberpunk, heavy gradients, stock photos, generic developer illustrations, skill percentages, logo walls, fake terminal decoration, hover-only essential content, unsupported expertise claims, constant decorative motion, blocking load animations.

Fonts: prefer locally available/system fonts (design spec for the homepage refinement: no new remote font request). Note the current code does load Google Fonts; see [ROADMAP.md](ROADMAP.md).

## Information architecture
Nav: Work / Experience / About / Contact / Résumé. Routes: `/`, `/experience`, `/about`, `/contact`, `/resume` exist; `/work/[slug]` is planned.

Homepage section order (matches `app/page.tsx`): Hero → engineering-approach overview (four-step flow: Problem → Investigate → Solution → Result) → Selected Engineering Work (`#work`) → How I Work (`#approach`) → Career ("The Path So Far") → Things I've Built → Engineering Toolbox → Experience (`#experience`) → Engineering With AI (`#ai`) → Contact (`#contact`).

Hero copy: "SENIOR SOFTWARE ENGINEER" / "Mobile & Cross-Platform"; CTAs "Explore My Work" and "View Résumé".

## Section rules
- **Work cards:** number, category, project, short problem/result, technologies, case-study CTA. Desktop 2×2 (may alternate direction); mobile stacks. Case-study CTAs are non-navigating spans until real destinations exist.
- **Approach:** six stages Problem, Investigation, Decision, Implementation, Validation, Result (current homepage). Older docs listed Understand → Investigate → Plan → Build → Validate → Improve; the code is authoritative. Connected row on desktop, vertical on mobile.
- **Career story:** approx. 2014 Systems Engineer → Android → native mobile → cross-platform → migration/modernization → Senior Software Engineer / AI-assisted development. Do not invent exact years.
- **Independent projects:** show Archived, In Development and Planned states separately and label them.
- **Toolbox:** groups Mobile, Languages, Frontend, Backend/Data, Engineering, AI, Exploring. Display items as wrapped chips in an auto-fitting card grid. No proficiency percentages.
- **Engineering with AI:** section heading above a two-column layout, with workflow context beside a vertical stack of capability cards; stack the columns on mobile.
- **Contact and footer:** full-width centered contact panel with email, LinkedIn, and résumé links, followed by a full-width footer with identity and GitHub/LinkedIn/email links. Stack footer content on narrow screens.
- **Case study page (planned):** top summary (Project / Role / Technology / Category / Result), then Overview → Problem → Context → Constraints → Investigation → Approach → Technical Decisions → Implementation → Validation → Result → Lessons Learned. Prefer before/after and architecture diagrams, migration flows, mobile screenshots, useful code fragments. If a metric is unknown, use bounded qualitative language.

## Motion, responsive, accessibility
- Subtle section reveals and interaction states only; honor `prefers-reduced-motion` (`app/globals.css` has a reduce block; keep it working).
- Mobile is first-class: stack, keep hierarchy, simplify diagrams, no horizontal overflow (check 390px and 1440px).
- Semantic headings/landmarks, skip link (required by design, not yet implemented), visible focus, keyboard reachability, contrast, meaningful alt text (empty alt for decorative images), no interactive `<div>`s.
