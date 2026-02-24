import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Networking',
  description:
    'Structured cabling, fiber installation, LAN/WAN design, wireless networks, and data center infrastructure.',
};

export default function NetworkingPage() {
  const solutions = [
    {
      name: 'Structured Cabling & Fiber',
      desc: 'Cat6/Cat6A copper cabling and single/multi-mode fiber optic infrastructure.',
    },
    {
      name: 'LAN, WAN & Wireless',
      desc: 'Enterprise-grade local and wide area network design with secure wireless coverage.',
    },
    {
      name: 'Server Rooms & Data Centers',
      desc: 'Complete infrastructure including racks, cooling, and power distribution.',
    },
    {
      name: 'Network Hardware',
      desc: 'Enterprise routers, switches, firewalls, and load balancers.',
    },
  ];

  const steps = [
    {
      title: 'Requirements Analysis',
      desc: 'Assessment of bandwidth requirements and growth.',
    },
    {
      title: 'Architecture Design',
      desc: 'Network topology design with redundancy planning.',
    },
    {
      title: 'Infrastructure Deployment',
      desc: 'Installation of cabling, hardware, and configuration.',
    },
    {
      title: 'Testing & Certification',
      desc: 'Comprehensive testing and performance verification.',
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
                  Infrastructure
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Enterprise Networking.
              </h1>

              <div className="border-l-[3px] border-orange-500 pl-5 mb-6">
                <p className="text-lg text-slate-800 font-medium">
                  Infrastructure That Performs
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed font-light">
                Modern businesses depend on reliable network infrastructure. We
                design and implement enterprise networks built to handle heavy
                operational loads without interruption, designed for extreme
                performance, scalability, and resilience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 p-8 hover:shadow-md transition-shadow"
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

      <Section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              Network Design Process
            </h2>
            <p className="text-lg text-slate-600 font-light">
              A rigorous engineering approach to connectivity.
            </p>
          </div>

          <div className="relative h-64 md:h-96 w-full border border-slate-300 bg-slate-950 shadow-md overflow-hidden group mb-16">
            <Image
              src="/images/top.jpg"
              alt="Network Infrastructure Topology"
              fill
              className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-90 group-hover:mix-blend-normal transition-all duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white border border-slate-200 p-6 hover:border-blue-300 transition-colors"
              >
                <div className="text-4xl font-black text-slate-100 mb-4">
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
