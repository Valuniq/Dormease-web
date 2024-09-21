'use client';

import { RES_ACCOUNTS } from '@/constants/restrictions';
import Image from 'next/image';
import React, { useState } from 'react';
import eyeBtn from '@public/images/EyeBtn.png';

type Props = {
  placeholder: string;
  isDisabled: boolean;
  input: string;
  setInput: (id: string) => void;
  isActive: boolean;
};

const PasswordShowAndHideInputText = ({ placeholder, isDisabled, input, setInput, isActive }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className='relative'>
      <input
        minLength={RES_ACCOUNTS.password.minLength}
        maxLength={RES_ACCOUNTS.password.maxLength}
        placeholder={placeholder}
        disabled={isDisabled}
        value={input}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        className={`w-293 h-50 rounded-10 outline-none text-gray-grayscale50 H3 placeholder:text-gray-grayscale20 pl-18 pr-40 ${
          isActive ? 'bg-white' : 'bg-inherit'
        }`}
      />
      {!isDisabled && input && (
        <Image
          src={eyeBtn}
          alt='eye btn'
          width={32}
          height={32}
          className='absolute right-9 top-1/2 transform -translate-y-1/2 cursor-pointer'
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export default PasswordShowAndHideInputText;
