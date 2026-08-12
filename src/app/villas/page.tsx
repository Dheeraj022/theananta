import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Home, Wifi, Car, Trees } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Villas in Lonavala | Valley City Stay Hub',
  description: 'Find private villas in Lonavala for your family or group. Book with Valley City Stay Hub for the best deals and local assistance.',
};

const villas = [
  { id: 'v1', name: 'Green Valley Private Villa', location: 'Lonavala', bedrooms: 4, price: 'From ₹15,000 / Night', features: ['Private Pool', 'WiFi', 'Parking', 'Garden'] },
  { id: 'v2', name: 'Mountain View Villa', location: 'Khandala', bedrooms: 3, price: 'From ₹12,000 / Night', features: ['Garden', 'WiFi', 'Parking', 'BBQ Area'] },
  { id: 'v3', name: 'Lonavala Hillside Retreat', location: 'Lonavala', bedrooms: 5, price: 'From ₹22,000 / Night', features: ['Private Pool', 'WiFi', 'Parking', 'Chef on Request'] },
  { id: 'v4', name: 'Cozy Forest Villa', location: 'Lonavala', bedrooms: 2, price: 'From ₹8,500 / Night', features: ['Garden', 'WiFi', 'Parking', 'Bonfire Area'] },
];

export default function VillasPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#17211D] mb-1">Villas in Lonavala</h1>
          <p className="text-[#66716C] text-sm">Private villa experiences for families and groups</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {villas.map((villa) => (
            <div key={villa.id} className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#EAF5EF] h-[160px] flex items-center justify-center">
                <Home size={48} strokeWidth={1.2} className="text-[#075B3A]/40" />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-[#17211D] text-base mb-1">{villa.name}</h2>
                <p className="text-[#66716C] text-xs mb-2">{villa.location} · {villa.bedrooms} Bedrooms</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {villa.features.map((f) => (
                    <span key={f} className="bg-[#EAF5EF] text-[#075B3A] text-[10px] font-medium px-2 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>
                <p className="text-[#075B3A] font-bold text-sm mb-3">{villa.price}</p>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm interested in ${villa.name} in Lonavala. Please share availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 bg-[#075B3A] text-white text-sm font-semibold rounded-xl hover:bg-[#06472F] transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
