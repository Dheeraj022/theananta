"use client";
import React, { useState } from 'react';
import { Send, CheckCircle, Info } from 'lucide-react';

interface Tour {
  id: string;
  name: string;
  // ... other fields
}

export default function TourEnquiryForm({ tours }: { tours: Tour[] }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.type = "Local Tour Enquiry";

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

  return (
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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Full Name*</label>
        <input name="name" type="text" required placeholder="Enter your full name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Preferred Travel Date</label>
        <div className="relative">
          <input name="travelDate" type="date" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Number of People</label>
        <select name="guests" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select number of people</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
          <option value="6-10">6 to 10 People</option>
          <option value="10+">More than 10 People</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Tour Preference</label>
        <select name="tourPreference" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select tour preference</option>
          {tours.map((tour) => (
            <option key={tour.id} value={tour.name}>
              {tour.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Pickup / Starting Location</label>
        <input name="pickUpLocation" type="text" placeholder="Enter location" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Requirement</label>
        <textarea name="message" placeholder="Tell us what you are looking for..." rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full bg-[#06472F] hover:bg-[#053d28] disabled:opacity-50 text-white font-bold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
        <Send size={16} />
        {loading ? 'SENDING...' : 'SEND ENQUIRY'}
      </button>

      <p className="text-center text-[10px] text-[#66716C] mt-4 flex items-center justify-center gap-1.5">
        <Info size={12} />
        This is an enquiry form. <br className="hidden sm:block md:hidden"/>It does not confirm any booking.
      </p>
    </form>
  );
}
