import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getVillas } from '@/lib/db';
import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Villas & Havelis in Rajasthan | ${BRAND_NAME}`,
  description: `Find private villas, havelis and homestays in Udaipur and Jaipur for your family or group. Enquiry assistance from ${BRAND_NAME}.`,
};

export const dynamic = 'force-dynamic';

export default async function VillasPage() {
  const villas = await getVillas();
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">Villas in Rajasthan</h1>
          <p className="text-[#66716C] text-sm">Private villa and haveli stays for families and groups</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {villas.map((villa) => (
            <div key={villa.id} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <Link href={`/villas/${villa.slug}`} tabIndex={-1} aria-hidden="true">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={villa.image}
                      alt={`${villa.name} in ${villa.location}`}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/villas/${villa.slug}`} className="hover:text-[#075B3A] transition-colors">
                    <h2 className="font-extrabold text-[#17211D] text-base mb-1">{villa.name}</h2>
                  </Link>
                  <p className="text-[#66716C] text-xs mb-3">{villa.location} · {villa.bedrooms || 'Multiple Bedrooms'}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {villa.amenities.slice(0, 4).map((amenity) => (
                      <span key={amenity.label} className="bg-[#EAF5EF] text-[#075B3A] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {amenity.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link
                  href={`/villas/${villa.slug}`}
                  className="block w-full text-center py-2.5 bg-[#075B3A] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#06472F] transition-colors"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
