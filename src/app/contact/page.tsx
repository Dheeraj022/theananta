import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Mountain } from 'lucide-react';
import Link from 'next/link';
import { BRAND_NAME, BRAND_OPERATOR, BRAND_TAGLINE, CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | Valley City Stay Hub – Lonavala Travel Agency',
  description: 'Contact Valley City Stay Hub for hotel, villa, and tour booking assistance in Lonavala. Call or WhatsApp us anytime.',
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[700px] px-3 sm:px-5 py-8 sm:py-12">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#075B3A] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mountain size={30} strokeWidth={1.8} className="text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">{BRAND_NAME}</h1>
          <p className="text-[#075B3A] font-semibold text-sm">{BRAND_OPERATOR}</p>
          <p className="text-[#66716C] text-sm mt-1">{BRAND_TAGLINE}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <a
            href={CALL_URL}
            id="contact-call-button"
            className="flex items-center gap-4 p-4 bg-[#075B3A] text-white rounded-2xl hover:bg-[#06472F] transition-colors"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Phone size={22} strokeWidth={2} />
            </div>
            <div>
              <div className="font-bold text-base">{PHONE_NUMBER}</div>
              <div className="text-green-200 text-xs mt-0.5">Call for Best Deals</div>
            </div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-button"
            className="flex items-center gap-4 p-4 bg-white border border-[#075B3A] text-[#075B3A] rounded-2xl hover:bg-[#EAF5EF] transition-colors"
          >
            <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle size={22} strokeWidth={2} />
            </div>
            <div>
              <div className="font-bold text-base">Chat on WhatsApp</div>
              <div className="text-[#66716C] text-xs mt-0.5">Get instant assistance</div>
            </div>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-[#66716C] text-sm mb-8">
          <MapPin size={15} strokeWidth={1.8} />
          Lonavala, Maharashtra, India
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#66716C] text-sm mb-4">Have detailed requirements?</p>
          <Link
            href="/enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#075B3A] text-white font-semibold rounded-xl hover:bg-[#06472F] transition-colors"
          >
            Send an Enquiry
          </Link>
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
