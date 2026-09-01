'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function HeroSlideshow({
  images,
  alt,
  className,
  sizes,
  interval = 6000,
}: {
  images: string[];
  alt: string;
  className: string;
  sizes: string;
  interval?: number;
}) {
  const slides = useMemo(() => Array.from(new Set(images.filter(Boolean))), [images]);
  const [active, setActive] = useState(0);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: number | undefined;
    let onScreen = true;

    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };
    const start = () => {
      stop();
      if (document.hidden || !onScreen) return;
      timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), interval);
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      start();
    });
    if (frame.current) observer.observe(frame.current);

    document.addEventListener('visibilitychange', start);
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', start);
    };
  }, [slides.length, interval]);

  return (
    <div className="hero-slides" ref={frame}>
      {slides.map((src, index) => (
        <div key={src} className={`hero-slides__slide${index === active ? ' is-active' : ''}`} aria-hidden={index === active ? undefined : true}>
          <Image
            src={src}
            alt={index === 0 ? alt : ''}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : 'lazy'}
            className={className}
            sizes={sizes}
          />
        </div>
      ))}
    </div>
  );
}
