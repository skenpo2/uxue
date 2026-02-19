import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://uxue.co.ke'),
  title: {
    default: 'Uxue Company Ltd - Enterprise Security & ICT Solutions in Kenya',
    template: '%s | Uxue Company Ltd',
  },
  description:
    'Leading provider of enterprise security systems, networking solutions, cybersecurity, and ICT integration services in Kenya. Trusted by organizations across East Africa.',
  keywords: [
    'security systems Kenya',
    'CCTV installation',
    'enterprise networking',
    'cybersecurity Kenya',
    'ICT solutions',
    'access control',
    'structured cabling',
    'Nairobi security company',
  ],
  authors: [{ name: 'Uxue Company Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://uxue.co.ke',
    siteName: 'Uxue Company Ltd',
    title: 'Uxue Company Ltd - Enterprise Security & ICT Solutions',
    description:
      'Leading provider of enterprise security systems, networking solutions, and ICT integration services in Kenya.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Uxue Company Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uxue Company Ltd - Enterprise Security & ICT Solutions',
    description:
      'Leading provider of enterprise security systems, networking solutions, and ICT integration services in Kenya.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
