import React from 'react';

type Props = {
  label: string;
};

const ResignBtn = ({ label, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className='H4 w-118 h-31 rounded-8 text-white bg-red-red20 hover:bg-red-red30 hover:hover-transition active:bg-red-red40'
    >
      {label}
    </button>
  );
};

export default ResignBtn;
