'use client';

import { useState } from 'react';
import Section from '@/components/Section';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'
  >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-950 pt-32 pb-24 border-b border-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl border-l-[3px] border-orange-500 pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
                Initiate Engagement
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              SECURE YOUR <br />
              <span className="text-slate-400">INFRASTRUCTURE.</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Schedule a technical consultation with our engineering team. We
              provide comprehensive site assessments and customized security
              architecture proposals.
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTACT SECTION */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">
              Direct Communication
            </h2>

            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-orange-500 group-hover:bg-orange-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-slate-600 group-hover:text-orange-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Headquarters
                  </h4>
                  <p className="text-lg text-slate-900">P.O BOX 22729-00505</p>
                  <p className="text-lg text-slate-600 font-light">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Direct Lines
                  </h4>
                  <a
                    href="tel:+254718074080"
                    className="block text-lg text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    +254 718 074 080
                  </a>
                  <a
                    href="tel:+254726132035"
                    className="block text-lg text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    +254 726 132 035
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors">
                  <svg
                    className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Electronic Mail
                  </h4>
                  <a
                    href="mailto:uxuelimitedcompany@gmail.com"
                    className="text-lg text-slate-900 hover:text-blue-600 transition-colors break-all"
                  >
                    uxuelimitedcompany@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Project Inquiry
              </h3>
              <p className="text-slate-600 mb-8 font-light">
                Complete the form below and an integration specialist will
                contact you within 24 hours.
              </p>

              {formStatus === 'success' ? (
                <div className="bg-white border-2 border-green-500 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    Inquiry Received
                  </h4>
                  <p className="text-slate-600">
                    Our technical team has received your message and will be in
                    touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2"
                      >
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all rounded-none appearance-none"
                      >
                        <option value="">Select a service category</option>
                        <option value="physical-security">
                          Physical Security & Surveillance
                        </option>
                        <option value="networking">
                          Enterprise Networking
                        </option>
                        <option value="automation">Security Automation</option>
                        <option value="ict-equipment">
                          ICT Equipment Supply
                        </option>
                        <option value="cybersecurity">
                          Cyber Defense Solutions
                        </option>
                        <option value="other">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-widest text-slate-700 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Please provide a brief overview of your infrastructure requirements..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all rounded-none resize-none placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Transmitting...
                      </span>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
