import React from 'react';

const BuildingManagementBtn: React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return (
    <button
      {...props}
      className='w-272 h-22 rounded-5 bg-none hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
    ></button>
  );
};

export default BuildingManagementBtn;
