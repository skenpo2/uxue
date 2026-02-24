'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';

export default function GallerySection() {
  const galleryImages = [
    { src: '/images/gallery/p2.jpg', alt: 'Cabling Infrastructure' },
    { src: '/images/gallery/p5.jpg', alt: 'CCTV Monitoring' },
    { src: '/images/gallery/n8.jpg', alt: 'Project image' },

    { src: '/images/gallery/p6.jpg', alt: 'Network Switch' },
    { src: '/images/gallery/n9.jpg', alt: 'Project image' },

    { src: '/images/gallery/p9.jpg', alt: 'Security Gate' },
    { src: '/images/gallery/n11.jpg', alt: 'Access Control' },
    { src: '/images/gallery/n13.jpg', alt: 'Project image' },
    { src: '/images/gallery/p10.jpg', alt: 'System Integration' },
    { src: '/images/gallery/p12.jpg', alt: 'Fire Alarm System' },
    { src: '/images/gallery/p13.jpg', alt: 'Data Center' },
    { src: '/images/gallery/p15.jpg', alt: 'Maintenance' },
    { src: '/images/gallery/n6.jpg', alt: 'Access Control' },

    { src: '/images/gallery/p16.jpg', alt: 'Remote Monitoring' },
    { src: '/images/gallery/n7.jpg', alt: 'Access Control' },

    { src: '/images/gallery/p17.jpg', alt: 'Perimeter Defense' },
    { src: '/images/gallery/p18.jpg', alt: 'Smart Automation' },
    { src: '/images/gallery/p19.jpg', alt: 'Access Control' },
    { src: '/images/gallery/n1.jpeg', alt: 'Project image' },
    { src: '/images/gallery/n2.jpeg', alt: 'Access Control' },
    { src: '/images/gallery/n3.jpg', alt: 'Project image' },
    { src: '/images/gallery/n4.jpg', alt: 'Project image' },
    { src: '/images/gallery/n5.jpg', alt: 'Project image' },
    { src: '/images/gallery/n10.jpg', alt: 'Project image' },
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, galleryImages.length));
  };

  return (
    <div className="bg-white pt-24 border-b border-slate-200">
      {/* 1. HEADER SECTION */}
      <Section>
        <div className="mb-16">
          <div className="max-w-3xl border-l-[3px] border-orange-500 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-blue-600"></div>
              <span className="text-slate-500 font-bold tracking-[0.2em] uppercase text-xs">
                Project Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              FIELD OPERATIONS
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-light leading-relaxed">
              A visual archive of our latest enterprise deployments,
              infrastructure installations, and integrated security setups
              across the region.
            </p>
          </div>
        </div>
      </Section>

      <div className="w-full bg-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {galleryImages.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-slate-100 group overflow-hidden cursor-crosshair"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-16 text-center flex justify-center border-t border-slate-200">
        {visibleCount < galleryImages.length ? (
          <button
            onClick={showMore}
            className="group flex items-center justify-between gap-6 px-8 py-4 border border-slate-300 bg-white hover:border-orange-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest group-hover:text-orange-600 transition-colors">
              Load Additional Assets
            </span>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transform group-hover:translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        ) : (
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
            <div className="h-[1px] w-12 bg-slate-200"></div>
            End of Archive
            <div className="h-[1px] w-12 bg-slate-200"></div>
          </div>
        )}
      </div>

      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/3 bg-slate-900"></div>
        <div className="h-full w-1/3 bg-orange-500"></div>
        <div className="h-full w-1/3 bg-blue-600"></div>
      </div>
    </div>
  );
}
