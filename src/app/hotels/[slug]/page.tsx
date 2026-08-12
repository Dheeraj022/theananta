import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import { hotels } from '@/data/hotels';
import { CALL_URL, WHATSAPP_URL } from '@/lib/constants';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);
  if (!hotel) return {};
  return {
    title: `${hotel.name} – Lonavala Hotel | Valley City Stay Hub`,
    description: `Book ${hotel.name} in Lonavala. Rated ${hotel.rating}★ by ${hotel.reviews} guests. ${hotel.priceLabel}. Contact Valley City Stay Hub for booking assistance.`,
  };
}

export default async function HotelDetailPage({ params }: Props) {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);
  if (!hotel) notFound();

  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Image */}
          <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={hotel.image}
              alt={`${hotel.name} in Lonavala`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={14} strokeWidth={2} className="text-[#66716C]" />
              <span className="text-[#66716C] text-sm">{hotel.location}</span>
              <div className="flex items-center gap-1 ml-2 bg-[#075B3A] text-white rounded-lg px-2 py-0.5">
                <Star size={11} fill="white" strokeWidth={0} />
                <span className="text-xs font-bold">{hotel.rating}</span>
              </div>
              <span className="text-[#66716C] text-xs">({hotel.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-black text-[#075B3A] mb-6">{hotel.priceLabel}</p>

            <div className="space-y-2.5 mb-6">
              <h2 className="font-bold text-[#17211D] text-sm">Booking Assistance</h2>
              <p className="text-[#66716C] text-sm leading-relaxed">
                Contact Valley City Stay Hub for availability, pricing, and personalized booking assistance for {hotel.name}.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={CALL_URL}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#075B3A] text-white rounded-xl font-semibold hover:bg-[#06472F] transition-colors"
              >
                <Phone size={16} strokeWidth={2} />
                Call for Availability
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#075B3A] text-[#075B3A] rounded-xl font-semibold hover:bg-[#EAF5EF] transition-colors"
              >
                <MessageCircle size={16} strokeWidth={2} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
