-- ── TABLE CREATION ──

-- Drop existing tables to recreate them with the correct columns
DROP TABLE IF EXISTS public.hotels, public.villas, public.tours CASCADE;

-- Create Hotels table
CREATE TABLE IF NOT EXISTS public.hotels (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  rating NUMERIC NOT NULL DEFAULT 4.0,
  reviews TEXT NOT NULL DEFAULT '0+',
  price NUMERIC NOT NULL DEFAULT 0,
  priceLabel TEXT NOT NULL,
  image TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  about TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  amenities JSONB NOT NULL DEFAULT '[]'::jsonb,
  rooms JSONB NOT NULL DEFAULT '[]'::jsonb,
  frontend_layout JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Villas table
CREATE TABLE IF NOT EXISTS public.villas (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  bedrooms INTEGER NOT NULL DEFAULT 1,
  price TEXT NOT NULL,
  image TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  about TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  amenities JSONB NOT NULL DEFAULT '[]'::jsonb,
  rooms JSONB NOT NULL DEFAULT '[]'::jsonb,
  frontend_layout JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Tours table
CREATE TABLE IF NOT EXISTS public.tours (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  duration TEXT NOT NULL,
  price NUMERIC NOT NULL DEFAULT 0,
  priceLabel TEXT NOT NULL,
  image TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  about TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  amenities JSONB NOT NULL DEFAULT '[]'::jsonb,
  itinerary JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.villas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tours ENABLE ROW LEVEL SECURITY;

-- Grant ALL actions (SELECT, INSERT, UPDATE, DELETE) to PUBLIC role (anon & authenticated)
DROP POLICY IF EXISTS "Allow public read hotels" ON public.hotels;
DROP POLICY IF EXISTS "Allow all actions for authenticated users on hotels" ON public.hotels;
DROP POLICY IF EXISTS "Allow all actions for public on hotels" ON public.hotels;
CREATE POLICY "Allow all actions for public on hotels" ON public.hotels FOR ALL TO public USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read villas" ON public.villas;
DROP POLICY IF EXISTS "Allow all actions for authenticated users on villas" ON public.villas;
DROP POLICY IF EXISTS "Allow all actions for public on villas" ON public.villas;
CREATE POLICY "Allow all actions for public on villas" ON public.villas FOR ALL TO public USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read tours" ON public.tours;
DROP POLICY IF EXISTS "Allow all actions for authenticated users on tours" ON public.tours;
DROP POLICY IF EXISTS "Allow all actions for public on tours" ON public.tours;
CREATE POLICY "Allow all actions for public on tours" ON public.tours FOR ALL TO public USING (true) WITH CHECK (true);


-- ── INITIAL SEED DATA ──

-- Populate Hotels
INSERT INTO public.hotels (id, name, location, rating, reviews, price, priceLabel, image, slug, description, about, images, amenities, rooms)
VALUES 
(
  'aamby-valley', 
  'Aamby Valley City', 
  'Lonavala', 
  4.5, 
  '1200+', 
  18000, 
  'From ₹18,000 / Night', 
  '/images/hotels/hotel-1.jpg', 
  'aamby-valley-city', 
  'This property is located in Lonavala and is known for its scenic surroundings and quality hospitality. It may be suitable for travellers looking for a comfortable stay experience in this region.', 
  'This property offers a comfortable stay experience with various facilities and services. Availability, amenities and policies are subject to change as per the property guidelines. For exact details, please submit an enquiry.', 
  '["/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-3.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Swimming Pool", "icon": "Waves"}, {"label": "Restaurant", "icon": "Utensils"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Wi-Fi", "icon": "Wifi"}, {"label": "Room Service", "icon": "ConciergeBell"}, {"label": "24*7 Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "Deluxe Room", "description": "Suitable for solo travellers and couples."}, {"name": "Premium Room", "description": "Spacious rooms with added comfort."}, {"name": "Family Room", "description": "Ideal for families and group travellers."}]'::jsonb
),
(
  'della-resorts', 
  'Della Resorts', 
  'Kunegaon, Lonavala', 
  4.6, 
  '950+', 
  14999, 
  'From ₹14,999 / Night', 
  '/images/hotels/hotel-2.jpg', 
  'della-resorts', 
  'A modern luxury resort set against the hills of Lonavala. Ideal for adventure lovers and luxury seekers looking for a premium escape.', 
  'Offering state-of-the-art facilities, fine dining restaurants, and high-end room services, Della Resorts ensures a world-class hospitality experience in Lonavala. For complete details, submit an enquiry.', 
  '["/images/hotels/hotel-2.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-3.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Swimming Pool", "icon": "Waves"}, {"label": "Restaurant", "icon": "Utensils"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Wi-Fi", "icon": "Wifi"}, {"label": "Room Service", "icon": "ConciergeBell"}, {"label": "24*7 Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "Deluxe Room", "description": "Suitable for solo travellers and couples."}, {"name": "Premium Room", "description": "Spacious rooms with added comfort."}, {"name": "Family Room", "description": "Ideal for families and group travellers."}]'::jsonb
),
(
  'fariyas-resort', 
  'Fariyas Resort', 
  'Lonavala', 
  4.4, 
  '700+', 
  10500, 
  'From ₹10,500 / Night', 
  '/images/hotels/hotel-3.jpg', 
  'fariyas-resort', 
  'A charming boutique resort nestled in the green hills of Lonavala. Perfect for couples and families looking for a relaxing weekend getaway.', 
  'Surrounded by tropical gardens and fresh mountain air, Fariyas Resort features standard and luxury rooms with top hospitality, dining options, and recreational activities.', 
  '["/images/hotels/hotel-3.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Swimming Pool", "icon": "Waves"}, {"label": "Restaurant", "icon": "Utensils"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Wi-Fi", "icon": "Wifi"}, {"label": "Room Service", "icon": "ConciergeBell"}, {"label": "24*7 Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "Deluxe Room", "description": "Suitable for solo travellers and couples."}, {"name": "Premium Room", "description": "Spacious rooms with added comfort."}, {"name": "Family Room", "description": "Ideal for families and group travellers."}]'::jsonb
),
(
  'rhythm-lonavala', 
  'Rhythm Lonavala', 
  'Lonavala', 
  4.3, 
  '600+', 
  8999, 
  'From ₹8,999 / Night', 
  '/images/hotels/hotel-4.jpg', 
  'rhythm-lonavala', 
  'A stylish and comfortable hotel located in the heart of Lonavala, designed for couples, families, and leisure travellers.', 
  'With cozy, well-lit spaces and modern amenities, Rhythm Lonavala offers exceptional hospitality and relaxing garden spaces. Please submit an enquiry to check current deals and availability.', 
  '["/images/hotels/hotel-4.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-3.jpg"]'::jsonb,
  '[{"label": "Swimming Pool", "icon": "Waves"}, {"label": "Restaurant", "icon": "Utensils"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Wi-Fi", "icon": "Wifi"}, {"label": "Room Service", "icon": "ConciergeBell"}, {"label": "24*7 Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "Deluxe Room", "description": "Suitable for solo travellers and couples."}, {"name": "Premium Room", "description": "Spacious rooms with added comfort."}, {"name": "Family Room", "description": "Ideal for families and group travellers."}]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- Populate Villas
INSERT INTO public.villas (id, name, location, bedrooms, price, image, slug, description, about, images, amenities, rooms)
VALUES
(
  'green-valley-villa',
  'Green Valley Private Villa',
  'Lonavala',
  4,
  'From ₹15,000 / Night',
  '/images/hotels/hotel-2.jpg',
  'green-valley-private-villa',
  'A spacious and luxurious 4-BHK private villa located in a serene valley in Lonavala. Ideal for large family gatherings and weekend group stays.',
  'Featuring a private swimming pool, fully equipped kitchen, landscaped lawn, and round-the-clock caretaker service, Green Valley Private Villa ensures complete privacy and comfort. Submit an enquiry to check availability.',
  '["/images/hotels/hotel-2.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-3.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Private Pool", "icon": "Waves"}, {"label": "Free Wi-Fi", "icon": "Wifi"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Kitchen Access", "icon": "Utensils"}, {"label": "Lawn/Garden", "icon": "Trees"}, {"label": "24*7 Caretaker", "icon": "UserCheck"}]'::jsonb,
  '[{"name": "Entire Villa Booking", "description": "Access to all bedrooms, private pool, and common spaces."}, {"name": "Caretaker Support", "description": "Available round the clock for housekeeping and basic needs."}, {"name": "Chef on Request", "description": "Professional cook can be arranged for meals (charges extra)."}]'::jsonb
),
(
  'mountain-view-villa',
  'Mountain View Villa',
  'Khandala',
  3,
  'From ₹12,000 / Night',
  '/images/hotels/hotel-3.jpg',
  'mountain-view-villa',
  'A stunning 3-BHK villa offering breathtaking panoramic views of the Khandala valley. Perfect for nature lovers and small groups.',
  'Perched on a hillside, this villa features spacious bedrooms, a private terrace, BBQ facilities, and high-speed Wi-Fi. Relax and unwind away from the city noise. Submit an enquiry to check current rates.',
  '["/images/hotels/hotel-3.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Private Pool", "icon": "Waves"}, {"label": "Free Wi-Fi", "icon": "Wifi"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Kitchen Access", "icon": "Utensils"}, {"label": "Lawn/Garden", "icon": "Trees"}, {"label": "24*7 Caretaker", "icon": "UserCheck"}]'::jsonb,
  '[{"name": "Entire Villa Booking", "description": "Access to all bedrooms, private pool, and common spaces."}, {"name": "Caretaker Support", "description": "Available round the clock for housekeeping and basic needs."}, {"name": "Chef on Request", "description": "Professional cook can be arranged for meals (charges extra)."}]'::jsonb
),
(
  'lonavala-hillside-retreat',
  'Lonavala Hillside Retreat',
  'Lonavala',
  5,
  'From ₹22,000 / Night',
  '/images/hotels/hotel-1.jpg',
  'lonavala-hillside-retreat',
  'An expansive 5-BHK luxury estate designed for premium getaway experiences. Perfect for corporate retreats or large celebrations.',
  'Equipped with a grand private pool, indoor games area, modern kitchen, and top-tier services, this retreat offers the absolute best in hillside living. Enquire now for booking assistance.',
  '["/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-3.jpg", "/images/hotels/hotel-4.jpg"]'::jsonb,
  '[{"label": "Private Pool", "icon": "Waves"}, {"label": "Free Wi-Fi", "icon": "Wifi"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Kitchen Access", "icon": "Utensils"}, {"label": "Lawn/Garden", "icon": "Trees"}, {"label": "24*7 Caretaker", "icon": "UserCheck"}]'::jsonb,
  '[{"name": "Entire Villa Booking", "description": "Access to all bedrooms, private pool, and common spaces."}, {"name": "Caretaker Support", "description": "Available round the clock for housekeeping and basic needs."}, {"name": "Chef on Request", "description": "Professional cook can be arranged for meals (charges extra)."}]'::jsonb
),
(
  'cozy-forest-villa',
  'Cozy Forest Villa',
  'Lonavala',
  2,
  'From ₹8,500 / Night',
  '/images/hotels/hotel-4.jpg',
  'cozy-forest-villa',
  'A peaceful 2-BHK villa surrounded by lush forest greenery in Lonavala. Ideal for couples or small families looking for quiet relaxation.',
  'This cozy cottage-style villa features a beautiful private garden, bonfire area, kitchen facilities, and comfortable bedrooms. Spend quality time close to nature. Submit your dates to check availability.',
  '["/images/hotels/hotel-4.jpg", "/images/hotels/hotel-1.jpg", "/images/hotels/hotel-2.jpg", "/images/hotels/hotel-3.jpg"]'::jsonb,
  '[{"label": "Private Pool", "icon": "Waves"}, {"label": "Free Wi-Fi", "icon": "Wifi"}, {"label": "Parking Area", "icon": "CircleParking"}, {"label": "Kitchen Access", "icon": "Utensils"}, {"label": "Lawn/Garden", "icon": "Trees"}, {"label": "24*7 Caretaker", "icon": "UserCheck"}]'::jsonb,
  '[{"name": "Entire Villa Booking", "description": "Access to all bedrooms, private pool, and common spaces."}, {"name": "Caretaker Support", "description": "Available round the clock for housekeeping and basic needs."}, {"name": "Chef on Request", "description": "Professional cook can be arranged for meals (charges extra)."}]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- Populate Tours
INSERT INTO public.tours (id, name, duration, price, priceLabel, image, slug, description, about, images, amenities, itinerary)
VALUES
(
  'tiger-point-sunrise',
  'Tiger Point Sunrise Tour',
  '5 Hours',
  1499,
  'From ₹1,499 / Car',
  '/images/tours/tiger-point.jpg',
  'tiger-point-sunrise-tour',
  'Witness a breathtaking sunrise from Lonavala''s famous Tiger Point, followed by visits to scenic nearby spots.',
  'Experience the magic of early morning in the Western Ghats. A private vehicle will pick you up from your hotel or station and take you directly to Tiger Point to enjoy the sunrise, misty valley views, and fresh hot tea. This is a private car tour for up to 6 passengers.',
  '["/images/tours/tiger-point.jpg", "/images/tours/sightseeing.jpg", "/images/tours/waterfall.jpg", "/images/tours/caves.jpg"]'::jsonb,
  '[{"label": "Private AC Cab", "icon": "Car"}, {"label": "Hotel Pickup/Drop", "icon": "MapPin"}, {"label": "Fuel Charges Incl.", "icon": "Fuel"}, {"label": "Driver Allowance Incl.", "icon": "UserCheck"}, {"label": "Toll & Parking Incl.", "icon": "CheckCircle"}, {"label": "24*7 Travel Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "05:30 AM — Hotel Pickup", "description": "Pickup in a clean, private air-conditioned vehicle."}, {"name": "06:15 AM — Tiger Point Sunrise", "description": "Reach Tiger Point to witness the stunning sunrise above the misty valley."}, {"name": "08:00 AM — Lion''s Point & Shivling Point", "description": "Visit neighbouring scenic viewpoints for photography."}, {"name": "09:30 AM — Drop Back to Hotel", "description": "Safe drop back to your hotel or Lonavala station."}]'::jsonb
),
(
  'lonavala-sightseeing',
  'Lonavala Sightseeing Tour',
  '6 Hours',
  1999,
  'From ₹1,999 / Car',
  '/images/tours/sightseeing.jpg',
  'lonavala-sightseeing-tour',
  'Explore the key landmarks and attractions of Lonavala in a comfortable private cab tour.',
  'This custom sightseeing tour covers the iconic highlights of Lonavala including Lonavala Lake, Sunil''s Wax Museum, Ryewood Park, and Khandala Sunset Point. Enjoy a flexible itinerary at your own pace with a dedicated driver. Perfect for families and groups.',
  '["/images/tours/sightseeing.jpg", "/images/tours/tiger-point.jpg", "/images/tours/waterfall.jpg", "/images/tours/caves.jpg"]'::jsonb,
  '[{"label": "Private AC Cab", "icon": "Car"}, {"label": "Hotel Pickup/Drop", "icon": "MapPin"}, {"label": "Fuel Charges Incl.", "icon": "Fuel"}, {"label": "Driver Allowance Incl.", "icon": "UserCheck"}, {"label": "Toll & Parking Incl.", "icon": "CheckCircle"}, {"label": "24*7 Travel Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "09:30 AM — Hotel Pickup", "description": "Dedicated cab picks you up from your location."}, {"name": "10:15 AM — Wax Museum & Ryewood Park", "description": "Explore the wax museum and walk through the historic garden."}, {"name": "12:30 PM — Lonavala Lake & Local Market", "description": "Scenic drive around the lake and stop for local shopping."}, {"name": "02:30 PM — Sunset Point Khandala", "description": "Enjoy spectacular sunset views of the valley and expressway."}, {"name": "03:30 PM — Drop Back", "description": "Drop off at your preferred location in Lonavala."}]'::jsonb
),
(
  'nature-waterfall',
  'Lonavala Nature & Waterfall Tour',
  '6–7 Hours',
  2499,
  'From ₹2,499 / Car',
  '/images/tours/waterfall.jpg',
  'lonavala-nature-waterfall-tour',
  'Experience Lonavala''s gorgeous waterfalls and lush nature viewpoints during the monsoon season.',
  'The ultimate monsoon travel experience in Lonavala. Visit the spectacular Bhushi Dam, Kune Falls, and the lush green Kataldhar valley viewpoints. Safety is our priority, and our experienced driver will guide you to the safest spots to enjoy the monsoon flows.',
  '["/images/tours/waterfall.jpg", "/images/tours/tiger-point.jpg", "/images/tours/sightseeing.jpg", "/images/tours/caves.jpg"]'::jsonb,
  '[{"label": "Private AC Cab", "icon": "Car"}, {"label": "Hotel Pickup/Drop", "icon": "MapPin"}, {"label": "Fuel Charges Incl.", "icon": "Fuel"}, {"label": "Driver Allowance Incl.", "icon": "UserCheck"}, {"label": "Toll & Parking Incl.", "icon": "CheckCircle"}, {"label": "24*7 Travel Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "10:00 AM — Pickup & Drive to Bhushi Dam", "description": "Start the day with a drive to Lonavala''s famous steps waterfall."}, {"name": "12:00 PM — Kune Waterfalls Viewpoint", "description": "Witness India''s highest waterfall cascading down the valley."}, {"name": "02:00 PM — Monsoon Valley Drive", "description": "Scenic drive through green misty hills with multiple photo stops."}, {"name": "04:30 PM — Drop Back to Hotel", "description": "Return safely to your destination."}]'::jsonb
),
(
  'caves-bhaja',
  'Caves & Bhaja Caves Tour',
  '5 Hours',
  1799,
  'From ₹1,799 / Car',
  '/images/tours/caves.jpg',
  'caves-bhaja-caves-tour',
  'Explore the ancient Buddhist rock-cut caves and historic architecture near Lonavala.',
  'Take a journey back in time with a private tour to the Karla and Bhaja Caves. These historic 2nd-century BC rock-cut Buddhist temples feature magnificent wooden architectures, stupas, and grand carvings. Includes a visit to the adjacent Ekvira Devi Temple.',
  '["/images/tours/caves.jpg", "/images/tours/tiger-point.jpg", "/images/tours/sightseeing.jpg", "/images/tours/waterfall.jpg"]'::jsonb,
  '[{"label": "Private AC Cab", "icon": "Car"}, {"label": "Hotel Pickup/Drop", "icon": "MapPin"}, {"label": "Fuel Charges Incl.", "icon": "Fuel"}, {"label": "Driver Allowance Incl.", "icon": "UserCheck"}, {"label": "Toll & Parking Incl.", "icon": "CheckCircle"}, {"label": "24*7 Travel Support", "icon": "Headphones"}]'::jsonb,
  '[{"name": "09:00 AM — Pickup & Drive to Karla", "description": "Travel to the base of Karla Caves."}, {"name": "09:45 AM — Karla Caves & Temple", "description": "Climb the steps to visit the majestic Grand Chaitya cave."}, {"name": "12:00 PM — Bhaja Caves", "description": "Visit the quieter Bhaja Caves featuring ancient rock carvings."}, {"name": "02:00 PM — Drop Back to Lonavala", "description": "Return drive to your hotel."}]'::jsonb
)
ON CONFLICT (id) DO NOTHING;
