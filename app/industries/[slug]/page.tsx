import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { getIndustry, industries, projects, services } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';
import { getServiceHeroImages } from '@/lib/hero-images';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = getIndustry(slug); return item ? pageMetadata(`${item.name} Technology Infrastructure`, item.summary, `/industries/${slug}`, getServiceHeroImages(item.serviceSlugs[0])[0].src) : {}; }

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params; const industry = getIndustry(slug); if (!industry) notFound();
  const relevantServices = services.filter((item) => industry.serviceSlugs.includes(item.slug));
  const relevantProjects = projects.filter((item) => item.industrySlugs.includes(industry.slug));
  const articles = getBlogPosts().filter((item) => item.category === industry.name || item.relatedServiceSlugs.some((serviceSlug) => industry.serviceSlugs.includes(serviceSlug))).slice(0, 3);
  return <><PageHero title={industry.name} description={industry.summary} images={industry.serviceSlugs.map((serviceSlug) => getServiceHeroImages(serviceSlug)[0])} breadcrumbs={[{ label: 'Industries', href: '/industries' }, { label: industry.name }]} />
    <Section className="section"><div className="detail-intro"><aside className="detail-intro__aside"><p>{industry.challenge}</p></aside><div><h2>Infrastructure aligned to operational priorities.</h2><p className="lede">The strongest solution is not a generic sector bundle. It begins with the specific facility, users, systems and risk profile.</p><div className="number-list">{industry.priorities.map((item, index) => <div key={item}><span className="number-list__index">0{index + 1}</span><h3>{item}</h3></div>)}</div></div></div></Section>
    <Section className="section section--paper"><div className="section-heading"><div><h2>Capabilities that support {industry.name.toLowerCase()}.</h2></div><p>The final architecture is selected after assessment and may combine several solution areas.</p></div><div className="number-list">{relevantServices.map((service, index) => <Link key={service.slug} href={`/solutions/${service.slug}`}><span className="number-list__index">0{index + 1}</span><h3>{service.name}</h3><p>{service.summary}</p></Link>)}</div></Section>
    {relevantProjects.length > 0 && <Section className="section"><div className="section-heading"><div><h2>Published deployment experience.</h2></div><p>Project records connected to this operating environment.</p></div><div className="project-grid">{relevantProjects.map((project) => <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}><div className="project-card__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p></Link>)}</div></Section>}
    <Section className="section section--dark"><div className="section-heading"><div><h2>Understand before specifying.</h2></div><p className="on-dark">Site conditions and workflows define the real solution.</p></div><div className="process">{[['Discover', 'Map users, zones, systems and operating constraints.'], ['Prioritise', 'Connect the investment to risk and continuity.'], ['Integrate', 'Coordinate physical, network and digital dependencies.'], ['Enable', 'Test the real workflows and prepare the operating team.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Section>
    {articles.length > 0 && <Section className="section section--paper"><div className="section-heading"><div><h2>Make the next decision with context.</h2></div></div><div className="article-grid">{articles.map((article) => <Link href={`/blog/${article.slug}`} key={article.slug} className="article-card"><div className="article-card__image"><Image src={article.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="article-card__meta"><small>{article.category}</small><span>{article.readingTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p></Link>)}</div></Section>}
    <CTASection title={`Planning infrastructure for a ${industry.name.toLowerCase()} environment?`} /></>;
}
