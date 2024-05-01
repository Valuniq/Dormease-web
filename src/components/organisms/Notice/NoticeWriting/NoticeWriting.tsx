import Checkbox from '@/components/atoms/AllBtn/Checkbox/Checkbox';
import React from 'react';
import Image from 'next/image';
import pinIcon from '@public/images/pinIcon.png';
import LongInputText from '@/components/atoms/InputText/LongInputText/LongInputText';
import QuillComponent from '@/lib/Quill/QuillComponent';
import CheckFileBtn from '@/components/atoms/AllBtn/CheckFileBtn/CheckFileBtn';
import FileNameDeleteBtn from '@/components/atoms/AllBtn/FileNameDeleteBtn/FileNameDeleteBtn';
import transhcan from '@public/images/transhcan.png';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  writer: string;
  isPinned: boolean;
  setIsPinned: (isPinned: boolean) => void;
  fileLists: file[];
  handleAllDelete: () => void;
};

type file = {
  fileName: string;
  File: File;
  handleDelete: () => void;
};

const NoticeWriting = ({ title, setTitle, writer, isPinned, setIsPinned, fileLists, handleAllDelete }: Props) => {
  return (
    <div className='w-[1200px] px-12'>
      <div className='flex items-center py-30 border-t-1 border-t-gray-grayscale50'>
        <div className='flex items-center'>
          <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>제 목</h1>
          <LongInputText placeholder={'제목을 입력해주세요.'} input={title} setInput={setTitle} />
        </div>
        <div className='ml-19 flex items-center'>
          <Checkbox isChecked={isPinned} setIsChecked={setIsPinned} />
          <h2 className='text-nowrap mx-18 H4-caption text-gray-grayscale50'>최상단 고정</h2>
          <Image src={pinIcon} width={13.35} height={20.14} className='object-contain rotate-[-45deg] ' alt='pin' />
        </div>
      </div>
      <div className='flex items-center py-13 border-y-1 border-y-gray-grayscale30'>
        <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>작성자</h1>
        <h1 className='text-nowrap H4 text-gray-grayscale40'>{writer}</h1>
      </div>
      <div className='flex items-center py-23 mb-50'>
        <h1 className=' h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50'>내 용</h1>
        <QuillComponent
          width='100%'
          height='430px'
          onSave={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className='flex items-center py-23 border-y-1 border-y-gray-grayscale30'>
        <h1 className='H4 text-gray-grayscale50 mr-20 text-nowrap'>첨부파일</h1>
        <CheckFileBtn label={'파일선택'} />
        <div className='ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30'>
          <FileNameDeleteBtn
            fileName={''}
            handleDelete={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </div>
        <Image src={transhcan} width={16} height={18} className='object-contain ml-13' alt='allDelete' />
      </div>
    </div>
  );
};

export default NoticeWriting;
