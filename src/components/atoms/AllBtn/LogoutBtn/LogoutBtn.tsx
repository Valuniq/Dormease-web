import React from 'react';

type Props = {
  label: string;
};

const LogoutBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-131 h-35 rounded-full text-gray-grayscale50 bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30'
    >
      {label}
    </button>
  );
};

export default LogoutBtn;
