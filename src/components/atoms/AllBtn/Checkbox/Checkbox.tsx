import React from 'react';
import Checked from '@public/images/Checked.png';
import UnChecked from '@public/images/UnChecked.png';
import Image from 'next/image';

type Props = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
};

const Checkbox = ({ isChecked, setIsChecked }: Props) => {
  return (
    <Image
      className='cursor-pointer'
      src={isChecked ? Checked : UnChecked}
      alt={isChecked ? 'Checked' : 'UnChecked'}
      width={19.5}
      height={19.5}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
};

export default Checkbox;
