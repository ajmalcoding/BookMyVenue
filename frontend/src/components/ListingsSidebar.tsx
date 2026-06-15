import React from 'react';

export default function ListingsSidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 sticky top-[100px]">
        <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-4">
          <h2 className="font-headline-md text-[18px] font-semibold text-on-surface">Filters</h2>
          <button className="font-label-sm text-label-sm text-primary hover:underline">Clear all</button>
        </div>
        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-3">Price Range</h3>
          <div className="flex items-center gap-2">
            <input className="w-full rounded-lg border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary p-2 font-body-md text-sm" placeholder="Min" type="number" />
            <span className="text-on-surface-variant">-</span>
            <input className="w-full rounded-lg border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary p-2 font-body-md text-sm" placeholder="Max" type="number" />
          </div>
        </div>
        {/* Capacity */}
        <div className="mb-6">
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-3">Capacity</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">0 - 100</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">100 - 500</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">500 - 1000</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">1000+</span>
            </label>
          </div>
        </div>
        {/* Amenities */}
        <div className="mb-6">
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-3">Amenities</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">Wi-Fi</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input defaultChecked className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">Air Conditioning</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">Parking</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input className="rounded text-primary focus:ring-primary border-outline-variant" type="checkbox" />
              <span className="font-body-md text-body-md text-on-surface">AV Equipment</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
