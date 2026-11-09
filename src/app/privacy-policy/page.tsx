import type { Metadata } from 'next';
import { ShieldCheck, Eye, Database, Cookie, Share2, Lock, UserCheck, Phone, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL, GST_NO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: `Read the Privacy Policy of ${BRAND_NAME}. We are committed to protecting your personal information when you use our travel enquiry and planning assistance services in Rajasthan.`,
};

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    items: [
      'Name, phone number, and email address when you submit an enquiry or contact our travel specialists.',
      'Travel preferences such as travel dates, destination in Rajasthan, number of guests, and service category.',
      'Device and browser information collected automatically when you visit our website (e.g. IP address, browser type).',
      'Any messages, notes, or specific requirements you provide through our enquiry forms or WhatsApp.',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    items: [
      'To respond to your travel enquiries and provide customized itinerary planning across Rajasthan.',
      'To verify rate estimates and availability with hotels, resorts, desert camps, and transport operators on your behalf.',
      'To communicate travel recommendations and trip updates (via phone, WhatsApp, or email).',
      'To improve our website content and user experience.',
      'We do NOT sell, rent, or share your personal data with third parties for marketing purposes.',
    ],
  },
  {
    icon: Share2,
    title: 'Sharing of Information',
    items: [
      'Your travel requirements may be shared with destination hotels, resorts, or local tour providers strictly to facilitate quotes and booking coordination.',
      'We may share data if required by law, court order, or governmental authority.',
      'We do not share your contact details with unauthorized third parties or marketing brokers.',
    ],
  },
  {
    icon: Cookie,
    title: 'Cookies & Analytics',
    items: [
      'Our website may use basic cookies and analytics to evaluate traffic patterns and improve usability.',
      'We do not sell advertising cookies to external tracking networks.',
      'You can disable cookies in your browser settings at any time.',
    ],
  },
  {
    icon: Lock,
    title: 'Data Security',
    items: [
      'We implement industry-standard organizational and technical measures to protect your personal details against unauthorized access.',
      'Direct communications through WhatsApp and telecommunications are secured through standard protocols.',
      'While we prioritize security, no digital transmission is entirely immune to risk; we continuously monitor our systems.',
    ],
  },
  {
    icon: UserCheck,
    title: 'Your Privacy Rights',
    items: [
      'You may request access to any personal contact details we hold regarding your enquiry.',
      'You may request the correction or removal of your details from our records at any point.',
      'You may opt out of future follow-up communications by contacting us directly.',
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
            {BRAND_NAME} ({BRAND_OPERATOR}) is committed to protecting your privacy and personal data.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: {GST_NO}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-[900px] px-3 sm:px-5 lg:px-6 py-8 sm:py-12">
        {/* Intro */}
        <div className="bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl p-4 sm:p-5 mb-8">
          <p className="text-[#17211D] text-sm leading-relaxed">
            This Privacy Policy describes how <strong>{BRAND_NAME}</strong> (operated by {BRAND_OPERATOR}) collects, uses, and safeguards your personal
            information when you visit our website or submit enquiries for travel planning in Rajasthan.
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
            We retain your travel inquiry information only as long as necessary to process your travel itinerary and fulfill relevant tax, reporting, and legal obligations.
          </p>
        </div>

        {/* Children */}
        <div className="mt-5 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">8. Children&apos;s Privacy</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            Our travel assistance services are directed to adults aged 18 and older. We do not knowingly collect personal information from unaccompanied minors.
          </p>
        </div>

        {/* Policy Changes */}
        <div className="mt-5 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-2">9. Changes to This Policy</h2>
          <p className="text-[#66716C] text-sm leading-relaxed">
            We reserve the right to revise this Privacy Policy periodically. Continued use of our site reflects acceptance of updated guidelines.
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
