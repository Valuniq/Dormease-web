'use client';
import React from 'react';
import Checked from '@public/images/Checked.png';
import UnChecked from '@public/images/UnChecked.png';
import UnCheckedDisabled from '@public/images/UnCheckedDisabled.png';
import Image from 'next/image';

type Props = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  disabled?: boolean;
};

const Checkbox = ({ isChecked, setIsChecked, disabled }: Props) => {
  return (
    <Image
      className={`${disabled ? 'cursor-default' : 'cursor-pointer'}`}
      src={isChecked ? Checked : disabled ? UnCheckedDisabled : UnChecked}
      alt={isChecked ? 'Checked' : disabled ? 'UnChecked' : 'UnCheckedDisabled'}
      width={19.5}
      height={19.5}
      onClick={(event) => {
        if (!disabled) {
          event.stopPropagation();
          setIsChecked(!isChecked);
        }
      }}
    />
  );
};

export default Checkbox;
