import React from 'react';

type Props = {
  label: string;
};

const ResignBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-118 h-31 rounded-8 text-white bg-red-red10 hover:bg-red-red20 hover:hover-transition active:bg-red-red30'
    >
      {label}
    </button>
  );
};

export default ResignBtn;
