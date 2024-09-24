import DropDownBtn from '@public/images/DropDownBtn.png';
import Image from 'next/image';
import Check from '@public/images/ColorSelectCheck.svg';
import { useState } from 'react';

type Props = {
  isOn: boolean;
  onColorDropdownClick: () => void;
  select: string;
  setSelect: (select: string) => void;
  setIsOn: (isOn: boolean) => void;
};

const ColorDropDown = ({ isOn, onColorDropdownClick, select, setSelect, setIsOn }: Props) => {
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelect(color);
    setIsOn(false);
  };

  const colorList = [
    { name: 'GREY', value: 'bg-gray-grayscale5' },
    { name: 'RED', value: 'bg-red-red10' },
    { name: 'GREEN', value: 'bg-green-green10' },
    { name: 'YELLOW', value: 'bg-orange-orange' },
    { name: 'BLUE', value: 'bg-blue-blue20' },
  ];

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        <div
          className={`H4-caption w-101 h-30 rounded-20 flex items-center justify-center ${colorList.find((color) => color.name === select)?.value}`}
          onClick={onColorDropdownClick}
        >
          색상
          <Image
            width={13}
            height={13}
            className={`${isOn ? 'rotate-180' : ''} object-contain ml-9`}
            src={DropDownBtn}
            alt='DropDownBtn'
          />
        </div>
      </button>
      {isOn && (
        <div
          className='absolute z-[10] flex items-center px-7 w-400 h-72 rounded-36 mt-7 bg-white'
          style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)' }}
        >
          {colorList.map((color, index) => (
            <ul key={index} className='mr-24'>
              <li
                className={`shadow-inner w-58 h-58 rounded-full cursor-pointer ${color.value}`}
                onClick={() => handleColorSelect(color.name)}
                onMouseEnter={() => setHoverColor(color.name)}
                onMouseLeave={() => setHoverColor(null)}
              >
                {select === color.name ? (
                  <Check stroke='#000000' />
                ) : hoverColor === color.name ? (
                  <Check stroke='#999999' />
                ) : null}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorDropDown;
