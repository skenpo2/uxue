const poBox = '22647-00505';
const city = 'Nairobi';

export const site = {
  name: 'UXUE Company Ltd',
  shortName: 'UXUE',
  url: 'https://uxue.co.ke',
  description:
    'Technology-first security and ICT integration for organisations in Kenya and East Africa.',
  email: 'uxuelimitedcompany@gmail.com',
  phones: ['+254 718 074 080', '+254 726 132 035'],
  poBox,
  city,
  address: [`P.O. Box ${poBox}`, `${city}, Kenya`],
  social: {
    x: 'https://x.com/SystemsUxue',
    facebook: 'https://www.facebook.com/profile.php?id=61556206979247',
  },
} as const;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  capabilities: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  industrySlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'physical-security',
    name: 'Smart Physical Security',
    shortName: 'Physical Security',
    eyebrow: 'Protect people, property and operations',
    summary:
      'Integrated surveillance, access control, alarms and perimeter systems designed around each site.',
    description:
      'UXUE designs and deploys physical security infrastructure that helps organisations deter threats, detect events and manage access with clearer operational visibility.',
    image: '/images/phy-sec.jpg',
    capabilities: [
      { title: 'IP video surveillance', description: 'High-resolution cameras, recording and intelligent video capabilities for critical zones.' },
      { title: 'Access control', description: 'Card, biometric and managed authentication for controlled movement through a facility.' },
      { title: 'Alarm and intrusion detection', description: 'Multi-zone detection and notification systems configured around the risk profile of the site.' },
      { title: 'Perimeter protection', description: 'Barrier, electric fence and surveillance layers coordinated as one protection strategy.' },
    ],
    approach: [
      { title: 'Assess', description: 'Map the site, operating patterns, critical assets and vulnerable areas.' },
      { title: 'Design', description: 'Plan coverage, access points, alarm zones, storage and management architecture.' },
      { title: 'Deploy', description: 'Install and configure the system while managing disruption to ongoing operations.' },
      { title: 'Handover', description: 'Test the complete system, document it and train the people responsible for it.' },
    ],
    industrySlugs: ['corporate', 'financial-services', 'government', 'healthcare', 'education', 'industrial', 'commercial-real-estate'],
  },
  {
    slug: 'networking',
    name: 'Enterprise Networking',
    shortName: 'Networking',
    eyebrow: 'Build the infrastructure every system depends on',
    summary:
      'Structured cabling, fibre, wireless networks and data-centre infrastructure built for dependable operations.',
    description:
      'UXUE plans and implements the physical and active network layers that connect people, devices and sites—from structured cabling and fibre to routing, switching, wireless coverage and server-room infrastructure.',
    image: '/images/network-server-switches.jpg',
    capabilities: [
      { title: 'Structured cabling and fibre', description: 'Copper and fibre infrastructure organised, labelled and designed for maintainability.' },
      { title: 'LAN, WAN and wireless', description: 'Wired and wireless environments planned around coverage, capacity and secure access.' },
      { title: 'Server rooms and data centres', description: 'Racks, power distribution, cooling considerations and equipment organisation.' },
      { title: 'Network hardware', description: 'Deployment and configuration of enterprise routers, switches, firewalls and related hardware.' },
    ],
    approach: [
      { title: 'Requirements', description: 'Establish user, device, application, bandwidth and growth requirements.' },
      { title: 'Architecture', description: 'Define topology, pathways, equipment locations, coverage and resilience.' },
      { title: 'Installation', description: 'Deploy cabling and hardware with disciplined labelling and cable management.' },
      { title: 'Verification', description: 'Test the installed infrastructure and provide clear handover documentation.' },
    ],
    industrySlugs: ['corporate', 'financial-services', 'government', 'healthcare', 'education', 'industrial', 'commercial-real-estate', 'technology'],
  },
  {
    slug: 'automation',
    name: 'Security Automation',
    shortName: 'Automation',
    eyebrow: 'Turn separate systems into coordinated operations',
    summary:
      'Visitor, gate, IoT and monitoring systems integrated to improve visibility and response.',
    description:
      'UXUE connects surveillance, access, alarms and operational devices so events can be monitored and managed from a clearer, more coordinated interface.',
    image: '/images/smar-au.jpg',
    capabilities: [
      { title: 'Visitor management', description: 'Digital visitor workflows, access records and controlled arrival processes.' },
      { title: 'IoT monitoring', description: 'Dashboards that bring relevant device and environmental status into one view.' },
      { title: 'Automated gates and barriers', description: 'Vehicle-access workflows with RFID, ANPR and controlled barrier operation where appropriate.' },
      { title: 'Remote monitoring', description: 'Centralised visibility for systems distributed across a facility or multiple sites.' },
    ],
    approach: [
      { title: 'Map workflows', description: 'Understand how people, vehicles and alerts move through the operation.' },
      { title: 'Define integrations', description: 'Identify which systems and events need to exchange information.' },
      { title: 'Configure', description: 'Build practical rules, permissions, dashboards and operator workflows.' },
      { title: 'Validate', description: 'Test normal, exception and failure scenarios before operational handover.' },
    ],
    industrySlugs: ['corporate', 'financial-services', 'government', 'healthcare', 'education', 'industrial', 'commercial-real-estate'],
  },
  {
    slug: 'ict-equipment',
    name: 'ICT Equipment Supply',
    shortName: 'ICT Equipment',
    eyebrow: 'Specify and deploy business technology with confidence',
    summary:
      'Enterprise computing, server, storage, power and networking equipment supported by technical guidance.',
    description:
      'UXUE supports technology procurement from requirements assessment through equipment supply, configuration and integration with the existing environment.',
    image: '/images/ict-equip.jpg',
    capabilities: [
      { title: 'Computing equipment', description: 'Business workstations, laptops, desktops, thin clients and specialised systems.' },
      { title: 'Server and storage', description: 'Rack and tower servers, network-attached storage and backup infrastructure.' },
      { title: 'Power protection', description: 'UPS, power distribution and surge-protection equipment for critical systems.' },
      { title: 'Networking hardware', description: 'Enterprise switches, routers, wireless equipment, firewalls and appliances.' },
    ],
    approach: [
      { title: 'Specify', description: 'Translate operational and technical needs into an equipment requirement.' },
      { title: 'Select', description: 'Evaluate suitable equipment against compatibility, lifecycle and budget.' },
      { title: 'Supply', description: 'Coordinate procurement and delivery of the agreed equipment.' },
      { title: 'Integrate', description: 'Configure and introduce equipment into the existing technology environment.' },
    ],
    industrySlugs: ['corporate', 'financial-services', 'government', 'healthcare', 'education', 'industrial', 'technology'],
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    shortName: 'Cybersecurity',
    eyebrow: 'Strengthen the digital layers of the enterprise',
    summary:
      'Firewall, endpoint, cloud and assessment services aligned to the organisation’s technology environment.',
    description:
      'UXUE helps organisations identify weaknesses and introduce layered controls across networks, endpoints and cloud environments while keeping operational continuity in view.',
    image: '/images/cyber-defense.png',
    capabilities: [
      { title: 'Next-generation firewalls', description: 'Network controls with inspection, intrusion prevention and application-aware policy.' },
      { title: 'Cloud security', description: 'Configuration, hardening and security visibility for cloud environments.' },
      { title: 'Security assessments', description: 'Authorised vulnerability and penetration-testing activities to identify practical risk.' },
      { title: 'Endpoint protection', description: 'Managed controls for workstations, servers and mobile endpoints.' },
    ],
    approach: [
      { title: 'Assess', description: 'Review the current environment, exposure and operational priorities.' },
      { title: 'Architect', description: 'Define a layered control model appropriate to the identified risk.' },
      { title: 'Implement', description: 'Configure agreed safeguards with controlled rollout and change management.' },
      { title: 'Review', description: 'Validate controls and establish the next priorities for ongoing improvement.' },
    ],
    industrySlugs: ['corporate', 'financial-services', 'government', 'healthcare', 'education', 'industrial', 'technology'],
  },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenge: string;
  image: string;
  serviceSlugs: string[];
  priorities: string[];
};

export const industries: Industry[] = [
  { slug: 'corporate', name: 'Corporate Enterprise', summary: 'Connected, controlled workplaces that support people without compromising operational visibility.', challenge: 'Corporate environments must coordinate access, networks, shared technology and multiple user groups across busy facilities.', image: '/images/m1.png', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Controlled workplace access', 'Reliable user and device connectivity', 'Central visibility across business systems'] },
  { slug: 'financial-services', name: 'Financial Services', summary: 'Layered physical and digital infrastructure for high-control, multi-site operating environments.', challenge: 'Financial organisations operate sensitive spaces and connected systems where access, traceability and continuity require careful coordination.', image: '/images/m2.png', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Layered access and surveillance', 'Resilient connectivity between operational areas', 'Clear event records and central oversight'] },
  { slug: 'government', name: 'Government', summary: 'Maintainable infrastructure for public institutions, administrative facilities and distributed operations.', challenge: 'Public-sector environments often combine high visitor volumes, controlled records, varied facilities and long infrastructure lifecycles.', image: '/images/m3.jpg', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Practical visitor and access workflows', 'Documented, supportable infrastructure', 'Technology suited to the operating context'] },
  { slug: 'healthcare', name: 'Healthcare', summary: 'Dependable infrastructure that supports controlled movement and always-on clinical operations.', challenge: 'Healthcare facilities need open access for care while protecting restricted areas, technology, staff and sensitive operations.', image: '/images/m4.jpg', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Zoned access without operational friction', 'Coverage of critical and public areas', 'Reliable connectivity for staff and systems'] },
  { slug: 'education', name: 'Education', summary: 'Campus-wide security and connectivity designed for diverse users, buildings and schedules.', challenge: 'Educational institutions combine large sites, many access points, changing populations and growing demand for connected learning.', image: '/images/schoolcctv.jpg', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Campus visibility and controlled zones', 'Scalable wired and wireless coverage', 'Infrastructure that can grow by building or phase'] },
  { slug: 'industrial', name: 'Industrial', summary: 'Rugged, integrated systems for facilities where safety, access and operational continuity intersect.', challenge: 'Industrial sites must control movement across perimeters and sensitive zones while supporting equipment, staff and logistics workflows.', image: '/images/project-install.png', serviceSlugs: ['physical-security', 'networking', 'automation', 'ict-equipment', 'cybersecurity'], priorities: ['Perimeter and vehicle control', 'Visibility across operational zones', 'Infrastructure planned around site conditions'] },
  { slug: 'commercial-real-estate', name: 'Commercial Real Estate', summary: 'Coordinated building technology for owners, operators, tenants and visitors.', challenge: 'Multi-tenant properties need flexible access, shared network infrastructure and operational visibility without creating a fragmented user experience.', image: '/images/about-hero2.jpg', serviceSlugs: ['physical-security', 'networking', 'automation'], priorities: ['Tenant and visitor access workflows', 'Shared infrastructure with clear boundaries', 'Centralised building security visibility'] },
  { slug: 'technology', name: 'Technology Companies', summary: 'High-capacity, secure foundations for teams and services that depend on continuous connectivity.', challenge: 'Technology-led organisations need dependable network, equipment and security layers that can change as their teams and systems evolve.', image: '/images/data-center.jpg', serviceSlugs: ['networking', 'ict-equipment', 'cybersecurity', 'physical-security'], priorities: ['Capacity and growth planning', 'Protected equipment and controlled technical spaces', 'Maintainable hardware and network architecture'] },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  implementation: string[];
  technology: string[];
  outcome: string;
  image: string;
  gallery: string[];
  serviceSlugs: string[];
  industrySlugs: string[];
};

export const projects: Project[] = [
  {
    slug: 'corporate-office-security-deployment', title: 'Corporate Office Security Deployment', category: 'Physical Security',
    summary: 'A unified office security architecture combining IP surveillance, biometric access control and perimeter protection through central monitoring.',
    challenge: 'The published portfolio describes a corporate headquarters that required coordinated protection across monitored areas, controlled access points and the site perimeter.',
    solution: 'UXUE brought the physical security layers into one architecture, combining high-definition IP surveillance, biometric access control and perimeter defence with central monitoring.',
    implementation: ['Planned surveillance coverage for the office environment', 'Introduced biometric control at managed access points', 'Connected perimeter protection to the wider security design', 'Configured central monitoring for a unified operational view'],
    technology: ['IP video surveillance', 'Biometric access control', 'Perimeter protection', 'Central monitoring'],
    outcome: 'The disclosed project scope records a centrally managed environment for surveillance, access and perimeter protection. No client identity or measured performance result is published.',
    image: '/images/gallery/p19.jpg', gallery: ['/images/gallery/p5.jpg', '/images/gallery/n11.jpg', '/images/gallery/p2.jpg'], serviceSlugs: ['physical-security', 'automation'], industrySlugs: ['corporate'],
  },
  {
    slug: 'multi-branch-enterprise-networking', title: 'Multi-Branch Enterprise Networking', category: 'Network Infrastructure',
    summary: 'A wide-area network deployment designed to connect regional branches with managed connectivity and a dependable central backbone.',
    challenge: 'The organisation needed regional branch offices to operate across a shared network environment without making each location an isolated technology island.',
    solution: 'UXUE engineered a wide-area network with managed branch connectivity, redundant internet connections and central administration around a dependable backbone.',
    implementation: ['Mapped the branch connectivity requirement', 'Established the wide-area network backbone', 'Introduced redundant internet connectivity', 'Centralised network visibility and management'],
    technology: ['Wide-area networking', 'Redundant internet links', 'Routing and switching', 'Central network management'],
    outcome: 'The published scope confirms a centrally managed branch network with redundant connectivity. Availability figures, branch count and client identity are not disclosed.',
    image: '/images/gallery/p12.jpg', gallery: ['/images/gallery/n8.jpg', '/images/gallery/n9.jpg', '/images/gallery/n10.jpg'], serviceSlugs: ['networking', 'ict-equipment'], industrySlugs: ['corporate', 'financial-services'],
  },
  {
    slug: 'data-centre-infrastructure-setup', title: 'Data Centre Infrastructure Setup', category: 'ICT Infrastructure',
    summary: 'A server-room build-out covering structured cabling, rack installation, UPS power distribution and environmental infrastructure.',
    challenge: 'The project required the physical foundations of a server room to be coordinated as one maintainable environment rather than installed as unrelated equipment.',
    solution: 'UXUE delivered the disclosed server-room scope across high-density structured cabling, rack hardware, primary and secondary UPS power distribution, and environmental cooling infrastructure.',
    implementation: ['Installed and organised structured cabling', 'Deployed rack hardware and equipment pathways', 'Implemented primary and secondary UPS distribution', 'Coordinated environmental cooling infrastructure'],
    technology: ['Structured cabling', 'Rack infrastructure', 'UPS power distribution', 'Environmental cooling'],
    outcome: 'The portfolio records a complete server-room infrastructure build-out. Capacity, facility location and measured operating results are not published.',
    image: '/images/gallery/p5.jpg', gallery: ['/images/gallery/p2.jpg', '/images/gallery/p6.jpg', '/images/gallery/p13.jpg'], serviceSlugs: ['networking', 'ict-equipment'], industrySlugs: ['technology', 'corporate'],
  },
  {
    slug: 'school-campus-surveillance-system', title: 'School Campus Surveillance System', category: 'Surveillance',
    summary: 'Campus-wide IP video surveillance covering entry points and priority zones with secure remote monitoring.',
    challenge: 'The educational environment required surveillance coverage across a broad campus with distinct public, learning and entry areas.',
    solution: 'UXUE installed an IP video surveillance network covering the disclosed priority zones, including classrooms, common areas and entry points, with secure remote monitoring.',
    implementation: ['Planned coverage across the campus environment', 'Installed IP cameras at disclosed priority zones', 'Connected devices through the campus network', 'Enabled secure remote monitoring'],
    technology: ['IP video surveillance', 'Video recording and management', 'Campus network connectivity', 'Remote monitoring'],
    outcome: 'The published record confirms campus-wide monitoring across the identified zones. Camera quantities, institution identity and incident statistics are not disclosed.',
    image: '/images/schoolcctv.jpg', gallery: ['/images/gallery/n1.jpeg', '/images/gallery/n2.jpeg', '/images/gallery/n3.jpg'], serviceSlugs: ['physical-security', 'networking'], industrySlugs: ['education'],
  },
  {
    slug: 'cloud-migration-and-cybersecurity', title: 'Cloud Migration & Cybersecurity', category: 'Cybersecurity',
    summary: 'Security hardening, firewall deployment and endpoint monitoring introduced as part of an enterprise cloud transition.',
    challenge: 'An enterprise cloud transition required security controls to be introduced alongside the infrastructure change rather than treated as a later activity.',
    solution: 'UXUE supported the transition with security hardening, next-generation firewall deployment and continuous endpoint monitoring within the disclosed scope.',
    implementation: ['Reviewed security requirements around the transition', 'Applied security hardening to the target environment', 'Deployed next-generation firewall controls', 'Introduced continuous endpoint monitoring'],
    technology: ['Cloud security hardening', 'Next-generation firewall', 'Endpoint protection', 'Security monitoring'],
    outcome: 'The published scope confirms layered controls were introduced during the cloud transition. Platform names, client identity and measured security outcomes are not disclosed.',
    image: '/images/cyber-project.jpg', gallery: ['/images/gallery/p10.jpg', '/images/gallery/p15.jpg'], serviceSlugs: ['cybersecurity', 'networking'], industrySlugs: ['corporate', 'technology'],
  },
  {
    slug: 'industrial-facility-security-integration', title: 'Industrial Facility Security Integration', category: 'Security Automation',
    summary: 'Perimeter detection, vehicle barriers and employee access control brought together through a unified operational view.',
    challenge: 'The manufacturing environment needed to coordinate perimeter events, logistics vehicle movement and employee access across one operational security approach.',
    solution: 'UXUE integrated perimeter intrusion detection, automated logistics barriers and employee access control into a unified management view.',
    implementation: ['Established perimeter intrusion detection', 'Integrated automated barriers for logistics access', 'Connected employee access control', 'Configured a unified operational dashboard'],
    technology: ['Perimeter intrusion detection', 'Automated vehicle barriers', 'Employee access control', 'Unified security management'],
    outcome: 'The disclosed record confirms the three security layers were brought into one management view. Site location, client identity and measured results are not published.',
    image: '/images/gallery/p17.jpg', gallery: ['/images/gallery/n6.jpg', '/images/gallery/n7.jpg', '/images/gallery/n8.jpg'], serviceSlugs: ['physical-security', 'automation', 'networking'], industrySlugs: ['industrial'],
  },
];

export const technologyPartners = [
  ['Cisco', '/images/brands/cisco.png'], ['Hanwha Techwin Wisenet', '/images/brands/hanwha.jpg'],
  ['D-Link', '/images/brands/dlink.png'], ['Suprema', '/images/brands/suprema.png'],
  ['Cathexis', '/images/brands/cathexis.png'], ['Rosslare', '/images/brands/rosslare.jpg'],
  ['Huawei', '/images/brands/hua.png'], ['Impro', '/images/brands/impro.png'],
  ['Ubiquiti', '/images/brands/ubiquiti.png'], ['ZKTeco', '/images/brands/zk.png'],
] as const;

export const clientOrganisations = [
  ['African Wildlife Foundation', '/images/partners/awf.png'], ['University of Nairobi', '/images/partners/uonbi.png'],
  ['The National Treasury', '/images/partners/treasure.png'], ['Longhorn Publishers', '/images/partners/longhorn.png'],
  ['Ivari Africa', '/images/partners/ivari.png'], ['KWUST', '/images/partners/kwust.png'],
] as const;

export function getService(slug: string) { return services.find((item) => item.slug === slug); }
export function getIndustry(slug: string) { return industries.find((item) => item.slug === slug); }
export function getProject(slug: string) { return projects.find((item) => item.slug === slug); }
