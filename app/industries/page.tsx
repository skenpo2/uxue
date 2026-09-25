import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { industries } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';
import { heroImages, industryHeroImages } from '@/lib/hero-images';

export const metadata = pageMetadata('Industries', 'Explore how UXUE security and ICT infrastructure supports corporate, financial, government, healthcare, education and industrial environments.', '/industries', heroImages.physicalSecurity.src);

export default function IndustriesPage() {
  return <><PageHero title="Built around the way your sector operates." description="Effective infrastructure starts with the people, risks, facilities and continuity requirements unique to each environment." images={industryHeroImages} breadcrumbs={[{ label: 'Industries' }]} />
    <Section className="section"><div className="section-heading"><div><h2>Different contexts. One disciplined approach.</h2></div><p>UXUE aligns physical security, connectivity and intelligent systems to the real workflows and constraints of the organisation.</p></div><div className="project-grid">{industries.map((industry) => <Link key={industry.slug} href={`/industries/${industry.slug}`} className="project-card"><div className="project-card__image"><Image src={industry.image} alt={`${industry.name} environment`} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><small>Industry</small><h3>{industry.name}</h3><p>{industry.summary}</p></Link>)}</div></Section>
    <Section className="section section--dark"><div className="section-heading"><div><h2>Risk, continuity, people and lifecycle.</h2></div><p className="on-dark">Technology is evaluated against the operation it must support.</p></div><div className="process">{[['Risk', 'What must be protected, detected or controlled?'], ['Continuity', 'Which functions must remain available and recoverable?'], ['People', 'Who uses, manages and responds to the system?'], ['Lifecycle', 'How will the environment grow, change and stay maintainable?']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Section><CTASection /></>;
}
