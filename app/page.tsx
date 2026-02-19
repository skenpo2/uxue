import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import PhilosophySection from '@/components/PhilosophySection';
import ClientsSection from '@/components/ClientsSection';

export const metadata: Metadata = {
  title: 'Uxue | Enterprise Security & ICT Solutions',
  description:
    'Uxue Company Ltd delivers world-class technology security solutions, ICT infrastructure, and intelligent automation.',
};

export default function HomePage() {
  const services = [
    {
      title: 'Advanced Security Systems',
      slug: 'security-systems',
      description:
        'IP-based surveillance, biometric access control, and AI-powered intrusion detection systems.',
      imageSrc: '/images/ict-camera.jpg',
    },
    {
      title: 'ICT Infrastructure',
      slug: 'ict-infrastructure',
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

  const markets = [
    'Corporate Enterprises',
    'Financial Institutions',
    'Government Agencies',
    'Healthcare Facilities',
    'Educational Institutions',
    'Industrial Facilities',
    'Commercial Real Estate',
    'Technology Companies',
  ];

  // 12 "Field Work" style images: Server racks, cabling, cameras, industrial settings
  const galleryImages = [
    'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=600&auto=format&fit=crop', // Server Rack
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop', // Digital Dashboard
    'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?q=80&w=600&auto=format&fit=crop', // Cabling
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop', // Office Tech
    'https://images.unsplash.com/photo-1516245834210-c4c14278733f?q=80&w=600&auto=format&fit=crop', // Industrial Grid
    'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=600&auto=format&fit=crop', // Security Cam
    'https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=600&auto=format&fit=crop', // Network Switch
    'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=600&auto=format&fit=crop', // AI/Data
    'https://images.unsplash.com/photo-1565514020175-05179d74c9f8?q=80&w=600&auto=format&fit=crop', // Warehouse
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', // Manufacturing
    'https://images.unsplash.com/photo-1531297461136-82lw9b44d940?q=80&w=600&auto=format&fit=crop', // Hardware
    'https://images.unsplash.com/photo-1624969862644-791f3dc98927?q=80&w=600&auto=format&fit=crop', // Access Control
  ];

  const partners = [
    'CISCO',
    'HIKVISION',
    'ZKTECO',
    'HUAWEI',
    'UBIQUITI',
    'DAHUA',
    'SUPREMA',
  ];

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* METRICS STRIP */}
      <div className="bg-white border-b border-slate-200 relative z-20">
        <Section className="!py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-x border-slate-200">
            {[
              {
                label: 'Operational Region',
                value: 'EAST AFRICA',
                sub: 'Kenya & Regional Hubs',
              },
              {
                label: 'Client Focus',
                value: 'ENTERPRISE',
                sub: 'Industrial & Corporate',
              },
              {
                label: 'Technology Standards',
                value: 'TIER-1 OEMS',
                sub: 'Global Certified Partners',
              },
              {
                label: 'Service Level',
                value: 'MISSION CRITICAL',
                sub: 'High-Availability Systems',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 md:py-12 md:px-10 group hover:bg-slate-50 transition-colors duration-300"
              >
                {/* Technical Accent Bar */}
                <div className="w-8 h-1 bg-blue-600 mb-6 group-hover:w-12 transition-all duration-300 ease-out"></div>

                {/* The Label (Category) */}
                <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2 font-mono">
                  {stat.label}
                </div>

                {/* The Value (Main Fact) */}
                <div className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1">
                  {stat.value}
                </div>

                {/* The Sub-text (Context) */}
                <div className="text-xs text-slate-500 font-medium">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* SERVICES SECTION */}
      <Section className="py-24 bg-slate-50 border-b border-slate-200">
        {/* HEADER: Aligned with the 'Philosophy' section style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
                Technical Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">
              Core Business Sectors
            </h2>
          </div>

          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-blue-600 transition-colors mt-6 md:mt-0"
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

      <div className="bg-slate-950 py-24 border-t border-slate-900 text-white">
        <Section>
          {/* HEADER */}
          <div className="mb-16 border-b border-slate-800 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              KEY MARKETS
            </h2>
            <p className="text-slate-400 text-lg">
              Specialized infrastructure for critical sectors.
            </p>
          </div>

          {/* THE GRID: Static, Structural, Corporate */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-800">
            {markets.map((market, index) => (
              <div
                key={index}
                className="border-r border-b border-slate-800 p-8 flex flex-col h-full"
              >
                {/* Index Number */}
                <span className="text-slate-600 font-mono text-xs mb-4 block">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Market Name */}
                <h3 className="text-lg font-bold text-slate-200 tracking-wide mt-auto">
                  {market}
                </h3>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <GallerySection />

      <PhilosophySection />

      <ClientsSection />

      <CTASection />
    </>
  );
}
