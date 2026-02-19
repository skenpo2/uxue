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

  return (
    <>
      <PageHeader
        title="Security Automation & Smart Technologies"
        description="Intelligent systems enhancing security operations and response capabilities"
      />

      <Section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6">Automation That Responds</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Security automation reduces response times, eliminates manual
            processes, and provides security teams with actionable intelligence.
            Our integrated systems connect surveillance, access control, alarms,
            and environmental sensors into unified platforms that monitor
            continuously, alert instantly, and enable rapid response to security
            events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="border border-gray-200 p-8">
              <h3 className="mb-4">{solution.name}</h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="mb-6">Integration Capabilities</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our automation platforms integrate with existing security
            infrastructure and business systems to create comprehensive
            monitoring and response capabilities.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-gray-900">System Integration</h4>
              <p className="text-gray-600 leading-relaxed">
                Connect CCTV, access control, alarms, fire systems, and building
                automation into single management platforms.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Event Correlation</h4>
              <p className="text-gray-600 leading-relaxed">
                Automated analysis of events across multiple systems to identify
                patterns and potential threats.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Automated Response</h4>
              <p className="text-gray-600 leading-relaxed">
                Trigger predefined actions based on specific events, reducing
                manual intervention and response times.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Reporting and Analytics</h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive reporting on security events, system performance,
                and operational metrics.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
