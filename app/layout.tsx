import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { ogImages } from '@/content/seo';

const siteUrl = new URL('https://jugranados.github.io/');

const siteName = 'June Jovi Granados';
const title = 'June Jovi Granados | Senior Software Engineer, Mobile & Cross-Platform';
const description =
  'Senior Mobile Engineer with 12+ years building Android and cross-platform apps. Owned core modules of GCash and led a Xamarin-to-.NET MAUI migration.';

const spaceGrotesk =Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// Geist is not in next/font/google for this Next version, so it is self-hosted (OFL, see app/fonts).
const geist = localFont({
  src: './fonts/Geist-Variable.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-geist',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    siteName,
    images: ogImages,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ogImages.map(({ url }) => url),
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geist.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
