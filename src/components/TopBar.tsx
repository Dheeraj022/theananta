import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export default function TopBar() {
  return (
    <div className="bg-[#075B3A] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-8 sm:h-9">
          {/* Left: GST Badge */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-green-100">
            <ShieldCheck size={13} strokeWidth={2} className="shrink-0" />
            <span className="whitespace-nowrap">GST Registered Travel Agency</span>
          </div>

          {/* Center: GST No */}
          <div className="hidden sm:block text-xs font-medium text-green-100 tracking-wide">
            GST NO: 27AACPS1497B1ZQ
          </div>

          {/* Right: Contact */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={CALL_URL}
              className="flex items-center gap-1 text-xs font-medium text-green-100 hover:text-white transition-colors"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <Phone size={12} strokeWidth={2} className="shrink-0" />
              <span className="hidden sm:inline">Call Us</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-green-100 hover:text-white transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={12} strokeWidth={2} className="shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
