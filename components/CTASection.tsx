import Image from 'next/image';
import Link from 'next/link';
import { heroImages } from '@/lib/hero-images';
import { site } from '@/lib/site';

const nextSteps = [
  { title: 'Share the brief', text: 'The site, the system or the problem you need solved.' },
  { title: 'Talk to an engineer', text: 'We walk through requirements, constraints and priorities.' },
  { title: 'Get a clear scope', text: 'A practical design, delivery plan and budget to decide on.' },
];

const tel = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export default function CTASection({ title = 'Let’s engineer what your operation needs next.', text = 'Tell us about the site, system or business challenge. We’ll help you define a practical way forward.' }: { title?: string; text?: string }) {
  return (
    <section className="cta-band" id="contact-cta">
      <div className="shell cta-band__panel">
        <div className="cta-band__media" aria-hidden="true">
          <Image src={heroImages.infrastructure.src} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" />
        </div>

        <div className="cta-band__copy">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-band__actions">
            <Link href="/contact" className="button button--orange">Start a conversation</Link>
            <a href={tel(site.phones[0])} className="button button--outline">Call {site.phones[0]}</a>
          </div>
          <ol className="cta-band__steps">
            {nextSteps.map((step) => <li key={step.title}><strong>{step.title}</strong><span>{step.text}</span></li>)}
          </ol>
        </div>

        <aside className="cta-band__card" aria-label="Contact details">
          <p className="cta-band__card-title">Speak directly with our team</p>
          <ul>
            <li>
              <span>Phone</span>
              {site.phones.map((phone) => <a key={phone} href={tel(phone)}>{phone}</a>)}
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>Office</span>
              <p>{site.city}, Kenya</p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
