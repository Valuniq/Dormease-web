import React from 'react';
import KebabMenu from '@public/images/KebabMenu.svg';
import CloseBtnRed from '@public/images/CloseBtnRed.svg';
import TextBoxes from '../../InputText/JoinSettingEntryTextBoxes/TextBoxes';
import BtnMiniVariant from '../BtnMiniVariant/BtnMiniVariant';

type Props = {
  selected: boolean;
  hovered: boolean;
  floorInput: string;
  setFloorInput: (id: string) => void;
  endInput: string;
  setEndInput: (id: string) => void;
  isOne: boolean;
  pressOkBtn: boolean;
};

const RoomBtn = ({
  selected = false,
  hovered = false,
  floorInput,
  setFloorInput,
  endInput,
  setEndInput,
  isOne,
  pressOkBtn,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`group flex justify-between items-center w-403 h-52 rounded-r-8 rounded-l-50 ${
        !isOne ? (hovered ? 'bg-gray-grayscale5' : 'hover:bg-gray-grayscale5 hover:hover-transition') : ''
      } `}
    >
      <CloseBtnRed
        className={`ml-21 opacity-0 ${
          !isOne ? (hovered ? 'opacity-100' : 'group-hover:opacity-100 group-hover:hover-transition') : ''
        }`}
      />
      <div
        className={`flex items-center ${selected ? (hovered ? '' : 'bg-blue-blue15 py-9 px-14 rounded-8 group-hover:bg-gray-grayscale5 group-hover:hover-transition:') : ''}`}
      >
        <TextBoxes input={floorInput} setInput={setFloorInput} placeholder='층' type='textBox7' />
        <h5 className='Caption2 text-gray-grayscale50 ml-4 mr-17'>층</h5>
        <TextBoxes input='1' setInput={(id) => {}} placeholder='시작' type='textBox7' readOnly={true} />
        <h5 className='Caption2 text-gray-grayscale50 mx-6'>-</h5>
        <TextBoxes input={endInput} setInput={setEndInput} placeholder='끝' type='textBox7' />
        <div className='w-22'></div>
        {pressOkBtn ? (
          <BtnMiniVariant label='복제' disabled={false} selected={false} variant='blue' />
        ) : (
          <BtnMiniVariant
            label='확인'
            disabled={floorInput === '' || endInput === ''}
            selected={false}
            variant='blue'
          />
        )}
      </div>
      <KebabMenu
        className={`mr-11 opacity-0 ${
          !isOne ? (hovered ? 'opacity-100' : 'group-hover:opacity-100 group-hover:hover-transition') : ''
        }`}
      />
    </div>
  );
};

export default RoomBtn;
