import Link from 'next/link';
import Section from '@/components/Section';

export default function CTASection() {
  return (
    <div className="relative bg-blue-900 py-24 border-t border-blue-800 overflow-hidden">
      {/* 1. THE TECHNICAL GRID LAYER 
          - Creates a 40px by 40px grid using 5% opacity white lines.
          - Gives it that 'Blueprint/Schematic' look on top of the blue.
      */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* 2. RADIAL VIGNETTE 
          - Darkens the edges slightly to focus attention on the center content.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(30,58,138,0.5)_100%)] pointer-events-none"></div>

      <Section className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Left Side: Strategic Message */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              READY TO SECURE <br />
              <span className="text-blue-200">YOUR INFRASTRUCTURE?</span>
            </h2>

            <p className="text-lg text-blue-100 font-light leading-relaxed border-l-2 border-blue-500 pl-6">
              Schedule a technical consultation. We audit, design, and deploy
              integrated security systems tailored to your specific operational
              risks.
            </p>
          </div>

          {/* Right Side: Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-blue-900 font-bold uppercase tracking-widest text-sm text-center hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Us
            </Link>

            {/* Secondary Button */}
            <a
              href="tel:+254718074080"
              className="px-10 py-4 bg-transparent border border-blue-400 text-blue-100 font-bold uppercase tracking-widest text-sm text-center hover:bg-white hover:text-blue-900 transition-colors"
            >
              Call Direct
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
