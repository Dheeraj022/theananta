import Image from 'next/image';
import Link from 'next/link';
import { Clock3 } from 'lucide-react';
import { Tour } from '@/types';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="flex-shrink-0 w-[175px] sm:w-[200px] lg:w-auto bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group">
      {/* Image */}
      <Link href={`/tours/${tour.slug}`} tabIndex={-1} aria-hidden="true">
        <div className="relative h-[120px] sm:h-[130px] overflow-hidden">
          <Image
            src={tour.image}
            alt={`${tour.name} in Rajasthan`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 175px, (max-width: 1024px) 200px, 25vw"
            loading="lazy"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white rounded-lg px-2 py-0.5">
            <Clock3 size={10} strokeWidth={2} />
            <span className="text-[10px] font-medium">{tour.duration}</span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-2.5 sm:p-3">
        <Link href={`/tours/${tour.slug}`} className="hover:text-[#075B3A] transition-colors">
          <h3 className="text-[#17211D] font-bold text-xs sm:text-[13px] leading-tight mb-1 line-clamp-2">{tour.name}</h3>
        </Link>

        <p className="text-[#66716C] text-[10px] line-clamp-1 mb-2.5 leading-snug">
          {tour.description}
        </p>



        <Link
          href={`/tours/${tour.slug}`}
          id={`tour-card-${tour.id}`}
          className="block w-full text-center py-2 border border-[#075B3A] text-[#075B3A] text-[10px] sm:text-xs font-semibold rounded-xl hover:bg-[#075B3A] hover:text-white transition-colors duration-150"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}
