import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import MediaCard from '@/components/MediaCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { getProject, industries, projects, services } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';
import { projectCta } from '@/lib/cta';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return project ? pageMetadata(project.title, project.summary, `/projects/${slug}`, project.image) : {}; }

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const relatedServices = services.filter((item) => project.serviceSlugs.includes(item.slug));
  const relatedIndustries = industries.filter((item) => project.industrySlugs.includes(item.slug));
  const relatedArticles = getBlogPosts().filter((article) => article.relatedServiceSlugs.some((serviceSlug) => project.serviceSlugs.includes(serviceSlug))).slice(0, 3);
  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  return (
    <>
      <PageHero title={project.title} description={project.summary} image={{ src: project.image, alt: project.title }} breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]} />

      <Section className="section">
        <div className="brief">
          <article><p className="eyebrow">The challenge</p><p>{project.challenge}</p></article>
          <article><p className="eyebrow">What we delivered</p><p>{project.solution}</p></article>
        </div>
      </Section>

      <div className="gallery-strip">{project.gallery.map((image, index) => <div key={image}><Image src={image} alt={`${project.title}, site photo ${index + 1}`} fill sizes="(max-width: 767px) 100vw, 40vw" /></div>)}</div>

      <Section className="section">
        <div className="detail-intro">
          <aside className="detail-intro__aside">
            <p>Solutions</p>
            <div className="related-links">{relatedServices.map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.shortName}</Link>)}</div>
            <p className="detail-intro__label">Industries</p>
            <div className="related-links">{relatedIndustries.map((item) => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}</div>
          </aside>
          <div>
            <h2>Scope of <span className="accent">work</span></h2>
            <div className="number-list">{project.implementation.map((item, index) => <div key={item}><span className="number-list__index">0{index + 1}</span><h3>{item}</h3></div>)}</div>
            <div className="project-outcome"><p className="eyebrow">The result</p><p className="lede">{project.outcome}</p></div>
          </div>
        </div>
      </Section>

      {relatedArticles.length > 0 && <Section className="section section--paper"><div className="section-intro"><h2>Further <span className="accent">reading</span></h2></div><div className="article-grid">{relatedArticles.map((article) => <BlogCard key={article.slug} post={article} />)}</div></Section>}

      <Section className="section">
        <div className="section-intro section-intro--split">
          <div><h2>More <span className="accent">projects</span></h2></div>
          <Link href="/projects" className="text-link">View all projects</Link>
        </div>
        <div className="project-cards">{otherProjects.map((item) => <MediaCard key={item.slug} href={`/projects/${item.slug}`} image={item.image} alt={item.title} label={item.category} title={item.title} text={item.summary} />)}</div>
      </Section>

      <CTASection title={<>Need something <span className="accent">similar</span>?</>} text={`Tell us about your site. We will scope a ${project.category.toLowerCase()} solution that fits it, the same way we did here.`} link="Discuss a similar project" image={projectCta(projects.indexOf(project))} />
    </>
  );
}
