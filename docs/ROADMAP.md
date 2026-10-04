# Roadmap

Active work only, each item verified as a gap against the code on 2026-09-29. Unordered; the owner sets priority. Older BMAD epics/todos are in [archive/bmad/](archive/bmad/README.md).

## Blocking a credible launch
- **Decide the public URL** (repo path vs root vs custom domain), then set `basePath`, canonical URL, Open Graph metadata, and replace `https://example.com` in `app/sitemap.ts` and `app/robots.ts`. See [ARCHITECTURE.md](ARCHITECTURE.md).
- **Case studies:** no `/work/[slug]` routes exist; work cards have non-navigating CTAs. Needs verified facts, role and disclosure approval for GCash, Xamarin → .NET MAUI, Damstra Learn, Tara Tsek before publishing (V1 acceptance).
- **Verify published claims:** work-card roles ("Lead Mobile Architect", "Principal Migrations Consultant", "Core Library Architect"), the résumé line "Deloitte", and profile name ("June Jovi Granados" in metadata/About vs "JJ Granados" in docs). Confirm with the owner.
- **Contact (FR-10):** no GitHub link and no email link on the site; `/resume` is a text page with no PDF and there is no `public/` directory.

## Quality gaps
- Add skip link; run an accessibility pass (keyboard, contrast, landmarks).
- Fonts: `app/layout.tsx` loads Google Fonts (2 lint warnings, remote request) while the design specs prefer local fonts. Decide and fix.
- Per-route metadata (only root title/description exist); structured data.
- Analytics event spec (case-study opens, résumé, contact clicks), privacy-conscious.
- CI: add lint and `tsc --noEmit`; scope `validate:frontmatter`; update deprecated action versions; drop the no-op `export` step. See [TESTING.md](TESTING.md).
- Content layer for projects/achievements/experience once there is a second real case study; until then inline data in `app/page.tsx` is acceptable.

## Needs owner input
- Exact state of TaxPH 2.0, Pet Records, Politician Records (current vs planned).
- Whether the homepage-refinement spec (`archive/bmad/specs/spec-homepage-project-approach-visual-refinement.md`, status in-progress) is finished; its first task is unchecked though the code appears to match.
