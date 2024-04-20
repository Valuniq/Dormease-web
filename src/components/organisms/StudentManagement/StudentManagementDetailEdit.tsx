import CheckFileBtn from '@/components/atoms/AllBtn/CheckFileBtn/CheckFileBtn';
import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
import React from 'react';

type Props = {
  isEdit?: boolean;
  label: string;
  text: string | number;
  FileProps?: FileProps;
  CheckboxProps?: CheckboxProps;
  StringProps?: StringProps;
};

type FileProps = {
  value: File | null;
};

type CheckboxProps = {
  value: boolean | null;
  setIsChecked: (isChecked: boolean) => void;
};

type StringProps = {
  value: File | null;
  setInput: (id: string) => void;
};

const StudentManagementDetailEdit = ({ isEdit, label, text, value, type, setIsChecked, setInput }: Props) => {
  return (
    <div className='flex text-left items-center flex-grow'>
      <h4 className='H4-caption min-w-205 text-gray-grayscale50'>{label}</h4>
      {isEdit && type === 'file' ? (
        <>
          <CheckFileBtn label='파일수정' />
          <div className='border-b-1 border-gray-grayscale40 ml-10'>{text}</div>
        </>
      ) : isEdit && type === 'checkbox' && typeof value === 'boolean' && setIsChecked ? (
        <>
          <div className='H4 text-gray-grayscale50 mr-12'>{text === 'O' || text === 'X' ? 'O' : '수령'}</div>
          <Checkbox isChecked={value} setIsChecked={setIsChecked} />
        </>
      ) : isEdit && type === 'string' && typeof value === 'string' && setInput ? (
        <MediumInputText placeholder='' input={value} setInput={setInput} />
      ) : type === 'file' ? (
        <CheckFileBtn label='파일보기' />
      ) : (
        <h4 className='H4 text-gray-grayscale50'>{text}</h4>
      )}
    </div>
  );
};

export default StudentManagementDetailEdit;
