import React, { useEffect, useState } from 'react';

export interface AddVenueModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'add' | 'edit';
}

export default function AddVenueModal({ isOpen, onClose, mode = 'add' }: AddVenueModalProps) {
  const isEdit = mode === 'edit';
  
  const [images, setImages] = useState<string[]>(
    isEdit ? ["https://lh3.googleusercontent.com/aida-public/AB6AXuBbOrg6YEAsQrQtzV5kaf_EyAQs0Qx8UY7irkzVSi7vFXI-Q-u6EEriDyQa7AueeyP8tJuqzZRPiu2UjrhqABtM4zOOUmgpWbb2MzZIhqyT_0xNRMOkN9VCwNKBQuScECPKjXR8Nop0E1JkYEhAFD3lwzEEbAXrZgFXdPWR37vGKUXaqr-R9f1GFfTXsJOJj7NSDs3WdtPFJ58kO1oZJ6nFC90Xg1v0IvFMaaMhvhl-flCVUwbfIL2ZMQ"] : []
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      setImages(isEdit ? ["https://lh3.googleusercontent.com/aida-public/AB6AXuBbOrg6YEAsQrQtzV5kaf_EyAQs0Qx8UY7irkzVSi7vFXI-Q-u6EEriDyQa7AueeyP8tJuqzZRPiu2UjrhqABtM4zOOUmgpWbb2MzZIhqyT_0xNRMOkN9VCwNKBQuScECPKjXR8Nop0E1JkYEhAFD3lwzEEbAXrZgFXdPWR37vGKUXaqr-R9f1GFfTXsJOJj7NSDs3WdtPFJ58kO1oZJ6nFC90Xg1v0IvFMaaMhvhl-flCVUwbfIL2ZMQ"] : []);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen, isEdit]);

  if (!isOpen) return null;

  const handleRemoveImage = (indexToRemove: number) => {
    setImages(images.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddImageMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length < 5) {
      setImages([...images, "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6a2_SRCmSOOa2E1ioJyARX7aXybCwfK0t4GoW999XslPfsCjeB0ZZmFH6gzTtHdzus6poCqN8asRBnhX3QTTu_-zPINVI6AAEFJ7rCHhM7zevR_GjH3ZqRHbtmtn-zNJ9iDIaB3CCoNRUh__3TYf9wJjih8jBNDN1FNopb1YQbnJqGVe0DQfLJVPcqYm0qq1Q2tpkOA0BietcdNz0_0w4fbDz1_a7dXKrFhypFFt5aBHmcF2vSwkkA"]);
    }
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
                <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="text" placeholder="e.g. Grand Crystal Ballroom" defaultValue={isEdit ? "Grand Crystal Ballroom" : ""} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Location</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">location_on</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="text" placeholder="Address" defaultValue={isEdit ? "New York, NY" : ""} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">City</label>
                <div className="relative flex items-center">
                  <input className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="text" placeholder="City" defaultValue={isEdit ? "New York" : ""} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Pincode</label>
                <div className="relative flex items-center">
                  <input className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="text" placeholder="Zip/Pincode" defaultValue={isEdit ? "10001" : ""} />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Category</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">layers</span>
                <select className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white appearance-none" defaultValue={isEdit ? "banquet" : ""}>
                  <option disabled value="">Select Category</option>
                  <option value="banquet">Banquet Hall</option>
                  <option value="conference">Conference Room</option>
                  <option value="outdoor">Outdoor Garden</option>
                  <option value="resort">Resort</option>
                  <option value="dining">Private Dining</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 text-outline pointer-events-none">expand_more</span>
              </div>
            </div>
            
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Venue Description</label>
              <textarea className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white resize-none" rows={4} placeholder="Describe your venue..." defaultValue={isEdit ? "A luxurious grand ballroom perfect for weddings and corporate events." : ""}></textarea>
            </div>
            
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5">Maximum Guest Capacity</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline">group</span>
                <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-surface-white" type="number" placeholder="e.g. 500" defaultValue={isEdit ? "500" : ""} />
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="space-y-4 bg-surface-white p-5 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-primary uppercase tracking-wider mb-2">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border border-primary bg-primary-container text-on-primary-container rounded-xl gap-2 text-center transition-colors" type="button">
                <span className="material-symbols-outlined">wifi</span>
                <span className="text-[12px] font-semibold">High-Speed WIFI</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-outline-variant hover:bg-surface-container-low rounded-xl gap-2 text-center transition-colors" type="button">
                <span className="material-symbols-outlined">coffee</span>
                <span className="text-[12px] font-semibold">Kitchen</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-outline-variant hover:bg-surface-container-low rounded-xl gap-2 text-center transition-colors" type="button">
                <span className="material-symbols-outlined">local_parking</span>
                <span className="text-[12px] font-semibold">Parking</span>
              </button>
            </div>
          </div>

          {/* Booking & Pricing & Hours */}
          <div className="space-y-5 bg-surface-white p-5 rounded-xl border border-outline-variant shadow-sm">
            <h3 className="font-label-md text-primary uppercase tracking-wider mb-2">Booking, Pricing & Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Booking Type</label>
                <div className="relative flex items-center">
                  <select className="w-full px-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white appearance-none" defaultValue={isEdit ? "Hourly" : "Hourly"}>
                    <option>Hourly</option>
                    <option>Daily</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 text-outline pointer-events-none">expand_more</span>
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Base Price ($)</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">payments</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white" type="number" placeholder="0.00" defaultValue={isEdit ? "250" : ""} />
                </div>
              </div>
              
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Opening Time</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">schedule</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white" type="time" defaultValue={isEdit ? "09:00" : ""} />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5">Closing Time</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-outline">schedule</span>
                  <input className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary outline-none bg-surface-white" type="time" defaultValue={isEdit ? "23:00" : ""} />
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
                  <input className="hidden" type="file" accept="image/*" onChange={handleAddImageMock} />
                </label>
              )}

              {/* Uploaded Images */}
              {images.map((imgSrc, idx) => (
                <div key={idx} className="relative aspect-square bg-surface-container rounded-xl overflow-hidden group">
                  <img className="w-full h-full object-cover" src={imgSrc} alt={`Venue image ${idx + 1}`} />
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
          <button className="px-5 py-2.5 rounded-lg bg-surface-container-lowest border border-primary text-primary font-semibold text-sm shadow-sm hover:bg-surface-container-low transition-colors cursor-pointer" type="button">
            Save Draft
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity cursor-pointer" type="button">
            {isEdit ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>
    </>
  );
}
