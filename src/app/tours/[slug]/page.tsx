import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Clock3, Phone, MessageCircle } from 'lucide-react';
import { tours } from '@/data/tours';
import { CALL_URL, WHATSAPP_URL } from '@/lib/constants';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {};
  return {
    title: `${tour.name} – Lonavala Tour | Valley City Stay Hub`,
    description: `Book the ${tour.name} in Lonavala. Duration: ${tour.duration}. ${tour.priceLabel}. Contact Valley City Stay Hub for details.`,
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={tour.image}
              alt={`${tour.name} in Lonavala`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-3">{tour.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Clock3 size={16} strokeWidth={2} className="text-[#66716C]" />
              <span className="text-[#66716C] text-sm">Duration: {tour.duration}</span>
            </div>
            <p className="text-2xl font-black text-[#075B3A] mb-6">{tour.priceLabel}</p>
            <p className="text-[#66716C] text-sm leading-relaxed mb-6">
              Experience the best of Lonavala with this guided tour. Contact us for customization, group bookings, and availability.
            </p>
            <div className="space-y-3">
              <a href={CALL_URL} className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#075B3A] text-white rounded-xl font-semibold hover:bg-[#06472F] transition-colors">
                <Phone size={16} strokeWidth={2} />
                Call to Book
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#075B3A] text-[#075B3A] rounded-xl font-semibold hover:bg-[#EAF5EF] transition-colors">
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
