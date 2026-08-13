'use client';

import { useState } from 'react';
import { AlertCircle, FileWarning } from 'lucide-react';

export default function InformationCards() {
  const [infoExpanded, setInfoExpanded] = useState(false);
  const [disclaimerExpanded, setDisclaimerExpanded] = useState(false);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6 sm:mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* Important Information */}
        <div className="bg-white border border-[#DCE4DF] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
              <AlertCircle size={16} strokeWidth={1.8} className="text-amber-600" />
            </div>
            <h3 className="text-[#17211D] font-bold text-xs sm:text-sm uppercase tracking-wide">
              Important Information
            </h3>
          </div>
          <p className={`text-[#66716C] text-xs sm:text-[13px] leading-relaxed ${!infoExpanded ? 'line-clamp-3' : ''}`}>
            Prices, availability, amenities and inclusions may vary based on travel dates, occupancy and service provider
            policies. Final availability and price will be confirmed at the time of booking. We recommend confirming all
            details before making any travel arrangements.
          </p>
          <button
            onClick={() => setInfoExpanded(!infoExpanded)}
            className="mt-2 text-[#075B3A] text-xs font-semibold hover:underline"
          >
            {infoExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-white border border-[#DCE4DF] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-[#EAF5EF] rounded-xl flex items-center justify-center shrink-0">
              <FileWarning size={16} strokeWidth={1.8} className="text-[#075B3A]" />
            </div>
            <h3 className="text-[#17211D] font-bold text-xs sm:text-sm uppercase tracking-wide">Disclaimer</h3>
          </div>
          <p className={`text-[#66716C] text-xs sm:text-[13px] leading-relaxed ${!disclaimerExpanded ? 'line-clamp-3' : ''}`}>
            Lonavala Gateway is operated by Vidhi Tour &amp; Travel, an independent travel agency. We are not
            affiliated with, endorsed by or sponsored by any hotel, resort, villa or other service provider. All brand
            names and logos are property of their respective owners.
          </p>
          <button
            onClick={() => setDisclaimerExpanded(!disclaimerExpanded)}
            className="mt-2 text-[#075B3A] text-xs font-semibold hover:underline"
          >
            {disclaimerExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}
