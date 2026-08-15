import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVillas } from '@/lib/db';
import VillaDetailLayout from '@/components/VillaDetailLayout';
import Footer from '@/components/Footer';

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
  return {
    title: `${villa.name} – Lonavala Villa | Lonavala Gateway`,
    description: `Book the ${villa.name} in Lonavala. Features ${villa.bedrooms} bedrooms, private pool and more. Contact Lonavala Gateway.`,
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
