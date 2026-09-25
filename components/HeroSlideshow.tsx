'use client';

import Image from 'next/image';
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { KeyboardEvent } from 'react';
import type { HeroImage } from '@/lib/hero-images';

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

export default function HeroSlideshow({
  images,
  alt = '',
  label = 'Hero images',
  className,
  sizes,
  interval = 6000,
}: {
  images: (string | HeroImage)[];
  alt?: string;
  label?: string;
  className: string;
  sizes: string;
  interval?: number;
}) {
  const slides = useMemo(() => {
    const unique = new Map<string, HeroImage>();
    images.forEach((image, index) => {
      const slide = typeof image === 'string' ? { src: image, alt: index === 0 ? alt : '' } : image;
      if (slide.src && !unique.has(slide.src)) unique.set(slide.src, slide);
    });
    return Array.from(unique.values());
  }, [images, alt]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const id = useId();
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => true,
  );
  const current = active % Math.max(slides.length, 1);

  useEffect(() => {
    if (slides.length < 2 || paused || hovered || focused || reducedMotion) return;

    let timer: number | undefined;
    let onScreen = false;

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

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener('visibilitychange', start);
    };
  }, [slides.length, interval, paused, hovered, focused, reducedMotion]);

  function selectSlide(index: number) {
    setActive(index);
    setPaused(true);
  }

  function navigateDots(event: KeyboardEvent<HTMLDivElement>) {
    const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button'));
    const index = buttons.indexOf(event.target as HTMLButtonElement);
    if (index < 0) return;
    const next = event.key === 'ArrowRight' ? (index + 1) % slides.length
      : event.key === 'ArrowLeft' ? (index - 1 + slides.length) % slides.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    selectSlide(next);
    buttons[next].focus();
  }

  return (
    <div
      className="hero-slides"
      ref={frame}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      {slides.map(({ src, alt: slideAlt, position }, index) => (
        <div
          key={src}
          id={`${id}-slide-${index}`}
          className={`hero-slides__slide${index === current ? ' is-active' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-hidden={index === current ? undefined : true}
        >
          <Image
            src={src}
            alt={slideAlt}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : 'lazy'}
            className={className}
            style={position ? { objectPosition: position } : undefined}
            sizes={sizes}
          />
        </div>
      ))}
      {slides.length > 1 && (
        <div className="hero-slides__controls">
          <div className="hero-slides__dots" role="group" aria-label="Choose an image" onKeyDown={navigateDots}>
            {slides.map(({ src }, index) => (
              <button
                key={src}
                type="button"
                className="hero-slides__dot"
                aria-label={`Show image ${index + 1} of ${slides.length}`}
                aria-pressed={index === current}
                aria-controls={`${id}-slide-${index}`}
                onClick={() => selectSlide(index)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
