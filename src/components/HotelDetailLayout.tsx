'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, CheckCircle, Waves, Utensils, CircleParking, 
  Wifi, Trees, Headphones, Compass, UserCheck, Dumbbell, Flower2,
  Home, Users, Mountain, Map, Check, Tv, Bath, Wind, Sofa, CupSoda, MapPinned, X, CalendarDays, Phone, User
} from 'lucide-react';
import { Hotel } from '@/types';

interface HotelDetailLayoutProps {
  hotel: Hotel;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Waves': return <Waves size={16} className="text-[#17211D]" />;
    case 'Utensils': return <Utensils size={16} className="text-[#17211D]" />;
    case 'CircleParking': return <CircleParking size={16} className="text-[#17211D]" />;
    case 'Wifi': return <Wifi size={16} className="text-[#17211D]" />;
    case 'Trees': return <Trees size={16} className="text-[#17211D]" />;
    case 'UserCheck': return <UserCheck size={16} className="text-[#17211D]" />;
    case 'Headphones': return <Headphones size={16} className="text-[#17211D]" />;
    case 'Dumbbell': return <Dumbbell size={16} className="text-[#17211D]" />;
    case 'Flower2': return <Flower2 size={16} className="text-[#17211D]" />;
    default: return <Compass size={16} className="text-[#17211D]" />;
  }
};

export default function HotelDetailLayout({ hotel }: HotelDetailLayoutProps) {
  const [activeImage, setActiveImage] = useState(hotel.images[0] || hotel.image);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    requirement: '',
  });

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [modalForm, setModalForm] = useState({
    name: '', phone: '', checkIn: '', checkOut: '', guests: '2 Adults', requirement: ''
  });
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);

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
        setForm({ checkIn: '', checkOut: '', guests: '2 Adults', name: '', phone: '', requirement: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit enquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...modalForm, listingName: hotel.name, type: 'Hotel Booking', service: selectedRoom }),
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

  const scrollToEnquiry = () => {
    const card = document.getElementById('enquiry-form-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-10">
        
        {/* Left Column (Main Content) */}
        <div className="space-y-6">
          
          {/* Top Gallery Section */}
          <div className="flex flex-col gap-3">
            {/* Main Large Image */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute top-4 left-4 z-10 bg-[#06472F] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                Resort
              </div>
              <Image
                src={activeImage}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* 4 Horizontal Thumbnails */}
            <div className="hidden md:grid grid-cols-4 gap-3 h-[80px] md:h-[100px]">
              {hotel.images.slice(0, 4).map((img, idx) => (
                <div key={idx} onClick={() => setActiveImage(img)} className={`relative w-full h-full rounded-xl overflow-hidden shadow-sm group cursor-pointer border-[3px] transition-colors ${activeImage === img ? 'border-[#075B3A]' : 'border-transparent hover:border-[#075B3A]/50'}`}>
                  <Image src={img} alt={`${hotel.name} thumbnail ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>

          {/* Title & Badges */}
          <div>
            <h1 className="text-3xl sm:text-[34px] font-extrabold text-[#17211D] leading-tight mb-2">
              {hotel.name}
            </h1>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#075B3A] mb-4">
              <MapPin size={16} />
              <span>{hotel.location}, Maharashtra</span>
            </div>
            <p className="text-[#66716C] text-xs sm:text-sm leading-relaxed mb-4">
              General property information, accommodation details and travel enquiry assistance.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Resort', 'Lonavala', 'Accommodation', 'Leisure Stay'].map((badge) => (
                <span key={badge} className="px-3 py-1.5 bg-[#F7F9F7] border border-[#DCE4DF] text-[#66716C] text-xs font-bold rounded-lg shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Property Information Card */}
          <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm overflow-hidden">
            <div className="bg-[#F7F9F7] px-5 py-3 border-b border-[#DCE4DF]">
              <h3 className="font-bold text-[#17211D] text-[13px]">Quick Property Information</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DCE4DF] p-2">
              <div className="flex items-start gap-3 p-3">
                <Home size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Property Type</div>
                  <div className="text-[11px] text-[#66716C]">Resort</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3">
                <MapPin size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Location</div>
                  <div className="text-[11px] text-[#66716C]">{hotel.location}, Maharashtra</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3">
                <Users size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Suitable For</div>
                  <div className="text-[11px] text-[#66716C]">Couples, Families, Groups</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border-t md:border-t border-[#DCE4DF]">
                <Home size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Accommodation</div>
                  <div className="text-[11px] text-[#66716C]">Multiple Room Categories</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border-t md:border-t border-[#DCE4DF]">
                <Mountain size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Setting</div>
                  <div className="text-[11px] text-[#66716C]">Hill / Nature Surroundings</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border-t md:border-t border-[#DCE4DF]">
                <Map size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#17211D] mb-0.5">Area</div>
                  <div className="text-[11px] text-[#66716C]">Lonavala</div>
                </div>
              </div>
            </div>
          </div>

          {/* About The Property Card */}
          <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5 sm:p-6">
            <h3 className="font-bold text-[#17211D] text-[15px] mb-3">About the Property</h3>
            <div className="space-y-3 text-[13px] text-[#66716C] leading-relaxed">
              <p>
                {hotel.name} is a resort property located in Lonavala, Maharashtra. The property offers accommodation and leisure facilities for visitors planning a stay in the Lonavala region.
              </p>
              <p>
                The surrounding area is known for its hills, greenery, viewpoints and seasonal attractions. Travellers can consider the property&apos;s location while planning sightseeing and other activities around Lonavala.
              </p>
              <p>
                {hotel.about} Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.
              </p>
            </div>
          </div>

          {/* Accommodation Rooms Card Grid */}
          <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
              <h3 className="font-bold text-[#17211D] text-[15px]">Accommodation</h3>
              <span className="text-[11px] text-[#66716C]">Room categories and accommodation options may vary by property and date.</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Deluxe Room', 'Premium Room', 'Family Room', 'Suite / Villa'].map((roomName, idx) => {
                const features = [
                  ['Comfortable stay', 'Modern amenities', 'Ideal for couples'],
                  ['Spacious rooms', 'Added comfort', 'Scenic views'],
                  ['Extra space', 'Suitable for families', 'Multiple bedding'],
                  ['Luxury accommodation', 'Private areas', 'Premium facilities']
                ];
                return (
                  <div key={roomName} className="border border-[#DCE4DF] rounded-xl p-4 flex flex-col bg-white">
                    <h4 className="font-extrabold text-[#17211D] text-[13px] mb-0.5">{roomName}</h4>
                    <span className="text-[10px] text-[#66716C] mb-3">(Information Only)</span>
                    <ul className="space-y-2 mb-5 flex-grow">
                      {features[idx].map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#17211D]">
                          <Check size={12} className="text-[#075B3A] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleCheckAvailability(roomName)} className="w-full py-1.5 text-[11px] font-bold border border-[#DCE4DF] rounded-lg text-[#17211D] bg-[#F7F9F7] hover:bg-[#EAF5EF] transition-colors">
                      View Information
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side-by-side: Room Features & Property Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Room Features */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4 flex items-center gap-1.5">
                Room Features <span className="text-[10px] font-normal text-[#66716C]">(May Vary)</span>
              </h3>
              <div className="grid grid-cols-3 gap-y-5 gap-x-2">
                {[
                  { label: 'Double / Twin Bed', icon: <Sofa size={20} className="text-[#075B3A]" /> },
                  { label: 'Air Conditioning', icon: <Wind size={20} className="text-[#075B3A]" /> },
                  { label: 'TV', icon: <Tv size={20} className="text-[#075B3A]" /> },
                  { label: 'Attached Bathroom', icon: <Bath size={20} className="text-[#075B3A]" /> },
                  { label: 'Balcony / View', icon: <Trees size={20} className="text-[#075B3A]" /> },
                  { label: 'Seating Area', icon: <Sofa size={20} className="text-[#075B3A]" /> },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    {item.icon}
                    <span className="text-[10px] font-bold text-[#17211D] leading-tight max-w-[60px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Amenities */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4">Property Amenities</h3>
              <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                {hotel.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="shrink-0">{getIcon(item.icon)}</div>
                    <span className="text-[10px] font-bold text-[#17211D] leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side-by-side: Dining & Food & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Dining & Food */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4">Dining & Food</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex flex-col items-center text-center gap-2">
                  <Utensils size={20} className="text-[#66716C]" />
                  <span className="text-[11px] font-bold text-[#17211D]">Restaurant</span>
                  <span className="text-[9px] text-[#66716C] leading-tight">Multi-cuisine dining options available.</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <CupSoda size={20} className="text-[#66716C]" />
                  <span className="text-[11px] font-bold text-[#17211D]">Breakfast</span>
                  <span className="text-[9px] text-[#66716C] leading-tight">Breakfast option may be available.</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Sofa size={20} className="text-[#66716C]" />
                  <span className="text-[11px] font-bold text-[#17211D]">Room Dining</span>
                  <span className="text-[9px] text-[#66716C] leading-tight">In-room dining services (may vary).</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <MapPinned size={20} className="text-[#66716C]" />
                  <span className="text-[11px] font-bold text-[#17211D]">Nearby Options</span>
                  <span className="text-[9px] text-[#66716C] leading-tight">Various food outlets available nearby.</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-2">Location</h3>
              <p className="text-[11px] text-[#66716C] font-semibold mb-3">{hotel.name}, {hotel.location}, Maharashtra</p>
              <div className="relative w-full h-[150px] rounded-xl bg-gray-100 border border-[#DCE4DF] overflow-hidden flex items-center justify-center">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.name + ' Lonavala')}&t=&z=14&ie=UTF8&iwloc=&output=embed`} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Side-by-side: Nearby Places & Things To Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nearby Places */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4">Nearby Places</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Lonavala Market</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 2 km*</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Khandala</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 5 km*</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Lonavala Railway Station</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 3 km*</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Kune Falls</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 6 km*</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Della Adventure</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 8 km*</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Karla Caves</div>
                    <div className="text-[9px] text-[#66716C]">Approx. 11 km*</div>
                  </div>
                </div>
              </div>
              <p className="text-[9px] text-right text-[#66716C] mt-3 italic">*Distances are approximate and may vary by route and traffic.</p>
            </div>

            {/* Things To Do */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4">Things To Do Around Lonavala</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { name: 'Sightseeing', desc: 'Viewpoints & scenic landscapes', img: '/images/tours/tiger-point.jpg' },
                  { name: 'Nature & Waterfalls', desc: 'Explore seasonal waterfalls', img: '/images/tours/waterfall.jpg' },
                  { name: 'Forts & Heritage', desc: 'Historical forts and trails', img: '/images/tours/sightseeing.jpg' },
                  { name: 'Caves', desc: 'Karla & Bhaja Caves', img: '/images/tours/caves.jpg' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center border border-[#DCE4DF] rounded-xl overflow-hidden pb-1 bg-white">
                    <div className="relative w-full h-[50px] mb-1">
                      <Image src={item.img} alt={item.name} fill className="object-cover" />
                    </div>
                    <span className="text-[9px] font-bold text-[#17211D] px-1 text-center">{item.name}</span>
                    <span className="text-[8px] text-[#66716C] text-center px-1 leading-tight">{item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link href="/tours" className="text-[11px] font-bold text-[#17211D] bg-[#F7F9F7] border border-[#DCE4DF] hover:bg-[#EAF5EF] transition-colors rounded-lg px-4 py-1.5">
                  Explore Local Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Side-by-side: Important Information & Cancellation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Important Information */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-4">Important Information</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Check-In / Check-Out</div>
                    <div className="text-[9px] text-[#66716C]">As subject to property policy.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Pets Policy</div>
                    <div className="text-[9px] text-[#66716C]">Pets property dependent.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Guest Policy</div>
                    <div className="text-[9px] text-[#66716C]">Guest requirements and policies may vary.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Identification</div>
                    <div className="text-[9px] text-[#66716C]">Valid ID proof may be required as per property rules.</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 col-span-2">
                  <CheckCircle size={14} className="text-[#66716C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#17211D]">Other Policies</div>
                    <div className="text-[9px] text-[#66716C]">Other applicable policies may apply.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation & Modification */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-white shadow-sm p-5">
              <h3 className="font-bold text-[#17211D] text-[14px] mb-3">Cancellation & Modification</h3>
              <p className="text-[11px] text-[#66716C] leading-relaxed mb-4">
                Cancellation, modification and refund conditions are determined according to the applicable property/service-provider policy and may vary by accommodation type and travel dates.
              </p>
              <Link href="/cancellation-policy" className="inline-block py-1.5 px-4 text-[11px] font-bold border border-[#DCE4DF] rounded-lg text-[#17211D] bg-[#F7F9F7] hover:bg-[#EAF5EF] transition-colors">
                View Cancellation Information
              </Link>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar Enquiry Form) */}
        <div>
          <div className="sticky top-24 space-y-4">
            
            {/* Form Card */}
            <div id="enquiry-form-card" className="border border-[#DCE4DF] rounded-2xl p-6 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
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
                  <div className="text-center mb-5">
                    <h3 className="text-[16px] font-extrabold text-[#17211D] mb-1.5">Request Information / Enquiry</h3>
                    <p className="text-[11px] text-[#66716C] leading-tight max-w-[200px] mx-auto">
                      Get details, availability and assistance from our team.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Your Name*</label>
                    <input 
                      type="text" required placeholder="Enter your name"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Mobile Number*</label>
                    <input 
                      type="tel" required placeholder="Enter mobile number"
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Check-in Date*</label>
                    <input 
                      type="date" required min={today}
                      value={form.checkIn} onChange={e => setForm({...form, checkIn: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Check-out Date*</label>
                    <input 
                      type="date" required min={form.checkIn || today}
                      value={form.checkOut} onChange={e => setForm({...form, checkOut: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Guests*</label>
                    <select
                      value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    >
                      <option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#17211D]">Your Requirement</label>
                    <textarea 
                      placeholder="Write your requirement..."
                      rows={3}
                      value={form.requirement} onChange={e => setForm({...form, requirement: e.target.value})}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-[#06472F] hover:bg-[#043321] text-white font-bold py-3 rounded-xl text-[11px] sm:text-xs transition-colors shadow-sm tracking-wide"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                    </button>
                    <p className="text-center text-[9px] font-medium text-[#66716C] mt-3 leading-snug">
                      This is an enquiry form.<br/>It does not confirm any booking.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Our Role Disclaimer Card */}
            <div className="border border-[#DCE4DF] rounded-2xl bg-[#F7F9F7] p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-[#075B3A]" />
                <h3 className="font-bold text-[#17211D] text-[14px]">Our Role</h3>
              </div>
              <div className="space-y-3 text-[11px] text-[#66716C] leading-relaxed">
                <p>
                  Valley City Stay Hub is operated by Vidhi Tour & Travel, an independent travel agency.
                </p>
                <p>
                  We provide general travel information and enquiry assistance for hotels, resorts, villas and local travel experiences.
                </p>
                <p className="font-semibold text-[#17211D]">
                  We are not the owner, operator or official representative of the property displayed on this page unless explicitly stated.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal Popup Overlay */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl border border-[#DCE4DF] p-5 shadow-2xl w-full max-w-[420px] mx-3 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#DCE4DF] pb-3 mb-4">
              <div>
                <h3 className="text-[#17211D] font-extrabold text-sm sm:text-base leading-tight">Request Availability</h3>
                <p className="text-[#075B3A] text-xs font-semibold mt-0.5">{selectedRoom}</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>

            {modalSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-[#075B3A]" />
                </div>
                <h3 className="text-base font-bold text-[#17211D] mb-2">Request Submitted</h3>
                <p className="text-[#66716C] text-xs sm:text-sm leading-relaxed">
                  Thank you! Our travel team will check deals &amp; availability for <strong>{selectedRoom}</strong> and contact you shortly.
                </p>
                <button onClick={() => setIsModalOpen(false)} className="mt-6 px-5 py-2.5 bg-[#075B3A] hover:bg-[#06472F] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors">
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <CalendarDays size={11} /> Check-in Date
                  </label>
                  <input type="date" required min={today} value={modalForm.checkIn} onChange={e => setModalForm({...modalForm, checkIn: e.target.value})} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <CalendarDays size={11} /> Check-out Date
                  </label>
                  <input type="date" required min={modalForm.checkIn || today} value={modalForm.checkOut} onChange={e => setModalForm({...modalForm, checkOut: e.target.value})} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Users size={11} /> Guests
                  </label>
                  <select value={modalForm.guests} onChange={e => setModalForm({...modalForm, guests: e.target.value})} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A]">
                    <option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <User size={11} /> Your Name
                  </label>
                  <input type="text" required placeholder="Enter your name" value={modalForm.name} onChange={e => setModalForm({...modalForm, name: e.target.value})} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                </div>

                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Phone size={11} /> Mobile Number
                  </label>
                  <input type="tel" required placeholder="Enter mobile number" value={modalForm.phone} onChange={e => setModalForm({...modalForm, phone: e.target.value})} className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A]" />
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isModalSubmitting} className="w-full bg-[#075B3A] hover:bg-[#06472F] text-white font-bold py-3 rounded-xl text-xs transition-colors">
                    {isModalSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  </button>
                  <p className="text-center text-[10px] text-[#66716C] leading-snug px-1 pt-1.5 border-t border-[#DCE4DF] mt-3">
                    Submitting this form is an enquiry only. It does not confirm any booking.
                  </p>
                </div>
              </form>
            )}
          </div>
        </>
      )}

      {/* Sticky Mobile Bar */}
      <div className="fixed bottom-[58px] left-0 right-0 z-40 bg-white border-t border-[#DCE4DF] px-4 py-3 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="text-left">
          <div className="text-[#17211D] font-bold text-sm">Need Help Booking?</div>
          <div className="text-[#66716C] text-[10px] mt-0.5">Contact us for the best deals</div>
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
