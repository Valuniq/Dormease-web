'use client';

import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import BuildingPriceSetting from '@/components/templates/Join/BuildingPriceSetting/BuildingPriceSetting';
import JoinApplicationSettingList from '@/components/templates/Join/JoinApplicationSettingList';
import React from 'react';
import DefaultSetting from '@/components/templates/Join/DefaultSetting/DefaultSetting';
import JoinDormList from '@/components/templates/Join/BuildingPriceSetting/JoinDormList';
import TicketPriceSetting from '@/components/templates/Join/TicketPriceSetting/TicketPriceSetting';
import { useGetJoinDormitories } from '@/apis/join';

const Page = () => {
  const { data: dormitories, error } = useGetJoinDormitories();
  console.log('Dormitories Data:', dormitories);

  return (
    <div className='flex flex-col w-[1418px]'>
      <div className='H0 text-gray-grayscale50 flex items-center justify-center mb-32'>
        <h1>입사 신청 설정</h1>
      </div>
      <div className='flex itmes-center mb-27'>
        <h2 className='H4 text-gray-grayscale40 whitespace-nowrap mr-100'>제목</h2>
        <JoinSettingInputText
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'제목을 입력하세요.'}
        />
      </div>
      <DefaultSetting />
      <div className='H4 w-full h-464'>
        <div className='w-full h-48 flex items-center justify-center border-y-1 border-y-gray-grayscale30'>
          <div className='w-285 h-full flex items-center justify-center border-r-1 border-r-gray-grayscale30'>
            수용 가능 인원
          </div>
          <div className='w-[838px] h-full flex items-center justify-center text-center border-r-1 border-r-gray-grayscale30'>
            건물별 가격
          </div>
          <div className='w-313 h-full flex items-center justify-around'>
            <span>식권</span>
            <span>식권 가격</span>
          </div>
        </div>
        <div className='w-full flex h-415 overflow-y-scroll '>
          <div className='w-281 min-h-full h-fit flex flex-col items-center border-r-1 border-r-gray-grayscale30 pt-34'>
            <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
            {dormitories &&
              dormitories.map((i, index) => (
                <ul key={index} className='mt-140 '>
                  <JoinDormList
                    key={i.dormitoryRoomTypeId}
                    dormitoryRoomTypeId={i.dormitoryRoomTypeId}
                    dormitoryName={i.dormitoryName}
                    roomSize={i.roomSize}
                    gender={i.gender}
                  />
                </ul>
              ))}
          </div>
          <div className='w-[828px] flex items-start justify-around p-9 border-r-1 border-r-gray-grayscale30'>
            <BuildingPriceSetting />
          </div>
          <div className='w-303 px-10  min-h-full h-fit flex items-start justify-center'>
            <TicketPriceSetting />
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <JoinApplicationSettingList />
      </div>
      <div className='flex items-center justify-center w-full'>
        <BtnMidVariant label={'작성 완료'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default Page;
