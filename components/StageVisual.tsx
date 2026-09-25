type StageVisualProps = {
  type: 'discover' | 'design' | 'deploy' | 'support';
};

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Blips sit where the radar sweep crosses them; the negative delay keeps each
// blip in phase with the 3.6s sweep (hit time = angle offset / 360 * 3.6s).
const blips = [
  { x: 149.4, y: 72, delay: '-3.2s' },
  { x: 93.3, y: 84.9, delay: '-2s' },
  { x: 80.4, y: 29.8, delay: '-1s' },
];

// Route nodes fire as the 5s cable route reaches them (share of path * 55%).
const routeNodes = [
  { x: 58, y: 34, delay: '-5s' },
  { x: 118, y: 34, delay: '-4.02s' },
  { x: 118, y: 96, delay: '-3s' },
  { x: 164, y: 96, delay: '-2.25s' },
];

const ecg = 'l8 0 6-20 6 42 6-58 6 44 6-8h32';

export default function StageVisual({ type }: StageVisualProps) {
  return (
    <svg className={`stage-visual stage-visual--${type}`} viewBox="0 0 220 130" aria-hidden="true" focusable="false">
      {type === 'discover' && <>
        <g {...line} opacity=".35">
          <circle cx="110" cy="65" r="54" />
          <circle cx="110" cy="65" r="36" />
          <circle cx="110" cy="65" r="18" />
          <path d="M110 7v116M52 65h116" opacity=".6" />
        </g>
        <g className="sv-sweep">
          <path d="M110 65 110 11A54 54 0 0 1 156.8 38Z" fill="currentColor" opacity=".14" />
          <path d="M110 65 156.8 38" {...line} />
        </g>
        {blips.map((blip) => <g key={blip.x} className="sv-blip" style={{ animationDelay: blip.delay }}>
          <circle cx={blip.x} cy={blip.y} r="3.2" fill="currentColor" />
          <circle cx={blip.x} cy={blip.y} r="3.2" {...line} className="sv-blip__ring" style={{ animationDelay: blip.delay }} />
        </g>)}
        <circle cx="110" cy="65" r="3" fill="currentColor" />
        <text x="8" y="124" className="sv-readout">SURVEY · 3 ZONES</text>
      </>}

      {type === 'design' && <>
        <g {...line} opacity=".3">
          <path d="M40 8h140M40 4v8M75 6v4M110 4v8M145 6v4M180 4v8" />
        </g>
        <g {...line} opacity=".55">
          <path d="M40 18h140v94H40z" />
          <path d="M40 60h60v52M100 18v22M130 18v62h50" />
        </g>
        <path className="sv-route" d="M58 34h60v62h46" {...line} strokeWidth={1.8} strokeDasharray="168" />
        {routeNodes.map((node) => <g key={`${node.x}-${node.y}`}>
          <rect x={node.x - 4} y={node.y - 4} width="8" height="8" {...line} fill="var(--card-bg, #fff)" />
          <circle cx={node.x} cy={node.y} r="6" {...line} className="sv-node-ring" style={{ animationDelay: node.delay }} />
        </g>)}
        <text x="8" y="124" className="sv-readout">REV C · 4 DEVICES</text>
      </>}

      {type === 'deploy' && <>
        <g {...line}>
          <path d="M72 6h76v106H72z" opacity=".6" />
          <path d="M66 112h88" opacity=".6" />
          <path d="M72 34H46v40h-8M148 58h26v34h8" opacity=".4" />
        </g>
        {[0, 1, 2, 3, 4].map((unit) => <g key={unit}>
          <rect x="79" y={12 + unit * 19.5} width="62" height="14" {...line} opacity=".75" />
          <path d={`M85 ${19 + unit * 19.5}h22`} {...line} opacity=".35" strokeDasharray="2 3" />
          <circle cx="133" cy={19 + unit * 19.5} r="2.4" className="sv-led" style={{ animationDuration: `${[2.4, 3.1, 1.9, 2.7, 3.6][unit]}s` }} />
        </g>)}
        <rect x="160" y="112" width="52" height="3" rx="1.5" fill="currentColor" opacity=".15" />
        <rect x="160" y="112" width="52" height="3" rx="1.5" fill="currentColor" className="sv-progress" />
        <text x="8" y="124" className="sv-readout">RACK A · 5/5</text>
      </>}

      {type === 'support' && <>
        <defs><clipPath id="sv-ecg-clip"><rect x="8" y="10" width="204" height="96" /></clipPath></defs>
        <g {...line} opacity=".18">
          <path d="M8 34h204M8 58h204M8 82h204M48 10v96M88 10v96M128 10v96M168 10v96" />
        </g>
        <g clipPath="url(#sv-ecg-clip)">
          <path className="sv-ecg" d={`M-102 70${`h32${ecg}`.repeat(5)}`} {...line} strokeWidth={1.8} />
        </g>
        <circle cx="198" cy="20" r="3" fill="currentColor" className="sv-live" />
        <text x="8" y="124" className="sv-readout">UPTIME 99.98% · 24/7</text>
      </>}
    </svg>
  );
}
