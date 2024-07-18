import Header from '@/components/organisms/Header/Header';
import Navigation from '@/components/organisms/Navigation/Navigation';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='z-header mb-30 fixed top-0 w-full'>
        <Header />
      </div>
      <div className='flex align-start ml-19 mt-132 xl:scale-80 lg:scale-65 md:scale-50 sm:scale-40 transform-origin-top-left'>
        <nav className='mr-101'>
          <Navigation />
        </nav>
        {children}
      </div>
    </>
  );
}
