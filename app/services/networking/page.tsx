import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Enterprise Networking & Connectivity',
  description:
    'Structured cabling, fiber installation, LAN/WAN design, wireless networks, data center infrastructure, and complete enterprise connectivity solutions.',
};

export default function NetworkingPage() {
  const solutions = [
    {
      name: 'Structured Cabling and Fiber Installation',
      description:
        'Cat6/Cat6A copper cabling and single/multi-mode fiber optic infrastructure for high-performance networks.',
    },
    {
      name: 'LAN, WAN and Wireless Solutions',
      description:
        'Enterprise-grade local and wide area network design with secure wireless coverage and seamless roaming.',
    },
    {
      name: 'Server Rooms and Data Centers',
      description:
        'Complete data center infrastructure including racks, cooling, power distribution, and environmental monitoring.',
    },
    {
      name: 'Network Hardware and Configuration',
      description:
        'Enterprise routers, switches, firewalls, and load balancers with optimized configurations.',
    },
    {
      name: 'VoIP Communication Systems',
      description:
        'IP-based telephony solutions with call management, conferencing, and unified communications.',
    },
    {
      name: 'Starlink Satellite Internet',
      description:
        'High-speed satellite connectivity for remote locations and backup internet services.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Enterprise Networking & Connectivity"
        description="Reliable network infrastructure powering business operations"
      />

      <Section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6">Infrastructure That Performs</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Modern businesses depend on reliable network infrastructure for
            daily operations, collaboration, and service delivery. We design and
            implement enterprise networks built for performance, scalability,
            and resilience. From structured cabling foundations to advanced
            routing and wireless systems, our solutions provide the connectivity
            businesses need to operate efficiently.
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
          <h2 className="mb-6">Network Design Process</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-gray-900">Requirements Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                Assessment of bandwidth requirements, user count, applications,
                and growth projections.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Architecture Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Network topology design with redundancy planning, VLAN
                segmentation, and security zones.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Infrastructure Deployment</h4>
              <p className="text-gray-600 leading-relaxed">
                Professional installation of cabling, hardware mounting, and
                equipment configuration.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Testing and Certification</h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive testing of all network segments with performance
                verification and certification documentation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
