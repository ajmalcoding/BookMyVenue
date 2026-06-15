import React from 'react';

export default function MobileTopBar() {
  return (
    <header className="md:hidden bg-surface/80 backdrop-blur-xl border-b border-glass-stroke shadow-sm sticky top-0 z-30 flex justify-between items-center px-margin-mobile py-4">
      <h1 className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-primary">BookMyVenue</h1>
      <button className="text-on-surface-variant">
        <span className="material-symbols-outlined text-[28px]">menu</span>
      </button>
    </header>
  );
}
