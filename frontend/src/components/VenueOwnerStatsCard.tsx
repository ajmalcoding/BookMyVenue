import React from 'react';

export interface VenueOwnerStatCardProps {
  title: string;
  value: string;
  icon: string;
  iconContainerClass: string;
  trendValue?: string;
  trendText: string;
  trendColor?: string;
}

export default function VenueOwnerStatCard({ title, value, icon, iconContainerClass, trendValue, trendText, trendColor = "text-emerald-600" }: VenueOwnerStatCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-[16px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-outline-variant/20 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">{title}</div>
          <div className="font-headline-lg text-headline-lg text-on-surface">{value}</div>
        </div>
        <div className={`p-3 rounded-xl ${iconContainerClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm relative z-10">
        {trendValue ? (
          <span className={`${trendColor} flex items-center font-medium`}>
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {trendValue}
          </span>
        ) : (
          <span className={`${trendColor} font-medium`}>{trendText}</span>
        )}
        {trendValue && <span className="text-on-surface-variant">{trendText}</span>}
      </div>
    </div>
  );
}
