import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Networking & Connectivity',
  description:
    'Structured cabling, fiber installation, LAN/WAN design, wireless networks, data center infrastructure.',
};

export default function NetworkingPage() {
  const solutions = [
    {
      name: 'Structured Cabling & Fiber',
      desc: 'Cat6/Cat6A copper cabling and single/multi-mode fiber optic infrastructure.',
    },
    {
      name: 'LAN, WAN & Wireless Solutions',
      desc: 'Enterprise-grade local and wide area network design with secure wireless coverage.',
    },
    {
      name: 'Server Rooms & Data Centers',
      desc: 'Complete data center infrastructure including racks, cooling, and power distribution.',
    },
    {
      name: 'Network Hardware',
      desc: 'Enterprise routers, switches, firewalls, and load balancers with optimized configurations.',
    },
    {
      name: 'VoIP Communication Systems',
      desc: 'IP-based telephony solutions with call management and unified communications.',
    },
    {
      name: 'Satellite Connectivity',
      desc: 'High-speed satellite connectivity (Starlink) for remote locations and backup services.',
    },
  ];

  const designSteps = [
    {
      title: 'Requirements Analysis',
      desc: 'Assessment of bandwidth requirements, user count, applications, and growth.',
    },
    {
      title: 'Architecture Design',
      desc: 'Network topology design with redundancy planning, VLAN segmentation, and security zones.',
    },
    {
      title: 'Infrastructure Deployment',
      desc: 'Professional installation of cabling, hardware mounting, and equipment configuration.',
    },
    {
      title: 'Testing & Certification',
      desc: 'Comprehensive testing of all network segments with performance verification documentation.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Enterprise Networking"
        description="Reliable network infrastructure powering business operations"
      />

      {/* SOLUTIONS ASYMMETRIC GRID */}
      <Section className="py-24 border-b border-slate-200">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="h-1 w-12 bg-orange-500 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Infrastructure That Performs
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Modern businesses depend on reliable network infrastructure for
                daily operations. We design and implement enterprise networks
                built for performance, scalability, and resilience.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 p-8"
              >
                <div className="w-8 h-8 bg-blue-100 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 bg-blue-600"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NETWORK DESIGN PROCESS */}
      <Section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Network Design Process
            </h2>
            <p className="text-lg text-slate-600">
              A rigorous engineering approach to connectivity.
            </p>
          </div>

          <div className="mb-16 bg-white p-4 border border-slate-200 shadow-sm"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {designSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-black text-slate-200 mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
