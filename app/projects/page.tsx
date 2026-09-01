import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import GallerySection from '@/components/GallerySection';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { projects } from '@/lib/site';

export const metadata = pageMetadata('Projects & Deployments', 'Explore published UXUE security, network, data-centre and automation deployment experience.', '/projects', '/images/gallery/p19.jpg');
export default function ProjectsPage() {
  return <><PageHero eyebrow="Selected work" title="Infrastructure delivered in the field." description="A view of the security, networking, ICT and automation deployments represented in UXUE’s existing project portfolio." images={['/images/gallery/p19.jpg', '/images/gallery/p12.jpg', '/images/gallery/p17.jpg', '/images/gallery/p5.jpg']} breadcrumbs={[{ label: 'Projects' }]} />
    <Section className="section"><div className="section-heading"><div><p className="eyebrow">Project records</p><h2>From controlled spaces to connected sites.</h2></div><p>Client names and performance claims are only shown where they are part of the published record. The portfolio focuses on disclosed scope and technical context.</p></div><div className="project-grid">{projects.map((project) => <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}><div className="project-card__image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p></Link>)}</div></Section>
    <GallerySection />
    <Section className="section section--dark"><div className="section-heading"><div><p className="eyebrow eyebrow--light">Delivery method</p><h2>Technical control across every stage.</h2></div><p className="on-dark">Strong field delivery connects planning, workmanship, verification and ownership.</p></div><div className="process">{[['Discovery', 'Requirements, site conditions and operational constraints.'], ['Design', 'System architecture, scope and deployment planning.'], ['Deployment', 'Coordinated installation and configuration.'], ['Handover', 'Testing, documentation, training and support.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Section><CTASection /></>;
}
