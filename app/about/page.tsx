import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import MediaCard from '@/components/MediaCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { ctaImages } from '@/lib/cta';
import { pageMetadata } from '@/lib/metadata';
import { clientOrganisations, industries, services } from '@/lib/site';
import { solutionDetails } from '@/lib/solutions';

export const metadata = pageMetadata('About UXUE', 'UXUE Company Ltd is a Nairobi-based security and ICT integrator serving organisations across Kenya and East Africa.', '/about', '/images/pages/about-team.jpg');

const facts = [
  [String(services.length), 'Solution areas, from physical security to cybersecurity'],
  [String(industries.length), 'Industries served, from banks and hospitals to factories'],
  ['1', 'Accountable team from survey to support'],
  ['East Africa', 'Based in Nairobi, working across the region'],
];

const reasons = [
  ['Everything planned together', 'Security, network and IT designed as one system, so nothing falls between contractors.'],
  ['Site-first design', 'Every project starts with a survey of your site, your people and your risks.'],
  ['Proper installation', 'Neat, labelled and tested work that is easy to maintain for years.'],
  ['Trusted platforms', 'Equipment from established global brands, chosen for your needs and budget.'],
  ['Clear handover', 'Documentation and training so your team can run the system with confidence.'],
  ['Support that stays', 'Ongoing support agreed in a service level agreement, not left to chance.'],
];

const values = [
  ['Integrity', 'Clear scopes, honest advice and work we are willing to put our name to.'],
  ['Reliability', 'Systems designed and tested to keep working in demanding conditions.'],
  ['Continuous improvement', 'We keep pace with the technology so your infrastructure does not fall behind.'],
  ['Client focus', 'Every design starts with your site, your people and your risks.'],
];

export default function AboutPage() {
  return (
    <>
      <PageHero title={<>Security and ICT infrastructure, <span className="accent">built to last</span>.</>} description="UXUE is a Nairobi-based integrator. We design, install and support the security, network and technology systems organisations depend on every day." image={{ src: '/images/pages/about-team.jpg', alt: 'A team of engineers planning around a laptop in a meeting room.' }} breadcrumbs={[{ label: 'About' }]} />

      <Section className="section">
        <div className="section-intro">
          <p className="eyebrow">Who we are</p>
          <h2>One team for the <span className="accent">whole system</span>.</h2>
          <p>Many sites end up with cameras from one supplier, access control from another and a network nobody fully owns. UXUE plans these layers together, installs them properly and stays accountable after handover.</p>
        </div>
        <ul className="facts">
          {facts.map(([value, label]) => <li key={label}><strong>{value}</strong><span>{label}</span></li>)}
        </ul>
      </Section>

      <Section className="section section--paper">
        <div className="section-intro section-intro--center">
          <h2>What we <span className="accent">do</span></h2>
          <p>Five solutions that cover the physical, network and digital layers of your organisation.</p>
        </div>
        <div className="project-cards">
          {services.map((service) => <MediaCard key={service.slug} href={`/solutions/${service.slug}`} image={solutionDetails[service.slug].intro.image} alt={solutionDetails[service.slug].intro.alt} label={`${solutionDetails[service.slug].subServices.length} services`} title={service.name} text={service.summary} />)}
          <div className="project-tile project-tile--note">
            <h3>Need several of these?</h3>
            <p>That is where we add the most value: one design, one installation, one team.</p>
            <Link href="/solutions" className="text-link">See all solutions</Link>
          </div>
        </div>
      </Section>

      <section className="image-split">
        <div className="image-split__image"><Image src="/images/about/nairobi-skyline.jpg" alt="The Nairobi skyline on a clear day." fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
        <div className="image-split__content">
          <div>
            <h2>Built for conditions <span className="accent">on the ground</span>.</h2>
            <p className="lede">Power, connectivity and support realities in East Africa shape every design decision we make. We plan for outages, specify equipment that suits the environment and stay close for support.</p>
            <Link href="/blog/technology-infrastructure-african-enterprises" className="text-link">Read the article</Link>
          </div>
        </div>
      </section>

      <Section className="section">
        <div className="section-intro section-intro--center"><h2>Why organisations <span className="accent">choose us</span></h2></div>
        <ol className="service-cards">
          {reasons.map(([title, text], index) => <li key={title} className="service-card"><span className="service-card__index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </Section>

      <section className="section section--ink">
        <div className="shell">
          <div className="section-intro section-intro--center"><h2>Where we are <span className="accent">going</span></h2></div>
          <div className="brief brief--dark">
            <article><p className="eyebrow">Vision</p><p>To become Africa’s leading integrated security and technology solutions partner.</p></article>
            <article><p className="eyebrow">Mission</p><p>To deliver reliable, intelligent and modern technology solutions that improve protection, productivity and digital transformation.</p></article>
          </div>
        </div>
      </section>

      <Section className="section section--paper">
        <div className="section-intro section-intro--center"><h2>How we <span className="accent">work</span></h2></div>
        <ol className="service-cards service-cards--four">
          {values.map(([title, text], index) => <li className="service-card" key={title}><span className="service-card__index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </Section>

      <Section className="section">
        <div className="section-intro section-intro--center">
          <h2>Trusted by <span className="accent">leading institutions</span></h2>
          <p>Public institutions, universities and private organisations.</p>
        </div>
        <ul className="brand-grid brand-grid--clients">
          {clientOrganisations.map(([name, src, width, height]) => {
            const logoH = Math.round(Math.min(64, Math.max(40, Math.sqrt((9000 * height) / width))));
            return <li key={name}><Image src={src} alt={name} width={Math.round((logoH * width) / height)} height={logoH} style={{ width: 'auto', height: logoH }} /></li>;
          })}
        </ul>
      </Section>

      <CTASection title={<>Work with a team that <span className="accent">stays accountable</span>.</>} text="From the first survey to years of support, one team answers for your system. Tell us about your site." link="Talk to our team" image={ctaImages.about} />
    </>
  );
}
