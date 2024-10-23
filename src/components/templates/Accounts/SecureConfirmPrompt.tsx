import React, { useState } from 'react';
import Image from 'next/image';
import PromptWarning from '@public/images/PromptWarning.png';
import AlertBtn from '@/components/atoms/AllBtn/AlertBtn/AlertBtn';
import PromptHeader from '@/components/atoms/Prompt/PromptHeader/PromptHeader';
import { checkSecurityCode } from '@/apis/account';

type Props = {
  variant: 'blue' | 'red' | 'green';
  label: string;
  onClose: () => void;
  secure: string;
  setSecure: (secure: string) => void;
  activatePasswordEdit?: () => void;
};

const SecureConfirmPrompt = ({ variant, label, onClose, secure, setSecure, activatePasswordEdit }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleConfirm = async () => {
    try {
      const data = await checkSecurityCode(secure);
      if (data.check && data.information.checked) {
        setSecure('');
        activatePasswordEdit && activatePasswordEdit(); // 비밀번호 편집 모드 활성화
        onClose();
      } else {
        throw new Error('보안코드가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('보안코드 검증 실패:', error);
      setErrorMessage('보안코드 검증에 실패했습니다.');
    }
  };

  return (
    <div className='w-456 h-239 flex flex-col items-center rounded-8 shadow-xl bg-white pb-15'>
      <PromptHeader bgColor={'bg-red-red20'} onCancel={onClose} />
      <Image src={PromptWarning} className='mt-19 mb-16' width={22} height={19} alt='PromptWarning' />
      <h1 className='alert-cap text-gray-grayscale50 text-center mb-12'>
        {label.split('\\n').map((line, index) => (
          <p key={index} className='leading-25'>
            {line}
          </p>
        ))}
      </h1>

      {/* 입력 필드 */}
      <input
        className={`w-235 border-[0.5px] outline-none px-8 rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30 border-${
          secure ? 'gray-grayscale50' : 'gray-grayscale30'
        } H4-caption`}
        placeholder='보안 코드를 입력하세요'
        type='password'
        value={secure}
        onChange={(e) => setSecure(e.target.value)}
      />

      {/* 오류 메시지 표시 */}
      {errorMessage && <p className='text-red-red20 caption-2 text-center mt-5'>{errorMessage}</p>}

      <div className='ml-auto mt-auto'>
        <AlertBtn label={'취소'} onClick={onClose} hoverColor={variant} />
        <AlertBtn label={'확인'} onClick={handleConfirm} hoverColor={variant} />
      </div>
    </div>
  );
};

export default SecureConfirmPrompt;
