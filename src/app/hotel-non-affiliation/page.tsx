import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hotel Non-Affiliation Disclaimer | Valley City Stay Hub',
  description: 'Learn about our independent travel agency operations. Read our Hotel Non-Affiliation notice for Lonavala properties.',
};

export default function HotelNonAffiliationPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-black text-[#17211D] mb-2 uppercase tracking-wide">
          Hotel Non-Affiliation Disclaimer
        </h1>
        <p className="text-xs text-[#66716C] mb-2">Last Updated: August 2026</p>
        <p className="text-xs font-bold text-[#17211D] mb-8">GST NO: 27AACPS1497B1ZQ</p>

        <div className="prose prose-sm max-w-none text-[#17211D] space-y-6 leading-relaxed text-xs sm:text-sm">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              1. Independent Operations Notice
            </h2>
            <p>
              Valley City Stay Hub (operated by Vidhi Tour &amp; Travel) is an independent travel planning, sightseeing booking, and reservation assistance agency. We operate as a third-party intermediary agent facilitating travel packages and bookings.
            </p>
          </section>

          <section className="space-y-2 font-semibold bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
            <blockquote>
              Please note: We are NOT the official website, official representatives, nor directly affiliated with any hotels, resorts, or villa properties listed on this platform, including but not limited to Aamby Valley City, Della Resorts, Rhythm Lonavala, or Fariyas Resort.
            </blockquote>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              2. Trademark &amp; Intellectual Property
            </h2>
            <p>
              All property names, trademarks, logos, brand names, and photos of hotels, resorts, or villas are the exclusive property of their respective trademark owners. They are used on this platform strictly for descriptive, identification, and information purposes to help travellers locate appropriate options.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              3. Rates &amp; Service Charge Disclosures
            </h2>
            <p>
              Rates shown are indicative seasonal rates. Because we operate independently, the pricing provided in our formal quotes may include service facilitation fees, local tour packages, driver allowances, or handling charges as part of a combined package deal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              4. Contact and Clarifications
            </h2>
            <p>
              If you have any questions regarding our independent agency operations or wish to speak directly to our booking representatives to clarify booking packages, please feel free to reach out to us through our Contact page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
