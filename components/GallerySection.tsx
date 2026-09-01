import Image from 'next/image';
import Section from '@/components/Section';

const images = [
  ['/images/gallery/n8.jpg', 'UXUE technician carrying out an infrastructure installation'],
  ['/images/gallery/p2.jpg', 'Structured cabling field installation'],
  ['/images/gallery/p5.jpg', 'Security system equipment installation'],
  ['/images/gallery/n9.jpg', 'Network infrastructure at a deployment site'],
  ['/images/gallery/n11.jpg', 'Access control installation'],
  ['/images/gallery/p10.jpg', 'Integrated technology equipment'],
  ['/images/gallery/p12.jpg', 'Fire alarm system field work'],
  ['/images/gallery/p15.jpg', 'Infrastructure maintenance work'],
  ['/images/gallery/n6.jpg', 'Access control deployment'],
  ['/images/gallery/p17.jpg', 'Perimeter infrastructure installation'],
  ['/images/gallery/p18.jpg', 'Automation system deployment'],
  ['/images/gallery/p19.jpg', 'Access control field installation'],
] as const;

export default function GallerySection() {
  return <Section className="section section--paper"><div className="section-heading"><div><p className="eyebrow">Field archive</p><h2>The work behind the systems.</h2></div><p>Real installation and deployment imagery from UXUE’s existing project archive.</p></div><div className="field-gallery">{images.map(([src, alt], index) => <div key={src} className={index === 0 || index === 5 ? 'field-gallery__wide' : ''}><Image src={src} alt={alt} fill sizes="(max-width: 767px) 50vw, 25vw" /></div>)}</div></Section>;
}
