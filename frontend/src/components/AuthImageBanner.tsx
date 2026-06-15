import React from 'react';

export default function AuthImageBanner() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container">
      <img alt="Luxury Event Venue" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZBWhw2rC8L_Z1zLfAi8fKb0akLhoggrE9uQ2XlSXU9xckbZZCu5hcu_Bh0IXObHamAa3KQRXgEfVLKTdsOvGywgNcxZzbgfyoX7skgtRUj6p3BzhhO6Gi4bnvdGMg5umpEVk7gKWKI78ZnVE_sCFzumymxeTCnxuXn_lg7xDXtct3CN5JSRmsZvTSSrXn1sFyUxDUbDbBBE_n38fG5ppJZPyMhU_Tyk6mmTxkAB9T6U_bkD_d1GA1BzpveMe9PHB6RNABoMDS75e" />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 image-overlay"></div>
      
      {/* Brand Content Container */}
      <div className="relative z-10 flex flex-col justify-between w-full p-12 lg:p-margin-desktop">
        {/* Logo Anchor */}
        <div className="text-on-primary font-headline-md text-headline-md font-bold tracking-tight">
          BookMyVenue
        </div>
        
        {/* Quote / Value Prop */}
        <div className="max-w-md">
          <p className="font-display-lg text-display-lg text-on-primary mb-6">
            "Curating spaces for unforgettable moments."
          </p>
          <p className="font-body-lg text-body-lg text-on-primary/80">
            Join thousands of hosts and event planners transforming the way venues are discovered and booked.
          </p>
        </div>
      </div>
    </div>
  );
}
