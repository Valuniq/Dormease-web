import React from 'react';
import CheckFileBtn from '@/components/atoms/AllBtn/CheckFileBtn/CheckFileBtn';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import ArrowDown from '@public/images/ArrowDown.svg';
import RelocationDropdown from '@/components/atoms/Dropdown/RelocationDropdown/RelocationDropdown';
import PointBar from '@/components/atoms/InputText/PointBar/PointBar';
import BtnMiniVariant from '@/components/atoms/AllBtn/BtnMiniVariant/BtnMiniVariant';

type Props = {
  isEdit?: boolean;
  label: string;
  text?: string | number;
  value?: string | number | boolean | File | null;
  type?: 'file' | 'checkbox' | 'string' | 'building' | 'roomNumber' | 'bedNumber';
  setIsChecked?: (isChecked: boolean) => void;
  input?: string;
  setInput?: (id: string) => void;
  right?: boolean;
  isBuilding?: boolean;
  list?: string[];
  select?: string;
  setSelect?: (isOn: string) => void;
};

const StudentManagementDetail = ({
  isEdit,
  label,
  text,
  value,
  type,
  setIsChecked,
  input,
  setInput,
  right,
  isBuilding,
  list,
  select,
  setSelect,
}: Props) => {
  return (
    <div className='flex text-left items-center flex-grow'>
      <h4 className='H4-caption min-w-205 text-gray-grayscale50'>{label}</h4>
      <div className={`${right ? 'flex items-center flex-grow justify-end' : 'flex items-center'}`}>
        {isEdit && type === 'file' ? (
          <>
            <CheckFileBtn label='파일수정' />
            <div className='border-b-1 border-gray-grayscale40 ml-10 w-123 H4 text-gray-grayscale50 overflow-hidden text-nowrap'>
              {text}
            </div>
          </>
        ) : isEdit && type === 'checkbox' && typeof value === 'boolean' && setIsChecked ? (
          <>
            <div className='H4 text-gray-grayscale50 mr-12'>{text === 'O' || text === 'X' ? 'O' : '수령'}</div>
            <Checkbox isChecked={value} setIsChecked={setIsChecked} />
          </>
        ) : isEdit && type === 'string' && typeof input === 'string' && setInput ? (
          <MediumInputText placeholder='' input={input} setInput={setInput} />
        ) : isEdit && type === 'building' ? (
          <div className='flex relative'>
            <h4 className='H4 text-gray-grayscale50 mr-2'>{text}</h4>
            <button className={`${isBuilding && 'rotate-90'}`}>
              <ArrowDown />
            </button>
            {isBuilding && list && typeof select === 'string' && setSelect && (
              <div className='absolute left-full bottom-0'>
                <RelocationDropdown list={list} select={select} setSelect={setSelect} />
              </div>
            )}
          </div>
        ) : isEdit && type === 'roomNumber' && typeof input === 'string' && setInput ? (
          <div className='flex items-center'>
            <PointBar input={input} setInput={setInput} />
            <h4 className='H4 text-gray-grayscale50 ml-6 mr-12'>호</h4>
            <BtnMiniVariant label='재배치' disabled={false} selected={false} variant='blue' />
          </div>
        ) : isEdit && type === 'bedNumber' && typeof input === 'string' && setInput ? (
          <div className='flex items-center'>
            <PointBar input={input} setInput={setInput} readonly />
            <h4 className='H4 text-gray-grayscale50 ml-6 mr-12'>번</h4>
          </div>
        ) : type === 'file' ? (
          <CheckFileBtn label='파일보기' />
        ) : (
          <h4 className='H4 text-gray-grayscale50'>{text}</h4>
        )}
      </div>
    </div>
  );
};

export default StudentManagementDetail;
