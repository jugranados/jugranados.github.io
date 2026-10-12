import { ArrowUpRight, Mail } from 'lucide-react';
import { home } from '@/content/home';
import NewTabLink from './NewTabLink';

const { contact, hero } = home;

export default function ContactActions() {
  return (
    <>
      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>
          <Mail size={18} aria-hidden="true" />
          {contact.email}
        </a>
        <NewTabLink href={contact.linkedin.href}>{contact.linkedin.label}</NewTabLink>
      </div>
      <NewTabLink className="button primary contact-resume" href={hero.secondaryCta.href} hint="PDF, opens in new tab">
        {contact.resumeLabel} <ArrowUpRight size={16} aria-hidden="true" />
      </NewTabLink>
    </>
  );
}
