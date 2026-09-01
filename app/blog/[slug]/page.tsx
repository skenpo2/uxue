import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Section from '@/components/Section';
import { getBlogPost, getBlogPosts, getBlogSlugs } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';
import { services, site } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getBlogSlugs().map((slug) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = getBlogPost(slug); if (!post) return {}; const base = pageMetadata(post.title, post.excerpt, `/blog/${slug}`, post.image); return { ...base, openGraph: { ...base.openGraph, type: 'article', publishedTime: post.date, modifiedTime: post.updated || post.date, authors: [post.author] } }; }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; const post = getBlogPost(slug); if (!post) notFound();
  const relatedServices = services.filter((service) => post.relatedServiceSlugs.includes(service.slug));
  const relatedPosts = getBlogPosts().filter((item) => item.slug !== post.slug && item.relatedServiceSlugs.some((serviceSlug) => post.relatedServiceSlugs.includes(serviceSlug))).slice(0, 3);
  return <article><header className="article-hero"><div className="shell"><Breadcrumbs items={[{ label: 'Insights', href: '/blog' }, { label: post.title }]} /><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="lede">{post.excerpt}</p><div className="article-meta"><span>By {post.author}</span><time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-KE', { dateStyle: 'long' })}</time><span>{post.readingTime}</span></div></div></header>
    <div className="article-cover"><Image src={post.image} alt="" fill priority sizes="100vw" /></div>
    <Section className="section"><div className="article-layout"><aside className="article-toc"><p>In this article</p>{post.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.heading}</a>)}<div className="related-links related-links--top">{relatedServices.map((service) => <Link key={service.slug} href={`/solutions/${service.slug}`}>{service.shortName}</Link>)}</div></aside><div className="article-body">{post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}</div></div></Section>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, image: `${site.url}${post.image}`, datePublished: post.date, dateModified: post.updated || post.date, author: { '@type': 'Organization', name: post.author }, publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/images/uxue-logo.svg` } }, mainEntityOfPage: `${site.url}/blog/${post.slug}` }} />
    <Section className="section section--paper"><div className="section-heading"><div><p className="eyebrow">Keep reading</p><h2>Related perspectives.</h2></div></div><div className="article-grid">{relatedPosts.map((item) => <BlogCard key={item.slug} post={item} />)}</div></Section><CTASection /></article>;
}
