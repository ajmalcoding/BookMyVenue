import React from "react";
import { Link } from "react-router-dom";

interface VenueCardProps {
  slug: string;
  tagText: string;
  tagTheme: "primary" | "secondary" | "tertiary";
  rating: string;
  title: string;
  location: string;
  price: string;
  imageSrc: string;
}

export default function VenueCard({
  slug,
  tagText,
  tagTheme,
  rating,
  title,
  location,
  price,
  imageSrc,
}: VenueCardProps) {
  const badgeClasses = {
    primary: "bg-primary-container text-on-primary-container",
    secondary: "bg-secondary-container text-on-secondary-container",
    tertiary: "bg-tertiary-container text-on-tertiary-container",
  }[tagTheme];

  return (
    <div className="bg-surface-container-lowest rounded-card border border-outline-variant shadow-ambient overflow-hidden group hover:border-primary/30 transition-all">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`${badgeClasses} px-3 py-1 rounded-full font-label-sm text-label-sm`}
          >
            {tagText}
          </span>

          <span className="bg-surface/90 backdrop-blur text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm shadow-sm flex items-center gap-1">
            <span
              className="material-symbols-outlined text-[14px] text-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            {rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-md text-headline-md text-on-surface line-clamp-1">
            {title}
          </h3>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-[18px]">
            location_on
          </span>
          {location}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-outline-variant">
          <div>
            <span className="font-headline-md text-headline-md text-on-surface">
              {price}
            </span>
            <span className="font-body-md text-body-md text-on-surface-variant">
              /day
            </span>
          </div>

          <Link
            to={`/venues/${slug}`}
            className="px-4 py-2 bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface rounded-btn font-label-md text-label-md transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}