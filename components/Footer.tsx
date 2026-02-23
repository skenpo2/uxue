import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Changed to a 4-column grid to accommodate the Brand/Social column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Socials */}
          <div className="lg:pr-8">
            {/* You can replace this text with your <Image /> logo if you have a dark-mode/white version */}
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                UXUE <span className="text-orange-500">COMPANY.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Technology-first security and ICT integration company. We empower
              businesses through advanced infrastructure, intelligent
              automation, and seamless integration.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/SystemsUxue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="Follow us on X (Twitter)"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.078z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556206979247"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li>
                <Link
                  href="/services/physical-security"
                  className="hover:text-orange-500 transition-colors"
                >
                  Physical Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/networking"
                  className="hover:text-orange-500 transition-colors"
                >
                  Enterprise Networking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ict-equipment"
                  className="hover:text-orange-500 transition-colors"
                >
                  ICT Equipments
                </Link>
              </li>

              <li>
                <Link
                  href="/services/cybersecurity"
                  className="hover:text-orange-500 transition-colors"
                >
                  Cyber Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation"
                  className="hover:text-orange-500 transition-colors"
                >
                  Security Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Uxue
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Contact Information
            </h4>
            <div className="text-sm text-slate-400 space-y-6">
              <div className="flex gap-3">
                <span className="text-orange-500 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p>P.O BOX 22729-00505</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <p>+254 718 074 080</p>
                  <p>+254 726 132 035</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-500 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <a
                  href="mailto:uxuelimitedcompany@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  uxuelimitedcompany@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Uxue Company Ltd. All rights reserved.
          </p>
          <div className="text-xs text-slate-600 font-mono">
            SECURE. CONNECT. AUTOMATE.
          </div>
        </div>
      </div>
    </footer>
  );
}
