import Image from 'next/image';
import Section from '@/components/Section';

export default function BrandsSection() {
  const brands = [
    { name: 'Cisco', src: '/images/brands/cisco.png' },
    { name: 'Hanwha Techwin Wisenet', src: '/images/brands/hanwha.jpg' },
    { name: 'D-Link', src: '/images/brands/dlink.png' },
    { name: 'Suprema', src: '/images/brands/suprema.png' },
    { name: 'Cathexis', src: '/images/brands/cathexis.png' },
    { name: 'Rosslare Security Products', src: '/images/brands/rosslare.jpg' },
    { name: 'Huawei', src: '/images/brands/hua.png' },
    { name: 'Impro', src: '/images/brands/impro.png' },
    { name: 'Ubiquiti', src: '/images/brands/ubiquiti.png' },
    { name: 'Zkteco', src: '/images/brands/zk.png' },
  ];

  return (
    <div className="bg-white py-24">
      <Section>
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            OUR BRAND
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white border border-blue-400 rounded-3xl flex items-center justify-center h-32 md:h-40 p-4 md:p-6 transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={`${brand.name} Logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
