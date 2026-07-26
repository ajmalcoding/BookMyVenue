import React, { useEffect, useState } from "react";
import axios from "axios";
import VenueCard from "./VenueCard";

interface Venue {
  id: number;
  slug: string;
  name: string;
  city: string;
  category: string;
  price_per_hour: string;
  is_featured: boolean;
  images: {
    id: number;
    image: string;
    is_primary: boolean;
  }[];
}

export default function FeaturedVenues() {
  const [venues, setVenues] = useState<Venue[]>([]);

  useEffect(() => {
    getFeaturedVenues();
  }, []);

  const getFeaturedVenues = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/venues/venues/"
      );

      const featured = res.data
        .filter((venue: Venue) => venue.is_featured)
        .sort((a: Venue, b: Venue) => b.id - a.id)
        .slice(0, 3);

      setVenues(featured);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-16 bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Featured Venues
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">
              Handpicked spaces for extraordinary events.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-primary font-label-md hover:opacity-80 transition-opacity">
            View All
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {venues.map((venue) => {
            const image =
              venue.images.find((img) => img.is_primary)?.image ||
              venue.images[0]?.image ||
              "https://placehold.co/600x400";

            return (
              <VenueCard
                key={venue.id}
                slug={venue.slug}
                title={venue.name}
                location={venue.city}
                price={`₹${venue.price_per_hour}`}
                rating="4.8"
                tagText={venue.category}
                tagTheme="primary"
                imageSrc={image}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}