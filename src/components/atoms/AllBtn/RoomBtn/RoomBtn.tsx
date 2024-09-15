import React from 'react';
import CloseBtnRed from '@public/images/CloseBtnRed.svg';
import TextBoxes from '../../InputText/JoinSettingEntryTextBoxes/TextBoxes';
import BtnMiniVariant from '../BtnMiniVariant/BtnMiniVariant';

type Props = {
  selected?: boolean;
  hovered: boolean;
  floorInput: string;
  setFloorInput: (value: string) => void;
  startInput: string;
  setStartInput: (value: string) => void;
  endInput: string;
  setEndInput: (value: string) => void;
  isOne: boolean;
  pressOkBtn: boolean;
  deleteDetailRoom: () => void;
  readOnly: boolean[];
  handleCreate?: () => void;
  handleDuplicate?: () => void;
  duplicateDisabled?: boolean;
};

const RoomBtn = ({
  selected = false,
  hovered = false,
  floorInput,
  setFloorInput,
  startInput,
  setStartInput,
  endInput,
  setEndInput,
  isOne,
  pressOkBtn,
  deleteDetailRoom,
  readOnly,
  handleCreate,
  handleDuplicate,
  duplicateDisabled,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`group flex justify-between items-center w-403 h-52 rounded-r-8 rounded-l-50 ${
        !isOne ? (hovered ? 'bg-gray-grayscale5' : 'hover:bg-gray-grayscale5 hover:hover-transition') : ''
      } ${readOnly && 'cursor-pointer'} `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          deleteDetailRoom();
        }}
      >
        <CloseBtnRed
          className={`ml-21 opacity-0 ${
            !isOne
              ? hovered
                ? 'opacity-100 cursor-pointer'
                : 'group-hover:opacity-100 group-hover:hover-transition'
              : ''
          }`}
        />
      </div>
      <div
        className={`flex items-center ${selected && 'bg-blue-blue15 py-9 px-14 rounded-8'} ${
          !isOne && 'hover:bg-gray-grayscale5 hover:hover-transition'
        }`}
      >
        <TextBoxes
          input={floorInput}
          setInput={setFloorInput}
          placeholder='층'
          type='textBox7'
          readOnly={readOnly[0]}
          maxLength={2}
        />
        <h5 className='Caption2 text-gray-grayscale50 ml-4 mr-17'>층</h5>
        <TextBoxes
          input={startInput}
          setInput={setStartInput}
          placeholder='시작'
          type='textBox7'
          readOnly={readOnly[1]}
          maxLength={2}
        />
        <h5 className='Caption2 text-gray-grayscale50 mx-6'>-</h5>
        <TextBoxes
          input={endInput}
          setInput={setEndInput}
          placeholder='끝'
          type='textBox7'
          readOnly={readOnly[2]}
          maxLength={2}
        />
        <div className='w-22'></div>
        {pressOkBtn ? (
          <BtnMiniVariant
            label='복제'
            disabled={duplicateDisabled || false}
            selected={false}
            variant='blue'
            onClick={(e) => {
              e.stopPropagation();
              handleDuplicate && handleDuplicate();
            }}
          />
        ) : (
          <BtnMiniVariant
            label={isOne ? '확인' : '추가'}
            disabled={floorInput === '' || startInput === '' || endInput === '' || startInput > endInput}
            selected={false}
            variant='blue'
            onClick={(e) => {
              e.stopPropagation();
              handleCreate && handleCreate();
            }}
          />
        )}
      </div>
      <div />
    </div>
  );
};

export default RoomBtn;
