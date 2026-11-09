import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Hotel } from '@/types';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="flex-shrink-0 w-[175px] sm:w-[200px] lg:w-auto bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
      {/* Image */}
      <Link href={`/hotels/${hotel.slug}`} tabIndex={-1} aria-hidden="true">
        <div className="relative h-[120px] sm:h-[130px] overflow-hidden">
          <Image
            src={hotel.image}
            alt={`${hotel.name} in ${hotel.location}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 175px, (max-width: 1024px) 200px, 25vw"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-2.5 sm:p-3">
        <Link href={`/hotels/${hotel.slug}`} className="hover:text-[#075B3A] transition-colors">
          <h3 className="text-[#17211D] font-bold text-xs sm:text-[13px] leading-tight mb-1 line-clamp-2">{hotel.name}</h3>
        </Link>

        <div className="flex items-center gap-1 mb-1.5">
          <MapPin size={10} strokeWidth={2} className="text-[#66716C] shrink-0" />
          <span className="text-[#66716C] text-[10px]">{hotel.location}</span>
        </div>

        <p className="text-[#66716C] text-[10px] line-clamp-1 mb-2.5 leading-snug">
          {hotel.description}
        </p>





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
