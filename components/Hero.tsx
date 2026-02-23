import Image from 'next/image';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <div className="relative bg-slate-950 flex items-center min-h-[90vh] py-24 overflow-hidden border-b border-slate-900">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/ai-hero.jpg"
            alt="Intelligent Technology Infrastructure"
            fill
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"></div>
        </div>
      </div>

      <ParticleNetwork />

      <div className="container mx-auto px-6 md:px-24 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8 drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_80%)]">
            ENGINEERING INTELLIGENT TECHNOLOGY FOR MODERN BUSINESS.
          </h1>

          <div className="border-l-[3px] border-orange-500 pl-6 py-4 bg-slate-950/80 backdrop-blur-md rounded-r-sm shadow-xl">
            <p className="text-lg text-slate-100 leading-relaxed font-light">
              Advanced systems designed to protect, connect, automate, and power
              your operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
