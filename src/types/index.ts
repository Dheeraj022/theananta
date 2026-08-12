export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  price: number;
  priceLabel: string;
  image: string;
  slug: string;
}

export interface Tour {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceLabel: string;
  image: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
