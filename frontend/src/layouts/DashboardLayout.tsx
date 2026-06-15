import React from 'react';
import UserDashboardSidebar from '../components/UserDashboardSidebar';
import MobileTopBar from '../components/MobileTopBar';
import MobileBottomBar from '../components/MobileBottomBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased flex h-screen overflow-hidden w-full">
      <UserDashboardSidebar />
      <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto w-full">
        <MobileTopBar />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 space-y-12">
          {children}
        </div>
      </main>
      <MobileBottomBar />
    </div>
  );
}
