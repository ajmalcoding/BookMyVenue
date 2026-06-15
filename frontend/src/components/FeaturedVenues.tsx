import React from 'react';
import VenueCard from './VenueCard';

export default function FeaturedVenues() {
  const venues = [
    {
      title: "The Glasshouse Conservatory",
      location: "Downtown Metro",
      price: "$2,500",
      rating: "4.9",
      tagText: "Wedding",
      tagTheme: "primary" as const,
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtYZbixoCmRFoeZUgfb_uVE5aaCSo2RKGEx5ofiAbuc4VMz7ZY9hfl0zI05Kq1opA_Ee8wxRmi4ainI07opqlIzxgyEfgA5rd-njI4gLmjxytixkj2izE3GyZWXuIPDAVITTROT6d8vVwocjkw9MhgtOgi2aWF72s3OGVxWgpdRiiVXgJs34M9PZ9I5o9-2Y9hC-QE9reFwb4LUGw77L2g-2B_rfsQ4h5zSATZ8XoHUCykAjXy4BC0SMy7NCPG9wPUUF7Z8MTD_aNZ",
    },
    {
      title: "Modern Innovation Loft",
      location: "Tech District",
      price: "$1,200",
      rating: "4.8",
      tagText: "Corporate",
      tagTheme: "secondary" as const,
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKjUXjm17OkRAKVH5e4nc9AkEXdcIG45NZrTjNxCYp20IlhI4ZN2jAB0FK42YSk-04jEccvd8TYu_qBjV9J4vGdDXYtns6eUqtXUnqqUYqT1POoxdznaA4g3yxS8bNjpBCEwggJ6j5taicUtBYkBYjmm_qIKLaf8kiF715I8WSIuHG_HTinaRXjh9EhiUpVBpX2a4ygsvGI6q3sZpzPLOHo4A1xDUP-w-Bu5UjIn9X0YHU9S9OBLDkYawmyX9JiaJqBZdreXcRJsYt",
    },
    {
      title: "The Heritage Manor",
      location: "Riverside Estate",
      price: "$3,800",
      rating: "5.0",
      tagText: "Banquet",
      tagTheme: "tertiary" as const,
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe-m6ST0mFBrLxgBQxERVfjDnD1ZFrcBa2Av38VU9LDQKBi1QrSHRKiNuTvoNHznuwGoOdd5spqxRVIIYnCpKd8XJWlB2P6GemVL3Dyla2cMtz6IKaM6X6TXaZKM0VbO3xtT41KUpRgooz7HRQLWQob_ILm1rT5IBKdylZ0-0X_1K9py4R4dXINvi3fN8Atarv9bn3ViSxokwtNgipkdkGUc3UuKNIRDplicQJpExFRwXTcQsktSuzChWkrk10r8EF6Rcj3Tuaglbm",
    }
  ];

  return (
    <section className="py-16 bg-surface-container-low">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Featured Venues</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Handpicked spaces for extraordinary events.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-label-md text-label-md hover:opacity-80 transition-opacity">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {venues.map((venue, index) => (
            <VenueCard key={index} {...venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
