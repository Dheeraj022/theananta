import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import { getHotels } from '@/lib/db';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hotels & Resorts in Lonavala | Valley City Stay Hub',
  description: 'Browse popular hotels and resorts in Lonavala. Get booking assistance from Valley City Stay Hub – your trusted local travel agency.',
};

export default async function HotelsPage() {
  const hotels = await getHotels();
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">Hotels &amp; Resorts in Lonavala</h1>
          <p className="text-[#66716C] text-sm">Curated selection of the best stays — book with local assistance</p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-[140px] sm:h-[160px]">
                <Image
                  src={hotel.image}
                  alt={`${hotel.name} resort in Lonavala`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-3">
                <h2 className="font-bold text-sm text-[#17211D] leading-tight mb-1 line-clamp-2">{hotel.name}</h2>
                <div className="flex items-center gap-1 mb-1.5">
                  <MapPin size={10} strokeWidth={2} className="text-[#66716C]" />
                  <span className="text-[#66716C] text-[10px]">{hotel.location}</span>
                </div>
                <p className="text-[#075B3A] font-bold text-xs mb-2.5 mt-2">{hotel.priceLabel}</p>
                <Link
                  href={`/hotels/${hotel.slug}`}
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
