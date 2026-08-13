import { Phone, MessageCircle } from 'lucide-react';
import { CALL_URL, WHATSAPP_URL } from '@/lib/constants';

export default function HelpCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#DCE4DF] p-4 sm:p-5 w-full max-w-[260px] sm:max-w-[280px]">
      <div className="mb-1">
        <h3 className="text-[#17211D] font-bold text-sm leading-snug">Need Help? Call Us</h3>
        <p className="text-[#66716C] text-[11px] mt-1 leading-relaxed">
          For Best Deals, Availability &amp; Booking Assistance
        </p>
      </div>

      <div className="flex items-center gap-2 my-3 py-2.5 border-t border-b border-[#DCE4DF]">
        <div className="w-7 h-7 bg-[#EAF5EF] rounded-lg flex items-center justify-center shrink-0">
          <Phone size={14} strokeWidth={2} className="text-[#075B3A]" />
        </div>
        <span className="text-[#17211D] font-bold text-xs">+91 96616 60343</span>
      </div>

      <div className="flex gap-2">
        <a
          href={CALL_URL}
          id="help-card-call-button"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#075B3A] text-white rounded-xl text-[10px] sm:text-xs font-semibold hover:bg-[#06472F] transition-colors"
        >
          <Phone size={13} strokeWidth={2} className="shrink-0" />
          <span className="truncate">Call Now</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="help-card-whatsapp-button"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-[#075B3A] text-[#075B3A] rounded-xl text-[10px] sm:text-xs font-semibold hover:bg-[#EAF5EF] transition-colors"
        >
          <MessageCircle size={13} strokeWidth={2} className="shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
