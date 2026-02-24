import Link from 'next/link';
import Section from './Section';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      title: 'Advanced Security Systems',
      slug: 'physical-security',
      description:
        'IP-based surveillance, biometric access control, and AI-powered intrusion detection systems.',
      imageSrc: '/images/ict-camera.jpg',
    },
    {
      title: 'ICT Infrastructure',
      slug: 'networking',
      description:
        'Data center setup, fiber optic networks, GSM signal boosters, and robust structured cabling.',
      imageSrc:
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Smart Automation',
      slug: 'automation',
      description:
        'IoT integration, smart building management, ANPR cameras, and automated gate systems.',
      imageSrc: '/images/smart-auto.jpg',
    },
  ];
  return (
    <Section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-orange-500"></div>
            {/* Changed text from blue to slate to keep it grounded */}
            <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">
            Core Business Sectors
          </h2>
        </div>

        <Link
          href="/services"
          className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-orange-600 transition-colors mt-6 md:mt-0"
        >
          Full Service Catalog
          <span>&rarr;</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            index={index}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </Section>
  );
}
