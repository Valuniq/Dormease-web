'use client';
import MenuBtn from '@/components/atoms/AllBtn/MenuBtn/MenuBtn';
import MenuDropBtn from '@/components/atoms/AllBtn/MenuDropBtn/MenuDropBtn';
import { NavigationItems } from '@/constants/navigation';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const rootPath = pathname.split('/')[2];
  return (
    <div className='flex flex-col items-start'>
      {NavigationItems.map((item) => (
        <div key={item.label} className='flex flex-col items-center'>
          <Link href={item.routes} className='mb-10'>
            <MenuBtn label={item.label} menu={item.icon} selected={rootPath === item.routes.split('/')[2]} />
          </Link>
          {item.subMenu && rootPath === item.routes.split('/')[2] && (
            <>
              {item.subMenu.map((subItem) => (
                <Link href={subItem.routes} key={subItem.label} className='mb-10'>
                  <MenuDropBtn selected={pathname === subItem.routes} label={subItem.label} />
                </Link>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
