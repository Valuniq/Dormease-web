import React from 'react';
import Link from 'next/link';
import Arrow from '@public/images/Arrow.svg';

type Props = {
  label: string;
  labelWidth: number;
  link: string;
  backgroundColor: string;
  mainColor: string;
  linkTextColor: string;
};

const ShortcutBox = ({ label, labelWidth, link, backgroundColor, mainColor, linkTextColor }: Props) => {
  return (
    <Link href={link} passHref>
      <div
        className={`hover-transition hover:opacity-80 font-pretendard w-250 h-282 rounded-30 shadow3 flex flex-col justify-center p-19 cursor-pointer`}
        style={{ backgroundColor }}
      >
        <div style={{ width: labelWidth }} className='h-120 mr-auto'>
          <span className='font-bold text-50 leading-60' style={{ color: mainColor }}>
            {label}
          </span>
        </div>
        <div className='flex flex-col items-center justify-center ml-auto'>
          <span className='text-15 font-semibold mb-6' style={{ color: linkTextColor }}>
            바로가기
          </span>
          <div
            className='w-87 h-87 rounded-[50%] flex items-center justify-center'
            style={{ backgroundColor: mainColor }}
          >
            <Arrow fill={backgroundColor} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShortcutBox;
