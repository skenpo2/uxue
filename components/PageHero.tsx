import type { ReactNode } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { HeroImage } from '@/lib/hero-images';

type Props = {
  title: ReactNode;
  description: string;
  /** The banner photo. `images` is accepted for older callers; only its first entry is used. */
  image?: string | HeroImage;
  images?: (string | HeroImage)[];
  breadcrumbs?: { label: string; href?: string }[];
};

// Inner-page hero: a rounded photo banner with a navy wash, breadcrumb, title and one short line.
export default function PageHero({ title, description, image, images, breadcrumbs }: Props) {
  const source = image ?? images?.[0];
  const photo = typeof source === 'string' ? { src: source, alt: '' } : source;
  return (
    <header className="page-banner">
      <div className="shell">
        <div className={`page-banner__frame${photo ? '' : ' page-banner__frame--plain'}`}>
          {photo && <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 1320px) 100vw, 1280px" className="page-banner__image" style={photo.position ? { objectPosition: photo.position } : undefined} />}
          <div className="page-banner__content">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
