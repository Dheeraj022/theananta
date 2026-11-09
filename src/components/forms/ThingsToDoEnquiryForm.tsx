"use client";
import React, { useState } from 'react';
import { Send, Lock, ClipboardList, MapPin, Calendar, Users, Footprints } from 'lucide-react';

export default function ThingsToDoEnquiryForm() {
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
    data.type = "Things To Do Enquiry";

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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Name*</label>
        <input name="name" type="text" required placeholder="Enter your full name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Phone Number*</label>
        <input name="phone" type="tel" required placeholder="Enter 10 digit mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <ClipboardList size={14} className="text-[#17211D]" /> What are you interested in?
        </label>
        <select name="interests" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select activities / interests</option>
          <option value="Adventure Activities">Adventure Activities</option>
          <option value="Nature & Scenic Spots">Nature & Scenic Spots</option>
          <option value="Heritage & Culture">Heritage & Culture</option>
          <option value="Relaxation & Leisure">Relaxation & Leisure</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <MapPin size={14} className="text-[#17211D]" /> Preferred Location
        </label>
        <select name="preferredLocation" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select location / area</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Udaipur">Udaipur</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Jaisalmer">Jaisalmer</option>
          <option value="Pushkar">Pushkar</option>
          <option value="Ajabgarh / Sariska">Ajabgarh / Sariska</option>
          <option value="Ranthambore">Ranthambore</option>
          <option value="Mount Abu">Mount Abu</option>
          <option value="Bikaner">Bikaner</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <MapPin size={14} className="text-[#17211D]" /> Preferred Date
        </label>
        <div className="relative">
          <input name="travelDate" type="date" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <Users size={14} className="text-[#17211D]" /> Number of People
        </label>
        <select name="guests" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select number of people</option>
          <option value="1-2">1-2</option>
          <option value="3-4">3-4</option>
          <option value="5-7">5-7</option>
          <option value="8-12">8-12</option>
          <option value="12+">12+</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-2 flex items-center gap-1.5">
          <Footprints size={14} className="text-[#17211D]" /> Travel Type
        </label>
        <div className="flex items-center gap-2 flex-wrap">
          <label className="flex items-center text-[11px] font-bold text-[#17211D] border border-[#DCE4DF] rounded-full px-3 py-1 cursor-pointer hover:border-[#075B3A] transition-colors">
            <input type="radio" name="travelType" value="Family" className="hidden" /> Family
          </label>
          <label className="flex items-center text-[11px] font-bold text-[#17211D] border border-[#DCE4DF] rounded-full px-3 py-1 cursor-pointer hover:border-[#075B3A] transition-colors">
            <input type="radio" name="travelType" value="Couple" className="hidden" /> Couple
          </label>
          <label className="flex items-center text-[11px] font-bold text-[#17211D] border border-[#DCE4DF] rounded-full px-3 py-1 cursor-pointer hover:border-[#075B3A] transition-colors">
            <input type="radio" name="travelType" value="Friends" className="hidden" /> Friends
          </label>
          <label className="flex items-center text-[11px] font-bold text-[#17211D] border border-[#DCE4DF] rounded-full px-3 py-1 cursor-pointer hover:border-[#075B3A] transition-colors">
            <input type="radio" name="travelType" value="Group" className="hidden" /> Group
          </label>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Any Special Request?</label>
        <textarea name="message" placeholder="Tell us anything (optional)" rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
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
