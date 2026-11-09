import { MetadataRoute } from 'next';
import { hotels } from '@/data/hotels';
import { villas } from '@/data/villas';
import { tours } from '@/data/tours';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lonavalagateway.com'; // Keep existing domain until domain changes

  const staticPages = [
    '',
    '/hotels',
    '/villas',
    '/tours',
    '/camping',
    '/cabs',
    '/things-to-do',
    '/about-us',
    '/contact',
    '/enquiry',
    '/terms-conditions',
    '/privacy-policy',
    '/cancellation-policy',
    '/refund-policy',
    '/disclaimer',
    '/hotel-non-affiliation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const hotelPages = hotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const villaPages = villas.map((villa) => ({
    url: `${baseUrl}/villas/${villa.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...hotelPages, ...villaPages, ...tourPages];
}
