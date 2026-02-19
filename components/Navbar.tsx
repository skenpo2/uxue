'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const services = [
    {
      name: 'Physical Security',
      href: '/services/physical-security',
      desc: 'CCTV & Biometrics',
    },
    {
      name: 'Enterprise Networking',
      href: '/services/networking',
      desc: 'Fiber & Structured Cabling',
    },
    {
      name: 'Security Automation',
      href: '/services/automation',
      desc: 'Smart Gates & IoT',
    },
    {
      name: 'ICT Equipment',
      href: '/services/ict-equipment',
      desc: 'Servers & Hardware',
    },
    {
      name: 'Cyber Defense',
      href: '/services/cybersecurity',
      desc: 'Pen-Testing & Firewalls',
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* LOGO */}
          <Link
            href="/"
            className="relative flex items-center h-full w-24"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/uxue-logo.svg"
              alt="Uxue Company Ltd"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/" active={isActive('/')}>
              Home
            </NavLink>
            <NavLink href="/about" active={isActive('/about')}>
              About
            </NavLink>

            {/* SERVICES DROPDOWN */}
            <div className="relative group h-full flex items-center">
              <button
                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors
                ${
                  pathname.startsWith('/services')
                    ? 'text-blue-700'
                    : 'text-slate-600 group-hover:text-blue-700'
                }`}
              >
                Services
                <svg
                  className="w-3 h-3 transition-transform duration-200 group-hover:-rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-700"></div>
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-4 hover:bg-slate-50 border-b border-slate-50 last:border-0 group/item"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover/item:text-blue-700 uppercase tracking-wide">
                        {service.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-mono">
                        {service.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/projects" active={isActive('/projects')}>
              Projects
            </NavLink>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white z-40 overflow-y-auto border-t border-slate-100 shadow-inner">
          <div className="flex flex-col p-6 space-y-6 pb-20">
            <MobileLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileLink>

            {/* Mobile Services Section */}
            <div className="py-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                Our Services
              </div>
              <div className="space-y-4 pl-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    // This onClick handles the closing, so we don't need the useEffect
                    onClick={() => setIsMenuOpen(false)}
                    className="block group"
                  >
                    <div className="text-lg font-bold text-slate-800 group-hover:text-blue-700">
                      {s.name}
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      {s.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <MobileLink href="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </MobileLink>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Helper Components
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-bold uppercase tracking-wide transition-colors relative py-2
            ${active ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}
            ${
              active
                ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-700'
                : ''
            }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[20px] font-bold text-slate-900 tracking-tight hover:text-blue-700 block"
    >
      {children}
    </Link>
  );
}
