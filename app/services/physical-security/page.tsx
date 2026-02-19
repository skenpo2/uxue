import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Smart Physical Security & Surveillance',
  description:
    'AI-powered CCTV systems, access control, biometrics, intrusion detection, and comprehensive physical security solutions for enterprise environments.',
};

export default function PhysicalSecurityPage() {
  const solutions = [
    {
      name: 'AI-Powered CCTV and Surveillance',
      description:
        'High-resolution IP camera systems with intelligent video analytics, facial recognition, motion detection, and 24/7 recording capabilities.',
    },
    {
      name: 'Access Control and Biometrics',
      description:
        'Advanced authentication systems including fingerprint, facial recognition, card readers, and centralized access management platforms.',
    },
    {
      name: 'Alarm and Intrusion Systems',
      description:
        'Multi-zone alarm systems with motion sensors, glass break detection, and immediate notification protocols.',
    },
    {
      name: 'Guard Services and Patrol Monitoring',
      description:
        'Professional security personnel deployment with GPS tracking, checkpoint monitoring, and incident reporting systems.',
    },
    {
      name: 'Perimeter Protection',
      description:
        'Electric fencing, barrier systems, motion detection sensors, and integrated perimeter surveillance solutions.',
    },
    {
      name: 'Security Audits and Risk Assessments',
      description:
        'Comprehensive security evaluations identifying vulnerabilities and recommending mitigation strategies.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Smart Physical Security & Surveillance"
        description="Comprehensive security infrastructure protecting people, assets, and operations"
      />

      <Section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6">Protecting What Matters</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our physical security solutions combine proven security principles
            with modern technology to create comprehensive protection systems.
            From perimeter defense to internal monitoring, we design and
            implement security infrastructure that deters threats, detects
            incidents, and provides actionable intelligence for security teams.
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
          <h2 className="mb-6">Implementation Approach</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-gray-900">Site Assessment</h4>
              <p className="text-gray-600 leading-relaxed">
                Detailed evaluation of premises, identification of vulnerable
                areas, and analysis of operational requirements.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">System Design</h4>
              <p className="text-gray-600 leading-relaxed">
                Custom security architecture integrating camera placement,
                access points, alarm zones, and monitoring infrastructure.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Professional Installation</h4>
              <p className="text-gray-600 leading-relaxed">
                Certified technicians deploy equipment following industry
                standards with minimal disruption to operations.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Training and Handover</h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training for security personnel and system
                administrators with complete documentation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
