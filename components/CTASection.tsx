import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ctaImages, type CtaImage } from '@/lib/cta';

type Props = { title?: ReactNode; text?: string; link?: string; href?: string; image?: CtaImage };

// Closing call to action: a full-width photo with one white card and a single action.
export default function CTASection({
  title = <>Tell us what you need to <span className="accent">protect and connect</span>.</>,
  text = 'Share the site and the problem. An engineer will walk through it with you and come back with a clear scope.',
  link = 'Request a free site assessment',
  href = '/contact',
  image = ctaImages.home,
}: Props) {
  return (
    <section className={`cta-band cta-band--${image.side}`} id="contact-cta">
      <Image src={image.src} alt="" fill sizes="100vw" className="cta-band__image" />
      <div className="shell">
        <div className="cta-card">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href={href} className="cta-card__link">{link}</Link>
        </div>
      </div>
    </section>
  );
}
