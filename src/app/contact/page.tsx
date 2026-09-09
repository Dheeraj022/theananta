'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import { PHONE_NUMBER } from '@/lib/constants';

export default function ContactPage() {
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
    } catch (error) {
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
                  <span className="font-bold text-xs sm:text-[13px]">info@lonavalagateway.com</span>
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
                <p className="text-[#17211D] font-bold text-xs sm:text-[13px]">Mon - Sun : 8:00 AM - 8:00 PM</p>
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
                    placeholder="Enter your name"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400 bg-[#F7F9F7] transition-all"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400 bg-[#F7F9F7] transition-all"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent placeholder:text-gray-400 bg-[#F7F9F7] transition-all"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                  <label className="sm:w-[130px] shrink-0 text-[11px] font-bold text-[#17211D] uppercase tracking-wide mt-3">How can we help?</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message..."
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-[11px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent resize-none placeholder:text-gray-400 bg-[#F7F9F7] transition-all"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#075B3A] hover:bg-[#06472F] text-white font-bold tracking-wide py-3.5 rounded-xl text-[11px] sm:text-xs transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SUBMITTING...' : submitted ? 'ENQUIRY SENT!' : 'SUBMIT ENQUIRY'}
                  </button>
                  <p className="text-center text-[10px] text-[#075B3A] font-medium mt-3 leading-tight opacity-80">
                    This is an enquiry form.<br />It does not confirm any booking.
                  </p>
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
