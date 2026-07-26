import React from "react";


// ===== EDITED: Types =====
interface VenueImage {
  id: number;
  image: string;
  is_primary: boolean;
}

interface VenueGalleryProps {
  images: VenueImage[];
}

export default function VenueGallery({
  images,
}: VenueGalleryProps) {

  // ===== EDITED: If no image exists =====
  if (!images || images.length === 0) {
    return (
      <div className="h-[450px] rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant mb-margin-desktop">
        No Images Available
      </div>
    );
  }

  // ===== EDITED: Main image =====
  const mainImage =
    images.find((img) => img.is_primary) || images[0];

  // ===== EDITED: Remaining images =====
  const otherImages = images
    .filter((img) => img.id !== mainImage.id)
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-base md:h-[500px] rounded-xl overflow-hidden mb-margin-desktop">

      {/* ===== EDITED: Primary Image ===== */}

      <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
        <img
          src={mainImage.image}
          alt="Venue"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* ===== EDITED: Remaining Images ===== */}

      {otherImages.map((img, index) => (

        <div
          key={img.id}
          className="hidden md:block relative group cursor-pointer"
        >
          <img
            src={img.image}
            alt={`Venue ${index + 2}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

          {/* ===== EDITED: Show button only on last image ===== */}

          {index === otherImages.length - 1 && (

            <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface transition-colors shadow-sm">

              <span className="material-symbols-outlined text-[18px]">
                grid_view
              </span>

              Show all photos

            </button>

          )}

        </div>

      ))}

    </div>
  );
}