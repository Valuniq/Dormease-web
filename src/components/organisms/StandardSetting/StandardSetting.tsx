import React, { useState } from 'react';
import DistanceScore from './DistanceScore';
import StandardCheck from './StandardCheck';

const StandardSetting = () => {
  const scores = Array.from({ length: 10 }, (_, index) => index * 0.5);
  const [inputs, setInputs] = useState(Array(scores.length).fill(''));

  const setInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
      <div className='text-center w-550'>
        <div className='mb-13 pb-16 border-b-[0.5px] border-b-gray-grayscale50 '>
          <h1 className=' mb-13 H3 text-blue-blue30'>배점 기준</h1>
          <StandardCheck
            label={'흡연 여부'}
            isOn={false}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StandardCheck
            label={'동일 기간'}
            isOn={false}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <div className='mb-13'>
          <h1 className='mb-13 H3 text-blue-blue30'>합격 기준</h1>
          <StandardCheck
            label={'상/벌점'}
            isOn={false}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StandardCheck
            label={'우선 선발'}
            isOn={false}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
          <StandardCheck
            label={'이동 합격'}
            isOn={false}
            setIsOn={function (isOn: boolean): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <h1 className='mb-13 H3 text-blue-blue30'>거리 점수 기준</h1>
        <DistanceScore scores={scores} inputs={inputs} setInput={setInput} />
      </div>
    </div>
  );
};

export default StandardSetting;
