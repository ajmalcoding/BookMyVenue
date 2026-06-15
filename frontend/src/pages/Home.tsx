import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularCategories from '../components/PopularCategories';
import FeaturedVenues from '../components/FeaturedVenues';

import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PopularCategories />
      <FeaturedVenues />
    </MainLayout>
  );
}
