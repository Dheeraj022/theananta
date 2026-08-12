import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVillas } from '@/lib/db';
import ListingDetailLayout from '@/components/ListingDetailLayout';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const list = await getVillas();
  return list.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const list = await getVillas();
  const villa = list.find((v) => v.slug === slug);
  if (!villa) return {};
  return {
    title: `${villa.name} – Lonavala Villa | Valley City Stay Hub`,
    description: `Book the ${villa.name} in Lonavala. Features ${villa.bedrooms} bedrooms, private pool and more. ${villa.price}. Contact Valley City Stay Hub.`,
  };
}

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;
  const list = await getVillas();
  const villa = list.find((v) => v.slug === slug);
  if (!villa) notFound();

  return (
    <>
      <ListingDetailLayout
        title={villa.name}
        categoryLabel="Villas"
        categoryHref="/villas"
        location={`${villa.location}, Maharashtra`}
        description={villa.description}
        about={villa.about}
        mainImage={villa.image}
        images={villa.images}
        amenities={villa.amenities}
        options={villa.rooms}
        optionSectionTitle="Accommodation & Booking Options"
        optionSectionSubtitle="Booking options and caretaker services available for this private villa."
        type="villa"
        priceLabel={villa.price}
      />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
