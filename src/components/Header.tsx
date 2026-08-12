'use client';

import { useState } from 'react';
import { Menu, Phone, Mountain } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { BRAND_NAME, BRAND_OPERATOR, BRAND_TAGLINE, CALL_URL, PHONE_NUMBER } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-[#DCE4DF] sticky top-0 z-40 shadow-sm">
        <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-[72px] sm:h-[80px] lg:h-[88px]">
            {/* Left: Hamburger + Logo + Brand */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              {/* Hamburger — mobile/tablet only */}
              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="lg:hidden p-1.5 rounded-md text-[#17211D] hover:bg-[#EAF5EF] transition-colors shrink-0"
              >
                <Menu size={22} strokeWidth={1.8} />
              </button>

              {/* Logo Icon */}
              <Link href="/" aria-label="Valley City Stay Hub Home" className="shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#075B3A] rounded-xl flex items-center justify-center">
                  <Mountain size={20} strokeWidth={1.8} className="text-white" />
                </div>
              </Link>

              {/* Brand Text */}
              <Link href="/" className="min-w-0">
                <div className="font-bold text-[#17211D] text-sm sm:text-[15px] leading-tight truncate">{BRAND_NAME}</div>
                <div className="text-[#075B3A] text-[10px] sm:text-[11px] font-medium truncate">{BRAND_OPERATOR}</div>
                <div className="text-[#66716C] text-[9px] sm:text-[10px] hidden sm:block truncate">{BRAND_TAGLINE}</div>
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 px-6" aria-label="Main navigation">
              {[
                { label: 'Home', href: '/' },
                { label: 'Hotels & Resorts', href: '/hotels' },
                { label: 'Villas', href: '/villas' },
                { label: 'Local Tours', href: '/tours' },
                { label: 'Enquiry', href: '/enquiry' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#17211D] hover:text-[#075B3A] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Call Button */}
            <a
              href={CALL_URL}
              id="header-call-button"
              className="shrink-0 flex items-center gap-2 border border-[#075B3A] rounded-xl px-3 py-2 sm:px-4 hover:bg-[#EAF5EF] transition-colors"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <div className="w-7 h-7 bg-[#075B3A] rounded-lg flex items-center justify-center">
                <Phone size={14} strokeWidth={2} className="text-white" />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-[#17211D] font-bold text-[11px] sm:text-xs leading-tight">{PHONE_NUMBER}</div>
                <div className="text-[#66716C] text-[9px] sm:text-[10px] leading-tight">Call for Best Deals</div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
