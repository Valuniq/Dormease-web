'use client';
import React, { useState } from 'react';
import Boxes from './Boxes';
import Distance from './Distance';
import Grade from './Grade';

const CurrentStudentMethod = () => {
  const [grade, setGrade] = useState('');
  const scores = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5];
  const [scoresInput, setScoresInput] = useState<string[]>(Array(scores.length).fill(''));

  const handleSetScoresInput = (index: number, value: string) => {
    const newScoresInput = [...scoresInput];
    newScoresInput[index] = value;
    setScoresInput(newScoresInput);
  };

  const boxesData = [
    {
      title: '성적, 거리 점수 비율',
      description: '성적과 거리 점수 비율을 설정합니다.',
      children: <></>,
    },
    {
      title: '상·벌점 점수',
      description: '생활관 상·벌점 제도 반영 여부',
      children: <></>,
    },
    {
      title: '동점자 처리',
      description: '동점자 우선순위 선택',
      children: <></>,
    },
  ];

  return (
    <div className='grid gap-24'>
      <h1 className='H1 text-blue-blue30'>점수 산정 방식 (재학생)</h1>
      <Grade grade={grade} setGrade={setGrade} />
      <Distance scores={scores} scoresInput={scoresInput} setScoresInput={handleSetScoresInput} />
      <div className='flex itmes-center justify-between'>
        {boxesData.map((box, index) => (
          <Boxes key={index} title={box.title} description={box.description} children={box.children} />
        ))}
      </div>
    </div>
  );
};

export default CurrentStudentMethod;
