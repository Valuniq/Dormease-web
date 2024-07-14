'use client';
import { useState } from 'react';

type Props = {
  input: string;
  setInput: (id: string) => void;

  placeholder: string;
};

const JoinSettingInputText = ({ input, setInput, placeholder }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`H4 pb-3 border-b-1 outline-none px-2 w-[1295px] h-28 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      placeholder={placeholder}
      type='text'
      value={input}
      onChange={handleChange}
    />
  );
};

export default JoinSettingInputText;
