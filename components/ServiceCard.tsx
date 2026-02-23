import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  href,
  imageSrc,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-white border border-slate-200 hover:border-orange-400 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-900 border-b border-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-8 flex flex-col flex-1 relative">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4">
            {title}
          </h3>
          <div className="w-8 h-1 bg-orange-500"></div>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm mb-8">
          {description}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-colors">
              View Specs
            </span>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transform group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
