'use client';
import { signIn } from '@/apis/Auth';
import LoginForm from '@/components/organisms/LoginForm/LoginForm';
import { StudentManagementRoutes } from '@/constants/navigationItems';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { accessTokenState, refreshTokenState } from '@/recoil/user';

import tokenManager from '@/utils/tokenManager';
import LoginBackgroundImg from '@public/images/LoginBackgroundImg.png';
import LoginLogo from '@public/logo/LoginLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Page = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = !loginId || !password;
  const router = useRouter();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setRefreshToken = useSetRecoilState(refreshTokenState);

  const handleLogin = async ({ loginId, password }: { loginId: string; password: string }) => {
    try {
      const response = await signIn({ loginId, password });

      if (response) {
        const accessToken = response.information.accessToken;
        const refreshToken = response.information.refreshToken;

        // Recoil 상태 업데이트
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        // 로컬 스토리지에 토큰 저장
        tokenManager.saveToken(ACCESS_TOKEN, accessToken);
        tokenManager.saveToken(REFRESH_TOKEN, refreshToken);

        // 상태 및 로컬 스토리지 확인
        console.log('Access Token (Recoil):', accessToken);
        console.log('Refresh Token (Recoil):', refreshToken);
        console.log('Access Token (LocalStorage):', tokenManager.getToken(ACCESS_TOKEN));
        console.log('Refresh Token (LocalStorage):', tokenManager.getToken(REFRESH_TOKEN));

        alert('로그인 성공');
        router.push(StudentManagementRoutes);
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
