import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive security and ICT solutions including surveillance, networking, automation, cybersecurity, and enterprise technology supply.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Smart Physical Security',
      slug: 'physical-security',
      description:
        'Comprehensive physical security infrastructure including AI-powered CCTV systems, access control, biometric authentication, and perimeter protection.',
      capabilities: [
        'AI CCTV & Surveillance',
        'Biometric Access Control',
        'Alarm & Intrusion Detection',
        'Perimeter Defense Systems',
      ],
    },
    {
      title: 'Enterprise Networking',
      slug: 'networking',
      description:
        'Complete network infrastructure design and implementation. From structured cabling to advanced routing and wireless systems.',
      capabilities: [
        'Structured Cabling & Fiber',
        'LAN, WAN & Wireless',
        'Data Center Infrastructure',
        'Hardware Deployment',
      ],
    },
    {
      title: 'Security Automation',
      slug: 'automation',
      description:
        'Integrated automation systems that enhance security operations and provide real-time monitoring and control capabilities.',
      capabilities: [
        'Smart Visitor Management',
        'IoT Dashboards',
        'Automated Barrier Systems',
        'Integrated Security Platforms',
      ],
    },
    {
      title: 'ICT Equipment Supply',
      slug: 'ict-equipment',
      description:
        'Enterprise-grade technology procurement and supply services covering complete business technology requirements.',
      capabilities: [
        'Enterprise Workstations',
        'Server & Storage Infrastructure',
        'Power Backup (UPS)',
        'Networking Hardware',
      ],
    },
    {
      title: 'Cybersecurity',
      slug: 'cybersecurity',
      description:
        'Advanced cybersecurity solutions protecting digital assets and ensuring business continuity against evolving threats.',
      capabilities: [
        'Next-Gen Firewalls',
        'Cloud Security',
        'Penetration Testing',
        'Endpoint Protection',
      ],
    },
  ];

  return (
    <div className="bg-white h-[90vh]">
      {/* ENTERPRISE INTRO */}
      <div className="bg-slate-950 pt-32 pb-24 border-b border-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-[3px] border-orange-500 pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
                Core Competencies
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              INTEGRATED <br />
              <span className="text-slate-400">SOLUTIONS.</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              End-to-end security and technology integration for modern
              enterprise environments.
            </p>
          </div>
        </div>
      </div>

      <Section className="py-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="grid lg:grid-cols-12 gap-12 items-start group"
            >
              {/* Index Number */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="text-3xl font-mono text-slate-300 font-light group-hover:text-orange-500 transition-colors">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 border-l-2 border-slate-100 pl-6 group-hover:border-blue-500 transition-colors">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight uppercase">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-colors"
                >
                  View Specifications <span>&rarr;</span>
                </Link>
              </div>

              {/* Capabilities Grid */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Key Capabilities
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm mt-1.5 shrink-0"></span>
                      <span className="text-slate-700 text-sm">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
