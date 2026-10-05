import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | June Jovi Granados',
  alternates: {
    canonical: '/experience/',
  },
  openGraph: {
    title: 'Experience | June Jovi Granados',
    url: '/experience/',
  },
};

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <section className="section-card">
        <p className="eyebrow accent">Experience</p>
        <h1>Mobile developer working in financial services.</h1>
        <ul className="ai-list">
          <li>Mobile Developer at Deloitte</li>
          <li>Mobile app development across native and cross-platform systems</li>
          <li>Strength in Android, iOS, React Native, and .NET MAUI</li>
          <li>Product-focused engineering with a practical maintenance mindset</li>
        </ul>
      </section>
    </main>
  );
}
