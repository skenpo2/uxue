import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'ICT Equipment Supply',
  description:
    'Enterprise hardware, servers, networking equipment, workstations, and procurement services.',
};

export default function ICTEquipmentPage() {
  const categories = [
    {
      name: 'Computing Equipment',
      items: [
        'Enterprise workstations and laptops',
        'Desktop computers and thin clients',
        'All-in-one specialized systems',
      ],
    },
    {
      name: 'Server & Storage',
      items: [
        'Rack-mount and tower servers',
        'Network-attached storage (NAS)',
        'SAN and backup systems',
      ],
    },
    {
      name: 'Power & Protection',
      items: [
        'Uninterruptible power supplies (UPS)',
        'Power distribution units (PDU)',
        'Surge protection systems',
      ],
    },
    {
      name: 'Networking Hardware',
      items: [
        'Enterprise switches and routers',
        'Wireless access controllers',
        'Firewalls and appliances',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Section className="pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-blue-600"></div>
            <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
              Hardware Supply
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            ICT Equipment.
          </h1>

          <div className="border-l-[3px] border-orange-500 pl-6">
            <p className="text-xl text-slate-800 font-medium mb-4">
              Complete Technology Procurement
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Enterprise-grade technology procurement and supply services
              covering complete business requirements. We supply equipment from
              leading manufacturers, backed by technical expertise and reliable
              delivery timelines.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-slate-200 bg-slate-50 p-8 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-orange-500 mt-1">■</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-slate-900 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Procurement Process
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-light">
              We manage the entire hardware lifecycle, ensuring you receive
              genuine equipment configured exactly to your specifications.
            </p>

            <div className="relative h-64 md:h-80 w-full border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden group">
              <Image
                src="/images/ict-equip.jpg"
                alt="Enterprise Hardware and IT Procurement"
                fill
                className="object-cover opacity-50 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="space-y-8 lg:pt-4">
            {[
              {
                title: 'Requirements Assessment',
                desc: 'Analysis of technology needs and budget constraints.',
              },
              {
                title: 'Vendor Selection',
                desc: 'Recommendations based on performance and TCO.',
              },
              {
                title: 'Procurement & Delivery',
                desc: 'Competitive pricing with coordinated logistics.',
              },
              {
                title: 'Configuration & Deployment',
                desc: 'Setup and integration with existing infrastructure.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-6 border-l-2 border-slate-700 pl-6 pb-2 relative group hover:border-orange-500 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:border-orange-500 transition-colors"></div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
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
