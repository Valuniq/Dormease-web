'use client';
import { signIn } from '@/apis/Auth';
import LoginForm from '@/components/organisms/LoginForm/LoginForm';
import { UserLoginRequest } from '@/types/user';
import LoginBackgroundImg from '@public/images/LoginBackgroundImg.png';
import LoginLogo from '@public/logo/LoginLogo.png';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !loginId || !password;

  // 로그인 처리 함수
  const handleLogin = async ({ loginId, password }: UserLoginRequest) => {
    try {
      const response = await signIn({ loginId, password });

      if (response) {
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error(error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${LoginBackgroundImg.src})`,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='overflow-y-hidden flex flex-col items-center justify-center'
    >
      <Image src={LoginLogo} width={372} height={136.5} className='object-cover mb-43' alt='login logo' />
      <LoginForm
        loginId={loginId}
        setLoginId={setLoginId}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        loginBtnDisabled={isDisabled}
      />
    </div>
  );
};

export default Page;
