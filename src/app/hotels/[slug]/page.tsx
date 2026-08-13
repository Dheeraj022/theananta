import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHotels } from '@/lib/db';
import ListingDetailLayout from '@/components/ListingDetailLayout';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const list = await getHotels();
  return list.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const list = await getHotels();
  const hotel = list.find((h) => h.slug === slug);
  if (!hotel) return {};
  return {
    title: `${hotel.name} – Lonavala Hotel | Valley City Stay Hub`,
    description: `Book ${hotel.name} in Lonavala. Rated ${hotel.rating}★ by ${hotel.reviews} guests. ${hotel.priceLabel}. Contact Valley City Stay Hub for booking assistance.`,
  };
}

export default async function HotelDetailPage({ params }: Props) {
  const { slug } = await params;
  const list = await getHotels();
  const hotel = list.find((h) => h.slug === slug);
  if (!hotel) notFound();

  return (
    <>
      <ListingDetailLayout
        title={hotel.name}
        categoryLabel="Hotels & Resorts"
        categoryHref="/hotels"
        location={`${hotel.location}, Maharashtra`}
        description={hotel.description}
        about={hotel.about}
        mainImage={hotel.image}
        images={hotel.images}
        amenities={hotel.amenities}
        options={hotel.rooms}
        optionSectionTitle="Accommodation"
        optionSectionSubtitle="Room types available at this property. Room availability is subject to dates and occupancy."
        type="hotel"
        priceLabel={hotel.priceLabel || `From ₹${hotel.price} / Night`}
      />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
