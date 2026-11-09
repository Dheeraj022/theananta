'use client';

import { X, Home, Building2, House, Map, FileText, Phone, MessageCircle, FileWarning, ShieldCheck, Tent, CarFront, Compass, Info } from 'lucide-react';
import Link from 'next/link';
import { CALL_URL, WHATSAPP_URL, BRAND_NAME, BRAND_OPERATOR } from '@/lib/constants';
import { useEffect } from 'react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Hotels & Resorts', href: '/hotels', icon: Building2 },
  { label: 'Villas & Havelis', href: '/villas', icon: House },
  { label: 'Local Tours', href: '/tours', icon: Map },
  { label: 'Desert Camping', href: '/camping', icon: Tent },
  { label: 'Cabs & Transfers', href: '/cabs', icon: CarFront },
  { label: 'Things To Do', href: '/things-to-do', icon: Compass },
  { label: 'About Us', href: '/about-us', icon: Info },
  { label: 'Disclaimer', href: '/disclaimer', icon: FileWarning },
  { label: 'Privacy Policy', href: '/privacy-policy', icon: ShieldCheck },
  { label: 'Contact Us', href: '/contact', icon: Phone },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#075B3A]">
          <div>
            <div className="text-white font-bold text-sm">{BRAND_NAME}</div>
            <div className="text-green-200 text-xs">{BRAND_OPERATOR}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="text-white p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-[#17211D] hover:bg-[#EAF5EF] hover:text-[#075B3A] transition-colors"
              >
                <Icon size={18} strokeWidth={1.8} className="shrink-0 text-[#075B3A]" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTAs */}
        <div className="p-4 border-t border-[#DCE4DF] space-y-2">
          <a
            href={CALL_URL}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#075B3A] text-white rounded-xl text-sm font-semibold hover:bg-[#06472F] transition-colors"
          >
            <Phone size={16} strokeWidth={2} />
            Call Us
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 border border-[#075B3A] text-[#075B3A] rounded-xl text-sm font-semibold hover:bg-[#EAF5EF] transition-colors"
          >
            <MessageCircle size={16} strokeWidth={2} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
