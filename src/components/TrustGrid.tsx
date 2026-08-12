import { MapPin, BadgePercent, Users, Headphones } from 'lucide-react';

const benefits = [
  { icon: MapPin, title: 'Local Expertise in Lonavala', desc: 'Deep knowledge of the best stays and experiences' },
  { icon: BadgePercent, title: 'Best Deals & Transparent Pricing', desc: 'No hidden charges, honest pricing always' },
  { icon: Users, title: 'Trusted by 1000+ Happy Travellers', desc: 'Consistently delivering memorable stays' },
  { icon: Headphones, title: '24x7 Customer Support', desc: 'We are here whenever you need assistance' },
];

export default function TrustGrid() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-white border border-[#DCE4DF] rounded-2xl p-3 sm:p-4 flex flex-col items-start gap-2.5 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} strokeWidth={1.8} className="text-[#075B3A]" />
              </div>
              <div>
                <h3 className="text-[#17211D] font-bold text-xs sm:text-[13px] leading-tight mb-1">{item.title}</h3>
                <p className="text-[#66716C] text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
