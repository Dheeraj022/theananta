import type { Metadata } from 'next';
import { FileWarning, Building2, Globe, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Disclaimer | Lonavala Gateway',
  description:
    'Read the disclaimer for Lonavala Gateway by Vidhi Tour & Travel. We are an independent travel agency and are not affiliated with any hotel, resort, or service provider.',
};

const sections = [
  {
    icon: Building2,
    title: 'Independent Travel Agency',
    content:
      'Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency based in Lonavala, Maharashtra. We are not affiliated with, endorsed by, or sponsored by any hotel, resort, villa, or other service provider mentioned on this website.',
  },
  {
    icon: Globe,
    title: 'Third-Party Brands & Trademarks',
    content:
      'All hotel names, resort names, brand names, logos, and trademarks mentioned on this website are the exclusive property of their respective owners. Their mention on this platform is purely for informational and booking assistance purposes. Lonavala Gateway makes no claim of ownership or affiliation with any third-party brand.',
  },
  {
    icon: AlertTriangle,
    title: 'Pricing & Availability',
    content:
      'All prices, availability, amenities, and inclusions listed on this website are indicative and subject to change without prior notice. Final pricing and availability will be confirmed directly at the time of booking. Lonavala Gateway is not liable for any discrepancy between displayed prices and actual prices charged by the service provider.',
  },
  {
    icon: Scale,
    title: 'Limitation of Liability',
    content:
      'Lonavala Gateway acts solely as a booking assistance intermediary. We are not responsible for the quality, safety, or performance of any hotel, resort, villa, tour, or service booked through our platform. Any disputes regarding services must be resolved directly with the respective service provider.',
  },
  {
    icon: FileWarning,
    title: 'Content Accuracy',
    content:
      'We make every reasonable effort to ensure the accuracy of information published on this website. However, Lonavala Gateway does not warrant that all content is complete, accurate, or up to date. We reserve the right to update or correct information at any time without prior notice.',
  },
];

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-[#075B3A] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <FileWarning size={22} strokeWidth={1.8} />
            </div>
            <span className="text-green-200 text-xs font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Disclaimer</h1>
          <p className="text-green-100 text-sm sm:text-base max-w-2xl">
            Please read this disclaimer carefully before using the Lonavala Gateway website or services.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: 27AACPS1497B1ZQ</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[900px] px-3 sm:px-5 lg:px-6 py-8 sm:py-12">

        {/* Intro card */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} strokeWidth={1.8} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> {BRAND_NAME} operated by {BRAND_OPERATOR} is an <strong>independent travel agency</strong>. 
            We are not affiliated with any hotel, resort, villa, or other service provider. All bookings are made on behalf of the traveller as an assistance service.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="bg-white border border-[#DCE4DF] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={17} strokeWidth={1.8} className="text-[#075B3A]" />
                  </div>
                  <div>
                    <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">
                      {i + 1}. {sec.title}
                    </h2>
                    <p className="text-[#66716C] text-sm leading-relaxed">{sec.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governing Law */}
        <div className="mt-8 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">6. Governing Law</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            This disclaimer shall be governed by and construed in accordance with the laws of Maharashtra, India. Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of courts in Lonavala / Pune, Maharashtra.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 border border-[#075B3A]/20 bg-[#EAF5EF] rounded-2xl p-5 sm:p-6 text-center">
          <h2 className="text-[#17211D] font-bold text-base mb-1">Questions?</h2>
          <p className="text-[#66716C] text-sm mb-4">If you have any questions about this disclaimer, please contact us.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#075B3A] text-white text-sm font-semibold rounded-xl hover:bg-[#06472F] transition-colors"
            >
              <Phone size={15} strokeWidth={2} />
              {PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#075B3A] text-[#075B3A] text-sm font-semibold rounded-xl hover:bg-white transition-colors"
            >
              <Mail size={15} strokeWidth={2} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
