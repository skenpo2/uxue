'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';

export default function GallerySection() {
  // ==========================================
  // MANUAL CONFIGURATION
  // Just change .jpg to .png where needed
  // ==========================================
  const galleryImages = [
    { src: '/images/gallery/p1.png', alt: 'Server Rack Installation' },
    { src: '/images/gallery/p2.jpg', alt: 'Cabling Infrastructure' },
    { src: '/images/gallery/p3.jpeg', alt: 'Control Room' },
    { src: '/images/gallery/p4.jpg', alt: 'Biometric Access' },
    { src: '/images/gallery/p5.jpg', alt: 'CCTV Monitoring' },
    { src: '/images/gallery/p6.jpg', alt: 'Network Switch' },
    { src: '/images/gallery/p7.jpg', alt: 'Fiber Splicing' },
    { src: '/images/gallery/p8.jpg', alt: 'Site Inspection' },
    { src: '/images/gallery/p9.jpg', alt: 'Security Gate' },
    { src: '/images/gallery/p10.jpg', alt: 'System Integration' },
    // { src: '/images/gallery/p11.jpg', alt: 'Power Backup' },
    { src: '/images/gallery/p12.jpg', alt: 'Fire Alarm System' },
    { src: '/images/gallery/p13.jpg', alt: 'Data Center' },
    { src: '/images/gallery/p14.jpg', alt: 'Structured Cabling' },
    { src: '/images/gallery/p15.jpg', alt: 'Maintenance' },
    { src: '/images/gallery/p16.jpg', alt: 'Remote Monitoring' },
    { src: '/images/gallery/p17.jpg', alt: 'Perimeter Defense' },
    { src: '/images/gallery/p18.jpg', alt: 'Smart Automation' },
    { src: '/images/gallery/p19.jpg', alt: 'Access Control' },
    // { src: '/images/gallery/p20.jpg', alt: 'Network Configuration' },
    // { src: '/images/gallery/p21.jpg', alt: 'Final Commissioning' },
  ];

  const [visibleCount, setVisibleCount] = useState(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, galleryImages.length));
  };

  return (
    <div className="bg-white py-24 border-b border-slate-200">
      <Section>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-blue-600"></div>
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
                Project Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              FIELD OPERATIONS
            </h2>
          </div>
        </div>
      </Section>

      {/* THE GRID: Strict, Technical, High-Contrast */}
      <div className="w-full bg-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {galleryImages.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-slate-200 group overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                // CHANGED: Removed 'grayscale' classes.
                // Kept 'group-hover:scale-105' for the smooth zoom effect.
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* REMOVED: The blue overlay div. Now nothing obstructs the view. */}

              {/* Image Label - Kept this, it looks professional */}
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                  IMG-{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              {/* Optional: A very subtle dark gradient at the bottom so the label is always readable if the image is white */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Load More Action */}
      <div className="bg-slate-50 border-t border-slate-200 py-12 text-center">
        {visibleCount < galleryImages.length ? (
          <button
            onClick={showMore}
            className="inline-flex flex-col items-center group"
          >
            <span className="text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:text-blue-700 transition-colors">
              View Extended Gallery
            </span>
            <span className="mt-2 text-slate-400 group-hover:translate-y-1 transition-transform duration-300">
              ↓
            </span>
          </button>
        ) : (
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            End of Gallery Archive
          </div>
        )}
      </div>

      {/* Bottom Decorative Bar */}
      <div className="h-2 w-full bg-slate-950 flex">
        <div className="h-full w-1/4 bg-blue-600"></div>
        <div className="h-full w-1/4 bg-slate-800"></div>
      </div>
    </div>
  );
}
