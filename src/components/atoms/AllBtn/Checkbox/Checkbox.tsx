import React from 'react';
import Checked from '../../../../../public/images/Checked.png';
import UnChecked from '../../../../../public/images/UnChecked.png';
import Image from 'next/image';

type Props = {
  isOn: boolean;
  onClick: () => void;
};

const Checkbox: React.FC<Props> = ({ isOn, onClick }) => {
  return (
    <Image
      className='cursor-pointer'
      src={isOn ? Checked : UnChecked}
      alt={isOn ? 'Checked' : 'UnChecked'}
      width={19.5}
      height={19.5}
      onClick={onClick}
    />
  );
};

export default Checkbox;
