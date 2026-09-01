import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import HeroSlideshow from '@/components/HeroSlideshow';
import Section from '@/components/Section';
import { clientOrganisations, industries, projects, services, technologyPartners } from '@/lib/site';
import { getBlogPosts } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Enterprise Security & ICT Infrastructure', 'UXUE engineers integrated security, networking, automation, cybersecurity and ICT infrastructure for modern organisations.', '/', '/images/gallery/p19.jpg');

export default function HomePage() {
  const articles = getBlogPosts().slice(0, 3);
  return (
    <>
      <header className="home-hero">
        <div className="home-hero__media">
          <HeroSlideshow
            images={['/images/gallery/p19.jpg', '/images/network-server-switches.jpg', '/images/gallery/n8.jpg', '/images/gallery/p17.jpg', '/images/gallery/p12.jpg']}
            alt="UXUE technician installing access-control infrastructure"
            className="home-hero__image"
            sizes="(max-width: 767px) 100vw, 58vw"
          />
        </div>
        <div className="home-hero__veil" />
        <div className="shell home-hero__content">
          <p className="eyebrow">Security · Connectivity · Intelligent systems</p>
          <h1>Engineering the infrastructure <span>behind modern business.</span></h1>
          <p className="home-hero__lede">UXUE designs, integrates and supports the systems organisations rely on to protect people, connect operations and work with greater control.</p>
          <div className="home-hero__actions"><Link href="/contact" className="button button--orange">Start a conversation <span aria-hidden="true">↗</span></Link><Link href="/solutions" className="button button--outline">Explore our solutions <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="home-hero__rail"><div className="shell"><div>Based in Nairobi, Kenya</div><div>Enterprise security & ICT integration</div><div>Built for demanding operating environments</div></div></div>
      </header>

      <Section className="section section--compact">
        <div className="section-heading"><div><p className="eyebrow">Technology ecosystem</p><h2>Proven platforms. Integrated with purpose.</h2></div><p>UXUE works across established security, networking and access technologies, selecting what fits the operating requirement rather than forcing a single-product answer.</p></div>
        <div className="logo-wall">{technologyPartners.map(([name, src]) => <div key={name}><Image src={src} alt={`${name} technology logo`} fill sizes="(max-width: 767px) 50vw, 20vw" /></div>)}</div>
      </Section>

      <Section className="section section--paper">
        <div className="section-heading"><div><p className="eyebrow">Core solutions</p><h2>One infrastructure partner across the critical layers.</h2></div><p>From the perimeter to the network core, UXUE coordinates physical, digital and operational systems as a connected environment.</p></div>
        <div className="number-list">{services.map((service, index) => <Link key={service.slug} href={`/solutions/${service.slug}`}><span className="number-list__index">0{index + 1}</span><h3>{service.name}</h3><p>{service.summary}</p><span className="number-list__arrow" aria-hidden="true">↗</span></Link>)}</div>
      </Section>

      <section className="image-split">
        <div className="image-split__image"><Image src="/images/gallery/n8.jpg" alt="UXUE technician installing infrastructure at a client site" fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
        <div className="image-split__content"><div><p className="eyebrow">Integrated by design</p><h2>Fewer silos. Clearer operations.</h2><p className="lede">Cameras, access systems, networks, equipment and automation work better when the dependencies between them are understood from the start.</p><div className="number-list">{['Protect people and physical assets', 'Connect sites, teams and devices', 'Automate repeatable security workflows'].map((item, index) => <div key={item}><span className="number-list__index">0{index + 1}</span><h3>{item}</h3></div>)}</div></div></div>
      </section>

      <Section className="section section--dark">
        <div className="section-heading"><div><p className="eyebrow eyebrow--light">Industry context</p><h2>Infrastructure shaped around the environment it serves.</h2></div><p className="on-dark">Every sector has different users, risks and continuity requirements. UXUE begins with those operating realities.</p></div>
        <div className="feature-grid dark-grid">{industries.map((industry, index) => <Link href={`/industries/${industry.slug}`} key={industry.slug} className="feature-card"><span>IND.0{index + 1}</span><h3>{industry.name}</h3><p>{industry.summary}</p></Link>)}</div>
        <div className="section-action"><Link href="/industries" className="button button--outline">Explore industries <span aria-hidden="true">→</span></Link></div>
      </Section>

      <Section className="section">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Delivery made visible.</h2></div><p>Published deployment records showing the breadth of security, network and infrastructure work represented in UXUE’s existing portfolio.</p></div>
        <div className="project-grid">{projects.slice(0, 4).map((project) => <Link href={`/projects/${project.slug}`} key={project.slug} className="project-card"><div className="project-card__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 55vw" /></div><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p></Link>)}</div>
        <div className="section-action section-action--large"><Link href="/projects" className="text-link">View all projects <span aria-hidden="true">→</span></Link></div>
      </Section>

      <Section className="section section--paper">
        <div className="section-heading"><div><p className="eyebrow">Why UXUE</p><h2>Technical discipline, from first assessment to operational handover.</h2></div><p>UXUE is a technology-first integration company. The focus is not simply supplying hardware, but making the complete environment usable and supportable.</p></div>
        <div className="feature-grid">{[
          ['End-to-end thinking', 'Security, network, power, hardware and operator needs considered together.'],
          ['Context-led design', 'Solutions shaped around the facility, workflow, risk and growth requirement.'],
          ['Structured delivery', 'Assessment, architecture, controlled installation, verification and handover.'],
          ['Local operating insight', 'Technology decisions grounded in Kenyan and East African business environments.'],
        ].map(([title, text], index) => <article className="feature-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section className="section section--dark">
        <div className="section-heading"><div><p className="eyebrow eyebrow--light">Delivery framework</p><h2>From ambiguity to a working system.</h2></div><p className="on-dark">A clear process keeps design decisions, site work and operational readiness connected.</p></div>
        <div className="process">{[['Discover', 'Understand the site, users, risk and business requirement.'], ['Design', 'Build an integrated technical architecture and delivery plan.'], ['Deploy', 'Install, configure and coordinate work with the live environment.'], ['Support', 'Test, document, train and maintain the operational system.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section className="section section--compact">
        <div className="section-heading"><div><p className="eyebrow">Selected organisations</p><h2>Experience across institutions and enterprises.</h2></div><p>Organisations represented in UXUE’s existing client portfolio.</p></div>
        <div className="logo-wall">{clientOrganisations.map(([name, src]) => <div key={name}><Image src={src} alt={`${name} logo`} fill sizes="(max-width: 767px) 50vw, 20vw" /></div>)}</div>
      </Section>

      <Section className="section section--paper">
        <div className="section-heading"><div><p className="eyebrow">Insights</p><h2>Guidance for better infrastructure decisions.</h2></div><p>Practical thinking on planning, deploying and managing connected enterprise systems.</p></div>
        <div className="article-grid">{articles.map((article) => <Link href={`/blog/${article.slug}`} key={article.slug} className="article-card"><div className="article-card__image"><Image src={article.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" /></div><div className="article-card__meta"><small>{article.category}</small><span>{article.readingTime}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p></Link>)}</div>
      </Section>
      <CTASection />
    </>
  );
}
