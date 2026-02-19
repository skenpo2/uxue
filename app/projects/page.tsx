import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Enterprise security deployments, network infrastructure projects, and technology implementations delivered across Kenya and East Africa.',
};

export default function ProjectsPage() {
  const projects = [
    {
      id: '1',
      title: 'Corporate Office Security Deployment',
      category: 'Physical Security',
      description:
        'Complete security infrastructure for a multi-floor corporate headquarters including 120 IP cameras, biometric access control, perimeter protection, and centralized monitoring.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: '2',
      title: 'Multi-Branch Enterprise Networking',
      category: 'Network Infrastructure',
      description:
        'Nationwide network deployment connecting 15 branch offices with MPLS backbone, redundant internet connectivity, and centralized management.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: '3',
      title: 'Data Center Infrastructure Setup',
      category: 'ICT Infrastructure',
      description:
        'Complete data center build including structured cabling, server racks, cooling systems, UPS infrastructure, and network equipment.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: '4',
      title: 'School Campus Surveillance System',
      category: 'Surveillance',
      description:
        'Campus-wide CCTV deployment with 200+ cameras covering classrooms, grounds, and entry points with remote monitoring capabilities.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: '5',
      title: 'Cloud Migration and Cybersecurity',
      category: 'Cybersecurity',
      description:
        'Enterprise cloud migration with security hardening, next-generation firewall deployment, and implementation of security monitoring systems.',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      id: '6',
      title: 'Industrial Facility Security Integration',
      category: 'Security Automation',
      description:
        'Integrated security platform combining CCTV, access control, intrusion detection, and automated barriers for manufacturing facility.',
      image: 'https://via.placeholder.com/600x400',
    },
  ];

  return (
    <>
      <PageHeader
        title="Projects"
        description="Delivering security and technology solutions across enterprise environments"
      />

      <Section className="py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Project Approach</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Every project begins with understanding specific requirements and
            operational context. Our methodology ensures professional delivery,
            clear communication, and systems that meet specified performance
            standards.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div>
              <div className="text-4xl font-bold text-primary-800 mb-2">01</div>
              <h4 className="mb-2 text-gray-900">Discovery</h4>
              <p className="text-sm text-gray-600">
                Requirements analysis and site assessment
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-800 mb-2">02</div>
              <h4 className="mb-2 text-gray-900">Design</h4>
              <p className="text-sm text-gray-600">
                Technical architecture and solution design
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-800 mb-2">03</div>
              <h4 className="mb-2 text-gray-900">Deploy</h4>
              <p className="text-sm text-gray-600">
                Professional installation and configuration
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-800 mb-2">04</div>
              <h4 className="mb-2 text-gray-900">Support</h4>
              <p className="text-sm text-gray-600">
                Training, documentation, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
