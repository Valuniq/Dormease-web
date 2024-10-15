import React from 'react';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import Boxes from './Boxes';
import Distance from './Distance';
import Grade from './Grade';
import { DistanceScoreResList, StandardSettingResponseInformation } from '@/types/standard';

type Props = {
  standard: StandardSettingResponseInformation;
  setStandard: (standard: StandardSettingResponseInformation) => void;
};

const CurrentStudentMethod = ({ standard, setStandard }: Props) => {
  const { minScore, scoreRatio, pointReflection, tiePriority } = standard;

  const handleScoreRatioChange = (value: string) => {
    // 빈 문자열일 경우 0으로 처리
    if (value === '') {
      setStandard({
        ...standard,
        scoreRatio: 0,
      });
      return;
    }

    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
      setStandard({
        ...standard,
        scoreRatio: numericValue,
      });
    }
  };

  return (
    <div className='grid gap-24'>
      <h1 className='H1 text-blue-blue30'>점수 산정 방식 (재학생)</h1>

      {/* 성적 */}
      <Grade initialGrade={minScore} setGrade={(grade) => setStandard({ ...standard, minScore: Number(grade) })} />

      {/* 거리 점수 */}
      <Distance />

      <div className='flex items-center justify-between'>
        {/* 성적, 거리 점수 비율 */}
        <Boxes title='성적, 거리 점수 비율' description='성적과 거리 점수 비율을 설정합니다.'>
          <div className='flex items-end '>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='caption-1 mb-13 text-gray-grayscale50'>성적</h1>
              <TextBoxes
                input={String(scoreRatio)}
                setInput={handleScoreRatioChange}
                placeholder={'50'}
                type={'textBox7'}
              />
            </div>
            <div className='H4 text-gray-grascale50 px-17'>:</div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='caption-1 mb-13 text-gray-grayscale50'>거리 점수</h1>
              <TextBoxes
                input={String(100 - scoreRatio)} // 거리 비율을 100 - 성적 비율로 계산
                setInput={handleScoreRatioChange}
                placeholder={'50'}
                type={'textBox7'}
              />
            </div>
          </div>
        </Boxes>

        {/* 상/벌점 점수 */}
        <Boxes title='상·벌점 점수' description='생활관 상·벌점 제도 반영 여부'>
          <div className='flex items-center'>
            <RadioBtn isOn={!pointReflection} setIsOn={() => setStandard({ ...standard, pointReflection: false })} />
            <h1 className='ml-16 H4 text-gray-grayscale50'>상·벌점 점수 미반영</h1>
          </div>
          <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex items-center'>
              <RadioBtn isOn={pointReflection} setIsOn={() => setStandard({ ...standard, pointReflection: true })} />
              <h1 className='ml-16 H4 text-gray-grayscale50'>상·벌점 점수 반영</h1>
            </div>
            <div>
              <h1 className='caption-1 text-gray-grayscale50'>(상·벌점 1점당 ±0.2점으로 반영)</h1>
            </div>
          </div>
        </Boxes>

        {/* 동점자 처리 */}
        <Boxes title='동점자 처리' description='동점자 우선순위 선택'>
          <div className='flex items-center'>
            <RadioBtn
              isOn={tiePriority === 'SCORE'}
              setIsOn={() => setStandard({ ...standard, tiePriority: 'SCORE' })}
            />
            <h1 className='ml-16 H4 text-gray-grayscale50'>성적</h1>
            <h1 className='text-blue-blue30 H4 px-12'>{tiePriority === 'DISTANCE' ? '<' : '>'}</h1>
            <RadioBtn
              isOn={tiePriority === 'DISTANCE'}
              setIsOn={() => setStandard({ ...standard, tiePriority: 'DISTANCE' })}
            />
            <h1 className='ml-16 H4 text-gray-grayscale50'>거리 점수</h1>
          </div>
        </Boxes>
      </div>
    </div>
  );
};

export default CurrentStudentMethod;
