import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Link2,
  Mail,
  RefreshCw,
  Search,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { Fragment } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { home, type ProcessIcon } from '@/content/home';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
  },
};

const processIcons: Record<ProcessIcon, LucideIcon> = {
  alert: AlertTriangle,
  search: Search,
  cpu: Cpu,
  check: CheckCircle2,
};

const { profile, hero, processSteps, work, approach, projects, toolbox, experience, ai, contact } = home;

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">{profile.name}</div>
        <div className="header-meta">
          <span className="accent">{profile.headerRole}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{profile.headerTag}</span>
        </div>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <h1>
              {hero.titleLines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="tagline">{profile.tagline}</p>
            <p className="lede">{hero.lede}</p>
            <div className="cta-row">
              <Link href={hero.primaryCta.href} className="button primary">{hero.primaryCta.label}</Link>
              <Link href={hero.secondaryCta.href} className="button secondary">{hero.secondaryCta.label}</Link>
            </div>
          </div>

          <div className="hero-aside" aria-label="Technology summary">
            <div className="pill-panel">
              <p className="mini-label">{hero.coreStackLabel}</p>
              <div className="pill-wrap">
                {hero.coreStack.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process-flow section-card" aria-label="Engineering approach overview">
          <div className="process-track">
            {processSteps.map(({ label, detail, icon }, index) => {
              const Icon = processIcons[icon];
              return (
                <Fragment key={label}>
                  <div className="process-step">
                    <div className="step-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></div>
                    <div>
                      <span>{label}</span>
                      <small>{detail}</small>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && <span className="process-connector" aria-hidden="true" />}
                </Fragment>
              );
            })}
          </div>
        </section>

        <section id="work" className="section-card">
          <SectionHeading eyebrow={work.eyebrow} title={work.title} />
          <div className="work-grid">
            {work.items.map((item) => (
              <article key={item.title} className="work-card">
                <div className="card-visual" aria-hidden="true">
                  <div className={`project-diagram project-diagram--${item.diagram}`}>
                    {item.diagram === 'architecture' && (
                      <>
                        <span className="diagram-node">Legacy UI</span>
                        <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
                        <span className="diagram-node diagram-node--accent">Modern Core</span>
                        <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
                        <span className="diagram-node">Clean API</span>
                      </>
                    )}
                    {item.diagram === 'migration' && (
                      <div className="diagram-migration">
                        <div className="diagram-version">
                          <span className="diagram-label">Before</span>
                          <span className="diagram-node">Xamarin</span>
                        </div>
                        <RefreshCw className="diagram-refresh" size={22} strokeWidth={2} aria-hidden="true" />
                        <div className="diagram-version">
                          <span className="diagram-label diagram-label--accent">After</span>
                          <span className="diagram-node diagram-node--accent">.NET MAUI</span>
                        </div>
                      </div>
                    )}
                    {item.diagram === 'legacy' && (
                      <>
                        <span className="diagram-node diagram-node--monolith">Monolith</span>
                        <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
                        <div className="diagram-modules">
                          <span className="diagram-node diagram-node--accent">Mod 1</span>
                          <span className="diagram-node diagram-node--accent">Mod 2</span>
                        </div>
                      </>
                    )}
                    {item.diagram === 'library' && (
                      <>
                        <div className="diagram-projects">
                          <span>App Project A</span>
                          <span>App Project B</span>
                        </div>
                        <Link2 className="diagram-link" size={18} strokeWidth={2} aria-hidden="true" />
                        <span className="diagram-node diagram-node--accent">Shared Library</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="card-copy">
                  <h3>{item.title}</h3>
                  <p className="meta">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section-card">
          <SectionHeading eyebrow={approach.eyebrow} title={approach.title} />
          <div className="stage-grid">
            {approach.stages.map((stage, index) => (
              <article key={stage.title} className="stage-card">
                <span className="stage-index">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card">
          <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />
          <div className="project-list">
            {projects.items.map((project) => (
              <article key={project.name} className={`project-row project-row--${project.status}`}>
                <div className="project-row-copy">
                  <div className="project-row-head">
                    <h3>{project.name}</h3>
                    <span className={`status-badge status-badge--${project.status}`}>{project.label}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
                <ExternalLink className="project-row-icon" size={20} strokeWidth={2} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section-card">
          <SectionHeading eyebrow={toolbox.eyebrow} title={toolbox.title} />
          <div className="toolbox-grid">
            {toolbox.groups.map(({ name, items }) => (
              <div key={name} className="toolbox-group">
                <h3>{name}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-card experience-section">
          <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />
          <p className="experience-tenure">{experience.tenure}</p>
          <p className="experience-journey">{experience.journey}</p>

          <ol className="career-timeline">
            {experience.career.map((item) => (
              <li className="career-entry" key={item.company}>
                <span className="career-period">{item.period}</span>
                <div className="career-entry-content">
                  <h3>{item.company}</h3>
                  <p className="career-role">{item.role}</p>
                  <p className="career-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <section className="other-experience" aria-labelledby="other-experience-heading">
            <h3 id="other-experience-heading">{experience.otherTitle}</h3>
            <ul className="other-experience-list">
              {experience.other.map((item) => (
                <li key={item.title}>
                  {item.period && <span className="career-period">{item.period}</span>}
                  <h4>{item.title}</h4>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section id="ai" className="section-card ai-section">
          <SectionHeading eyebrow={ai.eyebrow} title={ai.title} />
          <div className="ai-layout">
            <div className="ai-intro">
              {ai.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="ai-cards">
              {ai.examples.map((item) => (
                <li key={item.title}>
                  <article className="ai-card">
                    <span className="ai-card-icon" aria-hidden="true">
                      <Zap size={18} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section-card contact-card">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
          <p className="contact-intro">{contact.intro}</p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
            <a href={contact.linkedin.href} target="_blank" rel="noreferrer">
              {contact.linkedin.label}
            </a>
          </div>
          <Link className="button primary contact-resume" href={hero.secondaryCta.href}>
            {contact.resumeLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-identity">
          <strong>{profile.name}</strong>
          <span>{profile.tagline}</span>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={contact.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <span className="footer-year">{contact.year}</span>
        </nav>
      </footer>
    </div>
  );
}
