import React from 'react';

export default function BookingPanel() {
  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-28 ambient-shadow border border-surface-variant rounded-xl p-6 bg-surface-container-lowest">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="font-headline-lg text-headline-lg text-on-surface">$250</span>
            <span className="font-body-md text-body-md text-on-surface-variant"> / hour</span>
          </div>
          <div className="flex items-center gap-1 font-label-md text-label-md">
            <span className="material-symbols-outlined text-sm text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-bold text-on-surface">4.95</span>
            <span className="text-on-surface-variant underline cursor-pointer">128 reviews</span>
          </div>
        </div>

        {/* Booking Form Inputs */}
        <div className="border border-outline-variant rounded-lg overflow-hidden mb-4">
          <div className="flex border-b border-outline-variant">
            <div className="w-1/2 p-3 border-r border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
              <label className="block font-label-sm text-label-sm uppercase text-on-surface font-bold mb-1">Check-in</label>
              <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Add date" type="text" />
            </div>
            <div className="w-1/2 p-3 hover:bg-surface-container-low transition-colors cursor-pointer">
              <label className="block font-label-sm text-label-sm uppercase text-on-surface font-bold mb-1">Check-out</label>
              <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Add date" type="text" />
            </div>
          </div>
          <div className="p-3 hover:bg-surface-container-low transition-colors cursor-pointer flex justify-between items-center">
            <div>
              <label className="block font-label-sm text-label-sm uppercase text-on-surface font-bold mb-1">Guests</label>
              <span className="font-body-md text-body-md text-on-surface-variant">1 guest</span>
            </div>
            <span className="material-symbols-outlined text-on-surface">expand_more</span>
          </div>
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md font-bold py-4 rounded-xl hover:opacity-90 transition-opacity mb-4 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
          Book Now
        </button>
        <p className="text-center font-body-md text-body-md text-on-surface-variant text-sm mb-6">You won't be charged yet</p>

        {/* Price Breakdown */}
        <div className="space-y-4 font-body-md text-body-md text-on-surface pb-6 border-b border-surface-variant">
          <div className="flex justify-between">
            <span className="underline cursor-pointer">$250 x 8 hours</span>
            <span>$2,000</span>
          </div>
          <div className="flex justify-between">
            <span className="underline cursor-pointer">Cleaning fee</span>
            <span>$150</span>
          </div>
          <div className="flex justify-between">
            <span className="underline cursor-pointer">Service fee</span>
            <span>$215</span>
          </div>
        </div>

        <div className="flex justify-between font-headline-md text-headline-md text-on-surface pt-6">
          <span>Total</span>
          <span>$2,365</span>
        </div>
      </div>
    </div>
  );
}
