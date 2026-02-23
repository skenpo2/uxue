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
      name: 'Security Monitoring & Response',
      description:
        '24/7 security monitoring with rapid incident detection, analysis, and coordinated response procedures.',
    },
    {
      name: 'AI-Based Threat Detection',
      description:
        'Machine learning systems identifying anomalous behavior and potential threats through pattern analysis.',
    },
  ];

  const implementationSteps = [
    {
      title: 'Security Assessment',
      desc: 'Comprehensive evaluation of current security posture, identification of vulnerabilities, and risk analysis.',
    },
    {
      title: 'Architecture Design',
      desc: 'Security architecture design incorporating defense-in-depth principles, network segmentation, and access controls.',
    },
    {
      title: 'Solution Deployment',
      desc: 'Professional implementation of firewalls, endpoint protection, monitoring systems, and security policies.',
    },
    {
      title: 'Testing and Validation',
      desc: 'Rigorous security testing to verify effectiveness of controls and identify any remaining vulnerabilities.',
    },
    {
      title: 'Ongoing Management',
      desc: 'Continuous monitoring, threat intelligence updates, and regular security posture assessments.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Cybersecurity & Digital Protection"
        description="Advanced security solutions protecting digital assets and business operations"
      />

      {/* 1. THREAT DEFENSE OVERVIEW */}
      <Section className="py-24 border-b border-slate-200">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-orange-500"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Proactive Defense
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            Defense Against Digital Threats
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Cybersecurity threats evolve constantly, requiring proactive defense
            strategies and continuous monitoring. We implement multilayered
            security architectures that protect networks, applications, and data
            from unauthorized access, malware, and sophisticated attacks.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our solutions combine proven security technologies with threat
            intelligence and rapid response capabilities, ensuring business
            continuity in high-risk digital environments.
          </p>
        </div>

        {/* Tactical Grid (3 Columns for desktop to handle the 7 items efficiently) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`border border-slate-200 bg-slate-50 p-8 ${
                index === 0 ? 'lg:col-span-2 lg:bg-slate-900 lg:text-white' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-3 h-3 ${index === 0 ? 'bg-orange-500' : 'bg-blue-600'}`}
                ></div>
                <span
                  className={`text-xs font-mono font-bold ${index === 0 ? 'text-slate-400' : 'text-slate-400'}`}
                >
                  SYS.0{index + 1}
                </span>
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${index === 0 ? 'text-white' : 'text-slate-900'}`}
              >
                {solution.name}
              </h3>
              <p
                className={`leading-relaxed ${index === 0 ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. SECURITY IMPLEMENTATION PIPELINE */}
      <Section className="py-24 bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Context & Diagram */}
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              Security Implementation Framework
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              True security is a continuous lifecycle, not a one-time
              installation. Our deployment methodology is built on a rigid,
              phased approach that ensures zero disruption to your daily
              operations while systematically hardening your attack surface.
            </p>

            <div className="border border-slate-200 bg-white p-4 shadow-sm"></div>
          </div>

          {/* Right Column: The Numbered Pipeline */}
          <div className="relative">
            {/* The structural pipeline line running down the left */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-slate-200"></div>

            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative pl-20 group">
                  {/* Pipeline Node */}
                  <div className="absolute left-0 top-1 w-14 h-14 bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-500 font-mono z-10 transition-colors duration-300 group-hover:border-blue-600 group-hover:text-blue-600">
                    0{index + 1}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
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
