import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSlideshow from '@/components/HeroSlideshow';
import type { HeroImage } from '@/lib/hero-images';

export default function PageHero({ title, description, image, images, breadcrumbs }: { title: string; description: string; image?: string; images?: (string | HeroImage)[]; breadcrumbs?: { label: string; href?: string }[] }) {
  const slides = (images && images.length > 0 ? images : image ? [image] : []).filter(Boolean);
  return (
    <header className={`page-hero${slides.length === 0 ? ' page-hero--text-only' : ''}`}>
      <div className="shell page-hero__layout">
        <div className="page-hero__content">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <h1>{title}</h1>
          <p className="page-hero__lede">{description}</p>
        </div>
        {slides.length > 0 && (
          <div className="page-hero__media">
            <HeroSlideshow images={slides} label={title} className="page-hero__image" sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1440px) 48vw, 660px" />
          </div>
        )}
      </div>
    </header>
  );
}
