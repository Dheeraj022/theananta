import Image from 'next/image';
import { BadgeCheck, ShieldCheck, Tag, Clock } from 'lucide-react';
import HelpCard from './HelpCard';

const heroFeatures = [
  { icon: Tag, label: 'Best Price', sub: 'Guarantee' },
  { icon: ShieldCheck, label: 'Verified', sub: 'Properties' },
  { icon: BadgeCheck, label: 'No Hidden', sub: 'Charges' },
  { icon: Clock, label: '24x7 Travel', sub: 'Support' },
];

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
        <div className="flex items-start justify-between py-8 sm:py-10 lg:py-14 gap-4">

          {/* Left: Hero Copy */}
          <div className="flex-1 min-w-0">
            <p className="text-green-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5">
              Explore the Beauty of
            </p>
            <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight mb-2">
              LONAVALA
            </h1>
            <p className="text-green-100 text-sm sm:text-base font-medium mb-6 leading-snug">
              Hotels, Resorts, Villas &amp; Local Tours
              <br />
              <span className="text-white/80">At Best Prices</span>
            </p>

            {/* Hero Features Row */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {heroFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1.5"
                  >
                    <Icon size={12} strokeWidth={2} className="text-green-300 shrink-0" />
                    <span className="text-white text-[10px] sm:text-[11px] font-medium leading-tight">
                      {feat.label}<br />{feat.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Help Card (desktop) */}
          <div className="hidden lg:block shrink-0 mt-2">
            <HelpCard />
          </div>
        </div>

        {/* Help Card for mobile/tablet — below hero text */}
        <div className="lg:hidden flex justify-center pb-6">
          <HelpCard />
        </div>
      </div>
    </section>
  );
}
