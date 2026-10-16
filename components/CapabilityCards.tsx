import Image from 'next/image';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { services } from '@/lib/site';

// Product cutouts: Pexels (free licence) 25384403, 32698413, 17155842, 17489152, 4973899.
// `width` is the rendered width of the product as a % of the art panel.
const products: Record<string, { image: string; width: number }> = {
  'physical-security': { image: '/images/capabilities/cctv-camera.webp', width: 48 },
  networking: { image: '/images/capabilities/network-switch.webp', width: 52 },
  automation: { image: '/images/capabilities/access-terminal.webp', width: 16 },
  'ict-equipment': { image: '/images/capabilities/servers.webp', width: 48 },
  cybersecurity: { image: '/images/capabilities/secure-laptop.webp', width: 46 },
};

/* Isometric plinth: a main block the product stands on, a lighter step in front
   and a small orange accent to the side. Bases run past the panel edge so the
   blocks bleed off the card. */
const ART_W = 360;
const ART_H = 330;
const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;
const ORIGIN = { x: 150, y: 236 };

// Face colours per block tone: top, front, side.
const TONES = {
  indigo: ['#2b3bb0', '#1f2c8a', '#151f66'],
  light: ['#8e9be8', '#6d7bcc', '#5260ae'],
  orange: ['#ffb15a', '#fe941e', '#c96f0c'],
} as const;

type Block = { x: number; y: number; w: number; d: number; h: number; tone: keyof typeof TONES };

const BLOCKS: Block[] = [
  { x: 0, y: 0, w: 116, d: 116, h: 128, tone: 'indigo' },
  { x: 134, y: 4, w: 52, d: 52, h: 58, tone: 'orange' },
  { x: -20, y: 132, w: 92, d: 92, h: 70, tone: 'light' },
];

const project = (x: number, y: number, z: number) => `${ORIGIN.x + (x - y) * COS},${ORIGIN.y + (x + y) * SIN - z}`;

const faces = ({ x, y, w, d, h }: Block) => ({
  top: [project(x, y, h), project(x + w, y, h), project(x + w, y + d, h), project(x, y + d, h)],
  front: [project(x, y + d, -200), project(x + w, y + d, -200), project(x + w, y + d, h), project(x, y + d, h)],
  side: [project(x + w, y, -200), project(x + w, y + d, -200), project(x + w, y + d, h), project(x + w, y, h)],
});

// Centre of the main block's top face, as a fraction of the art panel.
const MAIN = BLOCKS[0];
const TOP_X = (ORIGIN.x + (MAIN.x + MAIN.w / 2 - (MAIN.y + MAIN.d / 2)) * COS) / ART_W;
const TOP_Y = (ORIGIN.y + (MAIN.x + MAIN.w / 2 + (MAIN.y + MAIN.d / 2)) * SIN - MAIN.h) / ART_H;

function Plinth() {
  return (
    <svg viewBox={`0 0 ${ART_W} ${ART_H}`} className="plinth" aria-hidden="true">
      {[...BLOCKS].sort((a, b) => a.x + a.y - (b.x + b.y)).map((block, i) => {
        const f = faces(block);
        const [top, front, side] = TONES[block.tone];
        return (
          <g key={i}>
            <polygon points={f.front.join(' ')} fill={front} />
            <polygon points={f.side.join(' ')} fill={side} />
            <polygon points={f.top.join(' ')} fill={top} />
          </g>
        );
      })}
    </svg>
  );
}

// `children` fills the first grid cell, so the heading and five cards complete three rows of two.
export default function CapabilityCards({ children }: { children: ReactNode }) {
  return (
    <div className="capability-grid">
      <div className="capability-grid__intro">{children}</div>
      {services.map((service) => {
        const product = products[service.slug];
        return (
          <article key={service.slug} className="capability-card">
            <div className="capability-card__art">
              {/* Locked to the plinth's aspect so the product lands on its top face. */}
              <div className="capability-card__stage">
                <Plinth />
                {product && (
                  <Image
                    src={product.image}
                    alt=""
                    width={900}
                    height={600}
                    sizes="(max-width: 767px) 60vw, 22vw"
                    className="capability-card__product"
                    style={{ left: `${TOP_X * 100}%`, top: `${TOP_Y * 100}%`, width: `${product.width}%` }}
                  />
                )}
              </div>
            </div>
            <div className="capability-card__body">
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <Link href={`/solutions/${service.slug}`} className="text-link text-link--light">Explore {service.shortName}<span className="sr-only">: {service.name}</span></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
