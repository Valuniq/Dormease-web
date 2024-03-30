import React from 'react';

type Props = {
  label: string;
};

const BtnExtraLarge: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-251 h-49 rounded-8 text-gray-grayscale-50 bg-gray-grayscale5 disabled:text-gray-grayscale30 hover:text-white hover:bg-blue-blue30 active:bg-blue-blue40'
    >
      {label}
    </button>
  );
};

export default BtnExtraLarge;
