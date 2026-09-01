import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { services } from '@/lib/site';

export const metadata = pageMetadata(
  'Integrated Technology Solutions',
  'Explore UXUE security, networking, automation, cybersecurity and ICT infrastructure solutions.',
  '/solutions',
  '/images/network-server-switches.jpg',
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrated technology ecosystem"
        title="Systems that work better together."
        description="UXUE brings security, connectivity, automation, cybersecurity and enterprise equipment into one coherent infrastructure strategy."
        images={['/images/network-server-switches.jpg', '/images/phy-sec.jpg', '/images/smar-au.jpg', '/images/ict-equip.jpg', '/images/cyber-defense.png']}
        breadcrumbs={[{ label: 'Solutions' }]}
      />
      <Section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">Capabilities</p><h2>From the physical edge to the digital core.</h2></div>
          <p>Each solution can stand alone, but the greatest operational value comes from understanding how power, network, device, platform and people depend on one another.</p>
        </div>
        <div className="number-list">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/solutions/${service.slug}`}>
              <span className="number-list__index">0{index + 1}</span>
              <h3>{service.name}</h3><p>{service.summary}</p>
              <span className="number-list__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </Section>
      <section className="image-split">
        <div className="image-split__image"><Image src="/images/gallery/n9.jpg" alt="Network infrastructure installed at a UXUE project site" fill sizes="(max-width: 767px) 100vw, 50vw" /></div>
        <div className="image-split__content"><div><p className="eyebrow">One operating picture</p><h2>Infrastructure is an ecosystem.</h2><p className="lede">A camera depends on network and power. An access event depends on identity and an operator response. A server room depends on cabling, protection and disciplined support. UXUE designs with the complete chain in view.</p></div></div>
      </section>
      <Section className="section section--dark">
        <div className="section-heading"><div><p className="eyebrow eyebrow--light">Engagement model</p><h2>Clear from assessment to handover.</h2></div><p className="on-dark">The exact scope changes; the discipline does not.</p></div>
        <div className="process">{[['Assess', 'Understand the environment, risk and outcome.'], ['Architect', 'Define the systems, dependencies and delivery plan.'], ['Integrate', 'Install and configure with controlled site coordination.'], ['Enable', 'Test, document, train and support the operation.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>
      <CTASection />
    </>
  );
}
