import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Physical Security',
  description:
    'AI-powered CCTV systems, access control, biometrics, intrusion detection, and comprehensive security.',
};

export default function PhysicalSecurityPage() {
  const solutions = [
    {
      name: 'AI-Powered CCTV',
      desc: 'High-resolution IP camera systems with intelligent video analytics and 24/7 recording.',
    },
    {
      name: 'Access Control',
      desc: 'Authentication systems including fingerprint, facial recognition, and management.',
    },
    {
      name: 'Alarm & Intrusion Systems',
      desc: 'Multi-zone systems with motion sensors, glass break detection, and notification.',
    },
    {
      name: 'Perimeter Protection',
      desc: 'Electric fencing, barrier systems, and integrated surveillance.',
    },
  ];

  const steps = [
    {
      title: 'Site Assessment',
      desc: 'Evaluation of premises, vulnerable areas, and operational requirements.',
    },
    {
      title: 'System Design',
      desc: 'Custom architecture integrating camera placement, access points, and alarm zones.',
    },
    {
      title: 'Professional Installation',
      desc: 'Deployment following industry standards with minimal disruption.',
    },
    {
      title: 'Training & Handover',
      desc: 'Comprehensive training for security personnel and system administrators.',
    },
  ];

  return (
    <div className="bg-white">
      <Section className="pt-32 pb-24 border-b border-slate-200">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-blue-600"></div>
                <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
                  Site Protection
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Physical Security.
              </h1>

              <div className="border-l-[3px] border-orange-500 pl-5 mb-6">
                <p className="text-lg text-slate-800 font-medium">
                  Protecting What Matters
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed font-light">
                Comprehensive security infrastructure protecting people, assets,
                and operations against modern physical threats. We design and
                implement security infrastructure that deters threats, detects
                incidents, and provides actionable intelligence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="border border-slate-200 bg-slate-50 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-3 h-3 bg-blue-600"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-slate-900 text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Implementation Approach
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
              We treat physical security as an integrated ecosystem. Our
              deployment ensures comprehensive coverage without creating
              operational bottlenecks.
            </p>

            <div className="relative h-64 md:h-80 w-full border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden group">
              <Image
                src="/images/phy-sec.jpg"
                alt="Integrated Security Infrastructure"
                fill
                className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-75 group-hover:mix-blend-normal transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="relative pt-4 lg:pt-0">
            <div className="absolute left-[27px] top-0 bottom-4 w-px bg-slate-800"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-20 group">
                  <div className="absolute left-0 top-0 w-14 h-14 bg-slate-950 border-2 border-slate-700 flex items-center justify-center font-bold text-slate-500 font-mono group-hover:border-orange-500 transition-colors z-10">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
