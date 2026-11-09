import { UserCheck, ShieldCheck, Shield, Headphones } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: 'Local Expertise', desc: 'in Rajasthan' },
  { icon: ShieldCheck, title: 'Transparent', desc: 'Information' },
  { icon: Shield, title: 'Trusted by', desc: 'Travellers' },
  { icon: Headphones, title: 'Travel', desc: 'Assistance' },
];

export default function TrustGrid() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 lg:grid lg:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex-shrink-0 flex items-center gap-2.5 bg-[#F7F9F7] border border-[#DCE4DF] rounded-xl px-3 py-3 min-w-[160px] lg:min-w-0"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EAF5EF] flex items-center justify-center shrink-0">
                <Icon size={17} strokeWidth={1.8} className="text-[#075B3A]" />
              </div>
              <div>
                <div className="text-[#17211D] font-semibold text-xs leading-tight">{item.title}</div>
                <div className="text-[#66716C] text-[10px] leading-tight mt-0.5">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
