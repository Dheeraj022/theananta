'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const serviceOptions = ['Hotel', 'Resort', 'Villa', 'Local Tour', 'Sightseeing', 'Other'];

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    guests: '2',
    service: 'Hotel',
    budget: '',
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
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-[500px] px-3 sm:px-5 py-16 text-center">
        <div className="w-16 h-16 bg-[#EAF5EF] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} strokeWidth={1.8} className="text-[#075B3A]" />
        </div>
        <h1 className="text-xl font-bold text-[#17211D] mb-2">Enquiry Sent!</h1>
        <p className="text-[#66716C] text-sm">Thank you. Our travel team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[600px] px-3 sm:px-5 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#17211D] mb-1">Send Enquiry</h1>
        <p className="text-[#66716C] text-sm">Tell us your requirements and we&apos;ll get back to you</p>
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
              className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div>
          <label htmlFor="enq-email" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Email Address</label>
          <input id="enq-email" name="email" type="email" value={form.email} onChange={handleChange}
            className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="your@email.com" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="enq-service" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Service Required *</label>
            <select id="enq-service" name="service" required value={form.service} onChange={handleChange}
              className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent">
              {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="enq-budget" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Budget (₹)</label>
            <input id="enq-budget" name="budget" type="text" value={form.budget} onChange={handleChange}
              className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent" placeholder="e.g. 15,000 per night" />
          </div>
        </div>

        <div>
          <label htmlFor="enq-message" className="block text-xs font-semibold text-[#66716C] uppercase tracking-wide mb-1.5">Message</label>
          <textarea id="enq-message" name="message" rows={4} value={form.message} onChange={handleChange}
            className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent resize-none"
            placeholder="Tell us about your travel requirements..." />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          id="send-enquiry-button"
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#075B3A] text-white font-semibold rounded-xl hover:bg-[#06472F] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send size={16} strokeWidth={2} />
          {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
        </button>
      </form>
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </div>
  );
}
