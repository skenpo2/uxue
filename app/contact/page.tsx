import ConversationForm from '@/components/ConversationForm';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import { companyHeroImages, heroImages } from '@/lib/hero-images';

export const metadata = pageMetadata('Start a Conversation', 'Talk to UXUE about security, networking, automation, cybersecurity or ICT infrastructure requirements.', '/contact', heroImages.infrastructure.src);
export default function ContactPage() {
  return <><PageHero title="Let’s define what your infrastructure needs to do." description="Share your requirement, site or operational challenge. UXUE will use that context to begin a practical technical conversation." images={companyHeroImages} breadcrumbs={[{ label: 'Contact' }]} />
    <Section className="section"><div className="contact-grid"><aside><h2>Speak with UXUE.</h2><p>Use the form to prepare a structured email, or contact the team directly.</p><div className="contact-list"><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div><div><small>Phone</small>{site.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>)}</div><div><small>Postal address</small><span>{site.address[0]}<br />{site.address[1]}</span></div></div></aside><ConversationForm /></div></Section></>;
}
