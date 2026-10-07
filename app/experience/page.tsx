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
        <h1>Senior mobile engineer across native and cross-platform apps.</h1>
        <ul className="ai-list">
          <li>Consultant Mobile Developer at DCPDC Inc. (2025–present)</li>
          <li>Senior Mobile Engineer at Ideagen (2021–2025): React Native, .NET MAUI, Xamarin, Cordova, native Android and iOS</li>
          <li>Android Developer at Mynt / GCash (2018–2021): core modules for a 50M+ user app</li>
          <li>Earlier: ARKRAY, Tagcash and Imperium Technology (2014–2018)</li>
        </ul>
      </section>
    </main>
  );
}
