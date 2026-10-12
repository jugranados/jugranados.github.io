import type { Metadata } from 'next';
import { home } from '@/content/home';
import { ogImages } from '@/content/seo';

const { about } = home;

export const metadata: Metadata = {
  title: 'About | June Jovi Granados',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About | June Jovi Granados',
    url: '/about/',
    images: ogImages,
  },
};

export default function AboutPage() {
  return (
    <main id="main" className="page-shell">
      <section className="section-card">
        <p className="eyebrow accent">About</p>
        <h1>{about.title}</h1>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}
