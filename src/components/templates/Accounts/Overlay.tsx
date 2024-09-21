import React from 'react';

type Props = { isActive: boolean };

const Overlay = ({ isActive }: Props) => {
  return (
    <div
      className={`absolute inset-0 bg-black rounded-10 transition-opacity duration-500 ${
        isActive ? 'opacity-0' : 'opacity-25'
      }`}
    ></div>
  );
};

export default Overlay;
