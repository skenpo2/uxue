import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Smart Physical Security & Surveillance',
  description:
    'AI-powered CCTV systems, access control, biometrics, intrusion detection, and comprehensive physical security.',
};

export default function PhysicalSecurityPage() {
  const solutions = [
    {
      name: 'AI-Powered CCTV',
      desc: 'High-resolution IP camera systems with intelligent video analytics, facial recognition, and 24/7 recording.',
    },
    {
      name: 'Access Control & Biometrics',
      desc: 'Authentication systems including fingerprint, facial recognition, and centralized access management.',
    },
    {
      name: 'Alarm & Intrusion Systems',
      desc: 'Multi-zone alarm systems with motion sensors, glass break detection, and immediate notification.',
    },
    {
      name: 'Guard Services & Patrol',
      desc: 'Professional security personnel deployment with GPS tracking and checkpoint monitoring.',
    },
    {
      name: 'Perimeter Protection',
      desc: 'Electric fencing, barrier systems, motion detection sensors, and integrated surveillance.',
    },
    {
      name: 'Security Audits',
      desc: 'Comprehensive security evaluations identifying vulnerabilities and recommending mitigation.',
    },
  ];

  const approachSteps = [
    {
      title: 'Site Assessment',
      desc: 'Detailed evaluation of premises, vulnerable areas, and operational requirements.',
    },
    {
      title: 'System Design',
      desc: 'Custom architecture integrating camera placement, access points, and alarm zones.',
    },
    {
      title: 'Professional Installation',
      desc: 'Certified technicians deploy equipment following industry standards with minimal disruption.',
    },
    {
      title: 'Training & Handover',
      desc: 'Comprehensive training for security personnel and system administrators.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Physical Security & Surveillance"
        description="Security infrastructure protecting people, assets, and operations"
      />

      {/* TACTICAL SOLUTIONS GRID */}
      <Section className="py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-orange-500"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Site Protection
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            Protecting What Matters
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our physical security solutions combine proven security principles
            with modern technology. From perimeter defense to internal
            monitoring, we design and implement security infrastructure that
            deters threats, detects incidents, and provides actionable
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-3 h-3 bg-blue-600"></div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  SEC.0{index + 1}
                </span>
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
      </Section>

      {/* IMPLEMENTATION APPROACH (Pipeline) */}
      <Section className="py-24 bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              Implementation Approach
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We treat physical security as an integrated ecosystem, not just
              isolated hardware. Our deployment ensures comprehensive coverage
              without creating operational bottlenecks.
            </p>
            <div className="border border-slate-200 bg-white p-4 shadow-sm"></div>
          </div>

          <div className="relative pt-4">
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-300"></div>
            <div className="space-y-12">
              {approachSteps.map((step, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 top-0 w-14 h-14 bg-white border-2 border-slate-300 flex items-center justify-center font-bold text-slate-500 font-mono z-10">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
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
