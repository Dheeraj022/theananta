import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import { Hotel } from '@/types';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="flex-shrink-0 w-[175px] sm:w-[200px] lg:w-auto bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
      {/* Image */}
      <div className="relative h-[120px] sm:h-[130px] overflow-hidden">
        <Image
          src={hotel.image}
          alt={`${hotel.name} in Lonavala`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 175px, (max-width: 1024px) 200px, 25vw"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-2.5 sm:p-3">
        <h3 className="text-[#17211D] font-bold text-xs sm:text-[13px] leading-tight mb-1 line-clamp-2">{hotel.name}</h3>

        <div className="flex items-center gap-1 mb-1.5">
          <MapPin size={10} strokeWidth={2} className="text-[#66716C] shrink-0" />
          <span className="text-[#66716C] text-[10px]">{hotel.location}</span>
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5 bg-[#075B3A] text-white rounded px-1.5 py-0.5">
            <Star size={9} fill="white" strokeWidth={0} />
            <span className="text-[10px] font-bold">{hotel.rating}</span>
          </div>
          <span className="text-[#66716C] text-[10px]">({hotel.reviews})</span>
        </div>

        <p className="text-[#075B3A] font-bold text-xs mb-2.5">{hotel.priceLabel}</p>

        <Link
          href={`/hotels/${hotel.slug}`}
          id={`hotel-card-${hotel.id}`}
          className="block w-full text-center py-2 border border-[#075B3A] text-[#075B3A] text-[10px] sm:text-xs font-semibold rounded-xl hover:bg-[#075B3A] hover:text-white transition-colors duration-150"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}
