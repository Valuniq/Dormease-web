import React from 'react';

type Props = {
  selected: boolean;
};

const BuildingManagementBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`w-272 h-22 rounded-5 hover:hover-transition ${selected ? 'bg-gray-grayscale20' : 'bg-transparent hover:bg-gray-grayscale10 active:bg-gray-grayscale20'} `}
    ></button>
  );
};

export default BuildingManagementBtn;
