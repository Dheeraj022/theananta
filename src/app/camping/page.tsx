import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CampingEnquiryForm from '@/components/forms/CampingEnquiryForm';
import { 
  Trees, Flame, Tent, ShieldCheck, Users, 
  Mountain, Sparkles, Footprints, Camera,
  ShieldAlert, Check, CheckCircle, MapPin, Compass
} from 'lucide-react';
import Footer from '@/components/Footer';
import { BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Desert Camping & Outdoor Experiences in Rajasthan',
  description: 'Sleep under the stars in the Thar. Information on desert camps, luxury tents and jungle camps in Jaisalmer, Pushkar and Ranthambore.',
};

export default function CampingPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-end pb-12 px-6 sm:px-12 lg:px-24 bg-[#17211D] overflow-hidden">
          <Image
            src="/images/camping/hero.png"
            alt="Camping in Rajasthan"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17211D] via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-[800px]">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 tracking-tight shadow-sm">
              Camping &amp;<br />Outdoor Experiences<br />in Rajasthan
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-[500px] font-medium leading-relaxed drop-shadow-md">
              Sleep under the stars in the Thar. Information on desert camps, luxury tents and jungle camps across Rajasthan.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-10">
            
            {/* LEFT COLUMN */}
            <div className="space-y-16">
              
              {/* About Camping Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Tent size={24} className="text-[#075B3A]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#17211D]">About Camping in Rajasthan</h2>
                </div>
                <p className="text-[#66716C] text-sm leading-relaxed mb-8 max-w-[800px]">
                  Rajasthan is one of India&apos;s best places to camp. From dune camps at Sam near Jaisalmer to tented stays outside Pushkar and jungle camps around Ranthambore, camping here means camel rides, folk music by the fire, wide desert skies and quiet mornings.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { icon: Trees, title: 'Scenic Locations', desc: 'Campsites near dunes, hills and forest edges' },
                    { icon: Flame, title: 'Bonfire & Folk Music', desc: 'Evenings with Rajasthani music and dance' },
                    { icon: Compass, title: 'Camel & Jeep Safaris', desc: 'Dune rides at sunrise and sunset' },
                    { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Verified campsites with safety & hygiene' },
                    { icon: Users, title: 'Perfect for Everyone', desc: 'Ideal for families, friends, couples & groups' },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-[#DCE4DF] shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-[#F7F9F7] flex items-center justify-center mb-3">
                          <Icon size={24} strokeWidth={1.5} className="text-[#075B3A]" />
                        </div>
                        <h3 className="font-bold text-[#17211D] text-xs sm:text-sm mb-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-xs text-[#66716C] leading-tight px-1">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Types of Camping Experiences Section */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Types of Camping Experiences</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: 'Desert Dune Camps', 
                      desc: 'Camp among rolling sand dunes in Sam and Khuri, Jaisalmer with sunset camel treks and starry nights.',
                      img: '/images/camping/sunset-dunes.jpg',
                      icon: Mountain
                    },
                    { 
                      title: 'Luxury Tented Stays', 
                      desc: 'Spacious canopied Swiss tents and royal tented pavilions outside Pushkar with attached modern baths.',
                      img: '/images/camping/royal-swiss-tents.jpg',
                      icon: Tent
                    },
                    { 
                      title: 'Jungle Camps', 
                      desc: 'Nature and wilderness camp stays near the perimeter of Ranthambore Tiger Reserve in Sawai Madhopur.',
                      img: '/images/camping/jawai-leopard-camp.jpg',
                      icon: Trees
                    },
                    { 
                      title: 'Hill & Lake Camps', 
                      desc: 'Picturesque elevated camping sites in the Aravalli valleys and around scenic lakes near Mount Abu.',
                      img: '/images/camping/pushkar-glamping.jpg',
                      icon: Mountain
                    },
                    { 
                      title: 'Desert Stays & Swiss Tents', 
                      desc: 'Comfortable family dune tents with folk performances, campfire dinners and morning sunrise views.',
                      img: '/images/camping/thar-traditional-camp.jpg',
                      icon: Users
                    },
                    { 
                      title: 'Wilderness Nature Camps', 
                      desc: 'Quiet valley camps in Sariska and Alwar ideal for bird watching, star gazing and rustic countryside trails.',
                      img: '/images/camping/wilderness-expedition.jpg',
                      icon: Footprints
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm flex flex-col group">
                        <div className="relative w-full h-[180px]">
                          <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute -bottom-5 left-5 w-12 h-12 bg-[#075B3A] rounded-full flex items-center justify-center border-[3px] border-white shadow-md z-10">
                            <Icon className="text-white w-5 h-5" />
                          </div>
                        </div>
                        <div className="pt-8 px-5 pb-6 flex-grow flex flex-col">
                          <h3 className="font-bold text-[#17211D] text-base mb-2">{item.title}</h3>
                          <p className="text-[#66716C] text-xs leading-relaxed flex-grow">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Activities You Can Enjoy Section */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Activities You Can Enjoy</h2>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {[
                    { label: 'Camel Safari', icon: Footprints },
                    { label: 'Jeep Safari', icon: Compass },
                    { label: 'Bonfire & Folk Music', icon: Flame },
                    { label: 'Star Gazing', icon: Sparkles },
                    { label: 'Village Walks', icon: Trees },
                    { label: 'Photography', icon: Camera },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center justify-center py-4 bg-white border border-[#DCE4DF] rounded-xl shadow-sm">
                        <Icon size={24} className="text-[#075B3A] mb-2" strokeWidth={1.5} />
                        <span className="text-[10px] font-bold text-[#17211D] text-center px-1">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Named Camps Section */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Featured Camps &amp; Resorts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Sam Sand Dunes Camps Jaisalmer', area: 'Sam, Jaisalmer' },
                    { name: 'Desert Stay Camping', area: 'Sam, Jaisalmer' },
                    { name: 'Rawai Luxury Tents Resort & Spa', area: 'Pushkar' },
                    { name: 'Pushkar Desert Karni Camp', area: 'Pushkar' },
                    { name: 'Royal Pushkar Camps', area: 'Pushkar' },
                    { name: 'Ranthambore Nature Camp Resort', area: 'Sawai Madhopur' },
                    { name: 'Jungle Cave Resort', area: 'Ranthambore' },
                    { name: 'Jungle Retreat Ranthambore', area: 'Sawai Madhopur' },
                  ].map((camp, idx) => (
                    <div key={idx} className="bg-white border border-[#DCE4DF] rounded-xl p-4 flex items-center justify-between shadow-sm">
                      <div>
                        <h3 className="font-bold text-[#17211D] text-sm">{camp.name}</h3>
                        <p className="text-[#66716C] text-xs flex items-center gap-1 mt-1">
                          <MapPin size={12} className="text-[#075B3A]" /> {camp.area}
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-[#075B3A] bg-[#EAF5EF] px-2.5 py-1 rounded-full">
                        Enquiry
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Important Information Section */}
              <section>
                <div className="relative bg-[#EAF5EF] border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 overflow-hidden shadow-sm">
                  <div className="relative z-10 max-w-[600px]">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-[#075B3A] rounded-lg flex items-center justify-center">
                        <ShieldAlert size={16} className="text-white" />
                      </div>
                      <h3 className="font-bold text-[#17211D] text-base">Important Information</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Campsite location and amenities may vary.',
                        'Carry valid ID proof for verification.',
                        'Advance enquiry recommended for group bookings.',
                        'Weather conditions may impact outdoor activities.',
                        `We are an independent travel agency providing information & assistance in Rajasthan.`,
                        'We are not affiliated with any campsite or service provider.',
                      ].map((text, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#17211D] font-medium">
                          <Check size={16} className="text-[#075B3A] shrink-0 mt-0.5" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN (SIDEBAR) */}
            <div className="relative">
              <div className="sticky top-6 space-y-6">
                
                {/* Enquiry Form */}
                <div id="camping-enquiry-form" className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-lg shadow-black/5 scroll-mt-24">
                  <div className="mb-6 text-center">
                    <h2 className="text-lg font-bold text-[#17211D] mb-2">Plan Your Camping Experience</h2>
                    <p className="text-[#66716C] text-xs leading-relaxed">Share your requirements and we&apos;ll get back to you with the best options.</p>
                  </div>

                  <CampingEnquiryForm />
                </div>

                {/* Why Choose Us? */}
                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#17211D] mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Verified & Trusted Campsites',
                      'Best Recommendations',
                      '24/7 Enquiry Assistance',
                      'Transparent Information',
                      'Local Expertise',
                      'Hassle-free Assistance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#075B3A] shrink-0" strokeWidth={2.5} />
                        <span className="text-xs font-medium text-[#17211D]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Camping Spots */}
                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#17211D] mb-4">Popular Camping Spots</h3>
                  <ul className="space-y-3">
                    {[
                      'Sam Sand Dunes',
                      'Khuri Dunes',
                      'Pushkar',
                      'Ranthambore',
                      'Osian',
                      'Mount Abu',
                      'And Many More'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#66716C] shrink-0" strokeWidth={2} />
                        <span className="text-xs font-medium text-[#17211D]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
