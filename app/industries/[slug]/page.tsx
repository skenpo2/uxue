import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ProjectCarousel from '@/components/ProjectCarousel';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { ctaImages } from '@/lib/cta';
import { getIndustryContent } from '@/lib/industry-content';
import { getIndustry, getService, industries, projects } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getIndustry(slug);
  return item ? pageMetadata(`${item.name} Security and ICT Infrastructure`, item.summary, `/industries/${slug}`, item.image) : {};
}

const tick = 'M3.5 8.5 6.5 11.5 12.5 4.5';
const steps = [
  ['Survey', 'Walk the site with your team and agree the risks and priorities.'],
  ['Design', 'Plan every system together around how your organisation works.'],
  ['Install', 'Install with minimal disruption to your operations.'],
  ['Support', 'Train your team, document everything and support it as agreed.'],
];

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const content = getIndustryContent(slug);
  const relevantProjects = projects.filter((item) => item.industrySlugs.includes(industry.slug));
  const articles = getBlogPosts().filter((item) => item.category === industry.name || item.relatedServiceSlugs.some((serviceSlug) => industry.serviceSlugs.includes(serviceSlug))).slice(0, 3);
  const [lead, accent, tail] = content.headline;
  const image = ctaImages[slug as keyof typeof ctaImages] ?? ctaImages.industries;

  return (
    <>
      <PageHero title={industry.name} description={industry.summary} image={{ src: industry.image, alt: `${industry.name} environment` }} breadcrumbs={[{ label: 'Industries', href: '/industries' }, { label: industry.name }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: content.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />

      <Section className="section">
        <div className="section-intro">
          <p className="eyebrow">{industry.name}</p>
          <h2>{lead}<span className="accent">{accent}</span>{tail}</h2>
          <p>{content.intro}</p>
        </div>
        <ol className="service-cards">
          {content.challenges.map((item, index) => (
            <li key={item.title} className="service-card"><span className="service-card__index">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></li>
          ))}
        </ol>
      </Section>

      <Section className="section section--paper">
        <div className="section-intro section-intro--center">
          <h2>How we <span className="accent">help</span></h2>
          <p>The solutions organisations like yours use most, and what they do for you.</p>
        </div>
        <ul className="service-cards service-cards--two">
          {content.applications.map((item) => {
            const service = getService(item.service);
            if (!service) return null;
            return (
              <li key={item.service} className="service-card">
                <h3>{service.name}</h3>
                <p>{item.text}</p>
                <ul className="ticks">{item.systems.map((point) => <li key={point}><svg viewBox="0 0 16 16" aria-hidden="true"><path d={tick} /></svg>{point}</li>)}</ul>
                <Link href={`/solutions/${service.slug}`} className="text-link service-card__link">Explore {service.shortName}</Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section className="section">
        <div className="capabilities">
          <div>
            <h2>A typical <span className="accent">deployment</span></h2>
            <p className="lede">Every site is different, but most {industry.name.toLowerCase()} projects include these.</p>
          </div>
          <ul className="ticks ticks--large">{content.checklist.map((item) => <li key={item}><svg viewBox="0 0 16 16" aria-hidden="true"><path d={tick} /></svg>{item}</li>)}</ul>
        </div>
      </Section>

      <section className="section section--ink">
        <div className="shell">
          <div className="section-intro section-intro--center"><p className="eyebrow">How we work</p><h2>From survey to <span className="accent">support</span></h2></div>
          <ol className="steps steps--four">{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      {relevantProjects.length > 0 && (
        <Section className="section">
          <div className="section-intro section-intro--center"><h2>Related <span className="accent">projects</span></h2></div>
          <div className="carousel-light"><ProjectCarousel items={relevantProjects.map(({ slug: s, title, category, summary, image: i }) => ({ slug: s, title, category, summary, image: i }))} /></div>
        </Section>
      )}

      <Section className={`section${relevantProjects.length > 0 ? ' section--paper' : ''}`}>
        <div className="faq-block">
          <div><h2>Common <span className="accent">questions</span></h2><p className="lede">Anything else? Ask us on the chat or <Link href="/contact" className="text-link">contact our team</Link>.</p></div>
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question}><summary>{faq.question}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10M3 8h10" /></svg></summary><p>{faq.answer}</p></details>
            ))}
          </div>
        </div>
      </Section>

      {articles.length > 0 && (
        <Section className={`section${relevantProjects.length > 0 ? '' : ' section--paper'}`}>
          <div className="section-intro"><h2>Further <span className="accent">reading</span></h2></div>
          <div className="article-grid">{articles.map((article) => <BlogCard key={article.slug} post={article} />)}</div>
        </Section>
      )}

      <CTASection title={<>{content.cta.title[0]}<span className="accent">{content.cta.title[1]}</span>{content.cta.title[2]}</>} text={content.cta.text} link={content.cta.link} image={image} />
    </>
  );
}
