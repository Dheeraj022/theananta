'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, Phone, CalendarDays, Users } from 'lucide-react';

export default function HeroSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', phone: '', checkIn: '', checkOut: '', guests: '2 Adults' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('hero-enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero/lonavala-hero.jpg"
        alt="Lonavala mountains and valley"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Left: Hero Copy */}
          <div className="flex-1 w-full lg:max-w-xl text-center lg:text-left">
            <p className="text-white font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">
              EXPLORE LONAVALA
            </p>
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] mb-6">
              Your Guide to Stays, Tours &amp; Experiences
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-2">
              Get information about hotels, villas, local tours, camping and more in Lonavala.
            </p>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-8">
              We are here to assist you with your travel plans.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#075B3A] hover:bg-[#06472F] text-white font-bold rounded-xl transition-colors border border-transparent shadow-sm"
              >
                SEND ENQUIRY
              </button>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-[#075B3A] font-bold rounded-xl transition-colors border border-transparent shadow-sm flex items-center justify-center gap-2"
              >
                {/* Custom WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Form Card */}
          <div id="hero-enquiry-form" className="w-full max-w-md shrink-0">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#075B3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#17211D] mb-2">Request Submitted</h3>
                  <p className="text-[#66716C] text-sm leading-relaxed">
                    Thank you! Our travel team will get in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-[17px] font-bold text-[#17211D] mb-1.5">Need Travel Assistance?</h3>
                    <p className="text-xs text-[#66716C] px-2 leading-relaxed">
                      Share your travel requirements and our team will get in touch.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User size={15} className="text-[#66716C]" />
                      </div>
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name" 
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-[#DCE4DF] rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Phone size={15} className="text-[#66716C]" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        placeholder="Mobile Number" 
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-[#DCE4DF] rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400"
                      />
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <CalendarDays size={15} className="text-[#66716C]" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Check-in Date" 
                          onFocus={(e) => e.target.type = 'date'}
                          onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                          min={today}
                          value={form.checkIn}
                          onChange={e => setForm({...form, checkIn: e.target.value})}
                          className="w-full pl-10 pr-2 py-3 border border-[#DCE4DF] rounded-xl text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent text-[#66716C]"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <CalendarDays size={15} className="text-[#66716C]" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Check-out Date" 
                          onFocus={(e) => e.target.type = 'date'}
                          onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                          min={form.checkIn || today}
                          value={form.checkOut}
                          onChange={e => setForm({...form, checkOut: e.target.value})}
                          className="w-full pl-10 pr-2 py-3 border border-[#DCE4DF] rounded-xl text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent text-[#66716C]"
                        />
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Users size={15} className="text-[#66716C]" />
                      </div>
                      <select
                        value={form.guests}
                        onChange={e => setForm({...form, guests: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border border-[#DCE4DF] rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent text-[#17211D] bg-white appearance-none"
                      >
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                        <option>5+ Adults</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#06472F] hover:bg-[#043321] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-sm tracking-wide"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                    </button>
                    <p className="text-center text-[10px] font-medium text-[#66716C] mt-4 leading-snug px-4">
                      This is an enquiry form.<br/>It does not confirm any booking.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
