import React from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function MainLayout({ children, activePage = 'home' }: { children: React.ReactNode, activePage?: 'home' | 'listings' }) {
  return (
    <div className="antialiased min-h-screen flex flex-col font-body-md text-body-md bg-surface text-on-surface">
      <TopNavBar activePage={activePage} />
      <main className="flex-grow pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
