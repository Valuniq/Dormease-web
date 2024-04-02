import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
  variant: 'blue' | 'green' | 'red';
};

const BtnLargeVariant: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  variant,
  disabled,
  selected = false,
  ...props
}) => {
  const bgColorClass = () => {
    switch (variant) {
      case 'blue':
        return `${selected ? 'bg-blue-blue50' : 'bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50'}`;
      case 'green':
        return `${selected ? 'bg-green-green40' : 'bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40'}`;
      case 'red':
        return `${selected ? 'bg-red-red40' : 'bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40'}`;
      default:
        return '';
    }
  };

  return (
    <button {...props} disabled={disabled} className={`w-115 h-37 rounded-full text-white ${bgColorClass()}`}>
      {label}
    </button>
  );
};

export default BtnLargeVariant;
