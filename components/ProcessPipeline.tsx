'use client';

import { useEffect, useRef, useState } from 'react';
import StageVisual from '@/components/StageVisual';

type Step = {
  type: 'discover' | 'design' | 'deploy' | 'support';
  title: string;
  text: string;
  output: string;
  status: string;
};

type Geometry = {
  d: string;
  total: number;
  // Distance along the loop where the conduit enters and leaves each card.
  ports: [number, number][];
  vertical: boolean;
  label: { x: number; y: number } | null;
};

const SPEED = 110; // px per second along the conduit
const PACKETS = 3;
const RADIUS = 16;
const GUTTER = 26;
const TAILS = [[90, 0.1], [44, 0.22], [14, 0.7]] as const;

type Point = [number, number];

// Closed loop through `points`: points[0] sits on a straight run, every other
// point is a 90° corner rounded with RADIUS.
function loopPath(points: Point[]) {
  const unit = (a: Point, b: Point): Point => {
    const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
    return [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
  };
  let d = `M${points[0][0]} ${points[0][1]}`;
  let straight = 0;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const c = points[i];
    const b = points[(i + 1) % points.length];
    const [ux, uy] = unit(a, c);
    const [vx, vy] = unit(c, b);
    const sweep = ux * vy - uy * vx > 0 ? 1 : 0;
    d += ` L${c[0] - ux * RADIUS} ${c[1] - uy * RADIUS} A${RADIUS} ${RADIUS} 0 0 ${sweep} ${c[0] + vx * RADIUS} ${c[1] + vy * RADIUS}`;
    straight += Math.hypot(c[0] - a[0], c[1] - a[1]);
  }
  const last = points[points.length - 1];
  straight += Math.hypot(points[0][0] - last[0], points[0][1] - last[1]);
  const corners = points.length - 1;
  return { d: `${d} Z`, total: straight - corners * 2 * RADIUS + corners * (Math.PI / 2) * RADIUS };
}

export default function ProcessPipeline({ steps }: { steps: readonly Step[] }) {
  const root = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const track = useRef<SVGPathElement>(null);
  const heads = useRef<(SVGCircleElement | null)[]>([]);
  const tails = useRef<(SVGPathElement | null)[]>([]);
  const geometry = useRef<Geometry | null>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);

  // Rebuild the conduit around wherever the cards actually are.
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const measure = () => {
      const box = node.getBoundingClientRect();
      const rects = cards.current.map((card) => {
        const r = card!.getBoundingClientRect();
        return { l: r.left - box.left, r: r.right - box.left, t: r.top - box.top, b: r.bottom - box.top };
      });
      const first = rects[0];
      const last = rects[rects.length - 1];
      const vertical = rects[1].t >= first.b - 1;
      let points: Point[];
      let ports: [number, number][];
      let label: Geometry['label'] = null;
      if (vertical) {
        const x = Math.round((first.l + first.r) / 2);
        const gx = first.l - GUTTER;
        points = [[x, first.t], [x, last.b + GUTTER], [gx, last.b + GUTTER], [gx, first.t - GUTTER], [x, first.t - GUTTER]];
        ports = rects.map((r) => [r.t - first.t, r.b - first.t]);
      } else {
        const y = Math.round((first.t + first.b) / 2);
        const bottom = Math.max(...rects.map((r) => r.b)) + 48;
        points = [[first.l, y], [last.r + GUTTER, y], [last.r + GUTTER, bottom], [first.l - GUTTER, bottom], [first.l - GUTTER, y]];
        ports = rects.map((r) => [r.l - first.l, r.r - first.l]);
        label = { x: (first.l + last.r) / 2, y: bottom };
      }
      const next = { ...loopPath(points), ports, vertical, label };
      geometry.current = next;
      setGeo(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // One clock drives every packet and every card, so they can never drift.
  useEffect(() => {
    const node = root.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let previous = 0;
    let travelled = 0;
    let paused = false;

    const tick = (time: number) => {
      const dt = previous ? Math.min(time - previous, 64) / 1000 : 0;
      previous = time;
      const g = geometry.current;
      const path = track.current;
      if (g && path && !paused) {
        travelled = (travelled + dt * SPEED) % g.total;
        const inside: number[] = g.ports.map(() => -1);
        for (let p = 0; p < PACKETS; p++) {
          const pos = (travelled + (p * g.total) / PACKETS) % g.total;
          const point = path.getPointAtLength(pos);
          heads.current[p]?.setAttribute('cx', `${point.x}`);
          heads.current[p]?.setAttribute('cy', `${point.y}`);
          TAILS.forEach(([length], k) => {
            const tail = tails.current[p * TAILS.length + k];
            tail?.setAttribute('stroke-dasharray', `${length} ${g.total}`);
            tail?.setAttribute('stroke-dashoffset', `${length - pos}`);
          });
          g.ports.forEach(([enter, exit], i) => {
            if (pos >= enter && pos <= exit) inside[i] = (pos - enter) / (exit - enter);
          });
        }
        cards.current.forEach((card, i) => {
          if (!card) return;
          const active = inside[i] >= 0;
          card.classList.toggle('is-active', active);
          if (active) card.style.setProperty('--scan', inside[i].toFixed(3));
        });
      }
      frame = requestAnimationFrame(tick);
    };

    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      previous = 0;
      node.classList.toggle('is-running', entry.isIntersecting);
      if (entry.isIntersecting) frame = requestAnimationFrame(tick);
    }, { threshold: 0.1 });
    visibility.observe(node);

    const hold = () => { paused = true; };
    const release = () => { paused = false; };
    node.addEventListener('pointerenter', hold);
    node.addEventListener('pointerleave', release);
    return () => {
      cancelAnimationFrame(frame);
      visibility.disconnect();
      node.removeEventListener('pointerenter', hold);
      node.removeEventListener('pointerleave', release);
    };
  }, []);

  return (
    <div ref={root} className={`loop${geo?.vertical ? ' loop--vertical' : ''}`}>
      <svg className="loop__conduit" aria-hidden="true" focusable="false">
        {geo && <>
          <path d={geo.d} className="loop__pipe" />
          <path d={geo.d} className="loop__bore" />
          <path ref={track} d={geo.d} className="loop__flow" />
          {Array.from({ length: PACKETS }, (_, p) => <g key={p} className="loop__packet">
            {TAILS.map(([, opacity], k) => <path key={k} ref={(el) => { tails.current[p * TAILS.length + k] = el; }} d={geo.d} strokeOpacity={opacity} strokeDasharray={`0 ${geo.total}`} />)}
            <circle ref={(el) => { heads.current[p] = el; }} r="3.5" cx="-20" cy="-20" />
          </g>)}
        </>}
      </svg>

      {geo?.label && <p className="loop__return" style={{ left: geo.label.x, top: geo.label.y }}>
        <span aria-hidden="true">←</span> What we learn in operation feeds the next discovery
      </p>}

      <ol className="loop__stages">
        {steps.map((step, index) => (
          <li key={step.title}>
            <article ref={(el) => { cards.current[index] = el; }} className={`loop__card loop__card--${step.type}`}>
              <span className="loop__port loop__port--in" aria-hidden="true" />
              <span className="loop__port loop__port--out" aria-hidden="true" />
              <span className="loop__fx" aria-hidden="true"><span className="loop__wash" /><span className="loop__beam" /></span>
              <header className="loop__head">
                <span className="loop__index">0{index + 1}</span>
                <span className="loop__status" aria-hidden="true"><b className="loop__idle">Ready</b><b className="loop__busy">{step.status}</b></span>
              </header>
              <div className="loop__visual"><StageVisual type={step.type} /></div>
              <div className="loop__copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small><span>Output</span>{step.output}</small>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
