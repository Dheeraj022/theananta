import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVillas } from '@/lib/db';
import VillaDetailLayout from '@/components/VillaDetailLayout';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/constants';

export const revalidate = 0;

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
  const city = villa.location.includes('Udaipur') ? 'Udaipur' : villa.location.includes('Jaipur') ? 'Jaipur' : 'Rajasthan';
  return {
    title: `${villa.name} – ${city} Villa | ${BRAND_NAME}`,
    description: `Information on ${villa.name} in ${city}. Contact ${BRAND_NAME} for enquiry assistance.`,
  };
}

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;
  const list = await getVillas();
  const villa = list.find((v) => v.slug === slug);
  if (!villa) notFound();

  return (
    <>
      <VillaDetailLayout villa={villa} />
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
