# Project

## Purpose
A fast, credible portfolio for JJ Granados, Senior Software Engineer (Mobile & Cross-Platform). Goal: show difficult engineering problems actually solved (mobile, cross-platform, legacy modernization, migration, maintenance). Primary goal is career growth; secondary is personal brand and future consulting credibility. North star: *"Show, don't claim."*

Positioning line: "Mobile engineer. Software builder. Problem solver." Architecture is presented as an engineering *capability*, never as the owner's job title (see [DECISIONS.md](DECISIONS.md)).

## Target users
1. Recruiters / hiring teams: identify seniority and specialty fast; find résumé and contact.
2. Engineering managers / tech leads: judge technical depth, problem-solving, migration and modernization experience.
3. Potential consulting clients: see evidence of mobile modernization and cross-platform work; easy contact path.

Conversion order: contact/recruiter engagement, then case-study exploration, then résumé. No popups or lead forms in V1.

## Content in scope
Selected professional work (brief): GCash (architecture modernization), Xamarin → .NET MAUI (platform migration), Damstra Learn (legacy modernization), Tara Tsek (reusable library design).
Independent projects: TaxPH, TrainsPH (archived); TaxPH 2.0, Pet Records, Politician Records (current/planned; exact state unverified).

## Requirements (V1)
| ID | Requirement |
| --- | --- |
| FR-01 | Communicate role, positioning and the tagline above |
| FR-02 | Present the four selected work items |
| FR-03 | Case studies: overview, role, technology, problem, context, constraints, approach, technical decisions, implementation, validation, result, lessons |
| FR-04 | Engineering approach section (see [DESIGN.md](DESIGN.md)) |
| FR-05 | Career story from ~2014 Systems Engineer to Senior Software Engineer; no invented years |
| FR-06 | Independent projects, archived and current/planned shown separately |
| FR-07 | Toolbox grouped by category; no proficiency percentages |
| FR-08 | Concise professional experience timeline |
| FR-09 | Practical AI-assisted engineering (review, debugging, tests, docs, research, refactoring, prototyping) |
| FR-10 | Contact: email, LinkedIn, GitHub, résumé |
| FR-11 / FR-12 | Responsive; accessible (WCAG 2.2 AA where practical) |
| FR-13 | SEO: metadata, Open Graph, sitemap, robots, structured data where suitable |
| FR-14 | A new case study is addable without changing application logic |

Non-functional: static-first, minimal runtime dependencies, no unnecessary backend, strong Core Web Vitals (Lighthouse CI thresholds are in [TESTING.md](TESTING.md)), privacy-conscious analytics only.

**V1 acceptance:** homepage and all four case studies are responsive, accessible, SEO-ready and free of fabricated professional claims.

## Current scope (verified against code, 2026-09-29)
Built: homepage (all sections in DESIGN.md), `/about`, `/contact`, `/experience`, `/resume` (redirects to the PDF in `public/`), `sitemap.xml`, `robots.txt`, and GitHub Pages metadata for `https://jugranados.github.io/`.
Not built: case-study pages/routes, content layer, analytics, structured data. See [ROADMAP.md](ROADMAP.md).

## Non-goals (V1)
Database, CMS, authentication, admin dashboard, booking system, custom backend, contact form, heavy animation libraries.
