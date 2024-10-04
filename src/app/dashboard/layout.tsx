'use client';

import Header from '@/components/organisms/Header/Header';
import Navigation from '@/components/organisms/Navigation/Navigation';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Quill이 있는 경로
  const quillPaths = [
    '/dashboard/notices/writings',
    '/dashboard/notices/edits',
    '/dashboard/supports/writings',
    '/dashboard/supports/edits',
  ];

  return (
    <div className=''>
      <div className='z-header fixed top-0 w-full'>
        <Header />
      </div>
      <div
        className={`flex align-start ml-19 ${
          pathname !== '/dashboard/schedules' &&
          !quillPaths.includes(pathname) &&
          'xxl:scale-80 xl:scale-65 lg:scale-65 md:scale-50 sm:scale-40'
        } transform-origin-top-left mt-132 xxl:mt-132 xl:mt-120 lg:mt-120 md:mt-100 sm:mt-80`}
      >
        <nav
          className={`${
            pathname === '/dashboard/schedules' || quillPaths.includes(pathname)
              ? 'transform-origin-top-left xxl:scale-80 xl:scale-65 lg:scale-65 md:scale-50 sm:scale-40 mr-50'
              : 'mr-101'
          }`}
        >
          <Navigation />
        </nav>
        {children}
      </div>
    </div>
  );
}
