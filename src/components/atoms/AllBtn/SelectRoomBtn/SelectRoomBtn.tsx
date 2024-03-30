import React from 'react';
import KebabMenu from '../../../../../public/images/KebabMenu.svg';
import CloseBtnRed from '../../../../../public/images/CloseBtnRed.svg';

const SelectRoomBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='flex justify-between items-center w-403 h-52 rounded-r-8 rounded-l-full opacity-0 hover:opacity-100 hover:bg-gray-grayscale5 active:bg-gray-grayscale10'
    >
      <CloseBtnRed className='ml-21' />
      <KebabMenu className='mr-11' />
    </button>
  );
};

export default SelectRoomBtn;
