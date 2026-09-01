'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function HeroSection() {

  const scrollToForm = () => {
    const formElement = document.getElementById('booking-search');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero/lonavala-hero.jpg"
        alt="Lonavala mountains and valley"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center">

          {/* Hero Copy */}
          <div className="w-full max-w-3xl text-center">
            <p className="text-white font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">
              EXPLORE LONAVALA
            </p>
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] mb-6">
              Your Guide to Stays, Tours &amp; Experiences
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-2">
              Get information about hotels, villas, local tours, camping and more in Lonavala.
            </p>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-medium leading-relaxed mb-8">
              We are here to assist you with your travel plans.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#075B3A] hover:bg-[#06472F] text-white font-bold rounded-xl transition-colors border border-transparent shadow-sm"
              >
                SEND ENQUIRY
              </button>
              <a
                href="https://wa.me/919288085331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-[#075B3A] font-bold rounded-xl transition-colors border border-transparent shadow-sm flex items-center justify-center gap-2"
              >
                {/* Custom WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
