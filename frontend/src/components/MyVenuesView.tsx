import React from 'react';
import OwnerVenueCard from './OwnerVenueCard';

export default function MyVenuesView({ onAddVenue, onEditVenue }: { onAddVenue: () => void, onEditVenue?: () => void }) {
  const venues = [
    {
      name: "Grand Crystal Ballroom",
      location: "New York, NY",
      capacity: "500",
      price: "$250/hr",
      dateCreated: "Oct 12, 2023",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbOrg6YEAsQrQtzV5kaf_EyAQs0Qx8UY7irkzVSi7vFXI-Q-u6EEriDyQa7AueeyP8tJuqzZRPiu2UjrhqABtM4zOOUmgpWbb2MzZIhqyT_0xNRMOkN9VCwNKBQuScECPKjXR8Nop0E1JkYEhAFD3lwzEEbAXrZgFXdPWR37vGKUXaqr-R9f1GFfTXsJOJj7NSDs3WdtPFJ58kO1oZJ6nFC90Xg1v0IvFMaaMhvhl-flCVUwbfIL2ZMQ",
      imageAlt: "A luxurious, grand banquet hall interior",
      category: "Banquet",
      categoryBg: "bg-primary-container",
      categoryText: "text-on-primary-container",
      status: "Approved",
      statusClasses: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },
    {
      name: "Tech Hub Boardroom",
      location: "San Francisco, CA",
      capacity: "25",
      price: "$150/hr",
      dateCreated: "Nov 05, 2023",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlNSwNH1PiR12E7bw4yvZiJ6RNXW4fwMdcPeqPS_lGk1tKaYVTd6KqCotfxDfcZH0QGMNDVRRCWF0ZDGVzji0gtp1657IkhJqA-vtO3vt84VLHe8h7g0Wd_6loP1duJ8IIpB4ZuX3NAxQZLBnb6mxC8SWc_FQ8K1QRrbwMvBKhP9JN02ve1nauIvO73ZpZ6BBcDz429RfqidZXPtBhRWeBZqn4xIy5RyA1zDnJVPRYCR8jn8PC9Ih-Uw",
      imageAlt: "A modern, high-tech conference room",
      category: "Conference",
      categoryBg: "bg-secondary-fixed",
      categoryText: "text-on-secondary-fixed",
      status: "Pending",
      statusClasses: "bg-amber-100 text-amber-800 border-amber-200"
    },
    {
      name: "Botanical Gardens Oasis",
      location: "Austin, TX",
      capacity: "200",
      price: "$300/hr",
      dateCreated: "Dec 01, 2023",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6a2_SRCmSOOa2E1ioJyARX7aXybCwfK0t4GoW999XslPfsCjeB0ZZmFH6gzTtHdzus6poCqN8asRBnhX3QTTu_-zPINVI6AAEFJ7rCHhM7zevR_GjH3ZqRHbtmtn-zNJ9iDIaB3CCoNRUh__3TYf9wJjih8jBNDN1FNopb1YQbnJqGVe0DQfLJVPcqYm0qq1Q2tpkOA0BietcdNz0_0w4fbDz1_a7dXKrFhypFFt5aBHmcF2vSwkkA",
      imageAlt: "A beautiful, lush outdoor garden venue setup",
      category: "Outdoor",
      categoryBg: "bg-tertiary-fixed",
      categoryText: "text-on-tertiary-fixed",
      status: "Rejected",
      statusClasses: "bg-red-100 text-red-800 border-red-200"
    }
  ];

  return (
    <>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">My Venues</h2>
          <p className="font-body-md text-on-surface-variant mt-2">Manage all your listed venues.</p>
        </div>
      </header>

      <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body-md text-on-surface placeholder:text-text-muted" placeholder="Search venues..." type="text"/>
          </div>
          <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-label-md text-on-surface focus:border-primary outline-none w-full md:w-auto appearance-none pr-10 relative">
            <option value="all">Status: All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-label-md text-on-surface focus:border-primary outline-none w-full md:w-auto appearance-none pr-10">
            <option value="all">Category: All</option>
            <option value="banquet">Banquet Hall</option>
            <option value="conference">Conference Room</option>
            <option value="outdoor">Outdoor Space</option>
          </select>
        </div>
        <button 
          onClick={onAddVenue}
          className="w-full md:w-auto bg-primary text-on-primary font-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add New Venue
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {venues.map((venue, i) => (
          <React.Fragment key={i}>
            <OwnerVenueCard 
              name={venue.name}
              location={venue.location}
              capacity={venue.capacity}
              price={venue.price}
              dateCreated={venue.dateCreated}
              imageSrc={venue.imageSrc}
              imageAlt={venue.imageAlt}
              category={venue.category}
              categoryBg={venue.categoryBg}
              categoryText={venue.categoryText}
              status={venue.status}
              statusClasses={venue.statusClasses}
              onEdit={onEditVenue}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
