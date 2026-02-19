import Link from 'next/link';
import Image from 'next/image';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <div className="relative bg-slate-950 flex items-center min-h-[80vh] py-36 md:py-32 overflow-hidden border-b border-slate-900">
      {/* LAYER 1: The Hero Image */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop"
            alt="Enterprise Infrastructure Background"
            fill
            className="object-cover object-center opacity-70" // Slightly reduced opacity so particles pop
            priority
          />

          {/* Gradient Mask: Darken the left side so text + particles are clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 via-50% to-slate-950/30"></div>

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* LAYER 2: THE PARTICLE NETWORK 
          This sits on top of the image (z-0) but below the text (z-20).
          It is set to z-10 inside the component itself.
      */}
      <ParticleNetwork />

      {/* LAYER 3: Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 w-full">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
            INTELLIGENT SYSTEMS. <br />
            <span className="text-slate-200">SECURE INFRASTRUCTURE.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light border-l-4 border-blue-600 pl-6 drop-shadow-md bg-slate-950/40 backdrop-blur-sm py-4 rounded-r-lg">
            Uxue delivers world-class technology security. We empower businesses
            through advanced ICT infrastructure, intelligent automation, and
            seamless integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-700 text-white font-bold hover:bg-blue-600 transition-colors uppercase tracking-widest text-sm text-center shadow-lg shadow-blue-900/50 relative z-30"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-slate-400 text-white font-bold hover:bg-white hover:text-slate-950 transition-colors uppercase tracking-widest text-sm text-center backdrop-blur-md relative z-30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
