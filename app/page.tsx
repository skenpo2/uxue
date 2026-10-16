import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CapabilityCards from '@/components/CapabilityCards';
import CTASection from '@/components/CTASection';
import DeliveryTabs from '@/components/DeliveryTabs';
import HomeHero from '@/components/HomeHero';
import ProjectCarousel from '@/components/ProjectCarousel';
import { clientOrganisations, getIndustry, projects, technologyPartners } from '@/lib/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('Enterprise Security & ICT Infrastructure', 'UXUE designs, installs and supports security, networking, automation, cybersecurity and ICT infrastructure for organisations across Kenya and East Africa.', '/', '/images/hero/hero-data-centre.jpg');

// Eight industries grouped into four, each shown as a text card beside a photo.
const sectorGroups = [
  {
    title: 'Workplaces & property',
    text: 'Controlled access and dependable connectivity for offices, towers and multi-tenant buildings.',
    slugs: ['corporate', 'commercial-real-estate'],
    image: '/images/sectors/office-lobby-turnstiles.jpg',
    alt: 'Access-control turnstiles in a modern office lobby.',
  },
  {
    title: 'Finance & government',
    text: 'Layered protection and clear records for high-control, high-traffic sites.',
    slugs: ['financial-services', 'government'],
    image: '/images/sectors/cameras-glass-tower.jpg',
    alt: 'Surveillance cameras in front of a glass office tower.',
  },
  {
    title: 'Healthcare & education',
    text: 'Open, welcoming campuses that still keep restricted areas secure.',
    slugs: ['healthcare', 'education'],
    image: '/images/sectors/hospital-waiting-area.jpg',
    alt: 'A bright, clean hospital waiting area and reception.',
  },
  {
    title: 'Industry & technology',
    text: 'Rugged perimeter, access and network infrastructure for sites that never stop.',
    slugs: ['industrial', 'technology'],
    image: '/images/sectors/factory-floor.jpg',
    alt: 'A walkway with marked safety lanes through a factory floor.',
  },
];

// Gives every logo roughly the same area, so wide wordmarks and compact marks carry equal weight.
// Client logos run larger, with the same equal-area rule.
const clientLogoHeight = (width: number, height: number) => Math.round(Math.min(110, Math.max(64, Math.sqrt((22000 * height) / width))));

const logoHeight = (width: number, height: number) => Math.round(Math.min(46, Math.max(25, Math.sqrt((3600 * height) / width))));

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section section--paper" id="solutions">
        <div className="shell">
          <CapabilityCards>
            <h2>One accountable partner across every <span className="accent">critical layer</span>.</h2>
            <p>Security, networking, automation, equipment and cyber defence, designed together and delivered by one team.</p>
            <Link href="/solutions" className="text-link">View all solutions</Link>
          </CapabilityCards>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Industries we serve</p>
            <h2>Built around the way each <span className="accent">organisation</span> operates.</h2>
          </div>
          {/* Text and photo alternate; the second row is flipped so the grid reads as a checkerboard. */}
          <div className="sector-grid">
            {sectorGroups.map((group, i) => {
              const flipped = i >= 2;
              return [
                <div key={`${group.title}-text`} className="sector-card" style={{ '--order': i * 2 + (flipped ? 2 : 1), '--m-order': i * 2 + 1 } as CSSProperties}>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  <ul>
                    {group.slugs.map((slug) => {
                      const industry = getIndustry(slug);
                      return industry && <li key={slug}><Link href={`/industries/${slug}`}>{industry.name}</Link></li>;
                    })}
                  </ul>
                </div>,
                <figure key={`${group.title}-image`} className="sector-card sector-card--image" style={{ '--order': i * 2 + (flipped ? 1 : 2), '--m-order': i * 2 } as CSSProperties}>
                  <Image src={group.image} alt={group.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1023px) 50vw, 25vw" />
                </figure>,
              ];
            })}
          </div>
        </div>
      </section>

      <section className="section platforms" id="platforms" aria-labelledby="platforms-heading">
        <div className="shell platforms__grid">
          <div className="platforms__card">
            <h2 id="platforms-heading">Trusted <span className="accent">platforms</span></h2>
            <p>The right equipment matters, but so does how it is designed, installed and supported. We work with the brands enterprises already rely on.</p>
            <ul className="platforms__logos">
              {technologyPartners.map(([name, src, width, height]) => {
                const logoH = Math.round(logoHeight(width, height) * 0.9);
                return (
                  <li key={name}>
                    <Image src={src} alt={name} width={Math.round((logoH * width) / height)} height={logoH} unoptimized={src.endsWith('.svg')} style={{ width: 'auto', height: logoH }} />
                  </li>
                );
              })}
            </ul>
          </div>
          <figure className="platforms__media">
            <Image src="/images/platforms/network-patching.jpg" alt="Blue network cables patched into a rack-mounted panel." fill sizes="(max-width: 900px) 100vw, 34vw" />
          </figure>
        </div>
      </section>

      <section className="section section--paper" id="delivery">
        <div className="shell">
          <div className="section-intro section-intro--center">
            <h2>How we <span className="accent">deliver</span></h2>
            <p>A disciplined path from requirement to reliable operation.</p>
          </div>
          <DeliveryTabs />
        </div>
      </section>

      <section className="section section--ink" id="projects">
        <div className="shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Projects</p>
            <h2>Proven in <span className="accent">the field</span></h2>
          </div>
          <ProjectCarousel items={projects.map(({ slug, title, category, summary, image }) => ({ slug, title, category, summary, image }))} />
          <div className="section-action section-action--center"><Link href="/projects" className="text-link text-link--light">View all projects</Link></div>
        </div>
      </section>

      <section className="section home-clients" aria-labelledby="clients-heading">
        <div className="shell">
          <h2 id="clients-heading">Trusted by <span className="accent">leading institutions</span> and enterprises</h2>
        </div>
        {/* Two identical groups scroll as one strip; the second is hidden from assistive tech. */}
        <div className="marquee">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="marquee__group" aria-hidden={copy === 1 || undefined}>
                {[...clientOrganisations, ...clientOrganisations].map(([name, src, width, height], i) => {
                  const logoH = clientLogoHeight(width, height);
                  return (
                    <li key={`${name}-${i}`} data-repeat={i >= clientOrganisations.length || undefined}>
                      <Image src={src} alt={copy === 0 && i < clientOrganisations.length ? name : ''} width={Math.round((logoH * width) / height)} height={logoH} loading="eager" style={{ width: 'auto', height: logoH }} />
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
