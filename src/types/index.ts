export interface Amenity {
  label: string;
  icon: string;
}

export interface RoomOption {
  name: string;
  description: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  image: string;
  slug: string;
  description: string;
  about: string;
  images: string[];
  amenities: Amenity[];
  rooms: RoomOption[];
}

export interface Villa {
  id: string;
  name: string;
  location: string;
  bedrooms: number;
  image: string;
  slug: string;
  description: string;
  about: string;
  images: string[];
  amenities: Amenity[];
  rooms: RoomOption[];
}

export interface Tour {
  id: string;
  name: string;
  duration: string;
  image: string;
  slug: string;
  description: string;
  about: string;
  images: string[];
  amenities: Amenity[];
  itinerary: RoomOption[]; // Reusing name/description structure for itinerary points
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
