import Image from 'next/image';
import Section from '@/components/Section';

const images = [
  ['/images/gallery/n8.jpg', 'UXUE technician carrying out an infrastructure installation'],
  ['/images/gallery/p2.jpg', 'Structured cabling field installation'],
  ['/images/gallery/p5.jpg', 'Security system equipment installation'],
  ['/images/gallery/n9.jpg', 'Network infrastructure at a deployment site'],
  ['/images/gallery/n11.jpg', 'Access control installation'],
  ['/images/gallery/p9.jpg', 'Outdoor surveillance cameras installed on a pole'],
  ['/images/gallery/p12.jpg', 'Network switches and patching in a communications rack'],
  ['/images/gallery/p17.jpg', 'Perimeter infrastructure installation'],
  ['/images/gallery/p18.jpg', 'Automation system deployment'],
  ['/images/gallery/p19.jpg', 'Access control field installation'],
] as const;

export default function GallerySection() {
  return <Section className="section section--paper"><div className="section-intro section-intro--center"><h2>From our <span className="accent">sites</span></h2><p>Photographs from our own installations.</p></div><div className="field-gallery">{images.map(([src, alt], index) => <div key={src} className={index === 0 || index === 5 ? 'field-gallery__wide' : ''}><Image src={src} alt={alt} fill sizes="(max-width: 767px) 50vw, 25vw" /></div>)}</div></Section>;
}
