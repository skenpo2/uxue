import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';

export default function PhilosophySection() {
  return (
    <Section className="py-24 bg-white relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE CONTAINER */}
        <div className="relative h-[600px] w-full bg-slate-100 order-last md:order-first group overflow-hidden">
          <Image
            src="/images/power.jpg"
            alt="Uxue Field Engineering"
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Top Right Decorative Corner - Changed to Orange */}
          <div className="absolute top-0 right-0 p-8 z-10 pointer-events-none">
            <div className="w-16 h-16 border-t-4 border-r-4 border-orange-500 opacity-80"></div>
          </div>

          {/* Bottom Left Decorative Corner - Changed to Orange */}
          <div className="absolute bottom-0 left-0 p-8 z-10 pointer-events-none">
            <div className="w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-80"></div>
          </div>

          {/* Gradient Overlay for better text contrast if needed later */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
        </div>

        {/* TEXT CONTENT (Kept the previous orange accents) */}
        <div className="flex flex-col justify-center h-full">
          {/* Eyebrow / Category */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-orange-500"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Strategic Focus
            </span>
          </div>

          <h2 className="mb-10 text-4xl md:text-5xl font-bold leading-none text-slate-900 tracking-tight">
            BUILT FOR THE <br />
            <span className="text-slate-400">AFRICAN ENTERPRISE.</span>
          </h2>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="group cursor-default">
              <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 shadow-sm transition-transform duration-300 group-hover:scale-150"></span>
                Technology-Driven Innovation
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed font-light pl-5 border-l-2 border-slate-100 transition-colors duration-300 group-hover:border-orange-300">
                Pure technology-driven solutions without traditional security
                services. We focus on cutting-edge implementation to solve
                complex business needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group cursor-default">
              <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 shadow-sm transition-transform duration-300 group-hover:scale-150"></span>
                Regional Expertise
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed font-light pl-5 border-l-2 border-slate-100 transition-colors duration-300 group-hover:border-orange-300">
                Deep understanding of the Kenyan and East African business
                environment. We navigate local regulations to deliver scalable,
                compliant solutions.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <Link
              href="/about"
              className="inline-block border-b-2 border-slate-200 pb-1 text-slate-900 font-bold uppercase tracking-widest text-xs hover:text-orange-600 hover:border-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4 rounded-sm"
            >
              Read Corporate Profile
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
