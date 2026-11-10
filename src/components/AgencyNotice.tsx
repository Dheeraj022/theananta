import { Info } from 'lucide-react';
import { BRAND_NAME, LEGAL_ENTITY } from '@/lib/constants';

export default function AgencyNotice() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      <div className="flex items-start gap-3 bg-[#EAF5EF] border border-[#C5DDD1] rounded-2xl px-4 py-3.5">
        <div className="shrink-0 mt-0.5">
          <div className="w-8 h-8 bg-[#075B3A]/10 rounded-xl flex items-center justify-center">
            <Info size={16} strokeWidth={1.8} className="text-[#075B3A]" />
          </div>
        </div>
        <p className="text-[#17211D] text-xs sm:text-[13px] leading-relaxed">
          <span className="font-semibold">{BRAND_NAME} is an independent travel agency</span> operated by {LEGAL_ENTITY}, providing hotel, villa and tour enquiry
          assistance in Rajasthan. We are not affiliated with any hotel, resort or service provider.
        </p>
      </div>
    </section>
  );
}
