import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Uxue Company Ltd for security systems, networking, cybersecurity, and ICT solutions.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team to discuss your security and technology requirements"
      />

      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contact our team to discuss your security and technology
              requirements. We provide detailed consultations, site assessments,
              and customized proposals for enterprise projects.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-gray-900">Email</h4>
                <a
                  href="mailto:info@uxue.co.ke"
                  className="text-lg text-primary-800 hover:text-primary-900"
                >
                  info@uxue.co.ke
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-gray-900">Phone</h4>
                <a
                  href="tel:+254XXXXXXXXX"
                  className="text-lg text-primary-800 hover:text-primary-900"
                >
                  +254 XXX XXX XXX
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-gray-900">Location</h4>
                <p className="text-lg text-gray-600">Kenya</p>
              </div>

              <div>
                <h4 className="mb-2 text-gray-900">Business Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold mb-2"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="physical-security">
                    Physical Security & Surveillance
                  </option>
                  <option value="networking">Enterprise Networking</option>
                  <option value="automation">Security Automation</option>
                  <option value="ict-equipment">ICT Equipment Supply</option>
                  <option value="cybersecurity">Cybersecurity Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-800 focus:ring-1 focus:ring-primary-800 outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Section className="py-24 bg-primary-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Request a Consultation</h2>
          <p className="text-lg text-primary-100 leading-relaxed">
            Our technical team provides detailed consultations including site
            assessments, security evaluations, and customized proposals. Contact
            us to schedule a meeting at your premises or our office.
          </p>
        </div>
      </Section>
    </>
  );
}
