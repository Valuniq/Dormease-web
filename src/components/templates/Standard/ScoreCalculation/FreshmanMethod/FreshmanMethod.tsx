'use client';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import React from 'react';

type Props = {
  freshmanStandard: 'EVERYONE' | 'LONG_DISTANCE' | '';
  setFreshmanStandard: (value: 'EVERYONE' | 'LONG_DISTANCE') => void;
};

const FreshmanMethod = ({ freshmanStandard, setFreshmanStandard }: Props) => {
  return (
    <div className='w-full grid gap-28'>
      <h1 className='H1 text-blue-blue30'>점수 산정 방식 (신입생)</h1>
      <div className='h-120 flex items-center justify-around shadow3 rounded-20'>
        <div className='flex items-center'>
          <div className='flex items-center mr-141'>
            <RadioBtn isOn={freshmanStandard === 'EVERYONE'} setIsOn={() => setFreshmanStandard('EVERYONE')} />
            <h2 className='H4-caption text-gray-grayscale50'>전원 합격</h2>
          </div>
          <div className='flex items-center'>
            <RadioBtn
              isOn={freshmanStandard === 'LONG_DISTANCE'}
              setIsOn={() => setFreshmanStandard('LONG_DISTANCE')}
            />
            <h2 className='H4-caption text-gray-grayscale50'>장거리 우선 합격</h2>
          </div>
        </div>
        <div className='bg-gray-grayscale5 w-621 h-90 rounded-5 flex flex-col items-start justify-center p-14 caption-1'>
          <h3>- 거리 기준은 재학생과 동일하게 적용됩니다.</h3>
          <h3>- 동점자의 경우 무작위로 배정됩니다.</h3>
        </div>
      </div>
    </div>
  );
};

export default FreshmanMethod;
