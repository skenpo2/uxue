'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      src: '/images/vr.jpg',
      alt: 'Enterprise Technology Infrastructure',
      title: 'TECHNOLOGY-FIRST INTEGRATION.',
      subtitle: 'Enterprise security and ICT solutions based in Kenya.',
    },
    {
      src: '/images/about-hero2.jpg',
      alt: 'Corporate Operations',
      title: 'SOLVING COMPLEX CHALLENGES.',
      subtitle: 'Modern security systems, smart networks, and cybersecurity.',
    },
    {
      src: '/images/data-center.jpg',
      alt: 'Data Center Reliability',
      title: 'UNCOMPROMISING FOCUS.',
      subtitle:
        'Protecting assets and automating operations for total efficiency.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1,
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const values = [
    {
      title: 'Integrity and Professionalism',
      description:
        'We operate with absolute transparency and maintain the highest standards in every enterprise engagement.',
    },
    {
      title: 'Innovation and Continuous Improvement',
      description:
        'We stay ahead of infrastructure trends, continuously enhancing our technical service delivery.',
    },
    {
      title: 'Reliability and Excellence',
      description:
        'Our integrated systems are engineered to perform consistently in the most demanding environments.',
    },
    {
      title: 'Customer-Focused Solutions',
      description:
        'We design every solution strictly around your specific business requirements and risk profile.',
    },
  ];

  const advantages = [
    'End-to-end technology integration',
    'Certified and experienced engineers',
    'Rapid deployment and support',
    'Modern, future-ready solutions',
    'Trusted partner for businesses and institutions',
  ];

  return (
    <div className="bg-white">
      <div className="relative h-[90vh] min-h-[500px] w-full bg-slate-950 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 md:via-slate-950/50 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl border-l-[3px] border-orange-500 pl-6 md:pl-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1] [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-4 sm:left-6 lg:left-8 z-20 flex gap-6 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="flex flex-col gap-3 group focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`text-xs font-mono font-bold transition-colors ${currentSlide === idx ? 'text-orange-500' : 'text-slate-500 group-hover:text-slate-300'}`}
              ></span>
              <div
                className={`h-[2px] transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-orange-500' : 'w-6 bg-slate-700 group-hover:bg-slate-400'}`}
              ></div>
            </button>
          ))}
        </div>
      </div>

      <Section className="py-24 border-b border-slate-200">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-blue-500"></div>
            <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
              Company Profile
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight leading-snug">
            Uxue Company Ltd is a technology-first security and ICT integration
            company based in Kenya.
          </h2>

          <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
            <p>
              We help organizations solve business challenges using modern
              security systems, enterprise networks, smart automation, and
              advanced cybersecurity solutions.
            </p>
            <p className="border-l-2 border-orange-500 pl-5 text-slate-800 font-medium">
              Our focus is simple: protect assets, connect systems, and automate
              operations so businesses can operate safely, efficiently, and
              without interruption.
            </p>
          </div>
        </div>
      </Section>

      <div className="grid md:grid-cols-2">
        <div className="bg-slate-950 py-24 md:py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-blue-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Our Vision
            </h3>
          </div>
          <p className="text-3xl md:text-4xl text-white font-light leading-snug">
            To become Africa’s leading integrated security and technology
            solutions partner.
          </p>
        </div>

        <div className="bg-slate-50 py-24 md:py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center border-l border-slate-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-orange-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Our Mission
            </h3>
          </div>
          <p className="text-3xl md:text-4xl text-slate-900 font-light leading-snug">
            To deliver reliable, intelligent, and modern technology solutions
            that enhance protection, productivity, and digital transformation
            for our clients.
          </p>
        </div>
      </div>

      <Section className="py-24 md:py-32 border-b border-slate-200">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                Core Values
              </h2>
              <div className="w-12 h-1 bg-orange-500 mb-8"></div>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                The foundational principles that dictate our engineering
                standards and client engagements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-slate-200">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-12 py-10 border-b border-slate-200 hover:bg-slate-50 transition-colors group"
                >
                  <div className="text-3xl font-mono font-light text-slate-300 group-hover:text-orange-500 transition-colors shrink-0 mt-1">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-24 md:py-32 bg-slate-900 text-white">
        <div className="max-w-4xl mb-16 border-l-[3px] border-blue-500 pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Why Choose Uxue Company Ltd
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            We do not just supply hardware; we engineer comprehensive
            ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="border border-slate-800 bg-slate-950 p-8 flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <div className="mb-8">
                <div className="w-2 h-2 bg-orange-500 mb-6"></div>
                <h4 className="text-lg font-bold text-slate-200 leading-snug">
                  {advantage}
                </h4>
              </div>
              <div className="text-slate-700 font-mono text-xs">
                ADV.0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
