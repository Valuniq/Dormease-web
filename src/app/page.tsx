'use client';
import { putAdminPassword } from '@/apis/account';
import { signIn } from '@/apis/auth';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import LoginForm from '@/components/organisms/LoginForm/LoginForm';
import AlertPrompt from '@/components/organisms/Prompt/AlertPrompt/AlertPrompt';
import ConfirmPrompt from '@/components/organisms/Prompt/ConfirmPrompt/ConfirmPrompt';
import { POL_ACCOUNTS } from '@/constants/policy';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/tokenKey';
import { accountsModalState } from '@/recoil/account';
import { accessTokenState, refreshTokenState } from '@/recoil/user';
import tokenManager from '@/utils/tokenManager';
import { validatePassword } from '@/utils/validatePassword';
import LoginBackgroundImg from '@public/images/LoginBackgroundImg.png';
import LoginLogo from '@public/logo/LoginLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Page = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState(''); // 새 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 새 비밀번호 확인
  const [errorMessage, setErrorMessage] = useState('');
  const [modalState, setModalState] = useRecoilState(accountsModalState);
  const [isPWEditMode, setIsPWEditMode] = useState(false);

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
        router.push('/dashboard');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error(error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (newPassword && !validatePassword(newPassword)) {
      setErrorMessage(POL_ACCOUNTS.password.messages.invalid);
    } else if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setErrorMessage(POL_ACCOUNTS.password.messages.mismatch);
    } else {
      setErrorMessage('');
    }
  }, [newPassword, confirmPassword]);

  // 모달 열기 함수
  const openModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  // 모달 닫기 함수
  const closeModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  const handlePasswordChange = async () => {
    try {
      await putAdminPassword(newPassword);
      closeModal('passwordConfirm');
      openModal('passwordChanged');
    } catch (error) {
      closeModal('passwordConfirm');
      openModal('passwordFailed');
    }
  };

  return (
    <>
      {modalState.passwordConfirm && (
        <BackDrop isOpen={modalState.passwordConfirm}>
          <ConfirmPrompt
            variant={'blue'}
            label={'비밀번호를 변경하시겠습니까?'}
            onConfirm={handlePasswordChange}
            onCancel={() => closeModal('passwordConfirm')}
          />
        </BackDrop>
      )}
      {modalState.passwordChanged && (
        <BackDrop isOpen={modalState.passwordChanged}>
          <AlertPrompt
            variant={'blue'}
            label={'비밀번호를 성공적으로 변경하였습니다.'}
            onConfirm={() => {
              closeModal('passwordChanged'), setNewPassword('');
              setConfirmPassword('');
            }}
          />
        </BackDrop>
      )}
      {modalState.passwordFailed && (
        <BackDrop isOpen={modalState.passwordFailed}>
          <AlertPrompt
            variant={'red'}
            label={'비밀번호 변경에 실패했습니다. 다시 시도해주세요.'}
            onConfirm={() => closeModal('passwordFailed')}
          />
        </BackDrop>
      )}
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
            setLoginId={setLoginId}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmedPassword={confirmPassword}
            setConfirmedPassword={setConfirmPassword}
            handleLogin={handleLogin}
            loginBtnDisabled={isDisabled}
            isPWEditMode={isPWEditMode}
            setIsPWEditMode={setIsPWEditMode}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
