import Image from 'next/image';
import HelpCard from './HelpCard';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
      {/* Background Image */}
      <Image
        src="/images/hero/lonavala-hero.jpg"
        alt="Lonavala mountains and waterfall"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between py-8 sm:py-10 lg:py-14 gap-4">

          {/* Left: Hero Copy */}
          <div className="flex-1 min-w-0">
            <p className="text-green-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5">
              Explore the Beauty of
            </p>
            <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-2">
              LONAVALA
            </h1>
            <p className="text-green-100 text-sm sm:text-base font-medium leading-snug">
              Hotels, Resorts, Villas &amp; Local Tours
              <br />
              <span className="text-white/80">Information &amp; Enquiry Assistance</span>
            </p>


          </div>

          {/* Right: Help Card (desktop) */}
          <div className="hidden lg:block shrink-0">
            <HelpCard />
          </div>
        </div>

        {/* Help Card for mobile/tablet — below hero text */}
        <div className="lg:hidden flex justify-start pb-12">
          <HelpCard />
        </div>
      </div>
    </section>
  );
}
