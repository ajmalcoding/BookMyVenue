import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface text-primary font-label-sm text-label-sm w-full py-12 border-t border-outline-variant flat no shadows transition-all duration-200 mt-12">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter">
        <div>
          <div className="text-headline-md font-headline-md text-primary mb-4">BookMyVenue</div>
          <p className="text-on-surface-variant font-body-md text-sm mb-4">Elevating event spaces with effortless booking and management.</p>
          <p className="text-on-surface-variant">© 2024 BookMyVenue. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-on-surface mb-1">Company</h4>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">About Us</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Careers</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Press</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-on-surface mb-1">Support</h4>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Help Center</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Contact Us</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Host Guidelines</a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-on-surface mb-1">Legal</h4>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
