import React from 'react';

export default function TopNavBar({ activePage = 'home' }: { activePage?: 'home' | 'listings' }) {
  return (
    <nav className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-glass-stroke shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary hover:opacity-80 transition-opacity cursor-pointer">
          BookMyVenue
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className={`${activePage === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors duration-300 ease-in-out'} font-body-md text-body-md`} href="#">Explore</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity duration-300 ease-in-out" href="#">Host</a>
          <a className={`${activePage === 'listings' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors duration-300 ease-in-out'} font-body-md text-body-md`} href="#">Listings</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-primary text-on-primary rounded-btn font-label-md text-label-md hover:shadow-ambient hover:opacity-90 transition-all">Sign In</button>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
