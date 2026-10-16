'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const stages = [
  {
    id: 'discover',
    tab: 'Discover',
    head: 'Start with the site, not the catalogue.',
    points: ['Survey of the buildings, users and risks', 'Existing systems and constraints documented', 'Business priorities agreed before any design'],
    output: 'Site survey and risk register',
    cta: { label: 'Talk to an engineer', href: '/contact' },
    image: '/images/delivery/discover-engineer-survey.jpg',
    alt: 'An engineer in a hard hat reviewing a site survey on a tablet.',
  },
  {
    id: 'design',
    tab: 'Design',
    head: 'One architecture across every system.',
    points: ['Security, network and power planned together', 'Equipment specified for compatibility and lifecycle', 'A delivery plan built around live operations'],
    output: 'Architecture and delivery plan',
    cta: { label: 'Explore our solutions', href: '/solutions' },
    image: '/images/delivery/design-planning.jpg',
    alt: 'Hands drafting architectural plans with a pencil and set square.',
  },
  {
    id: 'deploy',
    tab: 'Deploy',
    head: 'Installed with control around the live site.',
    points: ['Disciplined cabling, labelling and installation', 'Configuration and integration across systems', 'Every system tested before handover'],
    output: 'Commissioned, tested systems',
    cta: { label: 'View our projects', href: '/projects' },
    image: '/images/delivery/deploy-installation.jpg',
    alt: 'An engineer working with a power tool inside a cabled network rack.',
  },
  {
    id: 'support',
    tab: 'Support',
    head: 'Documented, trained and supported.',
    points: ['Handover documentation for every system', 'Training for the people who operate it', 'Ongoing support agreed in a service level agreement'],
    output: 'Handover, training and SLA',
    cta: { label: 'About UXUE', href: '/about' },
    image: '/images/delivery/support-servers.jpg',
    alt: 'An engineer checking servers on a laptop in a data centre.',
  },
];

// Four stages side by side; the active one expands to show its detail. Hover, focus or tap opens a stage.
export default function DeliveryTabs() {
  const [active, setActive] = useState(0);
  const hover = useRef<number | undefined>(undefined);

  // A short pause before a hovered stage opens, so sweeping the pointer across the row does not flicker.
  const hoverOpen = (i: number) => {
    window.clearTimeout(hover.current);
    hover.current = window.setTimeout(() => setActive(i), 120);
  };
  const cancelHover = () => window.clearTimeout(hover.current);
  useEffect(() => cancelHover, []);

  return (
    <ol className="stages">
      {stages.map((stage, i) => {
        const open = i === active;
        return (
          <li
            key={stage.id}
            className={`stage${open ? ' is-open' : ''}`}
            onMouseEnter={() => hoverOpen(i)}
            onMouseLeave={cancelHover}
            onFocus={() => setActive(i)}
          >
            <button type="button" className="stage__label" aria-expanded={open} aria-controls={`stage-${stage.id}`} onClick={() => setActive(i)}>
              <span>0{i + 1}</span>
              {stage.tab}
            </button>
            <div className="stage__body" id={`stage-${stage.id}`} inert={!open}>
              <h3>{stage.head}</h3>
              <ul className="dot-list">{stage.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <p className="stage__output">You receive<strong>{stage.output}</strong></p>
              <Link href={stage.cta.href} className="text-link text-link--light">{stage.cta.label}</Link>
            </div>
            <figure className="stage__media">
              <Image src={stage.image} alt={stage.alt} fill sizes="(max-width: 900px) 100vw, 30vw" />
            </figure>
          </li>
        );
      })}
    </ol>
  );
}
