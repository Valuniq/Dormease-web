import React from 'react';
import logo from '@public/logo/HeaderLogo.png';
import Image from 'next/image';
import LogoutBtn from '@/components/atoms/AllBtn/LogoutBtn/LogoutBtn';

const Header = () => {
  return (
    // <div className='w-full h-102 bg-gray-grayscale5 flex items-center justify-between pl-96 pr-176'>
    //   <Image src={logo} width={125} height={46} className='object-contain' alt='logo' />
    //   <LogoutBtn label={'로그아웃'} />
    // </div>
    <div className='w-full bg-gray-grayscale5 pl-[5%] pr-[9%]'>
      <div className='flex items-center justify-between w-full h-102 xxl:h-102 xl:h-90 lg:h-80 md:h-70 sm:h-55'>
        <Image
          src={logo}
          width={125}
          height={46}
          className='object-contain xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40'
          alt='logo'
        />
        <div className='xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40'>
          <LogoutBtn label={'로그아웃'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
