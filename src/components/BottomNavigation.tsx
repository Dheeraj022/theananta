'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Building2, House, Map, FileText, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Hotels', href: '/hotels', icon: Building2 },
  { label: 'Villas', href: '/villas', icon: House },
  { label: 'Tours', href: '/tours', icon: Map },
  { label: 'Enquiry', href: '/enquiry', icon: FileText },
  { label: 'Contact', href: '/contact', icon: Phone },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#DCE4DF] safe-bottom"
      aria-label="Mobile bottom navigation"
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              id={`bottom-nav-${item.label.toLowerCase()}`}
              className={`flex flex-col items-center justify-center py-2 px-1 flex-1 min-h-[58px] transition-colors ${
                isActive ? 'text-[#075B3A]' : 'text-[#66716C] hover:text-[#075B3A]'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.2 : 1.8}
                className={isActive ? 'text-[#075B3A]' : 'text-[#66716C]'}
              />
              <span className={`text-[9px] mt-0.5 font-medium leading-none ${isActive ? 'text-[#075B3A]' : 'text-[#66716C]'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-[#075B3A] rounded-t-full" aria-hidden="true" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
