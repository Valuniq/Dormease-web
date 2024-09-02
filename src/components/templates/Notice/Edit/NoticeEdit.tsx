'use client';
import dynamic from 'next/dynamic';
import React, { forwardRef, useRef } from 'react';
import Image from 'next/image';
import pinIcon from '@public/images/pinIcon.png';
import transhcan from '@public/images/transhcan.png';

const LongInputText = dynamic(() => import('@/components/atoms/InputText/LongInputText/LongInputText'), { ssr: false });
const Checkbox = dynamic(() => import('@/components/atoms/AllBtn/Checkbox/Checkbox'), { ssr: false });
const QuillComponent = dynamic(() => import('@/lib/Quill/QuillComponent'), { ssr: false });
const CheckFileBtn = dynamic(() => import('@/components/atoms/AllBtn/CheckFileBtn/CheckFileBtn'), { ssr: false });
const FileNameDeleteBtn = dynamic(() => import('@/components/atoms/AllBtn/FileNameDeleteBtn/FileNameDeleteBtn'), {
  ssr: false,
});

type Props = {
  title: string;
  setTitle: (title: string) => void;
  writer?: string;
  isPinned: boolean;
  setIsPinned: (isPinned: boolean) => void;
  fileLists: { fileId: number; originalFileName: string; fileUrl: string; file?: File }[];
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: (fileId: number) => void;
  handleAllDelete: () => void;
  handleDeleteImage: (imageId: number) => void;
  setEditorHtml: (content: string) => void;
  editorContent: string;
};

const NoticeEdit = forwardRef<HTMLDivElement, Props>(
  (
    {
      title,
      setTitle,
      writer,
      isPinned,
      setIsPinned,
      fileLists,
      handleFileChange,
      handleDeleteFile,
      handleAllDelete,
      handleDeleteImage,
      setEditorHtml,
      editorContent,
    },
    ref,
  ) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
      <div ref={ref} className='w-[1200px] px-12'>
        <div className='flex items-center py-30 border-t-1 border-t-gray-grayscale50'>
          <div className='flex items-center'>
            <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>제 목</h1>
            <LongInputText placeholder={'제목을 입력해주세요.'} input={title} setInput={setTitle} />
          </div>
          <div className='ml-19 flex items-center'>
            <Checkbox isChecked={isPinned} setIsChecked={setIsPinned} />
            <h2 className='text-nowrap mx-18 H4-caption text-gray-grayscale50'>최상단 고정</h2>
            <Image src={pinIcon} width={13.35} height={20.14} className='object-contain rotate-[-45deg]' alt='pin' />
          </div>
        </div>
        <div className='flex items-center py-13 border-y-1 border-y-gray-grayscale30'>
          <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>작성자</h1>
          <h1 className='text-nowrap H4 text-gray-grayscale40'>{writer}</h1>
        </div>
        <div className='flex items-center py-23 mb-50'>
          <h1 className=' h-430 items-center flex mr-51 text-nowrap H4 text-gray-grayscale50'>내 용</h1>
          <QuillComponent width='100%' height='430px' setEditorHtml={setEditorHtml} initialContent={editorContent} />
        </div>
        <div className='flex items-center py-23 border-y-1 border-y-gray-grayscale30'>
          <h1 className='H4 text-gray-grayscale50 mr-20 text-nowrap'>첨부파일</h1>
          <CheckFileBtn label={'파일선택'} onClick={() => fileInputRef.current?.click()} />
          <input type='file' ref={fileInputRef} className='hidden' multiple onChange={handleFileChange} />
          <div className='overflow-scroll noti-file-scrollbar  ml-20 w-[917px] h-34 rounded-5 flex items-center justify-start px-10 border-1 border-gray-grayscale30'>
            {fileLists.map((file, index) => (
              <ul className='mr-10' key={index}>
                <FileNameDeleteBtn
                  fileName={file.originalFileName}
                  handleDelete={() => handleDeleteFile(file.fileId)}
                />
              </ul>
            ))}
          </div>
          <Image
            src={transhcan}
            width={16}
            height={18}
            className='object-contain ml-13 cursor-pointer'
            alt='allDelete'
            onClick={handleAllDelete}
          />
        </div>
      </div>
    );
  },
);

NoticeEdit.displayName = 'NoticeEdit';

export default NoticeEdit;