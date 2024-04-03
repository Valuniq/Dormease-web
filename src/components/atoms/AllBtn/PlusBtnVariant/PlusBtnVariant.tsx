import React from 'react';
import PlusBtn from '@public/images/PlusBtn.svg';

type Props = {
  label: string;
  disabled: boolean;
  variant: 'blue' | 'green' | 'red';
};

const PlusBtnVariant = ({
  label,
  disabled,
  variant,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  const bgColorClass = () => {
    switch (variant) {
      case 'blue':
        return 'bg-blue-blue30 disabled:bg-blue-blue20 hover:bg-blue-blue40 active:bg-blue-blue50';
      case 'green':
        return 'bg-green-green20 disabled:bg-green-green10 hover:bg-green-green30 active:bg-green-green40';
      case 'red':
        return 'bg-red-red20 disabled:bg-red-red10 hover:bg-red-red30 active:bg-red-red40';
      default:
        return '';
    }
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex items-center w-130 h-31 rounded-8 text-white hover:hover-transition ${bgColorClass()}`}
    >
      <PlusBtn className='mr-13 ml-7' />
      {label}
    </button>
  );
};

export default PlusBtnVariant;
