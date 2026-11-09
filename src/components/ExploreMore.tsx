import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const EXPLORE_ITEMS = [
  { title: 'Hotels &\nResorts', image: '/images/hotels/hotel-1.jpg', href: '/hotels' },
  { title: 'Villas &\nHavelis', image: '/images/hotels/hotel-2.jpg', href: '/villas' },
  { title: 'Local Tours &\nSightseeing', image: '/images/tours/sightseeing.jpg', href: '/tours' },
  { title: 'Desert Camping &\nOutdoor Experiences', image: '/images/hero/rajasthan-hero.jpg', href: '/camping' },
];

export default function ExploreMore() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-[#17211D] font-bold text-sm sm:text-base uppercase tracking-wide">
          EXPLORE MORE
        </h2>
      </div>

      {/* Grid on mobile (2 columns) and desktop (4 columns) */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {EXPLORE_ITEMS.map((item, idx) => (
          <Link key={idx} href={item.href} className="block group">
            <div className="border border-[#DCE4DF] rounded-xl overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="relative h-[90px] sm:h-[110px] w-full">
                <Image 
                  src={item.image} 
                  alt={item.title.replace('\n', ' ')} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  sizes="160px" 
                />
              </div>
              <div className="p-3 sm:p-4 flex-grow flex items-center justify-center text-center">
                <h3 className="text-[#17211D] font-bold text-[11px] sm:text-xs leading-[1.3] whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
