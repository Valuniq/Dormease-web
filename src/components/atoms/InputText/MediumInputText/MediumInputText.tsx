'use client';
import React from 'react';

type Props = {
  placeholder: string;
  input: string;
  setInput?: (input: string) => void;
  readOnly?: boolean;
};

const MediumInputText = ({ placeholder, input, setInput, readOnly }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput && setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50 ' : 'border-b-gray-grayscale20'} H4  focus:border-b-gray-grayscale50 w-full h-26 border-b-1 placeholder:text-gray-grayscale20 focus:outline-none pb-6 text-gray-grayscale50 `}
      placeholder={placeholder}
      type='text'
      value={input}
      onChange={handleChange}
      style={{ backgroundColor: 'inherit' }}
      readOnly={readOnly}
    />
  );
};

export default MediumInputText;
