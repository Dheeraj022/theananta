'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MapPin, CheckCircle, Send, Waves, Utensils, CircleParking, Wifi, Trees, Headphones, Compass, UserCheck, Dumbbell, Flower2 } from 'lucide-react';
import { Hotel } from '@/types';

interface HotelDetailLayoutProps {
  hotel: Hotel;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Waves': return <Waves size={24} className="text-[#17211D]" />;
    case 'Utensils': return <Utensils size={24} className="text-[#17211D]" />;
    case 'CircleParking': return <CircleParking size={24} className="text-[#17211D]" />;
    case 'Wifi': return <Wifi size={24} className="text-[#17211D]" />;
    case 'Trees': return <Trees size={24} className="text-[#17211D]" />;
    case 'UserCheck': return <UserCheck size={24} className="text-[#17211D]" />;
    case 'Headphones': return <Headphones size={24} className="text-[#17211D]" />;
    case 'Dumbbell': return <Dumbbell size={24} className="text-[#17211D]" />;
    case 'Flower2': return <Flower2 size={24} className="text-[#17211D]" />;
    default: return <Compass size={24} className="text-[#17211D]" />;
  }
};

export default function HotelDetailLayout({ hotel }: HotelDetailLayoutProps) {
  const [activeImage, setActiveImage] = useState(hotel.image);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    name: '',
    phone: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, listingName: hotel.name, type: 'Hotel Booking' }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ checkIn: '', checkOut: '', guests: '2 Adults', name: '', phone: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit enquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToEnquiry = () => {
    const card = document.getElementById('enquiry-form-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 xl:gap-12">
        {/* Left Column */}
        <div>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#075B3A] mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={12} className="text-[#66716C]" />
            <Link href="/hotels" className="hover:underline">Hotels & Resorts</Link>
            <ChevronRight size={12} className="text-[#66716C]" />
            <span className="text-[#17211D]">{hotel.name}</span>
          </nav>

          {/* Gallery */}
          <div className="mb-6">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-3">
              <Image
                src={activeImage}
                alt={hotel.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
              {hotel.images.slice(0, 5).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-[60px] sm:h-[70px] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-[#075B3A] opacity-100' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt={`${hotel.name} ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Info */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#17211D] mb-3">{hotel.name}</h2>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#075B3A] mb-4">
              <MapPin size={16} />
              <span>{hotel.location}, Maharashtra</span>
            </div>
            <p className="text-[#17211D] text-sm leading-relaxed mb-3">
              {hotel.description}
            </p>
            <p className="text-[#17211D] text-sm leading-relaxed mb-3">
              Room availability is subject to dates and occupancy.
            </p>
            <p className="text-[#17211D] text-sm leading-relaxed">
              For exact details, please submit an enquiry.
            </p>
          </div>

          {/* About */}
          <div className="mb-8">
            <h3 className="text-[15px] font-bold text-[#075B3A] uppercase tracking-wide mb-2">
              ABOUT THE PROPERTY
            </h3>
            <p className="text-[#17211D] text-sm leading-relaxed">
              This section provides general information about the property, amenities, facilities and other useful details for your reference only.
            </p>
          </div>

          {/* Accommodation */}
          <div className="mb-8">
            <h3 className="text-[15px] font-bold text-[#075B3A] uppercase tracking-wide mb-1 flex items-center gap-2">
              ACCOMMODATION <span className="text-xs text-[#17211D] normal-case tracking-normal font-medium">(Room types may vary)</span>
            </h3>
            
            <div className="flex flex-wrap gap-3 mt-4 mb-4">
              {hotel.rooms.map((room, idx) => (
                <div key={idx} className="border border-[#DCE4DF] rounded-xl px-4 py-3 text-center min-w-[140px] shadow-sm">
                  <div className="font-bold text-[#17211D] text-sm mb-0.5">{room.name}</div>
                  <div className="text-[10px] text-[#66716C]">(Information Only)</div>
                </div>
              ))}
            </div>

            <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-xl p-4">
              <p className="text-[#17211D] text-sm font-medium">
                Room availability is subject to dates and occupancy.<br />
                Please submit an enquiry for more details.
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-[15px] font-bold text-[#075B3A] uppercase tracking-wide mb-4">
              AMENITIES
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {hotel.amenities.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center w-[80px]">
                  <div className="w-12 h-12 rounded-full border border-[#DCE4DF] bg-white flex items-center justify-center mb-2 shadow-sm">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] text-[#17211D] font-semibold leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column - Form */}
        <div>
          <div id="enquiry-form-card" className="border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:sticky lg:top-24">
            
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={30} className="text-[#075B3A]" />
                </div>
                <h3 className="text-lg font-bold text-[#17211D] mb-2">Request Submitted</h3>
                <p className="text-[#66716C] text-sm leading-relaxed">
                  Thank you! Our travel team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-[15px] font-bold text-[#17211D] mb-1">Request Information / Enquiry</h3>
                  <p className="text-xs font-semibold text-[#17211D]">
                    Get details, availability and<br/>assistance from our team.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#17211D]">Check-in Date</label>
                  <input 
                    type="date"
                    required
                    min={today}
                    value={form.checkIn}
                    onChange={e => setForm({...form, checkIn: e.target.value})}
                    className="w-full border border-[#DCE4DF] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#17211D]">Check-out Date</label>
                  <input 
                    type="date"
                    required
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={e => setForm({...form, checkOut: e.target.value})}
                    className="w-full border border-[#DCE4DF] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#17211D]">Guests</label>
                  <select
                    value={form.guests}
                    onChange={e => setForm({...form, guests: e.target.value})}
                    className="w-full border border-[#DCE4DF] rounded-lg px-3 py-2.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#075B3A]"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5+ Adults</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#17211D]">Your Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full border border-[#DCE4DF] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#17211D]">Mobile Number</label>
                  <input 
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full border border-[#DCE4DF] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#06472F] hover:bg-[#043321] text-white font-bold py-3 rounded-lg text-[11px] sm:text-xs transition-colors shadow-sm"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  </button>
                  <p className="text-center text-[10px] font-medium text-[#17211D] mt-3 leading-snug">
                    This is an enquiry form.<br/>It does not confirm any booking.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-[58px] left-0 right-0 z-40 bg-white border-t border-[#DCE4DF] px-4 py-3 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="text-left">
          <div className="text-[#66716C] text-[9px] uppercase font-bold tracking-wider leading-none">Price Est.</div>
          <div className="text-[#075B3A] font-black text-xs mt-1 leading-none">{hotel.priceLabel || `From ₹${hotel.price}`}</div>
        </div>
        <button
          onClick={scrollToEnquiry}
          className="bg-[#075B3A] hover:bg-[#06472F] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer uppercase tracking-wide"
        >
          GET ENQUIRY
        </button>
      </div>
    </div>
  );
}
