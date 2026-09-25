import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import CapabilityTabs from '@/components/CapabilityTabs';
import HeroSlideshow from '@/components/HeroSlideshow';
import OperationsVideo from '@/components/OperationsVideo';
import ProcessPipeline from '@/components/ProcessPipeline';
import Section from '@/components/Section';
import { clientOrganisations, projects, services, technologyPartners } from '@/lib/site';
import { getBlogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';
import { heroImages, homeHeroImages } from '@/lib/hero-images';

export const metadata = pageMetadata('Enterprise Security & ICT Infrastructure', 'UXUE engineers integrated security, networking, automation, cybersecurity and ICT infrastructure for modern organisations.', '/', heroImages.infrastructure.src);

const processSteps = [
  { type: 'discover', title: 'Discover', text: 'Understand the site, users, risks and business priorities.', output: 'Site survey & risk register', status: 'Surveying' },
  { type: 'design', title: 'Design', text: 'Define an integrated architecture and a practical delivery plan.', output: 'Architecture & delivery plan', status: 'Modelling' },
  { type: 'deploy', title: 'Deploy', text: 'Install and configure with control around the live environment.', output: 'Commissioned, tested systems', status: 'Commissioning' },
  { type: 'support', title: 'Support', text: 'Verify, document, train and maintain the operational system.', output: 'Handover, training & SLA', status: 'Monitoring' },
] as const;

const responseSteps = [
  { title: 'Detect', text: 'Camera, sensor and access events arrive in a single view.' },
  { title: 'Verify', text: 'Live video and event history confirm what is real.' },
  { title: 'Respond', text: 'Alerts, lockdowns and escalations follow an agreed playbook.' },
];

export default function HomePage() {
  const articles = getBlogPosts().slice(0, 3);
  return (
    <>
      <header className="home-hero">
        <div className="home-hero__media">
          <HeroSlideshow
            images={homeHeroImages}
            label="Enterprise infrastructure"
            className="home-hero__image"
            sizes="(max-width: 900px) 100vw, 62vw"
          />
        </div>
        <div className="home-hero__veil" />
        <div className="shell home-hero__layout">
          <div className="home-hero__content">
            <h1>Built for what <span>cannot fail.</span></h1>
            <p className="home-hero__lede">UXUE engineers integrated security, network and technology infrastructure for organisations where resilience, control and continuity matter.</p>
            <div className="home-hero__actions">
              <Link href="/contact" className="button button--orange">Start a conversation</Link>
              <Link href="/solutions" className="button button--outline">Explore solutions</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="home-trust">
        <div className="shell home-trust__inner">
          <p>Technology expertise across established enterprise platforms</p>
          <div className="home-trust__logos">{technologyPartners.slice(0, 5).map(([name, src]) => <div key={name}><Image src={src} alt={`${name} technology logo`} fill sizes="(max-width: 767px) 28vw, 12vw" /></div>)}</div>
        </div>
      </section>

      <Section className="section home-capabilities">
        <div className="home-section-intro">
          <h2>One accountable partner across every critical layer.</h2>
          <div><p>From the perimeter to the network core, we coordinate physical, digital and operational systems as one resilient environment.</p><Link href="/solutions" className="text-link">Explore all solutions</Link></div>
        </div>
        <CapabilityTabs services={services} />
      </Section>

      <section className="section home-operations" id="operations-in-motion">
        <div className="shell home-operations__grid">
          <div className="home-operations__copy">
            <h2>When something happens, your team already knows.</h2>
            <p>We bring cameras, access control, alarms and network health into one operating picture, so the people on duty see what matters, confirm it quickly and act with the full context in front of them.</p>
            <ol className="home-operations__steps">
              {responseSteps.map((step) => <li key={step.title}><strong>{step.title}</strong><span>{step.text}</span></li>)}
            </ol>
            <Link href="/solutions/automation" className="text-link">See how security automation works</Link>
          </div>
          <figure className="home-operations__media">
            <OperationsVideo />
            <figcaption>One view across every site, every system, around the clock.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-work">
        <div className="shell">
          <div className="home-section-intro home-section-intro--dark">
            <h2>Proven in the field, not just on paper.</h2>
            <div><p>Selected deployments across workplace security, multi-site connectivity and critical ICT infrastructure.</p><Link href="/projects" className="text-link text-link--light">View all projects</Link></div>
          </div>
          <div className="home-work__grid">{projects.slice(0, 3).map((project) => <Link href={`/projects/${project.slug}`} key={project.slug} className="home-work__card"><div className="home-work__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><div className="home-work__content"><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p></div></Link>)}</div>
        </div>
      </section>

      <Section className="section home-method" id="delivery-method">
        <div className="home-section-intro">
          <h2>A disciplined path from requirement to reliable operation.</h2>
          <div><p>Clear ownership, considered design and documented delivery reduce risk at every stage of the engagement.</p></div>
        </div>
        <ProcessPipeline steps={processSteps} />
        <div className="home-clients">
          <p>Experience represented across leading institutions and enterprises</p>
          <div>{clientOrganisations.slice(0, 6).map(([name, src]) => <div key={name}><Image src={src} alt={`${name} logo`} fill sizes="(max-width: 767px) 30vw, 12vw" /></div>)}</div>
        </div>
      </Section>

      <Section className="section section--paper home-insights">
        <div className="home-section-intro"><h2>Clear thinking for better infrastructure decisions.</h2><div><p>Practical guidance on planning, deploying and managing connected enterprise systems.</p><Link href="/blog" className="text-link">View all insights</Link></div></div>
        <div className="article-grid">{articles.map((article) => <Link href={`/blog/${article.slug}`} key={article.slug} className="article-card"><div className="article-card__image"><Image src={article.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="article-card__meta"><small>{article.category}</small><span>{article.readingTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p></Link>)}</div>
      </Section>
      <CTASection />
    </>
  );
}
