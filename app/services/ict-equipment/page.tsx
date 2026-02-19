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
        'Enterprise workstations and business laptops',
        'Desktop computers and thin clients',
        'All-in-one systems for specialized applications',
        'Tablets and mobile computing devices',
      ],
    },
    {
      name: 'Server and Storage Infrastructure',
      items: [
        'Rack-mount and tower servers',
        'Network-attached storage systems',
        'SAN and storage area networks',
        'Backup and disaster recovery systems',
      ],
    },
    {
      name: 'Conference and Presentation',
      items: [
        'Projectors and large-format displays',
        'Video conferencing equipment',
        'Interactive displays and digital whiteboards',
        'Audio systems and microphones',
      ],
    },
    {
      name: 'Printing and Document Management',
      items: [
        'Multifunction printers and copiers',
        'Production printing systems',
        'Document scanners',
        'Label printers and specialty equipment',
      ],
    },
    {
      name: 'Power and Protection',
      items: [
        'Uninterruptible power supplies',
        'Power distribution units',
        'Surge protection systems',
        'Generator integration and monitoring',
      ],
    },
    {
      name: 'Networking Hardware',
      items: [
        'Enterprise switches and routers',
        'Wireless access points and controllers',
        'Firewalls and security appliances',
        'Software licensing and support contracts',
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="ICT Equipment & Business Technology Supply"
        description="Enterprise-grade technology procurement and deployment services"
      />

      <Section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="mb-6">Complete Technology Solutions</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We supply enterprise-grade technology equipment from leading
            manufacturers, backed by technical expertise and local support. Our
            procurement services cover complete business technology
            requirements, from individual workstations to complete data center
            infrastructure, with competitive pricing and reliable delivery
            timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="border border-gray-200 p-8">
              <h3 className="mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-800 mr-3 mt-1">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="mb-6">Our Procurement Process</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-gray-900">Requirements Assessment</h4>
              <p className="text-gray-600 leading-relaxed">
                Detailed analysis of technology needs, usage patterns, and
                budget constraints.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Vendor Selection</h4>
              <p className="text-gray-600 leading-relaxed">
                Recommendations based on performance, reliability, warranty
                coverage, and total cost of ownership.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Procurement and Delivery</h4>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing from authorized distributors with
                coordinated delivery and logistics management.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">
                Configuration and Deployment
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Professional setup, configuration, and integration with existing
                infrastructure.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-gray-900">Support and Maintenance</h4>
              <p className="text-gray-600 leading-relaxed">
                Ongoing technical support, warranty management, and equipment
                lifecycle services.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
