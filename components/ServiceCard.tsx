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
  index,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      // CHANGED: Added 'flex flex-col h-full' to force full height and column layout
      className="group flex flex-col h-full bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-300 relative overflow-hidden"
    >
      {/* 1. IMAGE CONTAINER */}
      {/* Added 'shrink-0' so the image never squishes if text is long */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-900">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors duration-300"></div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      {/* Added 'flex flex-col flex-1' to make this section fill remaining space */}
      <div className="p-8 flex flex-col flex-1 relative">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          <div className="w-12 h-1 bg-slate-200 group-hover:bg-blue-600 transition-all duration-300"></div>
        </div>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm border-l-2 border-slate-100 pl-4 mb-8">
          {description}
        </p>

        {/* 3. CTA (Pinned to Bottom) */}
        {/* Added 'mt-auto' to push this element to the very bottom */}
        <div className="mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-700 transition-colors">
              View Specs
            </span>
            <svg
              className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transform group-hover:translate-x-1 transition-all"
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
