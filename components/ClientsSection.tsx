import Image from 'next/image';
import Section from '@/components/Section';

export default function ClientsSection() {
  const clients = [
    { name: 'African Wildlife Foundation', src: '/images/partners/awf.png' },
    { name: 'University of Nairobi', src: '/images/partners/uonbi.png' },
    { name: 'The National Treasury', src: '/images/partners/treasure.png' },
    { name: 'Longhorn Publishers', src: '/images/partners/longhorn.png' },
    { name: 'Ivari Africa', src: '/images/partners/ivari.png' },
    { name: 'KWUST', src: '/images/partners/kwust.png' },
  ];

  return (
    <div className="bg-slate-50 py-24 border-y border-slate-200">
      <Section>
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h3 className="text-slate-900 text-lg font-bold uppercase tracking-widest mb-2">
            Our Clients
          </h3>
          {/* Changed the underline from blue to orange to anchor the section */}
          <div className="h-1 w-12 bg-orange-500 mx-auto"></div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              // Added 'group' and updated hover borders to orange
              className="group relative overflow-hidden bg-white border border-slate-200 p-4 md:p-6 h-24 md:h-32 flex items-center justify-center rounded-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-300 transition-all duration-300 ease-out cursor-pointer"
            >
              <div className="relative h-full w-full z-10">
                <Image
                  src={client.src}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>

              {/* Engineered Hover Accent: A sleek orange bar that slides in on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
