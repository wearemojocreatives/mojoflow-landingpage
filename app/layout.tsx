import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#08090E',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MOJO FLOW — The Creator OS',
  description: 'MOJO FLOW is the operating system for modern creators. Bring your entire creator business — commercials, rate cards, campaigns, invoicing, and analytics — into one unified system.',
  keywords: [
    'Creator OS',
    'MOJO FLOW',
    'Creator Business Management',
    'Rate Cards for Creators',
    'Creator Invoicing',
    'Brand Collaboration Management',
    'Creator Platform',
    'Creator Commercials'
  ],
  authors: [{ name: 'MOJO FLOW' }],
  openGraph: {
    title: 'MOJO FLOW — The Creator OS',
    description: 'The operating system for modern creators. Unify commercial deals, rate cards, campaign tracking, invoicing, and business insights.',
    url: 'https://mojoflow.in',
    siteName: 'MOJO FLOW',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOJO FLOW — The Creator OS',
    description: 'Stop running your creator business across spreadsheets and DMs. Unify everything with MOJO FLOW.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-mojo-bg text-mojo-text antialiased selection:bg-mojo-violet selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
