import type { Metadata } from 'next';
import { RefreshCcw, Clock, BadgeCheck, AlertTriangle, PhoneCall, ShieldCheck, Banknote, CreditCard } from 'lucide-react';
import Footer from '@/components/Footer';
import { CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Refund Policy | Valley City Stay Hub',
  description:
    'Read the refund policy of Valley City Stay Hub. Understand how refunds are processed for hotel, villa, and tour bookings in Lonavala.',
};

const refundSteps = [
  { step: '01', icon: PhoneCall, title: 'Submit Cancellation Request', desc: 'Contact us via WhatsApp or email with your booking reference and reason for cancellation.' },
  { step: '02', icon: BadgeCheck, title: 'Eligibility Confirmation', desc: 'We verify your cancellation request against our cancellation policy and confirm the refund amount.' },
  { step: '03', icon: RefreshCcw, title: 'Refund Initiated', desc: 'Once confirmed, we initiate the refund to your original payment method within 3–5 business days.' },
  { step: '04', icon: Banknote, title: 'Amount Credited', desc: 'Refunds typically reflect in your account within 5–10 business days depending on your bank.' },
];

const refundModes = [
  { icon: CreditCard, method: 'UPI / Bank Transfer', timeline: '3–5 business days', note: 'Fastest method. Share your UPI ID or bank account details.' },
  { icon: CreditCard, method: 'Debit / Credit Card', timeline: '5–10 business days', note: 'Refunded to the original card used for payment.' },
  { icon: Banknote, method: 'Cash Payment', timeline: '1–2 business days', note: 'Refund paid in person at our office or via cash transfer.' },
  { icon: CreditCard, method: 'Net Banking', timeline: '5–7 business days', note: 'Processed directly to your bank account.' },
];

export default function RefundPolicyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#075B3A] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <RefreshCcw size={22} strokeWidth={1.8} />
            </div>
            <span className="text-green-200 text-xs font-semibold uppercase tracking-widest">Policy</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Refund Policy</h1>
          <p className="text-green-100 text-sm sm:text-base max-w-2xl">
            We are committed to a fair and transparent refund process. Here&apos;s everything you need to know about how we process refunds.
          </p>
          <p className="text-green-300 text-xs mt-3">Last updated: August 2026</p>
          <p className="text-green-300 text-xs font-bold mt-1">GST NO: 27AACPS1497B1ZQ</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6 py-8 sm:py-12">

        {/* Important Notice */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-8">
          <AlertTriangle size={20} strokeWidth={1.8} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>Important:</strong> Refunds are processed only after the cancellation has been confirmed by our team as per our{' '}
              <a href="/cancellation-policy" className="underline font-semibold">Cancellation Policy</a>.
              No refund will be issued for no-shows or cancellations that fall outside the eligible window.
            </p>
          </div>
        </div>

        {/* Refund Process Steps */}
        <div className="mb-10">
          <h2 className="text-[#17211D] font-bold text-base sm:text-lg mb-5">How the Refund Process Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {refundSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="bg-white border border-[#DCE4DF] rounded-2xl p-4 sm:p-5 shadow-sm flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#075B3A] flex items-center justify-center text-white font-black text-sm">
                      {s.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#17211D] font-bold text-sm mb-1">{s.title}</h3>
                    <p className="text-[#66716C] text-xs sm:text-[13px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Refund Timelines by Mode */}
        <div className="mb-10">
          <h2 className="text-[#17211D] font-bold text-base sm:text-lg mb-5">Refund Timelines by Payment Mode</h2>
          <div className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F7F9F7] border-b border-[#DCE4DF]">
                    <th className="text-left px-5 py-3.5 text-[#66716C] font-semibold text-xs uppercase tracking-wide">Payment Method</th>
                    <th className="text-left px-5 py-3.5 text-[#66716C] font-semibold text-xs uppercase tracking-wide">Timeline</th>
                    <th className="text-left px-5 py-3.5 text-[#66716C] font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {refundModes.map((mode, i) => (
                    <tr key={mode.method} className={`border-b border-[#DCE4DF] last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9F7]'}`}>
                      <td className="px-5 py-3.5 text-[#17211D] font-semibold text-xs sm:text-sm">{mode.method}</td>
                      <td className="px-5 py-3.5">
                        <span className="inline-flex items-center gap-1 text-[#075B3A] font-bold text-xs">
                          <Clock size={11} strokeWidth={2} />
                          {mode.timeline}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[#66716C] text-xs hidden sm:table-cell">{mode.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[#66716C] text-xs mt-2 px-1">
            * Timelines are indicative and may vary depending on your bank or payment provider.
          </p>
        </div>

        {/* Non-Refundable Cases */}
        <div className="mb-10 bg-white border border-[#DCE4DF] rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle size={17} strokeWidth={1.8} className="text-red-500" />
            </div>
            <h2 className="text-[#17211D] font-bold text-sm sm:text-base">Non-Refundable Situations</h2>
          </div>
          <ul className="space-y-2.5">
            {[
              'No-show (guest fails to arrive without prior cancellation).',
              'Cancellation after the eligible window as defined in the Cancellation Policy.',
              'Partial stays — early check-out by choice will not be eligible for a refund.',
              'Service fees or booking assistance charges levied by Valley City Stay Hub.',
              'Bookings made on special, discounted or non-refundable promotional rates.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-[#66716C] text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Amendments */}
        <div className="mb-10 bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-5 sm:p-6">
          <h2 className="text-[#17211D] font-bold text-sm sm:text-base mb-3">Rescheduling vs. Cancellation</h2>
          <p className="text-[#66716C] text-sm leading-relaxed mb-3">
            In many cases, <strong className="text-[#17211D]">rescheduling your booking</strong> to a different date is a
            better option than cancelling. We can assist with date changes subject to availability. Rescheduling charges
            (if any) are typically lower than cancellation charges.
          </p>
          <p className="text-[#66716C] text-sm leading-relaxed">
            Contact us at least <strong className="text-[#17211D]">48 hours before your booking date</strong> to discuss
            rescheduling options.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl p-5 sm:p-6 text-center">
          <div className="w-10 h-10 bg-[#075B3A]/15 rounded-full flex items-center justify-center mx-auto mb-3">
            <ShieldCheck size={18} strokeWidth={1.8} className="text-[#075B3A]" />
          </div>
          <h2 className="text-[#17211D] font-bold text-base mb-1">Questions About Your Refund?</h2>
          <p className="text-[#66716C] text-sm mb-4">Our team is available Mon–Sun, 9:00 AM – 8:00 PM.</p>
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
