import Image from 'next/image';
import Link from 'next/link';
import { services, site } from '@/lib/site';

// Official brand marks (Simple Icons), drawn in currentColor.
const socials = [
  { key: 'x', label: 'UXUE on X', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
  { key: 'facebook', label: 'UXUE on Facebook', path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z' },
] as const;

const company = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__grid">
          <div className="site-footer__intro">
            <Link href="/" className="site-footer__brand" aria-label="UXUE home">
              <Image src="/images/orange-logo.svg" alt="UXUE Company Ltd" width={118} height={57} />
            </Link>
            <p>Security and technology infrastructure, integrated for the way your organisation works.</p>
          </div>
          <nav aria-label="Footer solutions"><h2>Solutions</h2>{services.map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.shortName}</Link>)}</nav>
          <nav aria-label="Footer company"><h2>Company</h2>{company.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        </div>
        <div className="site-footer__base">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="site-footer__social">
            {socials.map((item) => (
              <a key={item.key} href={site.social[item.key]} target="_blank" rel="noreferrer" aria-label={item.label}>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d={item.path} fill="currentColor" /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
