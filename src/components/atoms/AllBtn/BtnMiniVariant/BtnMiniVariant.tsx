import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected: boolean;
  variant: 'blue' | 'red';
  isPadding?: boolean;
};

const BtnMiniVariant = ({
  label,
  disabled,
  selected = false,
  variant,
  isPadding,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
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
      className={`H4 w-79 h-34 rounded-full text-white hover:hover-transition whitespace-nowrap ${bgColorClass(variant)} ${isPadding && 'w-auto px-13'}`}
    >
      {label}
    </button>
  );
};

export default BtnMiniVariant;
