import { Hotel } from '@/types';

const defaultAmenities = [
  { label: 'Swimming Pool', icon: 'Waves' },
  { label: 'Multi-Cuisine Dining', icon: 'Utensils' },
  { label: 'Parking Area', icon: 'CircleParking' },
  { label: 'Wi-Fi Access', icon: 'Wifi' },
  { label: 'Room Service', icon: 'ConciergeBell' },
  { label: 'Travel Assistance', icon: 'Headphones' },
  { label: 'Spa & Wellness', icon: 'Flower2' },
  { label: 'Fitness Center', icon: 'Dumbbell' },
];

export const hotels: Hotel[] = [
  {
    id: 'the-ananta-udaipur',
    name: 'The Ananta Udaipur',
    location: 'Kodiyat Road, Udaipur',
    image: '/images/hotels/hotel-1.jpg',
    slug: 'the-ananta-udaipur',
    description: 'A 40-acre hillside resort in the Aravallis with more than 230 villas, open-to-sky bathrooms and wide mountain views.',
    about: `The Ananta Udaipur is a sprawling 40-acre hillside retreat situated along Kodiyat Road against the backdrop of the Aravalli range. Set amidst lush greenery, the property features over 230 contemporary villas and luxury cottages designed with open-to-sky bathrooms, wide balconies, and expansive valley views.

The property is situated within convenient driving distance of Udaipur's prime attractions, with Lake Pichola, the City Palace complex, Sajjangarh (Monsoon Palace), and the historic old-city ghats just a short drive away. Guests can easily plan sightseeing outings while returning to the quiet hillside sanctuary.

Property features include a large infinity swimming pool, the signature Mudra Spa offering Ayurvedic wellness therapies, multiple dining venues, fitness facilities, and banquet lawns. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Village Bujhda, Tehsil Girwa, Kodiyat Road, Udaipur, Rajasthan 313031',
    gettingThere: 'About 30 km from Maharana Pratap Airport (UDR), about 11 km from Udaipur Railway Station',
    quickFacts: [
      { label: 'Estate', value: '40+ acres' },
      { label: 'Villas', value: '230+' },
      { label: 'Setting', value: 'Aravalli valley' },
      { label: 'Key Feature', value: 'Open-to-sky bathrooms' },
    ],
    highlights: [
      'Hillside setting with ridge views from villa balconies',
      'Garden-style open-air showers in select villas',
      'Large infinity pool overlooking the valley',
      'Mudra Spa with Ayurvedic wellness therapies',
    ],
    dining: [
      'Oasis (All-day multi-cuisine, Rajasthani and North Indian)',
      'Float (Poolside bar and lounge)',
      'Ananta Tara (Open-air hillside terrace, grills)',
    ],
    amenities: [
      { label: 'Infinity Pool', icon: 'Waves' },
      { label: 'Mudra Spa & Wellness', icon: 'Flower2' },
      { label: 'Fitness Centre', icon: 'Dumbbell' },
      { label: 'Kids Activity Zone', icon: 'Smile' },
      { label: 'Walking Trails', icon: 'Footprints' },
      { label: 'Banquet Lawns', icon: 'Trees' },
      { label: 'In-Room Dining', icon: 'Utensils' },
      { label: 'Wi-Fi & Travel Desk', icon: 'Wifi' },
    ],
    rooms: [
      { name: 'Luxury Cottage', description: 'Comfortable individual cottage with garden or valley views.' },
      { name: 'Premium Wooden Cottage with Bathtub', description: 'Timber architecture with attached modern bathtub.' },
      { name: 'Executive Suite', description: 'Spacious suite accommodation with private seating area.' },
      { name: 'Grand Suite', description: 'Two-bedroom family suite ideal for small groups.' },
      { name: 'Presidential Villa', description: 'Exclusive villa layout featuring private plunge pool.' },
      { name: 'Ananta Villa & Chairman Villa', description: 'Spacious signature villas with premium estate outlook.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Hillside Resort',
        suitableFor: 'Couples, Families, Groups',
        accommodationType: 'Villas & Cottages',
        setting: 'Aravalli Valley',
      },
      accommodationRooms: [
        { name: 'Luxury Cottage', features: ['Balcony View', 'Open-to-sky Shower', 'King Bed'] },
        { name: 'Presidential Villa', features: ['Private Plunge Pool', 'Living Room', 'Panoramic View'] },
      ],
      roomFeatures: [
        { label: 'Balcony', icon: 'Trees' },
        { label: 'Open Bath', icon: 'Droplets' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Oasis', description: 'Multi-cuisine and Rajasthani specialties', icon: 'Utensils' },
        { title: 'Ananta Tara', description: 'Hillside terrace grills', icon: 'Flame' },
      ],
    },
  },
  {
    id: 'ananta-spa-resort-pushkar',
    name: 'Ananta Spa & Resort Pushkar',
    location: 'Leela Sevri, Pushkar',
    image: '/images/hotels/hotel-2.jpg',
    slug: 'ananta-spa-resort-pushkar',
    description: 'A 9-acre resort just outside Pushkar with standalone cottages and canopied tented suites set around palm courtyards.',
    about: `Ananta Spa & Resort Pushkar is laid out across 9 peaceful acres in Leela Sevri, situated approximately 4 km before entering the town of Pushkar. The resort blends desert-inspired architecture with contemporary comforts, featuring 72 keys divided between independent cottages and canopied tented suites.

The resort provides convenient access to Pushkar's sacred sites and cultural highlights. Pushkar Lake, the historic Brahma Temple, vibrant desert bazaars, the sacred ghats, and camel safari starting points across the dunes are all within a short driving radius.

Guests can enjoy an expansive central swimming pool flanked by palm gazebos, wellness therapies at the Mudra Ayurvedic Spa, landscaped courtyards, and regional Rajasthani dining. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Village Leela Sevri, 4 km before Pushkar, Rajasthan 305022',
    gettingThere: 'About 140 km from Jaipur International Airport (JAI), about 13 km from Ajmer Junction',
    quickFacts: [
      { label: 'Grounds', value: '9 acres' },
      { label: 'Keys', value: '72 keys (52 cottages, 20 tented suites)' },
      { label: 'Setting', value: 'Desert and hills' },
      { label: 'Signature', value: 'Tented suites' },
    ],
    highlights: [
      'Air-conditioned tented suites with wooden interiors',
      'Central pool with shaded palm gazebos',
      'Authentic Rajasthani thalis and regional cuisine',
      'Mudra Ayurvedic spa with rejuvenation therapies',
    ],
    dining: [
      'Oasis Pushkar (Multi-cuisine all-day dining)',
      'Gazebo Deck (Poolside evening lounge)',
    ],
    amenities: [
      { label: 'Outdoor Pool', icon: 'Waves' },
      { label: 'Mudra Ayurvedic Spa', icon: 'Flower2' },
      { label: 'Palm Courtyards', icon: 'Trees' },
      { label: 'Multi-Cuisine Dining', icon: 'Utensils' },
      { label: 'Banquet & Event Lawn', icon: 'Sparkles' },
      { label: 'Wi-Fi Access', icon: 'Wifi' },
      { label: 'Pushkar Sightseeing Desk', icon: 'MapPin' },
    ],
    rooms: [
      { name: 'Cottages and tented suites, details on enquiry', description: '5 room categories available; submit an enquiry for specific layouts and configurations.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Spa Resort',
        suitableFor: 'Couples, Families, Pilgrims',
        accommodationType: 'Cottages & Luxury Tents',
        setting: 'Desert Foothills',
      },
      accommodationRooms: [
        { name: 'Tented Suite', features: ['Canopied Ceiling', 'Air Conditioning', 'Private Verandah'] },
        { name: 'Heritage Cottage', features: ['Stone Flooring', 'Garden View', 'Attached Bath'] },
      ],
      roomFeatures: [
        { label: 'Verandah', icon: 'Trees' },
        { label: 'AC', icon: 'Wind' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Oasis Pushkar', description: 'Regional Indian and continental fare', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'ananta-spa-resort-ajabgarh',
    name: 'Ananta Spa & Resort Ajabgarh',
    location: 'Ajabgarh, Alwar',
    image: '/images/hotels/hotel-3.jpg',
    slug: 'ananta-spa-resort-ajabgarh',
    description: 'A quiet boutique resort in the Aravalli valley near Sariska, known for stone villas with private plunge pools.',
    about: `Ananta Spa & Resort Ajabgarh is a serene boutique property situated in the tranquil Aravalli valley of Alwar district near Sariska. The resort is designed with local stone architecture, featuring private courtyard villas, dedicated plunge pools, and uninterrupted views of the rugged mountain ridges.

The surrounding region is rich in nature and historical interest. Guests can arrange wildlife safaris into Sariska Tiger Reserve, explore the famed ruins and stepwells of Bhangarh Fort, or visit the historic Ajabgarh Fort located nearby.

Amenities include a central outdoor swimming pool, the Mudra Spa offering holistic wellness therapies, courtyard dining serving farm-fresh regional fare, and an open-air stargazing terrace. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Tehsil Thanagazi, District Alwar, Rajasthan 301027',
    gettingThere: 'About 95 km from Jaipur International Airport (JAI), about 60 km from Dausa Railway Station',
    quickFacts: [
      { label: 'Ambiance', value: 'Boutique' },
      { label: 'Surroundings', value: 'Sariska foothills' },
      { label: 'Signature', value: 'Private pool villas' },
      { label: 'Experiences', value: 'Nature and heritage' },
    ],
    highlights: [
      'Secluded valley setting amidst the Aravalli ridges',
      'Stone villas with private splash pools',
      'Close proximity to Sariska Tiger Reserve and Bhangarh',
      'Holistic wellness therapies at Mudra Spa',
    ],
    dining: [
      'Valley Dine (Regional Indian, farm-to-table style)',
    ],
    amenities: [
      { label: 'Central Pool', icon: 'Waves' },
      { label: 'Mudra Spa', icon: 'Flower2' },
      { label: 'Courtyard Dining', icon: 'Utensils' },
      { label: 'Stargazing Terrace', icon: 'Sparkles' },
      { label: 'Safari & Tour Desk', icon: 'Compass' },
      { label: 'Wi-Fi in Villas', icon: 'Wifi' },
    ],
    rooms: [
      { name: 'Villas and suites, details on enquiry', description: '5 room categories available; submit an enquiry for specific layout and availability details.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Boutique Nature Resort',
        suitableFor: 'Couples, Wildlife Travellers',
        accommodationType: 'Pool Villas',
        setting: 'Sariska Foothills',
      },
      accommodationRooms: [
        { name: 'Private Pool Villa', features: ['Plunge Pool', 'Stone Courtyard', 'Valley View'] },
      ],
      roomFeatures: [
        { label: 'Pool', icon: 'Waves' },
        { label: 'Courtyard', icon: 'Trees' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Valley Dine', description: 'Regional Indian and farm-to-table cuisine', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'ananta-spa-resort-jaipur',
    name: 'Ananta Spa & Resort Jaipur',
    location: 'Kukas, Jaipur',
    image: '/images/hotels/hotel-4.jpg',
    slug: 'ananta-spa-resort-jaipur',
    description: 'A palace-style resort on the Delhi–Jaipur highway at Kukas, with large banquet spaces and easy access to Amer Fort.',
    about: `Ananta Spa & Resort Jaipur is a grand palace-style property situated in Kukas along the Delhi–Jaipur highway. Featuring classic Rajputana architecture with intricate jharokhas, carved stone arches, and expansive courtyards, the resort provides an elegant base on the northern approach to Jaipur.

Its position offers convenient connectivity to Jaipur's iconic northern heritage circuit. The dramatic hilltop ramparts of Amer Fort, Jaigarh Fort, Nahargarh Fort, the scenic Jal Mahal water palace, and the bazaars of the walled Pink City are all easily accessible by cab.

The property is equipped with a large outdoor swimming pool with arched pavilions, the Mudra Spa and salon, multiple dining outlets, a fitness pavilion, and spacious indoor ballrooms and outdoor lawns. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-4.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
    ],
    address: 'Delhi-Jaipur Highway, Kukas, Jaipur, Rajasthan',
    gettingThere: 'About 32 km from Jaipur International Airport (JAI), about 22 km from Jaipur Junction',
    quickFacts: [
      { label: 'Style', value: 'Palatial Rajputana' },
      { label: 'Location', value: 'Kukas, Jaipur' },
      { label: 'Events', value: 'Ballrooms and lawns' },
      { label: 'Heritage', value: 'Near Amer Fort' },
    ],
    highlights: [
      'Traditional jharokhas, carved stone work and courtyards',
      'Large swimming pool with arched pavilions',
      'Expansive ballrooms and manicured lawns',
      'Full-service Mudra Spa and salon',
    ],
    dining: [
      'Sheesh Mahal Dining (Rajasthani and multi-cuisine)',
      'Sura Lounge & Bar',
    ],
    amenities: [
      { label: 'Swimming Pool', icon: 'Waves' },
      { label: 'Mudra Spa & Salon', icon: 'Flower2' },
      { label: 'Fitness Pavilion', icon: 'Dumbbell' },
      { label: 'Signature Dining', icon: 'Utensils' },
      { label: 'Ballrooms & Lawns', icon: 'Sparkles' },
      { label: 'Valet & Concierge', icon: 'Car' },
      { label: 'Wi-Fi Access', icon: 'Wifi' },
    ],
    rooms: [
      { name: 'Rooms and suites, details on enquiry', description: '2 room categories available; submit an enquiry for specific room types and inclusions.' },
    ],
    frontend_layout: {
      quickInfo: {
        propertyType: 'Palace-style Resort',
        suitableFor: 'Weddings, Families, Leisure',
        accommodationType: 'Rooms & Royal Suites',
        setting: 'Northern Jaipur Highway',
      },
      accommodationRooms: [
        { name: 'Royal Room', features: ['King Bed', 'Carved Arch', 'Work Desk'] },
        { name: 'Palace Suite', features: ['Living Area', 'Jharokha Seating', 'Luxury Bath'] },
      ],
      roomFeatures: [
        { label: 'Arch View', icon: 'Building' },
        { label: 'Smart TV', icon: 'Tv' },
        { label: 'Wi-Fi', icon: 'Wifi' },
      ],
      diningAndFood: [
        { title: 'Sheesh Mahal Dining', description: 'Rajasthani cuisine and multi-cuisine classics', icon: 'Utensils' },
      ],
    },
  },
  {
    id: 'taj-lake-palace-udaipur',
    name: 'Taj Lake Palace',
    location: 'Lake Pichola, Udaipur',
    image: '/images/hotels/hotel-1.jpg',
    slug: 'taj-lake-palace-udaipur',
    description: 'An iconic 18th-century white marble palace floating in the middle of Lake Pichola with historic royal architecture.',
    about: `Taj Lake Palace is a world-renowned heritage property constructed of white marble that appears to float on the waters of Lake Pichola in Udaipur. Originally built in the 1740s as a royal summer palace, it features intricate stone filigree work, ornate inner courtyards, and open-air pavilions.

Set on an island in Lake Pichola, the property is reached via a short boat ride from the city pier. The historic City Palace complex, Jagdish Temple, Bagore Ki Haveli, and the vibrant arts and crafts bazaars of the old quarter are all situated along the opposite lake shore.

Facilities include fine dining heritage restaurants, a tranquil courtyard pool, a dedicated wellness spa, and traditional cultural performances in the evening courtyards. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Lake Pichola, Udaipur, Rajasthan 313001',
    gettingThere: 'About 25 km from Maharana Pratap Airport (UDR), about 4 km from Udaipur Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Palace Rooms & Suites', description: 'Historic rooms offering views of Lake Pichola and the City Palace.' },
    ],
  },
  {
    id: 'the-leela-palace-udaipur',
    name: 'The Leela Palace Udaipur',
    location: 'Lake Pichola, Udaipur',
    image: '/images/hotels/hotel-2.jpg',
    slug: 'the-leela-palace-udaipur',
    description: 'A palatial lakeside hotel on the banks of Lake Pichola offering views of the City Palace and Aravalli hills.',
    about: `The Leela Palace Udaipur is situated on the tranquil western banks of Lake Pichola. Designed in the majestic grand style of Mewar palaces, the property showcases domed pavilions, hand-painted murals, courtyard fountains, and panoramic waterfront vistas.

The hotel provides easy access by boat and road to Udaipur's primary cultural sights, including the City Palace, Jag Mandir, the Monsoon Palace on the overlooking ridge, and Saheliyon Ki Bari.

On-site facilities include lake-facing dining venues, a heated outdoor swimming pool, the Spa by ESPA, private dining gazebos, and heritage boat excursions across Pichola. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Lake Pichola, Udaipur, Rajasthan 313001',
    gettingThere: 'About 26 km from Maharana Pratap Airport (UDR), about 5 km from Udaipur Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Grand Heritage Rooms & Suites', description: 'Elegantly appointed rooms with views of Lake Pichola.' },
    ],
  },
  {
    id: 'radisson-blu-palace-resort-udaipur',
    name: 'Radisson Blu Palace Resort & Spa',
    location: 'Malla Talai, Udaipur',
    image: '/images/hotels/hotel-3.jpg',
    slug: 'radisson-blu-palace-resort-udaipur',
    description: 'A contemporary palace-style resort situated near Fateh Sagar Lake with spacious rooms and expansive banquet venues.',
    about: `Radisson Blu Palace Resort & Spa is situated in the Malla Talai area of Udaipur, overlooking the tranquil shores of Fateh Sagar Lake. The resort combines modern hospitality amenities with palatial regional touches, catering to both vacationers and event travellers.

The location is well-positioned for exploring the city's scenic northern lake circuit. Fateh Sagar Lake, Nehru Park island, the Saheliyon Ki Bari ornamental gardens, and the winding roads leading up to Sajjangarh are located close by.

Resort amenities encompass multi-tier outdoor swimming pools, a luxury spa, multiple specialty restaurants, a two-level lounge, and comprehensive event venues. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'B-1, Ambamata Scheme-A Road, Malla Talai, Udaipur, Rajasthan 313001',
    gettingThere: 'About 26 km from Maharana Pratap Airport (UDR), about 6 km from Udaipur Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Deluxe & Business Rooms', description: 'Spacious guest rooms with lake or garden views.' },
    ],
  },
  {
    id: 'welcomheritage-traditional-haveli-jaipur',
    name: 'WelcomHeritage Traditional Haveli',
    location: 'Bani Park, Jaipur',
    image: '/images/hotels/hotel-4.jpg',
    slug: 'welcomheritage-traditional-haveli-jaipur',
    description: 'A restored heritage mansion in the quiet residential neighbourhood of Bani Park featuring authentic Rajasthani craft.',
    about: `WelcomHeritage Traditional Haveli is a heritage mansion property located in the pleasant residential quarter of Bani Park in Jaipur. Constructed with classical arches, painted frescoes, and internal courtyard spaces, it offers travellers an authentic glimpse into aristocratic Rajasthani architecture.

Bani Park provides convenient connectivity to both old and new Jaipur. The walled Pink City, City Palace, Hawa Mahal, and Jaipur Railway Station are situated within comfortable driving distances.

The hotel features a rooftop dining area, an indoor swimming pool, traditional courtyard sitting areas, and heritage hospitality services. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-4.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
    ],
    address: 'AC-4C, Gayatri Marg, Sawai Jai Singh Highway, Bani Park, Jaipur, Rajasthan 302016',
    gettingThere: 'About 14 km from Jaipur International Airport (JAI), about 2 km from Jaipur Junction',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Heritage Haveli Rooms', description: 'Charmingly furnished rooms with traditional decor accents.' },
    ],
  },
  {
    id: 'taj-hari-mahal-jodhpur',
    name: 'Taj Hari Mahal',
    location: 'Jodhpur',
    image: '/images/hotels/hotel-1.jpg',
    slug: 'taj-hari-mahal-jodhpur',
    description: 'A 6-acre palatial retreat in Jodhpur blending 14th-century Marwar architecture with contemporary comforts.',
    about: `Taj Hari Mahal is an expansive 6-acre hotel situated in the Sun City of Jodhpur. The architecture draws inspiration from 14th-century royal Marwar design, showcasing grand domes, carved arches, jharokhas, and landscaped garden courtyards.

From this centrally situated property, travellers can easily organize visits across Jodhpur. Mehrangarh Fort, Jaswant Thada, the Clock Tower and Sardar Market, and Umaid Bhawan Palace are all a short drive away.

Highlights include an outdoor swimming pool set in landscaped gardens, signature Marwari and Chinese dining venues, a wellness centre, and banquet spaces. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: '5, Residency Road, Jodhpur, Rajasthan 342001',
    gettingThere: 'About 4 km from Jodhpur Airport (JDH), about 3.5 km from Jodhpur Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Superior & Executive Rooms', description: 'Rooms styled with Marwar accents and modern amenities.' },
    ],
  },
  {
    id: 'fort-rajwada-jaisalmer',
    name: 'Fort Rajwada',
    location: 'Jaisalmer',
    image: '/images/hotels/hotel-2.jpg',
    slug: 'fort-rajwada-jaisalmer',
    description: 'A grand yellow-sandstone hotel in Jaisalmer showcasing traditional jali stone-carving and Thar desert heritage.',
    about: `Fort Rajwada is a grand property constructed in the indigenous golden-yellow sandstone of Jaisalmer, located in 6 acres of tranquil grounds. The hotel showcases the master craftsmanship of local stone-carvers with ornate jali screens, grand balconies, and traditional courtyards.

Situated on the outskirts of Jaisalmer city, the hotel is conveniently placed for reaching the living Jaisalmer Fort, Patwon Ki Haveli, and Gadisar Lake, as well as embarking on afternoon journeys out to the Sam sand dunes.

Features include an open-air swimming pool surrounded by stone colonnades, multi-cuisine dining serving Rajasthani specialties, a health club, and a desert excursion desk. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: '1, Hotel Complex, Jodhpur-Barmer Link Road, Jaisalmer, Rajasthan 345001',
    gettingThere: 'About 12 km from Jaisalmer Airport (JSA), about 3 km from Jaisalmer Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Deluxe Rooms & Royal Suites', description: 'Air-conditioned rooms built with warm yellow sandstone.' },
    ],
  },
  {
    id: 'hummingbird-resorts-mount-abu',
    name: 'Hummingbird Resorts Mount Abu',
    location: 'Achalgarh Road, Mount Abu',
    image: '/images/hotels/hotel-3.jpg',
    slug: 'hummingbird-resorts-mount-abu',
    description: 'A peaceful nature resort nestled along Achalgarh Road in Mount Abu, Rajasthan\'s only hill station.',
    about: `Hummingbird Resorts is situated along Achalgarh Road amidst the lush wooded slopes of Mount Abu, the only hill station in Rajasthan. Surrounded by green valleys and rocky hilltops, the resort offers cooler climates and quiet natural scenery.

The property provides a suitable jumping-off point to explore the higher reaches of Mount Abu. The ancient Achalgarh Fort, the renowned marble Dilwara Temples, Nakki Lake, and scenic viewpoints such as Guru Shikhar and Sunset Point are within reasonable driving range.

Amenities include garden view accommodations, on-site multi-cuisine dining, outdoor walking spaces, and bonfire gatherings in the evenings. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-3.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-4.jpg',
    ],
    address: 'Near Achalgarh, Mount Abu, Rajasthan 307501',
    gettingThere: 'About 180 km from Maharana Pratap Airport Udaipur (UDR), about 28 km from Abu Road Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Cottages & Valley Rooms', description: 'Hill station rooms surrounded by green flora.' },
    ],
  },
  {
    id: 'heritage-resort-bikaner',
    name: 'Heritage Resort Bikaner',
    location: 'Jaipur Road, Bikaner',
    image: '/images/hotels/hotel-4.jpg',
    slug: 'heritage-resort-bikaner',
    description: 'A tranquil desert resort on Jaipur Road in Bikaner featuring cottage accommodations amidst expansive grounds.',
    about: `Heritage Resort Bikaner is located on the Jaipur Road on the peaceful outskirts of Bikaner. Spread over extensive grounds, the resort is designed with traditional brick and stone cottage units, manicured garden patches, and open desert skies.

The resort offers an easy base for discovering the rich heritage of northern Rajasthan. Junagarh Fort, the National Research Centre on Camel, Lalgarh Palace, and the old bazaars of Bikaner are all easily accessible.

Amenities include cottage-style rooms with private verandahs, a multi-cuisine restaurant specializing in regional Marwari cooking, open-air seating areas, and cultural evening programs on request. Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding.`,
    images: [
      '/images/hotels/hotel-4.jpg',
      '/images/hotels/hotel-1.jpg',
      '/images/hotels/hotel-2.jpg',
      '/images/hotels/hotel-3.jpg',
    ],
    address: 'Jaipur Road, 9 Km Milestone, Bikaner, Rajasthan 334001',
    gettingThere: 'About 25 km from Nal Airport Bikaner (BKB), about 9 km from Bikaner Junction Railway Station',
    amenities: defaultAmenities,
    rooms: [
      { name: 'Cottage Rooms', description: 'Stand-alone cottage rooms with verandah seating.' },
    ],
  },
];
