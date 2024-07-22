import React from 'react';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Boxes = ({ title, description, children }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center w-388 h-266 bg-white shadow3 rounded-20'>
      <h1 className='H3 text-blue-blue30 mt-28 mb-14'>{title}</h1>
      <h2 className='caption-1 text-black mb-18'>{description}</h2>
      <div className='w-358 h-145 rounded-5 bg-gray-grayscale5 flex flex-col items-center justify-center mb-15'>
        {children}
      </div>
    </div>
  );
};

export default Boxes;
