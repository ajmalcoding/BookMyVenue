import React from 'react';

export default function Category({ title, icon, imageSrc, imageAlt }: { title: string, icon: string, imageSrc: string, imageAlt: string }) {
  return (
    <a className="group relative overflow-hidden rounded-card h-48 flex items-end p-6 bg-surface-container-lowest border border-outline-variant hover:border-primary/50 hover:shadow-ambient transition-all duration-300" href="#">
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent z-10"></div>
      <img alt={imageAlt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageSrc} />
      <div className="relative z-20 flex items-center gap-3">
        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        <span className="font-headline-md text-headline-md text-white">{title}</span>
      </div>
    </a>
  );
}
