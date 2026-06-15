import React from 'react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  iconColor: string;
  overlayClass: string;
  trendValue?: string;
  trendText: string;
}

export default function StatCard({ title, value, icon, iconColor, overlayClass, trendValue, trendText }: StatCardProps) {
  return (
    <div className="dark-glass-panel rounded-xl p-6 shadow-sm relative overflow-hidden group">
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-all ${overlayClass}`}></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <div className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline uppercase tracking-wider mb-1">{title}</div>
          <div className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">{value}</div>
        </div>
        <div className="p-2 bg-surface-container-high dark:bg-inverse-surface rounded-lg">
          <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm relative z-10">
        {trendValue && (
          <span className="text-emerald-600 dark:text-emerald-400 flex items-center font-medium">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            {trendValue}
          </span>
        )}
        <span className="text-on-surface-variant dark:text-outline">{trendText}</span>
      </div>
    </div>
  );
}
