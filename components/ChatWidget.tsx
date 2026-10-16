'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { findTopic, getTopic, greetings, starterTopics, whatsappLink, type Topic } from '@/lib/chat-knowledge';

type Message = { from: 'bot' | 'user'; text: string; link?: Topic['link'] };

const welcome: Message = { from: 'bot', text: 'Hello. I can answer common questions about UXUE, or connect you with an engineer on WhatsApp.' };

const icons = {
  chat: 'M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z',
  close: 'M6 6l12 12M18 6 6 18',
  send: 'M4 12 20 4l-6 16-3-7z',
};

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.79 14.11c-.24.69-1.43 1.32-1.97 1.37-.5.05-.98.24-3.3-.69-2.8-1.1-4.6-3.97-4.73-4.15-.14-.19-1.13-1.5-1.13-2.86s.72-2.03.97-2.31c.26-.28.56-.35.75-.35l.54.01c.17.01.4-.07.63.48.24.56.8 1.94.87 2.08.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.82.88-1.1.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.11.07.66-.17 1.35Z" /></svg>;
}

// Floating chat: answers common questions from the site's own content, then hands over to WhatsApp.
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [asked, setAsked] = useState<string[]>([]);
  const [answered, setAnswered] = useState<string[]>([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const log = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // New answers scroll to their first line, so long replies are read from the top; anything else scrolls to the end.
  useEffect(() => {
    const el = log.current;
    if (!el) return;
    const answers = el.querySelectorAll<HTMLElement>('.chat__msg--bot:not(.chat__typing)');
    const latest = answers[answers.length - 1];
    const lastIsAnswer = !typing && messages.length > 1 && messages[messages.length - 1].from === 'bot';
    el.scrollTo({ top: lastIsAnswer && latest ? latest.offsetTop - 16 : el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function ask(question: string, topic = findTopic(question)) {
    const text = question.trim();
    if (!text || typing) return;
    let reply: Message;
    if (topic) reply = { from: 'bot', text: topic.answer, link: topic.link };
    else if (greetings.some((word) => text.toLowerCase().startsWith(word))) reply = { from: 'bot', text: 'Hello. What would you like to know? You can pick a question below or type your own.' };
    else reply = { from: 'bot', text: 'I don’t have a ready answer for that, but an engineer can help. Continue on WhatsApp and we’ll pick it up from there.' };
    // Show the question at once, then a short typing pause before the answer, as in a messaging app.
    setMessages((current) => [...current, { from: 'user', text }]);
    setAsked((current) => [...current, text]);
    if (topic) setAnswered((current) => [...current, topic.id]);
    setDraft('');
    setTyping(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((current) => [...current, reply]);
    }, Math.min(1600, 650 + reply.text.length * 4));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    ask(draft);
  }

  // Follow-ups come from the last answered topic; anything already answered is skipped.
  const last = answered.length ? getTopic(answered[answered.length - 1]) : undefined;
  const suggestions = [...(last?.related ?? []), ...starterTopics, 'contact']
    .filter((id, i, list) => list.indexOf(id) === i && !answered.includes(id))
    .slice(0, asked.length ? 3 : 4)
    .map(getTopic)
    .filter((topic): topic is Topic => Boolean(topic));
  const handover = whatsappLink(asked.length ? `Hello UXUE, I was asking about: ${asked.slice(-3).join('; ')}` : 'Hello UXUE, I would like to talk to an engineer.');

  return (
    <div className={`chat${open ? ' is-open' : ''}`}>
      <section className="chat__panel" id="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title" hidden={!open}>
        <header className="chat__head">
          <div>
            <h2 id="chat-title">Ask UXUE</h2>
            <p>Quick answers, or talk to an engineer</p>
          </div>
          <button type="button" className="chat__close" aria-label="Close chat" onClick={() => { setOpen(false); toggle.current?.focus(); }}><Icon d={icons.close} /></button>
        </header>

        <div className="chat__log" ref={log} aria-live="polite">
          {messages.map((message, i) => (
            <div key={i} className={`chat__msg chat__msg--${message.from}`}>
              <p>{message.text}</p>
              {message.link && <Link href={message.link.href} onClick={() => setOpen(false)}>{message.link.label}</Link>}
            </div>
          ))}
          {typing && <div className="chat__msg chat__msg--bot chat__typing" aria-label="UXUE is typing"><span /><span /><span /></div>}
          {!typing && suggestions.length > 0 && (
            <div className="chat__chips" aria-label="Suggested questions">
              {suggestions.map((topic) => <button key={topic.id} type="button" onClick={() => ask(topic.label, topic)}>{topic.label}</button>)}
            </div>
          )}
          {!typing && asked.length > 0 && (
            <a className="chat__whatsapp" href={handover} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />Continue on WhatsApp</a>
          )}
        </div>

        <form className="chat__form" onSubmit={submit}>
          <label htmlFor="chat-input" className="sr-only">Type your question</label>
          <input id="chat-input" ref={input} value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Type your question" autoComplete="off" maxLength={200} />
          <button type="submit" aria-label="Send" disabled={!draft.trim()}><Icon d={icons.send} /></button>
        </form>
      </section>

      <button type="button" ref={toggle} className="chat__toggle" aria-expanded={open} aria-controls="chat-panel" aria-label={open ? 'Close chat' : 'Chat with UXUE'} onClick={() => setOpen(!open)}>
        <Icon d={open ? icons.close : icons.chat} />
      </button>
    </div>
  );
}
