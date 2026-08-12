'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2, House, Map, Plus, Pencil, Trash2, X, Check, AlertCircle, RefreshCw, Eye
} from 'lucide-react';
import {
  getHotels, saveHotel, deleteHotel,
  getVillas, saveVilla, deleteVilla,
  getTours, saveTour, deleteTour
} from '@/lib/db';
import { Hotel, Villa, Tour, Amenity, RoomOption } from '@/types';

type Category = 'hotel' | 'villa' | 'tour';

const initialAmenityOptions: Record<Category, { label: string; icon: string }[]> = {
  hotel: [
    { label: 'Swimming Pool', icon: 'Waves' },
    { label: 'Restaurant', icon: 'Utensils' },
    { label: 'Parking Area', icon: 'CircleParking' },
    { label: 'Wi-Fi', icon: 'Wifi' },
    { label: 'Room Service', icon: 'ConciergeBell' },
    { label: '24*7 Support', icon: 'Headphones' },
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
    loadAllData();
  }, []);

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  const handleOpenAddModal = () => {
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
      image: '/images/hotels/hotel-1.jpg',
      slug: '',
      description: '',
      about: '',
      bedrooms: 3,
      duration: activeTab === 'tour' ? '5 Hours' : '',
      galleryImages: '/images/hotels/hotel-1.jpg, /images/hotels/hotel-2.jpg, /images/hotels/hotel-3.jpg, /images/hotels/hotel-4.jpg',
    });
    setSelectedAmenities([...initialAmenityOptions[activeTab]]);
    
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
    setEditId(item.id);
    setFormType(cat);
    setFormData({
      id: item.id,
      name: item.name,
      location: item.location,
      rating: item.rating || 4.5,
      reviews: item.reviews || '100+',
      price: item.price || 0,
      priceLabel: item.priceLabel,
      image: item.image,
      slug: item.slug,
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

  const handleSaveListing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.slug || !formData.image) {
      showAlert('Name, slug and main image are required', 'error');
      return;
    }

    const imagesArray = formData.galleryImages
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    try {
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
          image: formData.image,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: imagesArray.length > 0 ? imagesArray : [formData.image],
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
          image: formData.image,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: imagesArray.length > 0 ? imagesArray : [formData.image],
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
          image: formData.image,
          slug: formData.slug,
          description: formData.description,
          about: formData.about,
          images: imagesArray.length > 0 ? imagesArray : [formData.image],
          amenities: selectedAmenities,
          itinerary: optionsList,
        };
        ok = await saveTour(tour);
      }

      if (ok) {
        showAlert(editId ? 'Listing updated successfully' : 'Listing created successfully', 'success');
        setIsModalOpen(false);
        loadAllData();
      } else {
        showAlert('Failed to save listing', 'error');
      }
    } catch (e) {
      console.error(e);
      showAlert('Error saving listing', 'error');
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

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Admin Header */}
      <header className="bg-[#075B3A] text-white shadow-md">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wide">VALLEY CITY STAY HUB</h1>
            <p className="text-green-200 text-xs sm:text-sm font-medium">Vidhi Tour &amp; Travel · Admin Console</p>
          </div>
          <button
            onClick={loadAllData}
            title="Refresh database"
            className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors cursor-pointer"
          >
            <RefreshCw size={16} />
          </button>
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

              {/* Image Paths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Main Cover Image Path</label>
                  <input
                    type="text"
                    name="image"
                    required
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="/images/hotels/hotel-1.jpg"
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">Gallery Images (Comma separated)</label>
                  <input
                    type="text"
                    name="galleryImages"
                    required
                    value={formData.galleryImages}
                    onChange={handleInputChange}
                    placeholder="url1, url2, url3..."
                    className="w-full border border-[#DCE4DF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#075B3A] focus:border-transparent"
                  />
                </div>
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
