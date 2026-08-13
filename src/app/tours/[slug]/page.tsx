import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTours } from '@/lib/db';
import TourDetailLayout from '@/components/TourDetailLayout';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const list = await getTours();
  return list.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const list = await getTours();
  const tour = list.find((t) => t.slug === slug);
  if (!tour) return {};
  return {
    title: `${tour.name} – Lonavala Tour | Lonavala Gateway`,
    description: `Book the ${tour.name} in Lonavala. Duration: ${tour.duration}. ${tour.priceLabel}. Contact Lonavala Gateway for details.`,
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const list = await getTours();
  const tour = list.find((t) => t.slug === slug);
  if (!tour) notFound();

  return (
    <>
      <TourDetailLayout tour={tour} />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
