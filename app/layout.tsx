import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AgentationGuard } from '@/components/AgentationGuard';
import { HappySeedsWatermark } from '@/components/HappySeedsWatermark';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';
import jsonMetadata from '../metadata.json';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://ceradz.vercel.app'),
  title: jsonMetadata.title,
  description: jsonMetadata.description,
  keywords: jsonMetadata.keywords,
  authors: [{ name: 'Cera' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Cera — Votre idée, mon code, votre succès en ligne',
    description: 'Sites vitrines, boutiques en ligne et solutions numériques sur mesure, conçus pas à pas avec vous, à Alger et partout en Algérie.',
    siteName: 'Cera',
    locale: 'fr_DZ',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cera — Solutions Digitales en Algérie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cera — Votre idée, mon code, votre succès en ligne',
    description: 'Sites vitrines, boutiques en ligne et solutions numériques sur mesure, conçus pas à pas avec vous, à Alger et partout en Algérie.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const introFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-intro',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body className={`antialiased ${introFont.variable}`}>
        {children}
        <Toaster position="top-center" richColors />
        {process.env.NODE_ENV === 'development' && <HappySeedsWatermark />}
        {process.env.NODE_ENV === 'development' && <AgentationGuard />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
