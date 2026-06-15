import React from 'react';

export default function MobileBottomBar() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-around items-center py-3 px-2 z-50">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
        <span className="font-label-sm text-[10px]">Dashboard</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-label-sm text-[10px]">Bookings</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-label-sm text-[10px]">Settings</span>
      </a>
    </nav>
  );
}
