import React from 'react';
import ListingVenueCard from './ListingVenueCard';

export default function ListingsGrid() {
  const venues = [
    {
      title: "The Grand Atrium",
      price: "$1,200",
      rating: "4.9",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfFneA7UxyBVxCJHaWtwSsXxTA4RCy-hIY8bJH34HJXZYZyse8DBOMsWtuBPLltA95xkOZTlf1_Q2IKa9jFUZLyN3YULCHplOiov6iQySY4OdMpOY6POCusLwJvQG-Gm7LzKrFSlXxK0Z3br-aGWAwsJYaLJvO6xwrmOe-4vhXl1Dh45-X87ouzEjJPUzyst6fN-7KZtNfHE4ipxMM980MFUqTYdQeFTnXQkdbo4m70nx-ppfDF3YteaJvKaT2qEgQWDCezzaVIvD7",
      imageAlt: "A bright, modern conference hall with floor-to-ceiling windows letting in natural sunlight. The space is minimalist, featuring sleek white walls, light wood flooring, and rows of contemporary grey chairs facing a stage. The aesthetic is clean, professional, and high-end, utilizing a light-mode color palette with subtle blue accents in the lighting setup.",
      description: "A stunning glass-enclosed space perfect for corporate events and galas, featuring panoramic city views.",
      badge: "Conference",
      capacity: "500 Cap"
    },
    {
      title: "Lumina Loft",
      price: "$850",
      rating: "4.7",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqlKDtzZ4tmqvYfLz-YLtaBUpmFTwjJps6et2VHrC9EOkSWWxZ4IfLumcglE6OR5PUFmJezVLVM6Yu0sF_0gXIsSWETbGdboFAZQG2V70G4SLZ-9Ak3gRNhdxWifjOjtnS_2vDQqEg3E6DmkopIhJXzVQS3F_yieAwug1Kx0eLhEfViaWlawajfHH5yIyqqcwll9ynVeMSDIgIIFk4-jxoBe9h_aPdKFy677y2VsFoA1PIWCH-Z7zOFKhN-FWAitHoCvxRcUFn-7zZ",
      imageAlt: "An elegant, modern banquet hall set up for a high-end reception. Round tables are dressed in crisp white linens with minimalist floral centerpieces. Soft, ambient lighting from contemporary glass chandeliers creates a warm, inviting atmosphere. The overall style is sophisticated and spacious, utilizing a refined color scheme of off-whites, soft greys, and subtle gold accents.",
      description: "An industrial-chic loft space with exposed brick, high ceilings, and state-of-the-art AV equipment.",
      badge: "Wedding",
      capacity: "150 Cap"
    },
    {
      title: "Executive Suite",
      price: "$400",
      rating: "4.8",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxZZJ6FDqlWuTUFr9zfCMoFHi0MiJQk1XEU9MCPUQs81rheY0PUa55lE5SkvErZU30H-oMFL4Va5v6FwVvqLRWD0EoSdaqWOkIwZFXRNtC0b4iFffHwZmvfCujOTLUVEvBxhPf5f0p0sidWTD5KLQnSUwkg6irOkOtJQ42CG684ZnKWB5sai1Sp6lpwu9EwaQOTQQQm2lQTxulaB9X3gL2drRrbCsZX8g3QUnbjFQfNj1kvRFMOJH_ePrGzS58cF_IMVPMOluCwI4b",
      imageAlt: "A sleek, professional corporate boardroom designed for executive meetings. A long, dark wood conference table sits in the center, surrounded by ergonomic black leather chairs. The room features a massive glass wall overlooking a bustling cityscape during daytime. The lighting is crisp and bright, contributing to a premium, high-tech SaaS business aesthetic with clean lines and zero clutter.",
      description: "Premium boardroom equipped with top-tier video conferencing and catering services included.",
      badge: "Meeting",
      capacity: "20 Cap"
    }
  ];

  return (
    <div className="flex-1">
      {/* Header & Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Available Venues</h1>
          <p className="font-body-md text-on-surface-variant mt-1">Showing 124 venues in your area</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-label-md text-on-surface-variant">Sort by:</span>
          <select className="rounded-lg border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary py-2 pl-3 pr-10 font-body-md text-on-surface bg-surface-container-lowest">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>
      
      {/* Venue Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {venues.map((venue, index) => (
          <ListingVenueCard key={index} {...venue} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 gap-2">
        <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md flex items-center justify-center">1</button>
        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">2</button>
        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">3</button>
        <span className="text-on-surface-variant">...</span>
        <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-highest font-label-md flex items-center justify-center transition-colors">12</button>
        <button className="p-2 rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
