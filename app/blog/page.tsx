import Image from 'next/image';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { ctaImages } from '@/lib/cta';
import { pageMetadata } from '@/lib/metadata';
import { services } from '@/lib/site';

export const metadata = pageMetadata('Insights', 'Practical UXUE guidance on enterprise security, networking, automation and technology infrastructure.', '/blog', '/images/pages/insights-workspace.jpg');

// Articles grouped by theme, using each article's category.
const topics = [
  { id: 'security', title: ['Security and ', 'access', ''], text: 'Surveillance, access control and integrated security, planned around how sites really work.', categories: ['Video Surveillance', 'Access Control', 'Automation'] },
  { id: 'networks', title: ['Networks and ', 'infrastructure', ''], text: 'The cabling, networks and equipment every other system depends on, and how to keep them running.', categories: ['Networking', 'ICT Infrastructure', 'Operations'] },
  { id: 'planning', title: ['Strategy and ', 'sectors', ''], text: 'Planning guidance for African enterprises, financial institutions and campuses.', categories: ['Strategy', 'Education', 'Financial Services'] },
] as const;

export default function BlogPage() {
  const posts = getBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);
  return (
    <>
      <PageHero title={<>Better infrastructure starts with <span className="accent">better questions</span>.</>} description="Practical guidance for people planning, operating and improving enterprise security and technology systems." image={{ src: '/images/pages/insights-workspace.jpg', alt: 'A laptop on a desk beside a window overlooking the city.' }} breadcrumbs={[{ label: 'Insights' }]} />

      <Section className="section">
        <div className="section-intro section-intro--split">
          <div><p className="eyebrow">Featured</p><h2>Start <span className="accent">here</span></h2></div>
          <nav className="topic-links" aria-label="Article topics">
            {topics.map((topic) => <a key={topic.id} href={`#${topic.id}`}>{topic.title.join('')}</a>)}
          </nav>
        </div>
        <Link href={`/blog/${featured.slug}`} className="blog-feature">
          <div className="blog-feature__image"><Image src={featured.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 60vw" /></div>
          <div className="blog-feature__copy">
            <small>{featured.category}</small>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <span className="text-link text-link--light">Read the article</span>
          </div>
        </Link>
      </Section>

      {topics.map((topic, index) => {
        const list = rest.filter((post) => (topic.categories as readonly string[]).includes(post.category));
        if (!list.length) return null;
        return (
          <Section key={topic.id} id={topic.id} className={`section${index % 2 === 0 ? ' section--paper' : ''}`}>
            <div className="section-intro">
              <h2>{topic.title[0]}<span className="accent">{topic.title[1]}</span>{topic.title[2]}</h2>
              <p>{topic.text}</p>
            </div>
            <div className="article-grid">{list.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
          </Section>
        );
      })}

      <Section className="section">
        <div className="section-intro section-intro--center">
          <h2>Put it into <span className="accent">practice</span></h2>
          <p>Every article connects to a solution we design, install and support.</p>
        </div>
        <ul className="pill-links">
          {services.map((service) => <li key={service.slug}><Link href={`/solutions/${service.slug}`}>{service.name}</Link></li>)}
        </ul>
      </Section>

      <CTASection title={<>Turn guidance into a <span className="accent">working system</span>.</>} text="Talk to the engineers behind these articles about your own site and what it needs." link="Ask an engineer" image={ctaImages.insights} />
    </>
  );
}
