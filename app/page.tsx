import { AlertTriangle, CheckCircle2, Cpu, Search, Zap, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactActions from '@/components/ContactActions';
import NewTabLink from '@/components/NewTabLink';
import ProjectDiagram from '@/components/ProjectDiagram';
import { home, type ProcessIcon } from '@/content/home';
import { ogImages } from '@/content/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    images: ogImages,
  },
};

const processIcons: Record<ProcessIcon, LucideIcon> = {
  alert: AlertTriangle,
  search: Search,
  cpu: Cpu,
  check: CheckCircle2,
};

const { profile, hero, processSteps, work, approach, projects, toolbox, experience, ai, contact } = home;

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main" className="page-shell">
      <section className="hero section-card">
        <div className="hero-copy">
          <p className="eyebrow">{profile.headerRole}</p>
          <h1>
            {hero.titleLines.map((line) => (
              <span key={line} className="hero-title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="lede">{hero.lede}</p>
          <div className="cta-row">
            <Link href={hero.primaryCta.href} className="button primary">{hero.primaryCta.label}</Link>
            <NewTabLink href={hero.secondaryCta.href} className="button secondary" hint="PDF, opens in new tab">
              {hero.secondaryCta.label}
            </NewTabLink>
          </div>
        </div>

        <div className="hero-aside">
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
        <ol className="process-track">
          {processSteps.flatMap(({ label, detail, icon }, index) => {
            const Icon = processIcons[icon];
            const step = (
              <li key={label} className="process-step">
                <div className="step-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></div>
                <div>
                  <span>{label}</span>
                  <small>{detail}</small>
                </div>
              </li>
            );
            if (index === processSteps.length - 1) return [step];
            return [step, <li key={`${label}-connector`} className="process-connector" aria-hidden="true" />];
          })}
        </ol>
      </section>

      <section id="work" className="section-card" aria-labelledby="work-heading">
        <SectionHeading id="work-heading" eyebrow={work.eyebrow} title={work.title} />
        <ul className="work-grid">
          {work.items.map((item) => (
            <li key={item.title} className="work-card">
              <div className="card-visual" aria-hidden="true">
                <ProjectDiagram diagram={item.diagram} />
              </div>
              <div className="card-copy">
                <h3>{item.title}</h3>
                <p className="meta">{item.role}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="approach" className="section-card" aria-labelledby="approach-heading">
        <SectionHeading id="approach-heading" eyebrow={approach.eyebrow} title={approach.title} />
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

      <section className="section-card" aria-labelledby="projects-heading">
        <SectionHeading id="projects-heading" eyebrow={projects.eyebrow} title={projects.title} />
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
              {/* TODO: verify public project links, then make the row a link and restore the external-link icon. */}
            </article>
          ))}
        </div>
      </section>

      <section className="section-card" aria-labelledby="toolbox-heading">
        <SectionHeading id="toolbox-heading" eyebrow={toolbox.eyebrow} title={toolbox.title} />
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

      <section id="experience" className="section-card experience-section" aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading" eyebrow={experience.eyebrow} title={experience.title} />
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

      <section id="ai" className="section-card ai-section" aria-labelledby="ai-heading">
        <SectionHeading id="ai-heading" eyebrow={ai.eyebrow} title={ai.title} />
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

      <section id="contact" className="section-card contact-card" aria-labelledby="contact-heading">
        <SectionHeading id="contact-heading" eyebrow={contact.eyebrow} title={contact.title} />
        <p className="contact-intro">{contact.intro}</p>
        <p className="contact-availability">{contact.availability}</p>
        <ContactActions />
      </section>
    </main>
  );
}
