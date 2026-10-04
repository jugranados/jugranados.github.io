# Testing and verification

There is **no unit, component or e2e test framework** in this repo, and no `test` or `typecheck` script. Verification is static checks, a production build, and manual review.

## Commands (run from repo root)
| Command | Purpose | Status (2026-09-29) |
| --- | --- | --- |
| `npm run lint` | `next lint` (`next/core-web-vitals`) | Passes; 2 warnings (`no-page-custom-font`, `app/layout.tsx`) |
| `npx tsc --noEmit` | Typecheck (`strict`, `noEmit` in tsconfig) | Passes |
| `npm run build` | Static export to `out/` (11 pages) | Passes |
| `npm run preview` | Serve `out/` on :3010 via `npx serve` | Not run; `serve` is not a dependency, `npx` downloads it |
| `npm run lhci:autorun` | Lighthouse CI against `out/` (needs a prior build; uses `npx http-server`, not a dependency) | Not run locally; runs in CI |
| `npm run validate:frontmatter` | Frontmatter check | **Currently fails on every doc** (see limitations) |

CI (`.github/workflows/`) runs build, Lighthouse and the frontmatter check; there is no lint or typecheck step in CI.

Lighthouse CI assertions (`lighthouseci/lhci.yml`, home page only, 1 run): performance ≥ 0.9, LCP ≤ 2500 ms, FCP ≤ 1000 ms, CLS ≤ 0.1. Accessibility/SEO scores are goals (95+), not asserted.

## Expectations for changes
- Always: lint, `tsc --noEmit`, build. Report failures verbatim; do not claim a check you did not run.
- UI change: check 1440px and 390px (no horizontal overflow), keyboard-only navigation with visible focus, `prefers-reduced-motion`, heading order/landmarks, contrast, alt text.
- Route, sitemap, metadata or hosting change: inspect `out/` (page HTML, `sitemap.xml`, `robots.txt`, asset paths for the real base path) and load a nested URL directly from a static server.
- Content change: every claim supported and attributed; no draft or confidential material public; links resolve; states (archived/planned/shipped) accurate.
- Claim evidence: a public artifact, a dated measurable metric with method, or an approved named reference. If unverifiable, use conservative wording ("we observed") or remove it. Monetary or revenue claims need scope and source.
- Add tests only for real interactive behavior; avoid text snapshot tests.

## Known limitations
- `scripts/validate-frontmatter.js` requires `title, summary, published, draft, tags` on **all** `.md/.mdx` under the repo root (it scans `''`, so also `AGENTS.md` and `node_modules`) and runs on changed files in PRs. It is meant for MDX case studies, so PRs touching `AGENTS.md` or `docs/*.md` will fail. Fix by scoping the script to content directories; not done here because it is tooling code.
- CI workflows call `npm run export --if-present` (no such script) and use old action versions (`upload-pages-artifact@v1`, `deploy-pages@v1`, `upload-artifact@v3`); not verified whether they still work.
- No automated accessibility or visual regression testing. The archived BMAD epics proposed axe-core in CI (`docs/archive/bmad/epics.md`).
- Lighthouse checks only `/`.
