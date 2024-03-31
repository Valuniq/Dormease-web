import React from 'react';
import Dropdown from '../../../../../public/images/Dropdown.svg';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  label: string;
  isOn: boolean;
  list: string[];
  onOptionClick: (data: string) => void;
};

const SelectBuildingDropdown: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  isOn,
  list,
  onOptionClick,
  ...props
}) => {
  return (
    <div className='flex flex-col items-center'>
      <button {...props} className='flex justify-between items-center px-13 w-164 h-41 rounded-5 bg-gray-grayscale5'>
        {label}
        <Dropdown className={`${isOn && 'rotate-180'}`} />
      </button>
      {isOn && (
        <div className='mt-12 py-3 w-164 rounded-5 bg-gray-grayscale5 text-center'>
          {list.map((data, index) => {
            return (
              <div key={index} className='pt-10 pb-10'>
                <BtnMidVariant label={data} variant='white' disabled={false} onClick={() => onOptionClick(data)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectBuildingDropdown;
