'use client';
import React from 'react';

type Props = {
  placeholder: string;
  input: string;
  setInput?: (input: string) => void;
};

const MediumInputText = ({ placeholder, input, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput && setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50 ' : 'border-b-gray-grayscale20'} H4  focus:border-b-gray-grayscale50 w-260 h-26 border-b-1 placeholder:text-gray-grayscale20 focus:outline-none pb-6 text-gray-grayscale50 `}
      placeholder={placeholder}
      type='text'
      value={input}
      onChange={handleChange}
      style={{ backgroundColor: 'inherit' }}
    />
  );
};

export default MediumInputText;
