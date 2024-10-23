'use client';

import { reissueToken, signIn } from '@/apis/auth';
import LoginForm from '@/components/organisms/LoginForm/LoginForm';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { accessTokenState, refreshTokenState } from '@/recoil/user';
import tokenManager from '@/utils/tokenManager';
import LoginBackgroundImg from '@public/images/LoginBackgroundImg.png';
import LoginLogo from '@public/logo/LoginLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const Page = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [originalLoginId, setOriginalLoginId] = useState('');
  const [originalPassword, setOriginalPassword] = useState('');
  const [isAutoLogin, setIsAutoLogin] = useState(false); // 자동 로그인 상태 관리
  const [autoLoginButtonLabel, setAutoLoginButtonLabel] = useState('로그인'); // 버튼 라벨 관리

  const isDisabled = !loginId || !password;
  const router = useRouter();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setRefreshToken = useSetRecoilState(refreshTokenState);

  // 로그인 함수 (액세스 토큰, 리프레시 토큰, 아이디, 자동 로그인 여부 저장)
  const handleLogin = async ({ loginId, password }: { loginId: string; password: string }) => {
    try {
      const response = await signIn({ loginId, password });

      const accessToken = response.information.accessToken;
      const refreshToken = response.information.refreshToken;

      // Recoil 상태 업데이트
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      // 로컬 스토리지에 토큰 저장
      tokenManager.saveToken(ACCESS_TOKEN, accessToken);
      tokenManager.saveToken(REFRESH_TOKEN, refreshToken);

      // 자동 로그인이 체크된 경우 자동 로그인 상태, ID 저장
      if (isAutoLogin) {
        localStorage.setItem('loginId', loginId);
        localStorage.setItem('isAutoLogin', 'true');
      } else {
        localStorage.removeItem('loginId');
        localStorage.removeItem('isAutoLogin');
      }

      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      console.error('로그인 중 오류가 발생했습니다.', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  // 자동 로그인 함수 (리프레시 토큰 재발급, 실패 시 로그인 정보 삭제)
  const handleAutoLogin = async () => {
    const refreshToken = tokenManager.getToken(REFRESH_TOKEN);

    if (refreshToken) {
      try {
        const newAccessToken = await reissueToken(refreshToken);

        if (newAccessToken) {
          setAccessToken(newAccessToken);
          await router.push('/dashboard');
        } else {
          console.error('새로운 액세스 토큰 발급 실패');
        }
      } catch (error) {
        alert('자동 로그인에 실패하였습니다. 다시 로그인해 주세요.');
        // 자동 로그인 관련 저장된 정보 삭제
        localStorage.removeItem('loginId');
        localStorage.removeItem('isAutoLogin');
        tokenManager.removeToken(REFRESH_TOKEN);
        tokenManager.removeToken(ACCESS_TOKEN);
        setIsAutoLogin(false);
        setAutoLoginButtonLabel('로그인');
      }
    } else {
      console.log('리프레시 토큰 없음');
    }
  };

  // 자동 로그인 활성화, 저장된 아이디, 리프레시 토큰이 있으면 자동 로그인 모드 전환
  useEffect(() => {
    const savedAutoLogin = localStorage.getItem('isAutoLogin');
    const savedLoginId = localStorage.getItem('loginId');
    const refreshToken = tokenManager.getToken(REFRESH_TOKEN);

    if (savedAutoLogin === 'true' && savedLoginId && refreshToken) {
      setIsAutoLogin(true);
      setLoginId(savedLoginId);
      setOriginalLoginId(savedLoginId);
      setPassword('******'); // 더미 텍스트 설정
      setOriginalPassword('******');
      setAutoLoginButtonLabel('자동 로그인');
    }
  }, []);

  // 로그인 입력이 변경되면 자동 로그인 비활성화
  const handleInputChange = (newLoginId: string, newPassword: string) => {
    setLoginId(newLoginId);
    setPassword(newPassword);
    if (newLoginId !== originalLoginId || newPassword !== originalPassword) {
      setAutoLoginButtonLabel('로그인');
    }
  };

  // 자동 로그인 상태 변경 시 모드 전환
  const handleAutoLoginToggle = (checked: boolean) => {
    setIsAutoLogin(checked);
    if (!checked) {
      // 자동 로그인이 해제되면 라벨을 "로그인"으로 변경하고 ID와 비밀번호 초기화
      setAutoLoginButtonLabel('로그인');
      setLoginId(''); // ID 초기화
      setPassword(''); // 비밀번호 초기화
    }
  };

  // 모드에 따른 로그인 버튼 클릭 처리
  const handleButtonClick = () => {
    if (isAutoLogin && autoLoginButtonLabel === '자동 로그인') {
      console.log('자동 로그인 시도');
      handleAutoLogin();
    } else {
      console.log('일반 로그인 시도');
      handleLogin({ loginId, password });
    }
  };

  return (
    <>
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
        <div className=' xl:scale-65 xxl:scale-80 lg:scale-65 md:scale-50 sm:scale-40  flex flex-col items-center justify-center'>
          <Image src={LoginLogo} width={372} height={136.5} className='object-cover mb-43' alt='login logo' />
          <LoginForm
            loginId={loginId}
            setLoginId={(id) => handleInputChange(id, password)}
            password={password}
            setPassword={(pw) => handleInputChange(loginId, pw)}
            handleLogin={handleButtonClick}
            loginBtnDisabled={isDisabled}
            isAutoLogin={isAutoLogin}
            setIsAutoLogin={handleAutoLoginToggle}
            buttonLabel={autoLoginButtonLabel}
            onLoginClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
