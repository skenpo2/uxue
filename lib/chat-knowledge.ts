import { site, technologyPartners } from '@/lib/site';

// The chat's knowledge base. Each topic is one question visitors ask, the words that point to it,
// the answer, an optional page link and the follow-up questions offered after it.
// Answers only state what UXUE publishes; anything site-specific is passed to an engineer.

export type Topic = {
  id: string;
  /** Shown as a suggested question. */
  label: string;
  /** Words and phrases that point to this topic. Plurals and simple endings are matched automatically. */
  keywords: string[];
  answer: string;
  link?: { label: string; href: string };
  /** Follow-up questions offered after this answer. */
  related?: string[];
  /** Below 1 for broad topics, so a specific topic wins when both match. */
  weight?: number;
};

// WhatsApp number in international format, digits only.
export const whatsappNumber = site.phones[0].replace(/\D/g, '');
export const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const phones = site.phones.join(' or ');

export const topics: Topic[] = [
  // Company
  {
    id: 'services',
    label: 'What does UXUE do?',
    keywords: ['what do you do', 'what you do', 'services', 'service', 'offer', 'solutions', 'who are you', 'about uxue', 'about you', 'company', 'uxue', 'help me with'],
    answer: 'UXUE designs, installs and supports security and ICT infrastructure: physical security (CCTV, access control, alarms, perimeter), enterprise networking, security automation, ICT equipment supply and cybersecurity. One team plans the whole system and stays accountable after handover.',
    link: { label: 'View all solutions', href: '/solutions' },
    related: ['cctv', 'networking', 'assessment', 'why'],
    weight: 0.5,
  },
  {
    id: 'why',
    label: 'Why choose UXUE?',
    keywords: ['why you', 'why uxue', 'why choose', 'different', 'better than', 'experience', 'trust', 'reliable', 'qualified', 'certified'],
    answer: 'You get one accountable team across security, networking and IT instead of several contractors. Every project starts with a site survey, is designed as one system, tested before handover and documented, and is supported under an agreed service level.',
    related: ['clients', 'process', 'assessment'],
  },
  {
    id: 'clients',
    label: 'Who have you worked with?',
    keywords: ['clients', 'client', 'customers', 'your clients', 'who have you worked with', 'references', 'portfolio', 'past work', 'previous work', 'case study'],
    answer: 'Our clients include the National Treasury, the University of Nairobi, the African Wildlife Foundation, Kiriri Women’s University of Science and Technology, Longhorn Publishers and Ivari Africa, alongside corporate, financial, healthcare and industrial organisations.',
    link: { label: 'See our projects', href: '/projects' },
    related: ['industries', 'process', 'assessment'],
  },
  {
    id: 'industries',
    label: 'Which industries do you serve?',
    keywords: ['industry', 'industries', 'sector', 'bank', 'banking', 'hospital', 'clinic', 'school', 'university', 'college', 'campus', 'government', 'ministry', 'factory', 'warehouse', 'manufacturing', 'estate', 'apartment', 'tech company'],
    answer: 'We work with corporate offices, financial services, government, healthcare, education, industrial sites, commercial real estate and technology companies. Each design starts from how that kind of site actually operates.',
    link: { label: 'Explore industries', href: '/industries' },
    related: ['clients', 'cctv', 'access-control'],
    weight: 0.5,
  },
  {
    id: 'areas',
    label: 'Where do you work?',
    keywords: ['where', 'location', 'located', 'based', 'area', 'region', 'kenya', 'nairobi', 'mombasa', 'kisumu', 'nakuru', 'eldoret', 'thika', 'east africa', 'uganda', 'tanzania', 'rwanda', 'address', 'county', 'outside nairobi', 'come to'],
    answer: `We are based in ${site.city} and work with organisations across Kenya and East Africa. Postal address: ${site.address.join(', ')}.`,
    related: ['assessment', 'multisite', 'contact'],
  },

  // Engagement
  {
    id: 'assessment',
    label: 'Can I book a site assessment?',
    keywords: ['assessment', 'site survey', 'survey', 'site visit', 'visit', 'book', 'consultation', 'consult', 'inspect', 'inspection', 'come and see', 'free'],
    answer: 'Yes, the site assessment is free. An engineer reviews your site, existing systems and priorities, then comes back with a clear scope and quotation. Send us a message on WhatsApp or use the contact page to arrange it.',
    link: { label: 'Request an assessment', href: '/contact' },
    related: ['pricing', 'timeline', 'process'],
  },
  {
    id: 'pricing',
    label: 'How much does it cost?',
    keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'quote', 'quotation', 'estimate', 'charge', 'fee', 'rate', 'affordable', 'cheap', 'expensive', 'payment'],
    answer: 'Cost depends on the site, the number of devices and the systems involved, so we quote after a free site assessment. We can also phase a project to match your budget, starting with the highest-risk areas.',
    link: { label: 'Request a quotation', href: '/contact' },
    related: ['assessment', 'timeline', 'existing'],
  },
  {
    id: 'process',
    label: 'How do you deliver a project?',
    keywords: ['process', 'deliver', 'delivery', 'steps', 'stages', 'how do you work', 'how it works', 'approach', 'methodology', 'project'],
    answer: 'Four stages: Discover (site survey and risk review), Design (one architecture across every system), Deploy (installation, configuration and testing with minimal disruption) and Support (documentation, training and an agreed service level).',
    link: { label: 'See our projects', href: '/projects' },
    related: ['timeline', 'support', 'disruption'],
  },
  {
    id: 'timeline',
    label: 'How long does a project take?',
    keywords: ['how long', 'timeline', 'duration', 'time frame', 'timeframe', 'weeks', 'days', 'when can you start', 'start date', 'urgent project', 'quickly', 'fast'],
    answer: 'It depends on the size of the site and the systems involved. After the site assessment we give you a schedule as part of the scope, and larger projects can be phased so critical areas are covered first.',
    related: ['assessment', 'disruption', 'process'],
  },
  {
    id: 'disruption',
    label: 'Will installation disrupt our work?',
    keywords: ['disrupt', 'disruption', 'downtime', 'interrupt', 'after hours', 'weekend', 'night work', 'operations', 'business hours', 'while we work'],
    answer: 'We plan installation around your operations: staged work, agreed access times and changeovers scheduled to keep critical systems running. The plan is agreed with you before work starts.',
    related: ['process', 'timeline', 'support'],
  },
  {
    id: 'support',
    label: 'What happens after installation?',
    keywords: ['after installation', 'after install', 'after you finish', 'after the project', 'handover', 'finish', 'finished', 'completed', 'training', 'train', 'documentation', 'manual'],
    answer: 'Every system is tested, documented and handed over with training for the people who will use and manage it. Ongoing support is agreed in a service level agreement.',
    related: ['maintenance', 'urgent', 'contact'],
  },
  {
    id: 'maintenance',
    label: 'Do you offer maintenance?',
    keywords: ['maintenance', 'maintain', 'service contract', 'sla', 'service level', 'support contract', 'servicing', 'check up', 'preventive', 'warranty', 'guarantee'],
    answer: 'Yes. Maintenance and support are agreed in a service level agreement that sets out response times, scheduled checks and who to contact. Warranty terms depend on the equipment and are confirmed in your quotation.',
    related: ['urgent', 'support', 'existing'],
  },
  {
    id: 'urgent',
    label: 'Something has stopped working',
    keywords: ['not working', 'stopped working', 'broken', 'down', 'fault', 'faulty', 'repair', 'fix our', 'fix the system', 'urgent', 'emergency', 'problem', 'issue', 'offline', 'troubleshoot'],
    answer: `For a fault on a system we support, call ${phones} directly so an engineer can respond. If we did not install it, we can still assess it and advise on a repair or replacement.`,
    related: ['maintenance', 'existing', 'contact'],
  },
  {
    id: 'existing',
    label: 'Can you work with our existing systems?',
    keywords: ['existing', 'current system', 'already have', 'old system', 'upgrade', 'integrate', 'integration', 'compatible', 'expand', 'extend', 'add more', 'another company', 'previous installer'],
    answer: 'Yes. Every engagement starts with a review of what you already have. Where it makes sense, new equipment is configured to work with your existing systems, and we tell you plainly where an upgrade would be the better choice.',
    related: ['assessment', 'brands', 'maintenance'],
  },
  {
    id: 'multisite',
    label: 'Can you manage several sites?',
    keywords: ['multi site', 'multiple sites', 'several sites', 'many sites', 'branches', 'branch', 'head office', 'all our offices', 'central', 'centralised', 'centralized'],
    answer: 'Yes. We have delivered multi-branch networks with central management, and we set up monitoring so cameras, access and network status across several sites can be viewed from one place.',
    link: { label: 'Multi-branch networking project', href: '/projects/multi-branch-enterprise-networking' },
    related: ['remote-monitoring', 'networking', 'assessment'],
  },

  // Physical security
  {
    id: 'cctv',
    label: 'Do you install CCTV?',
    keywords: ['cctv', 'camera', 'surveillance', 'video', 'ip camera', 'nvr', 'dvr', 'recording', 'footage', 'monitor', 'night vision', 'watch', 'view on phone', 'remote view'],
    answer: 'Yes. We design camera coverage zone by zone, install IP cameras with recording sized to how long you need to keep footage, and set up secure viewing on phone or computer. Brands include Hikvision, Dahua, Axis and Hanwha.',
    link: { label: 'Physical security', href: '/solutions/physical-security' },
    related: ['access-control', 'remote-monitoring', 'pricing'],
  },
  {
    id: 'access-control',
    label: 'Do you do access control?',
    keywords: ['access control', 'biometric', 'fingerprint', 'face recognition', 'facial', 'card reader', 'access card', 'tag', 'door lock', 'magnetic lock', 'turnstile', 'attendance', 'clock in', 'time attendance'],
    answer: 'Yes. Card, PIN, fingerprint and face readers, door locks and turnstiles, with permissions by role and schedule and a record of every entry. We also link access to time and attendance where needed. Brands include Suprema, ZKTeco, HID and Impro.',
    link: { label: 'Physical security', href: '/solutions/physical-security' },
    related: ['visitors', 'cctv', 'alarms'],
  },
  {
    id: 'alarms',
    label: 'Do you install alarm systems?',
    keywords: ['alarm', 'intrusion', 'burglar', 'motion sensor', 'sensor', 'panic button', 'siren', 'break in'],
    answer: 'Yes. Intrusion detection, panic buttons and multi-zone alarms, configured so alerts reach the right person and can be linked to cameras for quick verification.',
    link: { label: 'Physical security', href: '/solutions/physical-security' },
    related: ['perimeter', 'cctv', 'remote-monitoring'],
  },
  {
    id: 'perimeter',
    label: 'Do you do perimeter security?',
    keywords: ['perimeter', 'electric fence', 'fence', 'wall', 'boundary', 'compound', 'razor wire'],
    answer: 'Yes. Electric fencing, perimeter detection and perimeter cameras, planned together with your gates and barriers so the boundary works as one layer.',
    link: { label: 'Physical security', href: '/solutions/physical-security' },
    related: ['gates', 'alarms', 'cctv'],
  },

  // Networking
  {
    id: 'networking',
    label: 'Do you do networking?',
    keywords: ['network', 'networking', 'lan', 'wan', 'switch', 'router', 'routing', 'internet', 'connectivity', 'slow network', 'vlan'],
    answer: 'Yes. LAN and WAN design, switching, routing and multi-site connectivity, built on properly installed cabling and documented so it is easy to support. Brands include Cisco, Huawei, Ubiquiti, MikroTik and HPE Aruba.',
    link: { label: 'Enterprise networking', href: '/solutions/networking' },
    related: ['wifi', 'cabling', 'server-room'],
  },
  {
    id: 'wifi',
    label: 'Can you improve our Wi-Fi?',
    keywords: ['wifi', 'wi fi', 'wireless', 'access point', 'hotspot', 'coverage', 'weak signal', 'dead spot', 'guest network'],
    answer: 'Yes. We survey the building, place access points for coverage and capacity rather than guesswork, and separate staff, guest and device traffic so the network stays fast and secure.',
    link: { label: 'Enterprise networking', href: '/solutions/networking' },
    related: ['networking', 'cabling', 'firewall'],
  },
  {
    id: 'cabling',
    label: 'Do you do structured cabling?',
    keywords: ['cabling', 'cable', 'structured cabling', 'fibre', 'fiber', 'cat6', 'cat 6', 'patch panel', 'data points', 'wiring', 'trunking'],
    answer: 'Yes. Copper and fibre cabling installed, labelled and tested, with organised racks and patching so future changes are simple.',
    link: { label: 'Read about structured cabling', href: '/blog/structured-cabling-enterprise-foundation' },
    related: ['server-room', 'networking', 'wifi'],
  },
  {
    id: 'server-room',
    label: 'Can you set up a server room?',
    keywords: ['server room', 'data centre', 'data center', 'rack', 'cabinet', 'cooling', 'comms room'],
    answer: 'Yes. Racks, cabling, power distribution, UPS and cooling planned as one maintainable room, ready for your equipment.',
    link: { label: 'Data centre project', href: '/projects/data-centre-infrastructure-setup' },
    related: ['power', 'cabling', 'ict-equipment'],
  },

  // Automation
  {
    id: 'gates',
    label: 'Do you automate gates and barriers?',
    keywords: ['gate', 'automatic gate', 'barrier', 'boom', 'boom barrier', 'parking', 'car park', 'vehicle', 'anpr', 'number plate', 'rfid', 'sliding gate'],
    answer: 'Yes. Automated gates and boom barriers with RFID tags or number-plate recognition, linked to your access control and cameras so every vehicle movement is recorded.',
    link: { label: 'Security automation', href: '/solutions/automation' },
    related: ['visitors', 'perimeter', 'access-control'],
  },
  {
    id: 'visitors',
    label: 'Do you have visitor management?',
    keywords: ['visitor', 'visitors', 'guest', 'reception', 'front desk', 'sign in', 'check in', 'visitor book', 'visitor log'],
    answer: 'Yes. Digital visitor registration with host notification and temporary access passes, replacing the paper book with a searchable record.',
    link: { label: 'Security automation', href: '/solutions/automation' },
    related: ['access-control', 'gates', 'cctv'],
  },
  {
    id: 'remote-monitoring',
    label: 'Can we monitor everything remotely?',
    keywords: ['remote monitoring', 'remote', 'dashboard', 'iot', 'one screen', 'single view', 'control room', 'monitoring centre', 'alerts', 'notification', 'from my phone', 'smart'],
    answer: 'Yes. We bring cameras, access events, alarms and device status into one view, on a control-room screen or a phone, with alerts sent to the people who need to act.',
    link: { label: 'Security automation', href: '/solutions/automation' },
    related: ['multisite', 'cctv', 'alarms'],
  },

  // ICT equipment
  {
    id: 'ict-equipment',
    label: 'Do you supply IT equipment?',
    keywords: ['laptop', 'computer', 'desktop', 'pc', 'server', 'storage', 'nas', 'printer', 'equipment', 'hardware', 'supply', 'buy', 'purchase', 'procurement', 'tender'],
    answer: 'Yes. We specify, supply and configure laptops, desktops, servers, storage, networking and power equipment from brands such as Dell and HPE, then set it up to work with your environment.',
    link: { label: 'ICT equipment', href: '/solutions/ict-equipment' },
    related: ['power', 'server-room', 'brands'],
  },
  {
    id: 'power',
    label: 'Do you install UPS and power backup?',
    keywords: ['ups', 'power backup', 'backup power', 'power outage', 'blackout', 'surge', 'power protection', 'inverter', 'apc'],
    answer: 'Yes. UPS systems, power distribution and surge protection sized to keep critical equipment such as servers, recorders and network switches running through outages.',
    link: { label: 'ICT equipment', href: '/solutions/ict-equipment' },
    related: ['server-room', 'ict-equipment', 'cctv'],
  },
  {
    id: 'brands',
    label: 'Which brands do you work with?',
    keywords: ['brand', 'vendor', 'manufacturer', 'make', 'model', 'products', 'partner', ...technologyPartners.map(([name]) => name.toLowerCase())],
    answer: `We work with established platforms including ${technologyPartners.slice(0, 12).map(([name]) => name).join(', ')} and more, chosen for your site, your existing systems and your budget.`,
    related: ['ict-equipment', 'existing', 'pricing'],
  },

  // Cybersecurity
  {
    id: 'cybersecurity',
    label: 'Do you do cybersecurity?',
    keywords: ['cyber', 'cybersecurity', 'cyber security', 'hack', 'hacked', 'hacker', 'attack', 'data breach', 'data protection', 'secure our data', 'cloud security'],
    answer: 'Yes. Firewalls, endpoint protection, cloud security hardening and authorised security assessments, matched to the risks and systems your organisation actually has.',
    link: { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
    related: ['firewall', 'pentest', 'endpoint'],
  },
  {
    id: 'firewall',
    label: 'Can you set up a firewall?',
    keywords: ['firewall', 'fortinet', 'fortigate', 'sophos', 'vpn', 'filtering', 'block sites', 'utm'],
    answer: 'Yes. We deploy next-generation firewalls with intrusion prevention, application control and secure VPN for remote staff, using platforms such as Fortinet.',
    link: { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
    related: ['endpoint', 'pentest', 'wifi'],
  },
  {
    id: 'pentest',
    label: 'Do you do security assessments?',
    keywords: ['penetration', 'pen test', 'pentest', 'vulnerability', 'security assessment', 'security audit', 'audit', 'risk assessment', 'compliance'],
    answer: 'Yes. Authorised vulnerability assessments and penetration testing that show where you are exposed and which fixes matter most.',
    link: { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
    related: ['firewall', 'endpoint', 'cybersecurity'],
  },
  {
    id: 'endpoint',
    label: 'Can you protect our computers?',
    keywords: ['antivirus', 'anti virus', 'virus', 'malware', 'ransomware', 'endpoint', 'protect computers', 'protect laptops', 'email security', 'phishing'],
    answer: 'Yes. Managed endpoint protection for workstations, servers and laptops, with central monitoring so threats are caught and dealt with early.',
    link: { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
    related: ['firewall', 'pentest', 'ict-equipment'],
  },

  // Contact
  {
    id: 'contact',
    label: 'How can I contact you?',
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'talk', 'speak', 'engineer', 'human', 'person', 'someone', 'agent', 'whatsapp', 'number', 'meet'],
    answer: `Call ${phones}, email ${site.email}, or continue this conversation with our team on WhatsApp.`,
    link: { label: 'Contact page', href: '/contact' },
    related: ['assessment', 'areas', 'pricing'],
  },
];

export const starterTopics = ['services', 'assessment', 'cctv', 'pricing'];

const byId = new Map(topics.map((topic) => [topic.id, topic]));
export const getTopic = (id: string) => byId.get(id);

// Lower-case words with simple endings removed, so "cameras", "installing" and "installed" match their roots.
const stem = (word: string) => word.replace(/(ings|ing|ies|es|s|ed)$/, (end) => (end === 'ies' ? 'y' : '')).replace(/(.)\1$/, '$1');
const words = (text: string) => text.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean).map((word) => (word.length > 3 ? stem(word) : word));

const index = topics.map((topic) => ({ topic, phrases: topic.keywords.map(words).filter((phrase) => phrase.length > 0) }));

/** Picks the topic whose keywords best match the question, or undefined when nothing fits. Longer phrases count for more. */
export function findTopic(question: string): Topic | undefined {
  const text = ` ${words(question).join(' ')} `;
  let best: { topic: Topic; score: number } | undefined;
  for (const { topic, phrases } of index) {
    const score = (topic.weight ?? 1) * phrases.reduce((sum, phrase) => (text.includes(` ${phrase.join(' ')} `) ? sum + phrase.length * phrase.length : sum), 0);
    if (score > 0 && (!best || score > best.score)) best = { topic, score };
  }
  return best?.topic;
}

export const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'jambo', 'habari', 'hujambo', 'sasa'];
