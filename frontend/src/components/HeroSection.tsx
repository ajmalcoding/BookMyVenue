import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlXlVDzcNwY61EYXw-LNPb11fEKPIRmIIG0ALU5M4MZCScOfwKpMm4Q_-Oy-QdoPgLyaPlHQjQ1tUoEYTYca77HX2fsg3msXpmE4fdOwzWA2oB7nan5GTx97GDezg2pv7TOANqj9Wb_MK9LcZzv1hzSEPrffi0sG46z-Y5r6nfqFkFs4IbPdp3Aka7p6RKcManUscmXTPzQldz27bCgtwEXhLIYwn_J8Lnu5LsZTt4M2neeK9yCypoEoL-A0YgB1Fc2VxB3ow4YaLh')" }}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <h1 className="font-display-lg text-display-lg text-white mb-6 drop-shadow-md">
          Find the perfect space for your next event.
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto drop-shadow">
          Discover and book premium venues for weddings, conferences, and intimate gatherings with effortless precision.
        </p>
        
        {/* Search Bar (Glassmorphism) */}
        <div className="glass-panel rounded-2xl p-4 md:p-6 shadow-ambient max-w-3xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-btn focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface placeholder:text-outline placeholder:font-medium" placeholder="Search venues, styles..." type="text" />
          </div>
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-btn focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface placeholder:text-outline placeholder:font-medium" placeholder="Location" type="text" />
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-primary text-on-primary rounded-btn font-label-md text-label-md hover:opacity-90 shadow-sm transition-all whitespace-nowrap">
            Find Venue
          </button>
        </div>
      </div>
    </section>
  );
}
