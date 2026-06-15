import React from 'react';

export default function VenueOwnerSidebar() {
  return (
    <nav className="hidden md:flex flex-col gap-2 p-4 bg-surface dark:bg-inverse-surface h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-inverse-surface shadow-lg z-40">
      <div className="mb-8 px-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
        <div className="text-headline-md font-headline-md text-primary">Venue Manager</div>
      </div>
      <div className="flex items-center gap-3 px-4 mb-6">
        <img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARxqP5K3GyLvZqGgi56unEzA8Lr0ALRXCfsUNT94jyRTehkh_gYIGEuhD4k85yYU-S4e5zzORKmfk-magij8h7ZZ5j6493stA_Y63Ei5Mll19gPk_uZsPqQSQNQoCglneaq8hrK-eM5USM9BOmXji9DAiZPbvzJost31T_o3KOVEP6YC3WGkZEwX7G9Bab9ju-QsI5l-QcoEsMZfmnyOQaDMjUWtnzjNW_Ues0ernzsTG75-B-dp9gZUKZmqL5OOilPGdFDaTTO3YO" />
        <div>
          <div className="font-label-md text-label-md font-semibold text-on-surface dark:text-inverse-on-surface">Admin User</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline">Premium Tier</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
        <a className="bg-primary-container text-on-primary-container rounded-xl flex items-center gap-3 px-4 py-3 font-label-md text-label-md hover:opacity-80 transition-opacity active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          Dashboard
        </a>
        <a className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
          Bookings
        </a>
        <a className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
          Payments
        </a>
        <a className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>rate_review</span>
          Reviews
        </a>
        <a className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
          Settings
        </a>
      </div>
      <div className="mt-auto pt-4">
        <button className="w-full bg-primary text-on-primary rounded-xl px-4 py-3 font-label-md text-label-md font-semibold flex justify-center items-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">add</span>
          Add New Venue
        </button>
      </div>
    </nav>
  );
}
