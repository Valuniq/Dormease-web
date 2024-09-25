import DropDownBtn from '@public/images/DropDownBtn.png';
import Image from 'next/image';
import Check from '@public/images/ColorSelectCheck.svg';
import { useState } from 'react';
import { colorList } from '@/types/schedule';

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

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        <div
          className='H4-caption w-101 h-30 rounded-20 flex items-center justify-center'
          style={{ backgroundColor: colorList[select] }}
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
          {Object.keys(colorList).map((colorName, index) => (
            <ul key={index} className='mr-24'>
              <li
                className='shadow-inner w-58 h-58 rounded-full cursor-pointer'
                style={{ backgroundColor: colorList[colorName] }}
                onClick={() => handleColorSelect(colorName)}
                onMouseEnter={() => setHoverColor(colorName)}
                onMouseLeave={() => setHoverColor(null)}
              >
                {select === colorName ? (
                  <Check stroke='#000000' />
                ) : hoverColor === colorName ? (
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
