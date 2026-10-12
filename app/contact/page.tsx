import type { Metadata } from 'next';
import ContactActions from '@/components/ContactActions';
import { home } from '@/content/home';
import { ogImages } from '@/content/seo';

const { contact } = home;

export const metadata: Metadata = {
  title: 'Contact | June Jovi Granados',
  alternates: {
    canonical: '/contact/',
  },
  openGraph: {
    title: 'Contact | June Jovi Granados',
    url: '/contact/',
    images: ogImages,
  },
};

export default function ContactPage() {
  return (
    <main id="main" className="page-shell">
      <section className="section-card contact-card contact-page-card">
        <div className="section-heading">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1>{contact.title}</h1>
        </div>
        <p className="contact-intro">{contact.intro}</p>
        <p className="contact-availability">{contact.availability}</p>
        <ContactActions />
      </section>
    </main>
  );
}
