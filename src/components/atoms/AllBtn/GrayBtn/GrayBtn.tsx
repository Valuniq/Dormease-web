import React from 'react';

type Props = {
  label: string;
};

const GrayBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-133 h-42 rounded-8 text-gray-grayscale-40 bg-gray-grayscale5 disabled:text-gray-grayscale30 hover:bg-gray-grayscale10 active:bg-gray-grayscale30'
    >
      {label}
    </button>
  );
};

export default GrayBtn;
