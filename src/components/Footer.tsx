import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight,
  Mountain, Building2, House, Map, Car, Package, ShieldCheck, PlayCircle,
} from 'lucide-react';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, PHONE_NUMBER, WHATSAPP_URL } from '@/lib/constants';

const currentYear = new Date().getFullYear();

// Simple SVG brand icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Hotels & Resorts', href: '/hotels' },
  { label: 'Villas in Lonavala', href: '/villas' },
  { label: 'Local Tours', href: '/tours' },
  { label: 'Contact Us', href: '/contact' },
];

const importantLinks = [
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Hotel Non-Affiliation', href: '/hotel-non-affiliation' },
];

const services = [
  { label: 'Hotel Booking', icon: Building2 },
  { label: 'Villa Booking', icon: House },
  { label: 'Local Tours', icon: Map },
  { label: 'Car Rental', icon: Car },
  { label: 'Holiday Packages', icon: Package },
];

const socialLinks = [
  { label: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', bg: 'bg-blue-600' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' },
  { label: 'WhatsApp', icon: MessageCircle, href: WHATSAPP_URL, bg: 'bg-green-500' },
  { label: 'YouTube', icon: PlayCircle, href: 'https://youtube.com', bg: 'bg-red-600' },
];


export default function Footer() {
  return (
    <footer className="bg-[#0D2B1F] text-white mt-8 lg:mt-16" aria-label="Site footer">

      {/* ── Section 1: Brand + Social ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-7 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-[#075B3A] rounded-xl flex items-center justify-center shrink-0">
                <Mountain size={22} strokeWidth={1.8} className="text-white" />
              </div>
              <div>
                <div className="font-extrabold text-base sm:text-lg leading-tight tracking-wide">{BRAND_NAME}</div>
                <div className="text-green-400 text-xs font-medium">{BRAND_OPERATOR}</div>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We provide hotel, resort, villa and local tour bookings in Lonavala at the best prices.
              Your trusted local travel partner.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Follow Us</p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${s.label}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${s.bg} hover:opacity-85 transition-opacity`}
                  >
                    <Icon size={18} strokeWidth={2} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Links Grid ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-7 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Quick Links */}
            <div>
              <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-gray-400 text-[13px] hover:text-green-400 transition-colors group"
                    >
                      <ChevronRight size={12} className="text-green-600 group-hover:text-green-400 transition-colors shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4">Important Links</h3>
              <ul className="space-y-2.5">
                {importantLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-400 text-[13px] hover:text-green-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4">Our Services</h3>
              <ul className="space-y-2.5">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label} className="flex items-center gap-2 text-gray-400 text-[13px]">
                      <Icon size={14} strokeWidth={1.8} className="text-green-500 shrink-0" />
                      {s.label}
                    </li>
                  );
                })}
              </ul>
            </div>


          </div>
        </div>
      </div>

      {/* ── Section 3: Contact + Office ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-7 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Contact Us */}
            <div className="sm:border-r sm:border-white/10 sm:pr-8">
              <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href={CALL_URL} className="flex items-center gap-3 text-gray-400 text-sm hover:text-green-400 transition-colors">
                    <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0">
                      <Phone size={13} strokeWidth={2} className="text-green-400" />
                    </div>
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 text-sm hover:text-green-400 transition-colors">
                    <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0">
                      <MessageCircle size={13} strokeWidth={2} className="text-green-400" />
                    </div>
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vidhitourtravel.com" className="flex items-center gap-3 text-gray-400 text-sm hover:text-green-400 transition-colors">
                    <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0">
                      <Mail size={13} strokeWidth={2} className="text-green-400" />
                    </div>
                    info@vidhitourtravel.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0">
                    <MapPin size={13} strokeWidth={2} className="text-green-400" />
                  </div>
                  Lonavala, Maharashtra, India
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0">
                    <Clock size={13} strokeWidth={2} className="text-green-400" />
                  </div>
                  Mon – Sun : 9:00 AM – 8:00 PM
                </li>
              </ul>
            </div>

            {/* Our Office */}
            <div className="sm:pl-8">
              <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white mb-4">Our Office</h3>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-green-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} strokeWidth={2} className="text-green-400" />
                </div>
                <address className="not-italic text-gray-400 text-sm leading-relaxed">
                  <strong className="text-white font-semibold block mb-1">Office Address</strong>
                  BLUE TULIP CHS LTD, SHOP NO - 17,<br />
                  BLUE EMPIRE COMPLEX, OFF LINK ROAD,<br />
                  MAHAVIR NAGAR, KANDIWALI W, MUMBAI,<br />
                  Mumbai Suburban, Maharashtra, 400067
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 4: Important Information ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-5">
          <div className="flex items-start gap-4 border border-green-800 rounded-xl p-4 sm:p-5">
            <div className="w-9 h-9 bg-[#075B3A]/60 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck size={18} strokeWidth={1.8} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1.5">Important Information</h4>
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                Prices, availability, amenities and inclusions may vary based on travel dates, occupancy and service provider
                policies. Final availability and price will be confirmed at the time of booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 5: Disclaimer ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-5">
          <div className="flex items-start gap-4 border border-green-800 rounded-xl p-4 sm:p-5">
            <div className="w-9 h-9 bg-[#075B3A]/60 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck size={18} strokeWidth={1.8} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1.5">Disclaimer</h4>
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                Lonavala Gateway is operated by Vidhi Tour &amp; Travel, an independent travel agency. We are not
                affiliated with, endorsed by or sponsored by any hotel, resort, villa or other service provider. All
                brand names, logos and trademarks belong to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-4 text-center">
        <p className="text-gray-500 text-[11px] sm:text-xs">
          © {currentYear} {BRAND_OPERATOR}. All Rights Reserved. | GST No: 27AACPS1497B1ZQ
        </p>
      </div>
    </footer>
  );
}
