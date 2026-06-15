import React from 'react';

export default function VenueGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-base md:h-[500px] rounded-xl overflow-hidden mb-margin-desktop">
      <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
        <img alt="Main venue view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1ooaG4qgRZ6AzJoKqp1umU75s6v01ogt6EoB0OoasT5vA5hm0W0WvTcrDNzc0ptyItQ1fu6sbImsrhS4bfgmh5mbMO6MDGO0tqNyl202q0Re0n73QMrZIwDJ99nhh6quaFeFAO-myQFP9qUPGWrJWbEzFPMHwcKnZzkdxrY8Mk6ofpna6OpwVR45ldBY45VH0H2dB2iuyNgDDGnT1D6Rp68epMQui-BOsyu4f4rZlmcnEjc6aYAO2dLozsfmVvAuttm36crVd_Wt" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="hidden md:block relative group cursor-pointer">
        <img alt="Venue interior detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBw1FwDYw42wJBT-QdRd7yd7hkMyXBQ7klyZRW6VV2JkeiEBut75_oh-SkH1DO3d-OqdW2GZ7U8h4fehHkJ3AwVCWbIsaFpnGeBT2jrH2l72oGfXyvV-FlCgFqCGGRJfO8ymsK6vieY1SXwGziG-I1pevBjLEMI09TU0CQ2qo9zSJ9NUVjW-OKvXkKBv83Dd70xeF2g1yRAsVRKhgBH_n61i2smoHXQVO9tFP_oWEx5x1l8JZXixZtJKK6iDbhAfKasn8uOt92-r8h" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="hidden md:block relative group cursor-pointer">
        <img alt="Venue meeting setup" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4vvG3k9PuA18zvqOFzETlJABzHymYpO08BmrPjiOk6E2aE9P3fAsm6kkD5B7h1CKjpFy1x_SxzJBA-SNt93HKc25QuXvpb_Vz2o1a79JhSWYYVGLRqznT0rLz8ZNbbj9qsSdABLfWvZfPKSRdPX2svGkhD42p-MHUvmLGnlQeBpjtOQqW2thEYSerAoDRgzzeghNkb0XPGhYZhY6i69hviwHzMpP9brTrp-k7Q8q7svRj3WxHlFvs69l5dBZU_Q030BiDJEpkHBF4" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="hidden md:block relative group cursor-pointer">
        <img alt="Venue catering area" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADlhZUIH8o3b0MCeBmB17wxhDkb4EbmFQQj2vWSytVW0iTMUnFYjMc7GdAhTDRnxkF2I3uA6PDSSu-9mxEOl8BxkVOD7b3qBP0CYYOtNtuBM4BCLFPQHp12nOnU6FZAhTh0Z_9G-mI1PqzwOtdIY5ic-QYtDZE5GV4dEeZkgHccsBj5QHxHeoyVFXJHGHOqV3QXXSqt9kVpfka1hAOdPXhlHr7jFRAzTYGuJiZbNC5PXbMf5-Dv8_ywRl0kw_mRJ9i9_aIWeFWgtli" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="hidden md:block relative group cursor-pointer">
        <img alt="Venue architecture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZYv2SUPIwCQnbZ1YVWODmfKaZCajTFcvDMwh56t0yz2-uV6PiXLut0vzs5wYGCGCoU1xnzL2gzwNvv514tjBOgohFiKZCj6cdaKvUz_jhSivPehDiOJWE4YQ6i7c6v2NExephw8xASeoiGXKuWrAdDcbhW3eknVUdd-wnH1cJAPeLxH9EIrCpQBhEQ-ZIHtSFAQFRb3FhETEVpgxhzR9upOUPNTUfoiWcVZHAHHBlhmdpg-LiQ9eAm3ZE67n6r1O9AurwHEQh3T4" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">grid_view</span>
          Show all photos
        </button>
      </div>
    </div>
  );
}
