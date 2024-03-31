import React from 'react';

type Props = {
  label: string;
  disabled?: boolean;
};

const GrayBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className='w-133 h-42 rounded-8 text-gray-grayscale-40 bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:bg-gray-grayscale10 active:bg-gray-grayscale30'
    >
      {label}
    </button>
  );
};

export default GrayBtn;
