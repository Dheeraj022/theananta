import { Hotel } from '@/types';

const defaultAmenities = [
  { label: 'Swimming Pool', icon: 'Waves' },
  { label: 'Restaurant', icon: 'Utensils' },
  { label: 'Parking Area', icon: 'CircleParking' },
  { label: 'Wi-Fi', icon: 'Wifi' },
  { label: 'Room Service', icon: 'ConciergeBell' },
  { label: '24*7 Support', icon: 'Headphones' },
  { label: 'Gym / Fitness', icon: 'Dumbbell' },
  { label: 'Spa & Wellness', icon: 'Flower2' },
];

const defaultRooms = [
  { name: 'Deluxe Room', description: 'Suitable for solo travellers and couples.' },
  { name: 'Premium Room', description: 'Spacious rooms with added comfort.' },
  { name: 'Family Room', description: 'Ideal for families and group travellers.' },
];

export const hotels: Hotel[] = [
  {
    id: 'aamby-valley',
    name: 'Aamby Valley City',
    location: 'Lonavala',
    rating: 4.5,
    reviews: '1200+',
    image: '/images/hotels/hotel-1.jpg',
    slug: 'aamby-valley-city',
    description: 'This property is located in Lonavala and is known for its scenic surroundings and quality hospitality. It may be suitable for travellers looking for a comfortable stay experience in this region.',
    about: 'This property offers a comfortable stay experience with various facilities and services. Availability, amenities and policies are subject to change as per the property guidelines. For exact details, please submit an enquiry.',
    images: [
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    amenities: defaultAmenities,
    rooms: defaultRooms,
    frontend_layout: {
      quickInfo: {
        propertyType: 'Luxury Hotel',
        suitableFor: 'Couples, Families, Business',
        accommodationType: 'Suites & Rooms',
        setting: 'City Center'
      },
      accommodationRooms: [
        { name: 'Presidential Suite', features: ['King Bed', 'Jacuzzi', 'City View', 'Free Breakfast'] },
        { name: 'Executive Room', features: ['Queen Bed', 'Work Desk', 'Fast Wifi'] }
      ],
      roomFeatures: [
        { label: 'Air Con', icon: 'Wind' },
        { label: 'Smart TV', icon: 'Tv' },
        { label: 'Minibar', icon: 'CupSoda' }
      ],
      diningAndFood: [
        { title: 'Sky Lounge', description: 'Rooftop bar and grill', icon: 'UtensilsCrossed' },
        { title: 'Cafe Mocha', description: '24/7 Coffee shop', icon: 'CupSoda' }
      ]
    },
  },
  {
    id: 'della-resorts',
    name: 'Della Resorts',
    location: 'Kunegaon, Lonavala',
    rating: 4.6,
    reviews: '950+',
    image: '/images/hotels/hotel-2.jpg',
    slug: 'della-resorts',
    description: 'A modern luxury resort set against the hills of Lonavala. Ideal for adventure lovers and luxury seekers looking for a premium escape.',
    about: 'Offering state-of-the-art facilities, fine dining restaurants, and high-end room services, Della Resorts ensures a world-class hospitality experience in Lonavala. For complete details, submit an enquiry.',
    images: [
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    amenities: defaultAmenities,
    rooms: defaultRooms,
  },
  {
    id: 'fariyas-resort',
    name: 'Fariyas Resort',
    location: 'Lonavala',
    rating: 4.4,
    reviews: '700+',
    image: '/images/hotels/hotel-3.jpg',
    slug: 'fariyas-resort',
    description: 'A charming boutique resort nestled in the green hills of Lonavala. Perfect for couples and families looking for a relaxing weekend getaway.',
    about: 'Surrounded by tropical gardens and fresh mountain air, Fariyas Resort features standard and luxury rooms with top hospitality, dining options, and recreational activities.',
    images: [
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    amenities: defaultAmenities,
    rooms: defaultRooms,
  },
  {
    id: 'rhythm-lonavala',
    name: 'Rhythm Lonavala',
    location: 'Lonavala',
    rating: 4.3,
    reviews: '600+',
    image: '/images/hotels/hotel-4.jpg',
    slug: 'rhythm-lonavala',
    description: 'A stylish and comfortable hotel located in the heart of Lonavala, designed for couples, families, and leisure travellers.',
    about: 'With cozy, well-lit spaces and modern amenities, Rhythm Lonavala offers exceptional hospitality and relaxing garden spaces. Please submit an enquiry to check current deals and availability.',
    images: [
      '/images/hotels/hotel-4.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
    ],
    amenities: defaultAmenities,
    rooms: defaultRooms,
  },
];
