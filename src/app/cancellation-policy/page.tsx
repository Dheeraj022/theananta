import type { Metadata } from 'next';
import { XCircle, Clock, AlertTriangle, CalendarX, PhoneCall, BadgeCheck, ShieldCheck } from 'lucide-react';
import Footer from '@/components/Footer';
import { CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cancellation Policy | Lonavala Gateway',
  description:
    'Read the cancellation policy of Lonavala Gateway. Understand our cancellation terms for hotel, villa, and tour bookings in Lonavala.',
};

const policies = [
  {
    icon: CalendarX,
    title: 'Hotels & Resorts — Cancellation Terms',
    color: 'text-blue-400',
    bg: 'bg-blue-950/40 border-blue-800',
    rows: [
      { timing: 'More than 7 days before check-in', charge: 'No cancellation fee', tag: 'free', desc: 'Full refund of any advance payment made.' },
      { timing: '3–7 days before check-in', charge: '25% of booking amount', tag: 'partial', desc: '75% of the advance amount will be refunded.' },
      { timing: '1–2 days before check-in', charge: '50% of booking amount', tag: 'partial', desc: '50% of the advance amount will be refunded.' },
      { timing: 'Same day / No show', charge: '100% of booking amount', tag: 'full', desc: 'No refund will be issued for same-day cancellations or no-shows.' },
    ],
  },
  {
    icon: XCircle,
    title: 'Villas — Cancellation Terms',
    color: 'text-purple-400',
    bg: 'bg-purple-950/40 border-purple-800',
    rows: [
      { timing: 'More than 14 days before check-in', charge: 'No cancellation fee', tag: 'free', desc: 'Full refund of the advance paid.' },
      { timing: '7–14 days before check-in', charge: '30% of booking amount', tag: 'partial', desc: '70% of advance will be refunded.' },
      { timing: '2–6 days before check-in', charge: '60% of booking amount', tag: 'partial', desc: '40% of advance will be refunded.' },
      { timing: '0–1 day before check-in / No show', charge: '100% of booking amount', tag: 'full', desc: 'No refund for late cancellations or no-shows.' },
    ],
  },
  {
    icon: Clock,
    title: 'Local Tours — Cancellation Terms',
    color: 'text-orange-400',
    bg: 'bg-orange-950/40 border-orange-800',
    rows: [
      { timing: 'More than 48 hours before tour', charge: 'No cancellation fee', tag: 'free', desc: 'Full refund of any amount paid in advance.' },
      { timing: '24–48 hours before tour', charge: '25% of booking amount', tag: 'partial', desc: '75% of advance will be refunded.' },
      { timing: 'Less than 24 hours / Same day', charge: '100% of booking amount', tag: 'full', desc: 'No refund for last-minute cancellations.' },
    ],
  },
];

const tagStyle: Record<string, string> = {
  free: 'bg-green-900 text-green-300 border border-green-700',
  partial: 'bg-amber-900 text-amber-300 border border-amber-700',
  full: 'bg-red-900 text-red-300 border border-red-700',
};

export default function CancellationPolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#075B3A] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <XCircle size={22} strokeWidth={1.8} />
            </div>
            <span className="text-green-200 text-xs font-semibold uppercase tracking-widest">Policy</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Cancellation Policy</h1>
          <p className="text-green-100 text-sm sm:text-base max-w-2xl">
            We understand plans change. Please review our cancellation terms for hotels, villas, and local tours before making a booking.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: 27AACPS1497B1ZQ</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6 py-8 sm:py-12">

        {/* Alert */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8">
          <AlertTriangle size={20} strokeWidth={1.8} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>Please note:</strong> All cancellation requests must be made in writing via WhatsApp or email to{' '}
            <a href="mailto:info@lonavalagateway.com" className="underline">info@lonavalagateway.com</a>. Verbal
            cancellation requests will not be accepted. Cancellation timings are calculated from the date &amp; time we
            receive your written request.
          </p>
        </div>

        {/* Policy Tables */}
        <div className="space-y-8">
          {policies.map((policy) => {
            const Icon = policy.icon;
            return (
              <div key={policy.title} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm">
                {/* Card Header */}
                <div className="flex items-center gap-3 px-5 py-4 bg-[#F7F9F7] border-b border-[#DCE4DF]">
                  <div className="w-9 h-9 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={17} strokeWidth={1.8} className="text-[#075B3A]" />
                  </div>
                  <h2 className="text-[#17211D] font-bold text-sm sm:text-base">{policy.title}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#DCE4DF]">
                        <th className="text-left px-5 py-3 text-[#66716C] font-semibold text-xs uppercase tracking-wide">Cancellation Timing</th>
                        <th className="text-left px-5 py-3 text-[#66716C] font-semibold text-xs uppercase tracking-wide">Charge</th>
                        <th className="text-left px-5 py-3 text-[#66716C] font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {policy.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={`border-b border-[#DCE4DF] last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9F7]'}`}
                        >
                          <td className="px-5 py-3.5 text-[#17211D] font-medium text-xs sm:text-sm">{row.timing}</td>
                          <td className="px-5 py-3.5">
                            <span className={`inline-block text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyle[row.tag]}`}>
                              {row.charge}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-[#66716C] text-xs hidden sm:table-cell">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        {/* General Rules */}
        <div className="mt-8 bg-white border border-[#DCE4DF] rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
              <BadgeCheck size={17} strokeWidth={1.8} className="text-[#075B3A]" />
            </div>
            <h2 className="text-[#17211D] font-bold text-sm sm:text-base">General Cancellation Rules</h2>
          </div>
          <ul className="space-y-2.5">
            {[
              'Cancellation charges apply to the total booking amount unless specified otherwise.',
              'The above policy is a general guideline. Specific hotel or service provider policies may override these terms. Final cancellation terms will be confirmed at the time of booking.',
              'During peak seasons (Diwali, Christmas, New Year, long weekends), cancellation charges may be higher. These will be communicated before booking confirmation.',
              'In the event of a natural disaster, government-mandated lockdown, or force majeure event, we will work with service providers to offer rescheduling or partial refunds.',
              'Group bookings (8+ guests) are subject to a separate cancellation policy. Please contact us for details.',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#075B3A] shrink-0" />
                <p className="text-[#66716C] text-sm leading-relaxed">{rule}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl p-5 sm:p-6 text-center">
          <div className="w-10 h-10 bg-[#075B3A]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <PhoneCall size={18} strokeWidth={1.8} className="text-[#075B3A]" />
          </div>
          <h2 className="text-[#17211D] font-bold text-base mb-1">Need to Cancel a Booking?</h2>
          <p className="text-[#66716C] text-sm mb-4">Contact us immediately and we&apos;ll help you through the process.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={CALL_URL} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#075B3A] text-white text-sm font-semibold rounded-xl hover:bg-[#06472F] transition-colors">
              <PhoneCall size={15} strokeWidth={2} />
              {PHONE_NUMBER}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#075B3A] text-[#075B3A] text-sm font-semibold rounded-xl hover:bg-white transition-colors">
              <ShieldCheck size={15} strokeWidth={2} />
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
