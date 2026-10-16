'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useSyncExternalStore } from 'react';

// Photos: Unsplash photo-1609234153285 (mirrored); Pexels (free licence) 1181316, 13657444 (wall extended).
// `tone` is the brightness of the photo behind the copy; bright photos take navy text.
// `title` is [lead, highlighted words, tail].
const slides = [
  {
    label: 'Surveillance',
    image: '/images/hero/hero-surveillance.jpg',
    alt: 'Security cameras mounted on a pole against a clear sky.',
    position: 'center',
    tone: 'light',
    title: ['Built for what ', 'cannot fail', '.'],
    body: 'Security, network and ICT infrastructure for organisations across East Africa.',
    cta: { label: 'Explore our solutions', href: '/solutions' },
  },
  {
    label: 'Integration',
    image: '/images/hero/hero-data-centre.jpg',
    alt: 'Engineer with a laptop beside server racks in a data-centre corridor.',
    position: 'center',
    tone: 'dark',
    title: ['One partner for every ', 'critical layer', '.'],
    body: 'Security, networking and cybersecurity, delivered by one accountable team.',
    cta: { label: 'See how we deliver', href: '/#delivery' },
  },
  {
    label: 'Delivery',
    image: '/images/hero/hero-access-card.jpg',
    alt: 'A card presented to an access-control reader on a concrete wall.',
    position: 'center',
    tone: 'light',
    title: ['Designed, tested and ', 'documented', '.'],
    body: 'Surveyed first, tested throughout and handed over with full documentation.',
    cta: { label: 'View our projects', href: '/projects' },
  },
];

const SLIDE_DURATION = 6500;

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

export default function HomeHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => true,
  );
  const slide = slides[index];

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % slides.length), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [index, paused, reducedMotion]);

  return (
    <section
      className={`home-hero${slide.tone === 'light' ? ' home-hero--on-light' : ''}`}
      aria-roledescription="carousel"
      aria-label="UXUE at a glance"
      // Only keyboard focus pauses the rotation, so keyboard users can read a slide before it moves on.
      onFocus={(event) => setPaused(event.target.matches(':focus-visible'))}
      onBlur={() => setPaused(false)}
    >
      <div className="home-hero__media">
        {slides.map((item, i) => (
          <div key={item.label} className={`home-hero__slide${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
            <Image src={item.image} alt={item.alt} fill priority={i === 0} sizes="100vw" style={{ objectPosition: item.position }} />
          </div>
        ))}
      </div>

      <div className="shell">
        <div className="home-hero__copy">
          {/* Keyed by slide so the copy remounts and replays its rise. */}
          <div key={index} aria-live={paused || reducedMotion ? 'polite' : 'off'}>
            <h1 className="rise">{slide.title[0]}<span className="accent">{slide.title[1]}</span>{slide.title[2]}</h1>
            <p className="home-hero__body rise rise--2">{slide.body}</p>
            <div className="hero-actions rise rise--3">
              <Link href={slide.cta.href} className="button button--orange">{slide.cta.label}</Link>
              <Link href="/contact" className="button button--outline">Start a conversation</Link>
            </div>
          </div>

          <div className="home-hero__dots">
            {slides.map((item, i) => (
              <button
                key={item.label}
                type="button"
                className="home-hero__dot"
                aria-label={`Show slide ${i + 1}: ${item.label}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
