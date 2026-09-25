type CapabilityIconProps = {
  type: string;
};

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function CapabilityIcon({ type }: CapabilityIconProps) {
  return (
    <svg className="capability-icon" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
      {type === 'physical-security' && <g {...common}>
        <path d="M18 34h48l12 10v19H30L18 51V34Z" />
        <path d="M30 63v8M67 63v8M22 72h53" />
        <circle cx="57" cy="48.5" r="8.5" />
        <circle cx="57" cy="48.5" r="3" />
        <path d="M18 40H9M9 35v10M75 27c6 2 10 6 12 12M74 19c10 3 18 10 22 20" />
      </g>}
      {type === 'networking' && <g {...common}>
        <circle cx="48" cy="47" r="10" />
        <circle cx="18" cy="20" r="7" />
        <circle cx="78" cy="20" r="7" />
        <circle cx="18" cy="76" r="7" />
        <circle cx="78" cy="76" r="7" />
        <path d="m25 25 16 15M71 25 55 40M25 71l16-16M71 71 55 55M48 37V16M48 57v23" />
        <path d="M42 11h12M42 85h12" />
      </g>}
      {type === 'automation' && <g {...common}>
        <path d="M24 24h24v18H24zM48 54h24v18H48z" />
        <circle cx="72" cy="30" r="8" />
        <circle cx="24" cy="66" r="8" />
        <path d="M48 33h16M72 38v10M48 63H32M24 58V48M35 42v12M61 42v12" />
        <path d="m31 50 4 4 4-4M57 46l4-4 4 4" />
      </g>}
      {type === 'ict-equipment' && <g {...common}>
        <rect x="19" y="14" width="58" height="68" rx="2" />
        <path d="M19 34h58M19 55h58M19 74h58" />
        <circle cx="29" cy="24" r="2" />
        <circle cx="29" cy="44.5" r="2" />
        <circle cx="29" cy="64.5" r="2" />
        <path d="M40 24h25M40 44.5h25M40 64.5h25M27 82v6M69 82v6" />
      </g>}
      {type === 'cybersecurity' && <g {...common}>
        <path d="M48 10 76 21v22c0 19-11 34-28 43-17-9-28-24-28-43V21L48 10Z" />
        <rect x="36" y="41" width="24" height="19" rx="2" />
        <path d="M41 41v-7a7 7 0 0 1 14 0v7M48 49v5M20 30H8M76 30h12M26 68H12M70 68h14" />
        <circle cx="7" cy="30" r="2" />
        <circle cx="89" cy="30" r="2" />
        <circle cx="11" cy="68" r="2" />
        <circle cx="85" cy="68" r="2" />
      </g>}
    </svg>
  );
}
