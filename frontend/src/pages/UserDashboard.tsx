import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import BookingCard from '../components/BookingCard';

export default function UserDashboard() {
  const bookings: React.ComponentProps<typeof BookingCard>[] = [
    {
      title: "The Glasshouse",
      location: "Downtown Tech District",
      month: "Oct",
      date: "24",
      eventType: "Corporate Offsite",
      time: "09:00 AM - 05:00 PM",
      status: "Pending",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqAdoNpcnAFNNnvlKWyxUaz6AKV_2TOQyAbCocaROJtk6YzGXiFont5SGwsmk5vlTfZyixdV0xso6RrW77sN-4-7pZL66EFT4qzEWRzzIYm_DXv7FTl17tQDE3cjS5brHDg4m2sv-SSc2JY09vmJUPBGclIErv1i10c_XMLUxKGItEIRXr-FzAlLAI4cOUM1uYOIuWw4eVKl6EqaHZWDkcpN4KGI7CODFvueCl--mP0ggC_RtHmJSEO0Mg0YQzh02TJ66B0k_hMkO9",
      imageAlt: "A bright, modern event space with polished concrete floors..."
    },
    {
      title: "Apex Boardroom",
      location: "Innovation Park",
      month: "Nov",
      date: "02",
      eventType: "Strategy Session",
      time: "10:00 AM - 02:00 PM",
      status: "Confirmed",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa1eaTEFcgCUNMuOf1BaGuwVdSlQMHDp8pbaRxSN869_QeVf-AXvWMEH6ol-OuXe-PMMhmYfNB524HvlzFtxsg8PlLaGpX8TnnhQycKEx-93ev56OsJIlNmhKjddOshDYEyo3Hbq_ewdIGK0bvARkYVSltVm4hsx5-q1nHwJDGIuRX0D_UFAAgQp9G0k1303Kwti0B4I9DGXEqhGN0mubJ7ajEV1PtW18P_3F2RijxQS8EV0UYBTcKbiGMWWL0uhTV6Wn-JdOsJpO4",
      imageAlt: "An elegant, minimalist conference room..."
    }
  ];

  return (
    <DashboardLayout>
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface">Welcome back, Alex.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Here is a summary of your upcoming venue bookings and recent activity.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-lowest p-4 rounded-xl border border-surface-variant shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-fixed-dim">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Bookings</p>
              <p className="font-headline-md text-headline-md text-on-surface">14</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Bookings (Bento Grid Style) */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Upcoming Bookings</h3>
          <a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#">View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {bookings.map((booking, index) => (
            <BookingCard key={index} {...booking} />
          ))}

          {/* Placeholder Card for Empty State or Call to Action */}
          <div className="bg-surface rounded-[16px] border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center p-8 text-center hover:border-primary/50 hover:bg-surface-container-lowest transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors mb-4">
              <span className="material-symbols-outlined text-[32px]">add</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Book Another Venue</h4>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Explore our premium selection of spaces for your next event or meeting.</p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
