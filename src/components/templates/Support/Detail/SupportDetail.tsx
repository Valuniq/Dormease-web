'use client';
import React from 'react';
import Image from 'next/image';
import Union from '@public/images/Union.png';
import BtnMidVariant from '@/components/atoms/AllBtn/BtnMidVariant/BtnMidVariant';
import '@/styles/editor.css';
import useConfirmDialog from '@/hooks/useConfirmDialog';
import { useRouter } from 'next/navigation';
import { supportDetailResponse } from '@/types/support';
import FileClip from '@public/images/FileClip.png';
import { FAQEditRoutes } from '@/constants/navigation';

type Props = {
  data: supportDetailResponse;
  handleDelete: () => void;
};

const SupportDetail = ({ data, handleDelete }: Props) => {
  const router = useRouter();

  const { showConfirmDialog, ConfirmDialogComponent } = useConfirmDialog(
    'FAQ를 삭제하시겠습니까?',
    handleDelete,
    'red',
  );

  return (
    <>
      {!!ConfirmDialogComponent && ConfirmDialogComponent}
      <div className='w-[1200px] px-12'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-end'>
            <h1 className='H0 text-gray-grayscale50 mr-8'>FAQ</h1>
            {data.information.pinned && (
              <>
                <h2 className='text-nowrap mr-4 H4 text-blue-blue20 mb-8'>최상단 고정</h2>
                <Image src={Union} width={18} height={18} className='mb-20 object-contain ' alt='pin' />
              </>
            )}
          </div>
          <div className='w-278 flex justify-between'>
            <BtnMidVariant
              onClick={() => router.push(FAQEditRoutes)}
              label={'수정하기'}
              disabled={false}
              variant={'gray'}
              className='mr-12'
            />
            <BtnMidVariant onClick={showConfirmDialog} label={'삭제'} disabled={false} variant={'red'} />
          </div>
        </div>
        <div className='pt-21 pb-24 border-y-1 border-y-gray-grayscale50'>
          <div className='pb-21 pl-12 flex items-center'>
            <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'> {data.information.title}</h1>
          </div>
          <div className='pl-12 flex items-center justify-between py-13 border-y border-gray-grayscale30 border-opacity-30'>
            <div className='flex items-center'>
              <h1 className='mr-40 text-nowrap H4 text-gray-grayscale50'>작성자</h1>
              <h1 className='text-nowrap H4 text-gray-grayscale40'>{data.information.writer}</h1>
            </div>
            <div className='flex items-center cation2 text-gray-grayscale40'>
              <div className='flex items-center mr-30 text-nowrap'>
                <h1 className='mr-19 '>작성일</h1>
                <h1>{data.information.createdDate}</h1>
              </div>
              <div className='flex items-center text-nowrap'>
                <h1 className='mr-19 '>수정일</h1>
                <h1>{data.information.modifiedDate}</h1>
              </div>
            </div>
          </div>
          <div className='h-450 p-17 overflow-y-auto border-1 border-gray-grayscale30 border-opacity-30 rounded-8 my-23'>
            <div dangerouslySetInnerHTML={{ __html: data.information.content }} className='editor-content'></div>
          </div>
          <div className='pl-12 flex items-center pt-23 border-t-1 border-y-gray-grayscale30 border-opacity-30'>
            <h1 className='H4 text-gray-grayscale50 mr-20 text-nowrap'>첨부파일</h1>
            {data.information.fileList && data.information.fileList.length > 0 ? (
              <>
                {data.information.fileList.map((file, index) => (
                  <ul key={index} className='mr-10 flex align-center'>
                    <a
                      target='_blank'
                      className='mr-4 border-b border-gray-grayscale50'
                      href={file.fileUrl}
                      download={file.originalFileName}
                    >
                      {file.originalFileName}
                    </a>
                    <Image width={16} height={15} src={FileClip} className='object-contain' alt={'FileClip'} />
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

export default SupportDetail;
