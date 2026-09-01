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

  // Close any open dropdown once a client-side navigation lands (covers
  // back/forward too, where no link onClick fires).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenu(null);
  }

  const dropdown = (key: string, extra = '') => ({
    className: `nav-dropdown${menu === key ? ' is-open' : ''}${extra ? ` ${extra}` : ''}`,
    onMouseEnter: () => setMenu(key),
    onMouseLeave: () => setMenu((current) => (current === key ? null : current)),
    onFocus: () => setMenu(key),
    onBlur: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setMenu(null);
    },
  });

  const active = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="UXUE home" onClick={() => setOpen(false)}>
          <Image src="/images/uxue-logo.svg" alt="UXUE Company Ltd" width={142} height={56} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div {...dropdown('solutions')}>
            <Link href="/solutions" className={active('/solutions') ? 'is-active' : ''} onClick={() => setMenu(null)}>Solutions</Link>
            <div className="nav-mega">
              <p>Integrated capabilities</p>
              <div>{services.map((service, index) => <Link href={`/solutions/${service.slug}`} key={service.slug} onClick={() => setMenu(null)}><span>0{index + 1}</span><strong>{service.shortName}</strong><small>{service.summary}</small></Link>)}</div>
            </div>
          </div>
          <div {...dropdown('industries', 'nav-dropdown--industries')}>
            <Link href="/industries" className={active('/industries') ? 'is-active' : ''} onClick={() => setMenu(null)}>Industries</Link>
            <div className="nav-mega nav-mega--small"><p>Operating contexts</p><div>{industries.map((industry) => <Link href={`/industries/${industry.slug}`} key={industry.slug} onClick={() => setMenu(null)}><strong>{industry.name}</strong></Link>)}</div></div>
          </div>
          {primary.slice(2).map((item) => <Link key={item.href} href={item.href} className={active(item.href) ? 'is-active' : ''}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="button button--dark header-cta">Start a conversation</Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span><span /><span />
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="shell" aria-label="Mobile navigation">
          {primary.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}
          <div className="mobile-nav__services">{services.map((service) => <Link key={service.slug} href={`/solutions/${service.slug}`} onClick={() => setOpen(false)}>{service.shortName}</Link>)}</div>
          <Link href="/contact" onClick={() => setOpen(false)} className="button button--orange">Start a conversation</Link>
        </nav>
      </div>
    </header>
  );
}
