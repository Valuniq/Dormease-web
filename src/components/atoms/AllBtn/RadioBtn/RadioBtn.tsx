import React from 'react';

type Props = {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
};

const RadioBtn = ({ isOn, setIsOn }: Props) => {
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={`flex justify-center items-center w-21 h-21 rounded-full border-2 ${isOn ? 'border-gray-grayscale50' : 'border-gray-grayscale30'}`}
    >
      <div className={`${isOn && 'bg-blue-blue30 w-11 h-11 rounded-full'}`}></div>
    </div>
  );
};

export default RadioBtn;
