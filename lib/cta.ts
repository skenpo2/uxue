// Closing call-to-action backdrops. Each page gets its own photo; `side` is where the white card sits,
// chosen so the card never covers the photo's subject. Photos: Pexels (free licence).
export type CtaImage = { src: string; side: 'left' | 'right' };

const img = (name: string, side: CtaImage['side']): CtaImage => ({ src: `/images/cta/${name}.jpg`, side });

export const ctaImages = {
  home: img('data-centre-aisle', 'right'),
  solutions: img('office-tower-night', 'left'), // 13219418
  'physical-security': img('cameras-corrugated-wall', 'left'), // 5581836
  networking: img('fibre-panel', 'right'), // 4682189
  automation: img('parking-barriers', 'right'), // 34182544
  'ict-equipment': img('workstation-racks', 'left'), // 5092815
  cybersecurity: img('server-close-up', 'left'), // 37605913
  about: img('glass-tower', 'left'), // 37320179
  industries: img('control-corridor', 'right'), // 38217230
  corporate: img('meeting-room', 'left'), // 13323673
  'financial-services': img('cameras-steel-wall', 'left'), // 11790823
  government: img('conference-hall', 'left'), // 9300726
  healthcare: img('hospital-corridor', 'right'), // 37036967
  education: img('training-room', 'left'), // 9300765
  industrial: img('production-plant', 'right'), // 36823725
  'commercial-real-estate': img('apartments', 'left'), // 18153132
  technology: img('server-rack-teal', 'right'), // 37730212
  projects: img('production-hall', 'left'), // 14804699
  insights: img('minimal-desk', 'right'), // 8534373
} satisfies Record<string, CtaImage>;

// Project and article pages rotate through photos not used elsewhere.
const projectPool = [img('monitoring-desk', 'right'), img('laptop-meeting-table', 'right')]; // 5380792, 9300722
const articlePool = [img('laptop-desk', 'right'), img('laptop-meeting-table', 'right'), img('monitoring-desk', 'right')]; // 8092469

export const projectCta = (index: number) => projectPool[index % projectPool.length];
export const articleCta = (index: number) => articlePool[index % articlePool.length];
