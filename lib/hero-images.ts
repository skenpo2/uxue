export type HeroImage = {
  src: string;
  alt: string;
  position?: string;
};

// Concept imagery for marketing headers. Project photography stays with project records.
export const heroImages = {
  infrastructure: {
    src: '/images/uxue-integrated-infrastructure-hero.webp',
    alt: 'Conceptual enterprise facility with a glass-fronted network room, access control and security monitoring.',
  },
  physicalSecurity: {
    src: '/images/uxue-physical-security-hero.webp',
    alt: 'Conceptual enterprise entrance with glass security gates, a biometric reader and discreet surveillance.',
    position: '72% center',
  },
  networking: {
    src: '/images/uxue-enterprise-networking-hero.webp',
    alt: 'Conceptual enterprise network installation with organised blue patch cables and precision-mounted switches.',
    position: '65% center',
  },
  automation: {
    src: '/images/uxue-security-automation-hero.webp',
    alt: 'Conceptual corporate entrance integrating an automated vehicle barrier, access reader and recognition camera.',
    position: '58% center',
  },
  cybersecurity: {
    src: '/images/uxue-cybersecurity-hero.webp',
    alt: 'Conceptual security operations room with network monitoring displays and protected infrastructure.',
    position: '70% center',
  },
} satisfies Record<string, HeroImage>;

const fieldImages = {
  networkEngineer: {
    src: '/media/network-engineer-installation.webp',
    alt: 'Network engineer configuring enterprise infrastructure in a communications rack.',
    position: '56% center',
  },
  accessControl: {
    src: '/media/access-control-reader.webp',
    alt: 'Modern access-control reader installed at a secure enterprise entrance.',
    position: '66% center',
  },
  dataCentre: {
    src: '/media/data-centre-aisle.webp',
    alt: 'Enterprise data-centre aisle with organised equipment racks and overhead infrastructure.',
    position: '58% center',
  },
  monitoring: {
    src: '/media/operations-monitoring.webp',
    alt: 'Operator working across multiple monitoring displays in a technical control environment.',
    position: '56% center',
  },
} satisfies Record<string, HeroImage>;

export const homeHeroImages: HeroImage[] = [
  heroImages.infrastructure,
  fieldImages.networkEngineer,
  fieldImages.accessControl,
  fieldImages.dataCentre,
  fieldImages.monitoring,
];

export const companyHeroImages: HeroImage[] = [
  heroImages.infrastructure,
  heroImages.physicalSecurity,
  heroImages.cybersecurity,
];

export const industryHeroImages: HeroImage[] = [
  heroImages.physicalSecurity,
  heroImages.automation,
  heroImages.infrastructure,
];

export const insightHeroImages: HeroImage[] = [
  heroImages.networking,
  heroImages.cybersecurity,
  heroImages.infrastructure,
];

const serviceHeroImages: Record<string, HeroImage[]> = {
  'physical-security': [heroImages.physicalSecurity, heroImages.automation, heroImages.infrastructure],
  networking: [heroImages.networking, heroImages.infrastructure, heroImages.cybersecurity],
  automation: [heroImages.automation, heroImages.physicalSecurity, heroImages.cybersecurity],
  'ict-equipment': [heroImages.infrastructure, heroImages.networking, heroImages.cybersecurity],
  cybersecurity: [heroImages.cybersecurity, heroImages.networking, heroImages.infrastructure],
};

export function getServiceHeroImages(slug: string): HeroImage[] {
  return serviceHeroImages[slug] ?? companyHeroImages;
}
