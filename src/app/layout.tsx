import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Memories Made to Last',
    template: '%s | Memories Made to Last',
  },
  description:
    'Warm, professional craft for life’s biggest moments — handmade keepsakes and photo work.',
  keywords: ['keepsakes', 'photo gifts', 'wedding keepsakes', 'business gifts'],
  metadataBase: new URL('https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Memories Made to Last',
    description:
      'Warm, professional craft for life’s biggest moments — handmade keepsakes and photo work.',
    type: 'website',
    images: [{ url: '/images/hero.svg', width: 1200, height: 630, alt: 'Memories Made to Last' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memories Made to Last',
    description:
      'Warm, professional craft for life’s biggest moments — handmade keepsakes and photo work.',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
