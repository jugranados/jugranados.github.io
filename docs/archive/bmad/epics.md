---
stepsCompleted: ['step-01','step-02','step-03','step-04','step-05','step-06']
inputDocuments:
  - docs/prd.md
  - docs/architecture.md
  - docs/DESIGN.md
  - docs/EXPERIENCE.md
---

# MyPortfolio - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for MyPortfolio, decomposing the requirements from the PRD, UX Design, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Communicate Senior Software Engineer, Mobile & Cross-Platform, and the statement "Mobile engineer. Software builder. Problem solver." 

FR2: Present selected work items (GCash, Xamarin to .NET MAUI, Damstra Learn, Tara Tsek, etc.)

FR3: Each case study contains overview, role, technology, problem, context, constraints, approach, technical decisions, implementation, validation, result and lessons learned.

FR4: Show the engineering approach stages: Understand, Investigate, Plan, Build, Validate, Improve.

FR5: Show a career story demonstrating progression from systems engineer to senior engineering roles.

FR6: Present independent projects separately (archived vs current/planned).

FR7: Present a Toolbox grouping technologies by category; do not use proficiency percentages.

FR8: Provide a concise professional timeline in Experience.

FR9: Show practical AI-assisted engineering use cases (code review, debugging, tests, documentation, research, refactoring, prototyping).

FR10: Provide contact information: Email, LinkedIn, GitHub and Résumé.

FR11: Support desktop, tablet and mobile responsive layouts.

FR12: Accessibility: semantic HTML, keyboard navigation, focus states, contrast, reduced motion and accessible controls.

FR13: SEO: metadata, Open Graph, sitemap, robots, and structured data where appropriate.

FR14: Content extensibility: new case studies should be addable without changing application logic.

### NonFunctional Requirements

NFR1: Static-first performance (static generation preferred)

NFR2: High maintainability and minimal runtime dependencies

NFR3: No unnecessary backend for V1 (avoid databases and CMS unless required)

NFR4: WCAG 2.2 AA practices where practical

NFR5: Strong Core Web Vitals targets (see performance budgets to define exact thresholds)

NFR6: Privacy-conscious analytics and minimal tracking

NFR7: Image optimization and responsive assets

NFR8: CI/CD for preview builds and production deployments

### Additional Requirements (from Architecture)

- Use Next.js with static generation as the primary framework.
- Provide a starter template (Next.js + MDX) for Epic 1 Story 1.
- MDX frontmatter schema and build-time validation required.
- No database or CMS for V1; content version-controlled in repo.
- Deployment via GitHub Actions to GitHub Pages (CI/CD); preview builds on PRs.
- Privacy-focused analytics: track minimal events (case-study opens, contact clicks).
- Image optimization pipeline and fallback handling.
- Performance monitoring and Lighthouse checks in CI.

### UX Design Requirements

UX-DR1: Implement visual language tokens: color palette (deep charcoal background, off-white primary text, electric-blue accent), spacing and typography tokens.

UX-DR2: Hero component with prominent role/title, CTA buttons (Explore My Work / View Résumé), and technology labels.

UX-DR3: Case Study visuals: support before/after diagrams, architecture diagrams, migration flows, technical metadata, mobile screenshots, and code fragments.

UX-DR4: Responsive design: mobile-first layouts, stacking on small screens, desktop alternating layouts where appropriate.

UX-DR5: Components: reusable components for BeforeAfter, TechnicalDiagram, CaseStudyHeader, WorkCard, Navigation, Footer, ContactForm (progressive enhancement), Image component with srcset and lazy-loading.

UX-DR6: Accessibility requirements: semantic hierarchy, visible focus, keyboard navigation, sufficient contrast, prefers-reduced-motion respected, meaningful alt text.

UX-DR7: Interaction patterns: subtle section reveals, diagram transitions (respect reduced motion), loading and error states.

### Requirements Coverage Map

### FR Coverage Map

FR1: Epic 3 - Communicate professional positioning and tagline on homepage and header
FR2: Epic 4 & 5 - Case Study System + Content Population (selected work entries)
FR3: Epic 4 - Case Study System enforces required case-study structure and templates
FR4: Epic 3 - Homepage & Core Pages presents the engineering approach stages
FR5: Epic 3 - Homepage & Core Pages contains the Career Story section
FR6: Epic 5 - Content Population separates archived vs current/planned projects
FR7: Epic 2 & 3 - Global UI (Toolbox component) and Homepage
FR8: Epic 3 - Homepage & Core Pages (Experience timeline)
FR9: Epic 5 - Content Population (surface AI-assisted engineering examples in case studies)
FR10: Epic 2 & 7 - Global UI (contact flow) and Production/Launch (contact availability and domain)
FR11: Epic 2 - Global UI & Navigation (responsive layout primitives)
FR12: Epic 6 - Quality, Accessibility & Performance (WCAG checklist + tests)
FR13: Epic 6 - Quality, Accessibility & Performance (SEO, metadata, sitemap)
FR14: Epic 1 & 4 - Foundation (MDX frontmatter + starter template) and Case Study System (extensibility)

## Epic List

### Epic 1: Foundation & Developer Infrastructure
Provide a robust starter template and CI-driven content pipeline so the team can author and preview content safely.
**FRs covered:** FR14
**Implementation Notes:** Next.js + MDX starter, GitHub Actions for preview and production deployment to GitHub Pages, MDX frontmatter schema validation, starter template in repo, image optimization pipeline, CI Lighthouse checks

### Epic 2: Global UI & Navigation
Create the shared layout, header, navigation, footer, and responsive primitives that every page uses.
**FRs covered:** FR7, FR10, FR11
**Implementation Notes:** Header, navigation, footer, buttons, typography, responsive container, accessibility primitives (skip link, landmarks)

### Epic 3: Homepage & Core Pages
Ship the homepage, engineering approach, career story, toolbox, and experience pages that communicate professional positioning and core narratives.
**FRs covered:** FR1, FR4, FR5, FR8, FR7
**Implementation Notes:** Hero with tagline and CTAs, sections for selected work previews, engineering approach, career story and timeline; ensure SEO metadata and structured data for key pages

### Epic 4: Case Study System
Implement the MDX case-study system, frontmatter schema, rendering components, and the before/after components that make case studies consistent and extensible.
**FRs covered:** FR2, FR3, FR14
**Implementation Notes:** MDX pipeline, frontmatter validation, CaseStudyHeader, BeforeAfter, TechnicalDiagram, content model, preview rendering

### Epic 5: Content Population & Case Content
Populate the site with authored content: selected work items, independent projects, and AI-assisted engineering examples.
**FRs covered:** FR2, FR6, FR9
**Implementation Notes:** Use the case-study template, ensure images and assets are optimized, verify all claims per CLAIM_VERIFICATION.md

### Epic 6: Quality, Accessibility & Performance
Establish automated checks and manual review steps to meet accessibility, performance, and SEO targets.
**FRs covered:** FR12, FR13
**Implementation Notes:** WCAG 2.2 AA checklist, performance budgets (Core Web Vitals), Lighthouse checks in CI, accessibility manual QA, image optimization, reduced-motion handling

### Epic 7: Production, Analytics & Launch
Configure production deployment, domain, privacy-conscious analytics, and launch checklist for production readiness.
**FRs covered:** FR10, NFR6
**Implementation Notes:** GitHub Pages production deployment via GitHub Actions, domain setup, analytics event spec (minimal tracking), privacy & contact fallbacks



## Epic 1: Foundation & Developer Infrastructure
Provide a robust starter template and CI-driven content pipeline so the team can author and preview content safely.
**FRs covered:** FR14
**Implementation Notes:** Next.js + MDX starter, GitHub Actions for preview and production deployment to GitHub Pages, MDX frontmatter schema validation, starter template in repo, image optimization pipeline, CI Lighthouse checks

### Story 1.1: Initialize Starter Template
As a developer,
I want a repository scaffolded with Next.js + TypeScript + MDX starter (folder layout, page routing, content folder, example case-study),
So that the team can start implementing pages and authoring MDX content immediately.

**Acceptance Criteria:**

**Given** a freshly cloned repo,
**When** I run the dev script,
**Then** the app serves a basic homepage and a sample case-study at /work/example.
**And** the repo contains src/app/, content/case-studies/, a sample MDX case-study using the frontmatter schema, and README instructions.

### Story 1.2: Configure Linting, Formatting, and Design Tokens
As a developer,
I want ESLint, Prettier, and a small design-tokens structure configured,
So that code style and shared design tokens are enforced and available for components.

**Acceptance Criteria:**

**Given** project files,
**When** CI runs lint & format scripts,
**Then** lint step passes and formatting is consistent.
**And** a design tokens file (e.g., styles/tokens.css or tokens.ts) exists and is imported by example components.

### Story 1.3: Add MDX Frontmatter Validation
As a content maintainer,
I want a lightweight frontmatter schema validator (Node script) and a CI job that runs it on changed MDX files,
So that missing or malformed frontmatter is caught before merge.

**Acceptance Criteria:**

**Given** an MDX with missing required fields,
**When** the validator runs locally or in CI,
**Then** it fails with a clear error listing missing fields.
**Given** a valid MDX, the validator exits with success.
**And** a GitHub Actions job runs the validator on PRs and fails the job on invalid frontmatter.

### Story 1.4: Configure Preview Builds with GitHub Actions
As a reviewer,
I want preview (deploy-to-preview) builds to run on PRs via GitHub Actions,
So that reviewers can view the rendered site and check content/visuals before merge.

**Acceptance Criteria:**

**Given** a PR,
**When** GitHub Actions runs,
**Then** a preview build is produced and a preview URL is posted in the PR checks or comments.
**And** the preview includes the sample content and reflects the PR branch changes.

### Story 1.5: Configure Production Deployment to GitHub Pages
As a site owner,
I want production builds automatically deployed to GitHub Pages via GitHub Actions,
So that merges to main publish the site without manual steps.

**Acceptance Criteria:**

**Given** a merge to main,
**When** the GitHub Actions workflow completes,
**Then** the site is published to the configured GitHub Pages domain.
**And** a post-deploy check verifies the homepage responds and the sitemap is present.

### Story 1.6: Add CI Lighthouse and Image Optimization Pipeline
As a product owner,
I want CI to run Lighthouse checks and an image optimization step so that performance budgets and optimized assets are enforced.

**Acceptance Criteria:**

**Given** changes that alter assets,
**When** CI runs,
**Then** Lighthouse checks are executed and the job reports the metrics.
**Given** large images, an image optimization step creates optimized variants and fails or warns if images exceed configured budgets.



## Epic 2: Global UI & Navigation
Create the shared layout, header, navigation, footer, and responsive primitives that every page uses.
**FRs covered:** FR7, FR10, FR11
**Implementation Notes:** Header, navigation, footer, buttons, typography, responsive container, accessibility primitives (skip link, landmarks)

### Story 2.1: Implement Global Layout and Responsive Container
As a developer,
I want a global layout component and a responsive container with specified min/max widths,
So that pages share consistent spacing and read well across viewport sizes.

**Acceptance Criteria:**

**Given** the project scaffold,
**When** I use the global layout component,
**Then** pages render with consistent header, main, and footer regions and content is constrained by a responsive container.
**And** the container uses CSS clamp() with sensible values (example: max-width: clamp(320px, 60ch, 1200px)).

### Story 2.2: Header with Navigation and CTAs
As a user,
I want a clear header with site title, navigation links and primary CTAs,
So that I can navigate the site and access important actions quickly.

**Acceptance Criteria:**

**Given** the header is present,
**When** I view it on desktop,
**Then** navigation links and primary CTA (Explore My Work / View Résumé) are visible and keyboard-focusable.
**And** on narrow viewports a mobile menu control is present and operable by keyboard.

### Story 2.3: Footer with Contact Links and Sitemap
As a user,
I want a footer with contact links (email, LinkedIn, GitHub) and a sitemap link,
So that I can find contact information and navigate to important pages from the bottom of the site.

**Acceptance Criteria:**

**Given** the footer is rendered,
**When** I inspect links,
**Then** contact links include mailto:, LinkedIn, GitHub, and a link to sitemap.xml and are keyboard-accessible.

### Story 2.4: Button Component and Typography Token Integration
As a developer,
I want a reusable Button component and typography tokens connected to design tokens,
So that UI uses consistent spacing, font sizes, and accessible button styles.

**Acceptance Criteria:**

**Given** the Button component is used,
**When** it is rendered in primary and secondary variants,
**Then** it matches token-defined spacing, color, and accessible focus styles.
**And** typography tokens are available and used throughout example pages.

### Story 2.5: Accessibility Primitives (Skip Link, Landmarks, Focus Styles)
As an accessibility tester,
I want skip links, semantic landmarks, and visible focus styles implemented,
So that keyboard and screen-reader users can navigate primary flows.

**Acceptance Criteria:**

**Given** any page,
**When** using keyboard navigation,
**Then** a skip-to-content link is available, landmarks (header, main, footer) are present, and interactive elements show a visible focus style.

### Story 2.6: Mobile Navigation Behavior and Accessible Menu
As a mobile user,
I want the navigation to collapse into an accessible menu with focus management,
So that I can navigate the site on small screens and the menu does not trap or lose focus.

**Acceptance Criteria:**

**Given** the mobile menu is opened,
**When** I press Escape or the close control,
**Then** the menu closes and focus returns to the menu toggle.
**And** menu controls have proper aria attributes (aria-expanded, aria-controls) and are keyboard operable.




## Epic 3: Homepage & Core Pages
Ship the homepage, engineering approach, career story, toolbox, and experience pages that communicate professional positioning and core narratives.
**FRs covered:** FR1, FR4, FR5, FR8, FR7
**Implementation Notes:** Hero with tagline and CTAs, sections for selected work previews, engineering approach, career story and timeline; ensure SEO metadata and structured data for key pages

### Story 3.1: Hero Section and Tagline
As a visitor,
I want to see a clear hero with the professional positioning and primary CTAs,
So that I immediately understand the owner's role and can navigate to key actions.

**Acceptance Criteria:**

**Given** the homepage is loaded,
**When** I view the hero on desktop and mobile,
**Then** the hero displays the tagline ("Mobile engineer. Software builder. Problem solver."), primary CTAs (Explore My Work / View Résumé), and technology labels.
**And** CTAs are keyboard-accessible and have descriptive aria-labels.

### Story 3.2: Selected Work Preview Grid
As a visitor,
I want a selected work grid showcasing case-study previews with image, title, and short summary,
So that I can discover featured projects and navigate to full case studies.

**Acceptance Criteria:**

**Given** the homepage renders,
**When** I view the Selected Work section,
**Then** each featured item displays image (with alt), title, and summary, and links to the case-study page.
**And** images use srcset and lazy-loading and previews are accessible.

### Story 3.3: Engineering Approach Section
As a visitor,
I want the engineering approach stages (Understand, Investigate, Plan, Build, Validate, Improve) presented clearly,
So that readers can follow the author's process.

**Acceptance Criteria:**

**Given** the page is rendered,
**When** I inspect the Engineering Approach section,
**Then** the six stages are shown in order with concise descriptors and responsive layout, and each stage is reachable via semantic headings for screen readers.

### Story 3.4: Career Story and Timeline
As a visitor,
I want a career story section that shows progression and highlights,
So that I can quickly gauge experience and career evolution.

**Acceptance Criteria:**

**Given** the Career Story section is present,
**When** I view it on desktop and mobile,
**Then** a concise timeline is shown, entries are in chronological order, and the section avoids fabricated claims (claims marked with evidence or labeled qualitative).

### Story 3.5: Toolbox Component
As a visitor,
I want a Toolbox section that groups technologies by category without proficiency percentages,
So that I can understand the author's skill areas and tools.

**Acceptance Criteria:**

**Given** the Toolbox is rendered,
**When** I view it,
**Then** technologies are grouped (Mobile, Languages, Frontend, Backend/Data, Engineering, AI) and no proficiency percentages are shown.

### Story 3.6: Experience Page and SEO Metadata
As a product owner,
I want the Experience page to include a concise professional timeline and correct SEO metadata,
So that the page is discoverable and presents professional history accurately.

**Acceptance Criteria:**

**Given** the Experience page is built,
**When** it is published,
**Then** meta title/description and Open Graph tags are present, sitemap includes the page, and the timeline displays the expected entries.



## Epic 4: Case Study System
Implement the MDX case-study system, frontmatter schema, rendering components, and the before/after components that make case studies consistent and extensible.
**FRs covered:** FR2, FR3, FR14
**Implementation Notes:** MDX pipeline, frontmatter validation, CaseStudyHeader, BeforeAfter, TechnicalDiagram, content model, preview rendering

### Story 4.1: MDX Case Study Dynamic Routing and Rendering
As a developer,
I want dynamic routes for case-study pages (/work/[slug]) that render MDX with parsed frontmatter,
So that each case study is available at a stable URL and renders correctly.

**Acceptance Criteria:**

**Given** an MDX file in content/case-studies/ with valid frontmatter,
**When** I navigate to /work/<slug>,
**Then** the case study page renders the title, metadata, and content using the CaseStudy layout and components.
**And** 404 is returned for missing slugs.

### Story 4.2: CaseStudyHeader Component
As a visitor,
I want a consistent case-study header that displays title, role, technologies, summary, and hero image,
So that readers immediately understand context and metadata for each case study.

**Acceptance Criteria:**

**Given** a case-study page,
**When** it renders,
**Then** the header shows title, role, technologies (as chips), summary, published date, and hero image with alt text.
**And** metadata is output as structured data for SEO.

### Story 4.3: Before/After Interactive Component
As a reader,
I want an interactive Before/After component that compares screenshots or images,
So that I can understand the impact and visual changes the project delivered.

**Acceptance Criteria:**

**Given** a case study includes before/after images,
**When** the component is rendered,
**Then** it displays a draggable or slider-based comparison with accessible controls and labels.
**And** it degrades gracefully to stacked images on devices that do not support the interaction.

### Story 4.4: TechnicalDiagram Component
As a reader,
I want a TechnicalDiagram component that renders diagrams, supports captions, and fullscreen view,
So that architecture and flow diagrams are legible and shareable.

**Acceptance Criteria:**

**Given** a diagram block in MDX,
**When** it renders,
**Then** the component displays the diagram with caption and a control to open fullscreen view.
**And** diagrams are responsive and preserve aspect ratio.

### Story 4.5: Content Model, Tags, and Pagination
As a content maintainer,
I want a content model that supports tags, categories, and pagination for work listings,
So that featured content can be grouped and lists can be paginated for performance and discoverability.

**Acceptance Criteria:**

**Given** multiple case-study MDX files with tags,
**When** I view the work listing or tag page,
**Then** items are filtered by tag, lists are paginated with sensible page sizes, and metadata links to tag pages.

### Story 4.6: Preview Rendering and Authoring Experience
As a content reviewer,
I want preview rendering of draft MDX on PR preview builds so I can validate visuals and content before merge,
So that authors and reviewers can iterate safely.

**Acceptance Criteria:**

**Given** a PR with MDX changes,
**When** the preview build runs,
**Then** the preview URL renders the branch content, including draft case studies marked draft:true, and images/assets referenced in the branch.
**And** preview respects draft flags (draft:true not shown on production).


## Epic 5: Content Population & Case Content
Populate the site with authored content: selected work items, independent projects, and AI-assisted engineering examples.
**FRs covered:** FR2, FR6, FR9
**Implementation Notes:** Use the case-study template, ensure images and assets are optimized, verify all claims per CLAIM_VERIFICATION.md

### Story 5.1: Import Selected Work and Create Draft Case Studies
As a content author,
I want to add selected work MDX files using the case-study template with verified frontmatter,
So that each case study is ready for review and preview deployment.

**Acceptance Criteria:**

**Given** a set of source notes, screenshots, and assets for a project,
**When** an author populates content/case-studies/<slug>.mdx using the case-study template,
**Then** the file passes frontmatter validation, builds in the preview environment, and renders in the CaseStudy layout.
**And** each case study includes required fields (summary, role, technologies, published, draft flag, evidence links).

### Story 5.2: Independent Projects and Archive Handling
As a content maintainer,
I want independent and archived projects to be discoverable yet separated from primary case studies,
So that historical work is preserved without cluttering the main portfolio.

**Acceptance Criteria:**

**Given** MDX files marked archived:true or category:archive,
**When** users view the Work listing,
**Then** archived items appear on a separate Archive page and are excluded from main featured lists, with pagination and archival metadata.

### Story 5.3: Claim Verification and Evidence Attachment
As a reviewer,
I want every quantitative or outcome claim in case studies to be accompanied by verifiable evidence or a comment linking to verification,
So that the portfolio avoids unverified or exaggerated claims.

**Acceptance Criteria:**

**Given** a case-study MDX containing claims (percent improvements, user counts, performance metrics),
**When** the author opens a PR,
**Then** CI or reviewer checklist requires an evidence field or a link to a source in frontmatter or a CLAIM_VERIFICATION.md entry in the PR description.
**And** PR cannot be merged without either evidence or an explicit reviewer approval that notes acceptable rationale.

### Story 5.4: Image Optimization, Licensing, and Attribution
As an operations maintainer,
I want images to be optimized at build time, include alt text and licensing/attribution where required,
So that images load fast, are accessible, and respect intellectual property.

**Acceptance Criteria:**

**Given** images referenced in MDX frontmatter or body,
**When** the build runs (preview or production),
**Then** images are processed into responsive srcsets, WebP fallbacks where supported, and a license/attribution line is present in metadata when required.
**And** any large originals are flagged in CI with guidance to compress or offload to externally hosted asset storage.

### Story 5.5: Case Study Metadata and SEO
As an SEO-conscious author,
I want each case study to include canonical URLs, meta descriptions, Open Graph data, and structured data where applicable,
So that case studies are discoverable and render correctly in social previews and search.

**Acceptance Criteria:**

**Given** a case-study MDX with frontmatter fields (title, description, og:image, published, tags),
**When** it is built and deployed,
**Then** meta tags are present, canonical link is included, structured JSON-LD is emitted for case-study pages, and the sitemap includes the entry (unless draft:true).

### Story 5.6: Publish Flow, QA and Staged Release
As a release engineer,
I want a clear publish flow (author -> preview PR -> reviewer QA -> merge -> GitHub Pages deployment) with a checklist,
So that published case studies meet quality, accessibility, and claim verification requirements.

**Acceptance Criteria:**

**Given** a PR that contains new or updated case studies,
**When** the preview build completes and reviewers complete the QA checklist,
**Then** the PR may be approved and merged,
**And** merge triggers the production GitHub Actions workflow that deploys to GitHub Pages and notifies the author with the production URL.



## Epic 6: Quality, Accessibility & Performance
Establish automated checks and manual review steps to meet accessibility, performance, and SEO targets.
**FRs covered:** FR12, FR13
**Implementation Notes:** WCAG 2.2 AA checklist, performance budgets (Core Web Vitals), Lighthouse checks in CI, accessibility manual QA, image optimization, reduced-motion handling, and monitoring/alerts

### Story 6.1: Accessibility CI Checks and A11y Linting
As a developer,
I want automated accessibility checks to run on every PR and flag regressions early,
So that accessibility issues are caught before merge.

**Acceptance Criteria:**

**Given** a PR with UI changes,
**When** CI runs the accessibility checks (axe-core, pa11y, or lighthouse accessibility audits),
**Then** any new accessibility violations are reported in CI with file/line context and blocking rules for high-severity failures.
**And** a summary report is attached to the PR for reviewers.

### Story 6.2: Lighthouse Performance Budgets and Gating
As a release engineer,
I want Lighthouse CI to enforce performance budgets for Core Web Vitals on preview and production builds,
So that regressions in LCP/FCP/CLS are prevented.

**Acceptance Criteria:**

**Given** the performance budgets (example placeholders: LCP<2.5s, FCP<1.0s, CLS<0.1),
**When** a preview or production build runs in CI,
**Then** Lighthouse CI reports scores and fails the job if budgets are exceeded for production-critical pages.
**And** a performance report is published to the PR (or attached artifact) with actionable suggestions.

### Story 6.3: MDX Frontmatter and Markdown Validation in CI
As a developer,
I want a build-time validator that checks MDX frontmatter and required fields,
So that builds fail early for malformed or missing metadata.

**Acceptance Criteria:**

**Given** an MDX file is added or changed in a PR,
**When** the MDX validator runs in CI,
**Then** the job fails with clear messages for missing required frontmatter fields (title, published, draft, summary, tags) or invalid values, and the PR shows those errors.

### Story 6.4: Visual Regression and Snapshot Tests for Core Pages
As a QA engineer,
I want visual regression tests for the homepage, case-study layout, and header/footer,
So that unintended visual changes are detected.

**Acceptance Criteria:**

**Given** baseline screenshots for core pages,
**When** the PR preview build runs visual tests,
**Then** any pixel-level or layout regressions beyond an allowable tolerance are flagged and reported in the PR with diff images.
**And** authors may accept or require fixes with reviewer sign-off.

### Story 6.5: Keyboard and Screenreader Manual Test Cases
As an accessibility reviewer,
I want documented manual test cases (keyboard navigation, focus order, screen reader flow) for primary user journeys,
So that manual checks are reproducible and reviewable by non-developers.

**Acceptance Criteria:**

**Given** documented test cases in docs/ACCESSIBILITY_CHECKLIST.md,
**When** a reviewer follows the checklist on the preview URL,
**Then** they can mark each test as pass/fail with notes, and failures are tracked in the PR for remediation.

### Story 6.6: Production Monitoring, Alerts and Rollback Guidance
As an ops engineer,
I want simple production monitoring (Lighthouse scheduled checks, real-user monitoring integration or synthetic checks) and a rollback playbook,
So that severe regressions can be detected and rolled back quickly.

**Acceptance Criteria:**

**Given** the production URL is live,
**When** scheduled monitoring detects critical regressions (performance or accessibility thresholds breached),
**Then** an alert is sent to the configured channel (email/Slack) with diagnostic links and the rollback playbook is available in docs/implementation-plan.md.
**And** there is guidance for hotfix vs rollback decisions.


## Epic 7: Production, Analytics & Launch
Configure production deployment, domain, privacy-conscious analytics, and launch checklist for production readiness.
**FRs covered:** FR10, NFR6
**Implementation Notes:** GitHub Pages production deployment via GitHub Actions, preview workflows for PRs, analytics event spec, privacy guidance, contact fallbacks, launch checklist, DNS and cache invalidation guidance

### Story 7.1: GitHub Actions Workflows (Preview + Production)
As a DevOps engineer,
I want CI workflows that build previews for PRs and deploy production on merge to main using GitHub Actions,
So that contributors can preview branch changes and production is automatically updated on approved merges.

**Acceptance Criteria:**

**Given** a PR is opened with site changes,
**When** the PR is pushed to GitHub,
**Then** a preview build runs and publishes a temporary preview URL (GitHub Pages preview or artifact) and artifacts/logs are attached to the PR.
**And** when a PR is merged into main, the production workflow builds and deploys to GitHub Pages and notifies the author.

### Story 7.2: GitHub Pages Production Deployment and Domain Setup
As a release engineer,
I want deployment to GitHub Pages with a documented domain and DNS setup guide,
So that production traffic is routed to the Pages site with correct HTTPS and caching headers.

**Acceptance Criteria:**

**Given** a repository with the production workflow in .github/workflows/,
**When** the production workflow runs on merge to main,
**Then** the site is deployed to the configured GitHub Pages branch and domain (or repo pages), HTTPS is enabled, and expected caching headers are set.
**And** a documented DNS setup and cache invalidation step is included in docs/implementation-plan.md.

### Story 7.3: Privacy-Conscious Analytics Event Spec
As a product owner,
I want a minimal analytics event spec that captures necessary product signals without PII,
So that the site can track meaningful usage while respecting user privacy.

**Acceptance Criteria:**

**Given** the analytics spec exists,
**When** analytics code is added to the site,
**Then** only minimal events (case-study_open, contact_click, resume_download) are emitted with non-identifying metadata (slug, page_type), and the privacy policy documents the events and retention.
**And** toggles exist to disable analytics per environment (disabled in local/test, enabled in production only).

### Story 7.4: Contact Flow, Resume, and Fallbacks
As a job seeker contact path owner,
I want a reliable contact flow with email, LinkedIn, and resume access and graceful fallbacks,
So that potential employers can reach out even if third-party forms fail.

**Acceptance Criteria:**

**Given** a visitor on the Contact page or header,
**When** they click Contact or View Résumé,
**Then** an accessible contact flow is presented (mailto link fallback, LinkedIn link, downloadable resume), and if a 3rd-party form is used it degrades to mailto when external scripts fail.

### Story 7.5: Launch Checklist and Post-Launch Verification
As a release manager,
I want a pre-launch and post-launch checklist covering DNS, analytics, SEO, accessibility, and smoke tests,
So that the launch follows a repeatable and auditable sequence.

**Acceptance Criteria:**

**Given** the launch checklist in docs/implementation-plan.md,
**When** the team runs it before launch,
**Then** each item is checked (DNS propagated, sitemap updated, analytics verified, accessibility spot checks done), and post-launch verification includes smoke tests and a launch report.

### Story 7.6: Rollout, Cache Invalidation and Emergency Rollback
As an operations engineer,
I want clear rollout steps including cache invalidation and a tested rollback path,
So that production issues can be mitigated and reverted quickly.

**Acceptance Criteria:**

**Given** a production deployment has an incident,
**When** rollback is required,
**Then** documented rollback steps are available (revert commit, re-deploy previous tag or branch), and cache invalidation guidance for CDNs/GitHub Pages is provided.
**And** the incident response includes communication templates for notify stakeholders.







