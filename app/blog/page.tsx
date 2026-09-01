import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Insights', 'Practical UXUE guidance on enterprise security, networking, automation and technology infrastructure.', '/blog', '/images/network-cable.jpg');

export default function BlogPage() {
  const posts = getBlogPosts(); const featured = posts[0]; const categories = [...new Set(posts.map((post) => post.category))];
  return <><PageHero eyebrow="UXUE Insights" title="Better infrastructure starts with better questions." description="Practical guidance for people planning, operating and improving enterprise security and technology systems." images={['/images/network-cable.jpg', '/images/data-center.jpg', '/images/gallery/n11.jpg', '/images/top.jpg']} breadcrumbs={[{ label: 'Insights' }]} />
    <Section className="section"><div className="blog-feature"><div className="blog-feature__image"><Image src={featured.image} alt="" fill priority sizes="(max-width: 767px) 100vw, 60vw" /></div><div className="blog-feature__copy"><p className="eyebrow eyebrow--light">Featured · {featured.category}</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><div className="article-meta"><span>{new Date(featured.date).toLocaleDateString('en-KE', { dateStyle: 'long' })}</span><span>{featured.readingTime}</span></div><div className="section-action"><Link href={`/blog/${featured.slug}`} className="button button--orange">Read the article <span aria-hidden="true">→</span></Link></div></div></div></Section>
    <Section className="section section--paper"><div className="section-heading"><div><p className="eyebrow">Browse topics</p><h2>Knowledge across the infrastructure lifecycle.</h2></div><div className="related-links" aria-label="Article categories">{categories.map((category) => <span key={category}>{category}</span>)}</div></div><div id="all-articles" className="article-grid">{posts.slice(1).map((post) => <BlogCard key={post.slug} post={post} />)}</div></Section><CTASection title="Need to turn the guidance into a working system?" /></>;
}
