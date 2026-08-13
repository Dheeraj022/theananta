import type { Metadata } from 'next';
import { ShieldCheck, Eye, Database, Cookie, Share2, Lock, UserCheck, Phone, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lonavala Gateway',
  description:
    'Read the Privacy Policy of Lonavala Gateway. We are committed to protecting your personal information when you use our travel booking assistance services.',
};

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    items: [
      'Name, phone number, and email address when you submit an enquiry or contact us.',
      'Travel preferences such as check-in/check-out dates, number of guests, and budget.',
      'Device and browser information collected automatically when you visit our website (e.g. IP address, browser type).',
      'Any messages or notes you provide through our enquiry forms or WhatsApp.',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    items: [
      'To respond to your booking enquiries and provide travel assistance.',
      'To confirm availability and pricing with hotels, resorts, and tour providers on your behalf.',
      'To send you updates related to your travel booking (via phone, WhatsApp, or email).',
      'To improve our website and services based on usage patterns.',
      'We do NOT sell, rent, or share your personal data with third parties for marketing purposes.',
    ],
  },
  {
    icon: Share2,
    title: 'Sharing of Information',
    items: [
      'Your information may be shared with hotels, resorts, villas, or tour providers solely to facilitate your booking.',
      'We may share data if required by law, court order, or government authority.',
      'We do not share your data with advertisers or unrelated third parties.',
    ],
  },
  {
    icon: Cookie,
    title: 'Cookies & Tracking',
    items: [
      'Our website may use basic cookies to improve your browsing experience (e.g. remembering your session).',
      'We do not use cookies for advertising targeting.',
      'You can disable cookies in your browser settings, though this may affect website functionality.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    items: [
      'We take reasonable measures to protect your personal data from unauthorized access or disclosure.',
      'All communications via WhatsApp and phone are end-to-end or operator-secured.',
      'However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
    ],
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    items: [
      'You may request access to the personal data we hold about you.',
      'You may request correction or deletion of your personal data at any time.',
      'You may opt out of any future communications by contacting us directly.',
      'To exercise these rights, please reach out via phone or WhatsApp.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="bg-[#075B3A] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <ShieldCheck size={22} strokeWidth={1.8} />
            </div>
            <span className="text-green-200 text-xs font-semibold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-green-100 text-sm sm:text-base max-w-2xl">
            {BRAND_NAME} ({BRAND_OPERATOR}) is committed to protecting your privacy and personal information.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: 27AACPS1497B1ZQ</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[900px] px-3 sm:px-5 lg:px-6 py-8 sm:py-12">

        {/* Intro */}
        <div className="bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl p-4 sm:p-5 mb-8">
          <p className="text-[#17211D] text-sm leading-relaxed">
            This Privacy Policy describes how <strong>{BRAND_NAME}</strong> collects, uses, and protects your personal
            information when you visit our website or use our booking assistance services. By using our website, you
            agree to the practices described in this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="bg-white border border-[#DCE4DF] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={17} strokeWidth={1.8} className="text-[#075B3A]" />
                  </div>
                  <h2 className="text-[#17211D] font-bold text-sm sm:text-base self-center">
                    {i + 1}. {sec.title}
                  </h2>
                </div>
                <ul className="space-y-2 pl-1">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#075B3A] shrink-0" />
                      <p className="text-[#66716C] text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Retention */}
        <div className="mt-6 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">7. Data Retention</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, including for the purposes of satisfying any legal or reporting requirements. Enquiry data is typically retained for up to 12 months.
          </p>
        </div>

        {/* Children */}
        <div className="mt-5 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">8. Children&apos;s Privacy</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            Our services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with their information, please contact us immediately.
          </p>
        </div>

        {/* Policy Changes */}
        <div className="mt-5 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">9. Changes to This Policy</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-8 border border-[#075B3A]/20 bg-[#EAF5EF] rounded-2xl p-5 sm:p-6 text-center">
          <h2 className="text-[#17211D] font-bold text-base mb-1">Contact Us About Privacy</h2>
          <p className="text-[#66716C] text-sm mb-4">
            If you have questions or concerns about this Privacy Policy, please reach out to us.
          </p>
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
