import React from 'react';

type Props = {
  label: string;
};

const FloorBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-60 h-42 rounded-full text-gray-grayscale-50 bg-gray-grayscale10 disabled:bg-none hover:bg-gray-grayscale20 active:bg-gray-grayscale30'
    >
      {label}
    </button>
  );
};

export default FloorBtn;
