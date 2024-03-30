import React from 'react';
import BackBtnImg from '../../../../../public/images/BackBtn.svg';

type Props = {
  label: string;
};

const BackBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className='flex items-center w-133 h-42 rounded-8 text-gray-grayscale-50 bg-gray-grayscale10 disabled:text-gray-grayscale30 hover:bg-gray-grayscale20 active:bg-gray-grayscale30'
    >
      <BackBtnImg className='ml-12 mr-20' />
      {label}
    </button>
  );
};

export default BackBtn;
