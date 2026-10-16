import Image from 'next/image';
import Link from 'next/link';

// The site's one image card: photo, optional label, title and a short line of text.
export default function MediaCard({ href, image, alt, label, title, text }: { href: string; image: string; alt: string; label?: string; title: string; text: string }) {
  return (
    <Link href={href} className="project-tile">
      <div className="project-tile__image"><Image src={image} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
      <div className="project-tile__body">
        {label && <small>{label}</small>}
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}
