'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Item = { slug: string; title: string; category: string; summary: string; image: string };

const chevron = { left: 'M10 3 5 8l5 5', right: 'M6 3l5 5-5 5' };

// A scroll-snap row of project cards with previous and next buttons; it also swipes on touch screens.
export default function ProjectCarousel({ items }: { items: Item[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || '0')), behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <ul className="carousel__track" ref={track}>
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={`/projects/${item.slug}`} className="carousel-card">
              <div className="carousel-card__image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 600px) 85vw, (max-width: 1023px) 46vw, 31vw" /></div>
              <small>{item.category}</small>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
      {(['left', 'right'] as const).map((side) => (
        <button
          key={side}
          type="button"
          className={`carousel__button carousel__button--${side}`}
          aria-label={side === 'left' ? 'Previous projects' : 'Next projects'}
          disabled={side === 'left' ? edge.start : edge.end}
          onClick={() => move(side === 'left' ? -1 : 1)}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={chevron[side]} /></svg>
        </button>
      ))}
    </div>
  );
}
