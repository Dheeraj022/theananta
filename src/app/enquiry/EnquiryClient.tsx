'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { RAJASTHAN_LOCATIONS } from '@/lib/constants';
import Footer from '@/components/Footer';

const serviceOptions = [
  'Hotels & Resorts',
  'Villas & Havelis',
  'Local Tours',
  'Desert Camping',
  'Cabs & Transfers',
  'Other Experiences',
];

export default function EnquiryClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Jaipur',
    travelDate: '',
    guests: '2',
    service: 'Hotels & Resorts',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-[calc(100vh-140px)] py-8 sm:py-12 bg-[#F7F9F7]">
        {submitted ? (
          <div className="mx-auto w-full max-w-[500px] px-3 sm:px-5 py-16 text-center bg-white rounded-2xl border border-[#DCE4DF] shadow-sm">
            <div className="w-16 h-16 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} strokeWidth={1.8} className="text-[#075B3A]" />
            </div>
            <h1 className="text-xl font-bold text-[#17211D] mb-2">Enquiry Sent!</h1>
            <p className="text-[#66716C] text-sm">Thank you. Our travel team will contact you shortly.</p>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-[650px] px-4">
            <div className="bg-white rounded-2xl border border-[#DCE4DF] shadow-sm p-6 sm:p-10">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#17211D] mb-1">Send an Enquiry</h1>
                <p className="text-[#66716C] text-sm">Tell us your requirements and we&apos;ll get back to you with information and assistance</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enq-name" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input id="enq-name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="enq-phone" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Phone Number *</label>
                    <input id="enq-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="+91 88937 97155" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enq-email" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Email Address</label>
                    <input id="enq-email" name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="enq-location" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Destination *</label>
                    <select id="enq-location" name="location" value={form.location} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent bg-white">
                      {RAJASTHAN_LOCATIONS.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="enq-date" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Travel Date *</label>
                    <input id="enq-date" name="travelDate" type="date" required value={form.travelDate} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="enq-guests" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Number of Guests *</label>
                    <input id="enq-guests" name="guests" type="number" min="1" required value={form.guests} onChange={handleChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="enq-service" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Service Type</label>
                  <select id="enq-service" name="service" value={form.service} onChange={handleChange}
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent bg-white">
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="enq-message" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Message / Requirements</label>
                  <textarea id="enq-message" name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent resize-none" placeholder="Tell us what you're looking for..." />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#075B3A] hover:bg-[#06472F] text-white font-semibold rounded-xl py-3 text-sm transition-colors duration-150">
                  <Send size={16} strokeWidth={2} />
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

