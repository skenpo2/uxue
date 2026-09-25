type ProcessIconProps = {
  type: 'discover' | 'design' | 'deploy' | 'support';
};

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function ProcessIcon({ type }: ProcessIconProps) {
  return (
    <svg className="process-icon" viewBox="0 0 140 140" aria-hidden="true" focusable="false">
      <g {...line} opacity=".2">
        <path d="M10 35V10h25M105 10h25v25M130 105v25h-25M35 130H10v-25" />
        <circle cx="70" cy="70" r="59.5" />
      </g>

      {type === 'discover' && <g {...line}>
        <circle cx="65" cy="64" r="31" />
        <circle cx="65" cy="64" r="19" opacity=".55" />
        <circle cx="65" cy="64" r="5" />
        <path d="m87 86 25 25M65 33V20M34 64H21M65 95v13M96 64h13" />
        <path d="M65 64 87 45" />
        <circle cx="91" cy="42" r="4" />
        <circle cx="42" cy="48" r="3" />
        <circle cx="50" cy="88" r="3" />
      </g>}

      {type === 'design' && <g {...line}>
        <path d="M27 37h86v66H27z" />
        <path d="M27 58h34V37M61 58v45M61 79h52M88 79v24M61 58h52" />
        <path d="M37 47h14M71 68h32M71 90h7M98 89h5" opacity=".55" />
        <path d="M20 29h100M20 111h100M19 34v-10M35 34v-5M52 34v-5M70 34V24M88 34v-5M105 34v-5M121 34V24" />
        <circle cx="61" cy="58" r="3" />
        <circle cx="88" cy="79" r="3" />
      </g>}

      {type === 'deploy' && <g {...line}>
        <path d="m22 85 48-28 48 28-48 28-48-28Z" />
        <path d="m22 85 48 28v13M118 85l-48 28" opacity=".55" />
        <path d="M45 72V41l25-14 25 14v31" />
        <path d="m45 41 25 14 25-14M70 55v42" />
        <path d="M54 52v12M62 57v12M78 56v13M86 51v13" opacity=".65" />
        <circle cx="22" cy="85" r="3" />
        <circle cx="70" cy="113" r="3" />
        <circle cx="118" cy="85" r="3" />
      </g>}

      {type === 'support' && <g {...line}>
        <path d="M70 31 95 41v20c0 18-10 31-25 39-15-8-25-21-25-39V41l25-10Z" />
        <path d="m58 64 8 8 17-19" />
        <path d="M31 44a48 48 0 0 0-7 26c0 25 19 45 43 48M109 96a48 48 0 0 0 7-26c0-25-19-45-43-48" opacity=".7" />
        <path d="m59 112 8 6-8 7M81 28l-8-6 8-7" />
        <circle cx="24" cy="70" r="4" />
        <circle cx="116" cy="70" r="4" />
      </g>}
    </svg>
  );
}
