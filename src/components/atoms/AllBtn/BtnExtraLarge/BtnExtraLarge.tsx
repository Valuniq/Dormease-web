import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
};

const BtnExtraLarge = ({
  label,
  disabled,
  selected = false,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`H2 w-251 h-49 rounded-8 ${selected ? 'text-white bg-blue-blue40' : 'text-gray-grayscale-50 bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:text-white hover:bg-blue-blue30 hover:hover-transition active:bg-blue-blue40'}`}
    >
      {label}
    </button>
  );
};

export default BtnExtraLarge;
