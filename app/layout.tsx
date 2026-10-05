import './globals.css';
import type { Metadata } from 'next';

const siteUrl = new URL('https://jugranados.github.io/');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'June Jovi Granados | Mobile Developer',
  description:
    'Mobile Developer based in Central Luzon, Philippines, with experience in native and cross-platform app development, product delivery, and financial services technology.',
  openGraph: {
    type: 'website',
    title: 'June Jovi Granados | Mobile Developer',
    description:
      'Mobile Developer based in Central Luzon, Philippines, with experience in native and cross-platform app development, product delivery, and financial services technology.',
    siteName: 'June Jovi Granados | Mobile Developer',
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
