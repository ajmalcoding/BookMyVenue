import React from 'react';

export default function UserDashboardSidebar() {
  return (
    <aside className="bg-surface dark:bg-surface h-screen w-64 fixed left-0 top-0 bg-surface-container-low shadow-lg hidden md:flex flex-col gap-2 p-4 z-40">
      <div className="mb-8 px-4">
        <h1 className="text-headline-md font-headline-md text-primary tracking-tight">BookMyVenue</h1>
      </div>
      <nav className="flex-1 space-y-2">
        {/* Active State: Dashboard */}
        <a className="bg-primary-container text-on-primary-container rounded-xl flex items-center gap-3 px-4 py-3 active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 px-4 py-3 transition-all transition-colors active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-label-md">Bookings</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 px-4 py-3 transition-all transition-colors active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-md text-label-md">Payments</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 px-4 py-3 transition-all transition-colors active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">rate_review</span>
          <span className="font-label-md text-label-md">Reviews</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-container-highest rounded-xl flex items-center gap-3 px-4 py-3 transition-all transition-colors active:scale-95 transition-transform" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </a>
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-4">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
            <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu5AjR2OI5nNTbR58gT_mmCzGdqlxRq9604N58uyt7BV1lvH0hIygUqay2Lt4AZWD8KQwoKfK6XG9YcIBBIH0onBU-9XeJ9GqJTMyVUtwOg46z8xbw32aVsHixZlPw0DNxziJqzLVGJsFKMMd-aJEN8EZTfE68mzNYSiYMZ66gsbq9SJx5tRI57VE2iZs0pTMXbcVhkvy3L4_KLRk1XqN9Hsecu1MRlwVBMRAzBa5IREv-zzyxK4uH1szjknQZuvR3F4L5Nnrp_Nvw"/>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface">Venue Manager</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Premium Tier</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add New Venue
        </button>
      </div>
    </aside>
  );
}
