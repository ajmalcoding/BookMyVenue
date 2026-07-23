import React from 'react';

export interface AdminBookingRequestRowProps {
  initials: string;
  clientName: string;
  eventType: string;
  venueName: string;
  date: string;
  time: string;
  value: string;
}

export default function AdminBookingRequestRow({ initials, clientName, eventType, venueName, date, time, value }: AdminBookingRequestRowProps) {
  return (
    <tr className="hover:bg-surface-container-lowest dark:hover:bg-inverse-surface/30 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-high dark:bg-inverse-surface flex items-center justify-center text-primary font-bold">
            {initials}
          </div>
          <div>
            <div className="font-label-md text-label-md font-semibold text-on-surface dark:text-inverse-on-surface">{clientName}</div>
            <div className="font-body-sm text-[13px] text-on-surface-variant dark:text-outline">{eventType}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface">{venueName}</div>
      </td>
      <td className="py-4 px-6">
        <div className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface">{date}</div>
        <div className="font-body-sm text-[13px] text-on-surface-variant dark:text-outline">{time}</div>
      </td>
      <td className="py-4 px-6 font-body-md text-body-md font-medium text-on-surface dark:text-inverse-on-surface">
        {value}
      </td>
      <td className="py-4 px-6 text-right">
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-lg font-label-sm text-label-sm font-semibold hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors">Accept</button>
          <button className="px-4 py-2 border border-outline-variant text-on-surface-variant dark:text-outline rounded-lg font-label-sm text-label-sm font-semibold hover:bg-surface-container-highest dark:hover:bg-inverse-surface transition-colors">Decline</button>
        </div>
      </td>
    </tr>
  );
}
