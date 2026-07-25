import React from 'react';

export interface OwnerVenueCardProps {
  name: string;
  location: string;
  capacity: string;
  price: string;
  dateCreated: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryBg: string;
  categoryText: string;
  status: string;
  statusClasses: string;
  onEdit?: () => void;
}

export default function OwnerVenueCard({
  name,
  location,
  capacity,
  price,
  dateCreated,
  imageSrc,
  imageAlt,
  category,
  categoryBg,
  categoryText,
  status,
  statusClasses,
  onEdit
}: OwnerVenueCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-[16px] border border-outline-variant overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.15)] flex flex-col group">
      <div className="relative h-48 w-full overflow-hidden">
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={imageAlt} src={imageSrc} />
        <div className={`absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm px-3 py-1 rounded-full backdrop-blur-md`}>{category}</div>
        <div className={`absolute top-4 right-4 ${statusClasses} font-label-sm px-3 py-1 rounded-full border`}>{status}</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-headline-md text-on-surface mb-1 truncate">{name}</h3>
        <p className="font-body-md text-on-surface-variant mb-4 flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> {location}</p>
        <div className="grid grid-cols-2 gap-y-2 mb-6">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span className="font-label-md">{capacity} Guests</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">payments</span>
            <span className="font-label-md">{price}</span>
          </div>
          <div className="col-span-2 flex items-center gap-2 text-text-muted mt-2">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span className="font-label-sm">Created {dateCreated}</span>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant flex gap-2">
          <button className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-label-md py-2 rounded-lg hover:bg-surface-container-high transition-colors">View</button>
          <button onClick={onEdit} className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-label-md py-2 rounded-lg hover:bg-surface-container-high transition-colors">Edit</button>
          <button aria-label="Delete" className="px-3 bg-error-container text-on-error-container border border-red-200 font-label-md py-2 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
