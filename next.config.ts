import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bizickagpjzzylmkachz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Old Lonavala Hotel detail redirects
      { source: '/hotels/aamby-valley-city', destination: '/hotels', permanent: true },
      { source: '/hotels/della-resorts', destination: '/hotels', permanent: true },
      { source: '/hotels/fariyas-resort', destination: '/hotels', permanent: true },
      { source: '/hotels/rhythm-lonavala', destination: '/hotels', permanent: true },

      // Old Lonavala Villa detail redirects
      { source: '/villas/green-valley-private-villa', destination: '/villas', permanent: true },
      { source: '/villas/mountain-view-villa', destination: '/villas', permanent: true },
      { source: '/villas/lonavala-hillside-retreat', destination: '/villas', permanent: true },
      { source: '/villas/cozy-forest-villa', destination: '/villas', permanent: true },

      // Old Lonavala Tour detail redirects
      { source: '/tours/tiger-point-sunrise-tour', destination: '/tours', permanent: true },
      { source: '/tours/lonavala-sightseeing-tour', destination: '/tours', permanent: true },
      { source: '/tours/lonavala-nature-waterfall-tour', destination: '/tours', permanent: true },
      { source: '/tours/caves-bhaja-caves-tour', destination: '/tours', permanent: true },
    ];
  },
};

export default nextConfig;
