import LoginBtn from '@/components/atoms/AllBtn/LoginBtn/LoginBtn';
import LoginInputText from '@/components/atoms/InputText/LoginInputText/LoginInputText';
import { UserLoginRequest } from '@/types/user';
import React from 'react';

type Props = {
  loginId: string;
  setLoginId: (id: string) => void;
  password: string;
  setPassword: (pw: string) => void;
  handleLogin: ({ loginId, password }: UserLoginRequest) => void;
  loginBtnDisabled: boolean;
};

const LoginForm = ({ loginId, setLoginId, password, setPassword, handleLogin, loginBtnDisabled }: Props) => {
  return (
    <div className='w-510 h-426 bg-white rounded-[12.35px] shadow-lg flex flex-col items-center justify-center'>
      <h1 className='H1 text-gray-grayscale50 mb-31'>도미즈 관리자 로그인</h1>
      <div>
        <div className='mb-19'>
          <LoginInputText input={loginId} setInput={setLoginId} placeholder={'아이디'} type={'text'} />
        </div>
        <div className='mb-61'>
          <LoginInputText input={password} setInput={setPassword} placeholder={'비밀번호'} type={'password'} />
        </div>
        <LoginBtn onClick={() => handleLogin({ loginId, password })} label={'로그인'} disabled={loginBtnDisabled} />
      </div>
    </div>
  );
};

export default LoginForm;
