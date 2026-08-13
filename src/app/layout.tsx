import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';

export const metadata: Metadata = {
  title: 'Lonavala Hotels, Resorts, Villas & Local Tours | Lonavala Gateway',
  description:
    'Book hotels, resorts, villas and local tours in Lonavala with Lonavala Gateway. Get local assistance, transparent pricing and booking support.',
  keywords: [
    'Lonavala hotels',
    'hotels in Lonavala',
    'Lonavala resorts',
    'Lonavala villas',
    'Lonavala tour packages',
    'Lonavala travel agency',
    'Lonavala sightseeing tours',
    'Lonavala hotel booking',
  ],
  openGraph: {
    title: 'Lonavala Hotels, Resorts, Villas & Local Tours | Lonavala Gateway',
    description: 'Book hotels, resorts, villas and local tours in Lonavala with Lonavala Gateway.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
