'use client';

import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import { joinDormitoriesResponseInformation } from '@/types/join';
import React from 'react';

const JoinDormList = ({ dormitoryRoomTypeId, dormitoryName, roomSize, gender }: joinDormitoriesResponseInformation) => {
  return (
    <div className='bg-red-red40  flex justify-between items-center H4 text-gray-grayscale50'>
      <div className=''>
        {dormitoryName} {roomSize}인실
      </div>
      <div className='w-134 flex items-center justify-around'>
        {gender == 'MALE' ? <>남</> : <>여</>}
        <TextBoxes
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'250'}
          type={'textBox3'}
        />
        명
      </div>
    </div>
  );
};

export default JoinDormList;
