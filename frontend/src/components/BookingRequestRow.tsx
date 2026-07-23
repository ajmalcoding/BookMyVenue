import React from 'react';

export interface BookingRequestRowProps {
  initials: string;
  clientName: string;
  eventType: string;
  venueName: string;
  date: string;
  time: string;
  value: string;
  initialsBg: string;
  initialsText: string;
}

export default function BookingRequestRow({ initials, clientName, eventType, venueName, date, time, value, initialsBg, initialsText }: BookingRequestRowProps) {
  return (
    <tr className="hover:bg-surface-container-low/40 transition-colors">
      <td className="py-5 px-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${initialsBg} ${initialsText}`}>
            {initials}
          </div>
          <div>
            <div className="font-label-md text-label-md font-semibold text-on-surface">{clientName}</div>
            <div className="font-body-sm text-[13px] text-on-surface-variant">{eventType}</div>
          </div>
        </div>
      </td>
      <td className="py-5 px-6">
        <div className="font-body-md text-body-md text-on-surface">{venueName}</div>
      </td>
      <td className="py-5 px-6">
        <div className="font-body-md text-body-md text-on-surface font-medium">{date}</div>
        <div className="font-body-sm text-[13px] text-on-surface-variant">{time}</div>
      </td>
      <td className="py-5 px-6 font-body-md text-body-md font-semibold text-on-surface">
        {value}
      </td>
      <td className="py-5 px-6 text-right">
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg font-label-sm text-label-sm font-bold hover:bg-emerald-200 transition-colors">Accept</button>
          <button className="px-4 py-2 border border-outline-variant text-on-surface-variant rounded-lg font-label-sm text-label-sm font-bold hover:bg-surface-container-high transition-colors">Decline</button>
        </div>
      </td>
    </tr>
  );
}
