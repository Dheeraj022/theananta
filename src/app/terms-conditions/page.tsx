import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Lonavala Gateway',
  description: 'Read the terms and conditions for bookings, travel services and packages with Lonavala Gateway (Vidhi Tour & Travel) in Lonavala.',
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[800px] px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-black text-[#17211D] mb-2 uppercase tracking-wide">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-[#66716C] mb-2">Last Updated: August 2026</p>
        <p className="text-xs font-bold text-[#17211D] mb-8">GST NO: 27AACPS1497B1ZQ</p>

        <div className="prose prose-sm max-w-none text-[#17211D] space-y-6 leading-relaxed text-xs sm:text-sm">
          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              1. Scope of Agreement
            </h2>
            <p>
              Welcome to Lonavala Gateway (operated by Vidhi Tour &amp; Travel). By utilizing our platform or getting booking assistance for hotels, villas, and local tours in Lonavala, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              2. Bookings &amp; Enquiries
            </h2>
            <p>
              Submitting an enquiry form through this website does not constitute a confirmed booking. We act as a booking facilitation agency. After receiving your enquiry, our travel representatives will check availability with the properties or tour operators and contact you with a formal quote to initiate the payment and confirmation process.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              3. Payments &amp; Charges
            </h2>
            <p>
              All rates, prices, and labels displayed on this website are estimates based on standard season rates and are subject to change. Confirmed pricing will be provided at the time of booking confirmation. All bookings must be paid in full or according to the advance payment policy specified in your invoice before check-in or tour commencement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              4. Cancellations &amp; Modifications
            </h2>
            <p>
              Cancellations, modifications, or cancellations are governed strictly by our Cancellation Policy and Refund Policy, in addition to the rules set by the individual hotels, resorts, or villa caretakers. Please refer to our dedicated policy pages for full details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              5. Limitation of Liability
            </h2>
            <p>
              While we make every effort to verify property details, amenities, and timings, we are not liable for discrepancies, service disruptions, or quality issues at the final properties or during sightseeing cab rides. Guests are advised to inspect the property guidelines and act accordingly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base sm:text-lg font-bold text-[#075B3A] uppercase tracking-wide">
              6. Governing Law
            </h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with our travel agency operations are subject to the exclusive jurisdiction of the competent courts in Maharashtra.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
