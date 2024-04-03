import React from 'react';

type Props = {
  width: number;
  selected: boolean;
};

const ListBtn = ({ width, selected = false, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      style={{ width: `${width}px` }}
      className={`h-38 rounded-5 ${selected ? 'bg-gray-grayscale20' : 'bg-transparent hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale20'}`}
    ></button>
  );
};

export default ListBtn;
