import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { AgentationGuard } from '@/components/AgentationGuard';
import { HappySeedsWatermark } from '@/components/HappySeedsWatermark';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';
import jsonMetadata from '../metadata.json';

export const metadata: Metadata = jsonMetadata;

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
        <HappySeedsWatermark />
        <AgentationGuard />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
