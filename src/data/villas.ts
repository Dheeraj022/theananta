import { Villa } from '@/types';

const defaultAmenities = [
  { label: 'Free Wi-Fi', icon: 'Wifi' },
  { label: 'Parking Area', icon: 'CircleParking' },
  { label: 'Kitchen / Dining Access', icon: 'Utensils' },
  { label: 'Courtyard / Sitting Area', icon: 'Trees' },
  { label: 'Caretaker Support', icon: 'UserCheck' },
  { label: 'Travel Assistance', icon: 'Headphones' },
];

export const villas: Villa[] = [
  {
    id: 'the-riverside-estate-udaipur',
    name: 'The Riverside Estate',
    location: 'Udaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Private Villa',
    setting: 'Udaipur outskirts',
    hasPool: true,
    image: '/images/villas/lakeview-heritage-villa-udaipur.jpg',
    slug: 'the-riverside-estate-udaipur',
    description: 'A secluded private estate on the outskirts of Udaipur offering expansive grounds, private swimming pool, and mountain views.',
    about: 'The Riverside Estate is situated on the tranquil outskirts of Udaipur, surrounded by open greenery and the Aravalli hills. Designed for private group stays and family vacations, this estate offers generous indoor living areas, manicured lawns, a private swimming pool, and dedicated caretaker assistance. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/lakeview-heritage-villa-udaipur.jpg',
      '/images/villas/desert-oasis-private-villa-jaisalmer.jpg',
      '/images/villas/aravalli-hills-villa-mount-abu.jpg',
      '/images/hotels/the-ananta-udaipur.jpg',
    ],
    amenities: [
      { label: 'Private Pool', icon: 'Waves' },
      ...defaultAmenities,
    ],
    rooms: [
      { name: 'Entire Estate Stay', description: 'Exclusive booking with access to private living rooms, lawn, and pool.' },
      { name: 'Caretaker Assistance', description: 'On-site staff available for check-in and basic assistance.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Private Villa',
        suitableFor: 'Families & Groups',
        accommodationType: 'Entire Villa',
        setting: 'Udaipur outskirts',
        locationText: 'Udaipur, Rajasthan',
        areaText: 'Outskirts of Udaipur',
      },
      accommodationRooms: [
        { name: 'Spacious Guest Suites', features: ['Air Conditioned', 'En-suite Bath', 'Estate View'] },
      ],
      villaFeatures: [
        { label: 'Private Pool', icon: 'Waves' },
        { label: 'Open Lawn', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Kitchen Facility', description: 'Equipped kitchen area for light meal preparation or catering on request', icon: 'UtensilsCrossed' },
      ],
    },
  },
  {
    id: 'devraj-villa-udaipur',
    name: 'Devraj Villa',
    location: 'Sajjan Nagar, Udaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Private Villa',
    setting: 'Sajjan Nagar area',
    hasPool: false,
    image: '/images/villas/aravalli-hills-villa-mount-abu.jpg',
    slug: 'devraj-villa-udaipur',
    description: 'A comfortable private villa in the Sajjan Nagar neighbourhood of Udaipur, close to Monsoon Palace and Fateh Sagar Lake.',
    about: 'Devraj Villa is located in the peaceful residential area of Sajjan Nagar in Udaipur. It offers well-appointed rooms, a terrace with hill views towards Sajjangarh, and convenient proximity to Fateh Sagar Lake and the city center. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/aravalli-hills-villa-mount-abu.jpg',
      '/images/villas/fort-view-private-villa-kumbhalgarh.jpg',
      '/images/villas/lakeview-heritage-villa-udaipur.jpg',
      '/images/hotels/the-leela-palace-udaipur.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Entire Villa Booking', description: 'Full access to private bedrooms, terrace, and living hall.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Private Villa',
        suitableFor: 'Families & Leisure',
        accommodationType: 'Private Villa',
        setting: 'Sajjan Nagar area',
        locationText: 'Sajjan Nagar, Udaipur, Rajasthan',
        areaText: 'Near Sajjangarh',
      },
      accommodationRooms: [
        { name: 'Comfort Rooms', features: ['Hill View Terrace', 'Attached Bath', 'Air Conditioning'] },
      ],
      villaFeatures: [
        { label: 'Rooftop Terrace', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Dining Space', description: 'Dedicated dining area with local meal ordering support', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'the-udaipur-luxurious-villa',
    name: 'The Udaipur Luxurious Villa',
    location: 'Udaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Private Villa',
    setting: 'Udaipur outskirts',
    hasPool: false,
    image: '/images/villas/fort-view-private-villa-kumbhalgarh.jpg',
    slug: 'the-udaipur-luxurious-villa',
    description: 'A modern residential villa located on the peaceful outskirts of Udaipur, suited for peaceful group getaways.',
    about: 'The Udaipur Luxurious Villa provides contemporary living spaces away from city crowds. With wide balconies, comfortable living halls, and scenic surroundings, it offers a relaxing base for travellers exploring Udaipur. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/fort-view-private-villa-kumbhalgarh.jpg',
      '/images/villas/lakeview-heritage-villa-udaipur.jpg',
      '/images/villas/royal-rajputana-haveli-jaipur.jpg',
      '/images/hotels/taj-lake-palace-udaipur.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Entire Villa Stay', description: 'Private villa booking with living and dining rooms.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Private Villa',
        suitableFor: 'Groups & Families',
        accommodationType: 'Private Villa',
        setting: 'Udaipur outskirts',
        locationText: 'Udaipur, Rajasthan',
        areaText: 'Outskirts of Udaipur',
      },
      accommodationRooms: [
        { name: 'Bedrooms & Living Spaces', features: ['Balconies', 'Air Conditioned', 'Spacious Bathrooms'] },
      ],
      villaFeatures: [
        { label: 'Lounge Area', icon: 'Home' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Home-style Meals', description: 'Meal arrangements available upon prior request', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'elivaas-signature-lakemount-udaipur',
    name: 'ELIVAAS Signature Lakemount',
    location: 'Malla Talai, Udaipur, Rajasthan',
    bedrooms: '2 BHK',
    propertyType: '2 BHK Private Villa',
    setting: 'Malla Talai area',
    hasPool: true,
    image: '/images/villas/desert-oasis-private-villa-jaisalmer.jpg',
    slug: 'elivaas-signature-lakemount-udaipur',
    description: 'A curated 2 BHK private villa in the Malla Talai neighbourhood of Udaipur featuring a private plunge pool.',
    about: 'ELIVAAS Signature Lakemount is a stylish 2 BHK private villa situated in Malla Talai, near Fateh Sagar Lake. Featuring modern interior aesthetics, a private plunge pool, and personalized hospitality, it is ideal for small families or couples seeking privacy. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/desert-oasis-private-villa-jaisalmer.jpg',
      '/images/villas/rose-valley-villa-pushkar.jpg',
      '/images/villas/lakeview-heritage-villa-udaipur.jpg',
      '/images/hotels/hotel-gallery-1.jpg',
    ],
    amenities: [
      { label: 'Private Pool', icon: 'Waves' },
      ...defaultAmenities,
    ],
    rooms: [
      { name: '2 BHK Villa Booking', description: 'Two private bedrooms with ensuite bathrooms, living room, and plunge pool.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: '2 BHK Private Villa',
        suitableFor: 'Small Families & Couples',
        accommodationType: 'Entire 2 BHK Villa',
        setting: 'Malla Talai area',
        locationText: 'Malla Talai, Udaipur, Rajasthan',
        areaText: 'Near Fateh Sagar Lake',
      },
      accommodationRooms: [
        { name: '2 Ensuite Bedrooms', features: ['King Beds', 'Modern Bathrooms', 'Pool Access'] },
      ],
      villaFeatures: [
        { label: 'Private Plunge Pool', icon: 'Waves' },
        { label: 'Designer Living Hall', icon: 'Home' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Equipped Kitchen', description: 'Modern kitchen counter with microwave and kettle', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'jaipur-haveli',
    name: 'Jaipur Haveli',
    location: 'Johri Bazar, Jaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Heritage Haveli Homestay',
    setting: 'Walled city',
    hasPool: false,
    image: '/images/villas/royal-rajputana-haveli-jaipur.jpg',
    slug: 'jaipur-haveli',
    description: 'A restored heritage haveli homestay nestled in Johri Bazar within the historic walled Pink City of Jaipur.',
    about: 'Jaipur Haveli is an authentic heritage residence located in the heart of Johri Bazar within the walled Pink City. The property preserves traditional Rajasthani architectural elements including carved sandstone arches, traditional frescoes, and internal courtyard spaces. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/royal-rajputana-haveli-jaipur.jpg',
      '/images/villas/marwar-heritage-haveli-bikaner.jpg',
      '/images/villas/sun-city-luxury-villa-jodhpur.jpg',
      '/images/hotels/welcomheritage-traditional-haveli-jaipur.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Heritage Haveli Rooms', description: 'Traditional rooms with antique furnishings and modern comforts.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Heritage Haveli Homestay',
        suitableFor: 'Heritage Travellers, Couples',
        accommodationType: 'Haveli Rooms',
        setting: 'Walled city',
        locationText: 'Johri Bazar, Jaipur, Rajasthan',
        areaText: 'Heart of Pink City',
      },
      accommodationRooms: [
        { name: 'Traditional Rooms', features: ['Hand-painted Walls', 'Carved Wooden Furniture', 'Courtyard View'] },
      ],
      villaFeatures: [
        { label: 'Inner Courtyard', icon: 'Trees' },
        { label: 'Historic Architecture', icon: 'Building' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Traditional Rajasthani Breakfast', description: 'Fresh local breakfast served in the courtyard', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'mahlan-haveli-jaipur',
    name: 'Mahlan Haveli',
    location: 'Gopalbari, Jaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Haveli Homestay',
    setting: 'City',
    hasPool: false,
    image: '/images/villas/marwar-heritage-haveli-bikaner.jpg',
    slug: 'mahlan-haveli-jaipur',
    description: 'A welcoming haveli homestay in the Gopalbari area of Jaipur, close to railway and metro connections.',
    about: 'Mahlan Haveli is a charming heritage-style homestay situated in Gopalbari in central Jaipur. Featuring traditional courtyards and warm family hospitality, it allows guests to experience authentic Rajasthani culture while remaining centrally connected to Jaipur\'s attractions. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/marwar-heritage-haveli-bikaner.jpg',
      '/images/villas/royal-rajputana-haveli-jaipur.jpg',
      '/images/villas/rose-valley-villa-pushkar.jpg',
      '/images/hotels/ananta-spa-resort-jaipur.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Homestay Rooms', description: 'Air-conditioned rooms with traditional accents and attached bathrooms.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Haveli Homestay',
        suitableFor: 'Couples & Solo Travellers',
        accommodationType: 'Haveli Rooms',
        setting: 'City',
        locationText: 'Gopalbari, Jaipur, Rajasthan',
        areaText: 'Central Jaipur',
      },
      accommodationRooms: [
        { name: 'Deluxe Heritage Rooms', features: ['Air Conditioned', 'Clean Ensuite', 'Wi-Fi'] },
      ],
      villaFeatures: [
        { label: 'Courtyard Sitting', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Home Cooking', description: 'Fresh vegetarian meals available upon request', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'haveli-raghu-niwas-jaipur',
    name: 'Haveli Raghu Niwas',
    location: 'Jhotwara, Jaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Heritage Guest House',
    setting: 'City',
    hasPool: false,
    image: '/images/villas/rose-valley-villa-pushkar.jpg',
    slug: 'haveli-raghu-niwas-jaipur',
    description: 'A heritage guest house located in Jhotwara, Jaipur, showcasing classical Rajput architectural design.',
    about: 'Haveli Raghu Niwas is a heritage guest house situated in Jhotwara in western Jaipur. The property showcases traditional stone arches, open terraces, and hospitable family management, offering travellers a relaxed and cultural stay. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/rose-valley-villa-pushkar.jpg',
      '/images/villas/royal-rajputana-haveli-jaipur.jpg',
      '/images/villas/marwar-heritage-haveli-bikaner.jpg',
      '/images/hotels/welcomheritage-traditional-haveli-jaipur.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Heritage Guest Rooms', description: 'Comfortable rooms equipped with essential modern amenities.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Heritage Guest House',
        suitableFor: 'Families & Culture Enthusiasts',
        accommodationType: 'Guest Rooms',
        setting: 'City',
        locationText: 'Jhotwara, Jaipur, Rajasthan',
        areaText: 'Jhotwara Area',
      },
      accommodationRooms: [
        { name: 'Guest Rooms', features: ['Attached Bath', 'Air Conditioning', 'Traditional Touches'] },
      ],
      villaFeatures: [
        { label: 'Open Terrace', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Dining Service', description: 'Home-style dining options available for guests', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'the-haveli-jaipur',
    name: 'The Haveli',
    location: 'C-Scheme, Jaipur, Rajasthan',
    bedrooms: 'Multiple Bedrooms',
    propertyType: 'Homestay',
    setting: 'City',
    hasPool: false,
    image: '/images/villas/sun-city-luxury-villa-jodhpur.jpg',
    slug: 'the-haveli-jaipur',
    description: 'A stylish boutique homestay located in Jaipur\'s upscale C-Scheme neighbourhood near cafes and boutiques.',
    about: 'The Haveli is a peaceful boutique homestay situated in the prime residential and dining district of C-Scheme in Jaipur. Combining traditional architectural details with modern boutique comforts, it provides great walkability to renowned cafes, art galleries, and restaurants. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.',
    images: [
      '/images/villas/sun-city-luxury-villa-jodhpur.jpg',
      '/images/villas/royal-rajputana-haveli-jaipur.jpg',
      '/images/villas/desert-oasis-private-villa-jaisalmer.jpg',
      '/images/hotels/hotel-gallery-2.jpg',
    ],
    amenities: defaultAmenities,
    rooms: [
      { name: 'Boutique Homestay Rooms', description: 'Elegantly furnished rooms with modern amenities and courtyard views.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Homestay',
        suitableFor: 'Leisure & Business Travellers',
        accommodationType: 'Homestay Rooms',
        setting: 'City',
        locationText: 'C-Scheme, Jaipur, Rajasthan',
        areaText: 'C-Scheme District',
      },
      accommodationRooms: [
        { name: 'Boutique Room', features: ['King Bed', 'Modern Bathroom', 'High-Speed Wi-Fi'] },
      ],
      villaFeatures: [
        { label: 'Verandah', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Morning Breakfast', description: 'Fresh breakfast served daily with tea and coffee', icon: 'Utensils' },
      ],
    },
  },
];
