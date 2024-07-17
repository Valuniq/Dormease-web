'use client';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import Image from 'next/image';
import Union from '@public/images/Union.png';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import '@/styles/editor.css';
import useConfirmDialog from '@/hooks/useConfirmDialog';
import BackDrop from '../../BackDrop/Backdrop';

type Props = {
  title: string;
  writer: string;
  content: string;
  isPinned: boolean;
  createdDate: string;
  modifiedDate: string;
  fileLists: { fileName: string; file: File }[];
  handleDelete: () => void;
};

const NoticeDetail = ({
  title,
  writer,
  isPinned,
  content,
  fileLists,
  createdDate,
  modifiedDate,
  handleDelete,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog(
    '공지사항을 삭제하시겠습니까?',
    handleDelete,
    'red',
  );

  return (
    <>
      {' '}
      {!!ConfirmDialogComponent && (
        <BackDrop children={ConfirmDialogComponent} isOpen={!!ConfirmDialogComponent} />
      )}{' '}
      <div className='w-[1200px] px-12'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-end'>
            <h1 className='H0 text-gray-grayscale50 mr-8'>공지사항</h1>
            {isPinned && (
              <>
                <h2 className='text-nowrap mr-4 H4 text-blue-blue20 mb-8'>최상단 고정</h2>
                <Image src={Union} width={18} height={18} className='mb-20 object-contain ' alt='pin' />
              </>
            )}
          </div>
          <div className='w-278 flex justify-between'>
            <BtnMidVariant label={'수정하기'} disabled={false} variant={'gray'} className='mr-12' />
            <BtnMidVariant onClick={showConfirmDialog} label={'삭제'} disabled={false} variant={'red'} />
          </div>
        </div>
        <div className='pt-21 pb-24 border-y-1 border-y-gray-grayscale50'>
          <div className='pb-21 pl-12 flex items-center'>
            <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'> {title}</h1>
          </div>
          <div className='pl-12 flex items-center justify-between py-13 border-y border-gray-grayscale30 border-opacity-30'>
            <div className='flex items-center'>
              <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>작성자</h1>
              <h1 className='text-nowrap H4 text-gray-grayscale40'>{writer}</h1>
            </div>
            <div className='flex items-center cation2 text-gray-grayscale40'>
              <div className='flex items-center mr-30 text-nowrap'>
                <h1 className='mr-19 '>작성일</h1>
                <h1>{createdDate}</h1>
              </div>
              <div className='flex items-center text-nowrap'>
                <h1 className='mr-19 '>수정일</h1>
                <h1>{modifiedDate}</h1>
              </div>
            </div>
          </div>
          <div className='h-450 p-17 overflow-y-auto border-1 border-gray-grayscale30 border-opacity-30 rounded-8 my-23'>
            <div dangerouslySetInnerHTML={{ __html: content }} className='editor-content'></div>
          </div>
          <div className='pl-12 flex items-center pt-23 border-t-1 border-y-gray-grayscale30 border-opacity-30'>
            <h1 className='H4 text-gray-grayscale50 mr-20 text-nowrap'>첨부파일</h1>
            {fileLists && fileLists.length > 0 ? (
              <>
                {fileLists.map((file, index) => (
                  <ul key={index} className='mr-10'>
                    {file.fileName}
                  </ul>
                ))}
              </>
            ) : (
              <h2 className='H4 text-gray-grayscale30'>첨부파일이 없습니다.</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
