import React from 'react';

type Props = {
  content: string;
  date: string;
};

const NoticeList = ({ content, date }: Props) => {
  return (
    <div className='flex items-center justify-between h-59 p-18'>
      <div className='caption-0 text-gray-grayscale50'>{content}</div>
      <div className='caption-0 text-gray-grayscale30'>{date}</div>
    </div>
  );
};

export default NoticeList;
