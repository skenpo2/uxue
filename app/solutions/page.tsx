import Link from 'next/link';
import CTASection from '@/components/CTASection';
import MediaCard from '@/components/MediaCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { services } from '@/lib/site';
import { solutionDetails } from '@/lib/solutions';
import { ctaImages } from '@/lib/cta';

export const metadata = pageMetadata(
  'Solutions',
  'Physical security, enterprise networking, security automation, ICT equipment and cybersecurity from UXUE.',
  '/solutions',
  '/images/solutions/networking-hero.jpg',
);

const steps = [
  ['Assess', 'Understand the site, the risks and the outcome you need.'],
  ['Design', 'Plan the systems, how they connect and how they will be delivered.'],
  ['Install', 'Install and configure with minimal disruption to your operations.'],
  ['Test', 'Check every system works as intended, by day and by night.'],
  ['Support', 'Document, train your team and support it under an agreed service level.'],
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title={<>Systems that work <span className="accent">better together</span>.</>}
        description="Security, networking, automation, equipment and cybersecurity, planned as one system by one team."
        image={{ src: '/images/solutions/physical-security-hero.jpg', alt: 'A dome security camera mounted on a ceiling rail.', position: '40% center' }}
        breadcrumbs={[{ label: 'Solutions' }]}
      />
      <Section className="section">
        <div className="section-intro section-intro--center">
          <h2>Our <span className="accent">solutions</span></h2>
          <p>Use one on its own, or combine them into a single system.</p>
        </div>
        <div className="project-cards">
          {services.map((service) => (
            <MediaCard key={service.slug} href={`/solutions/${service.slug}`} image={solutionDetails[service.slug].intro.image} alt={solutionDetails[service.slug].intro.alt} label={`${solutionDetails[service.slug].subServices.length} services`} title={service.name} text={service.summary} />
          ))}
          <div className="project-tile project-tile--note">
            <h3>Not sure where to start?</h3>
            <p>Tell us the problem. We will recommend the right mix after a site visit.</p>
            <Link href="/contact" className="text-link">Talk to an engineer</Link>
          </div>
        </div>
      </Section>
      <Section className="section section--paper">
        <div className="section-intro section-intro--center">
          <h2>Everything we <span className="accent">offer</span></h2>
          <p>Every service across our five solutions, designed and installed by one team.</p>
        </div>
        <div className="offer-index">
          {services.map((service) => (
            <div key={service.slug}>
              <h3><Link href={`/solutions/${service.slug}`}>{service.name}</Link></h3>
              <ul>{solutionDetails[service.slug].subServices.map((item) => <li key={item.title}>{item.title}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
      <section className="section section--ink">
        <div className="shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">How we work</p>
            <h2>From assessment to <span className="accent">support</span></h2>
          </div>
          <ol className="steps">{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>
      <CTASection title={<>One team for <span className="accent">every layer</span>.</>} text="Security, network and IT planned together, so nothing falls between contractors. Tell us what you need to protect and connect." link="Plan your project with us" image={ctaImages.solutions} />
    </>
  );
}
