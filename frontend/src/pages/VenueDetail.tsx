import React from 'react';
import DetailNavBar from '../components/DetailNavBar';
import DetailFooter from '../components/DetailFooter';
import VenueGallery from '../components/VenueGallery';
import BookingPanel from '../components/BookingPanel';

export default function VenueDetail() {
  return (
    <div className="font-body-md text-body-md antialiased overflow-x-hidden bg-surface text-on-surface min-h-screen">
      <DetailNavBar />
      
      <main className="pt-24 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Title & Location */}
        <div className="mb-gutter">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">The Grand Horizon Loft</h1>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
            <span className="material-symbols-outlined text-base">location_on</span>
            <span>Downtown Arts District, Metropolitan Area</span>
            <span className="mx-2">•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-bold text-on-surface">4.95</span>
              <span className="text-on-surface-variant">(128 Reviews)</span>
            </span>
          </div>
        </div>

        <VenueGallery />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 flex flex-col gap-margin-desktop">
            {/* Host Info */}
            <div className="flex items-center justify-between pb-gutter border-b border-surface-variant">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-1">Hosted by Premium Events Co.</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Superhost • 5 years hosting</p>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-surface-variant">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant flex items-center justify-center w-full h-full">business</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-6 pb-gutter border-b border-surface-variant">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                <div>
                  <h3 className="font-label-md text-label-md font-bold text-on-surface mb-1">Premium Space</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Top-tier amenities and dedicated support staff.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">location_city</span>
                <div>
                  <h3 className="font-label-md text-label-md font-bold text-on-surface mb-1">Prime Location</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Situated in the heart of the arts district with easy transit access.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-3xl text-primary">event_available</span>
                <div>
                  <h3 className="font-label-md text-label-md font-bold text-on-surface mb-1">Flexible Booking</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Free cancellation up to 48 hours before the event.</p>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section className="pb-gutter border-b border-surface-variant">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">About this space</h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4">
                <p>
                  Experience unparalleled elegance at The Grand Horizon Loft. Designed for both high-stakes corporate retreats and exclusive social gatherings, this space blends architectural precision with welcoming hospitality.
                </p>
                <p>
                  The venue features floor-to-ceiling windows that flood the area with natural light, highlighting the minimalist decor and glassmorphic accents. With state-of-the-art integrated technology and a flexible open-plan layout, it seamlessly adapts to your specific event requirements.
                </p>
                <button className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1 mt-2">
                  Show more <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </section>

            {/* Amenities Grid */}
            <section className="pb-gutter border-b border-surface-variant">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">What this venue offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">wifi</span>
                  <span className="font-body-md text-body-md text-on-surface">High-speed Wi-Fi</span>
                </div>
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">tv</span>
                  <span className="font-body-md text-body-md text-on-surface">4K Projector & Screens</span>
                </div>
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">ac_unit</span>
                  <span className="font-body-md text-body-md text-on-surface">Climate Control</span>
                </div>
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">local_cafe</span>
                  <span className="font-body-md text-body-md text-on-surface">Catering Kitchen</span>
                </div>
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">accessible</span>
                  <span className="font-body-md text-body-md text-on-surface">Wheelchair Accessible</span>
                </div>
                <div className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col items-start gap-2 hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant">local_parking</span>
                  <span className="font-body-md text-body-md text-on-surface">Valet Parking</span>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                Show all 32 amenities
              </button>
            </section>

            {/* Capacity & Layout */}
            <section className="pb-gutter border-b border-surface-variant">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Capacity & Layouts</h2>
              <div className="flex gap-4 overflow-x-auto pb-4" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <div className="flex-shrink-0 px-4 py-2 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">groups</span> Standing: 150
                </div>
                <div className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">table_restaurant</span> Banquet: 80
                </div>
                <div className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">meeting_room</span> Conference: 50
                </div>
                <div className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container border border-surface-variant text-on-surface-variant font-label-md text-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chair</span> Theater: 100
                </div>
              </div>
            </section>

            {/* Map Section */}
            <section className="pb-gutter border-b border-surface-variant">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Location</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Downtown Arts District, Metropolitan Area</p>
              <div className="w-full h-[400px] rounded-xl overflow-hidden border border-surface-variant bg-surface-container relative">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-2">map</span>
                  <span className="font-label-md text-label-md">Interactive Map View</span>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-2xl text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">4.95 • 128 Reviews</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Review Card 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                      <span className="material-symbols-outlined w-full h-full flex items-center justify-center text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">Sarah Jenkins</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm">October 2023</p>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    "Absolutely stunning space. The natural light made our corporate retreat feel open and energizing. The on-site staff were incredibly accommodating."
                  </p>
                </div>

                {/* Review Card 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                      <span className="material-symbols-outlined w-full h-full flex items-center justify-center text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md font-bold text-on-surface">Michael Chen</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant text-sm">September 2023</p>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    "Perfect for our product launch. The AV setup was flawless, and the aesthetic matched our brand's premium feel exactly."
                  </p>
                </div>
              </div>
              <button className="mt-8 px-6 py-3 border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                Show all 128 reviews
              </button>
            </section>
          </div>

          {/* Right Column: Booking Panel */}
          <BookingPanel />
        </div>
      </main>

      <DetailFooter />
    </div>
  );
}
