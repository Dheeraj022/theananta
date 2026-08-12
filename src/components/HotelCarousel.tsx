import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { hotels } from '@/data/hotels';
import HotelCard from './HotelCard';

export default function HotelCarousel() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-[#17211D] font-bold text-sm sm:text-base uppercase tracking-wide">
          Popular Hotels &amp; Resorts in Lonavala
        </h2>
        <Link
          href="/hotels"
          className="flex items-center gap-0.5 text-[#075B3A] text-xs font-semibold hover:underline shrink-0"
        >
          View All <ChevronRight size={14} strokeWidth={2} />
        </Link>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x-mandatory pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="snap-start">
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </section>
  );
}
