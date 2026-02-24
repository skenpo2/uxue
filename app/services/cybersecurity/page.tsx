import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Cybersecurity',
  description:
    'Next-generation firewalls, penetration testing, vulnerability assessments, and endpoint protection.',
};

export default function CybersecurityPage() {
  const solutions = [
    {
      name: 'Next-Generation Firewalls',
      desc: 'Deep packet inspection, intrusion prevention, and application-level filtering.',
    },
    {
      name: 'Cloud Security',
      desc: 'Secure infrastructure setup, hardening, and ongoing monitoring for cloud environments.',
    },
    {
      name: 'Penetration Testing',
      desc: 'Authorized assessments simulating real-world attacks to identify vulnerabilities.',
    },
    {
      name: 'Endpoint Protection',
      desc: 'Advanced security protecting workstations, servers, and mobile devices from malware.',
    },
    {
      name: 'Security Monitoring',
      desc: '24/7 monitoring with rapid incident detection and coordinated response procedures.',
    },
    {
      name: 'AI Threat Detection',
      desc: 'Machine learning systems identifying anomalous behavior through pattern analysis.',
    },
  ];

  return (
    <div className="bg-white">
      <Section className="pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
              Digital Protection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Cyber Defense.
          </h1>

          <div className="border-l-[3px] border-orange-500 pl-6">
            <p className="text-xl text-slate-800 font-medium mb-4">
              Proactive Defense Architecture
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Multilayered security architectures protecting networks,
              applications, and data from sophisticated attacks. Our solutions
              combine proven security technologies with threat intelligence and
              rapid response capabilities, ensuring business continuity in
              high-risk digital environments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-slate-200 bg-slate-50 p-8 hover:border-blue-300 transition-colors"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="w-3 h-3 bg-blue-600"></div>
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
      </Section>

      <Section className="py-24 bg-slate-900 text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Implementation Framework
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-light">
              True security is a continuous lifecycle. Our methodology is built
              on a rigid, phased approach that systematically hardens your
              attack surface.
            </p>

            <div className="relative h-64 md:h-96 w-full border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden group mb-16 lg:mb-0">
              <Image
                src="/images/cyber-defense.png"
                alt="Defense-in-Depth Cybersecurity Architecture"
                fill
                className="object-cover opacity-40 mix-blend-luminosity group-hover:opacity-75 group-hover:mix-blend-normal transition-all duration-700"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="relative pt-4 lg:pt-0">
            <div className="absolute left-[27px] top-0 bottom-4 w-px bg-slate-800"></div>
            <div className="space-y-12">
              {[
                {
                  title: 'Security Assessment',
                  desc: 'Evaluation of current posture and vulnerability identification.',
                },
                {
                  title: 'Architecture Design',
                  desc: 'Design incorporating defense-in-depth principles.',
                },
                {
                  title: 'Solution Deployment',
                  desc: 'Professional implementation of firewalls and monitoring systems.',
                },
                {
                  title: 'Testing & Validation',
                  desc: 'Rigorous testing to verify effectiveness of controls.',
                },
                {
                  title: 'Ongoing Management',
                  desc: 'Continuous monitoring and threat intelligence updates.',
                },
              ].map((step, index) => (
                <div key={index} className="relative pl-20 group">
                  <div className="absolute left-0 top-0 w-14 h-14 bg-slate-950 border-2 border-slate-700 flex items-center justify-center font-bold text-slate-500 font-mono group-hover:border-blue-500 group-hover:text-blue-500 transition-colors z-10">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
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
