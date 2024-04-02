import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
};

const BtnExtraLarge: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  disabled,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${'w-251 h-49 rounded-8 text-gray-grayscale-50 text-white'} + ${selected ? 'bg-blue-blue40' : 'bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:text-white hover:bg-blue-blue30 active:bg-blue-blue40'}`}
    >
      {label}
    </button>
  );
};

export default BtnExtraLarge;
