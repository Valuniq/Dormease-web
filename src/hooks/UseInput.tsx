import React, { useState } from 'react';

type UseInputProps = {
  initialValue: string;
};

const UseInput = ({ initialValue }: UseInputProps) => {
  const [input, setInput] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  // 입력 필드에서 포커스가 나갔을 때 실행
  // focus 상태에 따라 placeholder를 없애야 하기 때문에 필요
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return {
    input, // 입력 필드의 값
    setInput, // 입력 필드의 값을 설정하는 함수
    isFocused, // 입력 필드의 포커스 여부
    handleFocus, // 입력 필드에 포커스를 설정하는 함수
    handleBlur, // 입력 필드의 포커스를 해제하는 함수
    handleChange, // 입력 필드의 값이 변경될 때 실행되는 함수
  };
};

export default UseInput;
