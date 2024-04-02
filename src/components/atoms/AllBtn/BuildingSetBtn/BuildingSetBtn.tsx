import React from 'react';

type Props = {
  label: string;
  detail: boolean;
  selected: boolean;
};

const BuildingSetBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  detail,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-8 ${detail === true ? 'w-80 h-34' : 'w-143 h-42'} ${selected ? 'text-white bg-blue-blue30' : 'text-gray-grayscale30 bg-gray-grayscale5 hover:text-blue-blue10 hover:bg-blue-blue20 hover:hover-transition hover:hover-transition active:text-white active:bg-blue-blue30'}`}
    >
      {label}
    </button>
  );
};

export default BuildingSetBtn;
