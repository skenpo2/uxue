import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Cybersecurity & Digital Protection',
  description:
    'Next-generation firewalls, penetration testing, vulnerability assessments, endpoint protection, and comprehensive cybersecurity solutions.',
};

export default function CybersecurityPage() {
  const solutions = [
    {
      name: 'Next-Generation Firewalls',
      description:
        'Advanced firewall solutions with deep packet inspection, intrusion prevention, and application-level filtering.',
    },
    {
      name: 'Cloud Security and Configuration',
      description:
        'Secure cloud infrastructure setup, configuration hardening, and ongoing security monitoring for cloud environments.',
    },
    {
      name: 'Penetration Testing',
      description:
        'Authorized security assessments simulating real-world attacks to identify vulnerabilities before they can be exploited.',
    },
    {
      name: 'Vulnerability Assessments',
      description:
        'Comprehensive scanning and analysis of systems, networks, and applications to identify security weaknesses.',
    },
    {
      name: 'Endpoint Protection',
      description:
        'Advanced endpoint security solutions protecting workstations, servers, and mobile devices from malware and threats.',
    },
    {
      name: 'Security Monitoring and Incident Response',
      description:
        '24/7 security monitoring with rapid incident detection, analysis, and coordinated response procedures.',
    },
    {
      name: 'AI-Based Threat Detection',
      description:
        'Machine learning systems identifying anomalous behavior and potential threats through pattern analysis.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Cybersecurity & Digital Protection"
        description="Advanced security solutions protecting digital assets and business operations"
      />

      <Section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6">Defense Against Digital Threats</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cybersecurity threats evolve constantly, requiring proactive defense
            strategies and continuous monitoring. We implement multilayered
            security architectures that protect networks, applications, and data
            from unauthorized access, malware, and sophisticated attacks. Our
            solutions combine proven security technologies with threat
            intelligence and rapid response capabilities.
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
          <h2 className="mb-6">Security Implementation</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-gray-900">Security Assessment</h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive evaluation of current security posture,
                identification of vulnerabilities, and risk analysis.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Architecture Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Security architecture design incorporating defense-in-depth
                principles, network segmentation, and access controls.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Solution Deployment</h4>
              <p className="text-gray-600 leading-relaxed">
                Professional implementation of firewalls, endpoint protection,
                monitoring systems, and security policies.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Testing and Validation</h4>
              <p className="text-gray-600 leading-relaxed">
                Security testing to verify effectiveness of controls and
                identify remaining vulnerabilities.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Ongoing Management</h4>
              <p className="text-gray-600 leading-relaxed">
                Continuous monitoring, threat intelligence updates, and regular
                security assessments.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
