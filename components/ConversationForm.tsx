'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export default function ConversationForm() {
  const [status, setStatus] = useState<'idle' | 'validation-error' | 'submitting' | 'success' | 'failure'>('idle');
  const interestOptions = ['Security', 'Surveillance', 'Access Control', 'Networking', 'ICT Infrastructure', 'Automation', 'Cybersecurity', 'Other / not sure yet'];

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus('validation-error');
      form.reportValidity();
      return;
    }
    setStatus('submitting');
    const data = new FormData(form);
    window.setTimeout(() => {
      try {
      const body = [
        `Name: ${data.get('name')}`, `Company: ${data.get('company')}`, `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || 'Not provided'}`, `Area of interest: ${data.get('interest')}`, '', 'Project / message:', String(data.get('message')),
      ].join('\n');
      const subject = `Project conversation — ${data.get('company')}`;
      setStatus('success');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } catch {
        setStatus('failure');
      }
    }, 150);
  }
  return <form className="conversation-form" onSubmit={submit} noValidate onChange={() => status === 'validation-error' && setStatus('idle')}>
    <h2>Tell us what you’re planning.</h2><p id="form-handoff-note" className="field-note form-handoff-note">There is no web-form backend connected to this site. This form prepares an email in your device’s email application; nothing is stored or submitted by the website.</p>
    <div className="conversation-form__grid"><div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required aria-describedby="form-handoff-note" /></div><div className="field"><label htmlFor="company">Company / organisation</label><input id="company" name="company" autoComplete="organization" required /></div></div>
    <div className="conversation-form__grid"><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="phone">Phone <span className="field-note">(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div></div>
    <div className="field"><label htmlFor="interest">Area of interest</label><select id="interest" name="interest" required defaultValue=""><option value="" disabled>Select an area</option>{interestOptions.map((option) => <option key={option}>{option}</option>)}</select></div>
    <div className="field"><label htmlFor="message">Project or message</label><textarea id="message" name="message" required minLength={20} placeholder="Share the site, current challenge, project stage and what you need the system to achieve." /></div>
    <button className="button button--dark" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Preparing…' : 'Prepare email'}</button>
    <div aria-live="polite">
      {status === 'validation-error' && <p className="form-message form-message--error" role="alert">Complete the required fields and provide a valid email address.</p>}
      {status === 'success' && <p className="form-message" role="status">Your email draft has been prepared; it has not been submitted by this website. If your email app did not open, email <a href={`mailto:${site.email}`}>{site.email}</a> directly.</p>}
      {status === 'failure' && <p className="form-message form-message--error" role="alert">We could not prepare the email. Contact <a href={`mailto:${site.email}`}>{site.email}</a> directly.</p>}
    </div>
  </form>;
}
