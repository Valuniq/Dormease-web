'use client';
import RadioBtn from '@/components/atoms/AllBtn/RadioBtn/RadioBtn';
import React, { useState } from 'react';

const AcceptanceMethod = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className='w-full grid gap-28'>
      <h1 className='H1 text-blue-blue30'>합격 및 배정 방식</h1>
      <div className='h-286 rounded-20 bg-white flex flex-col items-center shadow3 pt-15 pb-29'>
        <div className='w-[1170px] h-52 mb-9 rounded-5 bg-gray-grayscale5 flex items-center justify-end p-15'>
          <h1 className='caption-3 text-gray-grayscale40 mr-22'>활성화</h1>
          <h1 className='caption-3 text-gray-grayscale40'>비활성화</h1>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='H3 text-gray-grayscale40 grid gap-19'>
            <li>우선 선발</li>
            <li>이동 합격</li>
            <li>흡연 여부</li>
            <li>동일 기간</li>
          </ul>
          <div className='h-160 w-2 bg-gray-grayscale20 mx-21' />
          <ul className='H4 text-gray-grayscale40 grid gap-21'>
            <li>활성화 시, 우선 선발 기능이 추가됩니다.</li>
            <li>활성화 시, 신청한 건물에서 탈락한 학생을 신청 미달인 건물에서 재심사 합니다.</li>
            <li>
              활성화 시, 방 배정을 흡연자와 비흡연자를 구분하여 진행합니다. 단, 룸메이트 신청자는 반영되지 않습니다.
            </li>
            <li>활성화 시, 방 배정을 동일 기간 거주하는 학생끼리 구분하여 진행합니다.</li>
          </ul>
          <div className='h-160 w-2 bg-gray-grayscale20 ml-22 mr-53' />
          <ul className='grid gap-25 w-98'>
            <li className='flex items-center justify-between'>
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
            </li>
            <li className='flex items-center justify-between'>
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
            </li>
            <li className='flex items-center justify-between'>
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
            </li>
            <li className='flex items-center justify-between'>
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
              <RadioBtn isOn={isOn} setIsOn={setIsOn} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceMethod;
