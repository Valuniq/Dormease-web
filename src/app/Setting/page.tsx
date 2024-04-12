import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import ChangeIDPWInputText from '@/components/atoms/InputText/ChangeIDPWInputText/ChangeIDPWInputText';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='H0 text-gray-grayscale50'>설정</h1>
      <div className='mt-42 w-[1184px] h-610 rounded-80 bg-gray-grayscale5 flex flex-col items-center'>
        <h2 className='H1 text-blue-blue30 mt-45 mb-73'>계정 관리</h2>
        <div className='grid grid-cols-2 gap-70 mb-57'>
          <div>
            <h3 className='H2 text-gray-grayscale50 mb-27'>아이디</h3>
            <ChangeIDPWInputText
              input={''}
              setInput={function (id: string): void {
                throw new Error('Function not implemented.');
              }}
              placeholder={''}
              type={'text'}
            />
          </div>
          <div>
            <h3 className='H2 text-gray-grayscale50 mb-27'>비밀번호</h3>
            <div>
              <ChangeIDPWInputText
                input={''}
                setInput={function (id: string): void {
                  throw new Error('Function not implemented.');
                }}
                placeholder={'기존 비밀번호'}
                type={'password'}
              />
            </div>
            <h4 className='mt-38 mb-8'>
              영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 <br />
              조합하여 6~20자로 입력해주세요.
            </h4>
            <ChangeIDPWInputText
              input={''}
              setInput={function (id: string): void {
                throw new Error('Function not implemented.');
              }}
              placeholder={'새 비밀번호'}
              type={'password'}
            />
            <div className='mt-19 mb-6'>
              <ChangeIDPWInputText
                input={''}
                setInput={function (id: string): void {
                  throw new Error('Function not implemented.');
                }}
                placeholder={'새 비밀번호 확인'}
                type={'password'}
              />
            </div>
          </div>
        </div>
        <BtnMidVariant label={'변경'} disabled={false} variant={'blue'} />
      </div>
    </div>
  );
};

export default page;
