import React from 'react';
import VenueOwnerSidebar from '../components/VenueOwnerSidebar';
import StatCard from '../components/StatCard';
import BookingRequestRow from '../components/BookingRequestRow';

export default function VenueOwnerDashboard() {
  const requests: React.ComponentProps<typeof BookingRequestRow>[] = [
    {
      initials: "AC",
      clientName: "Alice Cooper",
      eventType: "Wedding Reception",
      venueName: "Grand Atrium Hall",
      date: "Oct 15, 2024",
      time: "6:00 PM - 11:00 PM",
      value: "$4,500"
    },
    {
      initials: "TM",
      clientName: "TechCorp Meetup",
      eventType: "Corporate Seminar",
      venueName: "Innovation Loft Space",
      date: "Nov 02, 2024",
      time: "9:00 AM - 5:00 PM",
      value: "$1,200"
    }
  ];

  return (
    <div className="bg-surface dark:bg-on-surface text-on-surface dark:text-inverse-on-surface font-body-md antialiased min-h-screen flex">
      <VenueOwnerSidebar />
      
      <main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop bg-background dark:bg-on-surface min-h-screen">
        {/* Header area for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <div className="text-headline-md font-headline-md text-primary font-bold">Dashboard</div>
          <button className="bg-primary text-on-primary rounded-xl px-3 py-2 font-label-sm text-label-sm">Add Venue</button>
        </div>
        
        <header className="mb-8 hidden md:block">
          <h1 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface">Dashboard Overview</h1>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline mt-2">Welcome back. Here's a summary of your venue performance.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-8">
          <StatCard 
            title="Total Revenue"
            value="$124,500"
            icon="account_balance_wallet"
            iconColor="text-primary"
            overlayClass="bg-primary/10 group-hover:bg-primary/20"
            trendValue="+14.5%"
            trendText="vs last month"
          />
          <StatCard 
            title="Active Bookings"
            value="42"
            icon="event_available"
            iconColor="text-secondary-container"
            overlayClass="bg-secondary-container/10 group-hover:bg-secondary-container/20"
            trendValue="+5%"
            trendText="vs last month"
          />
          <StatCard 
            title="New Requests"
            value="8"
            icon="notification_important"
            iconColor="text-error"
            overlayClass="bg-error/10 group-hover:bg-error/20"
            trendText="Needs attention"
          />
        </div>

        {/* Main Section: Recent Booking Requests Table */}
        <div className="dark-glass-panel rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-surface-container-high dark:border-inverse-surface flex justify-between items-center">
            <h2 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface">Recent Booking Requests</h2>
            <button className="font-label-md text-label-md text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest dark:bg-inverse-surface/50 border-b border-surface-container-high dark:border-inverse-surface">
                  <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant dark:text-outline font-medium uppercase tracking-wider">Client / Event</th>
                  <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant dark:text-outline font-medium uppercase tracking-wider">Venue</th>
                  <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant dark:text-outline font-medium uppercase tracking-wider">Date & Time</th>
                  <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant dark:text-outline font-medium uppercase tracking-wider">Value</th>
                  <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant dark:text-outline font-medium uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high dark:divide-inverse-surface">
                {requests.map((req, i) => (
                  <BookingRequestRow key={i} {...req} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
