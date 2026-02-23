import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'ICT Equipment & Business Technology Supply',
  description:
    'Enterprise hardware, servers, networking equipment, workstations, and complete business technology procurement services.',
};

export default function ICTEquipmentPage() {
  const categories = [
    {
      name: 'Computing Equipment',
      items: [
        'Enterprise workstations and laptops',
        'Desktop computers and thin clients',
        'All-in-one specialized systems',
        'Mobile computing devices',
      ],
    },
    {
      name: 'Server & Storage Infrastructure',
      items: [
        'Rack-mount and tower servers',
        'Network-attached storage (NAS)',
        'SAN and storage area networks',
        'Backup and disaster recovery',
      ],
    },
    {
      name: 'Conference & Presentation',
      items: [
        'Projectors and large-format displays',
        'Video conferencing equipment',
        'Interactive digital whiteboards',
        'Audio systems and microphones',
      ],
    },
    {
      name: 'Printing & Document Management',
      items: [
        'Multifunction printers and copiers',
        'Production printing systems',
        'Enterprise document scanners',
        'Label and specialty printers',
      ],
    },
    {
      name: 'Power & Protection',
      items: [
        'Uninterruptible power supplies (UPS)',
        'Power distribution units (PDU)',
        'Surge protection systems',
        'Generator monitoring',
      ],
    },
    {
      name: 'Networking Hardware',
      items: [
        'Enterprise switches and routers',
        'Wireless access controllers',
        'Firewalls and security appliances',
        'Software licensing and support',
      ],
    },
  ];

  const processSteps = [
    {
      title: 'Requirements Assessment',
      desc: 'Detailed analysis of technology needs, usage patterns, and budget constraints.',
    },
    {
      title: 'Vendor Selection',
      desc: 'Recommendations based on performance, reliability, warranty coverage, and TCO.',
    },
    {
      title: 'Procurement & Delivery',
      desc: 'Competitive pricing from authorized distributors with coordinated logistics.',
    },
    {
      title: 'Configuration & Deployment',
      desc: 'Professional setup, configuration, and integration with existing infrastructure.',
    },
    {
      title: 'Support & Maintenance',
      desc: 'Ongoing technical support, warranty management, and lifecycle services.',
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="ICT Equipment & Supply"
        description="Enterprise-grade technology procurement and deployment services"
      />

      {/* EQUIPMENT CATEGORIES (Catalog Grid) */}
      <Section className="py-24">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-blue-600"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              Hardware Supply Chain
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            Complete Technology Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            We supply enterprise-grade technology equipment from leading
            manufacturers, backed by technical expertise and local support. Our
            procurement services cover complete business technology
            requirements, from individual workstations to complete data center
            infrastructure, with reliable delivery timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-200">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 text-sm">■</span>
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCUREMENT PROCESS (Dark Theme) */}
      <Section className="py-24 bg-slate-900 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Our Procurement Process
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              We manage the entire hardware lifecycle, ensuring you receive
              genuine equipment configured exactly to your enterprise
              specifications.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 border-l-2 border-slate-700 pl-6 pb-6 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500"></div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
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
