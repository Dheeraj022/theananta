'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2, House, Map, Plus, Pencil, Trash2, X, Check, AlertCircle, RefreshCw, Eye, Lock, Mail, Key, LogOut
} from 'lucide-react';
import {
  getHotels, saveHotel, deleteHotel,
  getVillas, saveVilla, deleteVilla,
  getTours, saveTour, deleteTour
} from '@/lib/db';
import { Hotel, Villa, Tour, Amenity, RoomOption } from '@/types';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

type Category = 'hotel' | 'villa' | 'tour';

const initialAmenityOptions: Record<Category, { label: string; icon: string }[]> = {
  hotel: [
    { label: 'Swimming Pool', icon: 'Waves' },
    { label: 'Restaurant', icon: 'Utensils' },
    { label: 'Parking Area', icon: 'CircleParking' },
    { label: 'Wi-Fi', icon: 'Wifi' },
    { label: 'Room Service', icon: 'ConciergeBell' },
    { label: '24*7 Support', icon: 'Headphones' },
    { label: 'Gym / Fitness', icon: 'Dumbbell' },
    { label: 'Spa & Wellness', icon: 'Flower2' },
  ],
  villa: [
    { label: 'Private Pool', icon: 'Waves' },
    { label: 'Free Wi-Fi', icon: 'Wifi' },
    { label: 'Parking Area', icon: 'CircleParking' },
    { label: 'Kitchen Access', icon: 'Utensils' },
    { label: 'Lawn/Garden', icon: 'Trees' },
    { label: '24*7 Caretaker', icon: 'UserCheck' },
  ],
  tour: [
    { label: 'Private AC Cab', icon: 'Car' },
    { label: 'Hotel Pickup/Drop', icon: 'MapPin' },
    { label: 'Fuel Charges Incl.', icon: 'Fuel' },
    { label: 'Driver Allowance Incl.', icon: 'UserCheck' },
    { label: 'Toll & Parking Incl.', icon: 'CheckCircle' },
    { label: '24*7 Travel Support', icon: 'Headphones' },
  ],
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Category>('hotel');
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [villas, setVillas] = useState<Villa[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Auth States
  const [user, setUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authTab, setAuthTab] = useState<'signin' | 'register'>('signin');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authKey, setAuthKey] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Form Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [formType, setFormType] = useState<Category>('hotel');
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    location: '',
    rating: 4.5,
    reviews: '100+',
    price: 0,
    priceLabel: '',
    image: '',
    slug: '',
    description: '',
    about: '',
    bedrooms: 2,
    duration: '',
    galleryImages: '',
  });

  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>([]);
  const [optionsList, setOptionsList] = useState<RoomOption[]>([]);
  const [newOptionName, setNewOptionName] = useState('');
  const [newOptionDesc, setNewOptionDesc] = useState('');

  // Cover Image upload states
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | null>(null);
  const [coverFileName, setCoverFileName] = useState<string>('');
  const [coverDimensions, setCoverDimensions] = useState<string>('');

  // Gallery Images upload states
  const [galleryFiles, setGalleryFiles] = useState<{ id: string; file: File; preview: string; name: string }[]>([]);
  const [existingGalleryImages, setExistingGalleryImages] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Alerts
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [hData, vData, tData] = await Promise.all([
        getHotels(),
        getVillas(),
        getTours(),
      ]);
      setHotels(hData);
      setVillas(vData);
      setTours(tData);
    } catch (e) {
      console.error(e);
      showAlert('Failed to load listings', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      setCheckingAuth(true);
      if (isSupabaseConfigured && supabase) {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } else {
        const localUser = localStorage.getItem('admin_user');
        if (localUser) {
          try {
            setUser(JSON.parse(localUser));
          } catch {
            setUser(null);
          }
        }
      }
      setCheckingAuth(false);
    };

    checkUser();

    if (isSupabaseConfigured && supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
      return () => {
        subscription.unsubscribe();
      };
    }
  }, []);

  useEffect(() => {
    if (user) {
      loadAllData();
    }
  }, [user]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!authEmail.trim() || !authPassword.trim()) {
      setAuthError('Email and password are required');
      return;
    }
    if (authPassword.length < 6) {
      setAuthError('Password must be at least 6 characters');
      return;
    }
    if (authKey.trim() !== 'LONA2026') {
      setAuthError('Invalid Special Registration Key');
      return;
    }

    setAuthLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase.auth.signUp({
          email: authEmail,
          password: authPassword,
        });
        if (error) {
          setAuthError(error.message);
        } else if (data?.user) {
          showAlert('Registration successful! Check your email or try signing in.', 'success');
          setAuthTab('signin');
          setAuthPassword('');
          setAuthKey('');
        }
      } else {
        // Local fallback storage user list
        const localUsers = JSON.parse(localStorage.getItem('admin_users') || '[]');
        if (localUsers.some((u: any) => u.email === authEmail)) {
          setAuthError('Email is already registered');
        } else {
          localUsers.push({ email: authEmail, password: authPassword });
          localStorage.setItem('admin_users', JSON.stringify(localUsers));
          showAlert('Local Registration successful! You can now Sign In.', 'success');
          setAuthTab('signin');
          setAuthPassword('');
          setAuthKey('');
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Error occurred during registration');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!authEmail.trim() || !authPassword.trim()) {
      setAuthError('Email and password are required');
      return;
    }

    setAuthLoading(true);
    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password: authPassword,
        });
        if (error) {
          setAuthError(error.message);
        } else if (data?.user) {
          setUser(data.user);
          showAlert('Signed in successfully', 'success');
        }
      } else {
        const localUsers = JSON.parse(localStorage.getItem('admin_users') || '[]');
        const matched = localUsers.find((u: any) => u.email === authEmail && u.password === authPassword);
        if (matched) {
          const userObj = { email: authEmail };
          localStorage.setItem('admin_user', JSON.stringify(userObj));
          setUser(userObj);
          showAlert('Signed in locally successfully', 'success');
        } else {
          setAuthError('Invalid email or password');
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Error occurred during sign in');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    } else {
      localStorage.removeItem('admin_user');
    }
    setUser(null);
    showAlert('Signed out successfully', 'success');
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  const revokeObjectUrls = () => {
    if (coverPreviewUrl && coverPreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(coverPreviewUrl);
    }
    galleryFiles.forEach((f) => {
      if (f.preview.startsWith('blob:')) {
        URL.revokeObjectURL(f.preview);
      }
    });
  };

  const handleOpenAddModal = () => {
    revokeObjectUrls();
    setEditId(null);
    setFormType(activeTab);
    setFormData({
      id: `${activeTab}-${Date.now()}`,
      name: '',
      location: activeTab === 'tour' ? 'Lonavala' : '',
      rating: 4.5,
      reviews: '100+',
      price: 0,
      priceLabel: activeTab === 'tour' ? 'From ₹1,499 / Car' : 'From ₹10,000 / Night',
      image: '',
      slug: '',
      description: '',
      about: '',
      bedrooms: 3,
      duration: activeTab === 'tour' ? '5 Hours' : '',
      galleryImages: '',
    });
    setSelectedAmenities([...initialAmenityOptions[activeTab]]);
    
    setCoverFile(null);
    setCoverPreviewUrl(null);
    setCoverFileName('');
    setCoverDimensions('');
    setGalleryFiles([]);
    setExistingGalleryImages([]);

    if (activeTab === 'tour') {
      setOptionsList([
        { name: '09:00 AM — Pickup', description: 'Pickup from your hotel in Lonavala.' },
        { name: '01:00 PM — Drop', description: 'Drop off at your preferred location.' },
      ]);
    } else {
      setOptionsList([
        { name: 'Deluxe Room', description: 'Standard room options.' },
        { name: 'Premium Room', description: 'Luxury rooms.' },
      ]);
    }

    setNewOptionName('');
    setNewOptionDesc('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: any, cat: Category) => {
    revokeObjectUrls();
    setEditId(item.id);
    setFormType(cat);
    setFormData({
      id: item.id || '',
      name: item.name || '',
      location: item.location || '',
      rating: item.rating || 4.5,
      reviews: item.reviews || '100+',
      price: item.price || 0,
      priceLabel: item.priceLabel || item.price || '',
      image: item.image || '',
      slug: item.slug || '',
      description: item.description || '',
      about: item.about || '',
      bedrooms: item.bedrooms || 3,
      duration: item.duration || '',
      galleryImages: (item.images || []).join(', '),
    });
    setSelectedAmenities(item.amenities || []);
    setOptionsList(cat === 'tour' ? (item.itinerary || []) : (item.rooms || []));
    setNewOptionName('');
    setNewOptionDesc('');

    setCoverFile(null);
    setCoverPreviewUrl(item.image);
    setCoverFileName('');
    setCoverDimensions('');
    setGalleryFiles([]);
    setExistingGalleryImages(item.images || []);

    setIsModalOpen(true);
  };

  const handleDeleteListing = async (id: string, cat: Category) => {
    if (!confirm('Are you sure you want to delete this listing?')) return;
    try {
      let ok = false;
      if (cat === 'hotel') ok = await deleteHotel(id);
      else if (cat === 'villa') ok = await deleteVilla(id);
      else ok = await deleteTour(id);

      if (ok) {
        showAlert('Listing deleted successfully', 'success');
        loadAllData();
      } else {
        showAlert('Failed to delete listing', 'error');
      }
    } catch (e) {
      console.error(e);
      showAlert('Error deleting listing', 'error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'name' && !editId) {
        updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      return updated;
    });
  };

  const toggleAmenity = (amenity: Amenity) => {
    if (selectedAmenities.some((a) => a.label === amenity.label)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a.label !== amenity.label));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleAddOption = () => {
    if (!newOptionName.trim() || !newOptionDesc.trim()) return;
    setOptionsList([...optionsList, { name: newOptionName.trim(), description: newOptionDesc.trim() }]);
    setNewOptionName('');
    setNewOptionDesc('');
  };

  const handleRemoveOption = (index: number) => {
    setOptionsList(optionsList.filter((_, idx) => idx !== index));
  };

  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showAlert('Main cover image exceeds 5MB size limit', 'error');
      return;
    }

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      showAlert('Please upload JPG, PNG or WEBP only', 'error');
      return;
    }

    if (coverPreviewUrl && coverPreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(coverPreviewUrl);
    }

    const preview = URL.createObjectURL(file);
    setCoverFile(file);
    setCoverPreviewUrl(preview);
    setCoverFileName(file.name);

    const img = new window.Image();
    img.onload = () => {
      setCoverDimensions(`${img.width} × ${img.height} px`);
    };
    img.src = preview;
  };

  const handleCoverRemove = () => {
    if (coverPreviewUrl && coverPreviewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(coverPreviewUrl);
    }
    setCoverFile(null);
    setCoverPreviewUrl(null);
    setCoverFileName('');
    setCoverDimensions('');
  };

  const handleGallerySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newFiles: { id: string; file: File; preview: string; name: string }[] = [];

    files.forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        showAlert(`Image "${file.name}" exceeds 5MB size limit`, 'error');
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        showAlert(`Image "${file.name}" is not a valid format (use JPG, PNG or WEBP)`, 'error');
        return;
      }
      const isDupSelected = galleryFiles.some((f) => f.name === file.name && f.file.size === file.size);
      if (isDupSelected) return;

      const preview = URL.createObjectURL(file);
      newFiles.push({
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        file,
        preview,
        name: file.name,
      });
    });

    if (newFiles.length > 0) {
      setGalleryFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleGalleryRemove = (id: string, isExisting: boolean, existingPath?: string) => {
    if (isExisting && existingPath) {
      setExistingGalleryImages((prev) => prev.filter((img) => img !== existingPath));
    } else {
      const match = galleryFiles.find((f) => f.id === id);
      if (match) {
        if (match.preview.startsWith('blob:')) {
          URL.revokeObjectURL(match.preview);
        }
        setGalleryFiles((prev) => prev.filter((f) => f.id !== id));
      }
    }
  };

  const uploadSingleFile = async (file: File): Promise<string> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `listings/${fileName}`;

        const { data, error } = await supabase.storage
          .from('listings')
          .upload(filePath, file);

        if (!error && data) {
          const { data: { publicUrl } } = supabase.storage
            .from('listings')
            .getPublicUrl(filePath);
          return publicUrl;
        }
      } catch (err) {
        console.warn('Supabase storage upload failed, trying local upload:', err);
      }
    }

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formDataUpload,
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error || `Failed to upload local file "${file.name}"`);
    }

    const data = await res.json();
    return data.url;
  };

  const handleSaveListing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;

    if (!formData.name || !formData.slug) {
      showAlert('Name and slug are required', 'error');
      return;
    }

    setIsSaving(true);
    setLoading(true);

    try {
      let finalCoverUrl = formData.image;
      if (coverFile) {
        showAlert('Uploading cover image...', 'success');
        finalCoverUrl = await uploadSingleFile(coverFile);
      }

      if (!finalCoverUrl) {
        finalCoverUrl = '/images/hotels/hotel-1.jpg';
      }

      let finalGalleryUrls = [...existingGalleryImages];
      if (galleryFiles.length > 0) {
        showAlert(`Uploading ${galleryFiles.length} gallery images...`, 'success');
        for (const gf of galleryFiles) {
          const url = await uploadSingleFile(gf.file);
          finalGalleryUrls.push(url);
        }
      }

      if (finalGalleryUrls.length === 0) {
        finalGalleryUrls = [finalCoverUrl];
      }

      let ok = false;
      if (formType === 'hotel') {
        const hotel: Hotel = {
          id: formData.id,
          name: formData.name,
          location: formData.location,
          rating: Number(formData.rating),
          reviews: formData.reviews,
          price: Number(formData.price),
          priceLabel: formData.priceLabel,
          image: finalCoverUrl,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: finalGalleryUrls,
          amenities: selectedAmenities,
          rooms: optionsList,
        };
        ok = await saveHotel(hotel);
      } else if (formType === 'villa') {
        const villa: Villa = {
          id: formData.id,
          name: formData.name,
          location: formData.location,
          bedrooms: Number(formData.bedrooms),
          price: formData.priceLabel,
          image: finalCoverUrl,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: finalGalleryUrls,
          amenities: selectedAmenities,
          rooms: optionsList,
        };
        ok = await saveVilla(villa);
      } else {
        const tour: Tour = {
          id: formData.id,
          name: formData.name,
          duration: formData.duration,
          price: Number(formData.price),
          priceLabel: formData.priceLabel,
          image: finalCoverUrl,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: finalGalleryUrls,
          amenities: selectedAmenities,
          itinerary: optionsList,
        };
        ok = await saveTour(tour);
      }

      if (ok) {
        showAlert(editId ? 'Listing updated successfully!' : 'Listing created successfully!', 'success');
        
        revokeObjectUrls();
        setCoverFile(null);
        setGalleryFiles([]);

        setIsModalOpen(false);
        loadAllData();
      } else {
        showAlert('Failed to save listing changes', 'error');
      }
    } catch (err: any) {
      console.error(err);
      showAlert(err.message || 'Error occurred while saving listing', 'error');
    } finally {
      setIsSaving(false);
      setLoading(false);
    }
  };

  const filteredHotels = hotels.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  const filteredVillas = villas.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.location.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTours = tours.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <RefreshCw className="animate-spin text-[#075B3A] mx-auto mb-3" size={32} />
          <p className="text-gray-600 text-sm font-medium">Verifying administrator credentials...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          
          {/* Logo Brand Header */}
          <div className="bg-[#075B3A] text-white px-6 py-6 text-center">
            <div className="inline-flex w-12 h-12 bg-white/10 rounded-2xl items-center justify-center mb-3">
              <Lock size={24} />
            </div>
            <h1 className="text-lg font-black tracking-wider uppercase">LONAVALA GATEWAY</h1>
            <p className="text-green-200 text-xs mt-1">Admin Access Console</p>
          </div>

          {/* Form Content */}
          <div className="p-6">
            
            {/* Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => { setAuthTab('signin'); setAuthError(''); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  authTab === 'signin' ? 'bg-white text-[#17211D] shadow-sm' : 'text-gray-500 hover:text-[#075B3A]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setAuthTab('register'); setAuthError(''); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  authTab === 'register' ? 'bg-white text-[#17211D] shadow-sm' : 'text-gray-500 hover:text-[#075B3A]'
                }`}
              >
                Register
              </button>
            </div>

            {/* Error alerts */}
            {authError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-800">
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                <span className="font-semibold leading-relaxed">{authError}</span>
              </div>
            )}

            {/* General alert success message */}
            {alert && (
              <div className={`mb-4 p-3 rounded-xl flex items-start gap-2.5 text-xs ${
                alert.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {alert.type === 'success' ? <Check size={14} className="shrink-0 mt-0.5" /> : <AlertCircle size={14} className="shrink-0 mt-0.5" />}
                <span className="font-semibold leading-relaxed">{alert.message}</span>
              </div>
            )}

            {/* Auth Form */}
            <form onSubmit={authTab === 'signin' ? handleSignIn : handleRegister} className="space-y-4">
              
              {/* Email */}
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                  <Mail size={11} />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                  <Lock size={11} />
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all"
                />
              </div>

              {/* Special Key (Register only) */}
              {authTab === 'register' && (
                <div className="space-y-1">
                  <label className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                    <Key size={11} />
                    Special Registration Key
                  </label>
                  <input
                    type="password"
                    required
                    value={authKey}
                    onChange={(e) => setAuthKey(e.target.value)}
                    placeholder="Enter registration key"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent transition-all font-mono"
                  />
                  <p className="text-[10px] text-gray-400">Please provide the special key to authorize registration.</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3 bg-[#075B3A] hover:bg-[#06472F] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {authLoading ? (
                  <RefreshCw className="animate-spin" size={14} />
                ) : authTab === 'signin' ? (
                  'Sign In to Console'
                ) : (
                  'Register Admin Account'
                )}
              </button>

            </form>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Admin Header */}
      <header className="bg-[#075B3A] text-white shadow-md">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wide">LONAVALA GATEWAY</h1>
            <p className="text-green-200 text-xs sm:text-sm font-medium">
              Vidhi Tour &amp; Travel · Admin Console ({user?.email})
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadAllData}
              title="Refresh database"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
            >
              <RefreshCw size={16} />
            </button>
            <button
              onClick={handleSignOut}
              title="Sign Out"
              className="p-2 bg-red-600 hover:bg-red-700 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
            >
              <LogOut size={14} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1200px] px-3 sm:px-5 lg:px-6 mt-6">
        
        {/* Alerts */}
        {alert && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 border shadow-sm ${
            alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            {alert.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
            <span className="text-sm font-semibold">{alert.message}</span>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 bg-gray-200/60 p-1.5 rounded-2xl w-full sm:w-auto">
            {[
              { id: 'hotel', label: 'Hotels & Resorts', count: hotels.length, icon: Building2 },
              { id: 'villa', label: 'Villas', count: villas.length, icon: House },
              { id: 'tour', label: 'Local Tours', count: tours.length, icon: Map },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as Category);
                    setSearch('');
                  }}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#075B3A] text-white shadow-sm'
                      : 'text-gray-600 hover:text-[#075B3A] hover:bg-white/60'
                  }`}
                >
                  <TabIcon size={14} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-700'
                  }`}>{tab.count}</span>
                </button>
              );
            })}
          </div>

          {/* Search + Add */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder={`Search ${activeTab}s...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 sm:flex-initial border border-[#DCE4DF] bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent min-w-[200px]"
            />
            <button
              onClick={handleOpenAddModal}
              className="flex items-center justify-center gap-1.5 bg-[#075B3A] hover:bg-[#06472F] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer shrink-0"
            >
              <Plus size={15} />
              <span>Add New</span>
            </button>
          </div>
        </div>

        {/* Listings Layout */}
        {loading ? (
          <div className="text-center py-20 bg-white border border-[#DCE4DF] rounded-2xl shadow-sm flex flex-col items-center justify-center">
            <RefreshCw className="animate-spin text-[#075B3A] mb-3" size={28} />
            <p className="text-[#66716C] text-sm">Loading database listings...</p>
          </div>
        ) : (
          <div className="bg-white border border-[#DCE4DF] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100/80 border-b border-[#DCE4DF]">
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider">Preview</th>
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider">Name &amp; Slug</th>
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider">Location</th>
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider">
                      {activeTab === 'hotel' ? 'Rating' : activeTab === 'villa' ? 'Bedrooms' : 'Duration'}
                    </th>
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider">Price Label</th>
                    <th className="px-4 py-3.5 text-[#66716C] font-bold text-[11px] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === 'hotel' && filteredHotels.map((h) => (
                    <tr key={h.id} className="border-b border-[#DCE4DF] hover:bg-gray-50/50">
                      <td className="px-4 py-3">
                        <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-gray-200">
                          <Image src={h.image} alt="" fill className="object-cover" sizes="50px" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-[#17211D]">{h.name}</div>
                        <div className="text-[#66716C] text-[10px] mt-0.5">{h.slug}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{h.location}</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-[#075B3A]">{h.rating}★</span> ({h.reviews})
                      </td>
                      <td className="px-4 py-3 text-[#075B3A] font-bold">{h.priceLabel}</td>
                      <td className="px-4 py-3 text-right space-x-1.5">
                        <Link href={`/hotels/${h.slug}`} target="_blank" className="inline-flex p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors" title="View details page">
                          <Eye size={13} />
                        </Link>
                        <button onClick={() => handleOpenEditModal(h, 'hotel')} className="inline-flex p-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors cursor-pointer" title="Edit">
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => handleDeleteListing(h.id, 'hotel')} className="inline-flex p-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-colors cursor-pointer" title="Delete">
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {activeTab === 'villa' && filteredVillas.map((v) => (
                    <tr key={v.id} className="border-b border-[#DCE4DF] hover:bg-gray-50/50">
                      <td className="px-4 py-3">
                        <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-gray-200">
                          <Image src={v.image} alt="" fill className="object-cover" sizes="50px" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-[#17211D]">{v.name}</div>
                        <div className="text-[#66716C] text-[10px] mt-0.5">{v.slug}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{v.location}</td>
                      <td className="px-4 py-3 font-semibold text-gray-700">{v.bedrooms} BHK</td>
                      <td className="px-4 py-3 text-[#075B3A] font-bold">{v.price}</td>
                      <td className="px-4 py-3 text-right space-x-1.5">
                        <Link href={`/villas/${v.slug}`} target="_blank" className="inline-flex p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors" title="View details page">
                          <Eye size={13} />
                        </Link>
                        <button onClick={() => handleOpenEditModal(v, 'villa')} className="inline-flex p-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors cursor-pointer" title="Edit">
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => handleDeleteListing(v.id, 'villa')} className="inline-flex p-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-colors cursor-pointer" title="Delete">
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {activeTab === 'tour' && filteredTours.map((t) => (
                    <tr key={t.id} className="border-b border-[#DCE4DF] hover:bg-gray-50/50">
                      <td className="px-4 py-3">
                        <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-gray-200">
                          <Image src={t.image} alt="" fill className="object-cover" sizes="50px" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-bold text-[#17211D]">{t.name}</div>
                        <div className="text-[#66716C] text-[10px] mt-0.5">{t.slug}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">Lonavala</td>
                      <td className="px-4 py-3 font-semibold text-gray-700">{t.duration}</td>
                      <td className="px-4 py-3 text-[#075B3A] font-bold">{t.priceLabel}</td>
                      <td className="px-4 py-3 text-right space-x-1.5">
                        <Link href={`/tours/${t.slug}`} target="_blank" className="inline-flex p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors" title="View details page">
                          <Eye size={13} />
                        </Link>
                        <button onClick={() => handleOpenEditModal(t, 'tour')} className="inline-flex p-1.5 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-600 transition-colors cursor-pointer" title="Edit">
                          <Pencil size={13} />
                        </button>
                        <button onClick={() => handleDeleteListing(t.id, 'tour')} className="inline-flex p-1.5 bg-red-50 hover:bg-red-100 rounded-lg text-red-600 transition-colors cursor-pointer" title="Delete">
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {((activeTab === 'hotel' && filteredHotels.length === 0) ||
                    (activeTab === 'villa' && filteredVillas.length === 0) ||
                    (activeTab === 'tour' && filteredTours.length === 0)) && (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-[#66716C]">
                        No {activeTab} listings found matching filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Editor Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          {/* Modal Content */}
          <div className="relative top-8 mx-auto bg-white rounded-2xl border border-[#DCE4DF] shadow-2xl w-full max-w-[700px] mb-16 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-[#075B3A] text-white px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                  {editId ? `Edit ${formType}` : `Add New ${formType}`}
                </h3>
                <p className="text-green-200 text-xs mt-0.5">{formData.name || 'Enter details below'}</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-white/80 hover:text-white p-1 rounded-lg transition-colors cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveListing} className="p-5 sm:p-6 space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                {/* ID (Readonly) */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">ID (Unique)</label>
                  <input
                    type="text"
                    name="id"
                    disabled={!!editId}
                    value={formData.id}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 bg-gray-50 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A] disabled:opacity-60"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Slug (URL Path)</label>
                  <input
                    type="text"
                    name="slug"
                    required
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="e.g. deluxe-hotel-name"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Property or Tour Title"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Lonavala"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Numeric Price */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Price (Number)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>

                {/* Price Label */}
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Price Label (String)</label>
                  <input
                    type="text"
                    name="priceLabel"
                    required
                    value={formData.priceLabel}
                    onChange={handleInputChange}
                    placeholder="e.g. From ₹15,000 / Night"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>

                {/* Conditional Fields */}
                {formType === 'villa' ? (
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Bedrooms</label>
                    <input
                      type="number"
                      name="bedrooms"
                      min="1"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    />
                  </div>
                ) : formType === 'tour' ? (
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g. 5 Hours"
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Rating</label>
                    <input
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                    />
                  </div>
                )}
              </div>

              {/* Description (Summary) */}
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Brief Description (Summary)</label>
                <textarea
                  name="description"
                  rows={2}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Short, inviting description..."
                  className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent resize-none"
                />
              </div>

              {/* About details */}
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Detailed About Copy</label>
                <textarea
                  name="about"
                  rows={3}
                  required
                  value={formData.about}
                  onChange={handleInputChange}
                  placeholder="More detailed description of the property, services, features, etc."
                  className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent resize-none"
                />
              </div>

              {/* Cover Image Selection & Preview */}
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/30">
                <label className="block text-[11px] font-bold text-[#17211D] uppercase tracking-wide mb-1.5">
                  Main Cover Image
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    name="image"
                    required
                    readOnly
                    value={coverFile ? coverFile.name : formData.image}
                    placeholder="Select cover image..."
                    className="flex-1 border border-[#DCE4DF] bg-gray-50 rounded-xl px-3 py-2 text-xs focus:outline-none cursor-not-allowed text-gray-500 font-mono"
                  />
                  <label className="bg-[#075B3A] hover:bg-[#06472F] text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer shrink-0 transition-colors flex items-center justify-center shadow-sm">
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      multiple={false}
                      className="hidden"
                      onChange={handleCoverSelect}
                    />
                  </label>
                </div>

                {/* Cover Image Preview Card */}
                {coverPreviewUrl && (
                  <div className="bg-white border border-[#DCE4DF] p-3 rounded-xl flex items-center gap-4 max-w-sm shadow-sm relative">
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                      <Image
                        src={coverPreviewUrl}
                        alt="Cover Preview"
                        fill
                        className="object-cover"
                        unoptimized={coverPreviewUrl.startsWith('blob:')}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-extrabold text-xs text-[#17211D] truncate">
                        {coverFileName || (formData.image.startsWith('/') ? formData.image.split('/').pop() : 'Server Image')}
                      </div>
                      {coverDimensions && (
                        <div className="text-[10px] text-gray-400 mt-0.5">{coverDimensions}</div>
                      )}
                      <div className="flex items-center gap-3 mt-2">
                        <label className="text-[10px] font-extrabold text-blue-600 hover:text-blue-800 cursor-pointer">
                          <span>Change</span>
                          <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            multiple={false}
                            className="hidden"
                            onChange={handleCoverSelect}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={handleCoverRemove}
                          className="text-[10px] font-extrabold text-red-600 hover:text-red-800 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery Images Selection & Previews */}
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/30 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-bold text-[#17211D] uppercase tracking-wide">
                    Gallery Images
                  </label>
                  <label className="bg-[#075B3A] hover:bg-[#06472F] text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer shrink-0 transition-colors flex items-center justify-center shadow-sm">
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      multiple={true}
                      className="hidden"
                      onChange={handleGallerySelect}
                    />
                  </label>
                </div>

                {/* Previews grid */}
                {(existingGalleryImages.length > 0 || galleryFiles.length > 0) ? (
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Selected Images ({existingGalleryImages.length + galleryFiles.length})
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {/* Pre-existing images */}
                      {existingGalleryImages.map((img, idx) => (
                        <div key={`existing-${idx}`} className="relative border border-[#DCE4DF] bg-white rounded-xl p-2 group shadow-sm flex flex-col items-center justify-center text-center">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-100 mb-1.5 shrink-0">
                            <Image src={img} alt="Gallery item" fill className="object-cover" />
                          </div>
                          <div className="text-[9px] font-medium text-gray-500 truncate w-full px-1">
                            {img.split('/').pop()}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleGalleryRemove('', true, img)}
                            className="absolute -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shadow-md border border-white cursor-pointer transition-transform hover:scale-105"
                            title="Remove image"
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      {/* Newly selected images */}
                      {galleryFiles.map((gf) => (
                        <div key={gf.id} className="relative border border-blue-200 bg-blue-50/20 rounded-xl p-2 group shadow-sm flex flex-col items-center justify-center text-center">
                          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-blue-100 mb-1.5 shrink-0">
                            <Image src={gf.preview} alt="Gallery item" fill className="object-cover" unoptimized />
                          </div>
                          <div className="text-[9px] font-medium text-blue-700 truncate w-full px-1">
                            {gf.name}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleGalleryRemove(gf.id, false)}
                            className="absolute -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-black shadow-md border border-white cursor-pointer transition-transform hover:scale-105"
                            title="Remove image"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Add More Images CTA inside Previews */}
                    <div className="pt-1.5">
                      <label className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#075B3A] hover:text-[#06472F] cursor-pointer bg-[#EAF5EF] px-3 py-1.5 rounded-xl border border-[#C5DDD1] transition-colors shadow-sm">
                        <span>+ Add More Images</span>
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          multiple={true}
                          className="hidden"
                          onChange={handleGallerySelect}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 border border-dashed border-gray-300 rounded-xl bg-white">
                    <p className="text-gray-400 text-xs italic">No gallery images selected. Click Upload to add photos.</p>
                  </div>
                )}
              </div>

              {/* Amenities checkboxes */}
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-2">Amenities / Highlights</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-gray-50 border border-gray-100 p-3 rounded-xl">
                  {initialAmenityOptions[formType].map((amenity) => {
                    const isChecked = selectedAmenities.some((a) => a.label === amenity.label);
                    return (
                      <button
                        type="button"
                        key={amenity.label}
                        onClick={() => toggleAmenity(amenity)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs font-semibold border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#EAF5EF] border-[#C5DDD1] text-[#075B3A]'
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100/50'
                        }`}
                      >
                        <Check size={12} className={isChecked ? 'opacity-100' : 'opacity-0'} />
                        {amenity.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Room Options / Itinerary List */}
              <div className="border border-gray-150 rounded-xl p-4 bg-gray-50/50">
                <h4 className="font-bold text-xs sm:text-sm text-[#17211D] mb-1.5">
                  {formType === 'tour' ? 'Tour Itinerary Timeline' : 'Accommodation Room Options'}
                </h4>
                
                {/* List items */}
                {optionsList.length > 0 ? (
                  <div className="space-y-2 mb-3 max-h-[140px] overflow-y-auto pr-1">
                    {optionsList.map((opt, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-3 bg-white border border-[#DCE4DF] p-2.5 rounded-xl text-xs shadow-sm">
                        <div>
                          <div className="font-extrabold text-[#17211D]">{opt.name}</div>
                          <div className="text-[#66716C] mt-0.5">{opt.description}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveOption(idx)}
                          className="text-red-500 hover:bg-red-50 p-1 rounded-lg transition-colors cursor-pointer shrink-0"
                          title="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-xs italic mb-3">No options added yet.</p>
                )}

                {/* Add new option form row */}
                <div className="bg-white border border-[#DCE4DF] p-3 rounded-xl space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder={formType === 'tour' ? 'e.g. 09:30 AM — Hotel Pickup' : 'e.g. Deluxe Room'}
                      value={newOptionName}
                      onChange={(e) => setNewOptionName(e.target.value)}
                      className="border border-[#DCE4DF] rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A]"
                    />
                    <input
                      type="text"
                      placeholder={formType === 'tour' ? 'e.g. Driver allowance included' : 'e.g. Sea view room'}
                      value={newOptionDesc}
                      onChange={(e) => setNewOptionDesc(e.target.value)}
                      className="border border-[#DCE4DF] rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#075B3A]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleAddOption}
                    className="w-full py-1.5 border border-[#075B3A] text-[#075B3A] text-xs font-bold rounded-lg hover:bg-[#EAF5EF] transition-colors cursor-pointer"
                  >
                    + Add to list
                  </button>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-3.5 border-t border-[#DCE4DF] pt-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#075B3A] hover:bg-[#06472F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  Save Listing
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}
