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
    // Changed background to light gray (slate-50) with distinct borders
    <div className="bg-slate-50 py-24 border-y border-slate-200">
      <Section>
        {/* Header text darkened for visibility on light background */}
        <div className="text-center mb-12">
          <h3 className="text-slate-900 text-lg font-bold uppercase tracking-widest mb-2">
            Our Clients
          </h3>
          <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
        </div>

        {/* GRID LAYOUT:
           Using a grid instead of flex-wrap creates a more structured, 
           "boardroom" feel suitable for a light background.
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              // THE LOGO CARD Style:
              // 1. bg-white: Stands out from the slate-50 background.
              // 2. border-slate-200: Subtle definition.
              // 3. hover:shadow-lg hover:-translate-y-1: Premium "lift" effect.
              className="bg-white border border-slate-200 p-4 md:p-6 h-24 md:h-32 flex items-center justify-center rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="relative h-full w-full">
                {/* FULL COLOR IMAGES:
                   - No grayscale applied.
                   - mix-blend-multiply: Makes logos look "printed on" the white box.
                */}
                <Image
                  src={client.src}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain p-2 mix-blend-multiply"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
