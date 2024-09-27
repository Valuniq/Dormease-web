import React from 'react';
import Deposit from './Deposit';
import Period from './Period';

const Default = () => {
  return (
    <div className='px-8 flex items-center justify-between border-t-gray-grayscale50 border-t-1 py-20'>
      <Period
        label={'입사 신청 기간'}
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Period
        label={'입금 가능 기간'}
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Deposit
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default Default;
