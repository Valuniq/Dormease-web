import React from 'react';
import DepositSetting from './DepositSetting';
import PeriodSetting from './PeriodSetting';

const DefaultSetting = () => {
  return (
    <div className='px-8 flex items-center justify-between border-t-gray-grayscale50 border-t-1 py-20'>
      <PeriodSetting
        label={'입사 신청 기간'}
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <PeriodSetting
        label={'입금 가능 기간'}
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DepositSetting
        input={''}
        setInput={function (input: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default DefaultSetting;
