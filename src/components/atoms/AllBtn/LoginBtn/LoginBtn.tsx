import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
};

const LoginBtn = ({ label, disabled, ...props }: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className='H1 w-405 h-71 rounded-full text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 hover:hover-transition active:bg-blue-blue50'
    >
      {label}
    </button>
  );
};

export default LoginBtn;
