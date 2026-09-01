import Link from 'next/link';

export default function CTASection({ title = 'Let’s engineer what your operation needs next.', text = 'Tell us about the site, system or business challenge. We’ll help you define a practical way forward.' }: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="shell cta-band__grid">
        <div><p className="eyebrow">Start a conversation</p><h2>{title}</h2></div>
        <div><p>{text}</p><Link href="/contact" className="button button--orange">Start a conversation <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>
  );
}
