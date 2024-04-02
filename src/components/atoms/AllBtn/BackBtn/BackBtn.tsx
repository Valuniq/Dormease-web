import React from 'react';
import BackBtnImg from '../../../../../public/images/BackBtn.svg';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
};

const BackBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  disabled,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${'flex items-center w-133 h-42 rounded-8 text-gray-grayscale-50'} + ${selected ? 'bg-gray-grayscale30' : 'bg-gray-grayscale10 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale10 hover:bg-gray-grayscale20 active:bg-gray-grayscale30'}`}
    >
      <BackBtnImg className='ml-12 mr-20' />
      {label}
    </button>
  );
};

export default BackBtn;
