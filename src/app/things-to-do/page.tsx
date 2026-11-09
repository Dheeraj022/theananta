import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ThingsToDoEnquiryForm from '@/components/forms/ThingsToDoEnquiryForm';
import { 
  Compass, HeartHandshake, Castle, Sun,
  Trees, Landmark, Users, Coffee,
  Waves, Mountain, Footprints, Flame, Camera, ShoppingBag, Music,
  Info, Check, MapPin, CheckCircle, CloudRain
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Things To Do in Rajasthan | Top Attractions & Activities',
  description: 'Explore top attractions, desert activities, heritage sites and family-friendly experiences across Rajasthan.',
};

const attractions = [
  { name: 'Amber Palace', city: 'Jaipur', desc: 'Magnificent 16th-century hilltop palace complex featuring ornate courtyards and mirror work.', img: '/images/tours/sightseeing.jpg' },
  { name: 'Hawa Mahal', city: 'Jaipur', desc: 'Iconic five-story pink sandstone palace with 953 carved jharokha honeycomb windows.', img: '/images/tours/caves.jpg' },
  { name: 'City Palace', city: 'Jaipur', desc: 'Grand royal residence blending Rajput and Mughal architecture in the heart of the Pink City.', img: '/images/hotels/hotel-4.jpg' },
  { name: 'Jantar Mantar', city: 'Jaipur', desc: 'Historic UNESCO-listed astronomical observatory featuring the world\'s largest stone sundial.', img: '/images/tours/waterfall.jpg' },
  { name: 'Jal Mahal', city: 'Jaipur', desc: 'Serene red sandstone palace set in the middle of Man Sagar Lake.', img: '/images/hotels/hotel-1.jpg' },
  { name: 'Jaigarh Fort', city: 'Jaipur', desc: 'Formidable ridge fort overlooking Amber, housing the historic Jaivana wheeled cannon.', img: '/images/tours/tiger-point.jpg' },
  { name: 'Monsoon Palace', city: 'Udaipur', desc: 'Hilltop royal palace atop the Bansdara peak offering panoramic sunset vistas over Udaipur.', img: '/images/hotels/hotel-2.jpg' },
  { name: 'Saheliyon Ki Bari', city: 'Udaipur', desc: 'Historic royal garden built with lotus pools, marble pavilions and fountain courtyards.', img: '/images/hotels/hotel-3.jpg' },
  { name: 'Jagdish Temple', city: 'Udaipur', desc: '17th-century Hindu temple renowned for its intricately sculpted marble pillars and spire.', img: '/images/tours/sightseeing.jpg' },
  { name: 'Gangaur Ghat', city: 'Udaipur', desc: 'Scenic waterfront ghat on Lake Pichola used for festivals and evening cultural strolls.', img: '/images/tours/waterfall.jpg' },
  { name: 'Ambrai Ghat', city: 'Udaipur', desc: 'Prominent lakefront promenade offering sweeping views of City Palace and Lake Palace.', img: '/images/tours/caves.jpg' },
  { name: 'Bagore Ki Haveli', city: 'Udaipur', desc: '18th-century lakeside haveli mansion showcasing traditional Mewari folk arts and museum rooms.', img: '/images/hotels/hotel-1.jpg' },
  { name: 'Mehrangarh Fort', city: 'Jodhpur', desc: 'Colossal cliff-top fortress towering 400 feet over Jodhpur with exquisite palatial courtyards.', img: '/images/tours/tiger-point.jpg' },
  { name: 'Jaswant Thada', city: 'Jodhpur', desc: 'Graceful white marble memorial cenotaph with carved gazebos and lakeside gardens.', img: '/images/hotels/hotel-2.jpg' },
  { name: 'Toorji Ka Jhalra', city: 'Jodhpur', desc: 'Restored 18th-century stepwell displaying intricate geometric stone-carved steps.', img: '/images/hotels/hotel-3.jpg' },
  { name: 'Rao Jodha Desert Rock Park', city: 'Jodhpur', desc: 'Ecological park spread over rocky volcanic hills preserving indigenous desert flora.', img: '/images/camping/forest_camping.jpg' },
  { name: 'Jaisalmer Fort', city: 'Jaisalmer', desc: 'UNESCO-listed living golden sandstone fort home to temples, shops and historic havelis.', img: '/images/hotels/hotel-4.jpg' },
  { name: 'Patwon Ki Haveli', city: 'Jaisalmer', desc: 'Cluster of five ornate merchant mansions celebrated for intricately carved stone jharokhas.', img: '/images/tours/caves.jpg' },
  { name: 'Bada Bagh', city: 'Jaisalmer', desc: 'Historical garden complex with royal sandstone cenotaphs overlooking the desert.', img: '/images/camping/valley_view_camping.jpg' },
  { name: 'Gadisar Lake', city: 'Jaisalmer', desc: 'Scenic 14th-century artificial lake encircled by temples, ghats and carved pavilions.', img: '/images/camping/lakeside_camping.jpg' },
  { name: 'Brahma Temple', city: 'Pushkar', desc: 'Sacred 14th-century temple dedicated to Lord Brahma, situated near the holy Pushkar Lake.', img: '/images/tours/sightseeing.jpg' },
];

export default function ThingsToDoPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[65vh] min-h-[600px] md:min-h-[500px] flex flex-col justify-end bg-[#17211D] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1920"
            alt="Things To Do in Rajasthan"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17211D] via-[#17211D]/60 to-transparent"></div>
          
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 pb-56 md:pb-32">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 tracking-tight drop-shadow-lg">
              Things To Do<br />in Rajasthan
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-[600px] font-medium leading-relaxed drop-shadow-md">
              Explore top attractions, desert activities, heritage sites and family-friendly experiences across Rajasthan.
            </p>
          </div>

          {/* Hero Feature Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { icon: Compass, label: 'Diverse Experiences', sub: 'Heritage, desert, wildlife & more' },
                { icon: HeartHandshake, label: 'Perfect Getaway', sub: 'For family, friends, couples & groups' },
                { icon: Castle, label: 'Royal Heritage', sub: 'Forts and palaces in every city' },
                { icon: Sun, label: 'Best in Winter', sub: 'October to March is peak season' },
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
                { icon: Castle, title: 'Forts & Palaces', desc: 'Amber, Mehrangarh, City Palace & more' },
                { icon: Mountain, title: 'Desert Experiences', desc: 'Dunes, camel safaris & camps' },
                { icon: Landmark, title: 'Heritage & Culture', desc: 'Havelis, stepwells, temples & museums' },
                { icon: Waves, title: 'Lakes & Scenic Spots', desc: 'Pichola, Gadisar, ghats & viewpoints' },
                { icon: Trees, title: 'Wildlife & Nature', desc: 'Sariska, Ranthambore & rock parks' },
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

          {/* Popular Things To Do in Rajasthan */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Popular Things To Do in Rajasthan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {attractions.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative w-full h-[180px] overflow-hidden">
                    <Image src={item.img} alt={`${item.name} in ${item.city}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-white/95 text-[#075B3A] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {item.city}
                    </span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-[#17211D] mb-1">{item.name}</h3>
                      <p className="text-[#66716C] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activities You Can Enjoy */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Activities You Can Enjoy</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Fort & Palace Visits', icon: Castle },
                { label: 'Camel & Jeep Safari', icon: Mountain },
                { label: 'Boat Rides', icon: Waves },
                { label: 'Heritage Walks', icon: Footprints },
                { label: 'Wildlife Safari', icon: Trees },
                { label: 'Photography', icon: Camera },
                { label: 'Shopping & Bazaars', icon: ShoppingBag },
                { label: 'Folk Music & Dance', icon: Music },
              ].map((act, idx) => {
                const Icon = act.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-[#DCE4DF] rounded-xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF5EF] flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#075B3A]" />
                    </div>
                    <span className="text-xs font-bold text-[#17211D] leading-tight">{act.label}</span>
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
                  'Activity availability and entry timings may vary based on weather and season.',
                  'Carry valid ID proof wherever required by local monuments and attractions.',
                  'Wear comfortable clothes and appropriate footwear for walking in forts.',
                  'We are an independent travel agency providing information & assistance in Rajasthan.',
                  'We are not affiliated with any attraction, activity provider or government body.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={16} className="text-[#075B3A] mt-0.5 shrink-0" strokeWidth={3} />
                    <span className="text-[#17211D] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN (SIDEBAR) */}
        <div className="relative">
          <div className="sticky top-6 space-y-6">
            
            {/* Enquiry Form */}
            <div id="things-to-do-enquiry-form" className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-lg shadow-black/5 scroll-mt-24">
              <div className="mb-6 text-left">
                <h2 className="text-lg font-bold text-[#17211D] mb-2">Plan Your Rajasthan Experience</h2>
                <p className="text-[#66716C] text-xs leading-relaxed">Tell us what you&apos;re looking for and we&apos;ll help you plan the perfect trip.</p>
              </div>

              <ThingsToDoEnquiryForm />
            </div>

            {/* Why Explore Rajasthan? */}
            <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#17211D] mb-4">Why Explore Rajasthan?</h3>
              <ul className="space-y-3">
                {[
                  'Wide range of experiences for all ages',
                  'Heritage, desert & wildlife in one state',
                  'Works for short breaks and long circuits',
                  'Well-connected tourist destinations',
                  'A different character in every city'
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
              <p className="text-[11px] text-[#66716C] leading-relaxed mb-4">Rajasthan is best from October to March. The monsoon months bring greenery to Udaipur and Mount Abu, and summer is very hot in the desert districts.</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#DCE4DF]">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4E5] flex items-center justify-center shrink-0">
                    <Sun size={16} className="text-[#E67E22]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#17211D] block">Winter (Oct – Mar)</span>
                    <span className="text-[10px] text-[#66716C] block mb-1">Sightseeing</span>
                    <span className="text-[9px] text-[#17211D] font-medium">Pleasant days for forts, palaces and desert camps</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#DCE4DF]">
                  <div className="w-8 h-8 rounded-full bg-[#EAF5EF] flex items-center justify-center shrink-0">
                    <CloudRain size={16} className="text-[#075B3A]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#17211D] block">Monsoon (Jul – Sep)</span>
                    <span className="text-[10px] text-[#66716C] block mb-1">Sightseeing</span>
                    <span className="text-[9px] text-[#17211D] font-medium">Green hills and full lakes in Udaipur and Mount Abu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Locations */}
            <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#17211D] mb-4">Popular Locations</h3>
              <ul className="space-y-3">
                {[
                  'Jaipur',
                  'Udaipur',
                  'Jodhpur',
                  'Jaisalmer',
                  'Pushkar',
                  'Mount Abu',
                  'Ranthambore',
                  'Bikaner',
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
