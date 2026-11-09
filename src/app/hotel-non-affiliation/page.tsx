import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { BRAND_NAME, LEGAL_ENTITY, GST_NO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Hotel Non-Affiliation Disclaimer | ${BRAND_NAME}`,
  description: `Learn about our independent travel agency operations. Read our Hotel Non-Affiliation notice for Rajasthan properties.`,
};

export default function HotelNonAffiliationPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-black text-[#17211D] mb-2 uppercase tracking-wide">
          Hotel Non-Affiliation Disclaimer
        </h1>
        <p className="text-xs text-[#66716C] mb-2">Last Updated: August 2026</p>
        <p className="text-xs font-bold text-[#17211D] mb-8">GST NO: {GST_NO}</p>

        <div className="prose prose-sm max-w-none text-[#17211D] space-y-6 leading-relaxed text-xs sm:text-sm">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              1. Independent Operations Notice
            </h2>
            <p>
              {BRAND_NAME} is an independent travel agency operated by {LEGAL_ENTITY} and is not affiliated with, authorized by, or endorsed by any hotel, resort, chain, or heritage property mentioned on this website.
            </p>
          </section>

          <section className="space-y-2 font-semibold bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900">
            <blockquote>
              Please note: This includes Ananta Hotels &amp; Resorts and every other property named on this website; property names and trademarks belong to their respective owners.
            </blockquote>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              2. Enquiry-Only Service Positioning
            </h2>
            <p>
              We provide travel enquiry and planning assistance only; we do not process direct bookings or take payments through this website. All enquiries submitted through our website, phone numbers, or WhatsApp channels are attended to by travel consultants who assist travellers with customized trip planning, itinerary creation, and coordination with independent suppliers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              3. Trademark &amp; Intellectual Property
            </h2>
            <p>
              All property names, trademarks, logos, brand names, and photos of hotels, resorts, camps, or havelis are the exclusive property of their respective trademark owners. They are used on this platform strictly for descriptive, identification, and information purposes to help travellers locate appropriate options across Rajasthan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              4. Contact and Clarifications
            </h2>
            <p>
              If you have any questions regarding our independent agency operations or wish to speak directly to our travel representatives, please reach out to us through our Contact page or call our helpdesk.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
