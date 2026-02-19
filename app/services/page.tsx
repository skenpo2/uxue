import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive security and ICT solutions including surveillance, networking, automation, cybersecurity, and enterprise technology supply.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Smart Physical Security & Surveillance',
      slug: 'physical-security',
      description:
        'Comprehensive physical security infrastructure including AI-powered CCTV systems, access control, biometric authentication, intrusion detection, perimeter protection, and professional guard services.',
      capabilities: [
        'AI-powered CCTV and surveillance systems',
        'Access control and biometric solutions',
        'Alarm and intrusion detection',
        'Guard services and patrol monitoring',
        'Perimeter protection and electric fencing',
        'Security audits and risk assessments',
      ],
    },
    {
      title: 'Enterprise Networking & Connectivity',
      slug: 'networking',
      description:
        'Complete network infrastructure design and implementation for enterprise environments. From structured cabling to advanced routing and wireless systems.',
      capabilities: [
        'Structured cabling and fiber optic installation',
        'LAN, WAN and wireless network design',
        'Server rooms and data center infrastructure',
        'Network hardware deployment and configuration',
        'VoIP communication systems',
        'Starlink satellite internet deployment',
      ],
    },
    {
      title: 'Security Automation & Smart Technologies',
      slug: 'automation',
      description:
        'Integrated automation systems that enhance security operations and provide real-time monitoring and control capabilities.',
      capabilities: [
        'Smart access and visitor management',
        'IoT monitoring dashboards',
        'Automated gates and barrier systems',
        'Remote monitoring platforms',
        'Fire detection and response systems',
        'Integrated security management platforms',
      ],
    },
    {
      title: 'ICT Equipment & Business Technology Supply',
      slug: 'ict-equipment',
      description:
        'Enterprise-grade technology procurement and supply services covering complete business technology requirements.',
      capabilities: [
        'PCs, laptops and workstations',
        'Servers and storage infrastructure',
        'Projectors and conference equipment',
        'Printers and peripherals',
        'UPS and power backup systems',
        'Networking hardware and software licensing',
      ],
    },
    {
      title: 'Cybersecurity & Digital Protection',
      slug: 'cybersecurity',
      description:
        'Advanced cybersecurity solutions protecting digital assets and ensuring business continuity against evolving threats.',
      capabilities: [
        'Next-generation firewall deployment',
        'Cloud security and configuration',
        'Penetration testing and vulnerability assessment',
        'Endpoint protection and management',
        'Security monitoring and incident response',
        'AI-based threat detection systems',
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Integrated security and technology solutions for enterprise operations"
      />

      <Section className="py-24">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                index !== 0 ? 'pt-24 border-t border-gray-200' : ''
              }`}
            >
              <div>
                <h2 className="mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block px-8 py-4 bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div>
                <h4 className="mb-4 text-gray-900">Capabilities</h4>
                <ul className="space-y-3">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-800 mr-3 mt-1">•</span>
                      <span className="text-gray-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
