import React from 'react';

export interface ListingVenueProps {
  title: string;
  price: string;
  rating: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  badge: string;
  capacity: string;
}

export default function ListingVenueCard({
  title,
  price,
  rating,
  imageSrc,
  imageAlt,
  description,
  badge,
  capacity
}: ListingVenueProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 card-shadow overflow-hidden group hover:border-primary/30 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img alt={imageAlt || "Venue image"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageSrc} />
        <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-secondary-container text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="font-label-sm text-on-surface">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-md text-[18px] text-on-surface line-clamp-1">{title}</h3>
          <div className="text-right">
            <span className="font-headline-md text-[18px] text-primary">{price}</span>
            <span className="font-label-sm text-on-surface-variant block">/ day</span>
          </div>
        </div>
        <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2">{description}</p>
        <div className="flex gap-2 mb-5">
          <span className="bg-primary/10 text-primary font-label-sm px-3 py-1 rounded-full">{badge}</span>
          <span className="bg-surface-container text-on-surface-variant font-label-sm px-3 py-1 rounded-full">{capacity}</span>
        </div>
        <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-on-primary font-label-md py-2.5 rounded-lg transition-colors border border-primary/20 hover:border-primary">
          View Details
        </button>
      </div>
    </div>
  );
}
