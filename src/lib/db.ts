import { supabase, isSupabaseConfigured } from './supabase';
import { Hotel, Villa, Tour } from '@/types';
import { hotels as initialHotels } from '@/data/hotels';
import { villas as initialVillas } from '@/data/villas';
import { tours as initialTours } from '@/data/tours';

// Helpers to read/write mock data from local storage
const isBrowser = typeof window !== 'undefined';

const getMockData = <T>(key: string, initialData: T[]): T[] => {
  if (!isBrowser) return initialData;
  const data = localStorage.getItem(key);
  if (!data) {
    localStorage.setItem(key, JSON.stringify(initialData));
    return initialData;
  }
  try {
    return JSON.parse(data);
  } catch {
    return initialData;
  }
};

const setMockData = <T>(key: string, data: T[]) => {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

// ── HOTELS SERVICE ──

export async function getHotels(): Promise<Hotel[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('hotels')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error && data) return data as Hotel[];
    console.warn('Supabase getHotels error:', error.message, error.details, error.hint, error.code);
  }
  return getMockData<Hotel>('lonavala_hotels_v2', initialHotels);
}

export async function saveHotel(hotel: Hotel): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('hotels')
      .upsert({
        id: hotel.id,
        name: hotel.name,
        location: hotel.location,
        rating: Number(hotel.rating),
        reviews: hotel.reviews,
        price: Number(hotel.price),
        priceLabel: hotel.priceLabel,
        image: hotel.image,
        slug: hotel.slug,
        description: hotel.description,
        about: hotel.about,
        images: hotel.images,
        amenities: hotel.amenities,
        rooms: hotel.rooms,
      });
    if (!error) return true;
    console.warn('Supabase saveHotel error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Hotel>('lonavala_hotels_v2', initialHotels);
  const idx = list.findIndex((h) => h.id === hotel.id);
  if (idx > -1) {
    list[idx] = hotel;
  } else {
    list.push(hotel);
  }
  setMockData('lonavala_hotels_v2', list);
  return true;
}

export async function deleteHotel(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('hotels')
      .delete()
      .eq('id', id);
    if (!error) return true;
    console.warn('Supabase deleteHotel error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Hotel>('lonavala_hotels_v2', initialHotels);
  const updated = list.filter((h) => h.id !== id);
  setMockData('lonavala_hotels_v2', updated);
  return true;
}

// ── VILLAS SERVICE ──

export async function getVillas(): Promise<Villa[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('villas')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error && data) return data as Villa[];
    console.warn('Supabase getVillas error:', error.message, error.details, error.hint, error.code);
  }
  return getMockData<Villa>('lonavala_villas_v2', initialVillas);
}

export async function saveVilla(villa: Villa): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('villas')
      .upsert({
        id: villa.id,
        name: villa.name,
        location: villa.location,
        bedrooms: Number(villa.bedrooms),
        price: villa.price,
        image: villa.image,
        slug: villa.slug,
        description: villa.description,
        about: villa.about,
        images: villa.images,
        amenities: villa.amenities,
        rooms: villa.rooms,
      });
    if (!error) return true;
    console.warn('Supabase saveVilla error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Villa>('lonavala_villas_v2', initialVillas);
  const idx = list.findIndex((v) => v.id === villa.id);
  if (idx > -1) {
    list[idx] = villa;
  } else {
    list.push(villa);
  }
  setMockData('lonavala_villas_v2', list);
  return true;
}

export async function deleteVilla(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('villas')
      .delete()
      .eq('id', id);
    if (!error) return true;
    console.warn('Supabase deleteVilla error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Villa>('lonavala_villas_v2', initialVillas);
  const updated = list.filter((v) => v.id !== id);
  setMockData('lonavala_villas_v2', updated);
  return true;
}

// ── TOURS SERVICE ──

export async function getTours(): Promise<Tour[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('tours')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error && data) return data as Tour[];
    console.warn('Supabase getTours error:', error.message, error.details, error.hint, error.code);
  }
  return getMockData<Tour>('lonavala_tours_v2', initialTours);
}

export async function saveTour(tour: Tour): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('tours')
      .upsert({
        id: tour.id,
        name: tour.name,
        duration: tour.duration,
        price: Number(tour.price),
        priceLabel: tour.priceLabel,
        image: tour.image,
        slug: tour.slug,
        description: tour.description,
        about: tour.about,
        images: tour.images,
        amenities: tour.amenities,
        itinerary: tour.itinerary,
      });
    if (!error) return true;
    console.warn('Supabase saveTour error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Tour>('lonavala_tours_v2', initialTours);
  const idx = list.findIndex((t) => t.id === tour.id);
  if (idx > -1) {
    list[idx] = tour;
  } else {
    list.push(tour);
  }
  setMockData('lonavala_tours_v2', list);
  return true;
}

export async function deleteTour(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from('tours')
      .delete()
      .eq('id', id);
    if (!error) return true;
    console.warn('Supabase deleteTour error:', error.message, error.details, error.hint, error.code);
    return false;
  }

  // Local Storage Fallback
  const list = getMockData<Tour>('lonavala_tours_v2', initialTours);
  const updated = list.filter((t) => t.id !== id);
  setMockData('lonavala_tours_v2', updated);
  return true;
}
