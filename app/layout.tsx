import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#08090E',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MOJO FLOW — The Creator Business OS',
  description: 'From Brand Deal to Bottom Line. MOJO FLOW is the Creator Business OS that helps creators manage collaborations, track production costs, create invoices, calculate real profit and never lose track of when they are due to be paid.',
  keywords: [
    'MOJO FLOW',
    'Creator Business OS',
    'Creator CRM',
    'Creator invoicing software',
    'Creator expense management',
    'Creator collaboration management',
    'Creator profitability',
    'Influencer business management',
    'Creator business management',
    'Brand collaboration management',
    'Payment due date tracking'
  ],
  authors: [{ name: 'MOJO FLOW' }],
  openGraph: {
    title: 'MOJO FLOW — The Creator Business OS',
    description: 'From Brand Deal to Bottom Line. Manage collaborations, commercials, invoices, production expenses, profitability and payment due dates.',
    url: 'https://mojoflow.in',
    siteName: 'MOJO FLOW',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOJO FLOW — The Creator Business OS',
    description: 'Manage your creator collaborations, production costs, invoices, real profit and payment due dates in one creator-first workspace.',
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
