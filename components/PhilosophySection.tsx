import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';

export default function PhilosophySection() {
  return (
    <Section className="py-24 bg-white relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full bg-slate-100 order-last md:order-first group">
          <Image
            src="/images/focus.jpg"
            alt="Uxue Field Engineering"
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          <div className="absolute top-0 right-0 p-8 z-10 pointer-events-none">
            <div className="w-16 h-16 border-t-4 border-r-4 border-blue-600 opacity-80"></div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 z-10 pointer-events-none">
            <div className="w-16 h-16 border-b-4 border-l-4 border-slate-900 opacity-80"></div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
        </div>

        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-blue-600"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Strategic Focus
            </span>
          </div>

          <h2 className="mb-10 text-4xl md:text-5xl font-bold leading-none text-slate-900 tracking-tight">
            BUILT FOR THE <br />
            <span className="text-slate-400">AFRICAN ENTERPRISE.</span>
          </h2>

          <div className="space-y-12">
            <div className="group">
              <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600"></span>
                Technology-Driven Innovation
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed font-light pl-5 border-l-2 border-slate-100">
                Pure technology-driven solutions without traditional security
                services. We focus on cutting-edge implementation to solve
                complex business needs.
              </p>
            </div>

            <div className="group">
              <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600"></span>
                Regional Expertise
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed font-light pl-5 border-l-2 border-slate-100">
                Deep understanding of the Kenyan and East African business
                environment. We navigate local regulations to deliver scalable,
                compliant solutions.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/about"
              className="inline-block border-b-2 border-slate-200 pb-1 text-slate-900 font-bold uppercase tracking-widest text-xs hover:text-blue-700 hover:border-blue-700 transition-all"
            >
              Read Corporate Profile
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
