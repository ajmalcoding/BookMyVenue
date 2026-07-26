import React, { useMemo, useState } from "react";

interface Venue {
  id: number;
  name: string;
  price_per_hour: number;
  cleaning_fee: number;
  service_fee: number;
  minimum_booking_hours: number;
  capacity: number;
}

interface BookingPanelProps {
  venue: Venue;
}

export default function BookingPanel({
  venue,
}: BookingPanelProps) {

  // =========================
  // EDITED: State
  // =========================

  const [hours, setHours] = useState(
    venue.minimum_booking_hours || 1
  );

  const [guests, setGuests] = useState(1);

  const [checkIn, setCheckIn] = useState("");

  const [checkOut, setCheckOut] = useState("");
  // =========================
  // EDITED: Price Calculation
  // =========================
  const subtotal = useMemo(() => {
    return venue.price_per_hour * hours;
  }, [hours, venue.price_per_hour]);

  const total = useMemo(() => {
    return (
      subtotal +
      Number(venue.cleaning_fee) +
      Number(venue.service_fee)
    );
  }, [
    subtotal,
    venue.cleaning_fee,
    venue.service_fee,
  ]);
  const timeSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];
const [startTime, setStartTime] = useState("");
  return (
    <div className="lg:col-span-4 relative">

      <div className="sticky top-28 ambient-shadow border border-surface-variant rounded-xl p-6 bg-surface-container-lowest">

        {/* ========================= */}
        {/* EDITED: Price */}
        {/* ========================= */}

        <div className="flex items-end justify-between mb-6">

          <div>

            <span className="font-headline-lg text-headline-lg text-on-surface">

              ₹{venue.price_per_hour}

            </span>

            <span className="font-body-md text-body-md text-on-surface-variant">

              {" "}
              / hour

            </span>

          </div>

          <div className="text-right">

            <p className="font-label-md font-semibold">
              Capacity
            </p>

            <p className="text-on-surface-variant">
              {venue.capacity} Guests
            </p>

          </div>

        </div>





        {/* ========================= */}
        {/* Booking Form */}
        {/* ========================= */}

        <div className="border border-outline-variant rounded-lg overflow-hidden mb-4">

          <div className="flex border-b border-outline-variant">

            <div className="w-1/2 p-3 border-r border-outline-variant">

              <label className="block text-xs font-bold uppercase mb-1">

                Check In

              </label>

              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent outline-none"
              />

            </div>

            <div className="w-1/2 p-3">

              <label className="block text-xs font-bold uppercase mb-1">

                Check Out

              </label>

              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent outline-none"
              />

            </div>

          </div>


        {/* Event Start Time */}
{/* Event Start Time */}
    <div className="border-b border-outline-variant p-3">
      <label className="block text-xs font-bold uppercase mb-2">
        Event Start Time
      </label>

      <select
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
      >
        <option value="">Select Time</option>

        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>  


          {/* Hours */}

          <div className="border-b border-outline-variant p-3">

            <label className="block text-xs font-bold uppercase mb-2">

              Hours

            </label>

            <input
              type="number"
              min={venue.minimum_booking_hours}
              value={hours}
              onChange={(e) =>
                setHours(Number(e.target.value))
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <p className="text-xs text-on-surface-variant mt-1">

              Minimum {venue.minimum_booking_hours} hour(s)

            </p>

          </div>





          {/* Guests */}

          <div className="p-3">

            <label className="block text-xs font-bold uppercase mb-2">

              Guests

            </label>

            <input
              type="number"
              min={1}
              max={venue.capacity}
              value={guests}
              onChange={(e) =>
                setGuests(Number(e.target.value))
              }
              className="w-full border rounded-lg px-3 py-2"
            />

            <p className="text-xs text-on-surface-variant mt-1">

              Maximum Capacity : {venue.capacity}

            </p>

          </div>

        </div>





        {/* ========================= */}
        {/* Book Button */}
        {/* ========================= */}

        <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:opacity-90 transition-opacity mb-4">

          Book Now

        </button>

        <p className="text-center text-sm text-on-surface-variant mb-6">

          You won't be charged yet

        </p>





        {/* ========================= */}
        {/* Price Breakdown */}
        {/* ========================= */}

        <div className="space-y-4 border-b border-surface-variant pb-6">

          <div className="flex justify-between">

            <span>

              ₹{venue.price_per_hour} × {hours} hour(s)

            </span>

            <span>

              ₹{subtotal}

            </span>

          </div>

          <div className="flex justify-between">

            <span>

              Cleaning Fee

            </span>

            <span>

              ₹{venue.cleaning_fee}

            </span>

          </div>

          <div className="flex justify-between">

            <span>

              Service Fee

            </span>

            <span>

              ₹{venue.service_fee}

            </span>

          </div>

        </div>

        {/* ========================= */}
        {/* Total */}
        {/* ========================= */}

        <div className="flex justify-between font-headline-md text-headline-md pt-6">

          <span>Total</span>

          <span>

            ₹{total}

          </span>

        </div>

      </div>

    </div>
  );
}