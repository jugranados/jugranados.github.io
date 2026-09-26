const profile = {
  name: 'June Jovi Granados',
  role: 'Mobile Developer',
  location: 'Central Luzon, Philippines',
  employer: 'Deloitte',
  education: 'Polytechnic University of the Philippines',
  summary:
    'Experienced Mobile App Developer with a demonstrated history of working in the financial services industry. Skilled in Native iOS/Android, React Native, .NET MAUI, Firebase, PHP, WordPress, and Node.js.',
};

const workItems = [
  {
    title: 'GCash — Architecture Modernization',
    role: 'Lead Mobile Architect',
    description:
      "Restructured legacy architecture for one of Southeast Asia's largest fintech platforms. Optimized state management, module compilation boundaries, and localized data persistence strategies to increase development velocity and baseline reliability.",
    diagram: 'architecture',
  },
  {
    title: 'Xamarin to .NET MAUI — Platform Migration',
    role: 'Principal Migrations Consultant',
    description:
      'Led cross-platform migration from deprecated Xamarin framework to .NET MAUI. Redesigned layout systems, decoupled custom rendering abstractions, and streamlined target multi-platform pipeline integrations with negligible service disruption.',
    diagram: 'migration',
  },
  {
    title: 'Damstra Learn — Legacy Modernization',
    role: 'Senior Mobile Engineer',
    description:
      'Modernized aging enterprise learning platform with improved architecture. Replaced heavy local webview components with performant native abstractions, resolving memory leak vectors and performance issues.',
    diagram: 'legacy',
  },
  {
    title: 'Tara Tsek — Reusable Engineering / Library Design',
    role: 'Core Library Architect',
    description:
      'Designed shared component libraries for cross-project reuse. Established comprehensive interface specifications, abstract wrapper patterns, and structured internal distribution pipelines across multiple internal utility projects.',
    diagram: 'library',
  },
];

const approachStages = [
  {
    title: 'Problem',
    description: 'Isolate the actual system bottleneck or platform constraint.',
  },
  {
    title: 'Investigation',
    description: 'Profile resource consumption, trace stack calls, audit dependencies.',
  },
  {
    title: 'Decision',
    description: 'Draft engineering specifications comparing trade-offs explicitly.',
  },
  {
    title: 'Implementation',
    description: 'Write clean, modular, and thoroughly isolated code blocks.',
  },
  {
    title: 'Validation',
    description: 'Apply unit, integration, and target-environment profiling tests.',
  },
  {
    title: 'Result',
    description: 'Deploy resilient, performant, and future-proof systems.',
  },
];

const toolbox = {
  Mobile: ['Android', 'iOS', 'React Native', '.NET MAUI'],
  Languages: ['Kotlin', 'Swift', 'TypeScript', 'C#', 'Java'],
  Frontend: ['Next.js', 'React', 'HTML', 'CSS'],
  Backend: ['Node.js', 'PHP', 'Firebase', 'REST', 'WordPress'],
  Engineering: ['CI/CD', 'Testing', 'Debugging', 'Automation'],
  AI: ['Code review', 'Prompt design', 'Debugging', 'Docs'],
};

const experienceItems = [
  {
    period: 'Current',
    title: `${profile.role} · ${profile.employer}`,
    summary: 'Working in the financial services industry with a focus on mobile product delivery, platform quality, and maintainable engineering practice.',
  },
  {
    period: 'Foundation',
    title: 'Systems and application engineering',
    summary: 'Built a strong base in problem-solving, software delivery, and practical engineering strategy.',
  },
  {
    period: 'Mobile focus',
    title: 'Native and cross-platform app development',
    summary: 'Delivered mobile solutions across app stability, feature work, product iteration, and platform modernization.',
  },
];

const aiExamples = [
  'Code review and architecture sanity checks',
  'Debugging support and issue triage',
  'API and integration validation',
  'Documentation, research and decision briefs',
  'Delivery acceleration with repeatable workflows',
];

const processSteps = [
  { label: 'Problem', detail: 'Identify bottleneck', icon: AlertTriangle },
  { label: 'Investigate', detail: 'Root cause analysis', icon: Search },
  { label: 'Solution', detail: 'Robust architecture', icon: Cpu },
  { label: 'Result', detail: 'Scale with stability', icon: CheckCircle2 },
];

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
          <span className="accent">Senior Software Engineer</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>2026_Portfolio</span>
        </div>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <h1>
              Mobile &amp; Cross-
              <br />
              Platform
            </h1>
            <p className="tagline">Mobile engineer. Software builder. Problem solver.</p>
            <p className="lede">I build, modernize, maintain and troubleshoot software across native mobile and cross-platform systems.</p>
            <div className="cta-row">
              <a href="#work" className="button primary">Explore My Work</a>
              <a href="/resume" className="button secondary">View Résumé</a>
            </div>
          </div>

          <div className="hero-aside" aria-label="Technology summary">
            <div className="pill-panel">
              <p className="mini-label">Core Stack</p>
              <div className="pill-wrap">
                {['Android', 'iOS', 'React Native', '.NET MAUI', 'React.js', 'Next.js'].map((item) => (
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
            {processSteps.map(({ label, detail, icon: Icon }, index) => (
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
            ))}
          </div>
        </section>

        <section id="work" className="section-card">
          <SectionHeading eyebrow="Selected Work" title="Selected Engineering Work" />
          <div className="work-grid">
            {workItems.map((item) => (
              <article key={item.title} className="work-card">
                <div className="card-visual" aria-hidden="true">
                  <div className={`project-diagram project-diagram--${item.diagram}`}>
                    {item.diagram === 'architecture' && (
                      <>
                        <span className="diagram-node">Legacy UI</span>
                        <span className="diagram-arrow">→</span>
                        <span className="diagram-node diagram-node--accent">Modern Core</span>
                        <span className="diagram-arrow">→</span>
                        <span className="diagram-node">Clean API</span>
                      </>
                    )}
                    {item.diagram === 'migration' && (
                      <div className="diagram-migration">
                        <div className="diagram-version">
                          <span className="diagram-label">Before</span>
                          <span className="diagram-node">Xamarin</span>
                        </div>
                        <span className="diagram-refresh" aria-hidden="true">⟳</span>
                        <div className="diagram-version">
                          <span className="diagram-label diagram-label--accent">After</span>
                          <span className="diagram-node diagram-node--accent">.NET MAUI</span>
                        </div>
                      </div>
                    )}
                    {item.diagram === 'legacy' && (
                      <>
                        <span className="diagram-node diagram-node--monolith">Monolith</span>
                        <span className="diagram-arrow">→</span>
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
                        <span className="diagram-link" aria-hidden="true">↗</span>
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
                <span className="case-study-label">Read case study →</span>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section-card">
          <SectionHeading eyebrow="Approach" title="How I Work" />
          <div className="stage-grid">
            {approachStages.map((stage, index) => (
              <article key={stage.title} className="stage-card">
                <span className="stage-index">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card">
          <SectionHeading eyebrow="Career" title="The Path So Far" />
          <div className="story-grid">
            <div>
              <p>
                The work centers on building reliable mobile experiences and practical engineering systems that make complex products easier to support, evolve, and scale over time. It blends native app development with cross-platform thinking and a strong focus on execution in business-critical environments.
              </p>
            </div>
            <div className="timeline-stack">
              {experienceItems.map((item) => (
                <div key={item.title} className="timeline-row">
                  <span>{item.period}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-card">
          <SectionHeading eyebrow="Things I’ve Built" title="Independent products and practical engineering artifacts." />
          <div className="mini-grid">
            {['TaxPH 2.0', 'Pet Records', 'Automation tooling', 'Mobile prototypes'].map((project) => (
              <div key={project} className="mini-card">
                <span>{project}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card">
          <SectionHeading eyebrow="Engineering Toolbox" title="Strong across mobile, platform, cloud and delivery systems." />
          <div className="toolbox-grid">
            {Object.entries(toolbox).map(([group, items]) => (
              <div key={group} className="toolbox-group">
                <h3>{group}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-card">
          <SectionHeading eyebrow="Experience" title="Leadership grounded in practical delivery." />
          <div className="experience-list">
            {experienceItems.map((item) => (
              <div key={item.title} className="experience-row">
                <span className="period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="ai" className="section-card">
          <SectionHeading eyebrow="Engineering With AI" title="Practical AI support for delivery velocity and quality." />
          <ul className="ai-list">
            {aiExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section-card contact-card">
          <SectionHeading eyebrow="Let’s Work Together" title="Open to mobile engineering and product-focused platform opportunities." />
          <div className="contact-row">
            <a href="https://www.linkedin.com/in/jjsgranados/" target="_blank" rel="noreferrer"><UserRound size={15} /> LinkedIn</a>
            <a href="/resume">Résumé <ArrowUpRight size={15} /></a>
            <span>{profile.location}</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 {profile.name}</p>
      </footer>
    </div>
  );
}
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Search,
  UserRound,
} from 'lucide-react';
import { Fragment } from 'react';
