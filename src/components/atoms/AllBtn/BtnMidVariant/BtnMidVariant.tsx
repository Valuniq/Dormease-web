import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
  variant: 'blue' | 'green' | 'red' | 'gray' | 'whiteblue' | 'white';
};

const BtnMidVariant = ({
  label,
  disabled,
  variant,
  selected = false,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  const bgColorClass = () => {
    switch (variant) {
      case 'blue':
        return `Btn-cap shadow2 text-white ${selected ? 'bg-blue-blue50' : 'bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50'}`;
      case 'green':
        return `Btn-cap shadow2 text-white ${selected ? 'bg-green-green40' : 'bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40'}`;
      case 'red':
        return `Btn-cap shadow2 text-white ${selected ? 'bg-red-red40' : 'bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40'}`;
      case 'gray':
        return `H4 text-gray-grayscale50 ${disabled ? 'disabled:text-gray-grayscale40 disabled:bg-transparent' : selected ? 'bg-gray-grayscale30' : 'bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30'}`;
      case 'whiteblue':
        return `Btn-cap shadow2 ${selected ? 'bg-blue-blue30 border-blue-blue50 text-white' : 'text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white'}`;
      case 'white':
        return `${disabled ? 'H4 disabled:text-gray-grayscale20 disabled:bg-transparent' : selected ? 'H4 text-gray-grayscale50 bg-gray-grayscale30' : 'H4 text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30'}`;
      default:
        return '';
    }
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-133 min-h-42 p-5 rounded-8 hover:hover-transition ${bgColorClass()}`}
    >
      {label}
    </button>
  );
};

export default BtnMidVariant;
