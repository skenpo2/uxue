import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return <Link href={`/blog/${post.slug}`} className="article-card"><div className="article-card__image"><Image src={post.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="article-card__meta"><small>{post.category}</small><span>{post.readingTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="text-link">Read article</span></Link>;
}
