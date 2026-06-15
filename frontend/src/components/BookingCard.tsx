import React from 'react';

export interface BookingCardProps {
  title: string;
  location: string;
  month: string;
  date: string;
  eventType: string;
  time: string;
  status: 'Pending' | 'Confirmed';
  imageSrc: string;
  imageAlt: string;
}

export default function BookingCard({
  title,
  location,
  month,
  date,
  eventType,
  time,
  status,
  imageSrc,
  imageAlt
}: BookingCardProps) {
  const statusColor = status === 'Confirmed' ? 'bg-primary-container' : 'bg-secondary-container';

  return (
    <div className="bg-surface-container-lowest rounded-[16px] border border-[#F3F4F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="h-48 w-full relative overflow-hidden bg-surface-variant">
        <img alt={imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={imageSrc} />
        <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full border border-glass-stroke flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
          <span className="font-label-sm text-label-sm text-on-surface">{status}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-1">{title}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> {location}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-6 p-3 bg-surface rounded-lg border border-surface-variant">
          <div className="flex flex-col items-center justify-center px-4 border-r border-outline-variant/30">
            <span className="font-label-sm text-label-sm text-error uppercase">{month}</span>
            <span className="font-headline-md text-headline-md text-on-surface leading-none">{date}</span>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface">{eventType}</p>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{time}</p>
          </div>
        </div>
        <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md py-2.5 rounded-xl hover:bg-surface-container-low transition-colors flex justify-center items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">edit</span> Edit Booking
        </button>
      </div>
    </div>
  );
}
