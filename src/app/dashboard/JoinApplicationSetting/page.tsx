'use client';
import AddMealticketBtn from '@/components/atoms/AllBtn/AddMealticketBtn/AddMealticketBtn';
import BtnExtraLarge from '@/components/atoms/AllBtn/BtnExtraLarge/BtnExtraLarge';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import TextBoxes from '@/components/atoms/InputText/JoinSettingEntryTextBoxes/TextBoxes';
import JoinSettingInputText from '@/components/atoms/InputText/JoinSettingInputText/JoinSettingInputText';
import BuildingPriceSetting from '@/components/organisms/JoinApplicationSetting/BuildingPriceSetting';
import DepositSetting from '@/components/organisms/JoinApplicationSetting/DepositSetting';
import JoinApplicationSettingList from '@/components/organisms/JoinApplicationSetting/JoinApplicationSettingList';
import PeriodSetting from '@/components/organisms/JoinApplicationSetting/PeriodSetting';
import React from 'react';

const page = () => {
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
      <div className='px-8 flex items-center justify-between border-y-gray-grayscale50 border-y-1 py-20'>
        <PeriodSetting label={'입사 신청 기간'} />
        <PeriodSetting label={'입금 가능 기간'} />
        <DepositSetting />
      </div>
      <div className='H4 w-full '>
        <div className='w-full flex items-center border-b-1 border-b-gray-grayscale30'>
          <h3 className='py-12 w-285 text-center border-r-1 border-r-gray-grayscale30'>수용 가능 인원</h3>
          <h3 className='py-12 w-[838px] text-center border-r-1 border-r-gray-grayscale30'>건물별 가격</h3>
          <div className='py-12 w-313 flex justify-around'>
            <h3>식권</h3>
            <h3>식권 가격</h3>
          </div>
        </div>
        <div className='w-full flex h-415 overflow-scroll border-b-gray-grayscale50 border-b-1'>
          <div className='w-281  px-16 border-r-1 border-r-gray-grayscale30 pt-16'>
            <BtnExtraLarge label={'건물 추가로 돌아가기'} disabled={false} />
            <div className='mt-165'>
              <div className='mb-32 flex justify-between items-center H4 text-gray-grayscale50'>
                <div className=''>3동 4인실</div>
                <div className='w-134 flex items-center justify-around'>
                  남
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
            </div>
            <div>
              <div className='flex justify-between items-center H4 text-gray-grayscale50'>
                <div className=''>3동 2인실</div>
                <div className='w-134 flex items-center justify-around'>
                  남
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
            </div>
          </div>
          <div className='w-[828px] flex items-center justify-around p-9 border-r-1 border-r-gray-grayscale30'>
            <BuildingPriceSetting /> <BuildingPriceSetting /> <BuildingPriceSetting /> <BuildingPriceSetting />
          </div>
          <div className='w-300 flex flex-col items-center  pt-26'>
            <div className='w-300 flex justify-center items-start'>
              <div className='flex items-center w-78 justify-between mr-9'>
                <TextBoxes
                  input={''}
                  setInput={function (id: string): void {
                    throw new Error('Function not implemented.');
                  }}
                  placeholder={'식권'}
                  type={'textBox7'}
                />
                식
              </div>
              <div className='flex items-center justify-between'>
                <TextBoxes
                  input={''}
                  setInput={function (id: string): void {
                    throw new Error('Function not implemented.');
                  }}
                  placeholder={'금액 입력'}
                  type={'textBox6'}
                />
                원
              </div>
            </div>

            <div className='mt-20'>
              <AddMealticketBtn />
            </div>
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

export default page;
