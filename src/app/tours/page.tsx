import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, MapPin, CheckCircle, Send, 
  Car, Trees, Castle, Navigation, 
  Camera, Waves, Map, Users, HeartHandshake,
  Store, Check, Info, XCircle, Mountain, Clock3
} from 'lucide-react';
import Footer from '@/components/Footer';
import { getTours } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Local Tours in Lonavala | Lonavala Gateway',
  description: 'Explore Lonavala with curated local tours. Tiger Point, Sightseeing, Waterfall and Caves tours.',
};

export default async function ToursPage() {
  const tours = await getTours();
  
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7] pb-12">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:py-10">
          
          {/* Breadcrumb */}
          <nav className="flex text-[13px] text-[#66716C] font-semibold mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#075B3A] transition-colors">Home</Link></li>
              <ChevronRight size={14} />
              <li><span className="text-[#17211D]">Local Tours</span></li>
            </ol>
          </nav>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-10">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6 md:space-y-8">
              
              {/* Hero Section */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[400px]">
                  <div className="flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-[34px] font-extrabold text-[#17211D] leading-tight mb-4">
                      Local Tours<br/>in Lonavala
                    </h1>
                    <p className="text-[#66716C] text-sm leading-relaxed mb-8 max-w-[400px]">
                      Explore Lonavala's scenic viewpoints, waterfalls, forts, caves, lakes and nearby attractions with local tour information and travel assistance.
                    </p>

                  </div>
                  
                  {/* Hero Gallery */}
                  <div className="relative w-full h-[300px] lg:h-full flex flex-col gap-2">
                    <div className="relative w-full flex-grow rounded-2xl overflow-hidden cursor-pointer group shadow-sm">
                      <Image src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?auto=format&fit=crop&q=80&w=800" alt="Lonavala Tour" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                    </div>

                  </div>
                </div>
              </section>

              {/* About Local Tours */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-[#17211D] mb-4">About Local Tours in Lonavala</h2>
                <p className="text-[#66716C] text-[13px] leading-relaxed mb-4">
                  Lonavala is a beautiful hill station known for its breathtaking landscapes, pleasant weather and diverse attractions. From scenic viewpoints and waterfalls to historic forts, ancient caves and serene lakes, Lonavala offers something for every traveller.
                </p>
                <p className="text-[#66716C] text-[13px] leading-relaxed mb-6">
                  Our local tours are suitable for families, couples, friends and solo travellers. We provide local tour information, guidance and assistance to help you plan a smooth and memorable experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Scenic Beauty', 'Waterfalls & Lakes', 'Forts & Caves', 'Local Attractions', 'Nearby Experiences'].map((badge, idx) => (
                    <span key={idx} className="bg-[#F7F9F7] border border-[#DCE4DF] text-[#66716C] font-semibold text-xs px-4 py-1.5 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </section>

              {/* Local Tour Categories */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-[#17211D] mb-6">Local Tour Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Camera, title: 'Lonavala Sightseeing', desc: 'Popular viewpoints and attractions.' },
                    { icon: Trees, title: 'Nature & Waterfalls', desc: 'Waterfalls, greenery and scenic landscapes.' },
                    { icon: Castle, title: 'Forts & Heritage', desc: 'Historic forts and heritage locations.' },
                    { icon: Map, title: 'Caves & Historical Places', desc: 'Karla, Bhaja and other historical sites.' },
                    { icon: Waves, title: 'Lakes & Scenic Spots', desc: 'Lakes, valleys and beautiful scenic areas.' },
                    { icon: Mountain, title: 'Adventure & Outdoor', desc: 'Trekking, hiking and outdoor experiences.' },
                    { icon: Users, title: 'Family & Leisure', desc: 'Relaxed experiences suitable for families and groups.' },
                    { icon: HeartHandshake, title: 'Custom Local Tours', desc: 'Tour information based on your preferences.' },
                  ].map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div key={idx} className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-xl p-5 flex flex-col hover:border-[#075B3A]/30 transition-colors">
                        <div className="flex items-start gap-3 flex-grow">
                          <Icon size={24} className="text-[#075B3A] shrink-0" strokeWidth={1.5} />
                          <div>
                            <h3 className="font-bold text-[#17211D] text-sm mb-1 leading-tight">{cat.title}</h3>
                            <p className="text-[#66716C] text-[10px] leading-tight">{cat.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Available Tour Packages */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <h2 className="text-lg font-bold text-[#17211D]">Available Tour Packages</h2>
                  <p className="text-[#66716C] text-xs font-semibold">Handpicked for you</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {tours.map((tour) => (
                    <div
                      key={tour.id}
                      className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                    >
                      <div className="relative h-[140px] sm:h-[180px]">
                        <Image
                          src={tour.image}
                          alt={`${tour.name} in Lonavala`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 text-white rounded-lg px-2 py-0.5">
                          <Clock3 size={10} strokeWidth={2} />
                          <span className="text-[10px]">{tour.duration}</span>
                        </div>
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <h3 className="font-bold text-sm text-[#17211D] mb-2 line-clamp-2 flex-grow">{tour.name}</h3>
                        <Link
                          href={`/tours/${tour.slug}`}
                          className="block w-full text-center py-2 bg-[#075B3A] text-white text-xs font-semibold rounded-xl hover:bg-[#06472F] transition-colors mt-auto"
                        >
                          VIEW DETAILS
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Popular Places Covered */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-[#17211D] mb-6">Popular Places Covered</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(9,minmax(0,1fr))] gap-3 mb-6">
                  {[
                    { name: 'Tiger Point', img: '/images/tours/tiger-point.jpg' },
                    { name: "Lion's Point", img: '/images/tours/sightseeing.jpg' },
                    { name: 'Bhushi Dam', img: '/images/tours/waterfall.jpg' },
                    { name: 'Lonavala Lake', img: '/images/camping/lakeside_camping.jpg' },
                    { name: 'Pawna Lake', img: '/images/camping/group_camping.jpg' },
                    { name: 'Rajmachi Fort', img: '/images/camping/adventure_camping.jpg' },
                    { name: 'Tikona Fort', img: '/images/camping/forest_camping.jpg' },
                    { name: 'Bhaja Caves', img: '/images/tours/caves.jpg' },
                    { name: 'Lohagad Fort', img: '/images/camping/valley_view_camping.jpg' },
                  ].map((place, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2 shadow-sm">
                        <Image src={place.img} alt={place.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                           <MapPin size={10} className="text-[#17211D]" />
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-[#17211D] text-center leading-tight px-1">{place.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="#enquiry-form" className="inline-block text-[#17211D] font-bold text-xs bg-[#F7F9F7] border border-[#DCE4DF] px-8 py-2 rounded-lg hover:bg-[#EAF5EF] transition-colors">
                    Submit Enquiry
                  </Link>
                </div>
              </section>

              {/* Sample Local Sightseeing Route */}
              <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-[#17211D] mb-6">Sample Local Sightseeing Route <span className="font-normal text-[#66716C]">(For Reference)</span></h2>
                
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-4 mb-8 w-full">
                  {[
                    { icon: Car, label: 'Start', sub: 'Preferred pickup\npoint' },
                    { icon: MapPin, label: 'Tiger Point', arrow: true },
                    { icon: MapPin, label: "Lion's Point", arrow: true },
                    { icon: Waves, label: 'Bhushi Dam', arrow: true },
                    { icon: MapPin, label: 'Lonavala Lake', arrow: true },
                    { icon: Store, label: 'Local Market /\nNearby Attraction', arrow: true },
                    { icon: Car, label: 'Return' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex flex-col items-center text-center w-20">
                        <step.icon size={24} className="text-[#075B3A] mb-2" strokeWidth={1.5} />
                        <span className="font-bold text-[#17211D] text-[10px] leading-tight whitespace-pre-line">{step.label}</span>
                        {step.sub && <span className="text-[#66716C] text-[8px] leading-tight mt-1 whitespace-pre-line">{step.sub}</span>}
                      </div>
                      {step.arrow && (
                        <div className="hidden md:flex w-8 mx-2 items-center justify-center text-[#DCE4DF]">
                          <ChevronRight size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-xl p-4">
                  <p className="text-[11px] text-[#66716C] text-center font-medium leading-relaxed">
                    <span className="font-bold text-[#17211D]">Note:</span> This is a sample route for information purposes. Places and sequence may vary according to traveller preferences, available time, weather and local conditions.
                  </p>
                </div>
              </section>

              {/* Information Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Travel Assistance May Include */}
                <section className="bg-[#EAF5EF] border border-[#C6E0D2] rounded-2xl p-6">
                  <h2 className="text-sm font-bold text-[#17211D] mb-4">Travel Assistance May Include</h2>
                  <ul className="space-y-3">
                    {[
                      'Local tour information',
                      'Suggested sightseeing routes',
                      'Itinerary planning assistance',
                      'Local attraction information',
                      'Enquiry coordination',
                      'Service-provider coordination\nwhere applicable'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-[#17211D] font-medium leading-relaxed">
                        <Check size={14} className="text-[#075B3A] shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* May Not Include & What We Can Help You Plan */}
                <div className="flex flex-col gap-6">
                  <section className="bg-[#F7F9F7] border border-[#DCE4DF] rounded-2xl p-6">
                    <h2 className="text-sm font-bold text-[#17211D] mb-4">May Not Include</h2>
                    <ul className="space-y-3">
                      {[
                        'Attraction entry tickets',
                        'Food and personal expenses',
                        'Activity charges',
                        'Parking / tolls where applicable',
                        'Services not specifically confirmed'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11px] text-[#17211D] font-medium leading-relaxed">
                          <Check size={14} className="text-[#17211D] shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Important Note */}
              <section className="bg-[#FFF5F5] border border-[#FFEAEA] rounded-2xl p-6 flex gap-3 shadow-sm">
                <Info size={20} className="text-[#D32F2F] shrink-0" />
                <p className="text-[11px] text-[#D32F2F] font-medium leading-relaxed">
                  <strong className="font-bold">Important Note:</strong> Specific inclusions, exclusions and service details may vary depending on the selected arrangement or service provider. Please confirm applicable details before proceeding.
                </p>
              </section>

            </div>

            {/* RIGHT COLUMN (SIDEBAR) */}
            <div className="relative">
              <div className="sticky top-6 space-y-6">
                
                {/* Enquiry Form */}
                <div id="enquiry-form" className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-lg shadow-black/5 scroll-mt-24">
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-[#17211D] mb-2">Plan Your Local Tour</h2>
                    <p className="text-[#66716C] text-xs leading-relaxed">Tell us what you would like to explore and we'll assist you with relevant local tour information.</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Full Name*</label>
                      <input type="text" placeholder="Enter your full name" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Mobile Number*</label>
                      <input type="tel" placeholder="Enter mobile number" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Email Address</label>
                      <input type="email" placeholder="Enter email address" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Preferred Travel Date</label>
                      <div className="relative">
                        <input type="text" placeholder="dd-mm-yyyy" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                        <CheckCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#66716C]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Number of People</label>
                      <select className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
                        <option>Select number of people</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Tour Preference</label>
                      <select className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors appearance-none bg-white">
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
                      <input type="text" placeholder="Enter location" className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17211D] mb-1.5">Your Requirement</label>
                      <textarea placeholder="Tell us what you are looking for..." rows={3} className="w-full text-sm border border-[#DCE4DF] rounded-lg px-3 py-2.5 outline-none focus:border-[#075B3A] transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#06472F] hover:bg-[#053d28] text-white font-bold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                      <Send size={16} />
                      SEND ENQUIRY
                    </button>

                    <p className="text-center text-[10px] text-[#66716C] mt-4 flex items-center justify-center gap-1.5">
                      <Info size={12} />
                      This is an enquiry form. <br className="hidden sm:block md:hidden"/>It does not confirm any booking.
                    </p>
                  </form>
                </div>

                {/* Our Role & Independence */}
                <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#17211D] mb-3 text-sm">Our Role & Independence</h3>
                  <p className="text-[#17211D] text-[11px] leading-relaxed mb-3">
                    Lonavala Gateway is operated by Vidhi Tour & Travel, an independent travel agency providing general travel information, local tour guidance and enquiry assistance.
                  </p>
                  <p className="text-[#17211D] text-[11px] leading-relaxed">
                    We are not the owner, operator or official representative of any attraction, tour operator or service provider unless specifically stated.
                  </p>
                </div>

                {/* What We Do */}
                <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#17211D] mb-4 text-sm">What We Do</h3>
                  <ul className="space-y-3">
                    {[
                      'Local tour information and guidance',
                      'Sightseeing and attractions information',
                      'Suggested routes and itinerary planning',
                      'Enquiry coordination and communication',
                      'Connect with service providers\n(where applicable)',
                      'General travel assistance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#17211D]">
                        <Check size={14} className="text-[#075B3A] shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="whitespace-pre-line">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What We Don't Do */}
                <div className="bg-white border border-[#DCE4DF] rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#17211D] mb-4 text-sm">What We Don't Do</h3>
                  <ul className="space-y-3">
                    {[
                      'We are not the owner or operator of attractions.',
                      'We do not represent government authorities.',
                      'We do not guarantee availability.',
                      'We do not guarantee fixed prices.',
                      'We do not claim best price or offers.',
                      'We do not take online bookings or payments.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#17211D]">
                        <XCircle size={14} className="text-[#D32F2F] shrink-0 mt-0.5" />
                        <span>{item}</span>
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
