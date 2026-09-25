import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'June Jovi Granados | Mobile Developer',
  description:
    'Mobile Developer based in Central Luzon, Philippines, with experience in native and cross-platform app development, product delivery, and financial services technology.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
