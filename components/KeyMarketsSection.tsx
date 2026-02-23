import Image from 'next/image';
import Section from '@/components/Section';

export default function KeyMarketsSection() {
  const markets = [
    {
      name: 'Corporate Enterprises',
      src: '/images/m1.png',
    },
    {
      name: 'Financial Institutions',
      src: '/images/m2.png',
    },
    {
      name: 'Government Agencies',
      src: '/images/m3.jpg',
    },
    {
      name: 'Health Facilities',
      src: '/images/m4.jpg',
    },
    {
      name: 'Educational Institutions',
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Industrial Facilities',
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Commercial Real Estate',
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Technology Companies',
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="bg-[#0B1120] py-24 border-t border-slate-900 text-white">
      <Section>
        {/* HEADER */}
        <div className="mb-16 border-b border-slate-800 pb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            KEY MARKETS
          </h2>
          <p className="text-slate-400 text-lg">
            Specialized infrastructure for critical sectors.
          </p>
        </div>

        {/* THE GRID: Flush Image Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-700 bg-slate-900">
          {markets.map((market, index) => (
            <div
              key={index}
              className="relative h-56 md:h-64 border-r border-b border-slate-700 group overflow-hidden bg-slate-800"
            >
              {/* Background Image */}
              <Image
                src={market.src}
                alt={market.name}
                fill
                className="object-cover transition-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-80"></div>

              {/* Text Content Centered at Bottom */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-8 pointer-events-none">
                <h3 className="text-base md:text-lg font-bold text-white tracking-wide text-center px-4 drop-shadow-md">
                  {market.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
