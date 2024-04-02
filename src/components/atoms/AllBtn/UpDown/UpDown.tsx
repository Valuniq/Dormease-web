import React from 'react';
import UpDownIcon from '../../../../../public/images/UpDown.svg';

const UpDown: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='flex justify-center items-center w-34 h-20 rounded-8 bg-transparent hover:bg-gray-grayscale5 hover:hover-transition active:bg-gray-grayscale10'
    >
      <UpDownIcon />
    </button>
  );
};

export default UpDown;
