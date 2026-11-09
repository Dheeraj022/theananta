'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import { PHONE_NUMBER, EMAIL, HOURS } from '@/lib/constants';

export default function ContactClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'Contact Us Form' }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to submit enquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#F7F9F7] min-h-[calc(100vh-130px)] py-8 sm:py-12">
        <div className="mx-auto w-full max-w-[1000px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#DCE4DF] rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

            {/* Left Column - Contact Info */}
            <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#DCE4DF] bg-[#FAFCFB]">
              <h2 className="text-sm sm:text-[15px] font-bold text-[#17211D] mb-1.5">Get In Touch With Us</h2>
              <p className="text-[#66716C] text-xs leading-relaxed mb-8">
                We are here to help you with travel information<br className="hidden lg:block" /> and enquiry assistance.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4 text-[#17211D] group">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0 group-hover:bg-[#075B3A] transition-colors duration-300">
                    <Phone size={16} className="text-[#075B3A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-xs sm:text-[13px]">{PHONE_NUMBER}</span>
                </div>
                <div className="flex items-center gap-4 text-[#17211D] group">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0 group-hover:bg-[#075B3A] transition-colors duration-300">
                    <MessageCircle size={16} className="text-[#075B3A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-xs sm:text-[13px]">{PHONE_NUMBER}</span>
                </div>
                <div className="flex items-center gap-4 text-[#17211D] group">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0 group-hover:bg-[#075B3A] transition-colors duration-300">
                    <Mail size={16} className="text-[#075B3A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-xs sm:text-[13px]">{EMAIL}</span>
                </div>
                <div className="flex items-start gap-4 text-[#17211D] group pt-1">
                  <div className="w-10 h-10 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0 group-hover:bg-[#075B3A] transition-colors duration-300">
                    <MapPin size={16} className="text-[#075B3A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-[11px] sm:text-xs leading-snug mt-1 text-[#66716C]">
                    <span className="font-bold text-[#17211D] text-xs sm:text-[13px] block mb-0.5">Office Address</span>
                    Blue Tulip CHS Ltd, Shop No - 17,<br />
                    Blue Empire Complex, Off Link Road,<br />
                    Mahavir Nagar, Kandiwali W, Mumbai,<br />
                    Mumbai Suburban, Maharashtra, 400067
                  </span>
                </div>
              </div>

              <div className="mt-10 p-5 bg-[#EAF5EF] rounded-xl border border-[#DCE4DF]">
                <h3 className="font-bold text-[#075B3A] text-xs sm:text-[13px] mb-1">Business Hours</h3>
                <p className="text-[#17211D] font-bold text-xs sm:text-[13px]">{HOURS}</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-sm sm:text-[15px] font-bold text-[#17211D] mb-1.5">Send Us an Enquiry</h2>
              <p className="text-[#66716C] text-xs leading-relaxed mb-6 sm:mb-8">
                Fill in the details and our team will<br className="hidden lg:block" /> get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter mobile number"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide sm:mt-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your requirement..."
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-2">
                  <div className="sm:w-[130px] shrink-0" />
                  <div className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#075B3A] hover:bg-[#06472F] text-white font-bold text-xs rounded-xl shadow-sm transition-colors uppercase tracking-wider"
                    >
                      {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
                    </button>
                    {submitted && (
                      <p className="text-[#075B3A] text-xs font-semibold mt-2">
                        Thank you! We have received your enquiry.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
