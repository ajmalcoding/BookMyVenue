import React, { useEffect, useState } from "react";
import axios from "axios";
import ListingVenueCard from "./ListingVenueCard";

interface Venue {
  id: number;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  category: string;
  price_per_hour: string;
  capacity: number;
  images: {
    id: number;
    image: string;
    is_primary: boolean;
  }[];
}

export default function ListingsGrid() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/venues/venues/"
      );

      setVenues(response.data);
    } catch (error) {
      console.error("Failed to fetch venues:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center py-20">
        <p className="text-on-surface-variant">Loading venues...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            Available Venues
          </h1>

          <p className="font-body-md text-on-surface-variant mt-1">
            Showing {venues.length} venues
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-label-md text-on-surface-variant">
            Sort by:
          </span>

          <select className="rounded-lg border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary py-2 pl-3 pr-10 font-body-md text-on-surface bg-surface-container-lowest">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>

      {/* Grid */}

      {venues.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold mb-2">
            No venues available
          </h2>

          <p className="text-on-surface-variant">
            Check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {venues.map((venue) => {
            const primaryImage =
              venue.images.find((img) => img.is_primary)?.image ||
              venue.images[0]?.image ||
              "https://placehold.co/600x400";

            return (
              <ListingVenueCard
                key={venue.id}
                slug={venue.slug}
                title={venue.name}
                price={`₹${venue.price_per_hour}`}
                rating="4.8"
                imageSrc={primaryImage}
                imageAlt={venue.name}
                description={venue.short_description}
                badge={venue.category.replace(/_/g, " ")}
                capacity={`${venue.capacity} Cap`}
              />
            );
          })}
        </div>
      )}

      {/* Pagination */}

      <div className="flex justify-center items-center mt-12 gap-2">
        <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            chevron_left
          </span>
        </button>

        <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md flex items-center justify-center">
          1
        </button>

        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">
          2
        </button>

        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">
          3
        </button>

        <span className="text-on-surface-variant">...</span>

        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">
          12
        </button>

        <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-[20px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}