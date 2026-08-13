import HeroSection from '@/components/HeroSection';
import BookingSearch from '@/components/BookingSearch';
import TrustFeatures from '@/components/TrustFeatures';
import HotelCarousel from '@/components/HotelCarousel';
import TourCarousel from '@/components/TourCarousel';
import ExploreMore from '@/components/ExploreMore';
import AgencyNotice from '@/components/AgencyNotice';
import TrustGrid from '@/components/TrustGrid';
import InformationCards from '@/components/InformationCards';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingSearch />
      <TrustFeatures />
      <HotelCarousel />
      <TourCarousel />
      <ExploreMore />
      <AgencyNotice />
      <TrustGrid />
      <InformationCards />
      <Footer />
      {/* Spacer so content doesn't hide behind bottom nav on mobile */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
