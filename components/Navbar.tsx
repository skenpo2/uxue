'use client';

import { FocusEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { industries, services } from '@/lib/site';

const primary = [
  { href: '/solutions', label: 'Solutions' }, { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' }, { href: '/blog', label: 'Insights' }, { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);
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
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="UXUE home" onClick={closeMobile}>
          <Image src="/images/orange-logo.svg" alt="UXUE Company Ltd" width={132} height={64} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div {...dropdown('solutions')}>
            <Link href="/solutions" className={active('/solutions') ? 'is-active' : ''} onClick={() => setMenu(null)}><span>Solutions</span><span className="nav-dropdown__mark" aria-hidden="true" /></Link>
            <div className="nav-panel" aria-hidden={menu !== 'solutions'}>
              <div className="shell nav-panel__inner">
                <div className="nav-panel__intro"><strong>Integrated capabilities</strong><p>One coordinated approach across physical, digital and operational infrastructure.</p></div>
                <div className="nav-panel__links nav-panel__links--solutions">
                  {services.map((service) => <Link href={`/solutions/${service.slug}`} key={service.slug} onClick={() => setMenu(null)}><strong>{service.shortName}</strong><small>{service.summary}</small></Link>)}
                </div>
              </div>
            </div>
          </div>
          <div {...dropdown('industries')}>
            <Link href="/industries" className={active('/industries') ? 'is-active' : ''} onClick={() => setMenu(null)}><span>Industries</span><span className="nav-dropdown__mark" aria-hidden="true" /></Link>
            <div className="nav-panel" aria-hidden={menu !== 'industries'}>
              <div className="shell nav-panel__inner">
                <div className="nav-panel__intro"><strong>Operating environments</strong><p>Infrastructure shaped around the people, risks and continuity needs it serves.</p></div>
                <div className="nav-panel__links nav-panel__links--industries">
                  {industries.map((industry) => <Link href={`/industries/${industry.slug}`} key={industry.slug} onClick={() => setMenu(null)}><strong>{industry.name}</strong></Link>)}
                </div>
              </div>
            </div>
          </div>
          {primary.slice(2).map((item) => <Link key={item.href} href={item.href} className={active(item.href) ? 'is-active' : ''}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="button header-cta">Start a conversation</Link>
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
          <Link href="/contact" onClick={closeMobile} className="button button--orange">Start a conversation</Link>
        </nav>
      </div>
    </header>
  );
}
