'use client';
import React from 'react';

const FreshmanMethod = () => {
  return (
    <div>
      {' '}
      <div className='w-226 flex items-center justify-between'>
        {' '}
        <div className='flex items-center'>
          <RadioBtn isOn={isOn} setIsOn={setIsOn} />
          <h2 className='H4-caption text-gray-grayscale50'>활성화</h2>{' '}
        </div>{' '}
        <div className='flex items-center'>
          <RadioBtn isOn={!isOn} setIsOn={setIsOn} />
          <h2 className='H4-caption text-gray-grayscale50'>비활성화</h2>{' '}
        </div>{' '}
      </div>
    </div>
  );
};

export default FreshmanMethod;
