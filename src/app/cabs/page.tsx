import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Clock, Sparkles, Headset, 
  Car, UserCheck, ShieldPlus, BadgeCheck, Clock4,
  Info, MapPin, Timer, ThumbsUp, CheckSquare, Map
} from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Cabs & Transfers in Lonavala',
  description: 'Reliable, comfortable and on-time cab services for local sightseeing, airport transfers and outstation trips in Lonavala.',
};

export default function CabsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#F7F9F7]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[450px] flex flex-col justify-end bg-[#17211D] overflow-hidden">
          <Image
            src="/images/cabs/cab_hero.jpg"
            alt="Cabs & Transfers in Lonavala"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17211D] via-[#17211D]/60 to-transparent"></div>
          
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8 pb-32">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 tracking-tight drop-shadow-lg">
              Cabs & Transfers<br />in Lonavala
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-[500px] font-medium leading-relaxed drop-shadow-md">
              Reliable, comfortable and on-time cab services for local sightseeing, airport transfers and outstation trips.
            </p>
          </div>

          {/* Hero Feature Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: 'Verified & Trusted', sub: 'Drivers' },
                { icon: Clock, label: 'On-time', sub: 'Pickup' },
                { icon: Sparkles, label: 'Clean & Sanitized', sub: 'Vehicles' },
                { icon: Headset, label: '24/7 Assistance', sub: 'Support' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left md:flex-row md:gap-3">
                    <Icon size={24} className="text-white mb-2 md:mb-0 shrink-0" strokeWidth={1.5} />
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xs">{item.label}</span>
                      <span className="text-white/80 text-[10px] uppercase tracking-wider">{item.sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:py-16 space-y-16">
          
          {/* About Cab & Transfer Services */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DCE4DF] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Car size={24} className="text-[#075B3A]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#17211D]">About Our Cab & Transfer Services</h2>
            </div>
            <p className="text-[#66716C] text-sm leading-relaxed mb-10 max-w-[900px]">
              We offer a wide range of cab and transfer services in Lonavala and beyond. Whether you need a local cab for sightseeing, an airport transfer, or an outstation trip, we ensure a safe, comfortable and hassle-free journey with well-maintained vehicles and professional drivers.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { icon: Car, title: 'Wide Range of Cars', desc: 'Hatchback to Tempo Traveller options' },
                { icon: UserCheck, title: 'Professional Drivers', desc: 'Experienced, polite & well-trained' },
                { icon: ShieldPlus, title: 'Safe & Sanitized', desc: 'Clean vehicles for a healthy journey' },
                { icon: BadgeCheck, title: 'Transparent Service', desc: 'No hidden charges, 100% transparency' },
                { icon: Clock4, title: '24/7 Availability', desc: 'We are always ready to assist you' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#EAF5EF] flex items-center justify-center mb-3">
                      <Icon size={28} strokeWidth={1.5} className="text-[#075B3A]" />
                    </div>
                    <h3 className="font-bold text-[#17211D] text-xs sm:text-sm mb-1">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#66716C] leading-tight px-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Our Vehicle Options */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Our Vehicle Options</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { title: 'Hatchback', seats: '4 Seater', desc: 'Ideal for small families and solo travellers.', img: '/images/cabs/car_hatchback.jpg' },
                { title: 'Sedan', seats: '4 Seater', desc: 'Comfortable rides for short and long trips.', img: '/images/cabs/car_sedan.jpg' },
                { title: 'SUV', seats: '6 Seater', desc: 'Spacious & powerful for family and group travel.', img: '/images/cabs/car_suv.jpg' },
                { title: 'Innova Crysta', seats: '6-7 Seater', desc: 'Premium comfort for long journeys.', img: '/images/cabs/car_innova.jpg' },
                { title: 'Tempo Traveller', seats: '12-17 Seater', desc: 'Perfect for large groups and corporate trips.', img: '/images/cabs/car_tempo.jpg' },
              ].map((car, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
                  <div className="relative w-full h-[100px] sm:h-[120px] mb-4">
                    <Image src={car.img} alt={car.title} fill className="object-contain" />
                  </div>
                  <h3 className="font-bold text-[#17211D] text-sm">{car.title}</h3>
                  <p className="text-[#075B3A] text-xs font-bold mb-2">({car.seats})</p>
                  <p className="text-[#66716C] text-[10px] leading-tight">{car.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#EAF5EF] border border-[#C6E0D2] rounded-xl p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#075B3A]/10 flex items-center justify-center shrink-0">
                <Info size={16} className="text-[#075B3A]" />
              </div>
              <p className="text-[#075B3A] text-xs sm:text-sm font-semibold">
                All vehicles are well-maintained, insured and sanitised for your safety and comfort.
              </p>
            </div>
          </section>

          {/* Popular Routes */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-6">Popular Cab & Transfer Routes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: 'Lonavala Local Sightseeing', desc: 'Explore top attractions in Lonavala in a comfortable cab.' },
                { title: 'Mumbai Airport Transfer', desc: 'Hassle-free pick-up & drop from/to Mumbai Airport.' },
                { title: 'Pune Airport Transfer', desc: 'On-time transfers to/from Pune Airport.' },
                { title: 'Lonavala to Shirdi', desc: 'Comfortable one way or round trip.' },
                { title: 'Lonavala to Mahabaleshwar', desc: 'Scenic drive to the queen of hill stations.' },
                { title: 'Lonavala to Alibaug', desc: 'Enjoy a smooth journey to the beaches.' },
                { title: 'Lonavala to Mumbai', desc: 'One way or round trip options available.' },
                { title: 'Outstation Trips', desc: 'Custom outstation trips as per your plan.' },
              ].map((route, idx) => (
                <div key={idx} className="bg-white border border-[#DCE4DF] rounded-xl p-5 shadow-sm flex items-start gap-3">
                  <MapPin size={20} className="text-[#075B3A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#17211D] text-sm mb-1">{route.title}</h3>
                    <p className="text-[#66716C] text-[10px] leading-relaxed">{route.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/contact" className="text-[#17211D] font-bold text-sm bg-white border border-[#DCE4DF] hover:bg-[#F7F9F7] px-6 py-2.5 rounded-lg transition-colors">
                Explore More Routes ›
              </Link>
            </div>
          </section>

          {/* Why Choose Our Cab Services? */}
          <section className="bg-white border border-[#DCE4DF] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-bold text-[#17211D] mb-8 relative z-10">Why Choose Our Cab Services?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
              {[
                { icon: Timer, title: 'Punctual & Reliable', desc: 'We value your time and ensure on-time service.' },
                { icon: ThumbsUp, title: 'Comfort & Safety', desc: 'Travel in comfort with verified drivers and safe vehicles.' },
                { icon: CheckSquare, title: 'Easy Booking', desc: 'Simple enquiry process and quick response.' },
                { icon: Map, title: 'Customised Trips', desc: 'Tailor-made trips as per your requirement and budget.' },
                { icon: Headset, title: 'Customer Support', desc: '24/7 support for a smooth travel experience.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5EF] border border-[#C6E0D2] flex items-center justify-center mb-3">
                      <Icon size={20} className="text-[#075B3A]" />
                    </div>
                    <h3 className="font-bold text-[#17211D] text-xs sm:text-sm mb-1">{item.title}</h3>
                    <p className="text-[10px] sm:text-xs text-[#66716C] leading-tight">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            
            {/* Subtle Car/Landscape Illustration Placeholder */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 w-[300px] h-[200px]">
              <Image 
                src="/images/cabs/cab_hero.jpg" 
                alt="bg" 
                fill 
                className="object-cover rounded-tl-full mask-image-gradient" 
                style={{ maskImage: 'radial-gradient(ellipse at bottom right, black 20%, transparent 70%)' }}
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
