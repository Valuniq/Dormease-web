import { useState } from 'react';

type Props = {
  input: string;
  setInput: (id: string) => void;

  placeholder: string;
};

const CalendarInputText = ({ input, setInput, placeholder }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50' : 'border-b-gray-grayscale20'}  border-b-3 outline-none focus:border-b-gray-grayscale50 px-2 w-911 h-64  text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      type='text'
      value={input}
      onChange={handleChange}
    />
  );
};

export default CalendarInputText;
