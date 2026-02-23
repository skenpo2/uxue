'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  // --- HERO CAROUSEL STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000',
      alt: 'Enterprise Server Infrastructure',
      title: 'About Uxue Company Ltd',
      subtitle:
        'Technology-first security and ICT integration company based in Kenya.',
    },
    {
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
      alt: 'Global Connectivity and Automation',
      title: 'Securing The Enterprise',
      subtitle:
        'Solving business challenges using modern security systems and enterprise networks.',
    },
    {
      src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000',
      alt: 'Structured Cabling and Networking',
      title: 'Built For Reliability',
      subtitle:
        'Protecting assets and automating operations for maximum efficiency.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 6000); // 6-second rotation for a calmer pace
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
    <div className="bg-white">
      {/* 1. FULL-WIDTH HERO CAROUSEL */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-slate-900/75"></div>
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="h-1 w-16 bg-orange-500 mb-8 transition-all duration-500"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-light drop-shadow">
            {heroSlides[currentSlide].subtitle}
          </p>
        </div>

        {/* Simple Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 ${
                currentSlide === idx
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. WHO WE ARE (Clean Text Block) */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Who We Are</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Uxue Company Ltd is a technology-first security and ICT integration
            company based in Kenya. We help organizations solve business
            challenges using modern security systems, enterprise networks, smart
            automation, and advanced cybersecurity solutions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our focus is simple: protect assets, connect systems, and automate
            operations so businesses can operate safely, efficiently, and
            without interruption.
          </p>
        </div>
      </Section>

      {/* 3. VISION & MISSION (Solid Corporate Cards) */}
      <Section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-white p-10 border-t-4 border-t-blue-600 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become Africa&#39;s leading integrated security and technology
              solutions partner.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 border-t-4 border-t-orange-500 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To deliver reliable, intelligent, and modern technology solutions
              that enhance protection, productivity, and digital transformation
              for our clients.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. CORE VALUES (Straightforward Grid) */}
      <Section className="py-24">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Core Values
          </h2>
          <p className="text-xl text-slate-600">
            Our values guide how we serve clients and deliver solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-orange-500 rounded-sm mt-2"></div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. OUR APPROACH (Grounded Dark Section) */}
      <Section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white">Our Approach</h2>
            <div className="h-1 w-12 bg-blue-600"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              We take a consultative approach to every project, starting with
              understanding your business objectives, operational requirements,
              and risk profile. Our technical team designs solutions that
              integrate seamlessly with existing infrastructure while providing
              clear pathways for future expansion.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              From initial assessment through deployment and ongoing support, we
              maintain direct communication and ensure every system meets
              specified performance standards before handover.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
