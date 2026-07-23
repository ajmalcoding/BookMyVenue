import React from 'react';

export interface VenueOwnerSidebarProps {
  activeTab: 'dashboard' | 'venues';
  onTabChange: (tab: 'dashboard' | 'venues') => void;
  onAddVenue: () => void;
}

export default function VenueOwnerDashboardSidebar({ activeTab, onTabChange, onAddVenue }: VenueOwnerSidebarProps) {
  return (
    <aside className="hidden md:flex flex-col gap-2 p-4 bg-surface-container-low h-screen w-64 fixed left-0 top-0 shadow-lg z-40 border-r border-outline-variant/30">
      <div className="mb-8 px-4 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
        <div className="text-headline-md font-headline-md text-primary tracking-tight">Venue Manager</div>
      </div>
      <div className="flex items-center gap-3 px-4 mb-6">
        <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden">
          <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARxqP5K3GyLvZqGgi56unEzA8Lr0ALRXCfsUNT94jyRTehkh_gYIGEuhD4k85yYU-S4e5zzORKmfk-magij8h7ZZ5j6493stA_Y63Ei5Mll19gPk_uZsPqQSQNQoCglneaq8hrK-eM5USM9BOmXji9DAiZPbvzJost31T_o3KOVEP6YC3WGkZEwX7G9Bab9ju-QsI5l-QcoEsMZfmnyOQaDMjUWtnzjNW_Ues0ernzsTG75-B-dp9gZUKZmqL5OOilPGdFDaTTO3YO" />
        </div>
        <div>
          <div className="font-label-md text-label-md font-semibold text-on-surface">Admin User</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant">Premium Tier</div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto">
        <button 
          onClick={() => onTabChange('dashboard')}
          className={`${activeTab === 'dashboard' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          Dashboard
        </button>
        <button 
          onClick={() => onTabChange('venues')}
          className={`${activeTab === 'venues' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high'} rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left`}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>apartment</span>
          My Venues
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-high rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
          Bookings
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-high rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>payments</span>
          Payments
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-high rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>rate_review</span>
          Reviews
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-high rounded-xl flex items-center gap-3 px-4 py-3 transition-all font-label-md text-label-md active:scale-95 transition-transform w-full text-left">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>settings</span>
          Settings
        </button>
      </nav>
      <div className="mt-auto border-t border-outline-variant/30 pt-4">
        <button 
          onClick={onAddVenue}
          className="w-full bg-primary-container text-on-primary-container rounded-xl px-4 py-3 font-label-md text-label-md font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
        >
          <span className="material-symbols-outlined">add</span>
          Add New Venue
        </button>
      </div>
    </aside>
  );
}
