import type { Metadata } from 'next';
import Image from 'next/image';
import Section from '@/components/Section';
import CTASection from '@/components/CTASection';
import GallerySection from '@/components/GallerySection';

export const metadata: Metadata = {
  title: 'Projects & Deployments',
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
        'Deployed a unified physical security architecture for a corporate headquarters. The integration included high-definition IP surveillance, biometric access controls, and perimeter defense, all managed through a centralized monitoring system.',
      image: '/images/projectbg.jpg',
    },
    {
      id: '2',
      title: 'Multi-Branch Enterprise Networking',
      category: 'Network Infrastructure',
      description:
        'Engineered a secure wide-area network connecting multiple regional branch offices. The deployment established a reliable backbone with redundant internet connectivity and centralized management to ensure continuous business operations.',
      image: '/images/network-cable.jpg',
    },
    {
      id: '3',
      title: 'Data Center Infrastructure Setup',
      category: 'ICT Infrastructure',
      description:
        'Executed a complete server room build-out. The scope included high-density structured cabling, rack hardware installation, primary and secondary UPS power distribution, and precision environmental cooling systems.',
      image: '/images/infra.jpg',
    },
    {
      id: '4',
      title: 'School Campus Surveillance System',
      category: 'Surveillance',
      description:
        'Installed a comprehensive campus-wide IP video surveillance network. The system provides complete coverage of critical zones, including classrooms, common areas, and entry points, managed via a secure remote monitoring platform.',
      image: '/images/schoolcctv.jpg',
    },
    {
      id: '5',
      title: 'Cloud Migration & Cybersecurity',
      category: 'Cyber Defense',
      description:
        'Facilitated a secure enterprise transition to cloud infrastructure. The project involved strict security hardening, Next-Generation Firewall (NGFW) deployment, and the implementation of continuous endpoint monitoring.',
      image: '/images/cyber-project.jpg',
    },
    {
      id: '6',
      title: 'Industrial Facility Security Integration',
      category: 'Security Automation',
      description:
        'Implemented a heavy-duty physical security matrix for a manufacturing plant. The solution integrated perimeter intrusion detection, automated logistics barriers, and employee access control into a single unified dashboard.',
      image: '/images/project-install.png',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-950 pt-32 pb-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border-l-[3px] border-orange-500 pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-blue-500"></div>
              <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              ENGINEERED <br />
              <span className="text-slate-400">DEPLOYMENTS.</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              A selection of our enterprise security deployments, network
              infrastructure projects, and technology implementations across
              East Africa.
            </p>
          </div>
        </div>
      </div>

      <Section className="py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative overflow-hidden bg-slate-100 mb-6 ${index === 0 ? 'h-[500px]' : 'h-[350px]'}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PRJ.0{index + 1}
                  </span>
                  <div className="h-[1px] w-12 bg-slate-200 group-hover:bg-blue-500 transition-colors duration-300"></div>
                </div>

                <h3
                  className={`font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-700 transition-colors ${index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-slate-600 font-light leading-relaxed ${index === 0 ? 'text-lg' : 'text-base'}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <GallerySection />

      <Section className="py-32 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-4xl mb-20 border-l-[3px] border-blue-500 pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Deployment Methodology
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Every project operates under a strict operational framework. Our
            methodology ensures professional delivery, zero downtime during
            integration, and performance that meets exact specifications.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-slate-800"></div>

          {[
            {
              step: '01',
              title: 'Discovery',
              desc: 'Requirements analysis and comprehensive site assessment.',
            },
            {
              step: '02',
              title: 'Design',
              desc: 'Technical architecture and custom solution blueprints.',
            },
            {
              step: '03',
              title: 'Deploy',
              desc: 'Professional installation and rigorous configuration.',
            },
            {
              step: '04',
              title: 'Support',
              desc: 'Client training, documentation, and continuous maintenance.',
            },
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node */}
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors text-slate-500 font-mono font-bold">
                {item.step}
              </div>

              <h4 className="text-xl font-bold text-slate-100 mb-3 tracking-wide group-hover:text-white transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed font-light border-l border-slate-800 pl-4 group-hover:border-slate-600 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
