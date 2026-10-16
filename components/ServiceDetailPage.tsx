import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import MediaCard from '@/components/MediaCard';
import ProjectCarousel from '@/components/ProjectCarousel';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { ctaImages } from '@/lib/cta';
import { getSolutionDetail } from '@/lib/solutions';
import { industries, projects, Service, site, technologyPartners } from '@/lib/site';

const tick = 'M3.5 8.5 6.5 11.5 12.5 4.5';

// Solution page: banner, intro, sub-services, capabilities, process, brands, projects, questions and a closing action.
export default function ServiceDetailPage({ service }: { service: Service }) {
  const detail = getSolutionDetail(service.slug);
  const relatedProjects = projects.filter((item) => item.serviceSlugs.includes(service.slug));
  const relatedArticles = getBlogPosts().filter((item) => item.relatedServiceSlugs.includes(service.slug)).slice(0, 3);
  const brands = technologyPartners.filter(([name]) => detail.brands.includes(name));
  const [lead, accent, tail] = detail.hero.title;
  const servedIndustries = industries.filter((item) => service.industrySlugs.includes(item.slug));

  return (
    <>
      <PageHero
        title={<>{lead}<span className="accent">{accent}</span>{tail}</>}
        description={detail.hero.lede}
        image={{ src: detail.hero.image, alt: detail.hero.alt, position: detail.hero.position }}
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: service.name }]}
      />
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: ['Kenya', 'East Africa'], url: `${site.url}/solutions/${service.slug}`, hasOfferCatalog: { '@type': 'OfferCatalog', name: service.name, itemListElement: detail.subServices.map((item) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: item.title, description: item.text } })) } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: detail.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ]} />

      <Section className="section">
        <div className="solution-intro">
          <div>
            <p className="eyebrow">{service.name}</p>
            <h2>{detail.intro.title[0]}<span className="accent">{detail.intro.title[1]}</span>{detail.intro.title[2]}</h2>
            <p className="lede">{detail.intro.text}</p>
            <Link href="/contact" className="text-link">Talk to an engineer</Link>
          </div>
          <figure className="solution-intro__media"><Image src={detail.intro.image} alt={detail.intro.alt} fill sizes="(max-width: 900px) 100vw, 50vw" /></figure>
        </div>
        <ul className="benefits">
          {detail.benefits.map((item) => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>)}
        </ul>
      </Section>

      <Section className="section section--paper">
        <div className="section-intro section-intro--center">
          <h2>What we <span className="accent">deliver</span></h2>
          <p>{service.summary}</p>
        </div>
        <ol className="service-cards">
          {detail.subServices.map((item, index) => (
            <li key={item.title} className="service-card">
              <span className="service-card__index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="ticks">{item.includes.map((point) => <li key={point}><svg viewBox="0 0 16 16" aria-hidden="true"><path d={tick} /></svg>{point}</li>)}</ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="section">
        <div className="capabilities">
          <div>
            <h2>Everything you <span className="accent">need</span></h2>
            <p className="lede">Planned, installed and supported by one accountable team.</p>
          </div>
          <ul className="ticks ticks--large">{detail.capabilities.map((item) => <li key={item}><svg viewBox="0 0 16 16" aria-hidden="true"><path d={tick} /></svg>{item}</li>)}</ul>
        </div>
      </Section>

      <section className="section section--ink">
        <div className="shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">How we work</p>
            <h2>From survey to <span className="accent">support</span></h2>
          </div>
          <ol className="steps">
            {detail.process.map((step, index) => (
              <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <Section className="section section--paper">
        <div className="section-intro section-intro--center">
          <h2>Industries we <span className="accent">serve</span></h2>
          <p>{service.shortName} designed around how each sector operates.</p>
        </div>
        <div className="project-cards project-cards--four">
          {servedIndustries.map((item) => <MediaCard key={item.slug} href={`/industries/${item.slug}`} image={item.image} alt={`${item.name} environment`} title={item.name} text={item.summary} />)}
          {servedIndustries.length % 4 !== 0 && (
            <div className="project-tile project-tile--note">
              <h3>Different sector?</h3>
              <p>We design around how your organisation works, whatever the sector.</p>
              <Link href="/industries" className="text-link">See all industries</Link>
            </div>
          )}
        </div>
      </Section>

      {brands.length > 0 && (
        <Section className="section">
          <div className="section-intro section-intro--center"><h2>Brands we <span className="accent">install</span></h2></div>
          <ul className="brand-grid">
            {brands.map(([name, src, width, height]) => {
              const logoH = Math.round(Math.min(48, Math.max(26, Math.sqrt((3600 * height) / width))));
              return <li key={name}><Image src={src} alt={name} width={Math.round((logoH * width) / height)} height={logoH} unoptimized={src.endsWith('.svg')} style={{ width: 'auto', height: logoH }} /></li>;
            })}
          </ul>
        </Section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section section--ink">
          <div className="shell">
            <div className="section-intro section-intro--center"><p className="eyebrow">Projects</p><h2>{service.shortName} <span className="accent">in the field</span></h2></div>
            <ProjectCarousel items={relatedProjects.map(({ slug, title, category, summary, image }) => ({ slug, title, category, summary, image }))} />
          </div>
        </section>
      )}

      <Section className="section">
        <div className="faq-block">
          <div>
            <h2>Common <span className="accent">questions</span></h2>
            <p className="lede">Anything else? Ask us on the chat or call {site.phones[0]}.</p>
          </div>
          <div className="faq-list">
            {detail.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" /></svg></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {relatedArticles.length > 0 && (
        <Section className="section section--paper">
          <div className="section-intro"><h2>Further <span className="accent">reading</span></h2></div>
          <div className="article-grid">{relatedArticles.map((article) => <BlogCard key={article.slug} post={article} />)}</div>
        </Section>
      )}

      <CTASection title={<>{detail.cta.title[0]}<span className="accent">{detail.cta.title[1]}</span>{detail.cta.title[2]}</>} text={detail.cta.text} link={detail.cta.link} image={ctaImages[service.slug as keyof typeof ctaImages] ?? ctaImages.solutions} />
    </>
  );
}
