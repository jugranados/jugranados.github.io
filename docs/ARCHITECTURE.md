# Architecture

Static-first, content-driven site. No database, CMS, auth or backend in V1. Why: see [DECISIONS.md](DECISIONS.md).

## Current state (verified 2026-09-29)
- Next.js 14.2.15 App Router, React 18, TypeScript (`strict`), `lucide-react` for icons. Plain CSS in `app/globals.css` with `:root` design tokens; no CSS framework.
- `next.config.mjs`: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`. Output goes to `out/`.
- Layout at repo root, **no `src/`**: `app/layout.tsx`, `app/page.tsx` (homepage markup), `app/{about,contact,experience,resume}/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`. Path alias `@/*` → repo root.
- **Homepage copy lives in `content/home.json`**, typed by `content/home.ts` (`HomeContent`) and imported by `app/page.tsx`. Icons and diagram visuals stay in code, referenced by key (`icon`, `diagram`). No MDX, no `public/` directory, no `/work/[slug]` routes.
- All pages are Server Components; there is no `'use client'` and no state management.
- External services: Google Fonts (`app/layout.tsx`); LinkedIn link. No analytics, no APIs.
- `sitemap.ts` and `robots.ts` hardcode `https://example.com`. `layout.tsx` metadata has title/description only.

## Boundaries
| Area | Responsibility |
| --- | --- |
| `app/**/page.tsx` | Routes; assemble content and markup |
| `app/globals.css` | Tokens and all styling |
| `out/`, `.next/` | Generated; never edit |
| `scripts/validate-frontmatter.js` | CI-only markdown/MDX frontmatter check (see [TESTING.md](TESTING.md)) |

## Constraints that are not obvious
- GitHub Pages is static hosting: no Server Actions, request-dependent APIs, cookies, ISR, server redirects, or ungenerated dynamic paths; no runtime image optimizer (optimize image files before committing). A contact form would need an external service; V1 uses links.
- Every published dynamic route must be generated at build (`generateStaticParams()` + `dynamicParams = false`); a new case study needs a rebuild.
- `NEXT_PUBLIC_*` env vars are embedded in the client bundle; never put secrets there.
- Prefer Server Components; add `'use client'` only at small interactive boundaries.
- Add dependencies only for a concrete need and check static-export compatibility.

## Deployment
`.github/workflows/`: `production.yml` (push to `master` → `npm ci` → `npm run build` → upload `out/` → GitHub Pages), `preview.yml` (PR build artifact), `lighthouse.yml` (LHCI), `mdx-validate.yml` (frontmatter check on PRs). All use Node 18. There is no `export` npm script; `output: 'export'` makes `next build` emit `out/`.

The public URL is `https://jugranados.github.io/`, using the GitHub user-site repository `jugranados.github.io`. Metadata, sitemap, and robots URLs use that root URL. GitHub Pages must be configured in repository Settings → Pages → Build and deployment → Source: GitHub Actions.

## Planned (not implemented): content layer and case studies
Introduce only when the first case study is written; adapt to the real repo layout (`app/` at root, not `src/`).
- Typed TypeScript records are the single source for listings, routes, status and SEO; MDX only for long narratives. `@next/mdx` does not parse YAML frontmatter, so keep metadata in the typed registry and do not duplicate it in MDX.
- Collections: professional work (`work` registry + `<slug>.mdx`), independent projects, achievements (`attribution: individual | team`, optional public `evidenceUrl`), experience, profile/links.
- Two independent fields per record: `publishStatus: 'draft' | 'published'` (controls routes, cards, sitemap) and `featured` (prominence only). Projects also have lifecycle `status: 'archived' | 'in-development' | 'planned' | 'shipped'`, which never implies publication. A planned item is shown as a labeled plan, not a shipped product.
- Work item fields: slug, title, category, role, summary, technologies[], seoDescription, publishStatus, featured, image?. Project: slug, title, summary, status, publishStatus, featured, technologies[], repositoryUrl?, liveUrl?, image?.
- Build-time validation: unique slugs/IDs, required fields, valid URLs/assets, an MDX file for every published case study. Hide a whole section if it has no published records. Unpublished records generate no page and no sitemap entry.
- Adding a case study: verify facts, role and disclosure permission; add as `draft`; write MDX using the section order in [DESIGN.md](DESIGN.md); publish only after review and approval.
