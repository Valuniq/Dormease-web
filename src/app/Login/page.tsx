import Image from 'next/image';
import React from 'react';
import loginLogo from '@public/logo/LoginLogo.png';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';
import LoginBtn from '@/components/atoms/AllBtn/LoginBtn/LoginBtn';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={loginLogo} width={372} height={136.5} alt='login' className='object-contain mb-43' />
      <div className='w-510 h-426 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center'>
        <h1 className='H1 text-gray-grayscale50 mb-31'>도미즈 관리자 로그인</h1>
        <div className='mb-19'>
          <LoginInputText
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'아이디'}
            type={'text'}
          />
        </div>
        <div className='mb-61'>
          <LoginInputText
            input={''}
            setInput={function (id: string): void {
              throw new Error('Function not implemented.');
            }}
            placeholder={'비밀번호'}
            type={'password'}
          />
        </div>{' '}
        <LoginBtn label={'로그인'} disabled={false} />
      </div>
    </div>
  );
};

export default page;
