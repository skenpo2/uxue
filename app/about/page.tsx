import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Uxue Company Ltd is a technology-first security and ICT integration company based in Kenya, delivering enterprise solutions across East Africa.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity and Professionalism',
      description:
        'We operate with transparency and maintain the highest standards in every engagement.',
    },
    {
      title: 'Innovation and Continuous Improvement',
      description:
        'We stay ahead of technology trends and continuously enhance our service delivery.',
    },
    {
      title: 'Reliability and Excellence',
      description:
        'Our systems are built to perform consistently in demanding environments.',
    },
    {
      title: 'Customer-Focused Solutions',
      description:
        'We design every solution around specific business requirements and operational needs.',
    },
  ];

  return (
    <>
      <PageHeader
        title="About Uxue Company Ltd"
        description="Technology-first security and ICT integration company based in Kenya"
      />

      <Section className="py-24">
        <div className="max-w-3xl">
          <h2 className="mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Uxue Company Ltd is a technology-first security and ICT integration
            company based in Kenya. We help organizations solve business
            challenges using modern security systems, enterprise networks, smart
            automation, and advanced cybersecurity solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our focus is simple: protect assets, connect systems, and automate
            operations so businesses can operate safely, efficiently, and
            without interruption.
          </p>
        </div>
      </Section>

      <Section className="py-24 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="mb-4 text-primary-800">Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become Africa&#39;s leading integrated security and technology
              solutions partner.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-primary-800">Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To deliver reliable, intelligent, and modern technology solutions
              that enhance protection, productivity, and digital transformation
              for our clients.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-24">
        <div className="mb-16">
          <h2 className="mb-4">Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our values guide how we serve clients and deliver solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="border-l-4 border-primary-800 pl-6">
              <h3 className="mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-primary-900 text-white">
        <div className="max-w-3xl">
          <h2 className="mb-6">Our Approach</h2>
          <p className="text-lg text-primary-100 mb-6 leading-relaxed">
            We take a consultative approach to every project, starting with
            understanding your business objectives, operational requirements,
            and risk profile. Our technical team designs solutions that
            integrate seamlessly with existing infrastructure while providing
            clear pathways for future expansion.
          </p>
          <p className="text-lg text-primary-100 leading-relaxed">
            From initial assessment through deployment and ongoing support, we
            maintain direct communication and ensure every system meets
            specified performance standards before handover.
          </p>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
