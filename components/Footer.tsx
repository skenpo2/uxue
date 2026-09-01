import Image from 'next/image';
import Link from 'next/link';
import { industries, services, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__lead">
          <div><Image src="/images/orange-logo.svg" alt="UXUE Company Ltd" width={174} height={70} /><p>Technology-first security and ICT integration for organisations in Kenya and East Africa.</p></div>
          <p className="site-footer__statement">Protect. Connect. Automate.<br /><span>Infrastructure engineered as one system.</span></p>
        </div>
        <div className="site-footer__grid">
          <div><h2>Solutions</h2>{services.map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.shortName}</Link>)}</div>
          <div><h2>Industries</h2>{industries.slice(0, 6).map((item) => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}</div>
          <div><h2>Company</h2><Link href="/about">About UXUE</Link><Link href="/projects">Projects</Link><Link href="/blog">Insights</Link><Link href="/contact">Contact</Link><Link href="/sitemap.xml">Sitemap</Link></div>
          <address><h2>Talk to us</h2><span>{site.address[0]}<br />{site.address[1]}</span>{site.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>)}<a href={`mailto:${site.email}`}>{site.email}</a></address>
        </div>
        <div className="site-footer__base"><span>© {new Date().getFullYear()} UXUE Company Ltd</span><div><a href={site.social.x} target="_blank" rel="noreferrer">X / Twitter</a><a href={site.social.facebook} target="_blank" rel="noreferrer">Facebook</a></div></div>
      </div>
    </footer>
  );
}
