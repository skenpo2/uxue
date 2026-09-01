import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

const font = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'UXUE — Enterprise Security & ICT Infrastructure', template: '%s | UXUE' },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd data={[
          { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, logo: `${site.url}/images/uxue-logo.svg`, email: site.email, telephone: site.phones[0], address: { '@type': 'PostalAddress', postOfficeBoxNumber: site.poBox, addressLocality: site.city, addressCountry: 'KE' }, sameAs: [site.social.x, site.social.facebook] },
          { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url, description: site.description },
        ]} />
      </body>
    </html>
  );
}
