import { ArrowUpRight, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import { home } from '@/content/home';

const { contact, hero } = home;

export const metadata: Metadata = {
  title: 'Contact | June Jovi Granados',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact | June Jovi Granados',
    url: '/contact/',
  },
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section-card contact-card contact-page-card">
        <div className="section-heading">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>{contact.title}</h1>
        </div>
        <p className="contact-intro">{contact.intro}</p>
        <p className="contact-availability">{contact.availability}</p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            {contact.email}
          </a>
          <a href={contact.linkedin.href} target="_blank" rel="noreferrer">
            {contact.linkedin.label}
          </a>
        </div>
        <a className="button primary contact-resume" href={hero.secondaryCta.href} target="_blank" rel="noreferrer">
          {contact.resumeLabel} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
