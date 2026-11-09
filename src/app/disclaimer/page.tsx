import type { Metadata } from 'next';
import { FileWarning, Building2, Globe, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';
import Footer from '@/components/Footer';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL, GST_NO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Disclaimer | ${BRAND_NAME}`,
  description: `Read the disclaimer for ${BRAND_NAME} by ${BRAND_OPERATOR}. We are an independent travel agency and are not affiliated with any hotel, resort, or service provider in Rajasthan.`,
};

const sections = [
  {
    icon: Building2,
    title: 'Independent Travel Agency Status',
    content: `${BRAND_NAME} is operated by ${BRAND_OPERATOR}, an independent travel agency with registered office in Mumbai, Maharashtra. We provide travel enquiry, tour curation, and booking assistance across Rajasthan. We are not owned by, operated by, or the official booking portal for any hotel, resort, desert camp, or heritage property mentioned on this website.`,
  },
  {
    icon: Globe,
    title: 'Third-Party Brands & Trademarks',
    content:
      'All hotel names, resort names, brand names, logos, and trademarks mentioned on this website are the exclusive intellectual property of their respective trademark owners. Their mention on this platform is purely for descriptive, informational, and booking enquiry assistance purposes. We make no claim of ownership or exclusive affiliation with any third-party brand or chain.',
  },
  {
    icon: AlertTriangle,
    title: 'Pricing & Indicative Estimates',
    content:
      'All price ranges, estimated rates, room specifications, and tour details displayed on this website are indicative and subject to change based on seasonal availability and supplier policies. Final pricing and package terms are confirmed via formal quote during direct communication with our travel specialists.',
  },
  {
    icon: Scale,
    title: 'Intermediary Role & Limitation of Liability',
    content:
      `${BRAND_NAME} acts solely as an independent travel planning intermediary. We do not operate hotels, resorts, or transport fleets directly. We are not liable for property-level service disruptions, itinerary changes due to weather or regulatory directives, or personal property loss at destination venues.`,
  },
  {
    icon: FileWarning,
    title: 'Information Accuracy',
    content:
      'We make every reasonable effort to keep the information on this website accurate and updated. However, details regarding property facilities, seasonal amenities, and sightseeing schedules are subject to supplier updates without prior notification.',
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
            Please read this disclaimer carefully regarding our independent agency status and travel services in Rajasthan.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: {GST_NO}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[900px] px-3 sm:px-5 lg:px-6 py-8 sm:py-12">
        {/* Intro card */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8 flex gap-3">
          <AlertTriangle size={20} strokeWidth={1.8} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Important:</strong> {BRAND_NAME} operated by {BRAND_OPERATOR} is an <strong>independent travel agency</strong>. 
            We are not affiliated with, endorsed by, or the official site of any hotel, resort, villa, or heritage property. We facilitate travel planning and enquiry assistance for visitors to Rajasthan.
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
            This disclaimer shall be governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising in connection with our travel agency operations are subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 border border-[#075B3A]/20 bg-[#EAF5EF] rounded-2xl p-5 sm:p-6 text-center">
          <h2 className="text-[#17211D] font-bold text-base mb-1">Questions?</h2>
          <p className="text-[#66716C] text-sm mb-4">If you have any questions about this disclaimer or our agency operations, please contact us.</p>
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
