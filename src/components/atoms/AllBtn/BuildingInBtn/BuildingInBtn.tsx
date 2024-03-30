import React from 'react';

type Props = {
  label: string;
};

const BuildingInBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-380 h-61 rounded-b-8 text-white bg-blue-blue30 hover:bg-blue-blue40 active:bg-blue-blue50'
    >
      {label}
    </button>
  );
};

export default BuildingInBtn;
