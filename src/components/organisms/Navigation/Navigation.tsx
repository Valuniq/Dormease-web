'use client';
import MenuBtn from '@/components/atoms/AllBtn/MenuBtn/MenuBtn';
import MenuDropBtn from '@/components/atoms/AllBtn/MenuDropBtn/MenuDropBtn';
import { NavigationItems } from '@/constants/navigation';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { editState, navState, targetRouteState } from '@/recoil/nav';
import NavModal from './NavModal';

const Navigation = () => {
  const pathname = usePathname();
  const rootPath = pathname.split('/')[2];

  const [modal, setModal] = useRecoilState(navState);
  const edit = useRecoilValue(editState);
  const setTargetRoute = useSetRecoilState(targetRouteState);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, route: string) => {
    if (edit) {
      event.preventDefault();
      setTargetRoute(route);
      setModal(!modal);
    }
  };

  return (
    <>
      <div className='flex flex-col items-start'>
        {NavigationItems.map((item) => (
          <div
            key={item.label}
            className='flex flex-col items-center'
            onClick={(event) => {
              if (edit) {
                event.preventDefault();
              }
            }}
          >
            <Link
              href={item.routes}
              className='mb-10'
              onClick={(event) => {
                handleClick(event, item.routes);
              }}
            >
              <MenuBtn label={item.label} menu={item.icon} selected={rootPath === item.routes.split('/')[2]} />
            </Link>
            {item.subMenu && rootPath === item.routes.split('/')[2] && (
              <>
                {item.subMenu.map((subItem) => (
                  <Link
                    href={subItem.routes}
                    key={subItem.label}
                    className='mb-10'
                    onClick={(event) => {
                      handleClick(event, subItem.routes);
                    }}
                  >
                    <MenuDropBtn selected={pathname === subItem.routes} label={subItem.label} />
                  </Link>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      {modal && <NavModal />}
    </>
  );
};

export default Navigation;
