'use client';

import { useState } from 'react';
import { Menu, Phone, Mountain } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { BRAND_NAME, BRAND_OPERATOR, CALL_URL, WHATSAPP_URL, PHONE_NUMBER } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-40 shadow-md">
        {/* Top Row: White Background */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Hamburger + Logo + Brand */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              {/* Hamburger — mobile/tablet only */}
              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-1.5 rounded-md text-[#17211D] hover:bg-[#EAF5EF] transition-colors shrink-0 -ml-1"
              >
                <Menu size={26} strokeWidth={2} />
              </button>

              {/* Logo Icon */}
              <Link href="/" aria-label={`${BRAND_NAME} Home`} className="shrink-0">
                <div className="w-12 h-12 lg:w-[52px] lg:h-[52px] bg-[#06472F] rounded-xl flex items-center justify-center shadow-sm">
                  <Mountain size={28} strokeWidth={1.5} className="text-white" />
                </div>
              </Link>

              {/* Brand Text */}
              <Link href="/" className="shrink-0 flex flex-col justify-center">
                <div className="font-extrabold text-[#06472F] text-lg lg:text-[22px] tracking-tight leading-none mb-1">{BRAND_NAME}</div>
                <div className="text-[#075B3A] text-xs lg:text-[14px] font-bold leading-none mb-1.5">{BRAND_OPERATOR}</div>
                <div className="text-[#66716C] text-[9.5px] lg:text-[11px] font-medium">
                  <span className="lg:hidden">Independent Travel Agency</span>
                  <span className="hidden lg:inline">Independent Travel Agency | Travel Information & Enquiry Assistance in Rajasthan</span>
                </div>
              </Link>
            </div>

            {/* Right: Contact (Desktop) */}
            <div className="hidden lg:flex flex-col items-end gap-1.5 shrink-0">
              <span className="text-[#17211D] text-[13px] font-bold">Need Travel Assistance?</span>
              <div className="flex items-center gap-5 mt-1">
                <a href={CALL_URL} className="flex items-center gap-1.5 text-[#06472F] font-bold hover:opacity-80 transition-opacity">
                  <Phone size={16} strokeWidth={2.5} />
                  <span className="text-[15px] tracking-wide">{PHONE_NUMBER}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#06472F] font-bold hover:opacity-80 transition-opacity">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  <span className="text-[15px] tracking-wide">WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right: Contact (Mobile) */}
            <div className="lg:hidden flex items-center gap-2 shrink-0">
               <a
                href={CALL_URL}
                className="w-10 h-10 bg-[#EAF5EF] rounded-full flex items-center justify-center hover:bg-[#DCE4DF] transition-colors"
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <Phone size={18} strokeWidth={2} className="text-[#075B3A]" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Row: Dark Green Navigation */}
        <div className="bg-[#06472F] hidden lg:block">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <nav className="flex items-center justify-between py-3" aria-label="Main navigation">
              {[
                { label: 'Home', href: '/' },
                { label: 'Hotels & Resorts', href: '/hotels' },
                { label: 'Villas & Havelis', href: '/villas' },
                { label: 'Local Tours', href: '/tours' },
                { label: 'Desert Camping', href: '/camping' },
                { label: 'Cabs & Transfers', href: '/cabs' },
                { label: 'Things To Do', href: '/things-to-do' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] xl:text-sm font-semibold text-white/90 hover:text-white transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
