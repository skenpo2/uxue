import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { industries, projects, Service, site } from '@/lib/site';
import { getServiceHeroImages } from '@/lib/hero-images';

export default function ServiceDetailPage({ service }: { service: Service }) {
  const relatedIndustries = industries.filter((item) => service.industrySlugs.includes(item.slug));
  const relatedProjects = projects.filter((item) => item.serviceSlugs.includes(service.slug)).slice(0, 3);
  const relatedArticles = getBlogPosts().filter((item) => item.relatedServiceSlugs.includes(service.slug)).slice(0, 3);
  return (
    <>
      <PageHero title={service.name} description={service.description} images={getServiceHeroImages(service.slug)} breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: service.name }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: ['Kenya', 'East Africa'], url: `${site.url}/solutions/${service.slug}` }} />
      <Section className="section">
        <div className="detail-intro"><aside className="detail-intro__aside"><h3>Infrastructure should strengthen the operation, not add another disconnected system.</h3></aside><div><h2>Designed around how your organisation needs to work.</h2><p className="lede">{service.summary} UXUE begins with the site, users, dependencies and operational outcome before defining equipment.</p></div></div>
      </Section>
      <Section className="section section--paper">
        <div className="section-heading"><div><h2>The critical layers of {service.shortName.toLowerCase()}.</h2></div><p>Capability selection and system depth are established through assessment; not every deployment requires every layer.</p></div>
        <div className="feature-grid">{service.capabilities.map((item, index) => <article className="feature-card" key={item.title}><span>CAP.0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </Section>
      <section className="image-split"><div className="image-split__image"><Image src={service.image} alt={`${service.name} infrastructure`} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className="image-split__content"><div><h2>Integrated without unnecessary complexity.</h2><p className="lede">The goal is a maintainable environment with clear dependencies, appropriate control and a handover the operating team can use.</p></div></div></section>
      <Section className="section section--dark">
        <div className="section-heading"><div><h2>A disciplined path to deployment.</h2></div><p className="on-dark">Each engagement is adapted to the site and scope while following a clear technical sequence.</p></div>
        <div className="process">{service.approach.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </Section>
      <Section className="section">
        <div className="section-heading"><div><h2>Relevant operating environments.</h2></div><div className="related-links">{relatedIndustries.map((item) => <Link href={`/industries/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div></div>
        {relatedProjects.length > 0 && <><h3 className="subsection-title">Related deployments</h3><div className="project-grid">{relatedProjects.map((project) => <Link href={`/projects/${project.slug}`} key={project.slug} className="project-card"><div className="project-card__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p></Link>)}</div></>}
      </Section>
      {relatedArticles.length > 0 && <Section className="section section--paper"><div className="section-heading"><div><h2>Plan the system with more context.</h2></div><p>Practical guidance connected to this solution area.</p></div><div className="article-grid">{relatedArticles.map((article) => <Link href={`/blog/${article.slug}`} key={article.slug} className="article-card"><div className="article-card__image"><Image src={article.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="article-card__meta"><small>{article.category}</small><span>{article.readingTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p></Link>)}</div></Section>}
      <CTASection title={`Planning a ${service.shortName.toLowerCase()} project?`} />
    </>
  );
}
