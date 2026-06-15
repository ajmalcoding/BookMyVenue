import React from 'react';

export default function DetailNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-glass-stroke shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button aria-label="Go back" className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <div className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary">
            BookMyVenue
          </div>
        </div>
        {/* Interactive actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Share" className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface">share</span>
          </button>
          <button aria-label="Save" className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface">favorite_border</span>
          </button>
        </div>
      </div>
    </header>
  );
}
