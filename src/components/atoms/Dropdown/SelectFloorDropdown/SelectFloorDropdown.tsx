import React from 'react';
import Dropdown from '../../../../../public/images/Dropdown.svg';
import FloorBtn from '../../AllBtn/FloorBtn/FloorBtn';

type Props = {
  isOn: boolean;
  select: string;
  list: string[];
  setSelect: (data: string) => void;
};

const SelectFloorDropdown: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  isOn,
  select,
  list,
  setSelect,
  ...props
}) => {
  return (
    <div className='flex flex-col items-center'>
      <button {...props} className='flex justify-center items-center w-75 h-41 rounded-5 bg-gray-grayscale5'>
        {select}
        <Dropdown className={`${isOn && 'rotate-180'} ml-10`} />
      </button>
      {isOn && (
        <div className='mt-12 py-3 w-75 rounded-5 bg-gray-grayscale5 text-center'>
          {list.map((data, index) => {
            return (
              <div key={index} className='pt-3 pb-3'>
                <FloorBtn label={data} disabled={false} selected={select === data} onClick={() => setSelect(data)} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectFloorDropdown;
