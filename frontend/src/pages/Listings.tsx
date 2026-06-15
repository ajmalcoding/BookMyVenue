import React from 'react';
import ListingsSidebar from '../components/ListingsSidebar';
import ListingsGrid from '../components/ListingsGrid';
import Footer from '../components/Footer';
import TopNavBar from '../components/TopNavBar';

export default function Listings() {
  return (
    <>
      <TopNavBar />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col md:flex-row gap-gutter">
        <ListingsSidebar />
        <ListingsGrid />
      </div>
      <Footer />
    </>
  );
}
