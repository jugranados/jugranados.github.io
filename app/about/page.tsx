import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | June Jovi Granados',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About | June Jovi Granados',
    url: '/about/',
  },
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-card">
        <p className="eyebrow accent">About</p>
        <h1>Senior mobile engineer focused on reliable product delivery.</h1>
        <p>
          I&apos;m June Jovi Granados, a Senior Mobile Engineer with 12+ years building and modernizing Android and cross-platform apps, based in Bataan, Philippines. I owned core modules of GCash, the Philippines&apos; largest e-wallet, and led a Xamarin-to-.NET MAUI migration at Ideagen.
        </p>
        <p>
          I&apos;m currently a Consultant Mobile Developer at DCPDC Inc., integrating AI-assisted engineering workflows into development, debugging, testing, review, and documentation. My focus is on building apps that are maintainable, testable, and ready for real-world scale.
        </p>
      </section>
    </main>
  );
}
