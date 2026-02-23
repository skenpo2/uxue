import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import ClientsSection from '@/components/ClientsSection';
import KeyMarketsSection from '@/components/KeyMarketsSection';
import BrandsSection from '@/components/BrandsSection';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Uxue | Enterprise Security & ICT Solutions',
  description:
    'Uxue Company Ltd delivers world-class technology security solutions, ICT infrastructure, and intelligent automation.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <ServicesSection />
      <KeyMarketsSection />
      <PhilosophySection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
