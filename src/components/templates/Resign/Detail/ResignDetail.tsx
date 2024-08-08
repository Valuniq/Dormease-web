import React from 'react';

type Props = {
  label: string;
  value: string;
};

const ResignDetail = ({ label, value }: Props) => {
  return (
    <div className='flex justify-between w-full'>
      <h3 className='H3 text-gray-grayscale40'>{label}</h3>
      <h4 className='H4 text-gray-grayscale50'>{value}</h4>
    </div>
  );
};

export default ResignDetail;
