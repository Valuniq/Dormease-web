import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected: boolean;
  variant: 'blue' | 'red';
};

const BtnMiniVariant: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  disabled,
  selected = false,
  variant,
  ...props
}) => {
  const bgColorClass = (variant: string) => {
    switch (variant) {
      case 'blue':
        return `${selected ? 'bg-blue-blue50' : 'bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50'}`;
      case 'red':
        return `${selected ? 'bg-red-red40' : 'bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40'}`;
      default:
        return '';
    }
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-79 h-34 rounded-full text-white hover:hover-transition ${bgColorClass(variant)}`}
    >
      {label}
    </button>
  );
};

export default BtnMiniVariant;
