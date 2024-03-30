import React from 'react';

type Props = {
  width: number;
};

const ListBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ width, ...props }) => {
  return (
    <button
      {...props}
      style={{ width: `${width}px` }}
      className='h-38 rounded-5 bg-none hover:bg-gray-grayscale10 active:bg-gray-grayscale20'
    ></button>
  );
};

export default ListBtn;
