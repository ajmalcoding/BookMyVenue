import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import DetailNavBar from "../components/DetailNavBar";
import DetailFooter from "../components/DetailFooter";
import VenueGallery from "../components/VenueGallery";
import BookingPanel from "../components/BookingPanel";
import ReviewList from "../components/ReviewList";


// =======================
// EDITED : Interfaces
// =======================

interface Amenity {
  id: number;
  name: string;
  icon: string;
}

interface Layout {
  id: number;
  layout: string;
  capacity: number;
}

interface VenueImage {
  id: number;
  image: string;
  is_primary: boolean;
}

interface Owner {
  id: number;
  username: string;
  email: string;
}
interface Review {
    id: number;
  user_email: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface Venue {
  id: number;
  name: string;
  slug: string;

  short_description: string;
  description: string;

  city: string;
  state: string;
  address: string;
  landmark: string;

  category: string;

  price_per_hour: number;
  cleaning_fee: number;
  service_fee: number;

  capacity: number;

  contact_phone: string;
  contact_email: string;

  opening_time: string;
  closing_time: string;

  minimum_booking_hours: number;

  parking_capacity: number;

  owner: Owner;

  amenities: Amenity[];

  layouts: Layout[];
  reviews: Review[];
  images: VenueImage[];
}

export default function VenueDetail() {

  const { slug } = useParams();

  const [venue, setVenue] = useState<Venue | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // =======================
  // EDITED : Fetch Venue
  // =======================

  useEffect(() => {

    const fetchVenue = async () => {

      try {

        const response = await axios.get(
          `http://127.0.0.1:8000/api/venues/venues/${slug}/`
        );

        setVenue(response.data);

      } catch (err) {

        console.error(err);

        setError("Unable to load venue.");

      } finally {

        setLoading(false);

      }

    };

    fetchVenue();

  }, [slug]);



  // =======================
  // EDITED : Loading
  // =======================

  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        Loading Venue...

      </div>

    );

  }

  // =======================
  // EDITED : Error
  // =======================

  if (error || !venue) {

    return (

      <div className="min-h-screen flex justify-center items-center text-red-500">

        {error}

      </div>

    );

  }

  return (

    <div className="font-body-md text-body-md antialiased overflow-x-hidden bg-surface text-on-surface min-h-screen">

      <DetailNavBar />

      <main className="pt-24 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* ========================= */}
        {/* EDITED : Dynamic Header */}
        {/* ========================= */}

        <div className="mb-gutter">

          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">

            {venue.name}

          </h1>

          <div className="flex items-center gap-2 text-on-surface-variant">

            <span className="material-symbols-outlined">

              location_on

            </span>

            <span>

              {venue.city}, {venue.state}

            </span>

          </div>

        </div>



        {/* ========================= */}
        {/* EDITED : Dynamic Gallery */}
        {/* ========================= */}

        <VenueGallery images={venue.images} />



        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

          {/* Left Column */}

          <div className="lg:col-span-8 flex flex-col gap-margin-desktop">
            {/* ========================= */}
{/* EDITED : Host Info */}
{/* ========================= */}

<div className="flex items-center justify-between pb-gutter border-b border-surface-variant">
  <div>
    <h2 className="font-headline-md text-headline-md text-on-surface mb-1">
      Hosted by {venue.owner.username}
    </h2>

    <p className="font-body-md text-body-md text-on-surface-variant">
      Venue Owner
    </p>
  </div>

  <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-surface-variant">
    <span className="material-symbols-outlined text-4xl text-on-surface-variant flex items-center justify-center w-full h-full">
      business
    </span>
  </div>
</div>

{/* ========================= */}
{/* EDITED : Highlights */}
{/* ========================= */}

<div className="flex flex-col gap-6 pb-gutter border-b border-surface-variant">

  <div className="flex gap-4">
    <span className="material-symbols-outlined text-3xl text-primary">
      groups
    </span>

    <div>
      <h3 className="font-label-md font-bold">
        Capacity
      </h3>

      <p className="text-on-surface-variant">
        Holds up to {venue.capacity} guests.
      </p>
    </div>
  </div>

  <div className="flex gap-4">
    <span className="material-symbols-outlined text-3xl text-primary">
      schedule
    </span>

    <div>

      <h3 className="font-label-md font-bold">
        Opening Hours
      </h3>

      <p className="text-on-surface-variant">
        {venue.opening_time} - {venue.closing_time}
      </p>

    </div>
  </div>

  <div className="flex gap-4">

    <span className="material-symbols-outlined text-3xl text-primary">
      local_parking
    </span>

    <div>

      <h3 className="font-label-md font-bold">
        Parking
      </h3>

      <p className="text-on-surface-variant">
        {venue.parking_capacity} Parking Spaces
      </p>

    </div>

  </div>

</div>

{/* ========================= */}
{/* EDITED : About */}
{/* ========================= */}

<section className="pb-gutter border-b border-surface-variant">

  <h2 className="font-headline-lg mb-4">

    About this space

  </h2>

  <p className="text-on-surface-variant whitespace-pre-line">

    {venue.description}

  </p>

</section>

{/* ========================= */}
{/* EDITED : Amenities */}
{/* ========================= */}

<section className="pb-gutter border-b border-surface-variant">

  <h2 className="font-headline-lg mb-6">

    What this venue offers

  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

    {venue.amenities.map((amenity) => (

      <div
        key={amenity.id}
        className="p-4 rounded-xl border border-surface-variant bg-surface flex flex-col gap-2"
      >

        <span className="material-symbols-outlined">

          {amenity.icon || "check_circle"}

        </span>

        <span>{amenity.name}</span>

      </div>

    ))}

  </div>

</section>

{/* ========================= */}
{/* EDITED : Layouts */}
{/* ========================= */}

<section className="pb-gutter border-b border-surface-variant">

  <h2 className="font-headline-lg mb-6">

    Capacity & Layouts

  </h2>

  <div
    className="flex gap-4 overflow-x-auto pb-4"
    style={{
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    }}
  >

    {venue.layouts.map((layout) => (

      <div
        key={layout.id}
        className="flex-shrink-0 px-4 py-2 rounded-full bg-primary-container/10 border border-primary/20"
      >

        {layout.layout} : {layout.capacity}

      </div>

    ))}

  </div>

</section>

{/* ========================= */}
{/* EDITED : Location */}
{/* ========================= */}

<section className="pb-gutter border-b border-surface-variant">

  <h2 className="font-headline-lg mb-4">

    Location

  </h2>

  <p className="text-on-surface-variant mb-4">

    {venue.address}

  </p>

  <p className="text-on-surface-variant mb-6">

    {venue.city}, {venue.state}

  </p>

  <div className="h-[350px] rounded-xl bg-surface-container border border-surface-variant flex items-center justify-center">

    <span className="text-on-surface-variant">

      Google Map will be integrated here

    </span>

  </div>

</section>

{/* ========================= */}
{/* Reviews (Keep Static) */}
{/* ========================= */}

{/* Reviews Section */}
<ReviewList reviews={venue?.reviews || []} />

</div>

{/* ========================= */}
{/* EDITED : Booking Panel */}
{/* ========================= */}

<BookingPanel venue={venue} />

</div>

</main>

<DetailFooter />

</div>

);

}