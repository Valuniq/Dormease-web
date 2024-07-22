import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import React from 'react';

type Props = {
  scores: number[];
  scoresInput: string[];
  setScoresInput: (index: number, value: string) => void;
};

const Distance = ({ scores, scoresInput, setScoresInput }: Props) => {
  return (
    <div className='w-[1200px] h-fit rounded-20 bg-white flex flex-col shadow3 px-15'>
      <div className='w-[1170px] h-52 mt-15 rounded-5 bg-gray-grayscale5 flex items-center justify-start pl-17'>
        <h1 className='H3 text-blue-blue30'>거리 점수</h1>
      </div>
      <div className='mt-16 border-b-2 border-b-gray-grayscale20 mx-15'>
        <h2 className='H4 w-fit border-b border-red-red20 text-red-red20 mb-18'>주의사항</h2>
        <div className='H4 text-black  grid gap-16  pb-30'>
          <li>지역명 입력은 '도' 단위 혹은 '시' 단위로 입력해 주세요.</li>
          <li>'시' 지역이 겹치는 경우 '도' 단위와 같이 입력해 주세요. (ex. 경기도 광주시, 전라도 광주시)</li>
          <li>지역명 사이에 콤마(,) 표시를 해주세요.</li>
          <li>입력되지 않은 지역은 만점 처리 됩니다.</li>
        </div>
      </div>
      <div className='flex  flex-col items-end mt-36 mb-28 mx-15'>
        {scores.map((score, index, array) => (
          <div className={`flex mb-19 `} key={index}>
            <h1 className='w-54 text-right H3 text-gray-grayscale40  ml-84'>{score}점</h1>
            <div className='w-920 ml-56'>
              <MediumInputText
                placeholder={'지역명을 입력해주세요.'}
                input={scoresInput[index] || ''}
                setInput={(input) => setScoresInput(index, input)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distance;
