import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Résumé | June Jovi Granados',
  alternates: {
    canonical: '/resume/',
  },
  openGraph: {
    title: 'Résumé | June Jovi Granados',
    url: '/resume/',
  },
};

export default function ResumePage() {
  return (
    <main className="page-shell">
      <section className="section-card">
        <p className="eyebrow accent">Résumé</p>
        <h1>Mobile Developer • Deloitte</h1>
        <p>
          Experienced Mobile App Developer with a demonstrated history of working in the financial services industry. Skilled in Native iOS/Android, React Native, .NET MAUI, Firebase, PHP, WordPress, and Node.js. Strong engineering professional with a Bachelor&apos;s Degree in Information Technology from the Polytechnic University of the Philippines.
        </p>
      </section>
    </main>
  );
}
