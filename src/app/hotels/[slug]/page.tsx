import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHotels } from '@/lib/db';
import HotelDetailLayout from '@/components/HotelDetailLayout';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/constants';

export const revalidate = 0;

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
  const city = hotel.location.includes(',') ? hotel.location.split(',')[1].trim() : hotel.location;
  return {
    title: `${hotel.name} – ${city} Hotel | ${BRAND_NAME}`,
    description: `Information on ${hotel.name} in ${city}: location, facilities and nearby places. ${BRAND_NAME} is an independent travel agency offering enquiry assistance.`,
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
