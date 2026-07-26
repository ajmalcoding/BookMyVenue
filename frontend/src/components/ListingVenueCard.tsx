import React from "react";
import { Link } from "react-router-dom";

export interface ListingVenueProps {
  slug: string;
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
  slug,
  title,
  price,
  rating,
  imageSrc,
  imageAlt,
  description,
  badge,
  capacity,
}: ListingVenueProps) {
  return (
    <Link to={`/venues/${slug}`}>
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 card-shadow overflow-hidden group hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer">

        {/* Venue Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt || "Venue Image"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <span
              className="material-symbols-outlined text-secondary-container text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-sm text-on-surface">
              {rating}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">

          <div className="flex justify-between items-start mb-2">
            <h3 className="font-headline-md text-[18px] text-on-surface line-clamp-1">
              {title}
            </h3>

            <div className="text-right">
              <span className="font-headline-md text-[18px] text-primary">
                {price}
              </span>

              <span className="font-label-sm text-on-surface-variant block">
                / hour
              </span>
            </div>
          </div>

          <p className="font-body-md text-sm text-on-surface-variant mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-primary/10 text-primary font-label-sm px-3 py-1 rounded-full capitalize">
              {badge.replace(/_/g, " ")}
            </span>

            <span className="bg-surface-container text-on-surface-variant font-label-sm px-3 py-1 rounded-full">
              {capacity}
            </span>
          </div>

          <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-on-primary font-label-md py-2.5 rounded-lg transition-colors border border-primary/20 hover:border-primary">
            View Details
          </button>

        </div>
      </div>
    </Link>
  );
}