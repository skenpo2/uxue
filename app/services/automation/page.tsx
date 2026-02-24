import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Security Automation',
  description:
    'IoT monitoring, smart access systems, automated barriers, fire detection, and integrated platforms.',
};

export default function AutomationPage() {
  const solutions = [
    {
      name: 'Smart Access & Visitor Systems',
      description:
        'Automated visitor registration, digital badges, and intelligent access control with real-time logging.',
    },
    {
      name: 'IoT Monitoring Dashboards',
      description:
        'Centralized platforms providing real-time visibility into security systems and environmental sensors.',
    },
    {
      name: 'Automated Gates & Barriers',
      description:
        'Vehicle access automation with license plate recognition and RFID integration.',
    },
    {
      name: 'Remote Monitoring Platforms',
      description:
        'Cloud-based monitoring solutions enabling management of multiple sites from central control rooms.',
    },
  ];

  const integrations = [
    {
      title: 'System Integration',
      desc: 'Connect CCTV, access control, and fire systems into a single management platform.',
    },
    {
      title: 'Event Correlation',
      desc: 'Automated analysis of events across multiple systems to identify potential threats.',
    },
    {
      title: 'Automated Response',
      desc: 'Trigger predefined actions based on specific events, reducing manual intervention.',
    },
    {
      title: 'Reporting & Analytics',
      desc: 'Comprehensive reporting on security events and operational metrics.',
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
                  Smart Systems
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Security Automation.
              </h1>

              <div className="border-l-[3px] border-orange-500 pl-5 mb-6">
                <p className="text-lg text-slate-800 font-medium">
                  Automation That Responds
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed font-light">
                Intelligent systems enhancing security operations, reducing
                response times, and providing actionable intelligence. Our
                integrated systems connect surveillance, access control, alarms,
                and environmental sensors into unified platforms that monitor
                continuously and alert instantly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-200 transition-colors"
              >
                <div className="w-3 h-3 bg-blue-600 mb-6"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Integration Capabilities
            </h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Our platforms integrate seamlessly with existing infrastructure to
              create comprehensive ecosystems.
            </p>
          </div>

          <div className="relative h-64 md:h-96 w-full border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden group mb-16">
            <Image
              src="/images/smar-au.jpg"
              alt="Security Automation and IoT Architecture"
              fill
              className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 border border-slate-700 bg-slate-950/50 hover:border-slate-500 transition-colors group"
              >
                <div className="w-2 h-2 bg-orange-500 mt-1.5 shrink-0 group-hover:bg-blue-500 transition-colors"></div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
