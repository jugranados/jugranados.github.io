import './globals.css';
import type { Metadata } from 'next';

const siteUrl = new URL('https://jugranados.github.io/');

const title = 'June Jovi Granados | Senior Software Engineer, Mobile & Cross-Platform';
const description =
  'Senior Mobile Engineer with 12+ years building Android and cross-platform apps. Owned core modules of GCash and led a Xamarin-to-.NET MAUI migration.';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    siteName: title,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
