import Image from 'next/image';
import React from 'react';
import ShortcutBox from './ShortcutBox';
import { shortcutData } from './ShortcutData';
import Bookmark from '@public/images/Bookmark.png';

const Shortcut = () => {
  return (
    <div>
      <div className='flex items-center'>
        <span className='font-pretendard font-semibold text-24 text-gray-grayscale40'>주요</span>{' '}
        <Image src={Bookmark} alt='bookmark' height={24} width={24} className='object-contain ml-3' />{' '}
      </div>
      <div className='flex items-center gap-12'>
        {shortcutData.map((i, index) => (
          <ul key={index}>
            <ShortcutBox
              label={i.label}
              link={i.link}
              mainColor={i.mainColor}
              linkTextColor={i.linkTextColor}
              backgroundColor={i.backgroundColor}
              labelWidth={i.labelWidth}
            />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Shortcut;
