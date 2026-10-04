# Decisions

Settled unless the owner says otherwise. Do not re-litigate; if you disagree, raise it in your summary.

| # | Decision | Why |
| --- | --- | --- |
| 1 | Next.js App Router with static export to GitHub Pages | Static/SEO/content fit, React+TS ecosystem, low ops. The existing repo already uses it; no migration. |
| 2 | No database, CMS, auth, admin or custom backend in V1 | Content is static and version-controlled; owner is a developer. Revisit only when content-management pain is real. |
| 3 | Typed records plus MDX narratives for content (planned) | Keeps lists, labels and publish state consistent; adding an entry changes content files, not route components. |
| 4 | `publishStatus` and `featured` are separate | Featured is prominence only; nothing is public without being published. |
| 5 | Architecture is shown as a capability, not the owner's title | Avoids positioning as a consultant/architect. Homepage work cards currently show roles like "Lead Mobile Architect" (user-supplied in a design spec); their accuracy is **unverified**. |
| 6 | No invented facts: dates, metrics, employers, certifications, testimonials, scale (e.g. "100M+ downloads") | The 2026-09-02 PRD/brief variant added such claims and hid archived/planned labels; it was archived and rejected. Only verified, approved facts are published. |
| 7 | Independent projects keep honest lifecycle labels (archived / in-development / planned / shipped) | Credibility over polish. |
| 8 | No skill percentages, logo walls or generic templates | Show evidence, not self-rating. |
| 9 | Prefer local/system fonts, no heavy animation libraries | Performance; stated in the homepage design specs. |
| 10 | Case-study CTAs are non-navigating until real destinations exist | Avoids dead links; from the homepage refinement spec. |
| 11 | Privacy-conscious analytics only, when added | Track case-study opens, résumé and contact clicks; no aggressive tracking. |
| 12 | Where docs and code disagree, code and recent explicit decisions win | Older BMAD docs described a target stack (`src/`, MDX) that was never built. |
