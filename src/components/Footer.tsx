import Link from 'next/link';
import { Phone, MessageCircle, Mountain } from 'lucide-react';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#17211D] text-white mt-8 sm:mt-10">
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-[#075B3A] rounded-xl flex items-center justify-center">
                <Mountain size={18} strokeWidth={1.8} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">{BRAND_NAME}</div>
                <div className="text-green-400 text-xs">{BRAND_OPERATOR}</div>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Your trusted local travel partner in Lonavala. We help you find the best hotels, villas and tour experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Hotels & Resorts', href: '/hotels' },
                { label: 'Villas', href: '/villas' },
                { label: 'Local Tours', href: '/tours' },
                { label: 'Enquiry', href: '/enquiry' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-xs hover:text-green-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Important Information', href: '/important-information' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-xs hover:text-green-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-white">Contact Us</h4>
            <p className="text-gray-400 text-xs mb-3">Lonavala, Maharashtra, India</p>
            <div className="space-y-2">
              <a
                href={CALL_URL}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone size={13} strokeWidth={2} />
                {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={13} strokeWidth={2} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-[11px]">
            © {currentYear} {BRAND_NAME} · {BRAND_OPERATOR} · GST Registered Travel Agency
          </p>
          <p className="text-gray-600 text-[10px]">
            All brand names are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
