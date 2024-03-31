import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  variant: 'blue' | 'green' | 'red' | 'gray' | 'whiteblue' | 'white';
};

const BtnMidVariant: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  disabled,
  variant,
  ...props
}) => {
  const bgColorClass = (variant: string) => {
    switch (variant) {
      case 'blue':
        return 'shadow2 text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50';
      case 'green':
        return 'shadow2 text-white bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40';
      case 'red':
        return 'shadow2 text-white bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40';
      case 'gray':
        return `${disabled ? 'disabled:text-gray-grayscale40 disabled:bg-transparent' : 'text-gray-grayscale50 bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30'}`;
      case 'whiteblue':
        return 'shadow2 text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white';
      case 'white':
        return `${disabled ? 'disabled:text-gray-grayscale20 disabled:bg-transparent' : 'text-gray-grayscale40 hover:bg-gray-grayscale10 hover:text-gray-grayscale50 active:bg-gray-grayscale30'}`;
      default:
        return '';
    }
  };

  return (
    <button {...props} disabled={disabled} className={`w-133 h-42 rounded-8 ${bgColorClass(variant)}`}>
      {label}
    </button>
  );
};

export default BtnMidVariant;
