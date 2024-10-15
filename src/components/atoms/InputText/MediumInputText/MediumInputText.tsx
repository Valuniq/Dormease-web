'use client';
import React from 'react';

type Props = {
  placeholder: string;
  input: string;
  setInput?: (input: string) => void;
  readOnly?: boolean;
  maxLength?: number;
};

const MediumInputText = ({ placeholder, input, setInput, readOnly, maxLength }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
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
      spellCheck={false}
      maxLength={maxLength}
    />
  );
};

export default MediumInputText;
