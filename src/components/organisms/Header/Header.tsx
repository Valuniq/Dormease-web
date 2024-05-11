import React from 'react';
import logo from '@public/logo/HeaderLogo.png';
import Image from 'next/image';
import LogoutBtn from '@/components/atoms/AllBtn/LogoutBtn/LogoutBtn';

const Header = () => {
  return (
    <div className='w-full h-102 bg-gray-grayscale5 flex items-center justify-between pl-96 pr-176'>
      <Image src={logo} width={125} height={46} className='object-contain' alt='logo' />
      <LogoutBtn label={'로그아웃'} />
    </div>
  );
};

export default Header;
