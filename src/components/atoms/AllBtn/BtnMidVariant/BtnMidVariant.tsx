import React from 'react';

type Props = {
  label: string;
  variant: 'blue' | 'green' | 'red' | 'gray' | 'whiteblue';
};

const BtnMidVariant: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, variant, ...props }) => {
  const bgColorClass = (variant: string) => {
    switch (variant) {
      case 'blue':
        return 'text-white bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50';
      case 'green':
        return 'text-white bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40';
      case 'red':
        return 'text-white bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40';
      case 'gray':
        return 'text-gray-grayscale50 bg-gray-grayscale10 disabled:text-gray-grayscale40 disabled:bg-white hover:bg-gray-grayscale20 active:bg-gray-grayscale30';
      case 'whiteblue':
        return 'text-blue-blue30 border-[1.5px] bg-white border-blue-blue30 disabled:text-blue-blue20 disabled:bg-white disabled:border-blue-blue20 hover:bg-blue-blue20 hover:border-blue-blue30 hover:text-blue-blue30 active:bg-blue-blue30 active:border-blue-blue50 active:text-white';
      default:
        return '';
    }
  };

  return (
    <button {...props} className={`w-133 h-42 rounded-8 ${bgColorClass(variant)}`}>
      {label}
    </button>
  );
};

export default BtnMidVariant;
