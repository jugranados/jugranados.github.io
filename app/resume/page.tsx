import type { Metadata } from 'next';

const pdf = '/June-Jovi-Granados-Resume.pdf';

export const metadata: Metadata = {
  title: 'Résumé | June Jovi Granados',
  alternates: {
    canonical: '/resume/',
  },
  openGraph: {
    title: 'Résumé | June Jovi Granados',
    url: '/resume/',
  },
  robots: { index: false },
};

// Static export has no server redirects, so this page forwards to the PDF with a meta refresh.
export default function ResumePage() {
  return (
    <main className="page-shell">
      <meta httpEquiv="refresh" content={`0;url=${pdf}`} />
      <section className="section-card">
        <p className="eyebrow accent">Résumé</p>
        <h1>Opening résumé…</h1>
        <p>
          If the PDF does not open, <a href={pdf}>download the résumé</a>.
        </p>
      </section>
    </main>
  );
}
