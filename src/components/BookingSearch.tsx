'use client';

import { useState } from 'react';
import { Building2, House, Map, CalendarDays, Users, MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tabs = [
  { id: 'hotels', label: 'Hotels & Resorts', icon: Building2, href: '/hotels' },
  { id: 'villas', label: 'Villas', icon: House, href: '/villas' },
  { id: 'tours', label: 'Local Tours', icon: Map, href: '/tours' },
];

const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'];

export default function BookingSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('hotels');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults');
  const [location] = useState('Lonavala');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (activeTab !== 'tours') {
      if (!checkIn) errs.checkIn = 'Select check-in date';
      if (!checkOut) errs.checkOut = 'Select check-out date';
      if (checkIn && checkOut && checkOut <= checkIn) {
        errs.checkOut = 'Check-out must be after check-in';
      }
    } else {
      if (!checkIn) errs.checkIn = 'Select a date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSearch = () => {
    if (!validate()) return;
    const params = new URLSearchParams({ location: location.toLowerCase() });
    if (activeTab !== 'tours') {
      if (checkIn) params.set('checkIn', checkIn);
      if (checkOut) params.set('checkOut', checkOut);
      params.set('guests', guests.replace(' Adults', '').replace('+', '').trim());
    } else {
      if (checkIn) params.set('date', checkIn);
      params.set('guests', guests.replace(' Adults', '').replace('+', '').trim());
    }
    router.push(`/${activeTab}?${params.toString()}`);
  };

  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 -mt-6 relative z-20">
      <div className="bg-white rounded-2xl border border-[#DCE4DF] shadow-lg overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-[#DCE4DF]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`booking-tab-${tab.id}`}
                onClick={() => { setActiveTab(tab.id); setErrors({}); }}
                className={`flex items-center gap-1.5 flex-1 justify-center py-3 text-xs sm:text-sm font-semibold transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#075B3A] border-[#075B3A] bg-[#EAF5EF]'
                    : 'text-[#66716C] border-transparent bg-white hover:bg-[#F7F9F7]'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <Icon size={14} strokeWidth={1.8} className="shrink-0" />
                <span className="hidden xs:inline sm:inline">{tab.label}</span>
                <span className="xs:hidden sm:hidden">{tab.id === 'hotels' ? 'Hotels' : tab.id === 'villas' ? 'Villas' : 'Tours'}</span>
              </button>
            );
          })}
        </div>

        {/* Search Fields */}
        <div className="p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3">

            {/* Check-in */}
            <div className="space-y-1">
              <label htmlFor="check-in-date" className="flex items-center gap-1 text-[11px] font-semibold text-[#66716C] uppercase tracking-wide">
                <CalendarDays size={11} strokeWidth={2} />
                {activeTab === 'tours' ? 'Travel Date' : 'Check-in'}
              </label>
              <input
                id="check-in-date"
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => { setCheckIn(e.target.value); setErrors((p) => ({ ...p, checkIn: '' })); }}
                className={`w-full border rounded-xl px-3 py-2.5 text-sm text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${errors.checkIn ? 'border-red-400' : 'border-[#DCE4DF]'}`}
              />
              {errors.checkIn && <p className="text-red-500 text-[10px]">{errors.checkIn}</p>}
            </div>

            {/* Check-out (hidden for tours) */}
            {activeTab !== 'tours' && (
              <div className="space-y-1">
                <label htmlFor="check-out-date" className="flex items-center gap-1 text-[11px] font-semibold text-[#66716C] uppercase tracking-wide">
                  <CalendarDays size={11} strokeWidth={2} />
                  Check-out
                </label>
                <input
                  id="check-out-date"
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => { setCheckOut(e.target.value); setErrors((p) => ({ ...p, checkOut: '' })); }}
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${errors.checkOut ? 'border-red-400' : 'border-[#DCE4DF]'}`}
                />
                {errors.checkOut && <p className="text-red-500 text-[10px]">{errors.checkOut}</p>}
              </div>
            )}

            {/* Guests */}
            <div className="space-y-1">
              <label htmlFor="guests-select" className="flex items-center gap-1 text-[11px] font-semibold text-[#66716C] uppercase tracking-wide">
                <Users size={11} strokeWidth={2} />
                Guests
              </label>
              <select
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all bg-white"
              >
                {guestOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label htmlFor="location-input" className="flex items-center gap-1 text-[11px] font-semibold text-[#66716C] uppercase tracking-wide">
                <MapPin size={11} strokeWidth={2} />
                Location
              </label>
              <input
                id="location-input"
                type="text"
                value={location}
                readOnly
                className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm text-[#17211D] bg-[#F7F9F7] cursor-default"
                aria-label="Location: Lonavala"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            id="search-availability-button"
            onClick={handleSearch}
            className="w-full flex items-center justify-center gap-2 bg-[#075B3A] hover:bg-[#06472F] text-white font-semibold rounded-xl py-3 text-sm transition-colors duration-150"
          >
            <Search size={16} strokeWidth={2} />
            SEARCH AVAILABILITY
          </button>
        </div>
      </div>
    </section>
  );
}
