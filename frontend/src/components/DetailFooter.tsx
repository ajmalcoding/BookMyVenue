import React from 'react';

export default function DetailFooter() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface w-full py-12 border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <div className="flex flex-col gap-4">
          <span className="text-headline-md font-headline-md text-primary font-bold">BookMyVenue</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">© 2024 BookMyVenue. All rights reserved.</span>
        </div>
        <div className="flex flex-col gap-2">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline" href="#">Privacy Policy</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col gap-2">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline" href="#">Help Center</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all duration-200 hover:underline" href="#">Contact Us</a>
        </div>
        <div className="flex gap-4 items-start">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
          <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
        </div>
      </div>
    </footer>
  );
}
