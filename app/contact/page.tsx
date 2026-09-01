import ConversationForm from '@/components/ConversationForm';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { pageMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = pageMetadata('Start a Conversation', 'Talk to UXUE about security, networking, automation, cybersecurity or ICT infrastructure requirements.', '/contact', '/images/focus.jpg');
export default function ContactPage() {
  return <><PageHero eyebrow="Start a conversation" title="Let’s define what your infrastructure needs to do." description="Share your requirement, site or operational challenge. UXUE will use that context to begin a practical technical conversation." images={['/images/focus.jpg', '/images/gallery/p6.jpg', '/images/network-server-switches.jpg']} breadcrumbs={[{ label: 'Contact' }]} />
    <Section className="section"><div className="contact-grid"><aside><p className="eyebrow">Direct contact</p><h2>Speak with UXUE.</h2><p>Use the form to prepare a structured email, or contact the team directly.</p><div className="contact-list"><div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div><div><small>Phone</small>{site.phones.map((phone) => <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>)}</div><div><small>Postal address</small><span>{site.address[0]}<br />{site.address[1]}</span></div></div></aside><ConversationForm /></div></Section></>;
}
