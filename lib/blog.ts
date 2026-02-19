import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-enterprise-security-system',
    title:
      'Choosing the Right Enterprise Security System for Your Organization',
    excerpt:
      'Key considerations when selecting security infrastructure for corporate environments, from camera placement to system integration.',
    date: '2026-01-15',
    author: 'Uxue Security Team',
    category: 'Physical Security',
    image: 'https://via.placeholder.com/800x500',
    content: `
Selecting appropriate security infrastructure requires understanding both technical capabilities and operational requirements. Organizations must evaluate camera resolution and coverage, access control integration, monitoring capabilities, and scalability for future expansion.

## Assessment Framework

Begin with a comprehensive security assessment identifying vulnerable areas, traffic patterns, and critical assets requiring protection. This assessment should consider physical layout, operational hours, personnel movement, and existing security measures.

## Technology Selection

Modern IP camera systems provide superior image quality and analytics compared to analog alternatives. Consider cameras with sufficient resolution for identification purposes, adequate low-light performance, and analytics capabilities like motion detection and facial recognition.

Access control systems should integrate with existing HR systems, provide detailed audit logs, and support multiple authentication methods including cards, biometrics, and mobile credentials.

## Integration Requirements

Enterprise security systems must integrate with alarm systems, building automation, and IT infrastructure. Evaluate platforms that support open protocols and provide centralized management of multiple security subsystems.

## Scalability Considerations

Design systems that accommodate future expansion without requiring complete replacement. Network-based systems generally provide better scalability than proprietary closed systems.

Implementation should follow industry best practices with professional installation, comprehensive testing, and thorough documentation. Training security personnel on system operation ensures effective utilization of deployed technology.
    `,
  },
  {
    slug: 'structured-cabling-best-practices',
    title: 'Structured Cabling Best Practices for Enterprise Networks',
    excerpt:
      'Professional guidelines for network infrastructure design and installation that ensures performance and reliability.',
    date: '2026-01-10',
    author: 'Uxue Network Team',
    category: 'Networking',
    image: 'https://via.placeholder.com/800x500',
    content: `
Structured cabling forms the physical foundation of enterprise networks. Proper design and installation directly impact network performance, reliability, and future scalability. Organizations investing in quality cabling infrastructure avoid costly retrofits and minimize network downtime.

## Design Principles

Network cabling design should follow TIA/EIA standards with appropriate cable categories for required bandwidth. Cat6A supports 10Gbps Ethernet over 100 meters, providing headroom for future bandwidth requirements without cable replacement.

Maintain proper separation between data cables and electrical wiring to prevent electromagnetic interference. Install cables in dedicated pathways with adequate space for cable management and future additions.

## Installation Standards

Professional installation includes proper termination techniques, appropriate bend radius maintenance, and thorough testing of all cable runs. Each cable should be labeled at both ends with clear identification for troubleshooting and maintenance.

Testing should verify that all cables meet specified performance standards with acceptable levels of attenuation, crosstalk, and return loss. Maintain detailed documentation including cable routes, termination points, and test results.

## Documentation Requirements

Comprehensive documentation proves essential for network maintenance and troubleshooting. Document cable routes, patch panel connections, and device locations with floor plans showing cable pathways and equipment locations.

Quality structured cabling implementations provide decades of reliable service when installed following industry standards and manufacturer specifications.
    `,
  },
  {
    slug: 'cybersecurity-basics-kenyan-businesses',
    title: 'Cybersecurity Fundamentals for Kenyan Businesses',
    excerpt:
      'Essential cybersecurity measures every organization should implement to protect against common threats.',
    date: '2026-01-05',
    author: 'Uxue Cybersecurity Team',
    category: 'Cybersecurity',
    image: 'https://via.placeholder.com/800x500',
    content: `
Cybersecurity threats targeting Kenyan organizations continue increasing in sophistication and frequency. Businesses of all sizes must implement fundamental security measures protecting systems, data, and operations from unauthorized access and malicious activity.

## Essential Security Controls

Implement next-generation firewalls providing deep packet inspection, intrusion prevention, and application-level filtering. Configure firewalls to deny all traffic by default, permitting only necessary services through explicit rules.

Deploy endpoint protection on all workstations and servers with real-time scanning, behavioral analysis, and automatic updates. Centralized management ensures consistent security policies across all devices.

## Access Management

Enforce strong authentication requirements including complex passwords, multi-factor authentication for sensitive systems, and regular password changes. Implement role-based access control limiting user permissions to required functions only.

Regularly review and audit user accounts, disabling unnecessary accounts and revoking access for departed employees immediately. Monitor authentication logs for suspicious activity indicating potential compromise.

## Data Protection

Encrypt sensitive data both in transit and at rest using industry-standard encryption protocols. Implement secure backup procedures with regular testing of restoration capabilities. Maintain offline backups protecting against ransomware attacks.

## Security Awareness

Train employees to recognize phishing attempts, social engineering tactics, and suspicious activity. Regular security awareness training reduces the likelihood of successful attacks exploiting human vulnerabilities.

Establish incident response procedures detailing actions to take when security incidents occur. Regular testing of these procedures ensures effective response when incidents happen.

Cybersecurity requires ongoing attention and investment. Organizations implementing these fundamental controls significantly reduce their exposure to common threats while establishing foundations for more advanced security measures.
    `,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
