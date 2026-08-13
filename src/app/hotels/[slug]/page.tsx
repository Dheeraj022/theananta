import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHotels } from '@/lib/db';
import HotelDetailLayout from '@/components/HotelDetailLayout';
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
      <HotelDetailLayout hotel={hotel} />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
