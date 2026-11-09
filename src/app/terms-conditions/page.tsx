import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { BRAND_NAME, LEGAL_ENTITY, GST_NO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${BRAND_NAME}`,
  description: `Read the terms and conditions for travel enquiry assistance, tour packages, and services with ${BRAND_NAME} (${LEGAL_ENTITY}) in Rajasthan.`,
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-black text-[#17211D] mb-2 uppercase tracking-wide">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-[#66716C] mb-2">Last Updated: August 2026</p>
        <p className="text-xs font-bold text-[#17211D] mb-8">GST NO: {GST_NO}</p>

        <div className="prose prose-sm max-w-none text-[#17211D] space-y-6 leading-relaxed text-xs sm:text-sm">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              1. Scope of Agreement
            </h2>
            <p>
              Welcome to {BRAND_NAME} (operated by {LEGAL_ENTITY}). By utilizing our platform or requesting enquiry and planning assistance for hotels, villas, desert camping, and local tours across Rajasthan, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              2. Enquiries &amp; Non-Affiliation
            </h2>
            <p>
              Submitting an enquiry form through this website does not constitute a confirmed booking. We operate as an independent travel agency providing itinerary planning and enquiry facilitation. We are not directly affiliated with, owned by, or official representatives of any hotel, resort, or heritage property listed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              3. Rates &amp; Quotes
            </h2>
            <p>
              All rates, estimated price ranges, and package descriptions displayed on this website are indicative and subject to change based on seasonality, property policies, and availability. Confirmed pricing will be provided via formal quotations during correspondence with our travel specialists.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              4. Cancellations &amp; Modifications
            </h2>
            <p>
              Cancellations and modifications are governed strictly by our Cancellation Policy and Refund Policy, in addition to the specific rules of individual hotels, resorts, or tour transport operators. Please refer to our dedicated policy pages for comprehensive details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              5. Limitation of Liability
            </h2>
            <p>
              While we make every reasonable effort to verify property details and transport schedules, {BRAND_NAME} is not liable for operational disruptions, unforeseen delays, weather conditions, or service quality variations at destination properties or during sightseeing tours.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              6. Governing Law
            </h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with our travel agency operations are subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
