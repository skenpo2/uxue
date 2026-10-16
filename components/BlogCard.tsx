import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';

// Article card in the same style as the project carousel cards, on a light background.
export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="carousel-card carousel-card--light">
      <div className="carousel-card__image"><Image src={post.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
      <small>{post.category}</small>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </Link>
  );
}
