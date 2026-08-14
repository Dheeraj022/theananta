import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThingsToDoEnquiryForm from '@/components/forms/ThingsToDoEnquiryForm';
import { 
  Compass, HeartHandshake, Mountain, Sun,
  Trees, Landmark, Users, Coffee,
  Eye, Droplets, Tent, Map, Waves, Ticket,
  Footprints, Flame, Bird, Camera, Bike, Utensils,
  Info, Check, ClipboardList, MapPin, Calendar, Send, Lock, CheckCircle, CloudRain
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Things To Do in Lonavala | Top Attractions & Activities',
  description: 'Explore top attractions, adventure activities, scenic spots and family-friendly experiences in Lonavala.',
};

export default function ThingsToDoPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[65vh] min-h-[600px] md:min-h-[500px] flex flex-col justify-end bg-[#17211D] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?auto=format&fit=crop&q=80&w=1920"
            alt="Things To Do in Lonavala"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17211D] via-[#17211D]/60 to-transparent"></div>
          
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 pb-56 md:pb-32">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 tracking-tight drop-shadow-lg">
              Things To Do<br />in Lonavala
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-[600px] font-medium leading-relaxed drop-shadow-md">
              Explore top attractions, adventure activities, scenic spots and family-friendly experiences in Lonavala.
            </p>
          </div>

          {/* Hero Feature Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { icon: Compass, label: 'Diverse Experiences', sub: 'Adventure, nature, culture & more' },
                { icon: HeartHandshake, label: 'Perfect Getaway', sub: 'For family, friends, couples & groups' },
                { icon: Mountain, label: 'Scenic Beauty', sub: 'Breathtaking views at every turn' },
                { icon: Sun, label: 'Year Round Fun', sub: 'Enjoy in every season with unique charm' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col text-left">
                    <Icon size={24} className="text-white mb-2" strokeWidth={1.5} />
                    <span className="text-white font-bold text-sm mb-1">{item.label}</span>
                    <span className="text-white/70 text-[10px] sm:text-xs leading-tight">{item.sub}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-10">
            {/* LEFT COLUMN */}
            <div className="space-y-16">
          
          {/* Top Things To Do by Categories */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Top Things To Do by Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: Mountain, title: 'Adventure Activities', desc: 'Trekking, Camping, Rappelling & more' },
                { icon: Trees, title: 'Nature & Scenic Spots', desc: 'Lakes, Waterfalls, Valleys & viewpoints' },
                { icon: Landmark, title: 'Heritage & Culture', desc: 'Caves, Forts & Historical Places' },
                { icon: Users, title: 'Family & Fun', desc: 'Parks, Games, Picnic Spots' },
                { icon: Coffee, title: 'Relaxation & Leisure', desc: 'Lakeside, Resorts, Spas & more' },
              ].map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:border-[#075B3A]/30 transition-colors cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-[#EAF5EF] group-hover:bg-[#075B3A] transition-colors flex items-center justify-center mb-4">
                      <Icon size={24} strokeWidth={1.5} className="text-[#075B3A] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-[#17211D] text-sm mb-1.5">{cat.title}</h3>
                    <p className="text-[#66716C] text-[10px] leading-relaxed">{cat.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Popular Things To Do in Lonavala */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Popular Things To Do in Lonavala</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { 
                  title: 'Tiger Point', 
                  desc: 'Famous for stunning sunrise views and peaceful ambience.', 
                  img: '/images/tours/tiger-point.jpg', 
                  tag: 'Viewpoint', tagColor: 'bg-[#EAF5EF] text-[#075B3A]' 
                },
                { 
                  title: 'Bhushi Dam', 
                  desc: 'Enjoy the gushing water and cool natural vibes.', 
                  img: '/images/tours/waterfall.jpg', 
                  tag: 'Waterfall Spot', tagColor: 'bg-blue-50 text-blue-700' 
                },
                { 
                  title: 'Pawna Lake', 
                  desc: 'Perfect for camping, boating and lakeside relaxation.', 
                  img: '/images/camping/lakeside_camping.jpg', 
                  tag: 'Lake & Camping', tagColor: 'bg-indigo-50 text-indigo-700' 
                },
                { 
                  title: 'Karla Caves', 
                  desc: 'Ancient Buddhist caves with amazing architecture.', 
                  img: '/images/tours/caves.jpg', 
                  tag: 'Historical Place', tagColor: 'bg-purple-50 text-purple-700' 
                },
                { 
                  title: 'Rajmachi Fort', 
                  desc: 'Historic fort with trekking trails and scenic views.', 
                  img: '/images/tours/sightseeing.jpg', 
                  tag: 'Trekking & Heritage', tagColor: 'bg-orange-50 text-orange-700' 
                },
                { 
                  title: 'Trek to Tikona Fort', 
                  desc: 'Popular trek for adventure lovers and nature.', 
                  img: '/images/camping/valley_view_camping.jpg', 
                  tag: 'Adventure', tagColor: 'bg-green-50 text-green-700' 
                },
                { 
                  title: 'Lonavala Lake', 
                  desc: 'Peaceful spot for evening walks and relaxation.', 
                  img: '/images/hero/lonavala-hero.jpg', 
                  tag: 'Lake & Leisure', tagColor: 'bg-blue-50 text-blue-700' 
                },
                { 
                  title: 'Della Adventure Park', 
                  desc: 'Fun-filled adventure activities for all age groups.', 
                  img: '/images/camping/adventure_camping.jpg', 
                  tag: 'Adventure Park', tagColor: 'bg-pink-50 text-pink-700' 
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-[#17211D] text-base mb-2">{item.title}</h3>
                    <p className="text-[#66716C] text-xs leading-relaxed mb-4 flex-grow">{item.desc}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold w-max ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Link href="/contact" className="text-[#17211D] font-bold text-sm bg-white border border-[#DCE4DF] hover:bg-[#F7F9F7] px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2">
                View More Attractions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* Activities You Can Enjoy */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE4DF] shadow-sm">
            <h2 className="text-lg font-bold text-[#17211D] mb-6">Activities You Can Enjoy</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {[
                { icon: Footprints, label: 'Trekking & Hiking' },
                { icon: Flame, label: 'Camping & Bonfire' },
                { icon: Droplets, label: 'Water Activities' },
                { icon: Mountain, label: 'Rock Climbing' },
                { icon: Bird, label: 'Wildlife & Nature' },
                { icon: Camera, label: 'Photography' },
                { icon: Bike, label: 'Cycling & Biking' },
                { icon: Utensils, label: 'Picnic & Outings' },
              ].map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#F7F9F7] group-hover:bg-[#EAF5EF] transition-colors border border-[#DCE4DF] group-hover:border-[#C6E0D2] flex items-center justify-center mb-3">
                      <Icon size={20} strokeWidth={1.5} className="text-[#66716C] group-hover:text-[#075B3A] transition-colors" />
                    </div>
                    <span className="text-[#17211D] text-[10px] font-semibold">{act.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Important Information */}
          <section className="bg-[#EAF5EF] border border-[#C6E0D2] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Info size={20} className="text-[#075B3A]" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-[#075B3A]">Important Information</h2>
              </div>
              
              <ul className="space-y-3 max-w-[800px]">
                {[
                  'Activity availability may vary based on weather and season.',
                  'Carry valid ID proof wherever required.',
                  'Wear comfortable clothes and footwear.',
                  'We are an independent travel agency providing information & assistance in Lonavala.',
                  'We are not affiliated with any attraction, activity provider or government body.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={16} className="text-[#075B3A] mt-0.5 shrink-0" strokeWidth={3} />
                    <span className="text-[#17211D] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Landscape Illustration (CSS based shape) */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 w-[300px] h-[150px] overflow-hidden">
              <div className="absolute bottom-0 right-10 w-0 h-0 border-l-[80px] border-l-transparent border-b-[120px] border-b-[#075B3A] border-r-[80px] border-r-transparent"></div>
              <div className="absolute bottom-0 right-32 w-0 h-0 border-l-[60px] border-l-transparent border-b-[90px] border-b-[#075B3A] border-r-[60px] border-r-transparent"></div>
              <div className="absolute bottom-0 -right-10 w-0 h-0 border-l-[100px] border-l-transparent border-b-[150px] border-b-[#075B3A] border-r-[100px] border-r-transparent"></div>
            </div>
          </section>
        </div>
            {/* RIGHT COLUMN (SIDEBAR) */}
            <div className="relative">
              <div className="sticky top-6 space-y-6">
                
                {/* Enquiry Form */}
                <div id="things-to-do-enquiry-form" className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-lg shadow-black/5 scroll-mt-24">
                  <div className="mb-6 text-left">
                    <h2 className="text-lg font-bold text-[#17211D] mb-2">Plan Your Lonavala Experience</h2>
                    <p className="text-[#66716C] text-xs leading-relaxed">Tell us what you're looking for and we'll help you plan the perfect trip.</p>
                  </div>

                  <ThingsToDoEnquiryForm />
                </div>

                {/* Why Explore Lonavala? */}
                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#17211D] mb-4">Why Explore Lonavala?</h3>
                  <ul className="space-y-3">
                    {[
                      'Wide range of activities for all ages',
                      'Nature, adventure & cultural experiences',
                      'Perfect for short trips & weekends',
                      'Safe, clean & tourist-friendly destination',
                      'Memorable experiences guaranteed'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#075B3A] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[11px] font-medium text-[#17211D] leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best Time To Visit */}
                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#17211D] mb-2">Best Time To Visit</h3>
                  <p className="text-[11px] text-[#66716C] leading-relaxed mb-4">Lonavala is pleasant throughout the year. Monsoon and winter are the most popular seasons.</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#DCE4DF]">
                      <div className="w-8 h-8 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0">
                        <CloudRain size={16} className="text-[#075B3A]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#17211D] block">Monsoon (Jun - Sep)</span>
                        <span className="text-[10px] text-[#66716C] block mb-1">Sightseeing</span>
                        <span className="text-[9px] text-[#17211D] font-medium">Lush green landscapes & waterfalls</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#DCE4DF]">
                      <div className="w-8 h-8 rounded-full bg-[#FFF4E5] flex items-center justify-center shrink-0">
                        <Sun size={16} className="text-[#E67E22]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#17211D] block">Winter (Oct - Feb)</span>
                        <span className="text-[10px] text-[#66716C] block mb-1">Sightseeing</span>
                        <span className="text-[9px] text-[#17211D] font-medium">Great for indoor & water activities</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popular Locations */}
                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-[#17211D] mb-4">Popular Locations</h3>
                  <ul className="space-y-3">
                    {[
                      'Pawna Lake',
                      'Khandala',
                      'Tiger Point',
                      'Bhushi Dam',
                      'Lonavala Lake',
                      'Rajmachi',
                      'Tikona Fort',
                      'Karla Caves',
                      'And Many More'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#66716C] shrink-0" strokeWidth={2} />
                        <span className="text-[11px] font-medium text-[#17211D] leading-tight">{item}</span>
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
