import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { BRAND_NAME, PHONE_RAW, EMAIL, OFFICE_ADDRESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Rajasthan Hotels, Resorts, Villas & Local Tours | ${BRAND_NAME}`,
  description: `${BRAND_NAME} is an independent travel agency offering information and enquiry assistance for hotels, resorts, villas, desert camps and local tours across Rajasthan.`,
  keywords: [
    'Rajasthan hotels',
    'hotels in Rajasthan',
    'Rajasthan resorts',
    'Udaipur resorts',
    'Jaipur hotels',
    'Rajasthan villas',
    'Rajasthan tour packages',
    'Rajasthan travel agency',
    'Rajasthan sightseeing tours',
    'Jaisalmer desert camp',
  ],
  openGraph: {
    title: `Rajasthan Hotels, Resorts, Villas & Local Tours | ${BRAND_NAME}`,
    description: `${BRAND_NAME} is an independent travel agency offering information and enquiry assistance for hotels, resorts, villas, desert camps and local tours across Rajasthan.`,
    type: 'website',
    images: ['/images/hero/rajasthan-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Rajasthan Hotels, Resorts, Villas & Local Tours | ${BRAND_NAME}`,
    description: `${BRAND_NAME} is an independent travel agency offering information and enquiry assistance for hotels, resorts, villas, desert camps and local tours across Rajasthan.`,
    images: ['/images/hero/rajasthan-hero.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: BRAND_NAME,
  legalName: 'Vidhi Tour & Travel',
  description: `${BRAND_NAME} is an independent travel agency offering information and enquiry assistance for hotels, resorts, villas, desert camps and local tours across Rajasthan.`,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Rajasthan',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mahavir Nagar, Kandiwali W',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400067',
    addressCountry: 'IN',
  },
  telephone: PHONE_RAW,
  email: EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#17211D]">
        <TopBar />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
