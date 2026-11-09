import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTours } from '@/lib/db';
import TourDetailLayout from '@/components/TourDetailLayout';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/constants';

export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string }>;
}

const getTourCity = (tourName: string) => {
  if (tourName.includes('Jaipur')) return 'Jaipur';
  if (tourName.includes('Udaipur')) return 'Udaipur';
  if (tourName.includes('Jodhpur')) return 'Jodhpur';
  if (tourName.includes('Jaisalmer')) return 'Jaisalmer';
  if (tourName.includes('Pushkar')) return 'Pushkar';
  if (tourName.includes('Sariska')) return 'Ajabgarh / Alwar';
  if (tourName.includes('Bishnoi')) return 'Jodhpur';
  return 'Rajasthan';
};

export async function generateStaticParams() {
  const list = await getTours();
  return list.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const list = await getTours();
  const tour = list.find((t) => t.slug === slug);
  if (!tour) return {};
  const city = getTourCity(tour.name);
  return {
    title: `${tour.name} – ${city} Tour | ${BRAND_NAME}`,
    description: `Information on the ${tour.name} in ${city}. Duration: ${tour.duration}. Contact ${BRAND_NAME} for details.`,
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
