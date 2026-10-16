import CTASection from '@/components/CTASection';
import GallerySection from '@/components/GallerySection';
import MediaCard from '@/components/MediaCard';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { ctaImages } from '@/lib/cta';
import { projects } from '@/lib/site';

export const metadata = pageMetadata('Projects', 'Security, networking, data-centre and automation projects delivered by UXUE across Kenya and East Africa.', '/projects', '/images/gallery/p12.jpg');

export default function ProjectsPage() {
  return (
    <>
      <PageHero title={<>Proven in <span className="accent">the field</span>.</>} description="Security, networking, ICT and automation projects designed, installed and supported by UXUE." image={{ src: '/images/gallery/p12.jpg', alt: 'Network switches and patch cabling installed in a rack by UXUE.' }} breadcrumbs={[{ label: 'Projects' }]} />
      <Section className="section">
        <div className="section-intro section-intro--center"><h2>Selected <span className="accent">projects</span></h2></div>
        <div className="project-cards">{projects.map((project) => <MediaCard key={project.slug} href={`/projects/${project.slug}`} image={project.image} alt={project.title} label={project.category} title={project.title} text={project.summary} />)}</div>
      </Section>
      <GallerySection />
      <CTASection title={<>Your project could be <span className="accent">next</span>.</>} text="Tell us about the site and what it needs. We will scope it the same way we scoped these." link="Start your project" image={ctaImages.projects} />
    </>
  );
}
