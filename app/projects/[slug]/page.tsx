import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { getProject, industries, projects, services } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

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
  const otherProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  return (
    <>
      <PageHero title={project.title} description={project.summary} images={[project.image, ...project.gallery]} breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]} />
      <Section className="section">
        <div className="detail-intro">
          <aside className="detail-intro__aside">
            <div className="related-links">{relatedServices.map((item) => <Link key={item.slug} href={`/solutions/${item.slug}`}>{item.shortName}</Link>)}</div>
            <div className="related-links related-links--spaced">{relatedIndustries.map((item) => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}</div>
          </aside>
          <div><h2>Delivery centred on a coordinated system.</h2><p className="lede">{project.summary}</p><p className="record-note">This case record uses only project information already published by UXUE. Client identity, location, quantities and measured outcomes have not been inferred.</p></div>
        </div>
      </Section>
      <Section className="section section--paper">
        <div className="section-heading"><div><h2>The requirement and the response.</h2></div><p>A concise account based on the disclosed project scope.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><span>01 · CHALLENGE</span><h3>What the environment required</h3><p>{project.challenge}</p></article>
          <article className="feature-card"><span>02 · SOLUTION</span><h3>How UXUE responded</h3><p>{project.solution}</p></article>
        </div>
      </Section>
      <div className="gallery-strip">{project.gallery.map((image, index) => <div key={image}><Image src={image} alt={`${project.title} field image ${index + 1}`} fill sizes="(max-width: 767px) 100vw, 40vw" /></div>)}</div>
      <Section className="section">
        <div className="detail-intro">
          <aside className="detail-intro__aside"><div className="related-links">{project.technology.map((item) => <span key={item}>{item}</span>)}</div></aside>
          <div><h2>The disclosed delivery scope.</h2><div className="number-list">{project.implementation.map((item, index) => <div key={item}><span className="number-list__index">0{index + 1}</span><h3>{item}</h3></div>)}</div><div className="project-outcome"><p className="lede">{project.outcome}</p></div></div>
        </div>
      </Section>
      <Section className="section section--dark">
        <div className="section-heading"><div><h2>How work of this kind is approached.</h2></div><p className="on-dark">This framework explains UXUE’s project approach without adding undisclosed project-specific claims.</p></div>
        <div className="process">{[['Assess', 'Confirm site conditions, users and operational requirements.'], ['Design', 'Coordinate device, network, power and management layers.'], ['Install', 'Execute controlled field work and configuration.'], ['Verify', 'Test the system, document the deployment and support handover.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>
      {relatedArticles.length > 0 && <Section className="section section--paper"><div className="section-heading"><div><h2>Explore the thinking behind the systems.</h2></div><p>Planning guidance connected to this project’s solution areas.</p></div><div className="article-grid">{relatedArticles.map((article) => <BlogCard key={article.slug} post={article} />)}</div></Section>}
      <Section className="section"><div className="section-heading"><div><h2>Other project records.</h2></div></div><div className="project-grid">{otherProjects.map((item) => <Link href={`/projects/${item.slug}`} className="project-card" key={item.slug}><div className="project-card__image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><small>{item.category}</small><h3>{item.title}</h3><p>{item.summary}</p></Link>)}</div></Section>
      <CTASection />
    </>
  );
}
