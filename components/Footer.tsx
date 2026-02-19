import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Changed grid-cols-4 to grid-cols-3 since we removed the brand column */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li>
                <Link
                  href="/services/physical-security"
                  className="hover:text-white transition-colors"
                >
                  Physical Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/networking"
                  className="hover:text-white transition-colors"
                >
                  Enterprise Networking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="hover:text-white transition-colors"
                >
                  Cyber Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation"
                  className="hover:text-white transition-colors"
                >
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Uxue
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
              Contact Information
            </h4>
            <div className="text-sm text-slate-400 space-y-4">
              <div>
                <span className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Address
                </span>
                <p>P.O BOX 22729-00505</p>
                <p>Nairobi, Kenya</p>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Phone
                </span>
                <p>+254 718 074 080</p>
                <p>+254 726 132 035</p>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Email
                </span>
                <a
                  href="mailto:uxuelimitedcompany@gmail.com"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  uxuelimitedcompany@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Uxue Company Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
