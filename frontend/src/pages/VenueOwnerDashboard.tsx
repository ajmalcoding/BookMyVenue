import React, { useState } from 'react';
import VenueOwnerDashboardSidebar from '../components/VenueOwnerDashboardSidebar';
import VenueOwnerStatCard from '../components/VenueOwnerStatsCard';
import BookingRequestRow from '../components/BookingRequestRow';
import MyVenuesView from '../components/MyVenuesView';
import AddVenueModal from '../components/AddVenueModal';
import { createVenue } from "../api/venue";

export default function VenueOwnerDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'venues'>('dashboard');
  const [modalState, setModalState] = useState<{isOpen: boolean; mode: 'add' | 'edit'; venue?: any;}>({isOpen: false, mode: 'add', venue: undefined,});

  const handleCreateVenue = async (payload: any) => {
    try {
      console.log("Submitting:", payload);

      const response = await createVenue(payload);

      console.log("Venue Created:", response);

      setModalState({
        isOpen: false,
        mode: "add",
      });

      // Later we'll refresh the venue list here

    } catch (error) {
      console.error(error);
    }
  };

  const requests: React.ComponentProps<typeof BookingRequestRow>[] = [
    {
      initials: "AC",
      clientName: "Alice Cooper",
      eventType: "Wedding Reception",
      venueName: "Grand Atrium Hall",
      date: "Oct 15, 2024",
      time: "6:00 PM - 11:00 PM",
      value: "$4,500",
      initialsBg: "bg-primary-fixed",
      initialsText: "text-on-primary-fixed"
    },
    {
      initials: "TM",
      clientName: "TechCorp Meetup",
      eventType: "Corporate Seminar",
      venueName: "Innovation Loft Space",
      date: "Nov 02, 2024",
      time: "9:00 AM - 5:00 PM",
      value: "$1,200",
      initialsBg: "bg-surface-container-high",
      initialsText: "text-primary"
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex">
      <VenueOwnerDashboardSidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onAddVenue={() => setModalState({isOpen: true, mode: 'add'})}
      />
      
      <main className="flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-screen">
        {/* Header area for Mobile */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <div className="text-headline-md font-headline-md text-primary font-bold">Dashboard</div>
          <button className="bg-primary text-on-primary rounded-xl px-4 py-2 font-label-sm text-label-sm font-semibold">Add Venue</button>
        </div>
        
        {activeTab === 'dashboard' ? (
          <>
            <header className="mb-8 hidden md:block">
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Dashboard Overview</h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Welcome back. Here's a summary of your venue performance.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-8">
              <VenueOwnerStatCard 
                title="Total Revenue"
                value="$124,500"
                icon="account_balance_wallet"
                iconContainerClass="bg-primary-fixed text-on-primary-fixed"
                trendValue="+14.5%"
                trendText="vs last month"
              />
              <VenueOwnerStatCard 
                title="Active Bookings"
                value="42"
                icon="event_available"
                iconContainerClass="bg-secondary-fixed text-on-secondary-fixed"
                trendValue="+5%"
                trendText="vs last month"
              />
              <VenueOwnerStatCard 
                title="New Requests"
                value="8"
                icon="notification_important"
                iconContainerClass="bg-error-container text-on-error-container"
                trendText="Action Required"
                trendColor="text-error"
              />
            </div>

            {/* Main Section: Recent Booking Requests Table */}
            <div className="bg-surface-container-lowest rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/20 overflow-hidden mb-8">
              <div className="p-6 border-b border-surface-container-high flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-on-surface">Recent Booking Requests</h2>
                <button className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-1">
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50 border-b border-surface-container-high">
                      <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Client / Event</th>
                      <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Venue</th>
                      <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Date & Time</th>
                      <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider">Value</th>
                      <th className="py-4 px-6 font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high">
                    {requests.map((req, i) => (
                      <BookingRequestRow key={i} {...req} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
          ) : (
            <MyVenuesView 
              onAddVenue={() => setModalState({isOpen: true, mode: 'add'})} 
              onEditVenue={() => setModalState({isOpen: true, mode: 'edit'})}
            />
          )}
      </main>
     <AddVenueModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        venue={modalState.venue}
        onClose={() =>
          setModalState({
            ...modalState,
            isOpen: false,
          })
        }
        onSubmit={handleCreateVenue}
      />
    </div>
  );
}
