import React from 'react';

type Props = {
  label: string;
  detail: boolean;
};

const BuildingSetBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, detail, ...props }) => {
  return (
    <button
      {...props}
      className={`${detail === true ? 'w-80 h-34' : 'w-143 h-42'} rounded-8 text-gray-grayscale30 bg-gray-grayscale5 hover:text-blue-blue10 hover:bg-blue-blue20 active:text-white active:bg-blue-blue30`}
    >
      {label}
    </button>
  );
};

export default BuildingSetBtn;
