'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type { Service } from '@/lib/site';

// Per-service scene: the image plus the "platform" overlay drawn on it. Box
// coordinates are percentages of the 16:9 image, placed on the subject.
const scenes: Record<string, { image: string; alt: string; feed: string; box: [number, number, number, number]; tag: string; event: string; detail: string }> = {
  'physical-security': {
    image: '/images/uxue-physical-security-hero.webp',
    alt: 'Enterprise lobby with glass speed gates and a biometric access reader.',
    feed: 'CAM 04 · Main lobby', box: [41, 46, 42, 47], tag: 'Authorised entry', event: 'Access granted', detail: 'Badge 2291 · Speed gate 2',
  },
  networking: {
    image: '/images/uxue-enterprise-networking-hero.webp',
    alt: 'Network rack with organised patch cabling and enterprise switches.',
    feed: 'IDF-2 · Core rack', box: [40, 47, 40, 15], tag: 'Core switch 03', event: 'Uplink healthy', detail: '10 Gb/s · 0 packet loss',
  },
  automation: {
    image: '/images/uxue-security-automation-hero.webp',
    alt: 'Automated vehicle barrier with access reader and recognition camera at a corporate entrance.',
    feed: 'GATE 1 · Vehicle entry', box: [51, 41, 14, 46], tag: 'Barrier controller', event: 'Plate recognised', detail: 'KDA 214X · Barrier raised',
  },
  'ict-equipment': {
    image: '/images/uxue-integrated-infrastructure-hero.webp',
    alt: 'Glass-fronted server room with equipment racks and monitoring displays.',
    feed: 'DC-B · Rack row 2', box: [43, 20, 35, 68], tag: 'Row 2 · 6 racks', event: 'Racks commissioned', detail: 'Power, cooling and labelling verified',
  },
  cybersecurity: {
    image: '/images/uxue-cybersecurity-hero.webp',
    alt: 'Security operations room with network monitoring displays.',
    feed: 'SOC · Threat console', box: [51, 28, 42, 18], tag: 'Perimeter firewall', event: 'Threat contained', detail: 'Policy updated across 14 sites',
  },
};

// Event markers on the timeline strip, as percentages along the day.
const markers = [8, 17, 23, 41, 46, 63, 71, 88];

export default function CapabilityTabs({ services }: { services: readonly Service[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const service = services[active];
  const scene = scenes[service.slug];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? services.length - 1 : (active + step! + services.length) % services.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="cap-tabs">
      <div className="cap-tabs__list" role="tablist" aria-label="Capabilities" onKeyDown={onKeyDown}>
        {services.map((item, index) => (
          <button
            key={item.slug}
            ref={(el) => { tabs.current[index] = el; }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${id}-panel`}
            tabIndex={index === active ? 0 : -1}
            className="cap-tabs__tab"
            onClick={() => setActive(index)}
          >
            {item.shortName}
          </button>
        ))}
      </div>

      <div className="cap-tabs__panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`}>
        <div className="cap-tabs__copy" key={service.slug}>
          <h3>{service.eyebrow}</h3>
          <p>{service.summary}</p>
          <ul>{service.capabilities.map((capability) => <li key={capability.title}>{capability.title}</li>)}</ul>
          <Link href={`/solutions/${service.slug}`} className="text-link">Explore {service.shortName}</Link>
        </div>

        <figure className="cap-tabs__frame">
          <div className="cap-tabs__bar" aria-hidden="true">
            <span className="cap-tabs__feed">{scene.feed}</span>
            <span className="cap-tabs__live">Live</span>
          </div>
          <div className="cap-tabs__screen">
            {services.map((item, index) => {
              const s = scenes[item.slug];
              return <Image key={item.slug} src={s.image} alt={index === active ? s.alt : ''} fill sizes="(max-width: 900px) 100vw, 56vw" className={index === active ? 'is-active' : undefined} priority={index === 0} />;
            })}
            <div className="cap-tabs__overlay" key={service.slug} aria-hidden="true">
              <span className="cap-tabs__box" style={{ left: `${scene.box[0]}%`, top: `${scene.box[1]}%`, width: `${scene.box[2]}%`, height: `${scene.box[3]}%` }}>
                <i /><i /><i /><i />
                <em>{scene.tag}</em>
              </span>
              <span className="cap-tabs__chip">
                <b />
                <span><strong>{scene.event}</strong><small>{scene.detail}</small></span>
              </span>
            </div>
          </div>
          <div className="cap-tabs__timeline" aria-hidden="true">
            <span className="cap-tabs__track">
              {markers.map((at) => <i key={at} style={{ left: `${at}%` }} />)}
              <span className="cap-tabs__head" key={service.slug} />
            </span>
            <span className="cap-tabs__times"><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span></span>
          </div>
        </figure>
      </div>
    </div>
  );
}
