import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { PHONE_NUMBER } from '@/lib/constants';
import {
  Handshake, Info, Headset, Map, ShieldCheck,
  Target, Eye, MessageCircle, MapPin, Bell,
  Users, Gem, XCircle, Building2, Briefcase, ClipboardList, User, Phone, Mail, Globe, FileText, Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Lonavala Gateway',
  description: 'Learn about Lonavala Gateway, your independent travel agency providing genuine travel information and local assistance.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F7] pb-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex text-[13px] text-[#66716C] font-semibold mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-2">
            <li><Link href="/" className="hover:text-[#075B3A] transition-colors">Home</Link></li>
            <li><span className="text-[#DCE4DF]">/</span></li>
            <li className="text-[#17211D]">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-6 flex flex-col md:flex-row relative">
          <div className="p-8 md:p-12 lg:p-16 flex-1 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#075B3A] mb-2">ABOUT US</h1>
            <h2 className="text-lg md:text-xl font-bold text-[#17211D] mb-1">LONAVALA GATEWAY</h2>
            <h3 className="text-sm md:text-base font-bold text-[#17211D] mb-6">operated by VIDHI TOUR & TRAVEL</h3>
            <p className="text-[#17211D] text-sm md:text-base leading-relaxed max-w-xl font-medium">
              Lonavala Gateway is your independent travel agency providing genuine travel information, local assistance and enquiry support for hotels, villas, local tours, camping, cabs and experiences in and around Lonavala.
            </p>
          </div>
          <div className="hidden md:block w-1/2 absolute right-0 top-0 bottom-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <Image
              src="/images/hero/lonavala-hero.jpg"
              alt="Lonavala Landscape"
              fill
              className="object-cover object-right"
              priority
            />
          </div>
        </div>

        {/* 5 Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm flex flex-col items-center text-center">
            <Handshake size={32} className="text-[#075B3A] mb-3" />
            <h4 className="font-bold text-[#17211D] text-sm mb-2">Independent Agency</h4>
            <p className="text-[11px] text-[#66716C] leading-relaxed">We are an independent travel agency.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm flex flex-col items-center text-center">
            <Info size={32} className="text-[#075B3A] mb-3" />
            <h4 className="font-bold text-[#17211D] text-sm mb-2">Genuine Information</h4>
            <p className="text-[11px] text-[#66716C] leading-relaxed">We provide accurate travel information and guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm flex flex-col items-center text-center">
            <Headset size={32} className="text-[#075B3A] mb-3" />
            <h4 className="font-bold text-[#17211D] text-sm mb-2">Enquiry Assistance</h4>
            <p className="text-[11px] text-[#66716C] leading-relaxed">We help with enquiries and travel planning.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm flex flex-col items-center text-center">
            <Map size={32} className="text-[#075B3A] mb-3" />
            <h4 className="font-bold text-[#17211D] text-sm mb-2">Local Expertise</h4>
            <p className="text-[11px] text-[#66716C] leading-relaxed">Deep knowledge of Lonavala and nearby areas.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#DCE4DF] shadow-sm flex flex-col items-center text-center">
            <ShieldCheck size={32} className="text-[#075B3A] mb-3" />
            <h4 className="font-bold text-[#17211D] text-sm mb-2">Transparent & Honest</h4>
            <p className="text-[11px] text-[#66716C] leading-relaxed">We believe in clarity, honesty and transparency.</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-8 rounded-2xl border border-[#DCE4DF] shadow-sm flex items-start gap-5">
            <Target size={40} className="text-[#075B3A] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-3 uppercase">OUR MISSION</h3>
              <p className="text-[#17211D] text-sm leading-relaxed">
                To provide reliable travel information, honest guidance and enquiry assistance to travellers planning their trip to Lonavala and nearby destinations.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#DCE4DF] shadow-sm flex items-start gap-5">
            <Eye size={40} className="text-[#075B3A] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-3 uppercase">OUR VISION</h3>
              <p className="text-[#17211D] text-sm leading-relaxed">
                To become a trusted and transparent travel information platform known for integrity, quality assistance and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-2xl border border-[#DCE4DF] shadow-sm p-8 md:p-10 mb-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-[#DCE4DF] w-16" />
            <h3 className="text-xl font-bold text-[#17211D] uppercase tracking-wide">WHAT WE DO</h3>
            <div className="h-px bg-[#DCE4DF] w-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            <div className="flex items-start gap-4">
              <Building2 size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Travel Information</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">We provide complete information about hotels, villas, local tours, camping, cabs and attractions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Enquiry Assistance</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">We assist you with your enquiries and help connect with relevant service providers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Map size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Travel Guidance</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">We help you plan your trip with the right information and local recommendations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Local Support</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">Our team provides local support and assistance during your travel planning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Bell size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Updates & Suggestions</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">We share travel updates, seasonal information and helpful travel suggestions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users size={32} className="text-[#075B3A] shrink-0" />
              <div>
                <h4 className="font-bold text-[#17211D] text-sm mb-2">Connect & Coordinate</h4>
                <p className="text-[12px] text-[#66716C] leading-relaxed">We help connect travellers with service providers where applicable.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-8 rounded-2xl border border-[#DCE4DF] shadow-sm flex items-start gap-5">
            <ShieldCheck size={40} className="text-[#075B3A] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-3 uppercase">OUR COMMITMENT</h3>
              <p className="text-[13px] text-[#17211D] leading-relaxed mb-2">
                We are committed to transparency, honesty and providing genuine travel information. We do not make misleading claims.
              </p>
              <p className="text-[13px] text-[#17211D] leading-relaxed">
                We ensure that all information shared on this website is for general reference and enquiry assistance only.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#DCE4DF] shadow-sm flex items-start gap-5">
            <Gem size={40} className="text-[#075B3A] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-4 uppercase">OUR VALUES</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {['Transparency', 'Integrity', 'Customer Satisfaction', 'Respect', 'Responsibility', 'Continuous Improvement'].map((value, i) => (
                  <li key={i} className="flex items-center gap-2 text-[13px] text-[#17211D] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#075B3A]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Role & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#EAF5EF] p-8 rounded-2xl border border-[#BCE3CF] shadow-sm flex items-start gap-5">
            <Users size={40} className="text-[#075B3A] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-3 uppercase">OUR ROLE & INDEPENDENCE</h3>
              <p className="text-[13px] text-[#17211D] leading-relaxed mb-4">
                Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency. We provide general travel information, guidance, local tour assistance and enquiry support.
              </p>
              <p className="text-[13px] text-[#17211D] font-bold leading-relaxed">
                We are not the owner, operator or official representative of any hotel, villa, resort, attraction, transport service or activity provider unless specifically stated.
              </p>
            </div>
          </div>
          <div className="bg-[#FFF5F5] p-8 rounded-2xl border border-[#FFEAEA] shadow-sm flex items-start gap-5">
            <XCircle size={40} className="text-[#D32F2F] shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-[#17211D] mb-4 uppercase">WHAT WE DON'T DO</h3>
              <ul className="space-y-2.5">
                {[
                  'We are not the owner or operator of hotels, villas, resorts or attractions.',
                  'We do not represent government authorities.',
                  'We do not guarantee availability of rooms, services or vehicles.',
                  'We do not guarantee fixed prices or the lowest prices.',
                  'We do not publish misleading offers or promotional claims.',
                  'We do not take online bookings or payments on this website.',
                  'All arrangements are subject to availability and confirmation from the respective service providers.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[12px] text-[#17211D] leading-relaxed">
                    <XCircle size={14} className="text-[#D32F2F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-3xl border border-[#DCE4DF] shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 md:p-10">
            <h3 className="text-lg font-bold text-[#17211D] mb-8 uppercase tracking-wide text-center">BUSINESS INFORMATION</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <Building2 size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Business Name</h4>
                  <p className="text-[14px] text-[#66716C]">Vidhi Tour & Travel</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <MapPin size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Brand / Website</h4>
                  <p className="text-[14px] text-[#66716C]">Lonavala Gateway</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <Briefcase size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Business Type</h4>
                  <p className="text-[14px] text-[#66716C]">Proprietorship (Individual Business)</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <ClipboardList size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Nature of Business</h4>
                  <p className="text-[14px] text-[#66716C]">Travel Information, Enquiry Assistance<br className="hidden sm:block" /> & Travel Related Services</p>
                </div>
              </div>



              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <MapPin size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Address</h4>
                  <p className="text-[14px] text-[#66716C]">Shop No. 3, Near Lonavala Bus Stand,<br />Lonavala, Taluka Maval,<br />Pune, Maharashtra - 410401, India</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <Phone size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Contact Numbers</h4>
                  <p className="text-[14px] text-[#66716C]">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <Mail size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Email</h4>
                  <p className="text-[14px] text-[#66716C]">info@lonavalagateway.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <Globe size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">Website</h4>
                  <p className="text-[14px] text-[#66716C]">www.lonavalagateway.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0 border border-[#DCE4DF]">
                  <FileText size={24} className="text-[#06472F]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17211D] text-[15px] mb-1">GSTIN</h4>
                  <p className="text-[14px] text-[#66716C]">27AACPS1497B1ZQ</p>
                </div>
              </div>

            </div>
          </div>

          {/* Business Hours Bottom Bar */}
          <div className="bg-[#06472F] p-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-center mt-auto">
            <Clock size={36} strokeWidth={1.5} className="text-white shrink-0 mb-2 sm:mb-0" />
            <div>
              <h3 className="text-[15px] font-bold text-white mb-2 uppercase tracking-wider">BUSINESS HOURS</h3>
              <p className="text-[15px] font-medium text-white mb-0.5">Monday - Sunday</p>
              <p className="text-[15px] font-bold text-white mb-2">8:00 AM - 8:00 PM</p>
              <p className="text-[12px] text-emerald-200">(We are available all days)</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
