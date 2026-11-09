import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { getHotels } from '@/lib/db';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Hotels & Resorts in Rajasthan | ${BRAND_NAME}`,
  description: `Browse popular hotels and resorts in Udaipur, Jaipur, Pushkar, Jodhpur and Jaisalmer. Get enquiry assistance from ${BRAND_NAME}, an independent travel agency.`,
};

export default async function HotelsPage() {
  const hotels = await getHotels();
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">Hotels &amp; Resorts in Rajasthan</h1>
          <p className="text-[#66716C] text-sm">Information on stays across Rajasthan</p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-[200px] sm:h-[240px]">
                <Image
                  src={hotel.image}
                  alt={`${hotel.name} in ${hotel.location}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-3">
                <h2 className="font-bold text-sm text-[#17211D] leading-tight mb-1 line-clamp-2">{hotel.name}</h2>
                <div className="flex items-center gap-1 mb-1.5">
                  <MapPin size={10} strokeWidth={2} className="text-[#66716C]" />
                  <span className="text-[#66716C] text-[10px]">{hotel.location}</span>
                </div>
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
