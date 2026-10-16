'use client';

import { FocusEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { industries, services, site } from '@/lib/site';

const primary = [
  { href: '/solutions', label: 'Solutions' }, { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' }, { href: '/blog', label: 'Insights' }, { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const close = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      setMenu(null);
    };
    window.addEventListener('keydown', close);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', close); };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dropdown = (key: string) => ({
    className: `nav-dropdown${menu === key ? ' is-open' : ''}`,
    onMouseEnter: () => setMenu(key),
    onMouseLeave: () => setMenu((current) => current === key ? null : current),
    onFocus: () => setMenu(key),
    onBlur: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenu(null);
    },
  });

  const closeMobile = () => { setOpen(false); setGroup(null); };

  const mobileGroup = (key: string, label: string, links: { href: string; label: string }[]) => (
    <div className={`mobile-nav__group${group === key ? ' is-open' : ''}`}>
      <button type="button" className="mobile-nav__head" aria-expanded={group === key} aria-controls={`mobile-${key}`} onClick={() => setGroup(group === key ? null : key)}>
        {label}
        <span className="nav-dropdown__mark" aria-hidden="true" />
      </button>
      <div className="mobile-nav__sub" id={`mobile-${key}`}>
        <div>{links.map((link) => <Link key={link.href} href={link.href} tabIndex={group === key ? undefined : -1} onClick={closeMobile}>{link.label}</Link>)}</div>
      </div>
    </div>
  );

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  return (
    // Banner and navbar stick together; once the page scrolls, the pair slides up by the banner's height so only the navbar stays pinned.
    <div className={`site-top${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-banner">
        <div className="shell">
          <p><strong>Security &amp; ICT integration</strong><span className="site-banner__extra"> across Kenya and East Africa</span></p>
          <span className="site-banner__divider" aria-hidden="true" />
          <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} aria-label={`Call UXUE on ${site.phones[0]}`}>
            {site.phones[0]}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </a>
        </div>
      </div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="shell site-header__inner">
          <Link href="/" className="brand" aria-label="UXUE home" onClick={closeMobile}>
            <Image src="/brand/uxue-logo.svg" alt="UXUE Company Ltd" width={132} height={34} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <div {...dropdown('solutions')}>
              <Link href="/solutions" className={active('/solutions') ? 'is-active' : ''} onClick={() => setMenu(null)}><span>Solutions</span><span className="nav-dropdown__mark" aria-hidden="true" /></Link>
              <div className="nav-panel" aria-hidden={menu !== 'solutions'}>
                <div className="nav-panel__links">
                  {services.map((service) => <Link href={`/solutions/${service.slug}`} key={service.slug} onClick={() => setMenu(null)}>{service.shortName}</Link>)}
                </div>
                <Link href="/solutions" className="nav-panel__all" onClick={() => setMenu(null)}>All solutions</Link>
              </div>
            </div>
            <div {...dropdown('industries')}>
              <Link href="/industries" className={active('/industries') ? 'is-active' : ''} onClick={() => setMenu(null)}><span>Industries</span><span className="nav-dropdown__mark" aria-hidden="true" /></Link>
              <div className="nav-panel nav-panel--wide" aria-hidden={menu !== 'industries'}>
                <div className="nav-panel__links">
                  {industries.map((industry) => <Link href={`/industries/${industry.slug}`} key={industry.slug} onClick={() => setMenu(null)}>{industry.name}</Link>)}
                </div>
                <Link href="/industries" className="nav-panel__all" onClick={() => setMenu(null)}>All industries</Link>
              </div>
            </div>
            {primary.slice(2).map((item) => <Link key={item.href} href={item.href} className={active(item.href) ? 'is-active' : ''}>{item.label}</Link>)}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button button--navy button--sm">Start a conversation</Link>
          </div>
          <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { setOpen(!open); setGroup(null); }}>
            <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
            <span className="menu-toggle__icon" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
        <div id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
          <nav className="shell" aria-label="Mobile navigation">
            {mobileGroup('solutions', 'Solutions', services.map((service) => ({ href: `/solutions/${service.slug}`, label: service.shortName })))}
            {mobileGroup('industries', 'Industries', industries.map((industry) => ({ href: `/industries/${industry.slug}`, label: industry.name })))}
            {primary.slice(2).map((item) => <Link key={item.href} href={item.href} onClick={closeMobile}>{item.label}</Link>)}
            <Link href="/contact" onClick={closeMobile} className="button button--navy">Start a conversation</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
