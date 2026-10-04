import { ArrowUpRight, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section-card contact-card contact-page-card">
        <div className="section-heading">
          <p className="eyebrow">Contact // 09</p>
          <h1>Let’s Work Together</h1>
        </div>
        <p className="contact-intro">
          Open to senior mobile engineering roles and technical consulting opportunities. Let’s build stable systems.
        </p>
        <div className="contact-links">
          <a href="mailto:hello@jjgranados.dev">
            <Mail size={18} aria-hidden="true" />
            hello@jjgranados.dev
          </a>
          <a href="https://www.linkedin.com/in/jjsgranados/" target="_blank" rel="noreferrer">
            linkedin.com/in/jjsgranados
          </a>
        </div>
        <a className="button primary contact-resume" href="/resume">
          View Résumé <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
