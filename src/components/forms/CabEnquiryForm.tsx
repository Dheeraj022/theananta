"use client";
import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Car, Users, Send, Lock } from 'lucide-react';

export default function CabEnquiryForm() {
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
    data.type = "Cab & Transfer Enquiry";

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
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <MapPin size={14} className="text-[#075B3A]" /> Pick-up Location
        </label>
        <input name="pickUpLocation" type="text" placeholder="Enter pick-up location" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <MapPin size={14} className="text-[#075B3A]" /> Drop Location
        </label>
        <input name="dropLocation" type="text" placeholder="Enter drop location" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <Calendar size={14} className="text-[#075B3A]" /> Travel Date
        </label>
        <div className="relative">
          <input name="travelDate" type="date" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <Clock size={14} className="text-[#075B3A]" /> Travel Time
        </label>
        <div className="relative">
          <input name="travelTime" type="time" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <Car size={14} className="text-[#075B3A]" /> Vehicle Type
        </label>
        <select name="vehicleType" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select vehicle type</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Innova">Innova</option>
          <option value="Tempo Traveller">Tempo Traveller</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5 flex items-center gap-1.5">
          <Users size={14} className="text-[#075B3A]" /> Number of Passengers
        </label>
        <select name="passengers" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
          <option value="">Select number of passengers</option>
          <option value="1-2">1-2</option>
          <option value="3-4">3-4</option>
          <option value="5-7">5-7</option>
          <option value="8-12">8-12</option>
          <option value="12+">12+</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-2">Trip Type</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-[#17211D]">
            <input type="radio" name="tripType" value="One Way" className="accent-[#075B3A]" /> One Way
          </label>
          <label className="flex items-center gap-2 text-xs text-[#17211D]">
            <input type="radio" name="tripType" value="Round Trip" className="accent-[#075B3A]" /> Round Trip
          </label>
          <label className="flex items-center gap-2 text-xs text-[#17211D]">
            <input type="radio" name="tripType" value="Local / Sightseeing" className="accent-[#075B3A]" /> Local / Sightseeing
          </label>
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Name*</label>
        <input name="name" type="text" required placeholder="Enter your name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-bold text-[#17211D] mb-1.5">Phone Number*</label>
        <input name="phone" type="tel" required placeholder="Enter 10 digit mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
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
