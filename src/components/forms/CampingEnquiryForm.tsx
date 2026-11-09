"use client";
import React, { useState } from 'react';
import { Send, CheckCircle, Lock } from 'lucide-react';

export default function CampingEnquiryForm() {
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
    data.type = "Camping Enquiry";

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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Phone Number*</label>
        <input name="phone" type="tel" required placeholder="Enter 10 digit mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Email Address</label>
        <input name="email" type="email" placeholder="Enter your email address" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Preferred Date</label>
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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Trip Type</label>
        <select name="tripType" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select trip type</option>
          <option value="Family Trip">Family Trip</option>
          <option value="Couple">Couple</option>
          <option value="Friends Group">Friends Group</option>
          <option value="Corporate Outing">Corporate Outing</option>
          <option value="Solo Trip">Solo Trip</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Interests / Activities</label>
        <select name="interests" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select your interests</option>
          <option value="Desert Dune Camps (Sam & Khuri)">Desert Dune Camps (Sam &amp; Khuri)</option>
          <option value="Luxury Tented Stays (Pushkar)">Luxury Tented Stays (Pushkar)</option>
          <option value="Jungle Camps (Ranthambore)">Jungle Camps (Ranthambore)</option>
          <option value="Hill & Lake Camps (Mount Abu)">Hill &amp; Lake Camps (Mount Abu)</option>
          <option value="Star Gazing & Folk Music">Star Gazing &amp; Folk Music</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Any Special Requirement?</label>
        <textarea name="message" placeholder="Tell us about your preferences..." rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
      </div>

      <button type="submit" disabled={loading} className="w-full bg-[#06472F] hover:bg-[#053d28] disabled:opacity-50 text-white font-bold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
        <Send size={16} />
        {loading ? 'SENDING...' : 'SEND ENQUIRY'}
      </button>

      <div className="flex flex-col items-center justify-center gap-1 mt-4">
        <div className="flex items-center gap-1.5 text-[#075B3A]">
          <Lock size={12} strokeWidth={2.5} />
          <span className="text-[10px] font-bold">Your information is safe with us.</span>
        </div>
        <span className="text-[10px] text-[#66716C]">We never share your details.</span>
      </div>
    </form>
  );
}
