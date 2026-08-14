'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight, MapPin, CheckCircle, Send,
  Home, Users, Mountain, Map, Check,
  BedDouble, Trees, Wifi, ChefHat, Sofa, Zap,
  Broom, Flame, MonitorPlay, Gamepad2, ConciergeBell,
  UtensilsCrossed, Images, Info, XCircle, Share2,
  Navigation, MessageCircle, HeartHandshake, CalendarDays, User, Phone, X
} from 'lucide-react';
import { Villa } from '@/types';

interface VillaDetailLayoutProps {
  villa: Villa;
}

export default function VillaDetailLayout({ villa }: VillaDetailLayoutProps) {
  const [activeImage, setActiveImage] = useState(villa.images[0] || villa.image);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [modalForm, setModalForm] = useState({
    name: '', phone: '', checkIn: '', checkOut: '', guests: '2 Adults', requirement: ''
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...modalForm, listingName: villa.name, type: 'Villa Booking', service: selectedRoom }),
      });
      if (response.ok) {
        setModalSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit enquiry. Please check your connection.");
    } finally {
      setIsModalSubmitting(false);
    }
  };

  const handleCheckAvailability = (roomName: string) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
    setModalSubmitted(false);
    setModalForm({
      name: '', phone: '', checkIn: '', checkOut: '', guests: '2 Adults', requirement: ''
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.type = "Villa Enquiry";
    data.listingName = villa.name;

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        formElement.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  // Fallback map pin handler
  const handleMapClick = () => {
    window.open(`https://maps.google.com/?q=${villa.location}, Lonavala`, '_blank');
  };

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:py-10">

      {/* Breadcrumb */}
      <nav className="flex text-[13px] text-[#66716C] font-semibold mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#075B3A] transition-colors">Home</Link></li>
          <ChevronRight size={14} />
          <li><Link href="/villas" className="hover:text-[#075B3A] transition-colors">Villas</Link></li>
          <ChevronRight size={14} />
          <li className="text-[#17211D] truncate max-w-[200px] sm:max-w-none">{villa.name}</li>
        </ol>
      </nav>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-10">

        {/* LEFT COLUMN */}
        <div className="space-y-6 md:space-y-8">

          {/* Top Gallery Section */}
          <div className="flex flex-col gap-3">
            {/* Main Large Image */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute top-4 left-4 z-10 bg-[#06472F] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                Villa
              </div>
              <Image
                src={activeImage}
                alt={villa.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* 4 Horizontal Thumbnails */}
            <div className="hidden md:grid grid-cols-4 gap-3 h-[80px] md:h-[100px]">
              {villa.images.slice(0, 4).map((img, idx) => (
                <div key={idx} onClick={() => setActiveImage(img)} className={`relative w-full h-full rounded-xl overflow-hidden shadow-sm group cursor-pointer border-[3px] transition-colors ${activeImage === img ? 'border-[#075B3A]' : 'border-transparent hover:border-[#075B3A]/50'}`}>
                  <Image src={img} alt={`${villa.name} thumbnail ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          {/* Title & Badges */}
          <div>
            <h1 className="text-3xl sm:text-[34px] font-extrabold text-[#17211D] leading-tight mb-2">
              {villa.name}
            </h1>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#66716C] mb-4">
              <MapPin size={18} />
              <span>{villa.location}, Maharashtra</span>
            </div>
            <p className="text-[#17211D] text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
              {villa.description} Perfect for families, friends and corporate getaways with modern amenities and complete privacy.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Private Villa', 'Hill View', 'Family Friendly', 'Private Pool', 'Peaceful Location'].map((badge, idx) => (
                <span key={idx} className="bg-[#F7F9F7] border border-[#DCE4DF] text-[#17211D] text-xs font-bold px-4 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Property Information */}
          <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#17211D] mb-6">Quick Property Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
              {[
                { icon: Home, label: 'Property Type', val: 'Private Villa' },
                { icon: MapPin, label: 'Location', val: `${villa.location}, Maharashtra` },
                { icon: Users, label: 'Suitable For', val: 'Families, Couples, Groups' },
                { icon: BedDouble, label: 'Accommodation', val: 'Multiple Bedrooms' },
                { icon: Mountain, label: 'Setting', val: 'Hill / Nature Surroundings' },
                { icon: Map, label: 'Area', val: 'Lonavala' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon size={24} className="text-[#66716C] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <div className="text-[#17211D] font-bold text-sm mb-0.5">{item.label}</div>
                      <div className="text-[#66716C] text-xs sm:text-sm">{item.val}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* About The Villa */}
          <section className="border border-[#DCE4DF] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#17211D] mb-4">About The Villa</h2>
            <p className="text-[#66716C] text-sm leading-relaxed mb-4">
              {villa.name} offers a perfect blend of luxury, comfort and nature. The villa features spacious rooms, elegant interiors, a private pool and beautiful outdoor spaces.
            </p>
            <p className="text-[#66716C] text-sm leading-relaxed">
              It is an ideal choice for those looking for a peaceful stay in Lonavala with complete privacy and modern amenities.
            </p>
          </section>

          {/* Accommodation */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
              <h2 className="text-lg font-bold text-[#17211D]">Accommodation</h2>
              <span className="text-[#66716C] text-xs">Room categories and accommodation options may vary by property and date.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: '3 BHK Villa', feats: ['3 Bedrooms', 'Spacious Living Area', 'Attached Bathrooms', 'Private Balcony'] },
                { title: '4 BHK Villa', feats: ['4 Bedrooms', 'Large Living Area', 'Garden Facing', 'Private Pool Access'] },
                { title: '5 BHK Villa', feats: ['5 Bedrooms', 'Premium Interiors', 'Private Pool', 'Outdoor Lounge'] },
                { title: 'Entire Villa', feats: ['Full Villa Access', 'Maximum Privacy', 'Perfect for Groups', 'Multiple Amenities'] },
              ].map((room, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl p-5 flex flex-col shadow-sm">
                  <div className="text-center mb-5">
                    <h3 className="font-bold text-[#17211D] text-[15px]">{room.title}</h3>
                    <p className="text-[#66716C] text-[11px] mt-0.5">(Information Only)</p>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {room.feats.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-xs text-[#17211D] font-medium">
                        <Check size={14} className="text-[#075B3A] shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleCheckAvailability(room.title)} className="w-full mt-4 py-2 bg-[#F9FAFB] hover:bg-[#EAF5EF] border border-[#DCE4DF] hover:border-[#075B3A] text-[#17211D] hover:text-[#075B3A] text-[11px] font-bold rounded-lg transition-colors">
                    Get Enquiry
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Features & Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-[#17211D] mb-6">Villa Features <span className="font-normal text-[#66716C]">(May Vary)</span></h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-6 gap-x-2">
                {[
                  { icon: Home, label: 'Private' },
                  { icon: Trees, label: 'Garden/Lawn' },
                  { icon: Wifi, label: 'Wi-Fi' },
                  { icon: ChefHat, label: 'Kitchen' },
                  { icon: Sofa, label: 'Living Area' },
                  { icon: Zap, label: 'Power Backup' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <Icon size={20} className="text-[#075B3A] mb-2" strokeWidth={1.5} />
                      <span className="text-[10px] font-semibold text-[#17211D] leading-tight">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-[#17211D] mb-6">Property Amenities</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-2">
                {[
                  { icon: Broom, label: 'Housekeeping' },
                  { icon: Flame, label: 'BBQ Area' },
                  { icon: Flame, label: 'Bonfire\n(On Request)' },
                  { icon: MonitorPlay, label: 'TV' },
                  { icon: Gamepad2, label: 'Indoor Games' },
                  { icon: ConciergeBell, label: 'Room Service' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <Icon size={20} className="text-[#075B3A] mb-2" strokeWidth={1.5} />
                      <span className="text-[10px] font-semibold text-[#17211D] leading-tight whitespace-pre-line">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Dining & Location */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm h-full flex flex-col gap-6">
              <h2 className="text-sm font-bold text-[#17211D]">Dining & Food</h2>
              {[
                { icon: UtensilsCrossed, title: 'In-house Dining', desc: 'Home-style food available' },
                { icon: ChefHat, title: 'Kitchen', desc: 'Fully equipped kitchen' },
                { icon: Flame, title: 'BBQ Facility', desc: 'Enjoy BBQ with family & friends' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon size={20} className="text-[#075B3A] shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <div className="text-[#17211D] font-bold text-xs sm:text-sm mb-0.5">{item.title}</div>
                      <div className="text-[#66716C] text-[11px] leading-tight max-w-[120px]">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm h-full flex flex-col">
              <h2 className="text-sm font-bold text-[#17211D] mb-1">Location</h2>
              <p className="text-[#66716C] text-[11px] font-medium mb-4">{villa.name}, {villa.location}, Maharashtra</p>

              <div className="relative w-full flex-grow min-h-[200px] sm:min-h-[150px] bg-[#EAF5EF] rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(villa.name + ', ' + villa.location + ', Lonavala')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
              <p className="text-center text-[9px] text-[#66716C] mt-2">
                Map and nearby attractions information available on enquiry.
              </p>
            </section>
          </div>

          {/* Things To Do Around Lonavala */}
          <section>
            <h2 className="text-lg font-bold text-[#17211D] mb-4">Things To Do Around Lonavala</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {[
                { title: 'Sightseeing', sub: 'Explore scenic views & viewpoints', img: '/images/tours/sightseeing.jpg' },
                { title: 'Nature Walks', sub: 'Enjoy nature trails & fresh air', img: '/images/camping/forest_camping.jpg' },
                { title: 'Waterfalls', sub: 'Visit beautiful waterfalls nearby', img: '/images/tours/waterfall.jpg' },
                { title: 'Adventure Activities', sub: 'Trekking, camping & more', img: '/images/camping/adventure_camping.jpg' },
                { title: 'Caves & Heritage', sub: 'Explore historic caves & forts', img: '/images/tours/caves.jpg' },
                { title: 'Lakes & Boating', sub: 'Enjoy boating & peaceful lakes', img: '/images/camping/lakeside_camping.jpg' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="relative w-full h-24">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-[#17211D] text-[11px] mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[#66716C] text-[9px] leading-tight">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/tours" className="bg-[#F7F9F7] text-[#17211D] font-bold text-xs border border-[#DCE4DF] px-6 py-2 rounded-lg hover:bg-[#EAF5EF] transition-colors">
                Explore Local Tours
              </Link>
            </div>
          </section>

          {/* Information Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info size={18} className="text-[#66716C]" />
                <h2 className="text-sm font-bold text-[#17211D]">Important Information</h2>
              </div>
              <ul className="space-y-2">
                {[
                  'Villa details, amenities and policies may vary.',
                  'Early check-in / late check-out is subject to availability.',
                  'Advance enquiry recommended for long weekends and holidays.',
                  'We are an independent travel agency providing villa information & assistance in Lonavala.',
                  'We are not affiliated with any villa owner or service provider.',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] text-[#66716C] leading-relaxed">
                    <ChevronRight size={12} className="shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6 flex flex-col">
              <h2 className="text-sm font-bold text-[#17211D] mb-2">Cancellation & Modification</h2>
              <p className="text-[11px] text-[#66716C] leading-relaxed mb-6 flex-grow">
                Cancellation, modification and refund conditions are determined according to the applicable property/owner/provider policy and may vary by accommodation type and travel dates.
              </p>
              <Link href="/cancellation-policy" className="w-full bg-white text-[#17211D] text-center font-bold text-xs border border-[#DCE4DF] py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                View Cancellation Information
              </Link>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (SIDEBAR) */}
        <div className="relative">
          <div className="sticky top-6 space-y-6">

            {/* Enquiry Form */}
            <div id="villa-enquiry-form" className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-lg shadow-black/5">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-[#17211D] mb-2">Request Information / Enquiry</h2>
                <p className="text-[#66716C] text-xs px-4">Get details, availability and assistance from our team.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {success && (
                  <div className="bg-[#EAF5EF] text-[#075B3A] p-3 rounded-lg text-sm font-bold text-center">
                    Enquiry sent successfully! We will contact you soon.
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold text-center">
                    Failed to send. Please try again.
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Name*</label>
                  <input name="name" type="text" required placeholder="Enter your name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Mobile Number*</label>
                  <input name="phone" type="tel" required placeholder="Enter mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Email Address</label>
                  <input name="email" type="email" placeholder="Enter email address" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Preferred Date</label>
                  <div className="relative">
                    <input name="travelDate" type="date" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Number of Guests*</label>
                  <select name="guests" required className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Accommodation Preference</label>
                  <select name="accommodationPreference" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
                    <option>Select villa type</option>
                    <option>3 BHK Villa</option>
                    <option>4 BHK Villa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Requirement</label>
                  <textarea name="message" placeholder="Write your requirement..." rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-[#06472F] hover:bg-[#053d28] disabled:opacity-50 text-white font-bold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                  <Send size={16} />
                  {loading ? 'SENDING...' : 'SEND ENQUIRY'}
                </button>

                <p className="text-center text-[10px] text-[#66716C] mt-4">
                  This is an enquiry form.<br />It does not confirm any booking.
                </p>
              </form>
            </div>

            {/* Why Choose Us? */}
            <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#17211D] mb-4 text-sm">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Wide range of handpicked villas',
                  'Best recommendations',
                  '24/7 enquiry assistance',
                  'Transparent information',
                  'Local expertise',
                  'Hassle-free assistance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#17211D]">
                    <CheckCircle size={14} className="text-[#075B3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Provide */}
            <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#17211D] mb-4 text-sm">What We Provide</h3>
              <ul className="space-y-4">
                {[
                  { icon: Home, text: 'Villa Information' },
                  { icon: Share2, text: 'Share Property Details' },
                  { icon: Navigation, text: 'Help with Travel Planning' },
                  { icon: HeartHandshake, text: 'Connect with Service Providers' },
                  { icon: MessageCircle, text: 'Assist with Enquiry & Communication' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3 text-xs text-[#17211D]">
                      <Icon size={16} className="text-[#075B3A] shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* What We Don't Do */}
            <div className="bg-[#FFF5F5] border border-[#FFEAEA] rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#17211D] mb-4 text-sm">What We Don't Do</h3>
              <ul className="space-y-3">
                {[
                  'We are not the villa owner or operator.',
                  'We do not guarantee availability.',
                  'We do not show fixed prices.',
                  'We do not take online bookings or payments.',
                  'We do not promise best price or offers.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#17211D]">
                    <XCircle size={14} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Villa Locations */}
            <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#17211D] mb-4 text-sm">Popular Villa Locations</h3>
              <ul className="space-y-3">
                {[
                  'Pawna Lake', 'Tungarli', 'Khandala', 'Aamby Valley City', 'Bhushi', 'And Many More'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#17211D]">
                    <MapPin size={14} className="text-[#66716C] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-[58px] left-0 right-0 z-40 bg-white border-t border-[#DCE4DF] px-4 py-3 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="text-left">
          <div className="text-[#17211D] font-bold text-sm">Need Help?</div>
          <div className="text-[#66716C] text-[10px] mt-0.5">Contact us for the best assistance</div>
        </div>
        <button
          onClick={() => {
            document.getElementById('villa-enquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="bg-[#06472F] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#053d28] transition-colors"
        >
          SEND ENQUIRY
        </button>
      </div>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="absolute inset-0" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#EAF5EF] flex justify-between items-center bg-[#F9FAFB] shrink-0">
              <div>
                <h3 className="font-bold text-[#17211D] text-lg">Get Enquiry</h3>
                <p className="text-[#075B3A] text-xs font-semibold mt-0.5">{selectedRoom}</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {modalSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#075B3A]" />
                  </div>
                  <h4 className="text-[#17211D] font-bold text-lg mb-2">Enquiry Sent Successfully!</h4>
                  <p className="text-[#66716C] text-sm mb-6">We will get back to you with the availability and best prices shortly.</p>
                  <button onClick={() => setIsModalOpen(false)} className="mt-6 px-5 py-2.5 bg-[#075B3A] hover:bg-[#06472F] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors">
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                        <CalendarDays size={11} /> Check-in Date
                      </label>
                      <input type="date" required min={today} value={modalForm.checkIn} onChange={e => setModalForm({ ...modalForm, checkIn: e.target.value })} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                    </div>

                    <div className="space-y-1">
                      <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                        <CalendarDays size={11} /> Check-out Date
                      </label>
                      <input type="date" required min={modalForm.checkIn || today} value={modalForm.checkOut} onChange={e => setModalForm({ ...modalForm, checkOut: e.target.value })} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                    </div>

                    <div className="space-y-1 col-span-2 sm:col-span-1">
                      <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                        <Users size={11} /> Guests
                      </label>
                      <select value={modalForm.guests} onChange={e => setModalForm({ ...modalForm, guests: e.target.value })} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A]">
                        <option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                      <User size={11} /> Your Name
                    </label>
                    <input type="text" required placeholder="Enter your name" value={modalForm.name} onChange={e => setModalForm({ ...modalForm, name: e.target.value })} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                  </div>

                  <div className="space-y-1">
                    <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                      <Phone size={11} /> Mobile Number
                    </label>
                    <input type="tel" required placeholder="Enter mobile number" value={modalForm.phone} onChange={e => setModalForm({ ...modalForm, phone: e.target.value })} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={isModalSubmitting} className="w-full flex justify-center items-center gap-2 bg-[#075B3A] text-white py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#06472F] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                      {isModalSubmitting ? 'Submitting...' : 'Send Enquiry'}
                      <Send size={16} />
                    </button>
                    <p className="text-center text-[10px] text-[#66716C] mt-3">This is an enquiry form. It does not confirm booking.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
