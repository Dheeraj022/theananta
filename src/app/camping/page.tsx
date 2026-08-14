import { Metadata } from 'next';
import Image from 'next/image';
import { 
  Trees, Flame, Tent, ShieldCheck, Users, 
  Mountain, Music, Sparkles, Footprints, Dumbbell, Camera,
  ShieldAlert, Check, Send, Lock, CheckCircle, MapPin
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Camping & Outdoor Experiences in Lonavala',
  description: 'Reconnect with nature and create unforgettable memories with the best camping and outdoor experiences in Lonavala.',
};

export default function CampingPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-end pb-12 px-6 sm:px-12 lg:px-24 bg-[#17211D] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=2000"
            alt="Camping in Lonavala"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17211D] via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-[800px]">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 tracking-tight shadow-sm">
              Camping &<br />Outdoor Experiences<br />in Lonavala
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-[500px] font-medium leading-relaxed drop-shadow-md">
              Reconnect with nature and create unforgettable memories with the best camping and outdoor experiences in Lonavala.
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
              <h2 className="text-xl sm:text-2xl font-bold text-[#17211D]">About Camping in Lonavala</h2>
            </div>
            <p className="text-[#66716C] text-sm leading-relaxed mb-8 max-w-[800px]">
              Lonavala is a perfect getaway for nature lovers and adventure seekers. From lakeside camps to forest retreats, camping in Lonavala offers a refreshing break from city life. Enjoy starry nights, bonfires, trekking, and a peaceful environment surrounded by lush greenery.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: Trees, title: 'Scenic Locations', desc: 'Beautiful campsites near lakes, hills & valleys' },
                { icon: Flame, title: 'Bonfire & Activities', desc: 'Enjoy bonfire nights, music, games & more' },
                { icon: Tent, title: 'Adventure & Trekking', desc: 'Trekking, hiking and exploring nature trails' },
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
                  title: 'Lakeside Camping', 
                  desc: 'Camp by the serene lakes and enjoy breathtaking views and peaceful vibes.',
                  img: '/images/camping/lakeside_camping.jpg',
                  icon: Mountain
                },
                { 
                  title: 'Forest Camping', 
                  desc: 'Stay close to nature in lush green forests and experience true wilderness.',
                  img: '/images/camping/forest_camping.jpg',
                  icon: Trees
                },
                { 
                  title: 'Valley View Camping', 
                  desc: 'Wake up to stunning valley views and enjoy the beauty of Lonavala landscapes.',
                  img: '/images/camping/valley_view_camping.jpg',
                  icon: Mountain
                },
                { 
                  title: 'Group Camping', 
                  desc: 'Perfect for friends, college groups and corporate outings with fun activities.',
                  img: '/images/camping/group_camping.jpg',
                  icon: Users
                },
                { 
                  title: 'Family & Couples Camping', 
                  desc: 'Safe and comfortable campsites ideal for families and couples seeking peace.',
                  img: '/images/camping/family_camping.jpg',
                  icon: Users
                },
                { 
                  title: 'Adventure Camping', 
                  desc: 'Combine camping with adventure activities like trekking, rappelling, zipline and more.',
                  img: '/images/camping/adventure_camping.jpg',
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
                { label: 'Trekking & Hiking', icon: Footprints },
                { label: 'Bonfire & Music', icon: Flame },
                { label: 'Star Gazing', icon: Sparkles },
                { label: 'Nature Walks', icon: Trees },
                { label: 'Outdoor Games', icon: Dumbbell },
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
                    'We are an independent travel agency providing information & assistance in Lonavala.',
                    'We are not affiliated with any campsite or service provider.',
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#17211D] font-medium">
                      <Check size={16} className="text-[#075B3A] shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Landscape Illustration Placeholder */}
              <div className="absolute right-0 bottom-0 opacity-40 md:opacity-100 pointer-events-none w-[200px] md:w-[350px] h-[150px] md:h-[200px]">
                <Image 
                  src="https://images.unsplash.com/photo-1504280327395-56497257e1b5?auto=format&fit=crop&q=80&w=400" 
                  alt="landscape" 
                  fill 
                  className="object-cover rounded-tl-[100px] rounded-br-2xl drop-shadow-md mask-image-gradient" 
                  style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
                />
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
                    <p className="text-[#66716C] text-xs leading-relaxed">Share your requirements and we'll get back to you with the best options.</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Full Name</label>
                      <input type="text" placeholder="Enter your full name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="Enter 10 digit mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Email Address</label>
                      <input type="email" placeholder="Enter your email address" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Preferred Date</label>
                      <div className="relative">
                        <input type="text" placeholder="dd-mm-yyyy" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                        <CheckCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#66716C]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Number of People</label>
                      <select className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
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
                      <select className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
                        <option value="">Select trip type</option>
                        <option value="family">Family Trip</option>
                        <option value="couple">Couple</option>
                        <option value="friends">Friends Group</option>
                        <option value="corporate">Corporate Outing</option>
                        <option value="solo">Solo Trip</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Interests / Activities</label>
                      <select className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
                        <option value="">Select your interests</option>
                        <option value="lakeside">Lakeside Camping</option>
                        <option value="forest">Forest Camping</option>
                        <option value="adventure">Adventure & Trekking</option>
                        <option value="stargazing">Star Gazing & Music</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Any Special Requirement?</label>
                      <textarea placeholder="Tell us about your preferences..." rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#06472F] hover:bg-[#053d28] text-white font-bold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                      <Send size={16} />
                      SEND ENQUIRY
                    </button>

                    <div className="flex flex-col items-center justify-center gap-1 mt-4">
                      <div className="flex items-center gap-1.5 text-[#075B3A]">
                        <Lock size={12} strokeWidth={2.5} />
                        <span className="text-[10px] font-bold">Your information is safe with us.</span>
                      </div>
                      <span className="text-[10px] text-[#66716C]">We never share your details.</span>
                    </div>
                  </form>
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
                      'Pawna Lake',
                      'Wadivale',
                      'Khadakwasla (Near Lonavala)',
                      'Tikona Fort Area',
                      'Bihra',
                      'Kataldhar',
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
