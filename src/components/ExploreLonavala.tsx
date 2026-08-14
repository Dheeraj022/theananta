import Image from 'next/image';
import Link from 'next/link';
import { Building, Home, MapPin, Tent, Car, ClipboardList } from 'lucide-react';

const categories = [
  {
    title: 'Hotels & Resorts',
    desc: 'Explore resorts and hotels in Lonavala.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
    link: '/hotels',
  },
  {
    title: 'Villas & Homestays',
    desc: 'Private villas and homestays for your stay.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=400',
    link: '/villas',
  },
  {
    title: 'Local Tours & Sightseeing',
    desc: 'Discover popular places and attractions.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=400',
    link: '/tours',
  },
  {
    title: 'Camping & Outdoor Experiences',
    desc: 'Camping, nature stays and outdoor activities.',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=400',
    link: '/camping',
  },
  {
    title: 'Cabs & Transfers',
    desc: 'Local cabs, airport transfers and more.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400',
    link: '/cabs',
  },
  {
    title: 'Things To Do',
    desc: 'Explore activities and experiences in Lonavala.',
    icon: ClipboardList,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400',
    link: '/activities',
  },
];

export default function ExploreLonavala() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-12 sm:mt-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-12 h-[1px] bg-[#075B3A] opacity-50"></div>
          <h2 className="text-[#075B3A] font-bold text-xl sm:text-2xl tracking-wide uppercase">Explore Lonavala</h2>
          <div className="w-12 h-[1px] bg-[#075B3A] opacity-50"></div>
        </div>
        <p className="text-[#66716C] text-sm sm:text-[15px] font-medium">
          Information & enquiry assistance for hotels, villas, tours and travel experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.title} href={cat.link} className="flex flex-col group h-full">
              <div className="bg-white rounded-xl border border-[#DCE4DF] shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-[110px] sm:h-[130px] w-full shrink-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute -bottom-4 left-3 w-10 h-10 bg-[#075B3A] border-2 border-white rounded-[10px] flex items-center justify-center z-10 shadow-sm">
                    <Icon className="text-white w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-7 px-3 pb-4 sm:px-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#17211D] text-sm sm:text-[15px] leading-tight mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[#66716C] text-[11px] sm:text-xs leading-relaxed mb-4 flex-grow">
                    {cat.desc}
                  </p>
                  
                  <div className="text-[#075B3A] font-bold text-[10px] sm:text-[11px] tracking-wider uppercase flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    VIEW ALL <span className="text-[12px] sm:text-[14px] font-medium">›</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
