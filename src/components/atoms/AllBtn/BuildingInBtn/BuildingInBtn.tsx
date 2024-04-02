import React from 'react';

type Props = {
  label: string;
  selected: boolean;
};

const BuildingInBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${'w-380 h-61 rounded-b-8 text-white'} + ${selected ? 'bg-blue-blue50' : 'bg-blue-blue30 hover:bg-blue-blue40 active:bg-blue-blue50'}`}
    >
      {label}
    </button>
  );
};

export default BuildingInBtn;
