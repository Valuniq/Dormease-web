import React from 'react';
import Dropdown from '../../../../../public/images/Dropdown.svg';
import GrayBtn from '../../AllBtn/GrayBtn/GrayBtn';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  label: string;
  isOn: boolean;
  list: string[];
  onOptionClick: (data: string) => void;
};

const RelocationDropdown: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  isOn,
  list,
  onOptionClick,
  ...props
}) => {
  return (
    <div className='flex flex-col items-center w-155 h-306 rounded-8 bg-white'>
      <div className='mt-29 mb-9 text-center'>
        {list.map((data, index) => {
          return (
            <div key={index} className='pb-11'>
              <GrayBtn label={data} onClick={() => onOptionClick(data)} />
            </div>
          );
        })}
      </div>
      <BtnMidVariant label='재배치' variant='red' />
    </div>
  );
};

export default RelocationDropdown;
