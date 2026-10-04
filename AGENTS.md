# AGENTS.md

Canonical instructions for all coding agents (Claude Code, OpenCode, Copilot, others). Tool-specific files must only import or point here.

## Project
Portfolio site for JJ Granados, Senior Software Engineer (Mobile & Cross-Platform). Goal: credible evidence of real engineering work, fast and easy to maintain. Details: [docs/PROJECT.md](docs/PROJECT.md).

## Stack
Next.js 14.2 App Router, React 18, TypeScript (strict), plain CSS, `lucide-react`. Static export (`output: 'export'`, `trailingSlash: true`, unoptimized images) deployed to GitHub Pages from `master`. Node >= 18 (CI uses 18). npm with `package-lock.json`.

## Layout
- `app/` routes: `page.tsx` (homepage, content inline), `about`, `contact`, `experience`, `resume`, `sitemap.ts`, `robots.ts`, `layout.tsx`, `globals.css` (tokens + all styles). There is no `src/`, `public/`, MDX or `/work/[slug]` yet.
- `docs/` deeper docs; `docs/archive/` history only.
- `scripts/validate-frontmatter.js`, `lighthouseci/lhci.yml`, `.github/workflows/` CI.
- Generated, never edit or commit: `out/`, `.next/`, `*.tsbuildinfo`.

## Commands
```bash
npm ci
npm run dev             # dev server
npm run lint            # next lint
npx tsc --noEmit        # typecheck (no script exists)
npm run build           # static export to out/
npm run preview         # serve out/ on :3010 (via npx serve)
```
There are no automated tests. Details and known CI gaps: [docs/TESTING.md](docs/TESTING.md).

## Required verification
Before saying a change is done: run `npm run lint`, `npx tsc --noEmit` and `npm run build`, and report results honestly (say if something was not run or failed). For UI work also check 390px and 1440px widths, keyboard focus and reduced motion. For route/metadata/hosting work inspect `out/` and direct-load a nested URL. Do not declare deployment complete until the live GitHub Pages site is checked.

## Architecture rules
- Static-first: no database, CMS, auth, global state library or custom backend. No server features incompatible with static export.
- Prefer Server Components; `'use client'` only for small interactive boundaries. Semantic HTML and CSS over JS; reuse `:root` tokens in `app/globals.css`.
- Every published dynamic route must be generated at build. `featured` never means `published`.
- Add a dependency only for a concrete need; no heavy animation libraries.
- See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [docs/DECISIONS.md](docs/DECISIONS.md) before proposing changes to any of these. UI rules: [docs/DESIGN.md](docs/DESIGN.md).

## Code conventions
- Strict TypeScript, explicit domain types, no `any`. Match surrounding style, naming and comment density.
- One clear responsibility per component; extract for reuse or complexity, not for every JSX line.
- Keep mobile layout, keyboard use, visible focus and `prefers-reduced-motion` intact. No interactive `<div>`, no hover-only information; meaningful alt text (empty for decorative).
- Keep changes small and focused; no unrelated refactors.

## Content and editorial rules
- Never invent dates, employers, roles, metrics, scale figures, certifications, testimonials, client permission, screenshots or results. Describe personal contribution accurately in team work.
- Separate professional work from independent projects; label archived / in-development / planned / shipped honestly.
- Selected professional work: GCash, Xamarin → .NET MAUI, Damstra Learn, Tara Tsek. Independent: TaxPH, TrainsPH (archived); TaxPH 2.0, Pet Records, Politician Records (current/planned, state unverified).
- No proprietary code, internal screenshots, customer data, private links or confidential details without approval; use public-safe abstractions.
- Missing fact or link: keep the item a draft or write `TODO: verify` in source. Never show TODOs to visitors.
- Where docs and code disagree, trust the code and recent explicit decisions; flag the conflict instead of silently overwriting working code.

## Git and safety
- Do not commit, push, amend or force-push unless asked. Never revert or overwrite uncommitted changes you did not make.
- Do not delete files you have not inspected. Never commit secrets or `.env*`. Do not bypass hooks.
- Default branch `master` deploys to production on push.

## Docs map (load only what you need)
[PROJECT](docs/PROJECT.md) purpose, requirements, scope · [ARCHITECTURE](docs/ARCHITECTURE.md) stack, constraints, hosting, planned content model · [DESIGN](docs/DESIGN.md) visual/UX rules · [DECISIONS](docs/DECISIONS.md) settled choices · [TESTING](docs/TESTING.md) verified commands and gaps · [ROADMAP](docs/ROADMAP.md) active work.

When you change behavior, structure or commands, update the affected doc in the same change. Keep temporary plans and chat notes out of these files.
