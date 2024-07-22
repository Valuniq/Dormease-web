'use client';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import React, { useState } from 'react';
import Boxes from './Boxes';
import Distance from './Distance';
import Grade from './Grade';

const CurrentStudentMethod = () => {
  const [grade, setGrade] = useState('');
  const scores = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];
  const [scoresInput, setScoresInput] = useState<string[]>(Array(scores.length).fill(''));
  const [isOn, setIsOn] = useState(false);

  const handleSetScoresInput = (index: number, value: string) => {
    const newScoresInput = [...scoresInput];
    newScoresInput[index] = value;
    setScoresInput(newScoresInput);
  };

  return (
    <div className='grid gap-24'>
      <h1 className='H1 text-blue-blue30'>점수 산정 방식 (재학생)</h1>
      <Grade grade={grade} setGrade={setGrade} />
      <Distance scores={scores} scoresInput={scoresInput} setScoresInput={handleSetScoresInput} />
      <div className='flex itmes-center justify-between'>
        <Boxes title='성적, 거리 점수 비율' description='성적과 거리 점수 비율을 설정합니다.'>
          <div className='flex items-end '>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='caption-1 mb-13 text-gray-grayscale50'>성적</h1>
              <TextBoxes
                input={''}
                setInput={function (id: string): void {
                  throw new Error('Function not implemented.');
                }}
                placeholder={'50'}
                type={'textBox7'}
              />
            </div>
            <div className='H4 text-gray-grascale50 px-17'>:</div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='caption-1 mb-13 text-gray-grayscale50'>거리 점수</h1>
              <TextBoxes
                input={''}
                setInput={function (id: string): void {
                  throw new Error('Function not implemented.');
                }}
                placeholder={'50'}
                type={'textBox7'}
              />
            </div>
          </div>
        </Boxes>

        <Boxes title='상·벌점 점수' description='생활관 상·벌점 제도 반영 여부'>
          <div className='flex items-center'>
            <RadioBtn isOn={isOn} setIsOn={setIsOn} />
            <h1 className='ml-16 H4 text-gray-grayscale50'>상·벌점 점수 미반영</h1>
          </div>
          <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex items-center'>
              <RadioBtn isOn={!isOn} setIsOn={setIsOn} />
              <h1 className='ml-16 H4 text-gray-grayscale50'>상·벌점 점수 반영</h1>
            </div>
            <div>
              <h1 className='caption-1 text-gray-grayscale50'>(상·벌점 1점당 ±0.2점으로 반영)</h1>
            </div>
          </div>
        </Boxes>

        <Boxes title='동점자 처리' description='동점자 우선순위 선택'>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
              <h1 className='ml-16 H4 text-gray-grayscale50'>성적</h1>
            </div>
            <h1 className='text-blue-blue30 H4 px-12'>&lt;</h1>
            <div className='flex items-center'>
              <RadioBtn isOn={!isOn} setIsOn={setIsOn} />
              <h1 className='ml-16 H4 text-gray-grayscale50'>거리 점수</h1>
            </div>
          </div>
        </Boxes>
      </div>
    </div>
  );
};

export default CurrentStudentMethod;
