import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tours } from '@/data/tours';
import ListingDetailLayout from '@/components/ListingDetailLayout';
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
      <ListingDetailLayout
        title={tour.name}
        categoryLabel="Local Tours"
        categoryHref="/tours"
        location="Lonavala, Maharashtra"
        description={tour.description}
        about={tour.about}
        mainImage={tour.image}
        images={tour.images}
        amenities={tour.amenities}
        options={tour.itinerary}
        optionSectionTitle="Tour Itinerary"
        optionSectionSubtitle="Standard schedule for this sightseeing tour. Timings can be customized on request."
        type="tour"
        priceLabel={tour.priceLabel}
      />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
