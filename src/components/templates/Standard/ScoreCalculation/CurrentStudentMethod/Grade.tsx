import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React from 'react';

type Props = {
  grade: string;
  setGrade: (grade: string) => void;
};

const Grade = ({ grade, setGrade }: Props) => {
  return (
    <div className='w-[1200px] h-170 rounded-20 bg-white flex flex-col shadow3 px-15'>
      <div className='w-[1170px] h-52 mt-15 rounded-5 bg-gray-grayscale5 flex items-center justify-start pl-17'>
        <h1 className='H3 text-blue-blue30 mr-18'>성적</h1>
        <li className='H4 text-gray-grayscale40'>성적은 직전 학기 학점이 반영됩니다.</li>
      </div>
      <div className='flex items-center justify-start ml-32 mt-39'>
        <h3 className='H4 text-gray-grayscale50 mr-52'>최소 학점을 입력해 주세요. 최소 학점 미만은 탈락 처리됩니다.</h3>
        <div className='flex items-center'>
          <TextBoxes input={grade} setInput={setGrade} placeholder={'2.5'} type={'textBox4'} />
          <h3 className='ml-11 text-black H4'>학점</h3>
        </div>
      </div>
    </div>
  );
};

export default Grade;
