import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Security Automation & Smart Technologies',
  description:
    'IoT monitoring, smart access systems, automated barriers, fire detection, and integrated security automation platforms.',
};

export default function AutomationPage() {
  const solutions = [
    {
      name: 'Smart Access and Visitor Systems',
      description:
        'Automated visitor registration, digital badges, and intelligent access control with real-time logging.',
    },
    {
      name: 'IoT Monitoring Dashboards',
      description:
        'Centralized monitoring platforms providing real-time visibility into security systems, environmental sensors, and operational status.',
    },
    {
      name: 'Automated Gates and Barriers',
      description:
        'Vehicle access automation with license plate recognition, RFID integration, and remote operation capabilities.',
    },
    {
      name: 'Remote Monitoring Platforms',
      description:
        'Cloud-based monitoring solutions enabling security teams to manage multiple sites from central control rooms.',
    },
    {
      name: 'Fire Detection and Response',
      description:
        'Automated fire detection systems with immediate notification, alarm activation, and integration with suppression systems.',
    },
  ];

  const integrations = [
    {
      title: 'System Integration',
      desc: 'Connect CCTV, access control, alarms, fire systems, and building automation into single management platforms.',
    },
    {
      title: 'Event Correlation',
      desc: 'Automated analysis of events across multiple systems to identify patterns and potential threats.',
    },
    {
      title: 'Automated Response',
      desc: 'Trigger predefined actions based on specific events, reducing manual intervention and response times.',
    },
    {
      title: 'Reporting and Analytics',
      desc: 'Comprehensive reporting on security events, system performance, and operational metrics.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Security Automation & Smart Technologies"
        description="Intelligent systems enhancing security operations and response capabilities"
      />

      {/* 1. MAIN AUTOMATION OVERVIEW */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Section Introduction */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="h-1 w-12 bg-orange-500 mb-6"></div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Automation That Responds
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Security automation reduces response times, eliminates manual
                processes, and provides security teams with actionable
                intelligence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our integrated systems connect surveillance, access control,
                alarms, and environmental sensors into unified platforms that
                monitor continuously, alert instantly, and enable rapid response
                to security events.
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 p-8 hover:border-blue-200 transition-colors"
                >
                  {/* Simple structural icon/accent */}
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-blue-600"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {solution.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 2. INTEGRATION CAPABILITIES (Dark Corporate Segment) */}
      <Section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Integration Capabilities
            </h2>
            <div className="h-1 w-12 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
              Our automation platforms integrate seamlessly with existing
              security infrastructure and business systems to create
              comprehensive monitoring and response ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 border border-slate-700 bg-slate-800/50"
              >
                <div className="flex-shrink-0 mt-1">
                  {/* Using Orange for action-oriented integration features */}
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
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
