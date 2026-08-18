import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MOJO FLOW — Creator CRM & Business Management Software',
  description:
    'MOJO FLOW is a Creator CRM and business management platform for managing brand collaborations, commercials, invoices, production expenses, profitability and payment due dates.',
  keywords: [
    'Creator CRM',
    'Creator Management',
    'CRM for Creators',
    'CRM for Content Creators',
    'Creator Business Management',
    'Creator Collaboration Management',
    'Creator Invoice Management',
    'Creator Expense Management',
    'Creator Profit Tracking',
    'Creator-Side CRM',
    'Brand Collaboration CRM',
    'Creator Business Software',
    'Creator Management Software',
    'Influencer Business Management',
    'Content Creator CRM',
    'Brand Deal Management',
    'Sponsorship CRM',
  ],
  authors: [{ name: 'MOJO FLOW Team' }],
  metadataBase: new URL('https://mojoflow.in'),
  openGraph: {
    title: 'MOJO FLOW — Creator CRM & Business Management Software',
    description:
      'Manage brand collaborations, commercials, invoices, production expenses, profitability and payment due dates in one place.',
    url: 'https://mojoflow.in',
    siteName: 'MOJO FLOW',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOJO FLOW — Creator CRM & Business Management Software',
    description:
      'The Creator CRM for managing brand deals, invoices, production costs and real creator profit.',
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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is MOJO FLOW?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MOJO FLOW is a Creator CRM and business operating system that helps creators manage brand collaborations, track production expenses, issue invoices, calculate real net profit, and track payment due dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is MOJO FLOW a creator marketplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. MOJO FLOW is not a brand marketplace or talent agency. It is an internal workspace for creators to manage the brand relationships and collaborations they already have.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I manage my brand collaborations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. MOJO FLOW tracks your brand deals from initial proposal to production, draft submission, invoice generation, payment due date tracking, and profit calculation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I create invoices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. MOJO FLOW includes an internal creator invoicing system to generate clean tax invoices linked directly to your agreed commercial terms and Net payment dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I track production expenses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can log all campaign expenses — including photographers, videographers, studio rentals, travel, advertising amplification, and editing fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can MOJO FLOW calculate my creator profit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. MOJO FLOW automatically subtracts total production expenses from your agreed commercial fee to show your true net creator profit for every deal.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I track Net 30, 45, 60 and 90 payment terms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can set Net payment terms for each invoice. MOJO FLOW automatically calculates due dates and triggers reminder states before, on, and after the due date.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does MOJO FLOW receive payments from brands?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Brands pay creators directly via their standard bank transfers or corporate payouts. MOJO FLOW is a management tool that tracks due dates and payment status.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I create a public media kit or creator page?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. MOJO FLOW is a private internal workspace. Your rates, packages, campaign expenses, and financial data remain 100% private to you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is MOJO FLOW a traditional CRM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Generic CRMs track sales pipelines and corporate leads. MOJO FLOW is a creator-side CRM specifically built around brand collaborations, deliverables, campaign costs, and creator profit.',
        },
      },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MOJO FLOW',
    operatingSystem: 'Web-based',
    applicationCategory: 'BusinessApplication',
    description: 'Creator CRM and business management platform for managing brand deals, invoices, expenses, and creator profit.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MOJO FLOW',
    url: 'https://mojoflow.in',
    logo: 'https://mojoflow.in/logo.png',
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-mojo-bg text-mojo-text selection:bg-mojo-violet selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
