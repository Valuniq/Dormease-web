import React from 'react';
import Dropdown from '@public/images/Dropdown.svg';
import BtnMidVariant from '../../AllBtn/BtnMidVariant/BtnMidVariant';

type Props = {
  isOn: boolean;
  list: string[];
  select: string;
  setSelect: (select: string) => void;
  setIsOn: (isOn: boolean) => void;
};

const SelectBuildingDropdown = ({
  isOn,
  list,
  select,
  setSelect,
  setIsOn,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex flex-col items-center'>
      <button
        {...props}
        onClick={() => setIsOn(!isOn)}
        className='H4 flex justify-between items-center px-13 w-164 h-41 rounded-5 bg-gray-grayscale5'
      >
        {select}
        <Dropdown className={`${isOn && 'rotate-180'}`} />
      </button>
      {isOn && (
        <div className='mt-12 py-3 w-164 rounded-5 bg-gray-grayscale5 text-center'>
          {list.map((data, index) => {
            return (
              <div key={index} className='pt-10 pb-10'>
                <BtnMidVariant
                  label={data}
                  variant='white'
                  disabled={false}
                  selected={select === data}
                  onClick={() => setSelect(data)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectBuildingDropdown;
