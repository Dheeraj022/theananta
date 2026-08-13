'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, CheckCircle, ChevronRight, Compass, CalendarDays, Users, Phone, User, Info, Waves, Utensils, Wifi, Headphones, UserCheck, Car, Fuel, Send, X
} from 'lucide-react';
import { BRAND_NAME, BRAND_OPERATOR } from '@/lib/constants';

interface Amenity {
  label: string;
  icon: string;
}

interface OptionItem {
  name: string;
  description: string;
}

interface ListingDetailLayoutProps {
  title: string;
  categoryLabel: string;
  categoryHref: string;
  location: string;
  description: string;
  about: string;
  mainImage: string;
  images: string[];
  amenities: Amenity[];
  options: OptionItem[];
  optionSectionTitle: string;
  optionSectionSubtitle: string;
  type: 'hotel' | 'villa' | 'tour';
  priceLabel: string;
}

// Icon mapper helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Waves': return <Waves size={20} className="text-[#075B3A]" />;
    case 'Utensils': return <Utensils size={20} className="text-[#075B3A]" />;
    case 'Wifi': return <Wifi size={20} className="text-[#075B3A]" />;
    case 'Headphones': return <Headphones size={20} className="text-[#075B3A]" />;
    case 'UserCheck': return <UserCheck size={20} className="text-[#075B3A]" />;
    case 'Car': return <Car size={20} className="text-[#075B3A]" />;
    case 'Fuel': return <Fuel size={20} className="text-[#075B3A]" />;
    case 'MapPin': return <MapPin size={20} className="text-[#075B3A]" />;
    case 'CheckCircle': return <CheckCircle size={20} className="text-[#075B3A]" />;
    default: return <Compass size={20} className="text-[#075B3A]" />;
  }
};

export default function ListingDetailLayout({
  title,
  categoryLabel,
  categoryHref,
  location,
  description,
  about,
  mainImage,
  images,
  amenities,
  options,
  optionSectionTitle,
  optionSectionSubtitle,
  type,
  priceLabel,
}: ListingDetailLayoutProps) {
  const [activeImage, setActiveImage] = useState(mainImage);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [modalForm, setModalForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    name: '',
    phone: '',
  });
  const [modalErrors, setModalErrors] = useState<Record<string, string>>({});
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value });
    setModalErrors({ ...modalErrors, [e.target.name]: '' });
  };

  const validateModal = () => {
    const errs: Record<string, string> = {};
    if (!modalForm.checkIn) errs.checkIn = type === 'tour' ? 'Select travel date' : 'Select check-in date';
    if (type !== 'tour' && !modalForm.checkOut) errs.checkOut = 'Select check-out date';
    if (type !== 'tour' && modalForm.checkIn && modalForm.checkOut && modalForm.checkOut <= modalForm.checkIn) {
      errs.checkOut = 'Check-out must be after check-in';
    }
    if (!modalForm.name.trim()) errs.name = 'Enter your name';
    if (!modalForm.phone.trim()) errs.phone = 'Enter mobile number';
    setModalErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateModal()) return;
    
    setIsModalSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...modalForm, listingName: title, type: type, service: selectedOption }),
      });
      if (response.ok) {
        setModalSubmitted(true);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsModalSubmitting(false);
    }
  };

  const handleCheckAvailability = (optionName: string) => {
    setSelectedOption(optionName);
    setIsModalOpen(true);
    setModalSubmitted(false);
    setModalErrors({});
    setModalForm({
      checkIn: '',
      checkOut: '',
      guests: '2 Adults',
      name: '',
      phone: '',
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.checkIn) errs.checkIn = type === 'tour' ? 'Select travel date' : 'Select check-in date';
    if (type !== 'tour' && !form.checkOut) errs.checkOut = 'Select check-out date';
    if (type !== 'tour' && form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      errs.checkOut = 'Check-out must be after check-in';
    }
    if (!form.name.trim()) errs.name = 'Enter your name';
    if (!form.phone.trim()) errs.phone = 'Enter mobile number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, listingName: title, type: type, service: 'General Enquiry' }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again.');
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
    <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-4 sm:py-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-[#66716C] mb-4 sm:mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#075B3A] transition-colors">Home</Link>
        <ChevronRight size={10} />
        <Link href={categoryHref} className="hover:text-[#075B3A] transition-colors">{categoryLabel}</Link>
        <ChevronRight size={10} />
        <span className="text-[#17211D] font-medium truncate">{title}</span>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Left Side: Detail Contents */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Gallery Block */}
          <div>
            <div className="relative w-full h-[240px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={activeImage}
                alt={`${title} main view`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-[60px] sm:h-[80px] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-[#075B3A] scale-[0.98]' : 'border-transparent hover:border-gray-300'
                  }`}
                  aria-label={`View gallery image ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${title} gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title block */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17211D] leading-tight mb-2">
              {title}
            </h1>
            <div className="flex items-center gap-1.5 text-[#66716C] text-sm">
              <MapPin size={15} strokeWidth={2} className="text-[#075B3A]" />
              <span>{location}</span>
            </div>
            <p className="text-[#66716C] text-sm mt-4 leading-relaxed">
              {description}
            </p>
            <div className="mt-3 text-xs sm:text-sm text-[#17211D] font-semibold bg-[#F7F9F7] border border-[#DCE4DF] rounded-xl px-3 py-2.5">
              Note: <span className="font-normal text-[#66716C]">Information shown here is for general guidance only.</span>
            </div>
          </div>

          <hr className="border-[#DCE4DF]" />

          {/* About the property */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#17211D] uppercase tracking-wider mb-2">
              {type === 'tour' ? 'About The Tour' : 'About The Property'}
            </h2>
            <p className="text-[#66716C] text-sm leading-relaxed">
              {about}
            </p>
          </div>

          <hr className="border-[#DCE4DF]" />

          {/* Amenities Grid */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#17211D] uppercase tracking-wider mb-3">
              {type === 'tour' ? 'Tour Highlights' : 'Property Amenities'}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 border border-[#DCE4DF] rounded-2xl divide-x divide-[#DCE4DF] bg-white overflow-hidden">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#EAF5EF] flex items-center justify-center mb-2 shrink-0">
                    {getIcon(amenity.icon)}
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#17211D] font-bold leading-tight">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-[#DCE4DF]" />

          {/* Rooms Grid / Plan Grid */}
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#17211D] uppercase tracking-wider mb-1">
              {optionSectionTitle}
            </h2>
            <p className="text-[#66716C] text-xs sm:text-sm mb-4">
              {optionSectionSubtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {options.map((opt) => (
                <div key={opt.name} className="border border-[#DCE4DF] rounded-2xl p-4 bg-white flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-extrabold text-sm text-[#17211D] mb-1.5">{opt.name}</h3>
                    <p className="text-[#66716C] text-xs leading-relaxed mb-4">{opt.description}</p>
                  </div>
                  {type !== 'tour' && (
                    <button
                      onClick={() => handleCheckAvailability(opt.name)}
                      className="w-full text-center py-2.5 border border-[#075B3A] text-[#075B3A] text-xs font-bold rounded-xl hover:bg-[#075B3A] hover:text-white transition-colors cursor-pointer"
                    >
                      CHECK AVAILABILITY
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Non-Affiliation notice */}
          <div className="flex items-start gap-3 bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl p-4 mt-6">
            <Info size={18} className="text-[#075B3A] shrink-0 mt-0.5" />
            <p className="text-[#17211D] text-xs leading-relaxed">
              We are an independent travel agency. We are not the official website or representative of this property. Information is shared for travel assistance &amp; enquiry purposes only.
            </p>
          </div>

        </div>

        {/* Right Side: Request Card (Sticky on desktop) */}
        <div className="lg:col-span-1">
          <div
            id="enquiry-form-card"
            className="lg:sticky lg:top-24 bg-white rounded-2xl border border-[#DCE4DF] p-4 sm:p-5 shadow-lg space-y-4"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-[#075B3A]" />
                </div>
                <h3 className="text-base font-bold text-[#17211D] mb-2">Request Submitted</h3>
                <p className="text-[#66716C] text-xs sm:text-sm leading-relaxed">
                  Thank you! Our travel team will check deals &amp; availability for {title} and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="border-b border-[#DCE4DF] pb-3 mb-2">
                  <h3 className="text-[#17211D] font-extrabold text-sm sm:text-base leading-tight">Request Availability</h3>
                  <p className="text-[#66716C] text-xs mt-0.5">For Best Deals &amp; Assistance</p>
                </div>

                {/* Check in */}
                <div className="space-y-1">
                  <label htmlFor="form-check-in" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <CalendarDays size={11} />
                    {type === 'tour' ? 'Travel Date' : 'Check-in Date'}
                  </label>
                  <div className="relative">
                    <input
                      id="form-check-in"
                      name="checkIn"
                      type="date"
                      value={form.checkIn}
                      min={today}
                      onChange={handleInputChange}
                      className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                        errors.checkIn ? 'border-red-400' : 'border-[#DCE4DF]'
                      }`}
                    />
                  </div>
                  {errors.checkIn && <p className="text-red-500 text-[10px]">{errors.checkIn}</p>}
                </div>

                {/* Check out */}
                {type !== 'tour' && (
                  <div className="space-y-1">
                    <label htmlFor="form-check-out" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                      <CalendarDays size={11} />
                      Check-out Date
                    </label>
                    <div className="relative">
                      <input
                        id="form-check-out"
                        name="checkOut"
                        type="date"
                        value={form.checkOut}
                        min={form.checkIn || today}
                        onChange={handleInputChange}
                        className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                          errors.checkOut ? 'border-red-400' : 'border-[#DCE4DF]'
                        }`}
                      />
                    </div>
                    {errors.checkOut && <p className="text-red-500 text-[10px]">{errors.checkOut}</p>}
                  </div>
                )}

                {/* Guests */}
                <div className="space-y-1">
                  <label htmlFor="form-guests" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Users size={11} />
                    Guests
                  </label>
                  <select
                    id="form-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleInputChange}
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-xs text-[#17211D] bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all"
                  >
                    {['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="form-name" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <User size={11} />
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-400' : 'border-[#DCE4DF]'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[10px]">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="form-phone" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Phone size={11} />
                    Mobile Number
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-400' : 'border-[#DCE4DF]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#075B3A] hover:bg-[#06472F] text-white font-semibold rounded-xl py-3 text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>

                <p className="text-center text-[10px] text-[#66716C] leading-snug px-1 pt-1.5 border-t border-[#DCE4DF]">
                  Submitting this form is an enquiry only. It does not confirm any booking.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Modal Popup Overlay */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Enquiry for ${selectedOption}`}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl border border-[#DCE4DF] p-5 shadow-2xl w-full max-w-[420px] mx-3 max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#DCE4DF] pb-3 mb-4">
              <div>
                <h3 className="text-[#17211D] font-extrabold text-sm sm:text-base leading-tight">Request Availability</h3>
                <p className="text-[#075B3A] text-xs font-semibold mt-0.5">{selectedOption}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            {modalSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-[#075B3A]" />
                </div>
                <h3 className="text-base font-bold text-[#17211D] mb-2">Request Submitted</h3>
                <p className="text-[#66716C] text-xs sm:text-sm leading-relaxed">
                  Thank you! Our travel team will check deals &amp; availability for <strong>{selectedOption}</strong> at <strong>{title}</strong> and contact you shortly.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-6 px-5 py-2.5 bg-[#075B3A] hover:bg-[#06472F] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4" noValidate>
                {/* Check in */}
                <div className="space-y-1">
                  <label htmlFor="modal-check-in" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <CalendarDays size={11} />
                    {type === 'tour' ? 'Travel Date' : 'Check-in Date'}
                  </label>
                  <input
                    id="modal-check-in"
                    name="checkIn"
                    type="date"
                    value={modalForm.checkIn}
                    min={today}
                    onChange={handleModalInputChange}
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                      modalErrors.checkIn ? 'border-red-400' : 'border-[#DCE4DF]'
                    }`}
                  />
                  {modalErrors.checkIn && <p className="text-red-500 text-[10px]">{modalErrors.checkIn}</p>}
                </div>

                {/* Check out */}
                {type !== 'tour' && (
                  <div className="space-y-1">
                    <label htmlFor="modal-check-out" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                      <CalendarDays size={11} />
                      Check-out Date
                    </label>
                    <input
                      id="modal-check-out"
                      name="checkOut"
                      type="date"
                      value={modalForm.checkOut}
                      min={modalForm.checkIn || today}
                      onChange={handleModalInputChange}
                      className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                        modalErrors.checkOut ? 'border-red-400' : 'border-[#DCE4DF]'
                      }`}
                    />
                    {modalErrors.checkOut && <p className="text-red-500 text-[10px]">{modalErrors.checkOut}</p>}
                  </div>
                )}

                {/* Guests */}
                <div className="space-y-1">
                  <label htmlFor="modal-guests" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Users size={11} />
                    Guests
                  </label>
                  <select
                    id="modal-guests"
                    name="guests"
                    value={modalForm.guests}
                    onChange={handleModalInputChange}
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-xs text-[#17211D] bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all"
                  >
                    {['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="modal-name" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <User size={11} />
                    Your Name
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    value={modalForm.name}
                    onChange={handleModalInputChange}
                    placeholder="Enter your name"
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                      modalErrors.name ? 'border-red-400' : 'border-[#DCE4DF]'
                    }`}
                  />
                  {modalErrors.name && <p className="text-red-500 text-[10px]">{modalErrors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label htmlFor="modal-phone" className="flex items-center gap-1.5 text-[11px] font-bold text-[#66716C] uppercase tracking-wide">
                    <Phone size={11} />
                    Mobile Number
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    value={modalForm.phone}
                    onChange={handleModalInputChange}
                    placeholder="Enter mobile number"
                    className={`w-full border rounded-xl px-3 py-2.5 text-xs text-[#17211D] focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all ${
                      modalErrors.phone ? 'border-red-400' : 'border-[#DCE4DF]'
                    }`}
                  />
                  {modalErrors.phone && <p className="text-red-500 text-[10px]">{modalErrors.phone}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isModalSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#075B3A] hover:bg-[#06472F] text-white font-semibold rounded-xl py-3 text-xs sm:text-sm transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  {isModalSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                </button>

                <p className="text-center text-[10px] text-[#66716C] leading-snug px-1 pt-1.5 border-t border-[#DCE4DF]">
                  Submitting this form is an enquiry only. It does not confirm any booking.
                </p>
              </form>
            )}
          </div>
        </>
      )}
      {/* Sticky Mobile Booking Bar */}
      <div className="fixed bottom-[58px] left-0 right-0 z-45 bg-white border-t border-[#DCE4DF] px-4 py-2.5 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="text-left">
          <div className="text-[#66716C] text-[9px] uppercase font-bold tracking-wider leading-none">Price Est.</div>
          <div className="text-[#075B3A] font-black text-xs sm:text-sm mt-1 leading-none">{priceLabel}</div>
        </div>
        <button
          onClick={scrollToEnquiry}
          className="bg-[#075B3A] hover:bg-[#06472F] text-white px-4.5 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer uppercase tracking-wide"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}
