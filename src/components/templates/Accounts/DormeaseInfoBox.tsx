import Image from 'next/image';
import React from 'react';
import logo from '@public/logo/HeaderLogo.png';
import Overlay from './Overlay';

type Props = {
  address: string;
  tel: string;
  fax: string;
  isActive: boolean;
};

const DormeaseInfoBox = ({ address, tel, fax, isActive }: Props) => {
  return (
    <div className='relative w-333 h-477 rounded-10 flex flex-col items-start justify-start px-38 pt-38 bg-gray-grayscale5'>
      <Overlay isActive={isActive} />
      <Image src={logo} alt='logo' width={125} height={46} className='object-contain mb-30 mx-auto' />
      <address className='mb-30'>
        <strong className='caption-1 text-gray-grayscale40 mb-18'>주소</strong> <br />
        <p className='caption-2 text-gray-grayscale30 w-256'>{address}</p>
      </address>
      <div className='mb-30'>
        <strong className='caption-1 text-gray-grayscale40 mb-18'>TEL</strong> <br />
        <span className='caption-2 text-gray-grayscale30'>{tel}</span>
      </div>
      <div>
        <strong className='caption-1 text-gray-grayscale40 mb-18'>FAX</strong> <br />
        <span className='caption-2 text-gray-grayscale30'>{fax}</span>
      </div>
    </div>
  );
};

export default DormeaseInfoBox;
