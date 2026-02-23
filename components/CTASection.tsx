import Link from 'next/link';
import Section from '@/components/Section';

export default function CTASection() {
  return (
    // Removed the noisy grid and radial gradients. Just a clean, solid corporate blue.
    <div className="bg-blue-900 py-24 border-t border-blue-950">
      <Section>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Side: Strategic Message */}
          <div className="max-w-2xl flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {/* Matched the exact color blocking from your mockup */}
              <span className="text-orange-500 block mb-2">
                READY TO SECURE
              </span>
              <span className="text-white block">YOUR INFRASTRUCTURE?</span>
            </h2>

            {/* Matched the orange left border and padding */}
            <div className="border-l-[3px] border-orange-500 pl-6">
              <p className="text-blue-100 font-light leading-relaxed">
                Schedule a technical consultation. We audit, design, and deploy
                integrated security systems tailored to your specific
                operational risks.
              </p>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            {/* Primary Button: Transparent with Orange Border */}
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-transparent border border-orange-500 text-white font-medium text-sm  hover:bg-orange-500 transition-colors text-center tracking-wide"
            >
              CONTACT US
            </Link>

            {/* Secondary Button: Transparent with Blue Border */}
            <a
              href="tel:+254718074080"
              className="px-8 py-3.5 bg-transparent border border-blue-500 text-white font-medium text-sm  hover:bg-blue-600 hover:border-blue-600 transition-colors text-center tracking-wide"
            >
              CALL DIRECT
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
