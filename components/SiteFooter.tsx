import { home } from '@/content/home';
import NewTabLink from './NewTabLink';

const { profile, contact } = home;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-identity">
        <strong>{profile.name}</strong>
        <span>{profile.tagline}</span>
      </div>
      <div className="footer-end">
        <nav className="footer-links" aria-label="Footer">
          <NewTabLink href={contact.github}>GitHub</NewTabLink>
          <NewTabLink href={contact.linkedin.href}>LinkedIn</NewTabLink>
          <a href={`mailto:${contact.email}`}>Email</a>
        </nav>
        <span className="footer-year">{contact.year}</span>
      </div>
    </footer>
  );
}
