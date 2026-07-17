import React from 'react';

export default function LoginHero() {
  return (
    <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDv6p7Jb1OAHT-h76MjWRj7lbA6jYtSgpju0iJ684H5pCEEjDDZXFtn3A7NuW_edv-MF15Q7mY37dDY9LIFp6g58mllunGdHtx77F_3pz2VU2eVib4gd9iwXvpAK6AAeAeU9UMHavqkstUSFMrp1N69i7PdDsaPmHnYwO7HoshhIeXp9-Cz4TkmN5JkHlI2gqJrEU2RloeAndeH_A65rFyICtRJrauryhjACReCxxL0RTdxIXCa7F54sw')" }}
        >
        </div>
        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-between p-12 h-full w-full">
        {/* Top Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-surface-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>meeting_room</span>
          <span className="text-surface-white font-headline-md text-headline-md font-extrabold tracking-tight">BookMyVenue</span>
        </div>
        {/* Quote Section */}
        <div className="max-w-md">
          <div className="mb-6">
            <span className="material-symbols-outlined text-surface-white text-5xl opacity-50">format_quote</span>
          </div>
          <h1 className="text-surface-white font-display-lg text-display-lg mb-4">Curating spaces for unforgettable moments.</h1>
          <p className="text-surface-white/80 font-body-lg text-body-lg">Access the world's most exclusive venues with a single click. Efficiency meets hospitality.</p>
        </div>
      </div>
    </section>
  );
}
