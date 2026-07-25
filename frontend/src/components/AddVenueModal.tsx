import React, { useEffect, useState } from 'react';
import { getAmenities } from "./../api/venue";

export interface AddVenueModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'add' | 'edit';
  venue?: any;
  onSubmit: (payload: any) => Promise<void> | void;
}

interface Amenity {
  id: number;
  name: string;
  icon: string;
}

export default function AddVenueModal({ isOpen, onClose, mode = 'add', venue, onSubmit }: AddVenueModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price_per_hour: "",
    capacity: "",
    location: "",
    city: "",
    Pincode: "",
    contact_phone: "",
    contact_email: "",
    opening_time: "",
    closing_time: "",
    minimum_booking_hours: "",
    parking_capacity: "",
    is_available: true,
  });

  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>([]);
  const [removedImageIds, setRemovedImageIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const data = await getAmenities();
        setAmenities(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAmenities();
  }, []);

  const toggleAmenity = (id: number) => {
    setSelectedAmenities((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  
  const isEdit = mode === 'edit';
  
  type VenueImageType = {
    id?: number;
    file?: File;
    preview: string;
  };
  const [images, setImages] = useState<VenueImageType[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");

      // Reset form when opening in Add mode
      if (!isEdit) {
        setFormData({
          name: "",
          description: "",
          category: "",
          price_per_hour: "",
          capacity: "",
          location: "",
          city: "",
          Pincode: "",
          contact_phone: "",
          contact_email: "",
          opening_time: "",
          closing_time: "",
          minimum_booking_hours: "",
          parking_capacity: "",
          is_available: true,
        });

        setSelectedAmenities([]);
        setImages([]);
        setRemovedImageIds([]);
      }
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, isEdit]);

  useEffect(() => {
    if (!isOpen || !isEdit || !venue) return;

    setFormData({
      name: venue.name || "",
      description: venue.description || "",
      category: venue.category || "",
      price_per_hour: venue.price_per_hour?.toString() || "",
      capacity: venue.capacity?.toString() || "",
      location: venue.location || "",
      city: venue.city || "",
      Pincode: venue.Pincode || "",
      contact_phone: venue.contact_phone || "",
      contact_email: venue.contact_email || "",
      opening_time: venue.opening_time || "",
      closing_time: venue.closing_time || "",
      minimum_booking_hours: venue.minimum_booking_hours?.toString() || "",
      parking_capacity: venue.parking_capacity?.toString() || "",
      is_available: venue.is_available ?? true,
    });

    setSelectedAmenities(venue.amenities || []);
    setRemovedImageIds([]);

    setImages(
      venue.images.map((img: any) => ({
        id: img.id,
        preview: img.image,
      }))
    );
  }, [isOpen, isEdit, venue]);

  if (!isOpen) return null;

  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => {
      const image = prev[indexToRemove];

      if (image.id) {
        setRemovedImageIds((ids) => {
          const updatedIds = ids.includes(image.id!)
            ? ids
            : [...ids, image.id!];

          console.log("Removed Image IDs:", updatedIds);

          return updatedIds;
        });
      }

      return prev.filter((_, idx) => idx !== indexToRemove);
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleSave = async () => {
    const payload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, String(value));
    });

    selectedAmenities.forEach((id) => {
      payload.append("amenities", String(id));
    });

    images.forEach((img) => {
      if (img.file) {
        payload.append("uploaded_images", img.file);
      }
    });

    removedImageIds.forEach((id) => {
      payload.append("removed_images", String(id));
    });

    await onSubmit(payload);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-text-main/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[90vh] bg-surface-white shadow-2xl z-[60] flex flex-col rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-bright sticky top-0 z-10">
          <div>
            <h2 className="font-headline-md text-on-surface">
              {isEdit ? 'Edit Space Details' : 'Add New Venue'}
            </h2>
            <p className="font-label-sm text-text-muted mt-0.5">Update your venue information and image gallery.</p>
          </div>
          <button onClick={onClose} type="button" className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Scrollable Form Content */}
        <form className="p-6 overflow-y-auto space-y-8 flex-1 bg-surface-container-lowest">
          
          {/* Basic Information */}
          <div className="space-y-5 bg-surface-white p-5 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-primary uppercase tracking-wider mb-2">Basic Information</h3>
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Venue Name</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">apartment</span>
                <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="name" type="text" placeholder="e.g. Grand Crystal Ballroom" value={formData.name} onChange={handleChange} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Location</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">location_on</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="location" type="text" placeholder="location" value={formData.location} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">City</label>
                <div className="relative flex items-center">
                  <input className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Pincode</label>
                <div className="relative flex items-center">
                  <input className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="Pincode" type="text" placeholder="Pincode" value={formData.Pincode} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Email</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">email</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="contact_email" type="email" placeholder="Email" value={formData.contact_email} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Phone</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">phone</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" name="contact_phone" type="text" placeholder="Phone" value={formData.contact_phone} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Category</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">layers</span>
                <select
                  className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white appearance-none"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Category
                  </option>

                  <option value="wedding_hall">Wedding Hall</option>
                  <option value="banquet_hall">Banquet Hall</option>
                  <option value="auditorium">Auditorium</option>
                  <option value="cafe">Cafe</option>
                  <option value="resort">Resort</option>
                  <option value="meeting_room">Meeting Room</option>
                  <option value="beachside">Beachside Venue</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>
            
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Venue Description</label>
              <textarea className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white resize-none" rows={4} placeholder="Describe your venue..." name="description" value={formData.description} onChange={handleChange}> </textarea>
            </div>
            
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Maximum Guest Capacity</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">group</span>
                <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="number" placeholder="e.g. 500" name="capacity" value={formData.capacity} onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Parking Capacity</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">directions_car</span>
                <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="number" placeholder="e.g. 500" name="parking_capacity" value={formData.parking_capacity} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity) => {
              const selected = selectedAmenities.includes(amenity.id);

              return (
                <button
                  key={amenity.id}
                  type="button"
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl gap-2 text-center transition-colors border ${
                    selected
                      ? "border-primary bg-primary-container text-on-primary-container"
                      : "border-outline-variant hover:bg-surface-container-low"
                  }`}
                >
                  <span className="material-symbols-outlined">
                    {amenity.icon}
                  </span>

                  <span className="text-[12px] font-semibold">
                    {amenity.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Booking & Pricing & Hours */}
          <div className="space-y-5 bg-surface-white p-5 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-primary uppercase tracking-wider mb-2">Booking, Pricing & Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Booking Type</label>
                <div className="relative flex items-center">
                  <select className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white appearance-none" defaultValue={isEdit ? "Hourly" : "Hourly"}>
                    <option>Hourly</option>
                    <option>Daily</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 text-outline pointer-events-none">expand_more</span>
                </div>
              </div> */}
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Minimum Booking Hours</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">hourglass</span>
                  <input name="minimum_booking_hours" className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white" type="number" placeholder="0.00" value={formData.minimum_booking_hours} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Base Price ($)</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">payments</span>
                  <input name="price_per_hour" className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white" type="number" placeholder="0.00" value={formData.price_per_hour} onChange={handleChange} />
                </div>
              </div>              
              
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Opening Time</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">schedule</span>
                  <input
                    name="opening_time"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white"
                    type="time"
                    value={formData.opening_time}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Closing Time</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">schedule</span>
                  <input
                    name="closing_time"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white"
                    type="time"
                    value={formData.closing_time}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div className="space-y-4 bg-surface-white p-5 rounded-xl border border-outline-variant shadow-sm">
            <div>
              <h3 className="font-label-md text-primary uppercase tracking-wider">Media Gallery</h3>
              <p className="text-[12px] text-text-muted mt-0.5">Manage space layout photos. Maximum 5 images.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              {/* Upload Button (First) - Hidden if 5 images exist */}
              {images.length < 5 && (
                <label className="aspect-square border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-low rounded-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all">
                  <span className="material-symbols-outlined text-outline">add</span>
                  <span className="text-[12px] font-semibold text-on-surface-variant mt-1">Upload</span>
                  <input className="hidden" type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
              )}

              {/* Uploaded Images */}
              {images.map((imgSrc, idx) => (
                <div key={idx} className="relative aspect-square bg-surface-container rounded-xl overflow-hidden group">
                  <img className="w-full h-full object-cover" src={imgSrc.preview} alt={`Venue image ${idx + 1}`} />
                  <button 
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 flex items-center justify-center"
                    aria-label="Remove image"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-outline-variant flex items-center justify-end gap-3 bg-surface-bright">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container font-semibold text-sm transition-colors cursor-pointer" type="button">
            Cancel
          </button>
          {/* <button className="px-5 py-2.5 rounded-lg bg-surface-container-lowest border border-primary text-primary font-semibold text-sm shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer" type="button" onClick={handleSave}>
            Save Draft
          </button> */}
          <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity cursor-pointer" type="button" onClick={handleSave}>
            {isEdit ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>
    </>
  );
}
