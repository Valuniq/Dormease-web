import Image from 'next/image';
import React from 'react';
import user from '@public/images/user.png';

type Props = {
  content: string;
  date: string;
};

const RequestList = ({ content, date }: Props) => {
  return (
    <div className='hover-transition hover:opacity-80  w-500 h-120 rounded-30 shadow4 bg-white flex items-center p-17'>
      <Image src={user} alt='user ' width={52} height={52} className='object-contain' />
      <div className='ml-11 w-full flex flex-col'>
        <div
          className='h-40 caption-1 text-gray-grayscale40 mb-21'
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '379px',
          }}
        >
          {content}
        </div>
        <div className='ml-auto caption-2 text-gray-grayscale30'>{date}</div>
      </div>
    </div>
  );
};

export default RequestList;
