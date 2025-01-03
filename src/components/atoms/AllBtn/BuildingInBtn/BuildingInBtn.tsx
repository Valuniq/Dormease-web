import React from 'react';

type Props = {
  label: string;
  selected: boolean;
};

const BuildingInBtn = ({ label, selected = false, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`H3 w-381 h-61 rounded-b-8 text-white hover:hover-transition ${selected ? 'bg-blue-blue50' : 'bg-blue-blue30 hover:bg-blue-blue40 active:bg-blue-blue50'}`}
    >
      {label}
    </button>
  );
};

export default BuildingInBtn;
