import Breadcrumbs from '@/components/Breadcrumbs';
import HeroSlideshow from '@/components/HeroSlideshow';

export default function PageHero({ eyebrow, title, description, image, images, breadcrumbs }: { eyebrow: string; title: string; description: string; image?: string; images?: string[]; breadcrumbs?: { label: string; href?: string }[] }) {
  const slides = (images && images.length > 0 ? images : image ? [image] : []).filter(Boolean);
  return (
    <header className="page-hero">
      {slides.length > 0 && (
        <div className="page-hero__media">
          <HeroSlideshow images={slides} alt="" className="page-hero__image" sizes="(max-width: 767px) 100vw, 56vw" />
        </div>
      )}
      <div className="page-hero__veil" />
      <div className="shell page-hero__content">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__lede">{description}</p>
      </div>
    </header>
  );
}
