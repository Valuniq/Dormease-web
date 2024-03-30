import React from 'react';

type Props = {
  label: string;
};

const LoginBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50'
    >
      {label}
    </button>
  );
};

export default LoginBtn;
