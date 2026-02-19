import Image from 'next/image';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
      <div className="relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-3">
          {project.category}
        </div>
        <h3 className="mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}
