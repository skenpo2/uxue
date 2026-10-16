import CTASection from '@/components/CTASection';
import MediaCard from '@/components/MediaCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { industries } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';
import { ctaImages } from '@/lib/cta';

export const metadata = pageMetadata('Industries', 'How UXUE security and ICT infrastructure supports corporate, financial, government, healthcare, education, industrial, real estate and technology organisations.', '/industries', '/images/pages/industries-nairobi-skyline.jpg');

const questions = [
  ['Risk', 'What must be protected, detected or controlled?'],
  ['Continuity', 'Which functions must stay available, and how fast must they recover?'],
  ['People', 'Who uses the system, who manages it and who responds?'],
  ['Lifecycle', 'How will the site grow, and how will the system be maintained?'],
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero title={<>Built around the way <span className="accent">your sector</span> operates.</>} description="The right system depends on the people, risks and facilities it has to serve." image={{ src: '/images/pages/industries-nairobi-skyline.jpg', alt: 'The Nairobi skyline under a cloudy sky.' }} breadcrumbs={[{ label: 'Industries' }]} />
      <Section className="section">
        <div className="section-intro section-intro--center"><h2>Sectors we <span className="accent">serve</span></h2></div>
        <div className="project-cards project-cards--four">{industries.map((industry) => <MediaCard key={industry.slug} href={`/industries/${industry.slug}`} image={industry.image} alt={`${industry.name} environment`} title={industry.name} text={industry.summary} />)}</div>
      </Section>
      <Section className="section section--ink">
        <div className="section-intro section-intro--center"><h2>Four questions we <span className="accent">ask first</span></h2></div>
        <ol className="steps steps--four">{questions.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </Section>
      <CTASection title={<>Infrastructure shaped around <span className="accent">your sector</span>.</>} text="Tell us how your organisation operates. We will show you how organisations like yours protect and connect their sites." link="Discuss your sector" image={ctaImages.industries} />
    </>
  );
}
