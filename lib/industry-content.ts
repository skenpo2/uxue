// Detailed content for each industry page, keyed by the industry slug in lib/site.ts.

export type IndustryContent = {
  headline: [string, string, string];
  intro: string;
  challenges: { title: string; text: string }[];
  applications: { service: string; text: string; systems: string[] }[];
  checklist: string[];
  faqs: { question: string; answer: string }[];
  cta: { title: [string, string, string]; text: string; link: string };
};

export const industryContent: Record<string, IndustryContent> = {
  corporate: {
    headline: ['Workplaces that are secure, connected and ', 'easy to run', '.'],
    intro: 'Offices bring staff, visitors, contractors and shared technology together every day. We give you controlled access, dependable connectivity and one view of what is happening across the building.',
    challenges: [
      { title: 'Many people, many doors', text: 'Staff, visitors and contractors need different access at different times, without queues at reception.' },
      { title: 'Networks under pressure', text: 'Video calls, cloud tools and every new device depend on a network that was rarely designed for them.' },
      { title: 'Systems that do not talk', text: 'Cameras, access control and IT often sit with different suppliers, so nobody sees the whole picture.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Controlled entry at every door and floor, with cameras covering entrances, car parks and sensitive rooms.', systems: ['Card and biometric access', 'Turnstiles at reception', 'IP cameras with remote viewing'] },
      { service: 'networking', text: 'Fast, reliable wired and wireless networks that keep every desk, meeting room and device connected.', systems: ['Structured cabling', 'Enterprise Wi-Fi', 'Separate guest network'] },
      { service: 'automation', text: 'Visitor registration, car park barriers and attendance that run without paperwork.', systems: ['Visitor management', 'Car park barriers', 'Time and attendance'] },
      { service: 'cybersecurity', text: 'Protection for the laptops, cloud tools and data your teams rely on.', systems: ['Next-generation firewall', 'Endpoint protection', 'Secure remote access'] },
    ],
    checklist: ['Access control at entrances and floors', 'Visitor pre-registration', 'Cameras at entrances and car parks', 'Office-wide Wi-Fi survey', 'Meeting room connectivity', 'Firewall and endpoint protection', 'Server or comms room build-out', 'Central monitoring dashboard'],
    faqs: [
      { question: 'Can staff use one card for doors and attendance?', answer: 'Yes. The same credential can open doors and record attendance, with reports ready for payroll.' },
      { question: 'Can you work in an occupied office?', answer: 'Yes. Installation is scheduled around working hours so teams can keep working.' },
      { question: 'Can we manage several offices centrally?', answer: 'Yes. Access, cameras and network status across sites can be managed from one place.' },
    ],
    cta: { title: ['Planning a ', 'better workplace', '?'], text: 'Tell us about your office, the number of people and what is not working today. We will plan the systems around them.', link: 'Talk about your office' },
  },

  'financial-services': {
    headline: ['Layered protection for ', 'high-trust', ' operations.'],
    intro: 'Banks, microfinance institutions and insurers hold cash, records and customer trust. We design layered physical and digital protection with clear records of every event, across one branch or many.',
    challenges: [
      { title: 'Sensitive areas', text: 'Strong rooms, server rooms and cash areas need tighter control than the banking hall.' },
      { title: 'Many branches', text: 'Each branch must meet the same standard and be visible from head office.' },
      { title: 'Audit and traceability', text: 'Every entry, alarm and recording may need to be produced later, quickly and reliably.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Layered access to sensitive rooms, cameras on every counter and entrance, and alarms with panic buttons.', systems: ['Biometric access to strong rooms', 'Counter and ATM cameras', 'Panic and intrusion alarms'] },
      { service: 'networking', text: 'Secure, resilient links between branches and head office.', systems: ['Branch connectivity', 'Internet failover', 'Segmented networks'] },
      { service: 'cybersecurity', text: 'Defences matched to the threats that target financial organisations.', systems: ['Next-generation firewalls', 'Endpoint protection', 'Penetration testing'] },
      { service: 'automation', text: 'Central monitoring of every branch from one screen.', systems: ['Multi-site dashboards', 'Alarm escalation', 'Event search and export'] },
    ],
    checklist: ['Zoned access by role', 'Strong-room and server-room control', 'Counter, entrance and ATM cameras', 'Panic buttons and intrusion alarms', 'Branch network with failover', 'Firewall and endpoint protection', 'Head office monitoring', 'Retention sized for audit needs'],
    faqs: [
      { question: 'Can head office see every branch?', answer: 'Yes. Cameras, alarms and access events from all branches can be viewed and searched centrally.' },
      { question: 'How long can recordings be kept?', answer: 'As long as your policy requires. Storage is sized during design to match your retention period.' },
      { question: 'Can you roll out to branches in phases?', answer: 'Yes. A standard design is agreed once, then rolled out branch by branch.' },
    ],
    cta: { title: ['Protect every ', 'branch', '.'], text: 'Tell us how many branches you run and what each one needs. We will design one standard that works across all of them.', link: 'Plan your branch security' },
  },

  government: {
    headline: ['Infrastructure that serves the ', 'public', ' reliably.'],
    intro: 'Public institutions welcome high numbers of visitors while protecting records, staff and services. We design systems that are practical to operate, well documented and built to last for years.',
    challenges: [
      { title: 'High visitor numbers', text: 'Service halls and offices must stay open and welcoming while restricted areas stay protected.' },
      { title: 'Long system lifecycles', text: 'Infrastructure is expected to run for years, so it must be documented and easy to support.' },
      { title: 'Varied facilities', text: 'Head offices, regional offices and service centres all have different needs and budgets.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Visible, reliable security for public areas, records rooms and offices.', systems: ['Access to restricted areas', 'Public area cameras', 'Alarm systems'] },
      { service: 'automation', text: 'Orderly visitor flow and vehicle access at busy sites.', systems: ['Visitor management', 'Gate and barrier control', 'Time and attendance'] },
      { service: 'networking', text: 'Dependable networks connecting offices, departments and service points.', systems: ['Structured cabling', 'Inter-building fibre', 'Wireless coverage'] },
      { service: 'ict-equipment', text: 'Computing, server and power equipment specified for public-sector use.', systems: ['Computers and servers', 'UPS and power protection', 'Configuration and set-up'] },
    ],
    checklist: ['Visitor registration and passes', 'Access to records and server rooms', 'Cameras in service halls and entrances', 'Vehicle gate control', 'Office network and Wi-Fi', 'Power backup for critical systems', 'Full system documentation', 'Staff training at handover'],
    faqs: [
      { question: 'Do you provide documentation for audits?', answer: 'Yes. Every system is documented at handover, including layouts, settings and maintenance records.' },
      { question: 'Can you support tender requirements?', answer: 'Yes. We can provide technical specifications and equipment details for procurement.' },
      { question: 'Can you work across several facilities?', answer: 'Yes. We design to one standard and adapt it to each facility.' },
    ],
    cta: { title: ['Built for ', 'public service', '.'], text: 'Tell us about your facilities and the services they deliver. We will plan systems your team can rely on for years.', link: 'Discuss your facility' },
  },

  healthcare: {
    headline: ['Open for care, ', 'secure', ' where it counts.'],
    intro: 'Hospitals and clinics must stay open to patients and visitors around the clock while protecting staff, medicines, records and critical equipment. We design systems that keep care moving.',
    challenges: [
      { title: 'Open and restricted', text: 'Public areas must stay welcoming while pharmacies, theatres and records rooms stay controlled.' },
      { title: 'Always on', text: 'Clinical systems and communications cannot wait for a network or power fault to be fixed.' },
      { title: 'Staff safety', text: 'Night shifts, emergency departments and isolated wards need fast ways to raise an alarm.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Zoned access for clinical areas, cameras for public spaces and panic alarms for staff.', systems: ['Zoned access control', 'Corridor and entrance cameras', 'Staff panic alarms'] },
      { service: 'networking', text: 'Reliable coverage for clinical systems, staff devices and patient Wi-Fi.', systems: ['Ward-wide Wi-Fi', 'Structured cabling', 'Separate patient network'] },
      { service: 'automation', text: 'Monitoring of conditions that medicines and equipment depend on.', systems: ['Temperature monitoring', 'Visitor management', 'Alerts to duty staff'] },
      { service: 'ict-equipment', text: 'Computers, servers and power protection for clinical and admin teams.', systems: ['Workstations', 'Servers and storage', 'UPS for critical loads'] },
    ],
    checklist: ['Access control for pharmacy and theatres', 'Cameras in entrances and corridors', 'Staff panic alarms', 'Ward-wide Wi-Fi', 'Separate patient and guest network', 'Cold-chain temperature alerts', 'UPS for critical equipment', 'Central monitoring'],
    faqs: [
      { question: 'Can you install without disrupting patient care?', answer: 'Yes. Work is planned area by area around clinical schedules, with critical areas handled out of hours.' },
      { question: 'Can you monitor medicine fridges?', answer: 'Yes. Temperature sensors send alerts to duty staff when readings move out of range.' },
      { question: 'Can visitors use Wi-Fi safely?', answer: 'Yes. Patient and visitor Wi-Fi runs separately from clinical systems.' },
    ],
    cta: { title: ['Keep care ', 'moving', '.'], text: 'Tell us about your facility, its departments and what must never stop. We will plan around it.', link: 'Talk about your facility' },
  },

  education: {
    headline: ['Safe, connected ', 'campuses', ' for learning.'],
    intro: 'Schools, colleges and universities manage large sites, many entrances and thousands of people on changing schedules. We help you keep students safe and keep learning connected.',
    challenges: [
      { title: 'Large, open sites', text: 'Many buildings and entrances make it hard to know who is on campus.' },
      { title: 'Growing demand for Wi-Fi', text: 'Students and staff expect fast connectivity in every lecture hall, library and hostel.' },
      { title: 'Building in phases', text: 'Budgets often arrive year by year, so systems must grow without starting again.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Campus-wide cameras and controlled access to hostels, labs and offices.', systems: ['Gate and entrance cameras', 'Hostel and lab access', 'Remote viewing for security teams'] },
      { service: 'networking', text: 'Campus networks and Wi-Fi that reach every building.', systems: ['Inter-building fibre', 'Campus-wide Wi-Fi', 'Separate staff and student networks'] },
      { service: 'automation', text: 'Gate control, visitor records and staff attendance.', systems: ['Vehicle gate control', 'Visitor management', 'Staff attendance'] },
      { service: 'ict-equipment', text: 'Computers and servers for labs, libraries and administration.', systems: ['Computer labs', 'Servers and storage', 'Power protection'] },
    ],
    checklist: ['Cameras at gates and key buildings', 'Access to hostels and labs', 'Fibre between buildings', 'Wi-Fi in halls, libraries and hostels', 'Separate student and staff networks', 'Visitor and vehicle records', 'Computer lab set-up', 'Phased expansion plan'],
    faqs: [
      { question: 'Can we start small and expand later?', answer: 'Yes. We design the full campus plan first, then install it in phases as budget allows.' },
      { question: 'Can security staff view cameras remotely?', answer: 'Yes. Authorised staff can view cameras on a phone or computer.' },
      { question: 'Can students and staff share the Wi-Fi?', answer: 'Yes, on separate networks with their own access rules.' },
    ],
    cta: { title: ['Ready to secure your ', 'campus', '?'], text: 'Share a map of your campus and what you want to achieve. We will plan coverage building by building.', link: 'Plan your campus' },
  },

  industrial: {
    headline: ['Rugged systems for sites that ', 'never stop', '.'],
    intro: 'Factories, warehouses and plants combine wide perimeters, heavy vehicles, valuable stock and harsh conditions. We design security and network systems that stand up to the environment and keep operations moving.',
    challenges: [
      { title: 'Wide perimeters', text: 'Long boundaries and remote corners are hard to watch and easy to breach.' },
      { title: 'Vehicle movement', text: 'Trucks, deliveries and staff vehicles must move quickly but stay recorded.' },
      { title: 'Harsh conditions', text: 'Dust, heat and vibration demand equipment and installation built for them.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Perimeter detection, cameras on yards and stores, and controlled staff access.', systems: ['Electric fence and detection', 'Yard and loading-bay cameras', 'Staff access control'] },
      { service: 'automation', text: 'Gate, barrier and weighbridge workflows with every vehicle recorded.', systems: ['ANPR and RFID gates', 'Boom barriers', 'Shift attendance'] },
      { service: 'networking', text: 'Networks that reach offices, plant floors and outdoor areas.', systems: ['Fibre across the site', 'Industrial-grade switches', 'Outdoor Wi-Fi'] },
      { service: 'cybersecurity', text: 'Protection for the systems production depends on.', systems: ['Firewalls', 'Network segmentation', 'Secure remote access'] },
    ],
    checklist: ['Perimeter detection and fencing', 'Cameras on yards, stores and loading bays', 'ANPR or RFID vehicle gates', 'Shift attendance', 'Fibre to remote buildings', 'Outdoor-rated equipment', 'Power protection', 'One operational dashboard'],
    faqs: [
      { question: 'Will the equipment survive dust and heat?', answer: 'Yes. We specify outdoor and industrial-rated equipment and install it to suit the conditions.' },
      { question: 'Can trucks be recorded automatically?', answer: 'Yes. Number-plate recognition records every vehicle entering and leaving.' },
      { question: 'Can perimeter alarms trigger cameras?', answer: 'Yes. Perimeter events can be linked to cameras so guards see the cause straight away.' },
    ],
    cta: { title: ['Secure the whole ', 'site', '.'], text: 'Tell us about your perimeter, gates and operations. We will plan systems that hold up to the environment.', link: 'Plan your site security' },
  },

  'commercial-real-estate': {
    headline: ['Smarter buildings for owners, ', 'tenants', ' and visitors.'],
    intro: 'Office blocks, malls and mixed-use developments serve many tenants at once. We design shared security and network infrastructure that is easy to manage and gives every tenant a smooth experience.',
    challenges: [
      { title: 'Many tenants', text: 'Each tenant needs its own access and network while sharing entrances, lifts and car parks.' },
      { title: 'Busy common areas', text: 'Lobbies, parking and shared spaces need visible security that does not get in the way.' },
      { title: 'Changing occupancy', text: 'Tenants move in and out, so systems must be easy to reconfigure.' },
    ],
    applications: [
      { service: 'physical-security', text: 'Shared access with tenant-level permissions and cameras in every common area.', systems: ['Lobby turnstiles', 'Tenant access groups', 'Common-area cameras'] },
      { service: 'automation', text: 'Car park and visitor workflows that keep the building moving.', systems: ['Car park barriers', 'Visitor registration', 'Lift access control'] },
      { service: 'networking', text: 'Shared building infrastructure with clear boundaries for each tenant.', systems: ['Riser and floor cabling', 'Tenant network separation', 'Common-area Wi-Fi'] },
    ],
    checklist: ['Lobby turnstiles and readers', 'Tenant access groups', 'Car park barriers and ANPR', 'Visitor registration', 'Common-area cameras', 'Building riser cabling', 'Tenant network separation', 'Central building monitoring'],
    faqs: [
      { question: 'Can each tenant manage its own staff access?', answer: 'Yes. Access can be set up so each tenant manages its own people within the building system.' },
      { question: 'Can visitors be pre-registered by tenants?', answer: 'Yes. Tenants can pre-register visitors so reception check-in is quick.' },
      { question: 'Can you add systems to an existing building?', answer: 'Yes. We review what is installed and plan upgrades around occupied floors.' },
    ],
    cta: { title: ['A building tenants ', 'want', ' to be in.'], text: 'Tell us about your property, its tenants and its entrances. We will plan shared systems that are simple to run.', link: 'Discuss your building' },
  },

  technology: {
    headline: ['Fast, secure foundations for ', 'technology teams', '.'],
    intro: 'Technology companies depend on networks, servers and data that are always available and always protected. We build the infrastructure underneath your products and teams, ready to scale.',
    challenges: [
      { title: 'Constant growth', text: 'New people, devices and services arrive faster than the original network was planned for.' },
      { title: 'Valuable equipment', text: 'Server rooms and labs hold equipment and data that need tight physical control.' },
      { title: 'Security expectations', text: 'Clients and partners expect strong security from a technology business.' },
    ],
    applications: [
      { service: 'networking', text: 'High-capacity networks and server rooms designed for growth.', systems: ['High-speed switching', 'Server room build-out', 'Redundant internet'] },
      { service: 'cybersecurity', text: 'Layered security for networks, devices and cloud services.', systems: ['Next-generation firewalls', 'Cloud security review', 'Penetration testing'] },
      { service: 'ict-equipment', text: 'Workstations, servers and storage specified for technical teams.', systems: ['Developer workstations', 'Servers and storage', 'Power protection'] },
      { service: 'physical-security', text: 'Controlled access to server rooms, labs and offices.', systems: ['Biometric server room access', 'Office access control', 'Camera coverage'] },
    ],
    checklist: ['Capacity and growth plan', 'High-speed switching and Wi-Fi', 'Server room with UPS and cooling', 'Redundant internet links', 'Firewall and endpoint protection', 'Cloud configuration review', 'Biometric server room access', 'Documentation for audits'],
    faqs: [
      { question: 'Can the network grow with our team?', answer: 'Yes. We plan capacity for growth so adding people and devices does not mean starting again.' },
      { question: 'Can you review our cloud security?', answer: 'Yes. We review configuration, access and visibility, then help close the gaps.' },
      { question: 'Can you build a server room in an existing office?', answer: 'Yes. We plan racks, power, cooling and access control to fit the space.' },
    ],
    cta: { title: ['Build on a ', 'solid foundation', '.'], text: 'Tell us how your team works today and where you plan to be next year. We will design infrastructure that keeps up.', link: 'Plan your infrastructure' },
  },
};

export const getIndustryContent = (slug: string) => industryContent[slug];
