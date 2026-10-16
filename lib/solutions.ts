// Detailed content for each solution page, keyed by the service slug in lib/site.ts.
// Photos: Pexels (free licence). Hero / intro IDs are noted beside each entry.

export type SubService = { title: string; text: string; includes: string[] };

export type SolutionDetail = {
  hero: { title: [string, string, string]; lede: string; image: string; alt: string; position?: string };
  intro: { title: [string, string, string]; text: string; image: string; alt: string };
  subServices: SubService[];
  benefits: { title: string; text: string }[];
  capabilities: string[];
  process: { title: string; text: string }[];
  brands: string[];
  faqs: { question: string; answer: string }[];
  cta: { title: [string, string, string]; text: string; link: string };
};

export const solutionDetails: Record<string, SolutionDetail> = {
  // Pexels 7364948 (hero), 13657375 (intro)
  'physical-security': {
    hero: { title: ['Protect people, property and ', 'operations', '.'], lede: 'Surveillance, access control, alarms and perimeter security designed around your site.', image: '/images/solutions/physical-security-hero.jpg', alt: 'A dome security camera mounted on a ceiling rail.', position: '40% center' },
    intro: { title: ['Security that sees, controls and ', 'responds', '.'], text: 'We plan every layer of physical security together, so cameras, doors, alarms and the perimeter work as one system. You get clear coverage of what matters, controlled movement through the site and a record of every event.', image: '/images/solutions/physical-security-intro.jpg', alt: 'A staff member presenting an access card to a wall-mounted reader.' },
    subServices: [
      { title: 'IP video surveillance', text: 'High-definition cameras placed zone by zone, with recording sized to how long you need footage.', includes: ['Indoor, outdoor and low-light cameras', 'Network video recorders and storage', 'Secure viewing on phone and computer'] },
      { title: 'Access control and biometrics', text: 'Card, PIN, fingerprint and face readers that decide who goes where, and when.', includes: ['Doors, turnstiles and gates', 'Permissions by role and schedule', 'A searchable record of every entry'] },
      { title: 'Intrusion and alarm systems', text: 'Detection and alarms configured around the real risks of the site.', includes: ['Motion and door sensors', 'Panic buttons and sirens', 'Alerts to the right people'] },
      { title: 'Perimeter protection', text: 'The boundary treated as one layer, from the fence line to the gate.', includes: ['Electric fencing', 'Perimeter detection', 'Perimeter cameras'] },
      { title: 'Video management and control rooms', text: 'One place to watch, search and respond across all your cameras and sites.', includes: ['Video management software', 'Video walls and operator desks', 'Event search and export'] },
    ],
    benefits: [
      { title: 'See what matters', text: 'Coverage planned around your real risks, so cameras record the evidence you need.' },
      { title: 'Control who goes where', text: 'Every door follows the same rules, and every entry is on record.' },
      { title: 'Respond faster', text: 'Alarms linked to cameras let your team confirm an event before acting.' },
      { title: 'One system to manage', text: 'Cameras, access, alarms and perimeter managed together, not as separate products.' },
    ],
    capabilities: ['Site risk survey and coverage plan', 'Day and night camera coverage', 'Biometric and card access', 'Linked alarms and video', 'Electric fence and perimeter detection', 'Multi-site central monitoring', 'Recording sized to your retention needs', 'Documentation and operator training'],
    process: [
      { title: 'Survey', text: 'Walk the site, map entrances, assets and blind spots, and agree the risks that matter.' },
      { title: 'Design', text: 'Plan camera views, access points, alarm zones, storage and power as one layout.' },
      { title: 'Install', text: 'Mount, cable and configure every device with minimal disruption to your operations.' },
      { title: 'Test', text: 'Check every view, door and alarm by day and night before handover.' },
      { title: 'Support', text: 'Train your team, document the system and support it under an agreed service level.' },
    ],
    brands: ['Hikvision', 'Dahua Technology', 'Axis Communications', 'Hanwha Vision', 'Milestone Systems', 'Suprema', 'ZKTeco', 'HID', 'Rosslare', 'Impro', 'Cathexis'],
    faqs: [
      { question: 'Can we view our cameras on a phone?', answer: 'Yes. We set up secure remote viewing on phone and computer, with access limited to the people you choose.' },
      { question: 'How long is footage kept?', answer: 'As long as you need. Storage is sized during design to match your retention period and the number of cameras.' },
      { question: 'Can you add to the cameras we already have?', answer: 'Often, yes. We review your existing system first and integrate with it where that is practical.' },
    ],
    cta: { title: ['Ready to secure your ', 'site', '?'], text: 'Tell us about the buildings, entrances and assets you need to protect. An engineer will plan the coverage with you.', link: 'Plan your security system' },
  },

  // Pexels 4486718 (hero), 38246354 (intro)
  networking: {
    hero: { title: ['Networks your business can ', 'rely on', '.'], lede: 'Cabling, fibre, Wi-Fi and multi-site connectivity, designed for speed, security and growth.', image: '/images/solutions/networking-hero.jpg', alt: 'Fibre optic patch cables connected to a patch panel.' },
    intro: { title: ['Built right from the ', 'cable up', '.'], text: 'Every system you run depends on the network. We design and install the physical and active layers together, so your offices, branches and devices stay connected, fast and easy to manage.', image: '/images/solutions/networking-intro.jpg', alt: 'An engineer patching fibre optic cables in a network rack.' },
    subServices: [
      { title: 'Structured cabling', text: 'Copper cabling installed, labelled and tested so every point works and every change is simple.', includes: ['Cat6 and Cat6A data points', 'Patch panels and cable management', 'Testing and labelling'] },
      { title: 'Fibre optic networks', text: 'Fibre backbones between floors, buildings and sites for speed and distance.', includes: ['Single-mode and multi-mode fibre', 'Splicing and termination', 'Building-to-building links'] },
      { title: 'LAN switching and routing', text: 'A core network designed for performance, segmentation and easy support.', includes: ['Managed switches and routers', 'VLANs and traffic priority', 'Network documentation'] },
      { title: 'Enterprise Wi-Fi', text: 'Coverage and capacity planned by survey, not guesswork.', includes: ['Wireless site surveys', 'Access points and controllers', 'Separate staff, guest and device networks'] },
      { title: 'WAN and multi-branch connectivity', text: 'Branches connected as one network with central management.', includes: ['Site-to-site links', 'Internet redundancy and failover', 'Central monitoring'] },
      { title: 'Server rooms and data centres', text: 'Racks, power and cooling organised as one maintainable room.', includes: ['Racks and cabinets', 'Power distribution and UPS', 'Cooling and environmental monitoring'] },
    ],
    benefits: [
      { title: 'Fewer outages', text: 'Redundant links and tested installations keep people and systems connected.' },
      { title: 'Faster everyday work', text: 'Coverage and capacity planned for how your teams actually work.' },
      { title: 'Easier changes', text: 'Labelled, documented cabling makes moves and additions simple.' },
      { title: 'Room to grow', text: 'Capacity planned for the users, devices and sites you will add next.' },
    ],
    capabilities: ['Network design and documentation', 'Copper and fibre installation', 'Certified cable testing', 'Wireless coverage surveys', 'Segmented, secure network design', 'Internet failover and redundancy', 'Multi-branch central management', 'Rack, power and cooling build-outs'],
    process: [
      { title: 'Assess', text: 'Count users, devices, applications and sites, and review what is already installed.' },
      { title: 'Design', text: 'Plan the topology, cable routes, equipment, coverage and resilience.' },
      { title: 'Install', text: 'Run cabling and fibre, mount equipment and label every connection.' },
      { title: 'Configure and test', text: 'Set up switching, routing, Wi-Fi and security, then test speed, coverage and failover.' },
      { title: 'Hand over', text: 'Provide documentation and training, and support the network under an agreed service level.' },
    ],
    brands: ['Cisco', 'Huawei', 'HPE Aruba Networking', 'Ubiquiti', 'MikroTik', 'D-Link'],
    faqs: [
      { question: 'Can you fix slow or patchy Wi-Fi?', answer: 'Yes. We survey the building, find the cause and place access points for real coverage and capacity.' },
      { question: 'Do you test and label the cabling?', answer: 'Yes. Every point is tested and labelled, and you receive the documentation at handover.' },
      { question: 'Can you connect our branches?', answer: 'Yes. We connect branches into one centrally managed network with backup internet links.' },
    ],
    cta: { title: ['Let’s build a network that ', 'keeps up', '.'], text: 'Share your sites, users and the problems you face today. We will design a network that fits them.', link: 'Discuss your network' },
  },

  // Pexels 8696219 (hero), 33335255 (intro)
  automation: {
    hero: { title: ['Separate systems, ', 'working as one', '.'], lede: 'Gates, visitors, attendance and monitoring connected into one coordinated operation.', image: '/images/solutions/automation-hero.jpg', alt: 'An automated boom barrier at the entrance to a car park.' },
    intro: { title: ['Less manual work. ', 'More control', '.'], text: 'Automation links your access control, cameras, gates and devices so routine tasks happen on their own and exceptions reach the right person. Your team spends less time on logbooks and more time on what matters.', image: '/images/solutions/automation-intro.jpg', alt: 'A wall-mounted access terminal in a concrete corridor.' },
    subServices: [
      { title: 'Visitor management', text: 'Digital registration that replaces the paper visitor book.', includes: ['Pre-registration and check-in', 'Host notifications', 'Temporary access passes'] },
      { title: 'Automated gates and barriers', text: 'Vehicle entry that opens for the right vehicles and records the rest.', includes: ['Sliding gates and boom barriers', 'Remote and scheduled control', 'Safety sensors'] },
      { title: 'ANPR and RFID vehicle access', text: 'Number-plate recognition and tags for fast, recorded vehicle movement.', includes: ['Number-plate cameras', 'RFID tags and readers', 'Allow and deny lists'] },
      { title: 'Time and attendance', text: 'Attendance taken from the access system, ready for payroll.', includes: ['Biometric and card clocking', 'Shift and roster rules', 'Exportable reports'] },
      { title: 'IoT and environmental monitoring', text: 'Sensors that watch the conditions your equipment and stock depend on.', includes: ['Temperature and humidity', 'Power and water leak alerts', 'Device status dashboards'] },
      { title: 'Central and remote monitoring', text: 'Every event from every system, in one view.', includes: ['Unified dashboards', 'Alerts to phone and email', 'Multi-site oversight'] },
    ],
    benefits: [
      { title: 'Less manual work', text: 'Visitor books, gate logs and attendance sheets run on their own.' },
      { title: 'Better records', text: 'Every person and vehicle movement is recorded and searchable.' },
      { title: 'Faster response', text: 'Exceptions reach the right person straight away.' },
      { title: 'One view', text: 'Events from every system and site appear in one place.' },
    ],
    capabilities: ['Workflow mapping before design', 'Gate, barrier and turnstile control', 'Number-plate recognition', 'Visitor pre-registration', 'Attendance linked to access', 'Environmental sensors and alerts', 'One dashboard across systems', 'Testing of normal and failure scenarios'],
    process: [
      { title: 'Map', text: 'Follow how people, vehicles and alerts actually move through your operation.' },
      { title: 'Design', text: 'Decide which systems and events should talk to each other, and what should happen.' },
      { title: 'Build', text: 'Install devices and configure rules, permissions, dashboards and alerts.' },
      { title: 'Validate', text: 'Test everyday use, exceptions and failures before go-live.' },
      { title: 'Support', text: 'Train operators and refine the rules as your operation changes.' },
    ],
    brands: ['ZKTeco', 'Suprema', 'HID', 'Hikvision', 'Milestone Systems', 'Impro'],
    faqs: [
      { question: 'Can gates open automatically for staff vehicles?', answer: 'Yes. Number-plate recognition or RFID tags let approved vehicles in and record every movement.' },
      { question: 'Can attendance come from our access control?', answer: 'Yes. Clock-ins come straight from the readers and export as reports for payroll.' },
      { question: 'What happens if the system goes offline?', answer: 'We design and test failure modes, so doors and gates behave safely and records are kept.' },
    ],
    cta: { title: ['Put your site on ', 'autopilot', '.'], text: 'Tell us which tasks take the most time today: gates, visitors, attendance or monitoring. We will show you what can run on its own.', link: 'Automate your operations' },
  },

  // Pexels 17489153 (hero), 3550484 (intro)
  'ict-equipment': {
    hero: { title: ['The right equipment, ', 'set up properly', '.'], lede: 'Computing, servers, storage, power and networking equipment, specified and configured for your environment.', image: '/images/solutions/ict-equipment-hero.jpg', alt: 'Rack-mounted servers lit in blue in a data centre.' },
    intro: { title: ['From specification to ', 'switch-on', '.'], text: 'We help you choose equipment that fits your needs and budget, supply it, and configure it to work with what you already have. You get one supplier who understands how it all connects.', image: '/images/solutions/ict-equipment-intro.jpg', alt: 'New laptops stacked on their shipping boxes.' },
    subServices: [
      { title: 'Computing', text: 'Business laptops, desktops and workstations for every role.', includes: ['Laptops and desktops', 'Workstations and thin clients', 'Imaging and set-up'] },
      { title: 'Servers and storage', text: 'Servers and storage sized for your workloads and growth.', includes: ['Rack and tower servers', 'Network-attached storage', 'Backup infrastructure'] },
      { title: 'Power protection', text: 'Keep critical equipment running through outages and surges.', includes: ['UPS systems', 'Power distribution units', 'Surge protection'] },
      { title: 'Networking hardware', text: 'Enterprise switches, routers, wireless and firewall appliances.', includes: ['Switches and routers', 'Wireless access points', 'Firewall appliances'] },
      { title: 'Procurement and lifecycle', text: 'Sourcing, delivery and set-up handled for you, with records you can keep.', includes: ['Specification and quotation', 'Delivery and installation', 'Asset records'] },
    ],
    benefits: [
      { title: 'The right fit', text: 'Equipment chosen for your needs and compatibility, not just the catalogue.' },
      { title: 'Ready to use', text: 'Configured and set up so your team can start working on day one.' },
      { title: 'Protected uptime', text: 'Power protection keeps critical equipment running through outages.' },
      { title: 'One supplier', text: 'Specification, supply, set-up and support from one team.' },
    ],
    capabilities: ['Needs assessment before buying', 'Compatibility with existing systems', 'Trusted global brands', 'Configuration before delivery', 'UPS sizing for critical loads', 'Server and storage planning', 'Installation on site', 'Asset documentation'],
    process: [
      { title: 'Specify', text: 'Turn your needs into a clear equipment requirement.' },
      { title: 'Select', text: 'Compare suitable options on compatibility, lifecycle and budget.' },
      { title: 'Supply', text: 'Source and deliver the agreed equipment.' },
      { title: 'Configure', text: 'Set up and integrate the equipment with your environment.' },
      { title: 'Support', text: 'Hand over records and support the equipment as agreed.' },
    ],
    brands: ['Dell Technologies', 'HPE Aruba Networking', 'APC by Schneider Electric', 'Cisco', 'Huawei', 'Ubiquiti'],
    faqs: [
      { question: 'Do you set up the equipment as well?', answer: 'Yes. We configure and install it so it works with your existing systems from day one.' },
      { question: 'Can you supply in bulk for a whole office?', answer: 'Yes. We handle specification, delivery and set-up for single items or full rollouts.' },
      { question: 'What about warranty?', answer: 'Warranty depends on the manufacturer and model, and is confirmed in your quotation.' },
    ],
    cta: { title: ['Equip your team with the ', 'right tools', '.'], text: 'Send us what you need, or the problem you are solving. We will recommend, quote and set it up.', link: 'Request an equipment quote' },
  },

  // Pexels 5475752 (hero), 37605911 (intro)
  cybersecurity: {
    hero: { title: ['Stay ahead of ', 'cyber threats', '.'], lede: 'Firewalls, endpoint protection, cloud security and assessments, matched to the risks you actually face.', image: '/images/solutions/cybersecurity-hero.jpg', alt: 'Hands typing on a laptop showing security code in purple light.' },
    intro: { title: ['Protection from the network to the ', 'device', '.'], text: 'Attacks target the weakest point, whether that is an open port, an unpatched laptop or a convincing email. We find your gaps and close them in layers, without slowing your team down.', image: '/images/solutions/cybersecurity-operations.jpg', alt: 'A technician working at a terminal in a server room.' },
    subServices: [
      { title: 'Next-generation firewalls', text: 'Network protection that inspects traffic and stops threats at the edge.', includes: ['Intrusion prevention', 'Application and web control', 'Secure remote access (VPN)'] },
      { title: 'Endpoint protection', text: 'Managed protection for every laptop, desktop and server.', includes: ['Anti-malware and ransomware protection', 'Central policy and updates', 'Threat alerts'] },
      { title: 'Cloud security', text: 'Your cloud services configured and hardened properly.', includes: ['Configuration review', 'Access and identity controls', 'Security visibility'] },
      { title: 'Vulnerability assessment and penetration testing', text: 'Authorised testing that shows where you are exposed.', includes: ['Vulnerability scanning', 'Penetration testing', 'Prioritised fix plan'] },
      { title: 'Security monitoring', text: 'Ongoing visibility so threats are spotted early.', includes: ['Log and event review', 'Alerting', 'Regular security reports'] },
    ],
    benefits: [
      { title: 'Know your risks', text: 'An assessment shows where you are exposed and what to fix first.' },
      { title: 'Layered defence', text: 'Network, device and cloud protection working together.' },
      { title: 'Work without friction', text: 'Security that protects your team without slowing it down.' },
      { title: 'Stay protected', text: 'Monitoring and regular reviews keep defences current.' },
    ],
    capabilities: ['Risk-based security assessment', 'Firewall deployment and tuning', 'Managed endpoint protection', 'Secure remote access', 'Cloud configuration hardening', 'Authorised penetration testing', 'Ongoing monitoring and review'],
    process: [
      { title: 'Assess', text: 'Review your network, devices, cloud services and current controls.' },
      { title: 'Prioritise', text: 'Rank the risks and agree which protections matter most.' },
      { title: 'Deploy', text: 'Configure firewalls, endpoint and cloud controls with careful change management.' },
      { title: 'Verify', text: 'Test that the controls work as intended.' },
      { title: 'Monitor', text: 'Keep watch, update policies and review regularly.' },
    ],
    brands: ['Fortinet', 'Cisco', 'HPE Aruba Networking', 'Huawei'],
    faqs: [
      { question: 'Where should we start?', answer: 'With an assessment. It shows your biggest exposures so the budget goes where it matters most.' },
      { question: 'Do you test our systems without disrupting work?', answer: 'Yes. Testing is authorised, scoped and scheduled with you to avoid disruption.' },
      { question: 'We think we have been attacked. Can you help?', answer: 'Yes. Call us directly so an engineer can help contain the issue and review what happened.' },
    ],
    cta: { title: ['Know where you are ', 'exposed', '.'], text: 'Start with a security assessment. We will show you the gaps that matter and how to close them.', link: 'Book a security assessment' },
  },
};

export const getSolutionDetail = (slug: string) => solutionDetails[slug];
