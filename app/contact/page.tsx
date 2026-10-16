import ConversationForm from '@/components/ConversationForm';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = pageMetadata('Start a Conversation', 'Talk to UXUE about security, networking, automation, cybersecurity or ICT infrastructure requirements.', '/contact', '/images/pages/contact-headsets.jpg');
export default function ContactPage() {
  return <><PageHero title={<>Let’s talk about <span className="accent">your site</span>.</>} description="Tell us what you need to protect, connect or upgrade. An engineer will come back to you with clear next steps." image={{ src: '/images/pages/contact-headsets.jpg', alt: 'Laptops and headsets ready on a meeting room table.' }} breadcrumbs={[{ label: 'Contact' }]} />
    <Section className="section"><div className="contact-grid"><aside><h2>Contact <span className="accent">us</span></h2><p>Call, email or use the form.</p><div className="contact-list"><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div><div><small>Phone</small>{site.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>)}</div><div><small>Postal address</small><span>{site.address[0]}<br />{site.address[1]}</span></div></div></aside><ConversationForm /></div></Section></>;
}
