import type { Metadata } from 'next';
import { home } from '@/content/home';
import { ogImages } from '@/content/seo';

const { career } = home.experience;

export const metadata: Metadata = {
  title: 'Experience | June Jovi Granados',
  alternates: {
    canonical: '/experience/',
  },
  openGraph: {
    title: 'Experience | June Jovi Granados',
    url: '/experience/',
    images: ogImages,
  },
};

export default function ExperiencePage() {
  return (
    <main id="main" className="page-shell">
      <section className="section-card">
        <p className="eyebrow accent">Experience</p>
        <h1>Senior mobile engineer across native and cross-platform apps.</h1>
        <ul className="ai-list">
          {career.map(({ period, company, role }) => (
            <li key={company}>
              {role} at {company} ({period})
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
