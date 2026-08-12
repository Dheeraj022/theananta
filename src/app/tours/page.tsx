import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock3, ChevronRight } from 'lucide-react';
import { tours } from '@/data/tours';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Local Tours in Lonavala | Valley City Stay Hub',
  description: 'Explore Lonavala with curated local tours. Tiger Point, Sightseeing, Waterfall and Caves tours starting from ₹1,499. Book with Valley City Stay Hub.',
};

export default function ToursPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">Local Tours in Lonavala</h1>
          <p className="text-[#66716C] text-sm">Explore the best of Lonavala with our guided local tours</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-[140px] sm:h-[180px]">
                <Image
                  src={tour.image}
                  alt={`${tour.name} in Lonavala`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white rounded-lg px-2 py-0.5">
                  <Clock3 size={10} strokeWidth={2} />
                  <span className="text-[10px]">{tour.duration}</span>
                </div>
              </div>
              <div className="p-3">
                <h2 className="font-bold text-sm text-[#17211D] mb-2 line-clamp-2">{tour.name}</h2>
                <p className="text-[#075B3A] font-bold text-xs mb-2.5">{tour.priceLabel}</p>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="block w-full text-center py-2 bg-[#075B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#06472F] transition-colors"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
